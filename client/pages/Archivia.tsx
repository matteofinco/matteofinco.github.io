import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';

interface ArchiviaProps {
  heroFit?: 'contain' | 'cover';
}

const content = {
  en: {
    title: "ARCHIVIA",
    subtitle: "Flash drive shaped pen holder",
    meta: {
      teamLabel: "Designers",
      yearLabel: "Year",
      yearVal: "2025",
      awardLabel: "Competition",
      awardVal: "PLEIADES"
    },
    overview: {
      title: "Overview",
      p1: "Archivia was developed for PLEIADES (Plastic European Innovation Award for Design and Sustainability), an international competition organized by the Università Iuav di Venezia (Vicenza campus) in partnership with Ewikon, Arburg, and Uniform.",
      p2: "The project addresses the challenge of designing a daily-use desktop object entirely from recycled polyamide, balancing conceptual identity with strict industrial constraints required for high-volume injection molding."
    },
    solution: {
      title: "Solution & Concept",
      p1: "The product creates a direct conceptual parallel between digital storage and analog writing tools. Taking functional and visual cues from a classic rotating USB flash drive, Archivia organizes pens and tools within a compact desktop footprint.",
      p2: "The assembly consists of exactly three monomaterial polymer parts engineered to lock together without adhesives, metal screws, or secondary fasteners."
    },
    research: {
      title: "Research & Kinematics",
      p1: "The central container is split into two symmetrical shell halves that interlock securely and pivot inside a 90° rotating outer cover through integrated mechanical snap-fit joints.",
      p2: "By optimizing draft angles, wall thicknesses, and rotational tolerances, the entire assembly is designed to be produced within a single mold layout, reducing production steps and ensuring straightforward end-of-life mono-material recycling."
    },
    bottomSection: {
      title: "Technical Insights",
      toolsTitle: "Software & Tools",
      toolsList: ["McNeel Rhino 7", "KeyShot Render", "Adobe Illustrator", "FDM Prototyping"],
      insights: [
        {
          title: "Industrial Constraints",
          desc: "Direct integration of mold parting lines, draft angles, and constant wall thicknesses optimized for mass injection molding."
        },
        {
          title: "Mono-material & Circularity",
          desc: "Complete elimination of secondary hardware by relying strictly on 90° mechanical interlocks and elastic snap-fit joints."
        }
      ]
    },
    cta: {
      title: "Next Project",
      subtitle: "Explore more design projects and methodologies in the portfolio.",
      button: "BACK TO PORTFOLIO"
    }
  },
  it: {
    title: "ARCHIVIA",
    subtitle: "Portapenne ispirato alle chiavette USB",
    meta: {
      teamLabel: "Designer",
      yearLabel: "Anno",
      yearVal: "2025",
      awardLabel: "Concorso",
      awardVal: "PLEIADES"
    },
    overview: {
      title: "Panoramica",
      p1: "Archivia nasce all'interno del concorso PLEIADES (Plastic European Innovation Award for Design and Sustainability), promosso dall'Università Iuav di Venezia (sede di Vicenza) in collaborazione con Ewikon, Arburg e Uniform.",
      p2: "Il progetto risponde alla richiesta di ideare un oggetto d'uso quotidiano in poliammide riciclata, coniugando la ricerca formale con i rigidi vincoli tecnici imposti dallo stampaggio ad iniezione ad alta produttività."
    },
    solution: {
      title: "Soluzione e Concept",
      p1: "L'oggetto stabilisce una corrispondenza concettuale tra la memorizzazione digitale dei dati e la scrittura analogica. Riprendendo le forme e il meccanismo di apertura delle classiche chiavette USB a rotazione, Archivia organizza la cancelleria in una struttura compatta da scrivania.",
      p2: "La struttura è composta da tre soli pezzi monomateriale progettati per assemblarsi ad incastro, senza l'impiego di componenti metallici o collanti."
    },
    research: {
      title: "Ricerca e Cinematismo",
      p1: "Il corpo centrale si suddivide in due metà speculari che si uniscono e si vincolano alla calotta esterna ruotabile a 90° tramite perni e snap-fit integrati nella geometria del pezzo.",
      p2: "L'ottimizzazione degli spessori di parete, degli angoli di sformo e delle tolleranze di accoppiamento permette la produzione in un unico stampo, garantendo la totale riciclabilità del prodotto a fine vita."
    },
    bottomSection: {
      title: "Dettagli Tecnici",
      toolsTitle: "Software e Strumenti",
      toolsList: ["McNeel Rhino 7", "KeyShot Render", "Adobe Illustrator", "Prototipazione FDM"],
      insights: [
        {
          title: "Vincoli Industriali",
          desc: "Integrazione diretta delle linee di giunzione dello stampo, angoli di sformo e spessori di parete costanti per lo stampaggio ad iniezione."
        },
        {
          title: "Monomateriale e Circolarità",
          desc: "Eliminazione completa di componenti metallici o collanti grazie a snodi a 90° e snap-fit integrati nel polimero."
        }
      ]
    },
    cta: {
      title: "Prossimo Progetto",
      subtitle: "Esplora altri progetti di design e metodologie all'interno del portfolio.",
      button: "TORNA AL PORTFOLIO"
    }
  }
};

export default function Archivia({ heroFit = 'cover' }: ArchiviaProps) {
  const [language, setLanguage] = useState<'it' | 'en'>('en');
  const t = content[language];

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-editorial');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.12 }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, [language]);

  return (
    <div className="project-page editorial-portfolio">
      <Header
        showBackToDesigns={true}
        currentLang={language}
        onLanguageChange={setLanguage}
      />

      <style>{`
        .project-page {
          background-color: #070707;
          color: #e5e5e5;
          min-height: 100vh;
          overflow-x: hidden;
          padding-top: 120px;
          padding-bottom: 80px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .project-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 5vw;
        }

        /* DIVIDERS */
        .editorial-divider {
          border: none;
          height: 1px;
          background-color: #1a1a1a;
          margin: 70px 0;
        }

        /* HERO HEADER */
        .project-hero {
          padding-bottom: 10px;
        }

        .project-hero h1 {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 900;
          line-height: 0.95;
          color: #ffffff;
          margin-bottom: 12px;
          letter-spacing: -2px;
          text-transform: uppercase;
        }

        .project-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          color: #888888;
          margin-bottom: 40px;
          font-weight: 400;
        }

        .hero-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 30px;
          padding-top: 25px;
          border-top: 1px solid #1a1a1a;
        }

        .info-block span {
          display: block;
          font-size: 0.75rem;
          font-family: monospace;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #666666;
          margin-bottom: 8px;
        }

        .info-block p {
          font-size: 0.95rem;
          line-height: 1.5;
          color: #cccccc;
          margin: 0;
          font-weight: 500;
        }

        /* FULLBLEED HERO PRODUCT IMAGE */
        .hero-media-fullbleed {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          height: clamp(400px, 65vh, 650px);
          background: #111111;
          overflow: hidden;
          margin-top: 45px;
          border-radius: 0;
        }

        .hero-media-fullbleed img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* OVERVIEW SECTION */
        .overview-section {
          max-width: 800px;
        }

        .overview-section h2 {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          letter-spacing: -0.8px;
        }

        .overview-section p {
          color: #aaaaaa;
          font-size: 1.08rem;
          line-height: 1.8;
          margin-bottom: 18px;
        }

        /* EDITORIAL GRID ROWS */
        .editorial-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .row-text h2 {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 18px;
          color: #ffffff;
          letter-spacing: -0.8px;
        }

        .row-text p {
          color: #aaaaaa;
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .row-media {
          background: #111111;
          border-radius: 0;
          overflow: hidden;
          height: 440px;
        }

        .row-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
        }

        .row-media:hover img {
          transform: scale(1.02);
        }

        /* EXACT MATHEMATICAL SCREEN BLEED WITHOUT BREAKING GRID COLUMNS */
        @media (min-width: 861px) {
          .row-media.bleed-left {
            margin-left: calc(-1 * (100vw - 100%) / 2);
            width: calc(100% + (100vw - 100%) / 2);
          }

          .row-media.bleed-right {
            margin-right: calc(-1 * (100vw - 100%) / 2);
            width: calc(100% + (100vw - 100%) / 2);
          }
        }

        /* COMPOSITE 3-IMAGE GRID BOX */
        .media-composite-box {
          background: #0d0d0d;
          border: 1px solid #1a1a1a;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-radius: 0;
        }

        .composite-top {
          width: 100%;
          height: clamp(280px, 45vh, 420px);
          overflow: hidden;
          background: #111111;
        }

        .composite-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .composite-square {
          width: 100%;
          height: clamp(200px, 30vh, 300px);
          overflow: hidden;
          background: #111111;
        }

        .media-composite-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .media-composite-box img:hover {
          transform: scale(1.02);
        }

        /* REVEAL ANIMATIONS */
        .reveal-editorial {
          opacity: 0;
          filter: blur(6px);
          transition: opacity 0.8s cubic-bezier(.22,.61,.36,1), 
                      filter 0.8s cubic-bezier(.22,.61,.36,1), 
                      transform 0.8s cubic-bezier(.22,.61,.36,1);
        }

        .reveal-editorial.reveal-from-right {
          transform: translateX(40px);
        }

        .reveal-editorial.reveal-from-left {
          transform: translateX(-40px);
        }

        .reveal-editorial.reveal-active {
          opacity: 1;
          filter: blur(0);
          transform: translateX(0);
        }

        /* TECHNICAL INSIGHTS GRID - EXACTLY 3 BOXES */
        .technical-section h2 {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 35px;
          letter-spacing: -0.8px;
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .insight-card {
          padding: 32px 28px;
          border-radius: 0;
          border: 1px solid #1a1a1a;
          background: #0d0d0d;
        }

        .insight-card.tools-accent {
          border-color: #2a2a2a;
          background: #111111;
        }

        .insight-card h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .insight-card p {
          color: #888888;
          font-size: 0.92rem;
          line-height: 1.65;
          margin: 0;
        }

        .tools-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .tools-list li {
          font-family: monospace;
          font-size: 0.88rem;
          color: #cccccc;
          padding: 6px 0;
          border-bottom: 1px solid #1a1a1a;
        }

        .tools-list li:last-child {
          border-bottom: none;
        }

        /* CTA SECTION */
        .project-cta {
          text-align: center;
          padding-top: 40px;
        }

        .project-cta h2 {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 14px;
          letter-spacing: -0.8px;
        }

        .cta-button {
          display: inline-block;
          padding: 14px 36px;
          background: #ffffff;
          color: #070707;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 0;
          letter-spacing: 0.8px;
          font-size: 0.82rem;
        }

        .cta-button:hover {
          background: #070707;
          color: #ffffff;
          border: 1px solid #ffffff;
          transform: translateY(-2px);
        }

        /* RESPONSIVE */
        @media (max-width: 860px) {
          .editorial-row {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .row-media.bleed-left,
          .row-media.bleed-right {
            width: 100vw;
            margin-left: calc(50% - 50vw);
            margin-right: 0;
            height: 320px;
          }

          .composite-bottom {
            grid-template-columns: 1fr;
          }

          .insights-grid {
            grid-template-columns: 1fr;
          }

          .editorial-divider {
            margin: 50px 0;
          }
        }
      `}</style>

      <div className="project-container">
        {/* HEADER & METADATA */}
        <section className="project-hero reveal-editorial reveal-from-left">
          <h1>{t.title}</h1>
          <p className="project-subtitle">{t.subtitle}</p>

          <div className="hero-info">
            <div className="info-block">
              <span>{t.meta.teamLabel}</span>
              <p>
                Matteo Finco<br />
                Giulia Pettenò<br />
                Nadia Zanella
              </p>
            </div>

            <div className="info-block">
              <span>{t.meta.yearLabel}</span>
              <p>{t.meta.yearVal}</p>
            </div>

            <div className="info-block">
              <span>{t.meta.awardLabel}</span>
              <p>{t.meta.awardVal}</p>
            </div>
          </div>
        </section>

        {/* FULLBLEED HERO PRODUCT IMAGE */}
        <section className="hero-media-fullbleed reveal-editorial reveal-from-left">
          <img
            src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=2000&q=80"
            alt="Archivia hero product shot"
            style={{ objectFit: heroFit }}
          />
        </section>

        <hr className="editorial-divider" />

        {/* OVERVIEW */}
        <section className="overview-section reveal-editorial reveal-from-left">
          <h2>{t.overview.title}</h2>
          <p>{t.overview.p1}</p>
          <p>{t.overview.p2}</p>
        </section>

        <hr className="editorial-divider" />

        {/* ROW 1: SOLUTION (IMAGE LEFT, TEXT RIGHT) */}
        <section className="editorial-row">
          <div className="row-media bleed-left reveal-editorial reveal-from-left">
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80"
              alt="Archivia solution concept"
            />
          </div>
          <div className="row-text reveal-editorial reveal-from-right">
            <h2>{t.solution.title}</h2>
            <p>{t.solution.p1}</p>
            <p>{t.solution.p2}</p>
          </div>
        </section>

        <hr className="editorial-divider" />

        {/* ROW 2: RESEARCH (TEXT LEFT, IMAGE RIGHT) */}
        <section className="editorial-row">
          <div className="row-text reveal-editorial reveal-from-left">
            <h2>{t.research.title}</h2>
            <p>{t.research.p1}</p>
            <p>{t.research.p2}</p>
          </div>
          <div className="row-media bleed-right reveal-editorial reveal-from-right">
            <img
              src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80"
              alt="Archivia research details"
            />
          </div>
        </section>

        <hr className="editorial-divider" />

        {/* SECTION 3: COMPOSITE 3-IMAGE GRID BOX (CLEAN, NO CAPTION) */}
        <section className="reveal-editorial reveal-from-left">
          <div className="media-composite-box">
            {/* TOP HORIZONTAL IMAGE */}
            <div className="composite-top">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fc4e5eae770e146cc9e7245b921f5d11e"
                alt="Archivia exploded view wide"
                style={{ objectFit: heroFit }}
              />
            </div>

            {/* BOTTOM 2 SQUARE IMAGES */}
            <div className="composite-bottom">
              <div className="composite-square">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Archivia detail square 1"
                />
              </div>
              <div className="composite-square">
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
                  alt="Archivia detail square 2"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="editorial-divider" />

        {/* TECHNICAL INSIGHTS GRID - EXACTLY 3 BOXES */}
        <section className="technical-section">
          <h2 className="reveal-editorial reveal-from-left">{t.bottomSection.title}</h2>

          <div className="insights-grid">
            {/* BOX 1: SOFTWARE / TOOLS */}
            <div className="insight-card tools-accent reveal-editorial reveal-from-left">
              <h3>{t.bottomSection.toolsTitle}</h3>
              <ul className="tools-list">
                {t.bottomSection.toolsList.map((tool, idx) => (
                  <li key={idx}>↓ {tool}</li>
                ))}
              </ul>
            </div>

            {/* BOX 2 & BOX 3: TECHNICAL INSIGHTS */}
            {t.bottomSection.insights.map((item, idx) => (
              <div key={idx} className="insight-card reveal-editorial reveal-from-left">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="editorial-divider" />

        {/* NEXT PROJECT / CTA */}
        <section className="project-cta reveal-editorial reveal-from-left">
          <h2>{t.cta.title}</h2>
          <p style={{ color: '#aaaaaa', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 30px', lineHeight: '1.6' }}>
            {t.cta.subtitle}
          </p>
          <a href="/" className="cta-button">{t.cta.button}</a>
        </section>
      </div>
    </div>
  );
}