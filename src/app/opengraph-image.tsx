import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1c1813",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            color: "#d4a020",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          SOFTWARE ENGINEER
        </div>
        <div
          style={{
            color: "#f2ede4",
            fontSize: "80px",
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: "24px",
          }}
        >
          Gahan Patel
        </div>
        <div
          style={{
            color: "#6b6358",
            fontSize: "22px",
            marginTop: "8px",
          }}
        >
          CS + Business · Northeastern University · Boston, MA
        </div>
      </div>
    ),
    { ...size }
  );
}
