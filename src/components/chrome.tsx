import Link from "next/link";
import { guideIds, href, page, serviceIds, ui } from "@/content";
import { addressLine, site, telLink, waLink, type Lang } from "@/lib/site";
import { PhoneIcon, PinIcon, Plate, WhatsAppButton, WhatsAppIcon } from "./ui";

const defaultMessage: Record<Lang, string> = {
  de: "Hallo, ich habe eine Frage zur Kfz-Zulassung.",
  en: "Hello, I have a question about registering a vehicle.",
};

export function Header({ lang, otherHref }: { lang: Lang; otherHref: string }) {
  const t = ui[lang];
  const main = ["prices", "documents", "office", "contact"];
  const linkCls =
    "whitespace-nowrap rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-base-content/80 transition-colors hover:bg-base-content/5 hover:text-base-content focus-visible:outline-2 focus-visible:outline-primary";

  return (
    <header data-theme="zmk-dark" className="sticky top-0 z-40 border-b border-base-content/10 bg-base-100/97 text-base-content backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-secondary focus:px-4 focus:py-2 focus:text-secondary-content"
      >
        {t.skip}
      </a>
      <div className="wrap flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link
          href={href("home", lang)}
          className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Plate />
          <span className="hidden font-display text-[1.05rem] font-semibold tracking-tight whitespace-nowrap sm:block" translate="no">
            {site.name}
          </span>
          <span className="sr-only sm:hidden">{site.name}</span>
        </Link>

        <nav aria-label={t.menu} className="hidden items-center gap-0.5 xl:flex">
          <div className="group relative">
            <Link href={href("services", lang)} className={linkCls}>
              {t.services}
            </Link>
            <div className="invisible absolute left-0 top-full w-[34rem] pt-3 opacity-0 transition-[opacity,visibility] duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="grid grid-cols-2 gap-1 rounded-2xl border border-base-content/10 bg-base-200 p-2 shadow-xl shadow-black/40">
                {serviceIds.map((id) => (
                  <li key={id}>
                    <Link
                      href={href(id, lang)}
                      className="block rounded-xl px-3.5 py-2.5 text-[0.95rem] font-medium hover:bg-base-300 focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      {page(id)[lang].nav}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {main.map((id) => (
            <Link key={id} href={href(id, lang)} className={linkCls}>
              {id === "office" ? (lang === "de" ? "Zulassungsstelle" : "Registration office") : page(id)[lang].nav}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={otherHref}
            hrefLang={lang === "de" ? "en" : "de"}
            aria-label={t.otherLangLabel}
            className="rounded-full px-3 py-2 font-mono text-xs font-semibold tracking-wider text-base-content/70 uppercase hover:bg-base-content/5 hover:text-base-content focus-visible:outline-2 focus-visible:outline-primary"
          >
            {lang === "de" ? "EN" : "DE"}
          </Link>
          <WhatsAppButton
            message={defaultMessage[lang]}
            label={t.whatsappShort}
            className="min-h-11! px-4! text-[0.95rem]! max-md:hidden!"
          />
          <details className="group relative xl:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-base-content/15 focus-visible:outline-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
              <span className="sr-only">{t.menu}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="size-5">
                <path className="group-open:hidden" d="M4 7h16M4 12h16M4 17h16" />
                <path className="hidden group-open:block" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </summary>
            <nav
              aria-label={t.menu}
              className="absolute right-0 top-[calc(100%+0.75rem)] max-h-[calc(100dvh-6rem)] w-[min(22rem,calc(100vw-2.5rem))] overflow-y-auto overscroll-contain rounded-2xl border border-base-content/10 bg-base-200 p-3 shadow-2xl shadow-black/50"
            >
              <p className="eyebrow px-3 pb-1 pt-2 text-base-content/50">{t.services}</p>
              <ul>
                {serviceIds.map((id) => (
                  <li key={id}>
                    <Link href={href(id, lang)} className="block rounded-xl px-3 py-2.5 font-medium hover:bg-base-300">
                      {page(id)[lang].nav}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="eyebrow px-3 pb-1 pt-4 text-base-content/50">{t.guides}</p>
              <ul>
                {["prices", ...guideIds, "contact"].map((id) => (
                  <li key={id}>
                    <Link href={href(id, lang)} className="block rounded-xl px-3 py-2.5 font-medium hover:bg-base-300">
                      {page(id)[lang].nav}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const colTitle = "eyebrow mb-4 text-neutral-content/50";
  const linkCls =
    "text-neutral-content/80 underline-offset-4 transition-colors hover:text-neutral-content hover:underline focus-visible:outline-2 focus-visible:outline-white";
  return (
    <footer data-theme="zmk-dark" className="bg-neutral text-neutral-content">
      <div className="wrap grid gap-12 py-16 sm:grid-cols-2 md:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Plate size="lg" />
          <p className="mt-6 font-display text-xl font-semibold" translate="no">
            {site.name}
          </p>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-neutral-content/65">{t.footerClaim}</p>
        </div>
        <div>
          <h2 className={colTitle}>{t.services}</h2>
          <ul className="space-y-2.5 text-[0.95rem]">
            {serviceIds.map((id) => (
              <li key={id}>
                <Link href={href(id, lang)} className={linkCls}>
                  {page(id)[lang].nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={colTitle}>{t.guides}</h2>
          <ul className="space-y-2.5 text-[0.95rem]">
            {["prices", ...guideIds].map((id) => (
              <li key={id}>
                <Link href={href(id, lang)} className={linkCls}>
                  {page(id)[lang].nav}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className={`${colTitle} mt-8`}>{t.legal}</h2>
          <ul className="space-y-2.5 text-[0.95rem]">
            {["imprint", "privacy"].map((id) => (
              <li key={id}>
                <Link href={href(id, lang)} className={linkCls}>
                  {page(id)[lang].nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={colTitle}>{t.contact}</h2>
          <ul className="space-y-4 text-[0.95rem]">
            <li>
              <a href={waLink(defaultMessage[lang])} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-center gap-2.5`}>
                <WhatsAppIcon className="size-5 shrink-0" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={telLink} className={`${linkCls} inline-flex items-center gap-2.5 font-mono tabular-nums`}>
                <PhoneIcon className="size-5 shrink-0" /> {site.phone.display}
              </a>
            </li>
            <li>
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-start gap-2.5`}>
                <PinIcon className="mt-0.5 size-5 shrink-0" />
                <span>{addressLine(lang)}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-6 text-sm text-neutral-content/50 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} <span translate="no">{site.name}</span>
          </p>
          <p>
            {t.sources}, {formatDate(site.factsCheckedOn, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
}

/** Fixed call / WhatsApp bar on phones: the two actions are always one tap away. */
export function StickyBar({ lang, message }: { lang: Lang; message?: string }) {
  const t = ui[lang];
  return (
    <div data-theme="zmk-dark" className="fixed inset-x-0 bottom-0 z-40 border-t border-base-content/10 bg-base-100/95 px-3 text-base-content pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-[1fr_1.35fr] gap-2.5">
        <a
          href={telLink}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-base-content/20 font-semibold focus-visible:outline-2 focus-visible:outline-primary"
        >
          <PhoneIcon /> {t.call}
        </a>
        <a
          href={waLink(message ?? defaultMessage[lang])}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-secondary font-semibold text-secondary-content focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral"
        >
          <WhatsAppIcon /> {t.whatsappShort}
        </a>
      </div>
    </div>
  );
}

export function formatDate(iso: string, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === "de" ? "de-DE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
