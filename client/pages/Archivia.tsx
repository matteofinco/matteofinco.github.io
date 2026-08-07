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
      awardLabel: "Award",
      awardVal: "Plastic European Innovation Award"
    },
    overview: {
      title: "Overview",
      p1: "Developing a small everyday object made from recycled polymers for PLEIADES (Plastic European Innovation Award for Design and Sustainability), organized by Università Iuav di Venezia (Vicenza campus) with Ewikon, Arburg, and Uniform.",
      p2: "The main goal was to balance creative expression with the rigorous technical constraints of mass industrial production, optimizing the object for injection molding."
    },
    solution: {
      title: "Solution",
      p1: "Archivia is a compact desk pen holder that creates a symbolic parallel between digital preservation and analog transcription. Taking visual inspiration from a classic USB flash drive, it translates file storage into a physical workspace organizer.",
      p2: "Composed of three monomaterial parts that lock together without screws or adhesives. The main body consists of two mirrored halves connected to a 90° rotating cover via integrated mechanical interlocks."
    },
    research: {
      title: "Research & Concept",
      p1: "Initial research focused on desk organization and daily routines to find a typology capable of leveraging recycled polyamide's physical properties.",
      p2: "Desk optimization emerged as the primary focus, leading to detailed work on wall thickness, snap-fit tolerances, and rotational mechanics."
    },
    process: {
      title: "Engineering",
      p1: "Archivia's architecture mirrors the mechanical movement of a rotating flash drive. The assembly is optimized for single-mold production, ensuring structural stability purely through precision interlocks."
    },
    bottomSection: {
      title: "Project Takeaways & Tools",
      toolsTitle: "Tools & Technologies",
      toolsDesc: "Rhino 7, KeyShot, Adobe Illustrator, FDM 3D Printing (Prototyping)",
      insights: [
        {
          title: "Creative & Technical Balance",
          desc: "Combining creative freedom with industrial rigor through direct exchange with molding and plastics manufacturers."
        },
        {
          title: "Material Efficiency",
          desc: "Optimizing polymer volume and mold geometry for sustainable, low-impact production."
        },
        {
          title: "Mechanical Interlocks",
          desc: "Designing high-precision snap fits to eliminate hardware and simplify single-material recycling."
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
      awardLabel: "Riconoscimento",
      awardVal: "Plastic European Innovation Award"
    },
    overview: {
      title: "Panoramica",
      p1: "Sviluppo di un oggetto d'uso quotidiano in polimeri riciclati per il concorso PLEIADES (Plastic European Innovation Award for Design and Sustainability), organizzato dall'Università Iuav di Venezia (sede di Vicenza) con Ewikon, Arburg e Uniform.",
      p2: "L'obiettivo principale era bilanciare la ricerca formale con i rigidi vincoli tecnici dello stampaggio ad iniezione per la produzione industriale su larga scala."
    },
    solution: {
      title: "Soluzione",
      p1: "Archivia è un portapenne da scrivania che crea un parallelo tra archiviazione digitale e scrittura analogica. La forma riprende l'iconica pendrive USB, trasformando il concetto di memoria digitale in un organizzatore fisico.",
      p2: "È composto da tre parti monomateriale assemblate senza viti né collanti. Il corpo centrale si divide in due metà speculari unite alla calotta ruotabile a 90° tramite incastri meccanici integrati."
    },
    research: {
      title: "Ricerca & Concept",
      p1: "La ricerca iniziale ha analizzato lo spazio di lavoro per identificare una tipologia di prodotto capace di valorizzare le caratteristiche meccaniche della poliammide riciclata.",
      p2: "L'organizzazione della scrivania si è rivelata la direzione ideale, portando allo studio degli spessori di parete, delle tolleranze degli snap-fit e dei cinetismi di rotazione."
    },
    process: {
      title: "Ingegnerizzazione",
      p1: "L'architettura di Archivia rispecchia il movimento di una chiavetta rotante. Il prodotto è ottimizzato per essere realizzato in un unico stampo, garantendo tenuta strutturale solo tramite incastri di precisione."
    },
    bottomSection: {
      title: "Dettagli Tecnici & Insights",
      toolsTitle: "Strumenti Utilizzati",
      toolsDesc: "Rhino 7, KeyShot, Adobe Illustrator, Stampa 3D FDM (Prototipazione)",
      insights: [
        {
          title: "Equilibrio Tecnico e Formale",
          desc: "Sintesi tra libertà espressiva e rigore industriale grazie al confronto diretto con le aziende del settore."
        },
        {
          title: "Efficienza del Materiale",
          desc: "Ottimizzazione dei volumi di polimero e delle geometrie dello stampo per una produzione sostenibile."
        },
        {
          title: "Incastri Meccanici",
          desc: "Progettazione di snap-fit ad alta precisione per eliminare componenti metallici e facilitare il riciclo."
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
      { threshold: 0.15 }
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
          padding-bottom: 60px;
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
          margin-bottom: 50px;
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

        /* HERO IMAGE CONTAINER */
        .project-hero-image {
          width: 100%;
          height: 62vh;
          min-height: 400px;
          max-height: 700px;
          background-color: #0b0b0b;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 90px;
        }

        .project-hero-image img {
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
          margin-bottom: 20px;
        }

        /* EDITORIAL COLUMN ROWS (TEXT + IMAGE) */
        .editorial-rows {
          display: flex;
          flex-direction: column;
          gap: 120px;
          margin-bottom: 120px;
        }

        .project-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .project-row.reverse {
          direction: rtl;
        }

        .project-row.reverse .project-text,
        .project-row.reverse .project-media {
          direction: ltr;
        }

        .project-text h2 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 20px;
          color: #ffffff;
          letter-spacing: -1px;
        }

        .project-text p {
          color: #aaaaaa;
          font-size: 1.08rem;
          line-height: 1.8;
          margin-bottom: 18px;
        }

        .project-media {
          width: 100%;
          height: 480px;
          background: #0d0d0d;
          overflow: hidden;
        }

        .project-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
        }

        .project-media:hover img {
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

        /* BOTTOM SECTION (INSIGHTS & TOOLS GRID) */
        .bottom-section {
          margin-top: 80px;
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
          border-color: #262626;
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
          color: #cccccc;
          font-family: monospace;
          font-size: 0.9rem;
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
        @media (max-width: 900px) {
          .project-row,
          .project-row.reverse {
            grid-template-columns: 1fr;
            gap: 35px;
            direction: ltr;
          }

          .project-row.reverse .project-text,
          .project-row.reverse .project-media {
            direction: ltr;
          }

          .project-media {
            height: 380px;
          }

          .editorial-rows {
            gap: 80px;
          }

          .hero-minimal-meta {
            gap: 20px;
          }

          .project-hero-image {
            height: 45vh;
            min-height: 300px;
            margin-bottom: 60px;
          }
        }
      `}</style>

      <div className="project-container">
        {/* HERO SECTION */}
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

          <div className="project-hero-image">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fc4e5eae770e146cc9e7245b921f5d11e"
              alt="Archivia Hero Render"
              style={{ objectFit: heroFit }}
            />
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="overview-section reveal-editorial reveal-from-left">
          <h2>{t.overview.title}</h2>
          <p>{t.overview.p1}</p>
          <p>{t.overview.p2}</p>
        </section>

        {/* EDITORIAL COLUMN ROWS */}
        <div className="editorial-rows">
          {/* SOLUTION ROW */}
          <section className="project-row">
            <div className="project-text reveal-editorial reveal-from-left">
              <h2>{t.solution.title}</h2>
              <p>{t.solution.p1}</p>
              <p>{t.solution.p2}</p>
            </div>
            <div className="project-media reveal-editorial reveal-from-right">
              <img
                src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80"
                alt="Archivia solution detail"
              />
            </div>
          </section>

          {/* RESEARCH ROW */}
          <section className="project-row reverse">
            <div className="project-text reveal-editorial reveal-from-right">
              <h2>{t.research.title}</h2>
              <p>{t.research.p1}</p>
              <p>{t.research.p2}</p>
            </div>
            <div className="project-media reveal-editorial reveal-from-left">
              <img
                src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80"
                alt="Archivia research process"
              />
            </div>
          </section>

          {/* PROCESS ROW */}
          <section className="project-row">
            <div className="project-text reveal-editorial reveal-from-left">
              <h2>{t.process.title}</h2>
              <p>{t.process.p1}</p>
            </div>
            <div className="project-media reveal-editorial reveal-from-right">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
                alt="Archivia engineering detail"
              />
            </div>
          </section>
        </div>

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
