import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const studioFont = localFont({
  src: [
    { path: "./fonts/ComicNeue-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/ComicNeue-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-studio",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "SneakersGames — Indie Sports Game Studio",
  description: siteConfig.description,
  applicationName: siteConfig.name,
  ...(siteConfig.isIndexable ? { alternates: { canonical: "/" } } : {}),
  robots: { index: siteConfig.isIndexable, follow: siteConfig.isIndexable },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: "SneakersGames — Indie Sports Game Studio",
    description: siteConfig.description,
    ...(siteConfig.isIndexable ? { url: siteConfig.siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "SneakersGames — Indie Sports Game Studio",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = { themeColor: "#f8f6ed" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${studioFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
