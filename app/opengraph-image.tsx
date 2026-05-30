import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pure Marketing — Digital Marketing Agency Hamilton, Ontario";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#080808",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 90px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(240,100,40,0.25) 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
            opacity: 0.12,
          }}
        />

        {/* Orange glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(240,100,40,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Orange accent bar */}
        <div
          style={{
            width: 60,
            height: 6,
            background: "#F06428",
            borderRadius: 4,
            marginBottom: 36,
          }}
        />

        {/* Logo / Brand name */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#F06428",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: 24,
            display: "flex",
          }}
        >
          PURE MARKETING
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 28,
            maxWidth: 900,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          Marketing That{" "}
          <span style={{ color: "#F06428", marginLeft: 16 }}>Actually Works.</span>
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 24,
            color: "#888888",
            lineHeight: 1.5,
            maxWidth: 700,
            marginBottom: 56,
            display: "flex",
          }}
        >
          Google Ads · Meta Ads · Web Design · Lead Generation
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          {/* Stats pills */}
          {[
            { val: "150+", label: "Clients" },
            { val: "4.9★", label: "Rating" },
            { val: "$2M+", label: "Ad Spend" },
          ].map(({ val, label }) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: "12px 24px",
              }}
            >
              <span style={{ color: "#ffffff", fontSize: 28, fontWeight: 800, lineHeight: 1, display: "flex" }}>{val}</span>
              <span style={{ color: "#555555", fontSize: 14, marginTop: 4, display: "flex" }}>{label}</span>
            </div>
          ))}

          {/* Divider */}
          <div style={{ flex: 1 }} />

          {/* Domain */}
          <div
            style={{
              fontSize: 20,
              color: "#444444",
              display: "flex",
            }}
          >
            puremarketing.ca
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
