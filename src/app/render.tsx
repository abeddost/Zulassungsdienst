import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer, Header, StickyBar } from "@/components/chrome";
import { HomePage } from "@/components/home";
import { ContentPage } from "@/components/pages";
import { findBySlug, href, page, slugs, ui } from "@/content";
import type { PageDoc } from "@/content/types";
import { prices } from "@/lib/prices";
import { site, type Lang } from "@/lib/site";

/* Shared by the German tree (app/(de)) and the English tree (app/(en)/en). */

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const plate = JetBrains_Mono({ subsets: ["latin"], variable: "--font-plate", display: "swap", weight: ["500", "700"] });

export function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} data-theme="zmk" className={`${display.variable} ${body.variable} ${plate.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col bg-base-100 text-base-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(businessSchema(lang)) }} />
        {children}
      </body>
    </html>
  );
}

export function staticParams(lang: Lang) {
  return slugs(lang).map((slug) => ({ slug: slug ? slug.split("/") : [] }));
}

function resolve(lang: Lang, slug: string[] | undefined): PageDoc | undefined {
  return findBySlug(lang, (slug ?? []).join("/"));
}

const absolute = (path: string) => `${site.url}${path === "/" ? "" : path}` || site.url;

export function pageMetadata(lang: Lang, slug: string[] | undefined): Metadata {
  const doc = resolve(lang, slug);
  if (!doc) return { title: ui[lang].notFoundTitle, robots: { index: false } };
  const p = doc[lang];
  const url = absolute(href(doc.id, lang));
  return {
    metadataBase: new URL(site.url),
    authors: [{ name: site.credit.name, url: site.credit.url }],
    creator: site.credit.name,
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        de: absolute(href(doc.id, "de")),
        en: absolute(href(doc.id, "en")),
        "x-default": absolute(href(doc.id, "de")),
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: p.metaTitle,
      description: p.metaDescription,
      locale: lang === "de" ? "de_DE" : "en_GB",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title: p.metaTitle, description: p.metaDescription, images: ["/opengraph-image"] },
    robots: doc.kind === "legal" ? { index: false, follow: true } : undefined,
    formatDetection: { telephone: true, address: false, email: false },
  };
}

export function RenderPage({ lang, slug }: { lang: Lang; slug: string[] | undefined }) {
  const doc = resolve(lang, slug);
  if (!doc) notFound();
  const other: Lang = lang === "de" ? "en" : "de";
  const p = doc[lang];
  return (
    <>
      {/* A fresh header per page, so an open phone menu closes after navigating. */}
      <Header key={`${lang}-${doc.id}`} lang={lang} otherHref={href(doc.id, other)} />
      <main id="main" className="flex-1">
        {pageSchemas(doc, lang).map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
        ))}
        {doc.id === "home" ? <HomePage lang={lang} /> : <ContentPage doc={doc} lang={lang} />}
      </main>
      <Footer lang={lang} />
      <StickyBar lang={lang} message={doc.id === "home" ? undefined : p.whatsapp} />
    </>
  );
}

export function NotFoundPage({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return (
    <>
      <Header lang={lang} otherHref={href("home", lang === "de" ? "en" : "de")} />
      <main id="main" className="wrap flex flex-1 flex-col items-start justify-center py-24">
        <p className="eyebrow text-primary">404</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">{t.notFoundTitle}</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-base-content/70">{t.notFoundText}</p>
        <Link href={href("home", lang)} className="mt-8 inline-flex min-h-12 items-center rounded-full bg-neutral px-6 font-semibold text-neutral-content focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
          {t.toHome}
        </Link>
      </main>
      <Footer lang={lang} />
      <StickyBar lang={lang} />
    </>
  );
}

/* ---------- Structured data for search engines ---------- */

function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const businessId = `${site.url}/#business`;

function businessSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveBusiness"],
    "@id": businessId,
    name: site.name,
    url: absolute(href("home", lang)),
    telephone: site.phone.e164,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: ["Wiesbaden", "Mainz-Kastel", "Mainz-Kostheim", "Mainz-Amöneburg", "Mainz"].map((name) => ({ "@type": "City", name })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone.e164,
      contactType: "customer service",
      availableLanguage: ["de", "en"],
    },
    ...(site.hours
      ? {
          openingHours: site.hours.map((h) => `${h.days} ${h.opens}-${h.closes}`),
        }
      : {}),
  };
}

function plain(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\((.+?)\)/g, "$1");
}

function pageSchemas(doc: PageDoc, lang: Lang): unknown[] {
  const p = doc[lang];
  const url = absolute(href(doc.id, lang));
  const out: unknown[] = [];

  if (doc.id !== "home") {
    out.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui[lang].home, item: absolute(href("home", lang)) },
        { "@type": "ListItem", position: 2, name: p.nav, item: url },
      ],
    });
  }

  if (doc.kind === "service") {
    out.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: p.h1,
      description: p.metaDescription,
      serviceType: p.nav,
      url,
      provider: { "@id": businessId },
      areaServed: { "@type": "City", name: "Wiesbaden" },
      ...(doc.price && prices[doc.price].amount !== null
        ? {
            offers: {
              "@type": "Offer",
              price: prices[doc.price].amount,
              priceCurrency: "EUR",
              url,
            },
          }
        : {}),
    });
  }

  const faqs = p.blocks.flatMap((b) => (b.type === "faq" ? b.items : []));
  if (faqs.length > 0) {
    out.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
      })),
    });
  }

  if (doc.kind === "guide") {
    out.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: p.h1,
      description: p.metaDescription,
      inLanguage: lang,
      dateModified: doc.updated,
      mainEntityOfPage: url,
      author: { "@id": businessId },
      publisher: { "@id": businessId },
    });
  }

  return out;
}

export { page };
