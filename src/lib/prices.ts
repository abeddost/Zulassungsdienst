/**
 * DRAFT PRICES. Proposed from competitor research on 2026-11-25 and not yet
 * confirmed by the owner. Change the numbers here and every page follows.
 *
 * Benchmarks found:
 *  - Neighbouring service (Wiesbadener Str. 91): 149.90 EUR drop-off, 249.90 EUR with pickup,
 *    both including two plates, emissions sticker and authority fees.
 *  - Online services in Rhein-Main: 99-135 EUR without plates, 129-150 EUR with plates,
 *    deregistration 30-50 EUR.
 *  - Regional agents (Offenbach/Frankfurt): 120-150 EUR all-in, deregistration 30 EUR.
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
  amount: number;
  from: boolean;
  label: Record<Lang, string>;
  includes: Record<Lang, string>;
};

export const prices: Record<PriceKey, Price> = {
  registration: {
    amount: 139,
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
    amount: 69,
    from: true,
    label: {
      de: "Ummeldung ohne neue Kennzeichen (Umzug, Namens- oder Adressänderung)",
      en: "Update without new plates (move, change of name or address)",
    },
    includes: { de: "inkl. Behördengebühren", en: "incl. authority fees" },
  },
  deregistration: {
    amount: 29,
    from: false,
    label: { de: "Abmeldung (Außerbetriebsetzung)", en: "Deregistration" },
    includes: { de: "inkl. Behördengebühr", en: "incl. authority fee" },
  },
  shortTerm: {
    amount: 79,
    from: true,
    label: { de: "Kurzzeitkennzeichen (5 Tage)", en: "Short-term plates (5 days)" },
    includes: {
      de: "inkl. Behördengebühr und Schilder, Versicherung separat",
      en: "incl. authority fee and plates, insurance separate",
    },
  },
  export: {
    amount: 149,
    from: true,
    label: { de: "Ausfuhrkennzeichen", en: "Export plates" },
    includes: {
      de: "inkl. Behördengebühr und Schilder, Versicherung und Kfz-Steuer separat",
      en: "incl. authority fee and plates, insurance and vehicle tax separate",
    },
  },
  customPlate: {
    amount: 15,
    from: false,
    label: { de: "Wunschkennzeichen reservieren", en: "Custom plate reservation" },
    includes: {
      de: "Aufpreis, inkl. 12,80 € Behördengebühr",
      en: "surcharge, incl. the €12.80 authority fee",
    },
  },
  pickup: {
    amount: 49,
    from: false,
    label: { de: "Abhol- und Bringservice", en: "Pickup and delivery" },
    includes: {
      de: "Aufpreis, Wiesbaden, Kastel, Kostheim, Amöneburg und Mainz",
      en: "surcharge, Wiesbaden, Kastel, Kostheim, Amöneburg and Mainz",
    },
  },
  replacement: {
    amount: 89,
    from: true,
    label: {
      de: "Ersatzpapiere oder Ersatzkennzeichen nach Verlust",
      en: "Replacement papers or plates after loss",
    },
    includes: { de: "zzgl. Behördengebühren nach Aufwand", en: "plus authority fees as charged" },
  },
  import: {
    amount: 189,
    from: true,
    label: { de: "Zulassung eines Importfahrzeugs", en: "Registration of an imported vehicle" },
    includes: {
      de: "inkl. Behördengebühren und 2 Kennzeichen, Gutachten separat",
      en: "incl. authority fees and 2 plates, inspection reports separate",
    },
  },
  platePair: {
    amount: 25,
    from: false,
    label: { de: "Kennzeichenpaar einzeln", en: "Pair of plates only" },
    includes: { de: "geprägt, DIN-zertifiziert", en: "embossed, DIN certified" },
  },
  sticker: {
    amount: 8,
    from: false,
    label: { de: "Umweltplakette", en: "Emissions sticker" },
    includes: { de: "grüne Feinstaubplakette", en: "green low-emission sticker" },
  },
};

export function priceText(key: PriceKey, lang: Lang): string {
  const p = prices[key];
  const amount = lang === "de" ? `${p.amount} €` : `€${p.amount}`;
  if (!p.from) return amount;
  return lang === "de" ? `ab ${amount}` : `from ${amount}`;
}
