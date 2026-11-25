/**
 * Everything about the business that appears on more than one page lives here.
 * Change a value once and the whole site follows.
 *
 * Values marked TODO are placeholders the owner still has to supply.
 */

export type Lang = "de" | "en";
export const LANGS: Lang[] = ["de", "en"];

export const site = {
  /**
   * Brand name. "Zulassungsdienst Wiesbaden" is already used by the business next door
   * (Wiesbadener Str. 91), so the name is built on Mainz-Kastel instead. On 2026-11-25 no
   * business with this name was found and zulassungsdienst-mainz-kastel.de was unregistered.
   */
  name: "Zulassungsdienst Mainz-Kastel",
  shortName: "Zulassungsdienst Kastel",
  /**
   * Brand colours, palette "Mitternacht & Bernstein": navy and pale-blue bands in turn, amber accent.
   * The theme in src/app/globals.css sets the same three values; change both together.
   */
  colors: { dark: "#101C36", light: "#E8ECF3", accent: "#F2A93B" },

  /** Letters shown on the licence-plate logo. */
  plate: { district: "WI", letters: "MK", digits: "93" },

  /** Public address of the live site. Set NEXT_PUBLIC_SITE_URL in Vercel once the domain is connected. */
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  ).replace(/\/$/, ""),

  phone: {
    display: "0178 8427418",
    e164: "+491788427418",
    /** Number used for WhatsApp links, digits only with country code. */
    whatsapp: "491788427418",
  },

  address: {
    street: "Wiesbadener Str. 93",
    postalCode: "55252",
    city: "Wiesbaden",
    district: "Mainz-Kastel",
    region: "Hessen",
    country: "DE",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Wiesbadener+Str.+93%2C+55252+Mainz-Kastel",
  },

  /**
   * TODO owner: opening hours. While this is null the site says
   * "by arrangement via WhatsApp" and publishes no hours to Google.
   * Example: [{ days: "Mo-Fr", opens: "08:00", closes: "18:00" }]
   */
  hours: null as null | { days: string; opens: string; closes: string }[],

  /**
   * TODO owner: latest time documents must reach us for same-day processing.
   * Shown on the express page. Draft value.
   */
  expressCutoff: "10:00",

  /** TODO owner: legal details for the Impressum. Shown as clearly marked placeholders until filled. */
  legal: {
    owner: null as string | null, // full name of the owner or managing director
    legalForm: null as string | null, // e.g. "Einzelunternehmen", "GmbH"
    email: null as string | null,
    vatId: null as string | null, // USt-IdNr., if any
    register: null as string | null, // e.g. "Amtsgericht Wiesbaden, HRB 12345"
    smallBusiness: null as boolean | null, // Kleinunternehmer nach § 19 UStG?
  },

  /** The authority we work with. Facts from wiesbaden.de, checked 2026-11-25. */
  authority: {
    name: "Zulassungsbehörde Wiesbaden",
    street: "Stielstraße 3",
    postalCode: "65201",
    city: "Wiesbaden",
    phone: "0611 31-8342",
    phoneHours: { de: "Mo-Do 9-15 Uhr, Fr 9-13 Uhr", en: "Mon-Thu 9:00-15:00, Fri 9:00-13:00" },
    buses: "5, 23, 45",
    url: "https://www.wiesbaden.de/vv/oe/07/34/Zulassungsbehoerde",
  },

  factsCheckedOn: "2026-11-25",
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${site.phone.e164}`;

export function addressLine(lang: Lang): string {
  const a = site.address;
  return lang === "de"
    ? `${a.street}, ${a.postalCode} ${a.city} (${a.district})`
    : `${a.street}, ${a.postalCode} ${a.city} (${a.district}), Germany`;
}
