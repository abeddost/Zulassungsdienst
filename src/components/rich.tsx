import Link from "next/link";
import type { ReactNode } from "react";
import { href } from "@/content";
import type { Lang } from "@/lib/site";

/* ---------- Inline text marks: **bold** and [text](page:id | https://...) ---------- */

export function Rich({ text, lang }: { text: string; lang: Lang }) {
  const parts: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1]) {
      parts.push(
        <strong key={key++} className="font-semibold text-base-content">
          {match[1]}
        </strong>,
      );
    } else {
      const target = match[3];
      const cls =
        "font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary";
      if (target.startsWith("page:")) {
        parts.push(
          <Link key={key++} href={href(target.slice(5), lang)} className={cls}>
            {match[2]}
          </Link>,
        );
      } else {
        parts.push(
          <a key={key++} href={target} target="_blank" rel="noopener noreferrer" className={cls}>
            {match[2]}
          </a>,
        );
      }
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
