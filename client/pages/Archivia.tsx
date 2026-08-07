import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';

interface ArchiviaProps {
  heroFit?: 'contain' | 'cover';
}

const PROJECTS_LIST = [
  { id: "archivia", title: "Archivia", subtitle: "Pen holder", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fc4e5eae770e146cc9e7245b921f5d11e", path: "/archivia", areaClass: "area-archivia" },
  { id: "pizzamente", title: "PizzaMente", subtitle: "Academic Workshop", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913", path: "/pizzamente", areaClass: "area-pizza" },
  { id: "nando", title: "Nando", subtitle: "Hyperplastic cutlery handle", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F58faeaf495544fe5a8367b24177ac088", path: "/nando", areaClass: "area-nando" },
  { id: "snake", title: "Snake", subtitle: "Hockey stickhandling trainer", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F9366df60acf94b0bacc85252a2e3865e", path: "/snake", areaClass: "area-snake" },
  { id: "wafflemaker", title: "Waffle Maker", subtitle: "Waffle Maker analysis", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fedbb2046d3db4d549f4da864fca20382", path: "/wafflemaker", areaClass: "area-waffle" },
  { id: "prop", title: "Prop", subtitle: "3D-Printed Emergency Crutch", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41", path: "/prop", areaClass: "area-prop" },
  { id: "ttable", title: "T-Table", subtitle: "Interactive feeding-friendly table", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2c9ec8a6b5fd4d90bb36506ce7b89adc", path: "/ttable", areaClass: "area-ttable" }
];

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
      title: "Explore Projects",
      subtitle: "Hover over the dots to preview and navigate to other works.",
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
      title: "Esplora i Progetti",
      subtitle: "Passa il mouse sui pallini per vedere l'anteprima e navigare direttamente tra i lavori.",
      button: "TORNA AL PORTFOLIO"
    }
  }
};

export default function Archivia({ heroFit = 'cover' }: ArchiviaProps) {
  const [language, setLanguage] = useState<'it' | 'en'>('en');
  const [hoveredProject, setHoveredProject] = useState<typeof PROJECTS_LIST[0] | null>(null);
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
        .project-page * {
          box-sizing: border-box;
        }

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
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 4vw;
        }

        /* DIVIDERS */
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

        /* HERO FULL BLEED - BLOCCO CON ALTEZZA CALIBRATA (16:9 MAX 60VH) */
        .hero-media-fullbleed {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          aspect-ratio: 16 / 9;
          max-height: 60vh;
          background: #0d0d0d;
          overflow: hidden;
          margin-top: 40px;
        }

        .hero-media-fullbleed img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center center;
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

        /* EDITORIAL GRID ROWS - ANCORATE IN ALTO (ALIGN-ITEMS: START) */
        .editorial-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
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

        /* BOX IMMAGINE RIGIDO 4:3 SENZA BLEED PROBLEMATICI */
        .row-media {
          background: #0d0d0d;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          width: 100%;
          max-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #141414;
        }

        .row-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          transition: transform 0.8s ease;
        }

        .row-media:hover img {
          transform: scale(1.02);
        }

        /* COMPOSITE GRID FULL BLEED EDGE-TO-EDGE CON ALTEZZA MASSIMA RIGIDA */
        .fullbleed-composite {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background: #070707;
          padding: 0;
        }

        .media-composite-box {
          width: 100vw;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          margin: 0;
        }

        .composite-top {
          width: 100vw;
          aspect-ratio: 16 / 9;
          max-height: 55vh;
          overflow: hidden;
          background: #000000;
        }

        .composite-bottom {
          width: 100vw;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .composite-square {
          width: 100%;
          aspect-ratio: 1 / 1;
          max-height: 45vh;
          overflow: hidden;
          background: #111111;
        }

        .media-composite-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          transition: transform 0.6s ease;
        }

        .media-composite-box img:hover {
          transform: scale(1.02);
        }

        /* TECHNICAL NARRATIVE CARD */
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

        /* PROJECT NAVIGATOR (DOTS + PREVIEW) */
        .project-navigator {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          margin-top: 30px;
        }

        .dots-container {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 40px;
          backdrop-filter: blur(8px);
        }

        .dot-item {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #333333;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0;
          position: relative;
        }

        .dot-item:hover, .dot-item.active {
          background: #ffffff;
          transform: scale(1.3);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
        }

        .dot-item.active {
          border: 2px solid #070707;
        }

        /* PREVIEW CARD HOVER */
        .project-preview-card {
          position: absolute;
          bottom: 60px;
          width: 280px;
          background: #111111;
          border: 1px solid #262626;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
          pointer-events: none;
          animation: fadeIn 0.25s ease-out forwards;
          z-index: 100;
        }

        .preview-img-box {
          width: 100%;
          height: 160px;
          overflow: hidden;
          background: #000;
        }

        .preview-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .preview-details {
          padding: 12px 16px;
          text-align: left;
        }

        .preview-details h4 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4px 0;
          letter-spacing: -0.5px;
        }

        .preview-details p {
          font-size: 0.75rem;
          color: #888888;
          font-family: monospace;
          margin: 0;
          text-transform: uppercase;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
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
          letter-spacing: 0.8px;
          font-size: 0.82rem;
          margin-top: 25px;
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

          .composite-bottom {
            grid-template-columns: 1fr;
          }

          .editorial-divider {
            margin: 40px 0;
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

        {/* HERO PRODUCT IMAGE (16:9 MAX 60VH) */}
        <section className="hero-media-fullbleed reveal-editorial reveal-from-left">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fb8ef76dbdd4f4619959ec6122f1096c8"
            alt="Archivia hero product shot"
            style={{ objectFit: heroFit, objectPosition: 'center center' }}
          />
        </section>

        <hr className="editorial-divider" />

        {/* OVERVIEW / CHALLENGE */}
        <section className="overview-section reveal-editorial reveal-from-left">
          <h2>{t.overview.title}</h2>
          <span className="section-label">{t.overview.subtitle}</span>
          <p>{t.overview.p1}</p>
          <p>{t.overview.p2}</p>
        </section>

        <hr className="editorial-divider" />

        {/* ROW 1: SOLUTION (BOX 4:3 LEFT, TEXT RIGHT) */}
        <section className="editorial-row">
          <div className="row-media reveal-editorial reveal-from-left">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F1b0a4b6f9bb84630b2d4b1bb8716ab11"
              alt="Archivia solution concept"
            />
          </div>
          <div className="row-text reveal-editorial reveal-from-right">
            <h2>{t.solution.title}</h2>
            <p>{t.solution.p1}</p>
            <p>{t.solution.p2}</p>
            <p>{t.solution.p3}</p>
          </div>
        </section>

        <hr className="editorial-divider" />

        {/* ROW 2: RESEARCH (TEXT LEFT, BOX 4:3 RIGHT) */}
        <section className="editorial-row">
          <div className="row-text reveal-editorial reveal-from-left">
            <h2>{t.research.title}</h2>
            <p>{t.research.p1}</p>
            <p>{t.research.p2}</p>
          </div>
          <div className="row-media reveal-editorial reveal-from-right">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F1b0a4b6f9bb84630b2d4b1bb8716ab11"
              alt="Archivia research details"
            />
          </div>
        </section>

        <hr className="editorial-divider" />

        {/* ROW 3: DESIGN (BOX 4:3 LEFT, TEXT RIGHT) */}
        <section className="editorial-row">
          <div className="row-media reveal-editorial reveal-from-left">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F1b0a4b6f9bb84630b2d4b1bb8716ab11"
              alt="Archivia design mechanics"
            />
          </div>
          <div className="row-text reveal-editorial reveal-from-right">
            <h2>{t.design.title}</h2>
            <p>{t.design.p1}</p>
            <p>{t.design.p2}</p>
            <p>{t.design.p3}</p>
          </div>
        </section>

        <hr className="editorial-divider" />

        {/* COMPOSITE 3-IMAGE GRID BOX (16:9 + TWO 1:1 SQUARES) */}
        <section className="fullbleed-composite reveal-editorial reveal-from-left">
          <div className="media-composite-box">
            <div className="composite-top">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F863e0bdf77e44519b6628999a8739214"
                alt="Archivia exploded view wide"
              />
            </div>
            <div className="composite-bottom">
              <div className="composite-square">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F8e4089261fe741a580f79ee17d2c5cbe"
                  alt="Archivia detail square 1"
                />
              </div>
              <div className="composite-square">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F4894abf6b091470cbbc3233eb674a6b9"
                  alt="Archivia detail square 2"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="editorial-divider" />

        {/* TECHNICAL INSIGHTS */}
        <section className="technical-section reveal-editorial reveal-from-left">
          <h2>{t.technical.title}</h2>
          <p>{t.technical.p1}</p>
          <p>{t.technical.p2}</p>
        </section>

        <hr className="editorial-divider" />

        {/* NEXT PROJECT / CTA + PROJECT NAVIGATOR */}
        <section className="project-cta reveal-editorial reveal-from-left">
          <h2>{t.cta.title}</h2>
          <p style={{ color: '#aaaaaa', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 20px', lineHeight: '1.6' }}>
            {t.cta.subtitle}
          </p>

          <div className="project-navigator">
            {hoveredProject && (
              <div className="project-preview-card">
                <div className="preview-img-box">
                  <img src={hoveredProject.imageUrl} alt={hoveredProject.title} />
                </div>
                <div className="preview-details">
                  <h4>{hoveredProject.title}</h4>
                  <p>{hoveredProject.subtitle}</p>
                </div>
              </div>
            )}

            <div className="dots-container">
              {PROJECTS_LIST.map((proj) => (
                <button
                  key={proj.id}
                  className={`dot-item ${proj.id === 'archivia' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredProject(proj)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => window.location.href = proj.path}
                  aria-label={`Vai al progetto ${proj.title}`}
                />
              ))}
            </div>
          </div>

          <a href="/" className="cta-button">{t.cta.button}</a>
        </section>
      </div>
    </div>
  );
}