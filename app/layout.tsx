import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { resume } from "@/data/resume";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

const title = `${resume.name} – ${resume.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: title, template: `%s – ${resume.name}` },
  description: resume.summary,
  openGraph: { type: "website", title, description: resume.summary },
  twitter: { card: "summary_large_image", title, description: resume.summary },
};

// Runs before the page is painted so the saved theme shows without a flash
const themeScript = `try{var t=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
