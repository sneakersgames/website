import { ImageResponse } from "next/og";

export const alt = "SneakersGames. Indie Sports Game Studio.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#f8f6ed", color: "#242020", display: "flex", flexDirection: "column", padding: "64px 74px", position: "relative" }}>
        <div style={{ color: "#6c32cf", fontSize: 40, fontWeight: 900, letterSpacing: -2 }}>SneakersGames</div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 48, fontSize: 86, fontWeight: 900, lineHeight: 1.04, letterSpacing: -5 }}>
          <span>Indie Sports</span>
          <span style={{ color: "#6c32cf" }}>Game Studio</span>
        </div>
        <div style={{ display: "flex", marginTop: 54, fontSize: 23 }}>Independent sports games studio · Home of Fan Arena</div>

      </div>
    ),
    size,
  );
}
