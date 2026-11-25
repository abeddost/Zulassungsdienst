import { type PriceKey, prices } from "@/lib/prices";
import type { Lang } from "@/lib/site";

/**
 * One way to show prices everywhere on the site:
 *  - every row is "what you get" on the left and the price on the right, in one fixed column,
 *    so the amounts line up on desktop and on phones
 *  - the first row can be featured (dark, with the price on a yellow tag) to mark the main service
 *  - yellow always means "price"
 */

const SUPPORTING: PriceKey[] = ["pickup", "platePair", "sticker", "customPlate"];

export function Amount({ k, lang, size = "md" }: { k: PriceKey; lang: Lang; size?: "sm" | "md" }) {
  const p = prices[k];
  const value = lang === "de" ? `${p.amount} €` : `€${p.amount}`;
  const prefix = p.from ? (lang === "de" ? "ab" : "from") : prices[k].includes.de.startsWith("Aufpreis") ? "+" : null;
  return (
    <span className="inline-flex items-baseline justify-end gap-1 whitespace-nowrap tabular-nums">
      {prefix && <span className={`font-semibold opacity-70 ${size === "sm" ? "text-[0.8rem]" : "text-[0.9rem]"}`}>{prefix}</span>}
      <span className={`font-display font-semibold ${size === "sm" ? "text-[1.05rem]" : "text-[1.55rem] md:text-[1.75rem]"}`}>{value}</span>
    </span>
  );
}

export function PriceList({ keys, lang, feature }: { keys: PriceKey[]; lang: Lang; feature?: boolean }) {
  const featureFirst = feature ?? !SUPPORTING.includes(keys[0]);
  return (
    <ul className="overflow-hidden rounded-3xl border border-base-content/12 bg-base-100">
      {keys.map((k, i) => {
        const featured = featureFirst && i === 0;
        const p = prices[k];
        return (
          <li
            key={k}
            className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 px-5 py-4 md:gap-x-8 md:px-7 md:py-5 ${
              featured ? "bg-neutral text-neutral-content" : i > 0 ? "border-t border-base-content/10" : ""
            }`}
          >
            <div className="min-w-0">
              <p className="text-[1rem] leading-snug font-semibold md:text-[1.08rem]">{p.label[lang]}</p>
              <p className={`mt-1 text-[0.9rem] leading-snug ${featured ? "text-neutral-content/70" : "text-base-content/60"}`}>{p.includes[lang]}</p>
            </div>
            <div
              className={`min-w-[6.25rem] rounded-xl px-3 py-1.5 text-right md:min-w-[7.75rem] ${
                featured ? "bg-secondary text-secondary-content" : "bg-secondary/25 text-base-content"
              }`}
            >
              <Amount k={k} lang={lang} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
