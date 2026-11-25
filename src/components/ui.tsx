import { site, telLink, waLink } from "@/lib/site";

/* ---------- Icons (inline, decorative unless labelled by the parent) ---------- */

type IconProps = { className?: string };

export function WhatsAppIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24ZM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.76 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.28-.25-.13-1.47-.73-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43l-.48-.01Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function ArrowIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function PinIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ---------- Contact actions: the only two ways to reach the business ---------- */

const WA_GREEN = "bg-[#1f9d55] text-white hover:bg-[#178246] focus-visible:outline-[#1f9d55]";

export function WhatsAppButton({
  message,
  label,
  size = "md",
  className = "",
}: {
  message: string;
  label: string;
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${WA_GREEN} ${
        size === "lg" ? "min-h-14 px-7 text-lg" : "min-h-12 px-5 text-base"
      } ${className}`}
    >
      <WhatsAppIcon className={size === "lg" ? "size-6" : "size-5"} />
      {label}
    </a>
  );
}

export function CallButton({
  label,
  tone = "light",
  size = "md",
  className = "",
}: {
  label: string;
  tone?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
}) {
  const colours =
    tone === "dark"
      ? "border-white/25 text-white hover:bg-white/10 focus-visible:outline-white"
      : "border-base-content/20 text-base-content hover:bg-base-content/5 focus-visible:outline-primary";
  return (
    <a
      href={telLink}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full border font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${colours} ${
        size === "lg" ? "min-h-14 px-7 text-lg" : "min-h-12 px-5 text-base"
      } ${className}`}
    >
      <PhoneIcon className={size === "lg" ? "size-6" : "size-5"} />
      <span>
        {label} <span className="font-mono tabular-nums">{site.phone.display}</span>
      </span>
    </a>
  );
}

/* ---------- The licence plate, used as logo and as a graphic ---------- */

export function Plate({
  size = "sm",
  className = "",
}: {
  size?: "sm" | "lg" | "xl";
  className?: string;
}) {
  const { district, letters, digits } = site.plate;
  const scale =
    size === "xl"
      ? "text-[clamp(2.6rem,7vw,4.75rem)] rounded-2xl border-[3px]"
      : size === "lg"
        ? "text-4xl rounded-xl border-[3px]"
        : "text-[1.05rem] rounded-md border-2";
  return (
    <span
      aria-hidden="true"
      translate="no"
      className={`inline-flex select-none items-stretch overflow-hidden border-black bg-white font-mono leading-none font-bold text-black ${scale} ${className}`}
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
        <span>{letters}</span>
        <span>{digits}</span>
      </span>
    </span>
  );
}
