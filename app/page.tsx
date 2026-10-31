import { ArenaArtwork, HeroArtwork, SportIcon } from "@/components/sports-art";
import { Arrow, ButtonLink, SectionLabel, Wordmark } from "@/components/ui";
import { pageCopy, siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header container" id="top">
        <Wordmark />
        <nav aria-label="Main navigation" className="main-nav">
          <a href="#work">{pageCopy.navigation.work}</a>
          <a href="#about">{pageCopy.navigation.about}</a>
          <a href="#contact">{pageCopy.navigation.contact}</a>
        </nav>
        <ButtonLink href={siteConfig.venture.url} external className="header-cta">{pageCopy.navigation.venture}</ButtonLink>
      </header>

      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />{pageCopy.hero.label}</p>
            <h1 id="hero-title">{pageCopy.hero.title.lead[0]} <br />{pageCopy.hero.title.lead[1]} <span className="hero-title-playful">{pageCopy.hero.title.playful[0]} <br className="desktop-break" />{pageCopy.hero.title.playful[1]}</span></h1>
            <p className="hero-description">{pageCopy.hero.description}</p>
            <div className="hero-actions">
              <ButtonLink href="#work">{pageCopy.hero.primaryCta}</ButtonLink>
              <a className="text-link" href="#contact">{pageCopy.hero.secondaryCta}<Arrow diagonal /></a>
            </div>
            <div className="hero-footnote"><span className="little-orbit" aria-hidden="true">✳</span>{pageCopy.hero.footnote}</div>
          </div>
          <figure className="hero-figure" aria-label="Original illustration of fictional player cards, scores, and league standings">
            <HeroArtwork />
            <figcaption><span className="caption-line" />{pageCopy.hero.illustrationCaption}<span className="sr-only"> Fictional game concepts, not product screenshots.</span></figcaption>
          </figure>
        </section>

        <div className="play-strip" aria-hidden="true">
          <div className="container play-strip-inner">{pageCopy.playStrip.flatMap((text) => [<span key={text}>{text}</span>, <span key={`${text}-star`} className="strip-flower">✳</span>])}</div>
        </div>

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

        <section className="principles-section container" aria-labelledby="principles-title">
          <SectionLabel number="02">{pageCopy.principles.sectionLabel}</SectionLabel>
          <div className="principles-heading"><h2 id="principles-title">{pageCopy.principles.title[0]} <br /><span className="text-purple">{pageCopy.principles.title[1]}</span></h2><p>{pageCopy.principles.introduction[0]} <br />{pageCopy.principles.introduction[1]}</p></div>
          <div className="principles-grid">
            {pageCopy.principles.items.map((principle, index) => (
              <article className="principle" key={principle.title}>
                <div className={`principle-icon principle-icon-${index}`}><SportIcon kind={(["play", "strategy", "heart"] as const)[index]} /></div>
                <span className="principle-number" aria-hidden="true">0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section container section-space" id="about" aria-labelledby="about-title">
          <div className="studio-note">
            <span className="studio-note-tape" aria-hidden="true" />
            <p className="note-eyebrow">{pageCopy.about.note.label}</p>
            <p className="studio-note-title">{pageCopy.about.note.lines[0]}<br />{pageCopy.about.note.lines[1]}<br /><span>{pageCopy.about.note.lines[2]}</span></p>
            <svg className="note-doodle" viewBox="0 0 210 80" fill="none" aria-hidden="true"><path d="M10 44C36 8 83 14 89 38c8 31-40 31-36 2C57 8 142 10 176 37m-18-22 21 22-28 12" /><path d="m185 53 6 10 12-3m-18-5-3 14" /></svg>
            <span className="studio-note-sticker" aria-hidden="true">100%<small>IN IT FOR<br />THE GAME</small></span>
          </div>
          <div className="about-copy">
            <SectionLabel number="03">{pageCopy.about.sectionLabel}</SectionLabel>
            <h2 id="about-title">{pageCopy.about.title[0]} <br />{pageCopy.about.title[1]} <br /><span className="text-purple">{pageCopy.about.title[2]}</span></h2>
            <p>{pageCopy.about.description}</p>
            <p>{pageCopy.about.detail}</p>
            <a className="text-link" href="#contact">{pageCopy.about.cta}<Arrow diagonal /></a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <div className="contact-sparkle" aria-hidden="true">✳</div>
            <p className="eyebrow">{pageCopy.contact.label}</p>
            <h2 id="contact-title">{pageCopy.contact.title[0]} <span>{pageCopy.contact.title[1]}</span></h2>
            <p className="contact-description">{pageCopy.contact.description}</p>
            {siteConfig.contact.href ? <ButtonLink href={siteConfig.contact.href} variant="lime">{pageCopy.contact.cta}</ButtonLink> : <ButtonLink href={siteConfig.venture.url} external variant="lime">{pageCopy.navigation.venture}</ButtonLink>}
            {siteConfig.contact.email && <a className="contact-email" href={siteConfig.contact.href ?? undefined}>{siteConfig.contact.email}</a>}
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <div className="footer-brand"><Wordmark footer /><span>{pageCopy.footer.tagline}</span></div>
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <a className="text-link" href={siteConfig.venture.url} target="_blank" rel="noopener noreferrer">{pageCopy.footer.venture}<Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a>
      </footer>
    </>
  );
}
