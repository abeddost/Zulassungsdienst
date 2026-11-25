# Zulassungsdienst Mainz-Kastel

Website for a private vehicle registration service in Wiesbaden / Mainz-Kastel.
German at the root, English under `/en`. No forms: every call to action is WhatsApp or a phone call.

Built with Next.js (App Router), Tailwind CSS 4 and daisyUI 5. Every page is generated at build time.

## Where to change things

| What | File |
|---|---|
| Business name, phone, address, opening hours, express cut-off time, Impressum details | `src/lib/site.ts` |
| Prices (currently drafts) | `src/lib/prices.ts` |
| Home page text | `src/content/home.ts` |
| Service pages | `src/content/pages/services-a.ts`, `services-b.ts`, `services-c.ts` |
| Guides (registration office, Kastel/Kostheim, costs, documents) | `src/content/pages/guides.ts` |
| Prices page, contact page | `src/content/pages/core.ts` |
| Impressum and Datenschutz | `src/content/pages/legal.ts` |
| Colours and fonts | `src/app/globals.css`, `src/app/render.tsx` |

Values marked `TODO owner` in `src/lib/site.ts` are still missing. Missing Impressum details show up
on the page as bold `[Angabe fehlt: ...]` so they cannot go live unnoticed.

Official fees and rules on the pages come from wiesbaden.de and were checked on 2026-11-25
(`factsCheckedOn` in `src/lib/site.ts`). Re-check them before changing that date.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy to Vercel

1. Import the project in Vercel (framework preset: Next.js, no extra settings).
2. Add the environment variable `NEXT_PUBLIC_SITE_URL` with the final address,
   for example `https://www.zulassungsdienst-mainz-kastel.de`. Canonical links, the sitemap
   and share images use it.
3. Connect the domain.

## The 3D hero

The home page hero shows a licence plate as a real 3D object (`src/components/hero/`).
It floats, leans toward the pointer, and flips to a different plate when a service is picked:
standard, custom (the visitor types their own number), short-term, export and deregistered.
The page's accent colour changes with it.

- `plate-art.ts` draws the plate face. Change how a plate type looks here.
- `PlateScene.tsx` is the 3D scene (Three.js). It pauses when off screen.
- `PlateStage.tsx` is the picker, the info panel and the WhatsApp links.
- The plate types and their colours are listed in `src/components/home.tsx`; their texts are in
  `src/content/home.ts`.

Visitors who prefer reduced motion get a still plate. If the browser cannot run WebGL, a flat
drawing of the same plate is shown instead.
