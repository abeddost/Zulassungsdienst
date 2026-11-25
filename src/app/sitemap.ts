import type { MetadataRoute } from "next";
import { href, pages } from "@/content";
import { LANGS, site } from "@/lib/site";

const abs = (path: string) => `${site.url}${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages
    .filter((doc) => doc.kind !== "legal")
    .flatMap((doc) =>
      LANGS.map((lang) => ({
        url: abs(href(doc.id, lang)),
        lastModified: doc.updated,
        changeFrequency: "monthly" as const,
        priority: doc.id === "home" ? 1 : doc.kind === "service" ? 0.9 : 0.7,
        alternates: {
          languages: { de: abs(href(doc.id, "de")), en: abs(href(doc.id, "en")) },
        },
      })),
    );
}
