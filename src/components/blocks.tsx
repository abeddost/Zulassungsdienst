import type { Block } from "@/content/types";
import { prices, priceText } from "@/lib/prices";
import type { Lang } from "@/lib/site";
import { Rich } from "./rich";
import { CheckIcon } from "./ui";

const h2Cls = "font-display text-[1.7rem] leading-tight font-semibold md:text-[2.1rem]";
const bodyCls = "text-[1.06rem] leading-[1.75] text-base-content/80";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function blockHeading(block: Block): string | undefined {
  return "h2" in block ? block.h2 : undefined;
}

export function headingId(text: string): string {
  return slugify(text);
}

export function Blocks({ blocks, lang }: { blocks: Block[]; lang: Lang }) {
  return (
    <div className="space-y-14 md:space-y-16">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} lang={lang} />
      ))}
    </div>
  );
}

function BlockView({ block, lang }: { block: Block; lang: Lang }) {
  switch (block.type) {
    case "prose":
      return (
        <section>
          {block.h2 && (
            <h2 id={headingId(block.h2)} className={`${h2Cls} mb-5`}>
              {block.h2}
            </h2>
          )}
          <div className={`space-y-4 ${bodyCls}`}>
            {block.paras.map((p, i) => (
              <p key={i}>
                <Rich text={p} lang={lang} />
              </p>
            ))}
          </div>
          {block.list && (
            <ul className={`mt-5 space-y-2.5 ${bodyCls}`}>
              {block.list.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.72em] size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <Rich text={item} lang={lang} />
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      );

    case "checklist":
      return (
        <section>
          <h2 id={headingId(block.h2)} className={`${h2Cls} mb-5`}>
            {block.h2}
          </h2>
          {block.intro && (
            <p className={`mb-6 ${bodyCls}`}>
              <Rich text={block.intro} lang={lang} />
            </p>
          )}
          <div className="grid gap-4">
            {block.groups.map((group, gi) => (
              <div key={gi} className="rounded-2xl border border-base-content/10 bg-base-200 p-5 md:p-7">
                {group.title && <h3 className="mb-4 font-display text-lg font-semibold">{group.title}</h3>}
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex gap-3.5 text-[1.02rem] leading-relaxed text-base-content/85">
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <CheckIcon className="size-3.5" />
                      </span>
                      <span>
                        <Rich text={item} lang={lang} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {block.note && (
            <p className="mt-4 text-[0.95rem] leading-relaxed text-base-content/60">
              <Rich text={block.note} lang={lang} />
            </p>
          )}
        </section>
      );

    case "steps":
      return (
        <section>
          <h2 id={headingId(block.h2)} className={`${h2Cls} mb-5`}>
            {block.h2}
          </h2>
          {block.intro && (
            <p className={`mb-7 ${bodyCls}`}>
              <Rich text={block.intro} lang={lang} />
            </p>
          )}
          <ol className="space-y-0">
            {block.steps.map((step, i) => (
              <li key={i} className="relative flex gap-5 pb-8 last:pb-0">
                {i < block.steps.length - 1 && (
                  <span aria-hidden="true" className="absolute left-[1.05rem] top-10 bottom-1 w-px bg-base-content/15" />
                )}
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral font-mono text-sm font-bold text-neutral-content tabular-nums">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-[1.02rem] leading-relaxed text-base-content/75">
                    <Rich text={step.text} lang={lang} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      );

    case "table":
      return (
        <section>
          <h2 id={headingId(block.h2)} className={`${h2Cls} mb-5`}>
            {block.h2}
          </h2>
          {block.intro && (
            <p className={`mb-6 ${bodyCls}`}>
              <Rich text={block.intro} lang={lang} />
            </p>
          )}
          <div className="overflow-x-auto rounded-2xl border border-base-content/10">
            <table className="w-full min-w-[30rem] border-collapse text-left text-[0.98rem]">
              <thead>
                <tr className="bg-base-200">
                  {block.head.map((cell, i) => (
                    <th key={i} scope="col" className="px-4 py-3.5 font-semibold md:px-5">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr key={ri} className="border-t border-base-content/10">
                    {row.map((cell, ci) =>
                      ci === 0 ? (
                        <th key={ci} scope="row" className="px-4 py-3.5 font-medium md:px-5">
                          <Rich text={cell} lang={lang} />
                        </th>
                      ) : (
                        <td key={ci} className={`px-4 py-3.5 text-base-content/80 tabular-nums md:px-5 ${cell.length <= 20 ? "whitespace-nowrap" : ""}`}>
                          <Rich text={cell} lang={lang} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && (
            <p className="mt-4 text-[0.95rem] leading-relaxed text-base-content/60">
              <Rich text={block.note} lang={lang} />
            </p>
          )}
        </section>
      );

    case "callout": {
      const tone =
        block.tone === "warn"
          ? "border-secondary bg-secondary/30"
          : block.tone === "tip"
            ? "border-base-content/20 bg-base-200"
            : "border-base-content/15 bg-base-200";
      return (
        <aside className={`rounded-2xl border p-5 md:p-7 ${tone}`}>
          <h2 className="font-display text-lg font-semibold">{block.title}</h2>
          <p className="mt-2 text-[1.02rem] leading-relaxed text-base-content/80">
            <Rich text={block.text} lang={lang} />
          </p>
        </aside>
      );
    }

    case "facts":
      return (
        <section>
          {block.h2 && (
            <h2 id={headingId(block.h2)} className={`${h2Cls} mb-5`}>
              {block.h2}
            </h2>
          )}
          <dl className="grid overflow-hidden rounded-2xl border border-base-content/10 sm:grid-cols-2">
            {block.items.map((item, i) => (
              <div key={i} className="border-b border-base-content/10 p-5 last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0">
                <dt className="eyebrow text-base-content/50">{item.label}</dt>
                <dd className="mt-2 text-[1.05rem] leading-snug font-medium">
                  <Rich text={item.value} lang={lang} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      );

    case "faq":
      return (
        <section>
          <h2 id={headingId(block.h2)} className={`${h2Cls} mb-5`}>
            {block.h2}
          </h2>
          <div className="divide-y divide-base-content/10 border-y border-base-content/10">
            {block.items.map((item, i) => (
              <details key={i} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1.08rem] font-semibold focus-visible:outline-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span aria-hidden="true" className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border border-base-content/20 text-base-content/60 transition-transform duration-200 group-open:rotate-45">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="size-3.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-6 text-[1.02rem] leading-relaxed text-base-content/75">
                  <Rich text={item.a} lang={lang} />
                </p>
              </details>
            ))}
          </div>
        </section>
      );

    case "price":
      return (
        <section>
          <h2 id={headingId(block.h2)} className={`${h2Cls} mb-5`}>
            {block.h2}
          </h2>
          <ul className="divide-y divide-base-content/10 rounded-2xl border border-base-content/10 bg-base-200">
            {block.keys.map((key) => (
              <li key={key} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 p-5 md:px-7">
                <div className="min-w-0">
                  <p className="font-medium">{prices[key].label[lang]}</p>
                  <p className="mt-0.5 text-[0.95rem] text-base-content/60">{prices[key].includes[lang]}</p>
                </div>
                <p className="font-display text-2xl font-semibold whitespace-nowrap tabular-nums">{priceText(key, lang)}</p>
              </li>
            ))}
          </ul>
          {block.note && (
            <p className="mt-4 text-[0.95rem] leading-relaxed text-base-content/60">
              <Rich text={block.note} lang={lang} />
            </p>
          )}
        </section>
      );
  }
}
