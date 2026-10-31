import { ImageResponse } from "next/og";

export const alt = "SneakersGames. Serious about sports. Playful about games.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#f8f6ed", color: "#242020", display: "flex", flexDirection: "column", padding: "64px 74px", position: "relative" }}>
        <div style={{ color: "#6c32cf", fontSize: 40, fontWeight: 900, letterSpacing: -2 }}>SneakersGames</div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 48, fontSize: 86, fontWeight: 900, lineHeight: 1.04, letterSpacing: -5 }}>
          <span>Serious about sports.</span>
          <span style={{ color: "#6c32cf" }}>Playful about games.</span>
        </div>
        <div style={{ display: "flex", marginTop: 54, fontSize: 23 }}>Independent sports games studio · Home of Fan Arena</div>
        <div style={{ display: "flex", position: "absolute", right: 68, top: 54, borderRadius: "50%", width: 74, height: 74, background: "#d9f279", alignItems: "center", justifyContent: "center" }}><svg width="42" height="42" viewBox="0 0 42 42"><path d="M21 3V39M3 21H39M8 8L34 34M8 34L34 8" stroke="#6c32cf" strokeWidth="4" /></svg></div>
      </div>
    ),
    size,
  );
}
