import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const displayFont = localFont({
  src: "./fonts/bricolage-grotesque-latin-variable.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-display",
  display: "swap",
});

const bodyFont = localFont({
  src: "./fonts/dm-sans-latin-variable.woff2",
  weight: "100 1000",
  style: "normal",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "SneakersGames — Serious about sports. Playful about games.",
  description: siteConfig.description,
  applicationName: siteConfig.name,
  ...(siteConfig.isIndexable ? { alternates: { canonical: "/" } } : {}),
  robots: { index: siteConfig.isIndexable, follow: siteConfig.isIndexable },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: "SneakersGames — Sport meets play.",
    description: siteConfig.description,
    ...(siteConfig.isIndexable ? { url: siteConfig.siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "SneakersGames — Sport meets play.",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = { themeColor: "#f8f6ed" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
