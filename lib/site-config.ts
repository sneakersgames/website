/** Studio settings and finished page copy. Keep external links and contact details here. */
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

const email = (process.env.CONTACT_EMAIL ?? "octavian@sneakersgames.com").trim();
if (email && !/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(email)) {
  throw new Error("CONTACT_EMAIL must be a valid email address, or empty to disable the email CTA.");
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
  contact: {
    email,
    href: email ? `mailto:${email}?subject=${encodeURIComponent("Let's talk sports and games")}` : null,
  },
} as const;

export const pageCopy = {
  navigation: { work: "Our work", about: "About", contact: "Contact", venture: "Explore Fan Arena" },
  hero: {
    label: "Independent sports games studio",
    title: { lead: ["Serious about", "sports."], playful: ["Playful", "about games."] },
    description: "We create sports games that turn fans into players. From fantasy competitions to new ways to experience the game, we bring sport and play together.",
    primaryCta: "Discover Fan Arena",
    secondaryCta: "Let’s talk",
    footnote: "A little competition. A whole lot of fun.",
    illustrationCaption: "Big fan energy. Endless possibilities.",
  },
  playStrip: ["Sport in our DNA", "Play on our minds", "Fans at our heart", "Game on, always"],
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
  principles: {
    sectionLabel: "What drives us",
    title: ["Great sport deserves", "great games."],
    introduction: ["That feeling when it all clicks?", "That’s what we build for."],
    items: [
      { title: "Easy to pick up", description: "Clear rules and welcoming experiences." },
      { title: "Fun to master", description: "Meaningful choices that keep players coming back." },
      { title: "Made for fans", description: "Sports knowledge and passion at the heart of every game." },
    ],
  },
  about: {
    sectionLabel: "About SneakersGames",
    title: ["Small studio.", "Big love for", "the game."],
    description: "We’re SneakersGames, an independent studio bringing sports expertise, game design, and technology to the same team. We make welcoming games for people who love sport as much as we do.",
    detail: "We’re here for the last-minute winners, the friendly rivalries, and the “one more game” moments. And we’re turning that feeling into things you can play.",
    cta: "Meet your next creative teammate",
    note: { label: "The studio mindset", lines: ["Fans first.", "Game makers", "always."] },
  },
  contact: {
    label: "Good games start with a conversation",
    title: ["Got a", "sporting idea?"],
    description: "Interested in our games, a partnership, or building something together? Let’s talk.",
    cta: "Let’s talk",
  },
  footer: { tagline: "Sport. Play. Repeat.", venture: "FanArena.com" },
} as const;
