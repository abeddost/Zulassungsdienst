"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ArrowIcon, WhatsAppIcon } from "../ui";
import { paintPlate, plateFont, PLATE_PX, type PlateSpec } from "./plate-art";

const PlateScene = dynamic(() => import("./PlateScene"), { ssr: false });

export type PlateVariant = {
  id: string;
  /** Short label on the picker button. */
  label: string;
  title: string;
  text: string;
  price: string;
  href: string;
  whatsapp: string;
  /** Hex accent for light and background glow. */
  accent: string;
  spec: PlateSpec;
  /** The visitor types their own letters and digits for this one. */
  custom?: boolean;
};

export type PlateStageText = {
  pick: string;
  letters: string;
  digits: string;
  customHint: string;
  /** Message template, "{plate}" is replaced with the typed number. */
  customMessage: string;
  whatsapp: string;
  more: string;
  /** Shorter link label for narrow screens. */
  moreShort: string;
};

type Props = {
  variants: PlateVariant[];
  text: PlateStageText;
  district: string;
  waNumber: string;
  /** Label and headline: always visible, beside the plate on wide screens and above it on phones. */
  intro: ReactNode;
  /** Lead text and main buttons: shown from tablet width up, under the headline. */
  children: ReactNode;
};

export function PlateStage({ variants, text, district, waNumber, intro, children }: Props) {
  const [activeId, setActiveId] = useState(variants[0].id);
  const [letters, setLetters] = useState("AB");
  const [digits, setDigits] = useState("123");
  const [mode, setMode] = useState<"poster" | "webgl" | "flat">("poster");
  const root = useRef<HTMLDivElement>(null);
  const flat = useRef<HTMLCanvasElement>(null);

  const active = variants.find((v) => v.id === activeId) ?? variants[0];

  const spec = useMemo<PlateSpec>(
    () => (active.custom ? { ...active.spec, code: `${letters || "A"} ${digits || "1"}` } : active.spec),
    [active, letters, digits],
  );

  const plateText = `${district}-${letters || "A"} ${digits || "1"}`;
  const message = active.custom ? text.customMessage.replace("{plate}", plateText) : active.whatsapp;
  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

  // The page's accent follows the chosen plate type.
  useEffect(() => {
    const fixed = getComputedStyle(document.documentElement).getPropertyValue("--hero-accent-fixed").trim();
    root.current?.closest("section")?.style.setProperty("--hero-accent", fixed || active.accent);
  }, [active.accent]);

  // Flat drawing of the same plate when WebGL is not available.
  useEffect(() => {
    if (mode !== "flat" || !flat.current) return;
    let cancelled = false;
    plateFont().then((font) => {
      if (!cancelled && flat.current) paintPlate(flat.current, spec, font, "colour");
    });
    return () => {
      cancelled = true;
    };
  }, [mode, spec]);

  return (
    <div
      ref={root}
      className="grid gap-x-12 gap-y-3 md:gap-y-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:grid-rows-[auto_auto] lg:content-center"
    >
      {/* Wide screens: headline and lead stack on the left, the plate column sits beside both.
          Phones: headline, then the plate column; the lead is left out to keep it to one screen. */}
      <div className="lg:col-start-1 lg:row-start-1 lg:self-end">{intro}</div>

      <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
        {/* The plate */}
        <div className="hero-plate relative mx-auto w-full max-w-[44rem]">
          <div
            aria-hidden="true"
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${mode === "poster" ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <PlatePoster district={district} code={active.spec.code} />
          </div>
          {mode === "flat" && (
            <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <canvas
                ref={flat}
                width={PLATE_PX.w}
                height={PLATE_PX.h}
                className="w-[82%] -rotate-2 rounded-[0.6rem] shadow-2xl shadow-black/50"
              />
            </div>
          )}
          {mode !== "flat" && (
            <div className={`absolute inset-0 transition-opacity duration-700 ${mode === "webgl" ? "opacity-100" : "opacity-0"}`}>
              <PlateScene
                spec={spec}
                flipKey={active.id}
                accent={active.accent}
                onReady={() => setMode("webgl")}
                onFail={() => setMode("flat")}
              />
            </div>
          )}
        </div>

        {/* Picker */}
        <div role="group" aria-label={text.pick} className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
          {variants.map((v) => {
            const on = v.id === active.id;
            return (
              <button
                key={v.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActiveId(v.id)}
                className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-3.5 text-[0.93rem] font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  on ? "border-white bg-white text-black" : "border-white/20 text-white/80 hover:border-white/50 hover:text-white"
                }`}
              >
                <span aria-hidden="true" className="size-2.5 rounded-full" style={{ backgroundColor: v.accent }} />
                {v.label}
              </button>
            );
          })}
        </div>

        {/* What the chosen plate means. Every type uses the same amount of room, so the
            hero keeps its height when the visitor switches. */}
        <div aria-live="polite" className="mt-3 rounded-3xl border border-white/12 bg-white/[0.055] p-4 backdrop-blur-sm md:mt-4 md:p-5">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="min-w-0 truncate font-display text-[1.15rem] font-semibold text-white md:text-2xl">{active.title}</h2>
            <p className="shrink-0 font-display text-lg font-semibold text-white tabular-nums md:text-xl">{active.price}</p>
          </div>

          {active.custom ? (
            <div className="mt-2.5 flex min-h-[3.25rem] items-center gap-2.5">
              <span translate="no" className="font-mono text-xl font-bold text-white">
                {district}
              </span>
              <input
                name="plate-letters"
                aria-label={text.letters}
                value={letters}
                onChange={(e) => setLetters(e.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 2))}
                inputMode="text"
                autoCapitalize="characters"
                autoComplete="off"
                spellCheck={false}
                maxLength={2}
                placeholder="AB…"
                className="h-12 w-[4.75rem] rounded-xl border border-white/25 bg-black/30 px-3 font-mono text-xl font-bold tracking-widest text-white uppercase placeholder:text-white/30 focus-visible:border-white focus-visible:outline-2 focus-visible:outline-white"
              />
              <input
                name="plate-digits"
                aria-label={text.digits}
                value={digits}
                onChange={(e) => setDigits(e.target.value.replace(/\D/g, "").replace(/^0+/, "").slice(0, 4))}
                inputMode="numeric"
                autoComplete="off"
                spellCheck={false}
                maxLength={4}
                placeholder="123…"
                className="h-12 w-[6.25rem] rounded-xl border border-white/25 bg-black/30 px-3 font-mono text-xl font-bold tracking-widest text-white placeholder:text-white/30 focus-visible:border-white focus-visible:outline-2 focus-visible:outline-white"
              />
              <p className="hidden min-w-0 flex-1 text-sm leading-snug text-white/55 sm:line-clamp-2">{text.customHint}</p>
            </div>
          ) : (
            <p className="mt-2 line-clamp-2 min-h-[3.25rem] max-w-[52ch] text-[0.98rem] leading-relaxed text-white/70 [@media(max-height:699px)]:hidden md:text-[1.02rem]">
              {active.text}
            </p>
          )}

          <div className="mt-3.5 flex gap-2.5 md:mt-4">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2.5 rounded-full bg-[#1f9d55] px-4 font-semibold whitespace-nowrap text-white transition-colors duration-200 hover:bg-[#178246] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f9d55] sm:flex-none sm:px-5"
            >
              <WhatsAppIcon />
              <span>
                {text.whatsapp}
                {active.custom && <span className="hidden sm:inline">: {plateText}</span>}
              </span>
            </a>
            <Link
              href={active.href}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/25 px-4 font-semibold whitespace-nowrap text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-none sm:px-5"
            >
              <span className="sm:hidden">{text.moreShort}</span>
              <span className="hidden sm:inline">{text.more}</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:block lg:col-start-1 lg:row-start-2 lg:self-start">{children}</div>
    </div>
  );
}

/** Plain HTML plate shown until the 3D scene has loaded, and when scripts are off. */
function PlatePoster({ district, code }: { district: string; code: string }) {
  return (
    <span
      translate="no"
      className="inline-flex -rotate-2 items-stretch overflow-hidden rounded-2xl border-[3px] border-black bg-white font-mono text-[clamp(2.4rem,8vw,5rem)] leading-none font-bold text-black shadow-2xl shadow-black/50"
    >
      <span className="flex flex-col items-center justify-between bg-[#003399] px-[0.28em] py-[0.22em] text-white">
        <span className="text-[0.32em] leading-none text-[#ffcc00]">✶</span>
        <span className="text-[0.36em] leading-none">D</span>
      </span>
      <span className="flex items-center gap-[0.22em] px-[0.4em] py-[0.26em] tracking-[0.04em]">
        <span>{district}</span>
        <span className="flex flex-col gap-[0.1em]">
          <span className="size-[0.26em] rounded-full bg-[#1f9d55]" />
          <span className="size-[0.26em] rounded-full bg-[#6b7280]" />
        </span>
        <span>{code}</span>
      </span>
    </span>
  );
}
