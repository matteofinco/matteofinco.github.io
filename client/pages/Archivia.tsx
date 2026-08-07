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
      teamVal: "Matteo Finco, Giulia Pettenò, Nadia Zanella",
      yearLabel: "Year",
      yearVal: "2025",
      awardLabel: "Competition",
      awardVal: "PLEIADES • Plastic European Innovation Award"
    },
    overview: {
      title: "Overview",
      p1: "Archivia was developed for PLEIADES (Plastic European Innovation Award for Design and Sustainability), an international competition organized by the Università Iuav di Venezia (Vicenza campus) in partnership with industry leaders in polymer processing and molding: Ewikon, Arburg, and Uniform.",
      p2: "The project addresses the challenge of designing a daily-use desktop object entirely from recycled polyamide, balancing conceptual identity with strict industrial constraints required for high-volume injection molding."
    },
    solution: {
      title: "Solution & Mechanics",
      p1: "The product creates a direct conceptual parallel between digital storage and analog writing tools. Taking functional and visual cues from a classic rotating USB flash drive, Archivia organizes pens and tools within a compact desktop footprint.",
      p2: "The assembly consists of exactly three monomaterial polymer parts engineered to lock together without adhesives, metal screws, or secondary fasteners. The central container is split into two symmetrical shell halves that interlock securely and pivot inside a 90° rotating outer cover through integrated mechanical snap-fit joints."
    },
    research: {
      title: "Material & Engineering",
      p1: "Research focused on the physical behavior of recycled polyamide, analyzing material shrinkage, draft angles, and structural wall consistency required for precision injection molding.",
      p2: "By designing the entire assembly to be produced within a single optimized mold layout, the project reduces production steps and ensures straightforward end-of-life mono-material recycling."
    },
    bottomSection: {
      title: "Technical Specifications & Insights",
      toolsTitle: "Software & Prototyping",
      toolsDesc: "McNeel Rhino 7, KeyShot, Adobe Illustrator, FDM Functional Prototyping",
      insights: [
        {
          title: "Industrial Molding Constraints",
          desc: "Direct integration of mold parting lines, draft angles, and constant wall thicknesses suitable for mass injection molding."
        },
        {
          title: "Mono-material Assembly",
          desc: "Complete elimination of secondary hardware by relying strictly on mechanical interlocks and elastic snap-fit joints."
        },
        {
          title: "Design for Circularity",
          desc: "Simplified recycling workflow enabled by single-polymer construction and non-permanent mechanical assembly."
        }
      ]
    },
    cta: {
      title: "What's Next?",
      subtitle: "Explore more design projects and methodologies in the portfolio.",
      button: "BACK TO PORTFOLIO"
    }
  },
  it: {
    title: "ARCHIVIA",
    subtitle: "Portapenne ispirato alle chiavette USB",
    meta: {
      teamLabel: "Designer",
      teamVal: "Matteo Finco, Giulia Pettenò, Nadia Zanella",
      yearLabel: "Anno",
      yearVal: "2025",
      awardLabel: "Concorso",
      awardVal: "PLEIADES • Plastic European Innovation Award"
    },
    overview: {
      title: "Panoramica",
      p1: "Archivia nasce all'interno del concorso PLEIADES (Plastic European Innovation Award for Design and Sustainability), promosso dall'Università Iuav di Venezia (sede di Vicenza) in collaborazione con tre aziende leader nel settore dello stampaggio e dei polimeri: Ewikon, Arburg e Uniform.",
      p2: "Il progetto risponde alla richiesta di ideare un oggetto d'uso quotidiano in poliammide riciclata, coniugando la ricerca formale con i rigidi vincoli tecnici imposti dallo stampaggio ad iniezione ad alta produttività."
    },
    solution: {
      title: "Soluzione e Cinematismo",
      p1: "L'oggetto stabilisce una corrispondenza concettuale tra la memorizzazione digitale dei dati e la scrittura analogica. Riprendendo le forme e il meccanismo di apertura delle classiche chiavette USB a rotazione, Archivia organizza le penne e la cancelleria in una struttura compatta da scrivania.",
      p2: "La struttura è composta da tre soli pezzi monomateriale progettati per assemblarsi ad incastro, senza l'impiego di componenti metallici o collanti. Il corpo centrale è suddiviso in due metà speculari che si uniscono e si vincolano alla calotta esterna ruotabile a 90° tramite perni e snap-fit integrati nella geometria del pezzo."
    },
    research: {
      title: "Ingegnerizzazione del Materiale",
      p1: "La fase di sviluppo si è concentrata sullo studio della poliammide riciclata, definendo gli spessori di parete omogenei, gli angoli di sformo e le tolleranze di accoppiamento per garantire la tenuta meccanica dei componenti.",
      p2: "I tre elementi sono stati ottimizzati per essere realizzati all'interno di un unico stampo, riducendo i tempi di ciclo produttivo e garantendo la totale riciclabilità del prodotto a fine vita."
    },
    bottomSection: {
      title: "Dettagli Tecnici & Insights",
      toolsTitle: "Strumenti di Sviluppo",
      toolsDesc: "McNeel Rhino 7, KeyShot, Adobe Illustrator, Prototipazione Funzionale FDM",
      insights: [
        {
          title: "Vincoli di Stampaggio",
          desc: "Gestione delle linee di giunzione dello stampo, degli angoli di sformo e del ritiro del materiale polimerico."
        },
        {
          title: "Incastri Meccanici Integrati",
          desc: "Eliminazione di viti e inserti in metallo a favore di snodi e snap-fit modellati direttamente sulla parte."
        },
        {
          title: "Design per la Circolarità",
          desc: "Facilità di disassemblaggio e riciclo garantite dall'impiego di una singola tipologia di polimero."
        }
      ]
    },
    cta: {
      title: "Prossimi Progetti",
      subtitle: "Esplora altri progetti di design e metodologie all'interno del portfolio.",
      button: "TORNA AL PORTFOLIO"
    }
  }
};

export default function Archivia({ heroFit = 'contain' }: ArchiviaProps) {
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
          padding-top: 100px;
        }

        .project-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 6vw;
        }

        /* HERO SECTION */
        .project-hero {
          padding-top: 40px;
          padding-bottom: 40px;
        }

        .project-hero h1 {
          font-size: clamp(3.2rem, 8vw, 6.2rem);
          font-weight: 900;
          line-height: 1;
          color: #ffffff;
          margin-bottom: 12px;
          letter-spacing: -2px;
          text-transform: uppercase;
        }

        .project-subtitle {
          font-size: clamp(1.2rem, 2.2vw, 1.7rem);
          color: #888888;
          margin-bottom: 35px;
          font-weight: 400;
        }

        /* MINIMAL HERO META */
        .hero-minimal-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          padding: 20px 0;
          border-top: 1px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
          margin-bottom: 60px;
        }

        .meta-block h4 {
          font-size: 0.75rem;
          font-family: monospace;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #555555;
          margin-bottom: 4px;
        }

        .meta-block p {
          font-size: 0.95rem;
          color: #cccccc;
          margin: 0;
          font-weight: 500;
        }

        /* 100VW HERO IMAGE (TOUCHES SCREEN EDGES) */
        .project-hero-image-fullbleed {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          height: 68vh;
          min-height: 420px;
          max-height: 750px;
          background-color: #0b0b0b;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 100px;
        }

        .project-hero-image-fullbleed img {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* OVERVIEW SECTION */
        .overview-section {
          max-width: 820px;
          margin: 0 auto 120px 0;
        }

        .overview-section h2 {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 25px;
          letter-spacing: -1px;
        }

        .overview-section p {
          color: #aaaaaa;
          font-size: 1.15rem;
          line-height: 1.85;
          margin-bottom: 22px;
        }

        /* FULLBLEED EDITORIAL ROWS (IMAGE BLEEDS TO WINDOW EDGE) */
        .editorial-rows-fullbleed {
          display: flex;
          flex-direction: column;
          gap: 140px;
          margin-bottom: 120px;
          width: 100vw;
          margin-left: calc(50% - 50vw);
        }

        .fullbleed-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          width: 100%;
        }

        .fullbleed-row.media-right .row-text {
          padding: 0 6vw 0 calc((100vw - 1300px) / 2 + 6vw);
        }

        .fullbleed-row.media-right .row-media {
          width: 100%;
          height: 58vh;
          min-height: 420px;
        }

        .fullbleed-row.media-left .row-media {
          width: 100%;
          height: 58vh;
          min-height: 420px;
        }

        .fullbleed-row.media-left .row-text {
          padding: 0 calc((100vw - 1300px) / 2 + 6vw) 0 6vw;
        }

        .row-text h2 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 22px;
          color: #ffffff;
          letter-spacing: -1px;
        }

        .row-text p {
          color: #aaaaaa;
          font-size: 1.08rem;
          line-height: 1.85;
          margin-bottom: 18px;
        }

        .row-media {
          background: #0d0d0d;
          overflow: hidden;
        }

        .row-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.9s cubic-bezier(.22,.61,.36,1);
        }

        .row-media:hover img {
          transform: scale(1.02);
        }

        /* REVEAL ANIMATIONS */
        .reveal-editorial {
          opacity: 0;
          filter: blur(6px);
          transition: opacity 0.9s cubic-bezier(.22,.61,.36,1), 
                      filter 0.9s cubic-bezier(.22,.61,.36,1), 
                      transform 0.9s cubic-bezier(.22,.61,.36,1);
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

        /* BOTTOM SECTION (INSIGHTS & TOOLS) */
        .bottom-section {
          margin-top: 60px;
          padding-top: 80px;
          border-top: 1px solid #1a1a1a;
        }

        .bottom-section h2 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 45px;
          letter-spacing: -1px;
        }

        .bottom-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .bottom-card {
          padding: 35px;
          border: 1px solid #1a1a1a;
          background: rgba(255, 255, 255, 0.012);
        }

        .bottom-card.tools-card {
          border-color: #2a2a2a;
          background: rgba(255, 255, 255, 0.025);
        }

        .bottom-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .bottom-card p {
          color: #888888;
          font-size: 0.98rem;
          line-height: 1.7;
          margin: 0;
        }

        .bottom-card.tools-card p {
          color: #dddddd;
          font-family: monospace;
          font-size: 0.88rem;
          line-height: 1.6;
        }

        /* CTA SECTION */
        .project-cta {
          width: 100%;
          padding: 100px 6vw;
          text-align: center;
          border-top: 1px solid #1a1a1a;
          margin-top: 100px;
          background-color: #070707;
        }

        .project-cta h2 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 18px;
          letter-spacing: -1px;
        }

        .cta-button {
          display: inline-block;
          padding: 16px 40px;
          background: #ffffff;
          color: #070707;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid #ffffff;
          letter-spacing: 1px;
          font-size: 0.85rem;
        }

        .cta-button:hover {
          background: #070707;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .fullbleed-row.media-right .row-text,
          .fullbleed-row.media-left .row-text {
            padding: 0 6vw;
          }

          .fullbleed-row {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .fullbleed-row.media-left .row-media {
            order: 2;
          }

          .fullbleed-row.media-left .row-text {
            order: 1;
          }

          .fullbleed-row.media-right .row-media,
          .fullbleed-row.media-left .row-media {
            height: 42vh;
            min-height: 320px;
          }

          .editorial-rows-fullbleed {
            gap: 90px;
          }

          .hero-minimal-meta {
            gap: 24px;
          }

          .project-hero-image-fullbleed {
            height: 48vh;
            min-height: 320px;
            margin-bottom: 70px;
          }
        }
      `}</style>

      <div className="project-container">
        {/* HERO HEADER */}
        <section className="project-hero reveal-editorial reveal-from-left">
          <h1>{t.title}</h1>
          <p className="project-subtitle">{t.subtitle}</p>

          <div className="hero-minimal-meta">
            <div className="meta-block">
              <h4>{t.meta.teamLabel}</h4>
              <p>{t.meta.teamVal}</p>
            </div>
            <div className="meta-block">
              <h4>{t.meta.yearLabel}</h4>
              <p>{t.meta.yearVal}</p>
            </div>
            <div className="meta-block">
              <h4>{t.meta.awardLabel}</h4>
              <p>{t.meta.awardVal}</p>
            </div>
          </div>
        </section>
      </div>

      {/* 100VW HERO IMAGE */}
      <div className="project-hero-image-fullbleed reveal-editorial reveal-from-left">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fc4e5eae770e146cc9e7245b921f5d11e"
          alt="Archivia Hero Render"
          style={{ objectFit: heroFit }}
        />
      </div>

      <div className="project-container">
        {/* OVERVIEW */}
        <section className="overview-section reveal-editorial reveal-from-left">
          <h2>{t.overview.title}</h2>
          <p>{t.overview.p1}</p>
          <p>{t.overview.p2}</p>
        </section>
      </div>

      {/* FULLBLEED EDITORIAL ROWS */}
      <div className="editorial-rows-fullbleed">
        {/* SOLUTION ROW (IMAGE TOUCHES RIGHT EDGE) */}
        <section className="fullbleed-row media-right">
          <div className="row-text reveal-editorial reveal-from-left">
            <h2>{t.solution.title}</h2>
            <p>{t.solution.p1}</p>
            <p>{t.solution.p2}</p>
          </div>
          <div className="row-media reveal-editorial reveal-from-right">
            <img
              src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1400&q=80"
              alt="Archivia mechanical solution details"
            />
          </div>
        </section>

        {/* RESEARCH ROW (IMAGE TOUCHES LEFT EDGE) */}
        <section className="fullbleed-row media-left">
          <div className="row-media reveal-editorial reveal-from-left">
            <img
              src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1400&q=80"
              alt="Archivia material and engineering analysis"
            />
          </div>
          <div className="row-text reveal-editorial reveal-from-right">
            <h2>{t.research.title}</h2>
            <p>{t.research.p1}</p>
            <p>{t.research.p2}</p>
          </div>
        </section>
      </div>

      <div className="project-container">
        {/* BOTTOM SECTION (INSIGHTS & TOOLS) */}
        <section className="bottom-section">
          <h2 className="reveal-editorial reveal-from-left">{t.bottomSection.title}</h2>

          <div className="bottom-grid">
            {/* TOOLS CARD */}
            <div className="bottom-card tools-card reveal-editorial reveal-from-left">
              <h3>{t.bottomSection.toolsTitle}</h3>
              <p>{t.bottomSection.toolsDesc}</p>
            </div>

            {/* INSIGHT CARDS */}
            {t.bottomSection.insights.map((item, idx) => (
              <div key={idx} className="bottom-card reveal-editorial reveal-from-left">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA SECTION */}
      <section className="project-cta">
        <h2>{t.cta.title}</h2>
        <p style={{ color: '#aaaaaa', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 35px', lineHeight: '1.7' }}>
          {t.cta.subtitle}
        </p>
        <a href="/" className="cta-button">{t.cta.button}</a>
      </section>
    </div>
  );
}