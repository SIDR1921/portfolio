import { ImageResponse } from "next/og";

export const alt = "Siddharth Ray — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social-share card: lamp-black ground, turmeric Konark wheel, name + motto.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#1a1411",
          color: "#f4ece0",
          padding: "80px",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Konark wheel, bleeding off the right edge */}
        <svg
          width="560"
          height="560"
          viewBox="0 0 200 200"
          style={{ position: "absolute", right: "-110px", top: "35px" }}
        >
          <circle cx="100" cy="100" r="93" fill="none" stroke="#e2a739" strokeWidth="2.4" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#b5532a" strokeWidth="1.2" />
          <circle cx="100" cy="100" r="17" fill="none" stroke="#e2a739" strokeWidth="2.6" />
          <circle cx="100" cy="100" r="3" fill="#e2a739" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
            const r = (a * Math.PI) / 180;
            return (
              <line
                key={a}
                x1={100 + 17 * Math.sin(r)}
                y1={100 - 17 * Math.cos(r)}
                x2={100 + 78 * Math.sin(r)}
                y2={100 - 78 * Math.cos(r)}
                stroke="#e2a739"
                strokeWidth="3"
              />
            );
          })}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((a) => {
            const r = (a * Math.PI) / 180;
            return (
              <line
                key={a}
                x1={100 + 17 * Math.sin(r)}
                y1={100 - 17 * Math.cos(r)}
                x2={100 + 78 * Math.sin(r)}
                y2={100 - 78 * Math.cos(r)}
                stroke="#b5532a"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "620px",
          }}
        >
          <div style={{ fontSize: 34, letterSpacing: 4, color: "#e2a739", marginBottom: 24 }}>
            PORTFOLIO
          </div>
          <div style={{ fontSize: 88, fontWeight: 600, lineHeight: 1 }}>Siddharth Ray.</div>
          <div style={{ fontSize: 40, fontStyle: "italic", color: "#e2a739", marginTop: 28 }}>
            Simplicity is the ultimate sophistication.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
