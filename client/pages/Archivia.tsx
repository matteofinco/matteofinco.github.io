import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';

interface ArchiviaProps {
  heroFit?: 'contain' | 'cover';
}

const content = {
  en: {
    title: "ARCHIVIA",
    subtitle: "Flash drive shaped pen holder",
    badge: "Plastic European Innovation Award",
    metadata: {
      roleLabel: "Role",
      roleVal: "Product Design",
      yearLabel: "Year",
      yearVal: "2025",
      teamLabel: "Team",
      teamVal: "Matteo Finco, Giulia Pettenò, Nadia Zanella",
      durationLabel: "Duration",
      durationVal: "3 Months",
      toolsLabel: "Tools",
      toolsVal: "Rhino 7, KeyShot, Illustrator",
      categoryLabel: "Category",
      categoryVal: "Industrial Design"
    },
    overview: {
      title: "Overview",
      challengeTitle: "The Challenge",
      p1: "Developing a small everyday object made from recycled polymers for PLEIADES (Plastic European Innovation Award for Design and Sustainability), a design competition organized by the Università Iuav di Venezia (Vicenza campus) in partnership with global leaders in plastics and molding: Ewikon, Arburg, and Uniform.",
      p2: "The core challenge was to balance high creative freedom with the rigorous technical constraints of mass industrial production, optimizing the object for advanced injection molding."
    },
    solution: {
      title: "Solution",
      p1: "Archivia is a compact desk pen holder that creates a symbolic parallel between digital preservation and analog transcription. Taking visual and functional inspiration from a classic USB flash drive, the product translates digital file storage into a physical workspace organizer.",
      p2: "Composed of three monomaterial parts that lock together without screws or adhesives. The main body is divided into two mirrored halves that fit together securely and connect directly to a 90° rotating cover via integrated mechanical interlocks."
    },
    research: {
      title: "Research",
      p1: "The initial research phase focused on analyzing diverse everyday environments like home, office, and transit to identify a product typology capable of maximizing the technical constraints of the brief.",
      p2: "Desktop optimization emerged as the most compelling direction, leading to an in-depth study of structural polyamide behavior and high-precision snap-fit engineering."
    },
    process: {
      title: "Design & Engineering",
      p1: "Archivia's architecture mirrors the mechanical movement of a rotating USB flash drive. The design optimizes for effortless assembly within a single mold, leveraging integrated mechanical interlocks to ensure structural integrity without additional hardware."
    },
    insights: {
      title: "Key Insights",
      items: [
        {
          title: "Creative & Technical Balance",
          desc: "Combining creative freedom with industrial rigor in every design decision through close collaboration with industry partners."
        },
        {
          title: "Material Efficiency",
          desc: "Optimizing polymer molding technology, wall thickness, and mold geometry for sustainable mass production."
        },
        {
          title: "Mechanical Interlocks",
          desc: "Mastering precision snap-fit engineering to eliminate hardware while maintaining structural durability."
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
    badge: "Plastic European Innovation Award",
    metadata: {
      roleLabel: "Ruolo",
      roleVal: "Product Design",
      yearLabel: "Anno",
      yearVal: "2025",
      teamLabel: "Team",
      teamVal: "Matteo Finco, Giulia Pettenò, Nadia Zanella",
      durationLabel: "Durata",
      durationVal: "3 Mesi",
      toolsLabel: "Strumenti",
      toolsVal: "Rhino 7, KeyShot, Illustrator",
      categoryLabel: "Categoria",
      categoryVal: "Design Industriale"
    },
    overview: {
      title: "Panoramica",
      challengeTitle: "La Sfida",
      p1: "Sviluppo di un piccolo oggetto d'uso quotidiano in polimeri riciclati per il concorso PLEIADES (Plastic European Innovation Award for Design and Sustainability), organizzato dall'Università Iuav di Venezia (sede di Vicenza) in collaborazione con Ewikon, Arburg e Uniform.",
      p2: "La sfida principale è stata bilanciare la libertà espressiva con i rigidi vincoli tecnici della produzione industriale di massa, ottimizzando l'oggetto per lo stampaggio ad iniezione."
    },
    solution: {
      title: "Soluzione",
      p1: "Archivia è un portapenne da scrivania che crea un parallelo simbolico tra archiviazione digitale e trascrizione analogica. Sulla base delle forme iconiche di una pen drive USB, il prodotto traduce l'archiviazione dei file in un organizzatore per lo spazio di lavoro.",
      p2: "Composto da tre parti monomateriale che si assemblano ad incastro senza viti o adesivi. Il corpo principale è diviso in due metà speculari che si collegano alla copertura ruotabile a 90° tramite incastri meccanici integrati."
    },
    research: {
      title: "Ricerca",
      p1: "La fase iniziale si è concentrata sull'analisi degli ambienti quotidiani (casa, ufficio, mobilità) per individuare la tipologia di prodotto in grado di valorizzare i vincoli del brief.",
      p2: "L'ottimizzazione dell'ambiente di lavoro è emersa come la direzione principale, portando a uno studio approfondito sul comportamento della poliammide e sull'ingegnerizzazione degli incastri a scatto."
    },
    process: {
      title: "Sviluppo & Ingegnerizzazione",
      p1: "L'architettura di Archivia rispecchia il movimento meccanico di una chiavetta rotante. Il progetto è ottimizzato per il montaggio intuitivo e la produzione in uno stampo unico."
    },
    insights: {
      title: "Key Insights",
      items: [
        {
          title: "Equilibrio Creativo e Tecnico",
          desc: "Unire creatività e rigore industriale in ogni scelta progettuale grazie al confronto con le aziende partner."
        },
        {
          title: "Efficienza del Materiale",
          desc: "Comprensione delle tecnologie di stampaggio e ottimizzazione dei volumi per la sostenibilità."
        },
        {
          title: "Ingegneria degli Incastri",
          desc: "Sviluppo di snap-fit di precisione per eliminare la minuteria metallica senza compromettere la resistenza."
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

        /* 1. HERO SECTION (FULL WIDTH IMAGE & CLEAN HEADER) */
        .project-hero {
          width: 100%;
          padding: 40px 0 0 0;
        }

        .project-hero-text {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 6vw 60px;
        }

        .project-hero h1 {
          font-size: clamp(3.5rem, 8.5vw, 7rem);
          font-weight: 900;
          line-height: 0.98;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -2.5px;
          text-transform: uppercase;
        }

        .project-subtitle {
          font-size: clamp(1.3rem, 2.5vw, 2rem);
          color: #aaaaaa;
          margin-bottom: 50px;
          font-weight: 400;
        }

        /* TECHNICAL METADATA GRID */
        .hero-metadata-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 30px;
          padding-top: 35px;
          border-top: 1px solid #1a1a1a;
        }

        .metadata-item h4 {
          font-size: 0.75rem;
          font-family: monospace;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #666666;
          margin-bottom: 10px;
        }

        .metadata-item p {
          font-size: 0.95rem;
          color: #dddddd;
          line-height: 1.5;
          margin: 0;
          font-weight: 500;
        }

        /* 100VW HERO IMAGE */
        .project-hero-image-wrapper {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          height: 85vh;
          min-height: 500px;
          background: #070707;
          border: none;
          border-radius: 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-hero-image-wrapper img {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* 2. OVERVIEW TEXT SECTION */
        .overview-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 120px 6vw 80px;
        }

        .overview-section h2 {
          font-size: clamp(2.5rem, 5vw, 4.2rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 30px;
          letter-spacing: -1px;
        }

        .overview-body {
          max-width: 820px;
        }

        .overview-body h3 {
          font-size: clamp(1.2rem, 2vw, 1.7rem);
          font-weight: 600;
          color: #888888;
          margin-bottom: 20px;
        }

        .overview-body p {
          color: #bbbbbb;
          font-size: 1.15rem;
          line-height: 1.85;
          margin-bottom: 25px;
        }

        /* 3. EDGE-TO-EDGE MEDIA ROWS */
        .project-fullbleed-wrapper {
          width: 100%;
          padding: 40px 0 100px;
          display: flex;
          flex-direction: column;
          gap: 140px;
          box-sizing: border-box;
        }

        .project-row {
          display: grid;
          width: 100%;
          align-items: center;
        }

        .project-row.media-right {
          grid-template-columns: 42% 58%;
        }

        .project-row.media-left {
          grid-template-columns: 58% 42%;
        }

        .project-row.media-right .project-text {
          padding: 0 6vw 0 8vw;
        }

        .project-row.media-left .project-text {
          padding: 0 8vw 0 6vw;
        }

        .project-media {
          width: 100%;
          height: 72vh;
          min-height: 480px;
          overflow: hidden;
        }

        .project-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.9s cubic-bezier(.22,.61,.36,1);
        }

        .project-media:hover img {
          transform: scale(1.02);
        }

        .project-text h2 {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 25px;
          color: #ffffff;
          letter-spacing: -1px;
        }

        .project-text p {
          color: #aaaaaa;
          font-size: 1.1rem;
          line-height: 1.85;
          max-width: 540px;
          margin-bottom: 20px;
        }

        /* 4. ASYMMETRICAL EDITORIAL PROCESS LAYOUT */
        .process-editorial-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 6vw 100px;
        }

        .process-editorial-section h2 {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 40px;
          letter-spacing: -1px;
        }

        .process-layout {
          display: flex;
          flex-direction: column;
          gap: 40px;
          width: 100%;
        }

        .process-row-split {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 30px;
          align-items: stretch;
        }

        .process-img-box {
          position: relative;
          width: 100%;
          background: #0a0a0a;
          overflow: hidden;
        }

        .process-img-box.tall {
          height: 520px;
        }

        .process-img-box.gigantic {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          height: 75vh;
          margin-top: 40px;
        }

        .process-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
        }

        .process-img-box:hover img {
          transform: scale(1.02);
        }

        /* REVEAL ANIMATIONS */
        .reveal-editorial {
          opacity: 0;
          filter: blur(8px);
          transition: opacity 1s cubic-bezier(.22,.61,.36,1), 
                      filter 1s cubic-bezier(.22,.61,.36,1), 
                      transform 1s cubic-bezier(.22,.61,.36,1);
        }

        .reveal-editorial.reveal-from-right {
          transform: translateX(35px);
        }

        .reveal-editorial.reveal-from-left {
          transform: translateX(-35px);
        }

        .reveal-editorial.reveal-active {
          opacity: 1;
          filter: blur(0);
          transform: translateX(0);
        }

        /* SKILLS SECTION */
        .project-skills-wrapper {
          max-width: 1400px;
          margin: 60px auto 0;
          padding: 0 6vw 100px;
        }

        .project-skills-wrapper h2 {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 50px;
          letter-spacing: -1px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .skill-item {
          padding: 40px;
          border: 1px solid #1a1a1a;
          background: rgba(255, 255, 255, 0.012);
          transition: all 0.4s ease;
        }

        .skill-item:hover {
          border-color: #333333;
          background: rgba(255, 255, 255, 0.035);
          transform: translateY(-4px);
        }

        .skill-item h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 14px;
        }

        .skill-item p {
          color: #888888;
          font-size: 0.98rem;
          line-height: 1.7;
        }

        /* CTA SECTION */
        .project-cta {
          width: 100%;
          padding: 120px 6vw;
          text-align: center;
          border-top: 1px solid #1a1a1a;
          margin-top: 80px;
          background-color: #070707;
        }

        .project-cta h2 {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }

        .cta-button {
          display: inline-block;
          padding: 18px 44px;
          background: #ffffff;
          color: #070707;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid #ffffff;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }

        .cta-button:hover {
          background: #070707;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .project-row.media-right,
          .project-row.media-left {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .project-row.media-right .project-text,
          .project-row.media-left .project-text {
            padding: 0 6vw;
          }

          .project-media {
            height: 50vh;
            min-height: 360px;
          }

          .process-row-split {
            grid-template-columns: 1fr;
          }

          .process-img-box.tall {
            height: 380px;
          }

          .project-hero-image-wrapper {
            height: 60vh;
            min-height: 350px;
          }
        }

        @media (max-width: 640px) {
          .project-page {
            padding-top: 80px;
          }

          .project-hero-text {
            padding-bottom: 40px;
          }

          .hero-metadata-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .overview-section {
            padding: 80px 6vw 40px;
          }

          .project-fullbleed-wrapper {
            gap: 80px;
            padding: 20px 0;
          }

          .process-img-box.gigantic {
            height: 50vh;
          }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="project-hero reveal-editorial reveal-from-left">
        <div className="project-hero-text">
          <h1>{t.title}</h1>
          <p className="project-subtitle">{t.subtitle}</p>

          <div className="hero-metadata-grid">
            <div className="metadata-item">
              <h4>{t.metadata.roleLabel}</h4>
              <p>{t.metadata.roleVal}</p>
            </div>
            <div className="metadata-item">
              <h4>{t.metadata.yearLabel}</h4>
              <p>{t.metadata.yearVal}</p>
            </div>
            <div className="metadata-item">
              <h4>{t.metadata.teamLabel}</h4>
              <p>{t.metadata.teamVal}</p>
            </div>
            <div className="metadata-item">
              <h4>{t.metadata.durationLabel}</h4>
              <p>{t.metadata.durationVal}</p>
            </div>
            <div className="metadata-item">
              <h4>{t.metadata.toolsLabel}</h4>
              <p>{t.metadata.toolsVal}</p>
            </div>
            <div className="metadata-item">
              <h4>{t.metadata.categoryLabel}</h4>
              <p>{t.metadata.categoryVal}</p>
            </div>
          </div>
        </div>

        {/* 100VW FULL-WIDTH HERO IMAGE */}
        <div className="project-hero-image-wrapper">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fc4e5eae770e146cc9e7245b921f5d11e"
            alt="Archivia Hero Render"
            style={{ objectFit: heroFit }}
          />
        </div>
      </section>

      {/* 2. OVERVIEW TEXT */}
      <section className="overview-section reveal-editorial reveal-from-left">
        <h2>{t.overview.title}</h2>
        <div className="overview-body">
          <h3>{t.overview.challengeTitle}</h3>
          <p>{t.overview.p1}</p>
          <p>{t.overview.p2}</p>
        </div>
      </section>

      {/* 3. FULLBLEED EDITORIAL ROWS */}
      <div className="project-fullbleed-wrapper">
        {/* SOLUTION ROW */}
        <section className="project-row media-right">
          <div className="project-text reveal-editorial reveal-from-left">
            <h2>{t.solution.title}</h2>
            <p>{t.solution.p1}</p>
            <p>{t.solution.p2}</p>
          </div>
          <div className="project-media reveal-editorial reveal-from-right">
            <img
              src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80"
              alt="Archivia solution detail"
            />
          </div>
        </section>

        {/* RESEARCH ROW */}
        <section className="project-row media-left">
          <div className="project-media reveal-editorial reveal-from-left">
            <img
              src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=80"
              alt="Archivia research process"
            />
          </div>
          <div className="project-text reveal-editorial reveal-from-right">
            <h2>{t.research.title}</h2>
            <p>{t.research.p1}</p>
            <p>{t.research.p2}</p>
          </div>
        </section>
      </div>

      {/* 4. ASYMMETRICAL PROCESS LAYOUT */}
      <section className="process-editorial-section">
        <h2 className="reveal-editorial reveal-from-left">{t.process.title}</h2>

        <div className="process-layout">
          {/* ASYMMETRICAL ROW 1 */}
          <div className="process-row-split">
            <div className="process-img-box tall reveal-editorial reveal-from-left">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80"
                alt="Process iteration 1"
              />
            </div>
            <div className="process-img-box tall reveal-editorial reveal-from-right">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80"
                alt="Process iteration 2"
              />
            </div>
          </div>

          <p className="reveal-editorial reveal-from-left" style={{ color: '#aaaaaa', fontSize: '1.1rem', lineHeight: '1.85', maxWidth: '820px', margin: '20px 0' }}>
            {t.process.p1}
          </p>

          {/* GIGANTIC FULL-WIDTH PROCESS IMAGE */}
          <div className="process-img-box gigantic reveal-editorial reveal-from-left">
            <img
              src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=80"
              alt="Design detail render"
            />
          </div>
        </div>
      </section>

      {/* KEY INSIGHTS */}
      <section className="project-skills-wrapper">
        <h2 className="reveal-editorial reveal-from-left">{t.insights.title}</h2>
        <div className="skills-grid">
          {t.insights.items.map((item, idx) => (
            <div key={idx} className="skill-item reveal-editorial reveal-from-left">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="project-cta">
        <h2>{t.cta.title}</h2>
        <p style={{ color: '#aaaaaa', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.7' }}>
          {t.cta.subtitle}
        </p>
        <a href="/" className="cta-button">{t.cta.button}</a>
      </section>
    </div>
  );
}