import { LANGS, type Lang } from "@/lib/site";
import type { PageDoc } from "./types";
import { corePages } from "./pages/core";
import { servicePagesA } from "./pages/services-a";
import { servicePagesB } from "./pages/services-b";
import { servicePagesC } from "./pages/services-c";
import { guidePages } from "./pages/guides";
import { legalPages } from "./pages/legal";

export const pages: PageDoc[] = [
  ...corePages,
  ...servicePagesA,
  ...servicePagesB,
  ...servicePagesC,
  ...guidePages,
  ...legalPages,
];

const byId = new Map(pages.map((p) => [p.id, p]));

export function page(id: string): PageDoc {
  const doc = byId.get(id);
  if (!doc) throw new Error(`Unknown page id "${id}"`);
  return doc;
}

/** Site-relative URL of a page in a language. German lives at the root, English under /en. */
export function href(id: string, lang: Lang): string {
  const slug = page(id)[lang].slug;
  if (lang === "de") return slug ? `/${slug}` : "/";
  return slug ? `/en/${slug}` : "/en";
}

export function findBySlug(lang: Lang, slug: string): PageDoc | undefined {
  return pages.find((p) => p[lang].slug === slug);
}

export function slugs(lang: Lang): string[] {
  return pages.map((p) => p[lang].slug);
}

export const serviceIds = [
  "register",
  "reregister",
  "deregister",
  "express",
  "shortterm",
  "export",
  "customplate",
  "import",
  "lost",
  "business",
] as const;

export const guideIds = ["office", "akk", "costs", "documents"] as const;

export { LANGS };

/** Short interface strings that are not part of any single page. */
export const ui = {
  de: {
    skip: "Zum Inhalt springen",
    menu: "Menü",
    services: "Leistungen",
    allServices: "Alle Leistungen",
    guides: "Ratgeber",
    whatsapp: "WhatsApp schreiben",
    whatsappShort: "WhatsApp",
    call: "Anrufen",
    callNumber: "Anrufen",
    otherLang: "English",
    otherLangLabel: "Switch to English",
    home: "Startseite",
    priceFrom: "Unser Preis",
    draftPrices: "Preise in Abstimmung, Stand",
    related: "Das könnte Sie auch interessieren",
    more: "Mehr erfahren",
    updated: "Zuletzt geprüft",
    sources: "Behördenangaben laut wiesbaden.de",
    ctaTitle: "Schicken Sie uns ein Foto Ihrer Unterlagen",
    ctaText:
      "Wir prüfen per WhatsApp, ob alles vollständig ist, und nennen Ihnen den Festpreis, bevor Sie losfahren.",
    visit: "So finden Sie uns",
    route: "Route planen",
    hoursTitle: "Öffnungszeiten",
    hoursFallback: "Abgabe und Abholung nach Absprache, am schnellsten per WhatsApp.",
    footerClaim:
      "Privater Zulassungsdienst für Wiesbaden, Mainz-Kastel, Kostheim und Amöneburg. Wir sind keine Behörde, sondern erledigen den Behördengang in Ihrem Auftrag.",
    legal: "Rechtliches",
    contact: "Kontakt",
    notFoundTitle: "Diese Seite gibt es nicht",
    notFoundText:
      "Der Link ist veraltet oder vertippt. Auf der Startseite finden Sie alle Leistungen, oder Sie schreiben uns direkt.",
    toHome: "Zur Startseite",
    placeholder: "Angabe folgt",
  },
  en: {
    skip: "Skip to content",
    menu: "Menu",
    services: "Services",
    allServices: "All services",
    guides: "Guides",
    whatsapp: "Message us on WhatsApp",
    whatsappShort: "WhatsApp",
    call: "Call",
    callNumber: "Call",
    otherLang: "Deutsch",
    otherLangLabel: "Zur deutschen Version",
    home: "Home",
    priceFrom: "Our price",
    draftPrices: "Prices being finalised, as of",
    related: "You may also need",
    more: "Read more",
    updated: "Last checked",
    sources: "Authority details as published on wiesbaden.de",
    ctaTitle: "Send us a photo of your documents",
    ctaText:
      "We check on WhatsApp that everything is complete and tell you the fixed price before you set off.",
    visit: "Where to find us",
    route: "Get directions",
    hoursTitle: "Opening hours",
    hoursFallback: "Drop-off and collection by arrangement, quickest via WhatsApp.",
    footerClaim:
      "Private vehicle registration service for Wiesbaden, Mainz-Kastel, Kostheim and Amöneburg. We are not a public authority; we handle the registration office visit on your behalf.",
    legal: "Legal",
    contact: "Contact",
    notFoundTitle: "This page does not exist",
    notFoundText:
      "The link is outdated or mistyped. The home page lists all services, or you can message us directly.",
    toHome: "Back to home",
    placeholder: "To be added",
  },
} satisfies Record<Lang, Record<string, string>>;
