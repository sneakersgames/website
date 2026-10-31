import { ArenaArtwork } from "@/components/sports-art";
import { Arrow, ButtonLink, SectionLabel, Wordmark } from "@/components/ui";
import { pageCopy, siteConfig } from "@/lib/site-config";

export default function Home() {
  return <>
    <header className="site-header container"><Wordmark /></header>
    <main>
      <section className="hero container" aria-labelledby="hero-title">
        <h1 id="hero-title">{pageCopy.hero.title}</h1>
      </section>
        <section className="work-section container section-space" id="work" aria-labelledby="work-title">
          <div className="section-topline"><SectionLabel number="01">{pageCopy.venture.sectionLabel}</SectionLabel><p>{pageCopy.venture.introduction}</p></div>
          <div className="venture-card">
            <div className="venture-copy">
              <p className="eyebrow"><span className="status-dot" />{pageCopy.venture.label}</p>
              <h2 id="work-title">{pageCopy.venture.title[0]} <br /><span>{pageCopy.venture.title[1]}</span></h2>
              <p className="venture-description">{pageCopy.venture.description}</p>
              <ul className="venture-highlights" aria-label="Fan Arena highlights">
                {pageCopy.venture.highlights.map((highlight) => <li key={highlight}><span aria-hidden="true">✓</span>{highlight}</li>)}
              </ul>
              <ButtonLink href={siteConfig.venture.url} external variant="lime">{pageCopy.venture.cta}</ButtonLink>
            </div>
            <figure className="venture-figure" aria-label="Illustrated fantasy lineup and match prediction concept">
              <ArenaArtwork />
              <figcaption>{pageCopy.venture.illustrationCaption}<span className="sr-only"> This is an illustration, not an actual Fan Arena screenshot.</span></figcaption>
            </figure>
          </div>
        </section>

    </main>
    <footer className="site-footer container">
      <div className="footer-brand"><Wordmark footer /><span>{pageCopy.footer.tagline}</span></div>
      <p>© 2015-{new Date().getFullYear()} {siteConfig.name}</p>
      <a className="text-link" href={siteConfig.venture.url} target="_blank" rel="noopener noreferrer">{pageCopy.footer.venture}<Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a>
    </footer>
  </>;
}
