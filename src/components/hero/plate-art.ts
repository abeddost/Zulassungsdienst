/**
 * Draws the face of a German licence plate onto a 2D canvas.
 * The same drawing is used as the texture of the 3D plate and as the flat fallback
 * when WebGL is unavailable, so both always show the same thing.
 *
 * Scale: 4 px per millimetre of a standard 520 x 110 mm plate.
 */

export const PLATE_PX = { w: 2080, h: 440 } as const;

export type PlateSpec = {
  /** Blue EU field on the left. Short-term and export plates have none. */
  strip: boolean;
  district: string;
  /** Letters and digits after the seals, e.g. "MK 93" or "04123". */
  code: string;
  /** "removed" shows scraped-off seals, as on a deregistered plate. */
  seals: "full" | "removed";
  /** Coloured date field on the right: yellow for short-term, red for export plates. */
  side?: { tone: "yellow" | "red"; lines: [string, string, string] };
};

type Mode = "colour" | "bump";

const INK = "#0d0f12";

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function star(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? r : r * 0.42;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    ctx.lineTo(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius);
  }
  ctx.closePath();
  ctx.fill();
}

/**
 * @param fontFamily CSS font-family for the characters (the site's plate font).
 * @param mode "colour" paints the visible face. "bump" paints a height map: mid grey is
 *             flat, lighter is raised, which gives the characters their embossed edge in 3D.
 */
export function paintPlate(canvas: HTMLCanvasElement, spec: PlateSpec, fontFamily: string, mode: Mode = "colour") {
  const { w: W, h: H } = PLATE_PX;
  if (canvas.width !== W) canvas.width = W;
  if (canvas.height !== H) canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const bump = mode === "bump";
  const raised = "#ffffff";
  const flat = "#7a7a7a";
  const ink = bump ? raised : INK;

  ctx.clearRect(0, 0, W, H);

  // Plate body
  roundRect(ctx, 0, 0, W, H, 44);
  ctx.fillStyle = bump ? flat : "#f8f8f4";
  ctx.fill();

  // Raised black rim
  roundRect(ctx, 14, 14, W - 28, H - 28, 34);
  ctx.lineWidth = 14;
  ctx.strokeStyle = ink;
  ctx.stroke();

  const inner = { x: 21, y: 21, w: W - 42, h: H - 42 };

  // Everything else stays inside the rim
  ctx.save();
  roundRect(ctx, inner.x, inner.y, inner.w, inner.h, 28);
  ctx.clip();

  let left = inner.x + 46;
  let right = inner.x + inner.w - 46;

  if (spec.strip) {
    const sw = 178;
    if (!bump) {
      ctx.fillStyle = "#003399";
      ctx.fillRect(inner.x, inner.y, sw, inner.h);
      ctx.fillStyle = "#ffcc00";
      for (let i = 0; i < 12; i++) {
        const a = (Math.PI * 2 * i) / 12;
        star(ctx, inner.x + sw / 2 + Math.cos(a) * 50, 142 + Math.sin(a) * 50, 10);
      }
      ctx.fillStyle = "#ffffff";
      ctx.font = `700 104px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";
      ctx.fillText("D", inner.x + sw / 2, 372);
    }
    left = inner.x + sw + 44;
  }

  if (spec.side) {
    const sw = 168;
    const x = inner.x + inner.w - sw;
    if (!bump) {
      ctx.fillStyle = spec.side.tone === "yellow" ? "#f4c600" : "#cf1f2b";
      ctx.fillRect(x, inner.y, sw, inner.h);
    }
    ctx.fillStyle = bump ? raised : spec.side.tone === "yellow" ? INK : "#ffffff";
    ctx.font = `700 92px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    spec.side.lines.forEach((line, i) => ctx.fillText(line, x + sw / 2, 118 + i * 104));
    right = x - 44;
  }

  // Characters: district, the two seals, then the code. Squeezed sideways only if too long.
  const size = 312;
  ctx.font = `700 ${size}px ${fontFamily}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  const sealSlot = 150;
  const gap = size * 0.3; // between letters and digits, narrower than a full character
  const parts = spec.code.split(" ").filter(Boolean);
  const partWidths = parts.map((part) => ctx.measureText(part).width);
  const wDistrict = ctx.measureText(spec.district).width;
  const wCode = partWidths.reduce((sum, width) => sum + width, 0) + gap * Math.max(0, parts.length - 1);
  const total = wDistrict + sealSlot + wCode;
  const available = right - left;
  const squeeze = Math.min(1, available / total);
  const startX = left + (available - total * squeeze) / 2;
  const metrics = ctx.measureText("W");
  const baseline = H / 2 + (metrics.actualBoundingBoxAscent || size * 0.72) / 2;

  ctx.save();
  ctx.translate(startX, 0);
  ctx.scale(squeeze, 1);
  ctx.fillStyle = ink;
  ctx.fillText(spec.district, 0, baseline);
  let cursor = wDistrict + sealSlot;
  parts.forEach((part, i) => {
    ctx.fillText(part, cursor, baseline);
    cursor += partWidths[i] + gap;
  });

  // Seals: inspection sticker on top, city seal below
  const sx = wDistrict + sealSlot / 2;
  const sealY = [H / 2 - 74, H / 2 + 74];
  sealY.forEach((sy, i) => {
    ctx.beginPath();
    ctx.arc(sx, sy, 50, 0, Math.PI * 2);
    if (bump) {
      ctx.fillStyle = spec.seals === "full" ? "#b4b4b4" : flat;
      ctx.fill();
      return;
    }
    if (spec.seals === "removed") {
      ctx.fillStyle = "#e3e3de";
      ctx.fill();
      ctx.save();
      ctx.clip();
      ctx.strokeStyle = "#b9b9b2";
      ctx.lineWidth = 5;
      for (let k = -60; k <= 60; k += 20) {
        ctx.beginPath();
        ctx.moveTo(sx - 60, sy + k - 16);
        ctx.lineTo(sx + 60, sy + k + 16);
        ctx.stroke();
      }
      ctx.restore();
      return;
    }
    if (i === 0) {
      ctx.fillStyle = "#1f9d55";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.9)";
      ctx.lineWidth = 4;
      for (let k = 0; k < 12; k++) {
        const a = (Math.PI * 2 * k) / 12;
        ctx.beginPath();
        ctx.moveTo(sx + Math.cos(a) * 36, sy + Math.sin(a) * 36);
        ctx.lineTo(sx + Math.cos(a) * 46, sy + Math.sin(a) * 46);
        ctx.stroke();
      }
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(sx, sy, 15, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = "#e9e9e4";
      ctx.fill();
      ctx.lineWidth = 6;
      ctx.strokeStyle = "#3a3f4a";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(sx, sy, 34, 0, Math.PI * 2);
      ctx.lineWidth = 3;
      ctx.stroke();
      // a small shield, standing in for the city arms
      ctx.fillStyle = "#1c3fa8";
      ctx.beginPath();
      ctx.moveTo(sx - 15, sy - 17);
      ctx.lineTo(sx + 15, sy - 17);
      ctx.lineTo(sx + 15, sy + 2);
      ctx.quadraticCurveTo(sx + 15, sy + 16, sx, sy + 22);
      ctx.quadraticCurveTo(sx - 15, sy + 16, sx - 15, sy + 2);
      ctx.closePath();
      ctx.fill();
    }
  });
  ctx.restore();

  ctx.restore();
}

/** Resolves the plate font that next/font registered, once it has loaded. */
export async function plateFont(): Promise<string> {
  const fallback = "ui-monospace, Menlo, monospace";
  if (typeof document === "undefined") return fallback;
  const fromCss = getComputedStyle(document.documentElement).getPropertyValue("--font-plate").trim();
  const family = fromCss ? `${fromCss}, ${fallback}` : fallback;
  try {
    await document.fonts.load(`700 120px ${family}`, "WI 0123456789");
  } catch {
    // The fallback font is drawn instead.
  }
  return family;
}
