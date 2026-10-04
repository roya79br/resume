import { ImageResponse } from "next/og";
import { resume } from "@/data/resume";

// Next.js finds this file by its name and adds the <meta property="og:image"> tag by itself.
// The picture is built from data/resume.ts, so changing the data changes the preview too.
export const dynamic = "force-static";
export const alt = "Resume preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#12343b",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 700 }}>{resume.name}</div>
        <div style={{ fontSize: 44, color: "#7fd1c7", marginTop: 12 }}>{resume.role}</div>
        <div style={{ fontSize: 30, color: "#c3dcd9", marginTop: 40 }}>{resume.location}</div>
      </div>
    ),
    size,
  );
}
