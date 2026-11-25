import type { Lang } from "@/lib/site";
import type { PriceKey } from "@/lib/prices";

/**
 * Text fields accept two inline marks:
 *   **bold**            and            [link text](page:<id>)  or  [link text](https://...)
 * "page:<id>" resolves to the right URL for the current language.
 */
export type Block =
  | { type: "prose"; h2?: string; paras: string[]; list?: string[] }
  | {
      type: "checklist";
      h2: string;
      intro?: string;
      groups: { title?: string; items: string[] }[];
      note?: string;
    }
  | { type: "steps"; h2: string; intro?: string; steps: { title: string; text: string }[] }
  | {
      type: "table";
      h2: string;
      intro?: string;
      head: string[];
      rows: string[][];
      note?: string;
    }
  | { type: "callout"; tone: "info" | "warn" | "tip"; title: string; text: string }
  | { type: "facts"; h2?: string; items: { label: string; value: string }[] }
  | { type: "faq"; h2: string; items: { q: string; a: string }[] }
  | { type: "price"; keys: PriceKey[]; h2: string; note?: string };

export type PageKind = "service" | "guide" | "core" | "legal";

export type LocalizedPage = {
  /** URL path without language prefix and without leading slash. "" is the home page. */
  slug: string;
  /** Short name for menus, cards and breadcrumbs. */
  nav: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  /** One or two sentences under the headline. */
  lead: string;
  /** One line for service cards. */
  teaser?: string;
  /** Prefilled WhatsApp message for this page. */
  whatsapp: string;
  blocks: Block[];
};

export type PageDoc = {
  id: string;
  kind: PageKind;
  /** Headline price shown in the page hero and on cards. */
  price?: PriceKey;
  /** Ids of pages to suggest at the end. */
  related?: string[];
  /** ISO date of the last content review. */
  updated: string;
  de: LocalizedPage;
  en: LocalizedPage;
};

export type { Lang };
