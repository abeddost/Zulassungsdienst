import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Share image: the licence plate on the dark hero ground. */
export default function OpengraphImage() {
  const { district, letters, digits } = site.plate;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0b1020 0%, #0d1a4a 100%)",
          color: "#f6f4ef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 6, color: "#f2cf3b" }}>WIESBADEN · MAINZ-KASTEL</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "stretch",
              background: "#fff",
              color: "#000",
              border: "6px solid #000",
              borderRadius: 22,
              overflow: "hidden",
              fontSize: 120,
              fontWeight: 700,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-end", background: "#003399", color: "#fff", fontSize: 40, padding: "0 22px 18px" }}>D</div>
            <div style={{ display: "flex", padding: "10px 44px" }}>{`${district} ${letters} ${digits}`}</div>
          </div>
          <div style={{ display: "flex", marginTop: 44, fontSize: 64, fontWeight: 700 }}>{site.name}</div>
          <div style={{ display: "flex", marginTop: 12, fontSize: 34, color: "#c9cddc" }}>Kfz-Zulassung ohne Termin · Car registration without the wait</div>
        </div>
      </div>
    ),
    size,
  );
}
