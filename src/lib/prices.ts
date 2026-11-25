/**
 * DRAFT PRICES, set at Wiesbaden market level (research 2026-11-25), not yet confirmed
 * by the owner. Change the numbers here and every page follows.
 *
 * Wiesbaden benchmarks (all including authority fees):
 *  - WIZD, Erbenheim (wizd.de/preise): registration / transfer / new car 129 EUR plus 30 EUR
 *    plates, or 149 EUR all-in as "Express"; 249 EUR with pickup and delivery;
 *    deregistration 30 EUR (99 EUR with pickup); address change 60-70 EUR;
 *    short-term plates 129 EUR plus plates; EU import 129 EUR plus plates;
 *    lost registration certificate 70 EUR; plates 30 EUR; export on request.
 *  - Zulassungsdienst Wiesbaden / CarChing, Wiesbadener Str. 91: 149.90 EUR all-in,
 *    249.90 EUR with pickup and delivery; custom plate +15.90 EUR.
 *  - Online services in Rhein-Main: 125-150 EUR with plates, deregistration 30-50 EUR.
 */

import type { Lang } from "./site";

export const PRICES_ARE_DRAFT = true;

export type PriceKey =
  | "registration"
  | "addressChange"
  | "deregistration"
  | "shortTerm"
  | "export"
  | "customPlate"
  | "pickup"
  | "replacement"
  | "import"
  | "platePair"
  | "sticker";

type Price = {
  /** null = "on request": shown as "auf Anfrage" and left out of the price data for search engines. */
  amount: number | null;
  from: boolean;
  label: Record<Lang, string>;
  includes: Record<Lang, string>;
};

export const prices: Record<PriceKey, Price> = {
  registration: {
    amount: 159,
    from: true,
    label: {
      de: "Zulassung, Ummeldung mit Halterwechsel, Wiederzulassung",
      en: "Registration, change of keeper, re-registration",
    },
    includes: {
      de: "inkl. Behördengebühren, 2 Kennzeichen und Umweltplakette",
      en: "incl. authority fees, 2 plates and emissions sticker",
    },
  },
  addressChange: {
    amount: 79,
    from: true,
    label: {
      de: "Ummeldung ohne neue Kennzeichen (Umzug, Namens- oder Adressänderung)",
      en: "Update without new plates (move, change of name or address)",
    },
    includes: { de: "inkl. Behördengebühren", en: "incl. authority fees" },
  },
  deregistration: {
    amount: 39,
    from: false,
    label: { de: "Abmeldung (Außerbetriebsetzung)", en: "Deregistration" },
    includes: { de: "inkl. Behördengebühr", en: "incl. authority fee" },
  },
  shortTerm: {
    amount: 149,
    from: true,
    label: { de: "Kurzzeitkennzeichen (5 Tage)", en: "Short-term plates (5 days)" },
    includes: {
      de: "inkl. Behördengebühr und Schilder, Versicherung separat",
      en: "incl. authority fee and plates, insurance separate",
    },
  },
  export: {
    amount: null, // on request: depends on vehicle, destination and insurance term
    from: false,
    label: { de: "Ausfuhrkennzeichen", en: "Export plates" },
    includes: {
      de: "Festpreis nach kurzer Prüfung per WhatsApp, inkl. Behördengebühr und Schilder",
      en: "fixed price after a quick check on WhatsApp, incl. authority fee and plates",
    },
  },
  customPlate: {
    amount: 19,
    from: false,
    label: { de: "Wunschkennzeichen reservieren", en: "Custom plate reservation" },
    includes: {
      de: "Aufpreis, inkl. 12,80 € Behördengebühr und Reservierung",
      en: "surcharge, incl. the €12.80 authority fee and the reservation",
    },
  },
  pickup: {
    amount: 89,
    from: false,
    label: { de: "Abhol- und Bringservice", en: "Pickup and delivery" },
    includes: {
      de: "Aufpreis, Wiesbaden, Kastel, Kostheim, Amöneburg und Mainz",
      en: "surcharge, Wiesbaden, Kastel, Kostheim, Amöneburg and Mainz",
    },
  },
  replacement: {
    amount: 99,
    from: true,
    label: {
      de: "Ersatzpapiere oder Ersatzkennzeichen nach Verlust",
      en: "Replacement papers or plates after loss",
    },
    includes: {
      de: "inkl. Behördengebühren, neue Schilder bei Kennzeichenverlust extra",
      en: "incl. authority fees, new plates extra if plates were lost",
    },
  },
  import: {
    amount: 199,
    from: true,
    label: { de: "Zulassung eines Importfahrzeugs", en: "Registration of an imported vehicle" },
    includes: {
      de: "inkl. Behördengebühren und 2 Kennzeichen, Gutachten separat",
      en: "incl. authority fees and 2 plates, inspection reports separate",
    },
  },
  platePair: {
    amount: 30,
    from: false,
    label: { de: "Kennzeichenpaar einzeln", en: "Pair of plates only" },
    includes: { de: "geprägt, DIN-zertifiziert", en: "embossed, DIN certified" },
  },
  sticker: {
    amount: 10,
    from: false,
    label: { de: "Umweltplakette", en: "Emissions sticker" },
    includes: { de: "grüne Feinstaubplakette", en: "green low-emission sticker" },
  },
};

export function priceText(key: PriceKey, lang: Lang): string {
  const p = prices[key];
  if (p.amount === null) return onRequest(lang);
  const amount = lang === "de" ? `${p.amount} €` : `€${p.amount}`;
  if (!p.from) return amount;
  return lang === "de" ? `ab ${amount}` : `from ${amount}`;
}

export function onRequest(lang: Lang): string {
  return lang === "de" ? "auf Anfrage" : "on request";
}
