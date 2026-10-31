# SneakersGames

A responsive landing page for the independent sports games studio behind [Fan Arena](https://fanarena.com), built with **Next.js App Router, TypeScript, and Tailwind CSS 4**. The supplied SneakersGames logo is retained. All sports visuals are original CSS/SVG illustrations; fictional scores, teams, and players are decorative examples, not product screenshots or performance claims.

## Local development

Use Node.js **20.9 or later** (Node.js 24 LTS recommended) and npm.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open [localhost:3000](http://localhost:3000). The two variable font families are bundled in `app/fonts` and loaded with `next/font/local`. Builds and visitors do not make Google Fonts requests; after dependencies are installed, font loading works offline.

```sh
npm run typecheck
npm run build
npm start
```

The production build statically renders the landing page and metadata routes. The production server also handles Next.js image optimization. There is no database, authentication, CMS, analytics service, or contact form to configure.

## Configuration and content

- `lib/site-config.ts` owns the studio name, page copy, venture URL, and contact settings.
- `CONTACT_EMAIL` overrides the supplied default **octavian@sneakersgames.com**. Contact links open the visitor’s email app with a subject. No email service or server-side submission is required. An explicitly empty value disables the email CTA; do not deploy with a blank value if email contact is wanted.
- `SITE_URL` sets the real public origin used for canonical URLs, social metadata, robots, and the sitemap. Use an absolute HTTP(S) URL such as your verified custom domain. Do not include a path.
- If `SITE_URL` is unset on Vercel, `VERCEL_PROJECT_PRODUCTION_URL` provides the production origin. Locally, `http://localhost:3000` is the fallback. Without a configured public origin, indexing is disabled, the canonical URL is omitted, and the sitemap is empty. Vercel preview deployments are also marked `noindex`.
- Environment variables are evaluated when the site builds. Redeploy after changing them.
- `app/globals.css` contains the color palette, typography, layout, and motion rules. The display font is Bricolage Grotesque (weights 200–800) and the body font is DM Sans (weights 100–1000), loaded with `next/font/local` in `app/layout.tsx`. Only the Latin variable WOFF2 subsets are included, approximately 76 KB combined.
- Both fonts use the SIL Open Font License. Keep `app/fonts/BricolageGrotesque-OFL.txt` and `app/fonts/DMSans-OFL.txt` with redistributed source and font files. The bundled files come from Google Fonts; their license sources are [Bricolage Grotesque](https://github.com/google/fonts/blob/main/ofl/bricolagegrotesque/OFL.txt) and [DM Sans](https://github.com/google/fonts/blob/main/ofl/dmsans/OFL.txt). Add appropriate subsets if you expand the site to languages outside the bundled Latin coverage.
- `app/icon.svg` provides the favicon. `app/opengraph-image.tsx` produces the social sharing image. `app/sitemap.ts` and `app/robots.ts` expose `/sitemap.xml` and `/robots.txt`.
- Social links are intentionally absent until real URLs are supplied.

No contact configuration is missing: the supplied studio email is active by default. **Set the production origin before a public launch** if the automatic Vercel domain is not the intended canonical address.

## Deploy to Vercel

1. Push this directory to a Git repository and import it as a project in Vercel.
2. Select the **Next.js** framework preset. Keep the root directory at this project’s root and the default install, build, and output settings. Select a supported Node.js version (24 LTS recommended).
3. Set `SITE_URL` to the final production origin. Optionally set `CONTACT_EMAIL`; the supplied address works without an override.
4. Deploy. Add your domain under the Vercel project’s Domains settings, and follow the DNS records Vercel provides.
5. After setting or changing the final domain or environment values, redeploy. Check `/`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, and the email and Fan Arena links.

You can also run `npx vercel` in this directory after installing dependencies and signing in to your Vercel account. This source is deployment-ready; it does not include account credentials or a preconfigured deployment.

## Accessibility and maintenance

The page uses semantic sections, accessible navigation, descriptive links, visible keyboard focus, and reduced-motion overrides. Decorative visual content is excluded from the accessibility tree. Navigation and contact remain standard links; the site does not depend on a form service.

Keep the lockfile in version control and use `npm ci` for reproducible installs. Update Next.js and its dependencies regularly, then rerun the type check and production build. The initial framework version follows the current [Next.js installation documentation](https://nextjs.org/docs/app/getting-started/installation) and includes the [October 2026 security updates](https://nextjs.org/blog/nextjs-security-update-october-14-2026).
