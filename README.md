# SneakersGames

A responsive landing page for the independent sports games studio behind [Fan Arena](https://fanarena.com), built with **Next.js App Router, TypeScript, and Tailwind CSS 4**. The supplied SneakersGames logo is retained. All sports visuals are original CSS/SVG illustrations; fictional scores, teams, and players are decorative examples, not product screenshots or performance claims.

## Local development

Use Node.js **20.9 or later** (Node.js 24 LTS recommended) and npm.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open [localhost:3000](http://localhost:3000). Comic Neue regular and bold are bundled in `app/fonts` and loaded with `next/font/local`. Builds and visitors do not make Google Fonts requests; after dependencies are installed, font loading works offline.

```sh
npm run typecheck
npm run build
npm start
```

The production build statically renders the landing page and metadata routes. The production server also handles Next.js image optimization. There is no database, authentication, CMS, analytics service, or contact form to configure.

## Configuration and content

- `lib/site-config.ts` owns the studio name, page copy, venture URL, and footer text.
- `SITE_URL` sets the real public origin used for canonical URLs, social metadata, robots, and the sitemap. Use an absolute HTTP(S) URL such as your verified custom domain. Do not include a path.
- If `SITE_URL` is unset on Vercel, `VERCEL_PROJECT_PRODUCTION_URL` provides the production origin. Locally, `http://localhost:3000` is the fallback. Without a configured public origin, indexing is disabled, the canonical URL is omitted, and the sitemap is empty. Vercel preview deployments are also marked `noindex`.
- Environment variables are evaluated when the site builds. Redeploy after changing them.
- `app/globals.css` contains the palette and responsive layout. Comic Neue regular (400) and bold (700) are bundled and loaded with `next/font/local` in `app/layout.tsx`.
- Comic Neue uses the SIL Open Font License. Keep `app/fonts/ComicNeue-OFL.txt` with redistributed font files. Source: [Google Fonts](https://github.com/google/fonts/tree/main/ofl/comicneue).
- `app/icon.svg` provides the favicon. `app/opengraph-image.tsx` produces the social sharing image. `app/sitemap.ts` and `app/robots.ts` expose `/sitemap.xml` and `/robots.txt`.
- Social links are intentionally absent until real URLs are supplied.


## Deploy to Vercel

1. Push this directory to a Git repository and import it as a project in Vercel.
2. Select the **Next.js** framework preset. Keep the root directory at this project’s root and the default install, build, and output settings. Select a supported Node.js version (24 LTS recommended).
4. Deploy. Add your domain under the Vercel project’s Domains settings, and follow the DNS records Vercel provides.
5. After setting or changing the final domain or environment values, redeploy. Check `/`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, and the Fan Arena links.

You can also run `npx vercel` in this directory after installing dependencies and signing in to your Vercel account. This source is deployment-ready; it does not include account credentials or a preconfigured deployment.

## Accessibility and maintenance

The page uses semantic sections, descriptive external links, visible keyboard focus, and reduced-motion overrides. Decorative graphics are excluded from the accessibility tree.

Keep the lockfile in version control and use `npm ci` for reproducible installs. Update Next.js and its dependencies regularly, then rerun the type check and production build. The initial framework version follows the current [Next.js installation documentation](https://nextjs.org/docs/app/getting-started/installation) and includes the [October 2026 security updates](https://nextjs.org/blog/nextjs-security-update-october-14-2026).

The minimal page contains a centered studio headline and the Fan Arena feature. Contact details and in-page navigation are not displayed.
