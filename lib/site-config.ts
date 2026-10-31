/** Studio settings and finished page copy. Keep external links and studio copy here. */
const configuredOrigin = process.env.SITE_URL?.trim()
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "");

function getSiteUrl(value: string): string {
  if (!value) return "http://localhost:3000";
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) {
    throw new Error("SITE_URL must be an absolute HTTP(S) origin without credentials.");
  }
  return url.origin;
}

const siteUrl = getSiteUrl(configuredOrigin);
const hostname = new URL(siteUrl).hostname;
const isProductionOrigin = Boolean(configuredOrigin)
  && !["localhost", "127.0.0.1", "[::1]"].includes(hostname);

export const siteConfig = {
  name: "SneakersGames",
  description: "An independent sports games studio. We create games that turn fans into players. Meet SneakersGames and our flagship venture, Fan Arena.",
  siteUrl,
  isIndexable: isProductionOrigin && process.env.VERCEL_ENV !== "preview",
  venture: {
    name: "Fan Arena",
    url: "https://fanarena.com",
  },

} as const;

export const pageCopy = {
  hero: { title: "Indie Sports Game Studio" },
  venture: {
    sectionLabel: "Our work",
    introduction: "From the sidelines to the starting lineup.",
    label: "Our main venture",
    title: ["Fan Arena.", "Built for the fans."],
    description: "Our flagship venture brings fantasy sports and prediction games to sports audiences, helping publishers, broadcasters, and sports organizations turn fan passion into participation.",
    highlights: ["Fantasy sports", "Prediction games", "Fan engagement"],
    cta: "Visit FanArena.com",
    illustrationCaption: "Imagined gameplay. Real fan spirit.",
  },
  footer: { tagline: "Indie Sports Games Studio", venture: "FanArena.com" },
} as const;
