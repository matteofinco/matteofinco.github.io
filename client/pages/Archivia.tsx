import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { ProjectSelector } from '../components/ProjectSelector';

interface ArchiviaProps {
  heroFit?: 'contain' | 'cover';
}

const content = {
  en: {
    title: "ARCHIVIA",
    subtitle: "Flash drive inspired pen holder",
    meta: {
      teamLabel: "Designers",
      yearLabel: "Year",
      yearVal: "2025",
      awardLabel: "Competition",
      awardVal: "PLEIADES Competition"
    },
    overview: {
      title: "Overview",
      subtitle: "Challenge",
      p1: "Archivia was developed for PLEIADES (Plastic European Innovation Award for Design and Sustainability), a design competition organized by the Università Iuav di Venezia, Vicenza campus, in collaboration with Ewikon, Arburg, and Uniform.",
      p2: "The project focused on designing a small everyday object made from recycled polyamide, balancing conceptual research, product identity, and the technical requirements of industrial injection molding."
    },
    solution: {
      title: "Solution",
      p1: "Archivia is a desk organizer that explores the relationship between digital storage and physical writing tools.",
      p2: "Inspired by the shape and interaction of a rotating USB flash drive, the project translates the idea of digital memory into a tangible object for everyday use.",
      p3: "The product is composed of three monomaterial components designed to assemble through integrated mechanical connections, eliminating the need for screws or adhesives."
    },
    research: {
      title: "Research",
      p1: "The research phase started from the analysis of everyday environments such as home, office, and shared workspaces, with the aim of identifying a product category suitable for the technical constraints of the competition.",
      p2: "After exploring different typologies, the desk environment emerged as the most effective context, leading to a deeper investigation of recycled polyamide behavior, structural optimization, and mechanical assembly systems."
    },
    design: {
      title: "Design",
      p1: "Archivia's structure takes inspiration from the opening mechanism of traditional rotating USB drives.",
      p2: "The main body is divided into two symmetrical shells that interlock together, while the external cover rotates through a 90° movement.",
      p3: "The final configuration combines a recognizable visual language with an efficient assembly system based on integrated mechanical joints."
    },
    technical: {
      title: "Technical Insights",
      p1: "Developing Archivia highlighted the importance of balancing creative exploration with industrial constraints.",
      p2: "The project provided experience in understanding polymer behavior, injection molding requirements, and the relationship between geometry, assembly, and manufacturing processes."
    },
    cta: {
      title: "What's next?",
      subtitle: "Explore Projects",
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
      awardVal: "Concorso PLEIADES"
    },
    overview: {
      title: "Overview",
      subtitle: "Sfida progettuale",
      p1: "Archivia nasce all'interno di PLEIADES (Plastic European Innovation Award for Design and Sustainability), un concorso di design promosso dall'Università Iuav di Venezia, sede di Vicenza, in collaborazione con Ewikon, Arburg e Uniform.",
      p2: "Il progetto affronta lo sviluppo di un piccolo oggetto d'uso quotidiano realizzato in poliammide riciclata, cercando un equilibrio tra ricerca concettuale, identità del prodotto e vincoli tecnici dello stampaggio industriale a iniezione."
    },
    solution: {
      title: "Solution",
      p1: "Archivia esplora la relazione tra memoria digitale e strumenti analogici di scrittura.",
      p2: "Ispirandosi alla forma e al gesto di apertura delle chiavette USB rotanti, il progetto traduce il concetto di archiviazione digitale in un oggetto fisico destinato all'ambiente della scrivania.",
      p3: "Il prodotto è composto da tre componenti monomateriale progettati per assemblarsi attraverso connessioni meccaniche integrate, senza l'utilizzo di viti o collanti."
    },
    research: {
      title: "Research",
      p1: "La fase iniziale della ricerca si è concentrata sull'analisi degli ambienti quotidiani, come casa, ufficio e spazi condivisi, con l'obiettivo di individuare una tipologia di prodotto coerente con i vincoli tecnici del concorso.",
      p2: "Dopo l'esplorazione di diverse categorie di oggetti, l'ambiente della scrivania è risultato il contesto più adatto, portando allo studio del comportamento della poliammide riciclata, dell'ottimizzazione strutturale e dei sistemi di assemblaggio meccanico."
    },
    design: {
      title: "Design",
      p1: "La struttura di Archivia riprende il principio di apertura delle tradizionali chiavette USB rotanti.",
      p2: "Il corpo principale è suddiviso in due gusci simmetrici che si uniscono tramite incastri integrati, mentre la calotta esterna permette un movimento rotazionale di 90°.",
      p3: "Il risultato combina un'identità visiva riconoscibile con un sistema costruttivo semplice basato su connessioni meccaniche integrate."
    },
    technical: {
      title: "Technical Insights",
      p1: "Lo sviluppo di Archivia ha evidenziato l'importanza dell'equilibrio tra ricerca creativa e vincoli produttivi.",
      p2: "Il progetto ha permesso di approfondire il comportamento dei materiali polimerici, i requisiti dello stampaggio a iniezione e la relazione tra geometria, assemblaggio e processo produttivo."
    },
    cta: {
      title: "What's next?",
      subtitle: "Esplora i progetti",
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
        html, body {
          overflow-x: hidden;
          margin: 0;
          padding: 0;
          background-color: #070707;
        }

        .project-page * {
          box-sizing: border-box;
        }

        .project-page {
          background-color: #070707;
          color: #e5e5e5;
          min-height: 100vh;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          padding-top: 120px;
          padding-bottom: 80px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .project-container {
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .editorial-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 4vw;
        }

        .editorial-divider {
          border: none;
          height: 1px;
          background-color: #1a1a1a;
          margin: 60px 0;
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

        /* HERO MEDIA FULL BLEED */
        .hero-media-fullbleed {
          width: 100%;
          height: clamp(420px, 65vh, 800px);
          background: #0d0d0d;
          overflow: hidden;
          margin-top: 40px;
          border-radius: 0;
        }

        .hero-media-fullbleed img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: ${heroFit};
          object-position: center;
        }

        /* OVERVIEW SECTION */
        .overview-section {
          max-width: 800px;
        }

        .overview-section h2 {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: -0.8px;
        }

        .overview-section .section-label {
          font-size: 0.85rem;
          font-family: monospace;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #777777;
          margin-bottom: 24px;
          display: block;
        }

        .overview-section p {
          color: #aaaaaa;
          font-size: 1.08rem;
          line-height: 1.8;
          margin-bottom: 18px;
        }

        /* FULL-BLEED GRID ROWS */
        .editorial-row-fullbleed {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(4vw, 1fr) minmax(0, 560px) minmax(0, 560px) minmax(4vw, 1fr);
          align-items: center;
        }

        .editorial-row-fullbleed.row-img-left .row-media {
          grid-column: 1 / 3;
          width: 100%;
          height: 520px;
          overflow: hidden;
          background: #0d0d0d;
          border-radius: 0;
        }

        .editorial-row-fullbleed.row-img-left .row-text {
          grid-column: 3 / 4;
          padding-left: 60px;
          padding-right: 20px;
        }

        .editorial-row-fullbleed.row-img-right .row-text {
          grid-column: 2 / 3;
          padding-right: 60px;
          padding-left: 20px;
        }

        .editorial-row-fullbleed.row-img-right .row-media {
          grid-column: 3 / 5;
          width: 100%;
          height: 520px;
          overflow: hidden;
          background: #0d0d0d;
          border-radius: 0;
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

        .row-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 0;
        }

        .row-media:hover img {
          transform: scale(1.03);
        }

        /* COMPOSITE GRID BOX */
        .fullbleed-composite {
          width: 100%;
          background: #070707;
          padding: 0;
        }

        .media-composite-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          margin: 0;
        }

        .composite-top {
          width: 100%;
          height: clamp(380px, 55vh, 600px);
          overflow: hidden;
          background: #0d0d0d;
          border-radius: 0;
        }

        .composite-bottom {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .composite-square {
          width: 100%;
          height: clamp(280px, 42vh, 400px);
          overflow: hidden;
          background: #0d0d0d;
          border-radius: 0;
        }

        .media-composite-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 0;
        }

        .media-composite-box img:hover {
          transform: scale(1.03);
        }

        /* TECHNICAL SECTION */
        .technical-section {
          max-width: 800px;
        }

        .technical-section h2 {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 24px;
          letter-spacing: -0.8px;
        }

        .technical-section p {
          color: #aaaaaa;
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 18px;
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

        /* CTA SECTION */
        .project-cta {
          text-align: center;
          padding-top: 40px;
        }

        .project-cta h2 {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: -1.2px;
          text-transform: uppercase;
        }

        .cta-subtitle {
          color: #666666;
          font-size: 0.8rem;
          font-family: monospace;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin: 0 auto 24px;
        }

        .cta-button {
          display: inline-block;
          padding: 14px 36px;
          background: #ffffff;
          color: #070707;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.8px;
          font-size: 0.82rem;
          margin-top: 30px;
        }

        .cta-button:hover {
          background: #070707;
          color: #ffffff;
          border: 1px solid #ffffff;
          transform: translateY(-2px);
        }

        /* BREAKPOINT RESPONSIVE */
        @media (max-width: 860px) {
          .editorial-row-fullbleed {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .editorial-row-fullbleed.row-img-right {
            flex-direction: column-reverse;
          }

          .hero-media-fullbleed {
            height: 320px;
          }

          .hero-media-fullbleed img {
            object-fit: cover;
            object-position: center;
          }

          .editorial-row-fullbleed.row-img-left .row-media,
          .editorial-row-fullbleed.row-img-right .row-media {
            width: 105%;
            height: 380px;
          }

          .editorial-row-fullbleed.row-img-left .row-media img,
          .editorial-row-fullbleed.row-img-right .row-media img {
            object-fit: contain;
            object-position: center;
          }

          .editorial-row-fullbleed.row-img-left .row-text,
          .editorial-row-fullbleed.row-img-right .row-text {
            padding: 0 4vw;
          }

          .composite-bottom {
            grid-template-columns: 1fr;
          }

          .composite-top {
            height: 320px;
          }

          .composite-top img {
            object-fit: cover;
            object-position: center;
          }

          .composite-square {
            height: 250px;
          }

          .composite-square img {
            object-fit: cover;
            object-position: center;
          }

          .editorial-divider {
            margin: 40px 0;
          }
        }
      `}</style>

      <div className="project-container">
        {/* HEADER & METADATA */}
        <div className="editorial-content">
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
        </div>

        {/* HERO PRODUCT IMAGE (FULL BLEED) */}
        <section className="hero-media-fullbleed reveal-editorial reveal-from-left">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F65c9f3670b2a484ba3d71220897004f0"
            alt="Archivia hero product shot"
          />
        </section>

        <div className="editorial-content">
          <hr className="editorial-divider" />

          {/* OVERVIEW / CHALLENGE */}
          <section className="overview-section reveal-editorial reveal-from-left">
            <h2>{t.overview.title}</h2>
            <span className="section-label">{t.overview.subtitle}</span>
            <p>{t.overview.p1}</p>
            <p>{t.overview.p2}</p>
          </section>

          <hr className="editorial-divider" />
        </div>

        {/* ROW 1: SOLUTION */}
        <section className="editorial-row-fullbleed row-img-left">
          <div className="row-media reveal-editorial reveal-from-left">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F42f618d85fbd458988c33e9f58f1edce"
              alt="Archivia solution overview"
            />
          </div>
          <div className="row-text reveal-editorial reveal-from-right">
            <h2>{t.solution.title}</h2>
            <p>{t.solution.p1}</p>
            <p>{t.solution.p2}</p>
            <p>{t.solution.p3}</p>
          </div>
        </section>

        <div className="editorial-content">
          <hr className="editorial-divider" />
        </div>

        {/* ROW 2: RESEARCH */}
        <section className="editorial-row-fullbleed row-img-right">
          <div className="row-text reveal-editorial reveal-from-left">
            <h2>{t.research.title}</h2>
            <p>{t.research.p1}</p>
            <p>{t.research.p2}</p>
          </div>
          <div className="row-media reveal-editorial reveal-from-right">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fb9873ddfe0a446a08b8f42c408d25429"
              alt="Archivia research and desk environment context"
            />
          </div>
        </section>

        <div className="editorial-content">
          <hr className="editorial-divider" />
        </div>

        {/* ROW 3: DESIGN */}
        <section className="editorial-row-fullbleed row-img-left">
          <div className="row-media reveal-editorial reveal-from-left">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F8e4089261fe741a580f79ee17d2c5cbe"
              alt="Archivia rotating mechanism and shell structure"
            />
          </div>
          <div className="row-text reveal-editorial reveal-from-right">
            <h2>{t.design.title}</h2>
            <p>{t.design.p1}</p>
            <p>{t.design.p2}</p>
            <p>{t.design.p3}</p>
          </div>
        </section>

        <div className="editorial-content">
          <hr className="editorial-divider" />
        </div>

        {/* COMPOSITE GRID BOX */}
        <section className="fullbleed-composite reveal-editorial reveal-from-left">
          <div className="media-composite-box">
            <div className="composite-top">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F66215330a01245928bfd982a4e89a724"
                alt="Archivia wide view"
              />
            </div>
            <div className="composite-bottom">
              <div className="composite-square">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fc4e5eae770e146cc9e7245b921f5d11e"
                  alt="Archivia detailed view 1"
                />
              </div>
              <div className="composite-square">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fbbf296775c2a4cc98ba01d64491c56f7"
                  alt="Archivia detailed view 2"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="editorial-content">
          <hr className="editorial-divider" />

          {/* TECHNICAL INSIGHTS */}
          <section className="technical-section reveal-editorial reveal-from-left">
            <h2>{t.technical.title}</h2>
            <p>{t.technical.p1}</p>
            <p>{t.technical.p2}</p>
          </section>

          <hr className="editorial-divider" />

          {/* NEXT PROJECT / CTA SECTION */}
          <section className="project-cta reveal-editorial reveal-from-left">
            <h2>{t.cta.title}</h2>
            <p className="cta-subtitle">{t.cta.subtitle}</p>

            <ProjectSelector currentProjectId="archivia" />

            <a href="/" className="cta-button">{t.cta.button}</a>
          </section>
        </div>
      </div>
    </div>
  );
}