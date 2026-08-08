import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { ProjectSelector } from '../components/ProjectSelector';

interface PropProps {
  heroFit?: 'contain' | 'cover';
}

const IMAGES = {
  hero: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41",
  solution: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41",
  research: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41",
  design: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41",
  compositeTop: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41",
  compositeBottomLeft: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41",
  compositeBottomRight: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41",
};

const content = {
  en: {
    title: "PROP",
    subtitle: "3D-Printed Emergency Crutch",
    meta: {
      teamLabel: "Designer",
      yearLabel: "Year",
      yearVal: "2026",
      awardLabel: "Project Type",
      awardVal: "Product Design & Emergency"
    },
    overview: {
      title: "Overview",
      subtitle: "Challenge",
      p1: "Prop is an emergency 3D-printed crutch designed to provide immediate, reliable mobility support in crisis scenarios, natural disasters, or remote environments where standard medical equipment is unavailable.",
      p2: "The main challenge centered on engineering a structural geometry capable of sustaining high vertical loads while utilizing distributed FDM 3D printing parameters and standard, accessible thermoplastic filaments."
    },
    solution: {
      title: "Solution",
      p1: "The resulting design features an optimized modular topology that maximizes weight distribution and structural integrity.",
      p2: "By employing clever infill patterns and reinforced stress points, Prop matches the mechanical requirements of traditional medical crutches while drastically reducing production time and logistical complexity.",
      p3: "Its decentralized manufacturing approach allows units to be printed on-demand anywhere in the world using open-source digital files."
    },
    research: {
      title: "Research",
      p1: "The development began with an analysis of ergonomics, biomechanics, and load-bearing failure points in conventional mobility aids.",
      p2: "We studied standard human anthropometry and gait dynamics to ensure comfort, stability, and safety across various user heights and physical statures."
    },
    design: {
      title: "Design",
      p1: "Prop's architecture focuses on assembly simplicity and rapid deployment without requiring specialized tools.",
      p2: "The grip and underarm support sections incorporate textured elastomeric elements for enhanced comfort and friction control.",
      p3: "Interlocking modular segments allow for compact storage and scalable height adjustments."
    },
    technical: {
      title: "Skills & Technical Insights",
      p1: "Designing Prop pushed the limits of additive manufacturing in emergency contexts, balancing print speed with structural safety factors.",
      p2: "It highlighted the immense potential of distributed manufacturing networks in delivering humanitarian design solutions swiftly and efficiently."
    },
    cta: {
      title: "What's next?",
      subtitle: "Projects",
      button: "BACK TO PORTFOLIO"
    }
  },
  it: {
    title: "PROP",
    subtitle: "Stampella d'emergenza stampata in 3D",
    meta: {
      teamLabel: "Designer",
      yearLabel: "Anno",
      yearVal: "2026",
      awardLabel: "Tipologia Progetto",
      awardVal: "Product Design & Emergenza"
    },
    overview: {
      title: "Overview",
      subtitle: "Sfida progettuale",
      p1: "Prop è una stampella d'emergenza stampata in 3D concepita per offrire un supporto alla mobilità immediato e affidabile in scenari di crisi, calamità naturali o contesti remoti in cui le attrezzature mediche tradizionali non sono disponibili.",
      p2: "La sfida principale si è concentrata sull'ingegnerizzazione di una geometria strutturale capace di sostenere elevati carichi verticali sfruttando parametri di stampa 3D FDM distribuiti e filamenti termoplastici standard e accessibili."
    },
    solution: {
      title: "Solution",
      p1: "Il design risultante presenta una topologia modulare ottimizzata che massimizza la distribuzione dei pesi e l'integrità strutturale.",
      p2: "Impiegando pattern di riempimento intelligenti e punti di tensione rinforzati, Prop soddisfa i requisiti meccanici delle stampelle mediche tradizionali riducendo drasticamente i tempi di produzione e la complessità logistica.",
      p3: "Il suo approccio di produzione decentralizzata consente di stampare le unità su richiesta ovunque nel mondo utilizzando file digitali open-source."
    },
    research: {
      title: "Research",
      p1: "Lo sviluppo è iniziato con un'analisi approfondita dell'ergonomia, della biomeccanica e dei punti di cedimento strutturale nei dispositivi di mobilità convenzionali.",
      p2: "Abbiamo studiato l'antropometria umana standard e le dinamiche della deambulazione per garantire comfort, stabilità e sicurezza a utenti di diverse stature."
    },
    design: {
      title: "Design",
      p1: "L'architettura di Prop punta sulla semplicità di assemblaggio e sulla rapidità di impiego senza la necessità di attrezzi specializzati.",
      p2: "Le sezioni di impugnatura e supporto ascellare integrano elementi elastomerici testurizzati per un maggiore comfort e controllo dell'attrito.",
      p3: "Segmenti modulari a incastro consentono uno stoccaggio compatto e regolazioni scalabili dell'altezza."
    },
    technical: {
      title: "Skills & Technical Insights",
      p1: "Progettare Prop ha spinto al limite le potenzialità della manifattura additiva in contesti d'emergenza, bilanciando la velocità di stampa con i fattori di sicurezza strutturale.",
      p2: "Il progetto ha evidenziato l'immenso potenziale delle reti di produzione distribuita nel fornire soluzioni di design umanitario in modo rapido ed efficiente."
    },
    cta: {
      title: "What's next?",
      subtitle: "Progetti",
      button: "TORNA AL PORTFOLIO"
    }
  }
};

export default function Prop({ heroFit = 'cover' }: PropProps) {
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

        /* FULL-BLEED GRID ROWS FOR SIDE-BY-SIDE SECTIONS */
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

        /* 100% COMPOSITE GRID BOX */
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

        /* RESPONSIVE TOGGLES */
        @media (max-width: 860px) {
          .editorial-row-fullbleed {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .editorial-row-fullbleed.row-img-right {
            flex-direction: column-reverse;
          }

          .editorial-row-fullbleed.row-img-left .row-media,
          .editorial-row-fullbleed.row-img-right .row-media {
            width: 100%;
            height: 380px;
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

          .composite-square {
            height: 250px;
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
                <p>Matteo Finco</p>
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
          <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2fc11284345345e4adbe50568f458dc4" alt="Prop hero" />
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

        {/* ROW 1: SOLUTION (IMAGE LEFT FULL BLEED) */}
        <section className="editorial-row-fullbleed row-img-left">
          <div className="row-media reveal-editorial reveal-from-left">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F3d148d3c4ddf42d38fd262595c21d673" alt="Prop solution" />
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

        {/* ROW 2: RESEARCH (IMAGE RIGHT FULL BLEED) */}
        <section className="editorial-row-fullbleed row-img-right">
          <div className="row-text reveal-editorial reveal-from-left">
            <h2>{t.research.title}</h2>
            <p>{t.research.p1}</p>
            <p>{t.research.p2}</p>
          </div>
          <div className="row-media reveal-editorial reveal-from-right">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F94433d18d06e4f57aa4cf9de6c5f787f" alt="Prop research" />
          </div>
        </section>

        <div className="editorial-content">
          <hr className="editorial-divider" />
        </div>

        {/* ROW 3: DESIGN (IMAGE LEFT FULL BLEED) */}
        <section className="editorial-row-fullbleed row-img-left">
          <div className="row-media reveal-editorial reveal-from-left">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fb6f09233354c4b449744fc57cd8ad002" alt="Prop design" />
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

          {/* TECHNICAL INSIGHTS / SKILLS */}
          <section className="technical-section reveal-editorial reveal-from-left">
            <h2>{t.technical.title}</h2>
            <p>{t.technical.p1}</p>
            <p>{t.technical.p2}</p>
          </section>

          <hr className="editorial-divider" />

          {/* NEXT PROJECT / CTA CAROUSEL SECTION */}
          <section className="project-cta reveal-editorial reveal-from-left">
            <h2>{t.cta.title}</h2>
            <p className="cta-subtitle">{t.cta.subtitle}</p>

            <ProjectSelector currentProjectId="prop" />

            <a href="/" className="cta-button">{t.cta.button}</a>
          </section>
        </div>
      </div>
    </div>
  );
}