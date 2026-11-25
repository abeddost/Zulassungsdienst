import Link from "next/link";
import { href, page, serviceIds, ui } from "@/content";
import type { PageDoc } from "@/content/types";
import { PRICES_ARE_DRAFT, prices, priceText } from "@/lib/prices";
import { Amount } from "./price-list";
import { addressLine, site, type Lang } from "@/lib/site";
import { blockHeading, Blocks, headingId } from "./blocks";
import { formatDate } from "./chrome";
import { ArrowIcon, CallButton, PinIcon, WhatsAppButton } from "./ui";

/** Shared dark ground behind page heroes. The home page layers the animated piece on top. */
export function HeroGround() {
  return (
    <div aria-hidden="true" className="hero-ground pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid absolute inset-0" />
    </div>
  );
}

export function ContentPage({ doc, lang }: { doc: PageDoc; lang: Lang }) {
  const t = ui[lang];
  const p = doc[lang];
  const toc = p.blocks.map(blockHeading).filter((h): h is string => Boolean(h));
  const isLegal = doc.kind === "legal";

  return (
    <>
      <section className="relative isolate bg-neutral text-neutral-content">
        <HeroGround />
        <div className="wrap relative pt-10 pb-14 md:pt-14 md:pb-20">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-content/55">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={href("home", lang)} className="underline-offset-4 hover:text-neutral-content hover:underline focus-visible:outline-2 focus-visible:outline-white">
                  {t.home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-neutral-content/80">
                {p.nav}
              </li>
            </ol>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow rise text-secondary">{p.eyebrow}</p>
            <h1 className="rise rise-2 mt-4 text-[2.3rem] leading-[1.06] font-semibold md:text-[3.4rem]">{p.h1}</h1>
            <p className="rise rise-3 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-content/75 md:text-xl">{p.lead}</p>
            {!isLegal && (
              <div className="rise rise-4 mt-9 hidden flex-wrap items-center gap-3 md:flex">
                <WhatsAppButton message={p.whatsapp} label={t.whatsapp} size="lg" />
                <CallButton label={t.callNumber} tone="dark" size="lg" />
              </div>
            )}
            {doc.price && (
              <p className="rise rise-4 mt-7 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 md:mt-8">
                <span className="eyebrow text-neutral-content/55">{t.priceFrom}</span>
                <span className="font-display text-2xl font-semibold text-secondary tabular-nums">{priceText(doc.price, lang)}</span>
                <span className="text-sm text-neutral-content/60">{prices[doc.price].includes[lang]}</span>
              </p>
            )}
          </div>
        </div>
      </section>

      <div className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16">
        <article className="min-w-0 max-w-[46rem]">
          {!isLegal && toc.length > 2 && (
            <details className="group mb-10 rounded-2xl border border-base-content/12 bg-base-200 lg:hidden">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 font-semibold [&::-webkit-details-marker]:hidden">
                {lang === "de" ? "Auf dieser Seite" : "On this page"}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true" className="size-4 transition-transform duration-200 group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <ul className="border-t border-base-content/10 px-2 py-2">
                {toc.map((h) => (
                  <li key={h}>
                    <a href={`#${headingId(h)}`} className="flex min-h-11 items-center rounded-xl px-3 text-[0.98rem] text-base-content/80 hover:bg-base-300">
                      {h}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          )}
          {doc.id === "services" && <ServiceGrid lang={lang} className="mb-14" />}
          {doc.id === "contact" && <ContactPanel lang={lang} message={p.whatsapp} className="mb-14" />}
          <Blocks blocks={p.blocks} lang={lang} />
          <p className="mt-14 border-t border-base-content/10 pt-5 text-sm text-base-content/55">
            {t.updated}: {formatDate(doc.updated, lang)}
            {PRICES_ARE_DRAFT && doc.price ? ` · ${t.draftPrices} ${formatDate(doc.updated, lang)}` : ""}
          </p>
        </article>

        {!isLegal && (
          <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
            {toc.length > 1 && (
              <nav aria-label={lang === "de" ? "Auf dieser Seite" : "On this page"} className="mb-6 hidden lg:block">
                <p className="eyebrow mb-3 text-base-content/50">{lang === "de" ? "Auf dieser Seite" : "On this page"}</p>
                <ul className="space-y-2 border-l border-base-content/15 text-[0.95rem]">
                  {toc.map((h) => (
                    <li key={h}>
                      <a href={`#${headingId(h)}`} className="-ml-px block border-l border-transparent py-0.5 pl-4 text-base-content/65 hover:border-primary hover:text-base-content focus-visible:outline-2 focus-visible:outline-primary">
                        {h}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <div className="rounded-2xl bg-neutral p-6 text-neutral-content">
              <p className="font-display text-xl leading-snug font-semibold">{t.ctaTitle}</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-neutral-content/70">{t.ctaText}</p>
              <WhatsAppButton message={p.whatsapp} label={t.whatsappShort} className="mt-5 w-full" />
              <CallButton label={t.callNumber} tone="dark" className="mt-2.5 w-full" />
            </div>
          </aside>
        )}
      </div>

      {doc.related && doc.related.length > 0 && (
        <section className="border-t border-base-content/10 bg-base-200">
          <div className="wrap py-14 md:py-20">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">{t.related}</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {doc.related.map((id) => (
                <li key={id}>
                  <PageCard id={id} lang={lang} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {!isLegal && <CtaBand lang={lang} message={p.whatsapp} />}
    </>
  );
}

export function PageCard({ id, lang }: { id: string; lang: Lang }) {
  const doc = page(id);
  const p = doc[lang];
  const arrow = (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-base-200 transition-colors duration-200 group-hover:bg-neutral group-hover:text-neutral-content">
      <ArrowIcon />
    </span>
  );
  return (
    <Link
      href={href(id, lang)}
      className="group flex h-full items-center gap-4 rounded-2xl border border-base-content/10 bg-base-100 px-4 py-3.5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-base-content/25 hover:shadow-lg hover:shadow-neutral/5 focus-visible:outline-2 focus-visible:outline-primary sm:flex-col sm:items-stretch sm:gap-0 sm:p-6"
    >
      <div className="min-w-0 flex-1 sm:flex sm:flex-col">
        <h3 className="font-display text-[1.08rem] leading-snug font-semibold sm:text-xl">{p.nav}</h3>
        <p className="mt-2 hidden flex-1 text-[0.98rem] leading-relaxed text-base-content/65 sm:block">{p.teaser ?? p.lead}</p>
        <div className="mt-1.5 sm:mt-5 sm:flex sm:items-center sm:justify-between sm:gap-4">
          {doc.price ? (
            <span className="inline-flex rounded-lg bg-secondary/35 px-2 py-0.5">
              <AmountTag id={id} lang={lang} />
            </span>
          ) : (
            <span className="text-[0.95rem] font-semibold">{ui[lang].more}</span>
          )}
          <span className="hidden sm:flex">{arrow}</span>
        </div>
      </div>
      <span className="sm:hidden">{arrow}</span>
    </Link>
  );
}

function AmountTag({ id, lang }: { id: string; lang: Lang }) {
  const key = page(id).price;
  return key ? <Amount k={key} lang={lang} size="sm" /> : null;
}

export function ServiceGrid({
  lang,
  className = "",
  exclude = [],
}: {
  lang: Lang;
  className?: string;
  exclude?: string[];
}) {
  return (
    <ul className={`grid gap-2.5 sm:grid-cols-2 sm:gap-4 ${className}`}>
      {serviceIds.filter((id) => !exclude.includes(id)).map((id) => (
        <li key={id}>
          <PageCard id={id} lang={lang} />
        </li>
      ))}
    </ul>
  );
}

export function ContactPanel({ lang, message, className = "" }: { lang: Lang; message: string; className?: string }) {
  const t = ui[lang];
  return (
    <div className={`grid gap-4 ${className}`}>
      <div className="rounded-2xl bg-neutral p-6 text-neutral-content md:p-8">
        <p className="eyebrow text-secondary">WhatsApp</p>
        <p className="mt-3 font-display text-2xl leading-snug font-semibold">
          {lang === "de" ? "Der schnellste Weg: ein Foto Ihrer Unterlagen" : "The fastest way: a photo of your documents"}
        </p>
        <p className="mt-2 max-w-xl text-neutral-content/70">{t.ctaText}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <WhatsAppButton message={message} label={t.whatsapp} size="lg" />
          <CallButton label={t.callNumber} tone="dark" size="lg" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-base-content/10 p-6">
          <p className="eyebrow text-base-content/50">{t.visit}</p>
          <address className="mt-3 text-[1.05rem] leading-relaxed font-medium not-italic">
            <span translate="no">{site.name}</span>
            <br />
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city} ({site.address.district})
          </address>
          <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-primary">
            <PinIcon className="size-4.5" /> {t.route}
          </a>
        </div>
        <div className="rounded-2xl border border-base-content/10 p-6">
          <p className="eyebrow text-base-content/50">{t.hoursTitle}</p>
          {site.hours ? (
            <ul className="mt-3 space-y-1 text-[1.05rem] font-medium tabular-nums">
              {site.hours.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.opens}-{h.closes}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-[1.05rem] leading-relaxed font-medium">{t.hoursFallback}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function CtaBand({ lang, message }: { lang: Lang; message: string }) {
  const t = ui[lang];
  return (
    <section className="relative isolate overflow-hidden bg-neutral text-neutral-content">
      <HeroGround />
      <div className="wrap relative grid items-center gap-10 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
        <div>
          <h2 className="text-3xl leading-tight font-semibold md:text-5xl">{t.ctaTitle}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-content/70">{t.ctaText}</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <WhatsAppButton message={message} label={t.whatsapp} size="lg" className="w-full md:w-auto" />
          <CallButton label={t.callNumber} tone="dark" size="lg" className="w-full md:w-auto" />
          <p className="mt-2 flex items-start gap-2 text-sm text-neutral-content/55 md:text-right">
            <PinIcon className="mt-0.5 size-4 shrink-0" /> {addressLine(lang)}
          </p>
        </div>
      </div>
    </section>
  );
}
