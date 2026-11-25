import Link from "next/link";
import { href, page, ui } from "@/content";
import { home } from "@/content/home";
import type { Block } from "@/content/types";
import { type PriceKey, priceText } from "@/lib/prices";
import { PriceList } from "./price-list";
import { site, type Lang } from "@/lib/site";
import { Blocks } from "./blocks";
import { PlateStage, type PlateVariant } from "./hero/PlateStage";
import { CtaBand, HeroGround, ServiceGrid } from "./pages";
import { ArrowIcon, CallButton, CheckIcon, PinIcon, WhatsAppButton } from "./ui";

const homeMessage: Record<Lang, string> = {
  de: "Hallo, ich möchte ein Fahrzeug zulassen. Hier sind Fotos meiner Unterlagen:",
  en: "Hello, I would like to register a vehicle. Here are photos of my documents:",
};

const homePrices: PriceKey[] = ["registration", "addressChange", "deregistration", "shortTerm", "pickup"];

/** Section label in the editorial manner: a running number and a word. */
function Label({ n, children }: { n: string; children: string }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-base-content/55">
      <span className="rounded-[0.3rem] bg-secondary px-1.5 py-0.5 tabular-nums text-secondary-content">{n}</span>
      <span aria-hidden="true" className="h-px w-8 bg-base-content/25" />
      {children}
    </p>
  );
}

export function HomePage({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const c = home[lang];
  const faqBlock: Block = { type: "faq", h2: c.faqTitle, items: c.faq };
  const title = "reveal font-display text-[clamp(2.2rem,5.6vw,4.5rem)] leading-[1] font-semibold";
  const { district, letters, digits } = site.plate;
  const own = `${letters} ${digits}`;

  // One entry per plate type in the hero. Text comes from the content files, prices from the price list.
  const variants: PlateVariant[] = [
    {
      id: "register",
      ...c.plate.variants.register,
      price: priceText("registration", lang),
      href: href("register", lang),
      whatsapp: page("register")[lang].whatsapp,
      accent: "#3d6bff",
      spec: { strip: true, district, code: own, seals: "full" },
    },
    {
      id: "custom",
      ...c.plate.variants.custom,
      price: `+ ${priceText("customPlate", lang)}`,
      href: href("customplate", lang),
      whatsapp: page("customplate")[lang].whatsapp,
      accent: "#19b8a6",
      spec: { strip: true, district, code: "AB 123", seals: "full" },
      custom: true,
    },
    {
      id: "shortterm",
      ...c.plate.variants.shortterm,
      price: priceText("shortTerm", lang),
      href: href("shortterm", lang),
      whatsapp: page("shortterm")[lang].whatsapp,
      accent: "#f4c600",
      spec: { strip: false, district, code: "04123", seals: "full", side: { tone: "yellow", lines: ["30", "11", "26"] } },
    },
    {
      id: "export",
      ...c.plate.variants.export,
      price: priceText("export", lang),
      href: href("export", lang),
      whatsapp: page("export")[lang].whatsapp,
      accent: "#ff4d4d",
      spec: { strip: false, district, code: "123 A", seals: "full", side: { tone: "red", lines: ["15", "12", "26"] } },
    },
    {
      id: "deregister",
      ...c.plate.variants.deregister,
      price: priceText("deregistration", lang),
      href: href("deregister", lang),
      whatsapp: page("deregister")[lang].whatsapp,
      accent: "#9aa3b5",
      spec: { strip: true, district, code: own, seals: "removed" },
    },
  ];

  return (
    <>
      {/* Hero: the licence plate as a 3D object that changes with the chosen service */}
      {/* Sized to fit one screen: see .hero-screen and .hero-fit in globals.css. */}
      <section className="hero-accented hero-screen relative isolate flex flex-col justify-center overflow-hidden bg-neutral text-neutral-content">
        <HeroGround />
        <div className="hero-fit wrap relative">
          <div className="rise">
            <PlateStage
              intro={
                <>
                  <p className="eyebrow text-secondary max-md:[@media(max-height:699px)]:hidden">{c.eyebrow}</p>
                  <h1 className="mt-3 leading-[0.96] font-semibold tracking-[-0.03em] md:mt-4">
                    {c.h1[0]} <span className="text-secondary">{c.h1[1]}</span>
                  </h1>
                </>
              }
              variants={variants}
              district={district}
              waNumber={site.phone.whatsapp}
              text={{
                pick: c.plate.pick,
                letters: c.plate.letters,
                digits: c.plate.digits,
                customHint: c.plate.customHint,
                customMessage: c.plate.customMessage,
                whatsapp: t.whatsappShort,
                more: c.plate.more,
                moreShort: c.plate.moreShort,
              }}
            >
              <p className="max-w-xl text-lg leading-relaxed text-neutral-content/75">{c.lead}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <WhatsAppButton message={homeMessage[lang]} label={t.whatsapp} />
                <CallButton label={t.callNumber} tone="dark" />
              </div>
              <ul className="mt-6 hidden flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-neutral-content/75 lg:flex [@media(max-height:759px)]:hidden!">
                {c.chips.map((chip) => (
                  <li key={chip} className="flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded-full bg-secondary text-secondary-content">
                      <CheckIcon className="size-3" />
                    </span>
                    {chip}
                  </li>
                ))}
              </ul>
            </PlateStage>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="wrap py-14 md:py-28">
        <Label n="01">{t.services}</Label>
        <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16">
          <h2 className={title}>{c.servicesTitle}</h2>
          <p className="reveal text-lg leading-relaxed text-base-content/70">{c.servicesLead}</p>
        </div>
        {/* Dealer service has its own band further down, which keeps this grid at 3 x 3. */}
        <ServiceGrid lang={lang} exclude={["business"]} className="mt-8 md:mt-12 lg:grid-cols-3" />
      </section>

      {/* Steps, beside the conversation they describe */}
      <section className="border-y border-base-content/10 bg-base-200">
        <div className="wrap grid gap-12 py-14 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Label n="02">{lang === "de" ? "Ablauf" : "Process"}</Label>
            <h2 className={`${title} mt-6`}>{c.stepsTitle}</h2>
            <ol className="mt-8 border-t border-base-content/15 md:mt-12">
              {c.steps.map((step, i) => (
                <li key={step.title} className="reveal grid grid-cols-[3.5rem_1fr] gap-x-4 border-b border-base-content/15 py-7 md:grid-cols-[5rem_1fr]">
                  <span className="self-start justify-self-start bg-[linear-gradient(transparent_58%,var(--color-secondary)_58%,var(--color-secondary)_94%,transparent_94%)] px-1 font-display text-3xl leading-none font-semibold tabular-nums md:text-4xl">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-2 max-w-[48ch] text-[1.04rem] leading-relaxed text-base-content/70">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div aria-hidden="true" className="reveal hidden self-center rounded-[1.75rem] bg-neutral md:block p-2 shadow-2xl shadow-neutral/25 lg:rotate-1">
            <div className="rounded-[1.35rem] bg-[#0b141a]">
              <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3.5">
                <span className="flex size-10 items-center justify-center rounded-full bg-white">
                  <span className="font-mono text-xs font-bold text-black">{district}</span>
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[0.95rem] font-semibold text-white">{c.chatTitle}</span>
                  <span className="block truncate text-xs text-white/55">{c.chatStatus}</span>
                </span>
              </div>
              <div className="space-y-2.5 px-3.5 py-4 text-[0.95rem] leading-snug">
                {c.chat.map((m, i) => (
                  <div key={i} className={`flex ${m.from === "us" ? "justify-start" : "justify-end"}`}>
                    <div className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 ${m.from === "us" ? "rounded-tl-md bg-[#1f2c34] text-white/90" : "rounded-tr-md bg-[#144d37] text-white"}`}>
                      {m.attachment && (
                        <span className="mb-2 flex items-center gap-2.5 rounded-xl bg-black/25 px-3 py-2.5 text-xs text-white/80">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5 shrink-0">
                            <rect x="3" y="4" width="18" height="16" rx="2.5" />
                            <path d="m3 16 5-5 4 4 3-3 6 6" />
                            <circle cx="15.5" cy="9" r="1.5" />
                          </svg>
                          <span className="truncate font-mono">{m.attachment}</span>
                        </span>
                      )}
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="wrap py-14 md:py-28">
        <Label n="03">{lang === "de" ? "Vergleich" : "Comparison"}</Label>
        <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16">
          <h2 className={title}>{c.compareTitle}</h2>
          <p className="reveal text-lg leading-relaxed text-base-content/70">{c.compareLead}</p>
        </div>
        <ul className="mt-8 space-y-3 md:hidden">
          {c.compareRows.map((row) => (
            <li key={row[0]} className="overflow-hidden rounded-2xl border border-base-content/10 bg-base-100">
              <p className="px-4 pt-3.5 text-[0.8rem] font-semibold tracking-[0.12em] text-base-content/55 uppercase">{row[0]}</p>
              <p className="px-4 pt-1.5 pb-3 text-[0.98rem] text-base-content/70">
                <span className="sr-only">{c.compareHead[1]}: </span>
                {row[1]}
              </p>
              <p className="flex items-start gap-2.5 border-t border-base-content/10 bg-secondary/15 px-4 py-3 text-[0.98rem] font-semibold text-base-content">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-content">
                  <CheckIcon className="size-3" />
                </span>
                <span>
                  <span className="sr-only">{c.compareHead[2]}: </span>
                  {row[2]}
                </span>
              </p>
            </li>
          ))}
        </ul>
        <div className="reveal mt-12 hidden overflow-hidden rounded-2xl border border-base-content/10 md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th scope="col" className="w-[22%] px-5 py-4">
                  <span className="sr-only">{lang === "de" ? "Kriterium" : "Criterion"}</span>
                </th>
                <th scope="col" className="px-5 py-4 font-display text-lg font-semibold text-base-content/60">{c.compareHead[1]}</th>
                <th scope="col" className="bg-secondary px-6 py-4 font-display text-lg font-semibold text-secondary-content">{c.compareHead[2]}</th>
              </tr>
            </thead>
            <tbody>
              {c.compareRows.map((row, i) => {
                const last = i === c.compareRows.length - 1;
                return (
                  <tr key={row[0]} className="border-t border-base-content/10">
                    <th scope="row" className="px-5 py-4 align-middle font-semibold">{row[0]}</th>
                    <td className="px-5 py-4 align-middle text-base-content/70">
                      <span className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-[0.6em] h-0.5 w-3 shrink-0 rounded-full bg-base-content/30" />
                        {row[1]}
                      </span>
                    </td>
                    <td className="bg-secondary/15 px-6 py-4 align-middle font-medium text-base-content">
                      <span className="flex items-center gap-3">
                        <span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-content">
                          <CheckIcon className="size-3.5" />
                        </span>
                        {last ? <span className="rounded-lg bg-secondary px-2.5 py-0.5 font-semibold text-secondary-content">{row[2]}</span> : row[2]}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-base-content/65">{c.compareNote}</p>
      </section>

      {/* Prices */}
      <section className="border-y border-base-content/10 bg-base-200">
        <div className="wrap grid gap-8 py-14 md:gap-12 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Label n="04">{page("prices")[lang].nav}</Label>
            <h2 className={`${title} mt-6`}>{c.pricesTitle}</h2>
            <p className="reveal mt-6 text-lg leading-relaxed text-base-content/70">{c.pricesLead}</p>
            <Link href={href("prices", lang)} className="mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-secondary px-6 font-semibold text-secondary-content transition-[filter] hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral">
              {c.pricesLink} <ArrowIcon />
            </Link>
          </div>
          <div className="reveal self-start">
            <PriceList keys={homePrices} lang={lang} feature />
          </div>
        </div>
      </section>

      {/* Area + business */}
      <section className="wrap grid gap-4 py-14 md:py-28 lg:grid-cols-[1.25fr_1fr]">
        <div className="reveal rounded-3xl border border-base-content/10 p-7 md:p-10">
          <p className="eyebrow flex items-center gap-2 text-primary">
            <PinIcon className="size-4" /> {site.address.postalCode} {site.address.district}
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-semibold md:text-[2.6rem]">{c.areaTitle}</h2>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-base-content/70">{c.areaText}</p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {c.areas.map((area) => (
              <li key={area} className="rounded-full border border-base-content/15 px-3.5 py-1.5 text-[0.93rem] font-medium">
                {area}
              </li>
            ))}
          </ul>
          <Link href={href("akk", lang)} className="mt-8 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-primary">
            {c.areaLink} <ArrowIcon />
          </Link>
        </div>
        <div className="reveal flex flex-col justify-between rounded-3xl bg-secondary p-7 text-secondary-content md:p-10">
          <div>
            <p className="eyebrow">B2B</p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-semibold md:text-[2.6rem]">{c.businessTitle}</h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-secondary-content/80">{c.businessText}</p>
          </div>
          <Link href={href("business", lang)} className="mt-10 inline-flex min-h-12 items-center gap-2.5 self-start rounded-full bg-neutral px-6 font-semibold text-neutral-content transition-colors hover:bg-neutral/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral">
            {c.businessLink} <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-base-content/10">
        <div className="wrap max-w-4xl py-14 md:py-28">
          <Blocks blocks={[faqBlock]} lang={lang} />
        </div>
      </section>

      <CtaBand lang={lang} message={homeMessage[lang]} />
    </>
  );
}
