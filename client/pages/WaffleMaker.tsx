import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';

interface WaffleMakerProps {
  heroFit?: 'contain' | 'cover';
}

const IMAGES = {
  hero: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fedbb2046d3db4d549f4da864fca20382",
  solution: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fedbb2046d3db4d549f4da864fca20382",
  research: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fedbb2046d3db4d549f4da864fca20382",
  design: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fedbb2046d3db4d549f4da864fca20382",
  compositeTop: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fedbb2046d3db4d549f4da864fca20382",
  compositeBottomLeft: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fedbb2046d3db4d549f4da864fca20382",
  compositeBottomRight: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fedbb2046d3db4d549f4da864fca20382",
};

const PROJECTS_LIST = [
  { id: "archivia", title: "Archivia", subtitle: "Pen holder", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fc4e5eae770e146cc9e7245b921f5d11e", path: "/archivia" },
  { id: "pizzamente", title: "PizzaMente", subtitle: "Academic Workshop", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913", path: "/pizzamente" },
  { id: "nando", title: "Nando", subtitle: "Hyperplastic cutlery handle", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F58faeaf495544fe5a8367b24177ac088", path: "/nando" },
  { id: "snake", title: "Snake", subtitle: "Hockey stickhandling trainer", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F9366df60acf94b0bacc85252a2e3865e", path: "/snake" },
  { id: "wafflemaker", title: "Waffle Maker", subtitle: "Waffle Maker analysis", imageUrl: IMAGES.hero, path: "/wafflemaker" },
  { id: "prop", title: "Prop", subtitle: "3D-Printed Emergency Crutch", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41", path: "/prop" },
  { id: "ttable", title: "T-Table", subtitle: "Interactive table attentive to nutrition", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2c9ec8a6b5fd4d90bb36506ce7b89adc", path: "/ttable" }
];

const content = {
  en: {
    title: "WAFFLE MAKER",
    subtitle: "Waffle Maker analysis[cite: 2]",
    meta: {
      teamLabel: "Designers",
      yearLabel: "Year",
      yearVal: "2025[cite: 2]",
      awardLabel: "Project Type",
      awardVal: "Product Analysis & Basic Design[cite: 2]"
    },
    overview: {
      title: "Overview",
      subtitle: "Challenge[cite: 2]",
      p1: "Everyday objects conceal relational and ergonomic complexities that are often invisible to the end user[cite: 2]. The challenge of this Basic Design project was to deconstruct an existing object to map and understand its functional architecture and communicative language[cite: 2].",
      p2: "The primary objective was to translate the physical and visual interaction between humans and objects into objective data, critically analyzing how form guides action (affordance), how energy and thermal flows are managed, and where there is room for improvement in terms of usability and home security[cite: 2]."
    },
    solution: {
      title: "Solution[cite: 2]",
      p1: "The project was structured as a process of morphological and functional decomposition, aimed at producing an editorial analysis[cite: 2].",
      p2: "The device was broken down into macrosystems: the mechanical locking mechanism, the analog visual interface, the cable management, and the internal cooking architecture[cite: 2].",
      p3: "The final document serves as a critical analysis of the product, examining how each component responds to specific industrial, construction, and communication logics[cite: 2]."
    },
    research: {
      title: "Research[cite: 2]",
      p1: "The investigation was conducted in the field by physically disassembling the appliance, a fundamental practice for mapping internal components and understanding industrial assembly sequences[cite: 2]. This reverse engineering process provided significant training, fostering the learning and integration of new digital tools[cite: 2].",
      p2: "On the one hand, the use of 3D modeling software allowed for the geometric reconstruction of the parts and the study of tolerances; on the other, the application of the Adobe suite was crucial for editorial layout, graphic synthesis, and the management of the visual communication of the collected technical data[cite: 2]."
    },
    design: {
      title: "Design[cite: 2]",
      p1: "The locking system was analyzed in its dual role as a mechanical constraint and safety interface, validated by the tactile and acoustic feedback (click) of the locking button[cite: 2].",
      p2: "The visual interface, characterized by two-color light indicators, was examined from a cognitive ergonomics perspective, evaluating its effectiveness in communicating the appliance's thermal status[cite: 2].",
      p3: "The study highlighted how the curved geometries and glossy finishes of the body visually attenuate the perception of an intrinsically dangerous object, coherently inserting it into a reassuring and playful domestic image[cite: 2]."
    },
    technical: {
      title: "Skills & Technical Insights[cite: 2]",
      p1: "The research demonstrated the crucial importance of the product analysis phase as a fundamental tool for training designers[cite: 2]. Through the deconstruction of the waffle maker, the article highlights how even the simplest mass-produced industrial device requires meticulous coordination between formal language, construction constraints, and usability[cite: 2].",
      p2: "The findings collected in the analysis book not only document the state of the art of the examined object, but also define a replicable critical methodology, laying the cognitive foundations necessary for the informed design of future, more complex and safer product systems[cite: 2]."
    },
    cta: {
      title: "What's next?",
      subtitle: "Projects",
      button: "BACK TO PORTFOLIO"
    }
  },
  it: {
    title: "WAFFLE MAKER",
    subtitle: "Analisi del Waffle Maker[cite: 2]",
    meta: {
      teamLabel: "Designer",
      yearLabel: "Anno",
      yearVal: "2025[cite: 2]",
      awardLabel: "Tipologia Progetto",
      awardVal: "Analisi di Prodotto & Basic Design[cite: 2]"
    },
    overview: {
      title: "Overview",
      subtitle: "Sfida progettuale[cite: 2]",
      p1: "Gli oggetti di uso quotidiano celano complessità relazionali ed ergonomiche spesso invisibili all'utente finale[cite: 2]. La sfida di questo progetto di Basic Design è stata quella di decostruire un oggetto esistente per mapparne e comprenderne l'architettura funzionale e il linguaggio comunicativo[cite: 2].",
      p2: "L'obiettivo primario era tradurre l'interazione fisica e visiva tra uomo e oggetto in dati oggettivi, analizzando criticamente come la forma guida l'azione (affordance), come vengono gestiti i flussi energetici e termici, e dove vi è margine di miglioramento in termini di usabilità e sicurezza domestica[cite: 2]."
    },
    solution: {
      title: "Solution[cite: 2]",
      p1: "Il progetto è stato strutturato come un processo di scomposizione morfologica e funzionale, finalizzato alla produzione di un'analisi editoriale[cite: 2].",
      p2: "Il dispositivo è stato suddiviso in macrosistemi: il meccanismo di bloccaggio meccanico, l'interfaccia visiva analogica, la gestione dei cavi e l'architettura di cottura interna[cite: 2].",
      p3: "Il documento finale funge da analisi critica del prodotto, esaminando come ciascun componente risponda a specifiche logiche industriali, costruttive e comunicative[cite: 2]."
    },
    research: {
      title: "Research[cite: 2]",
      p1: "L'indagine è stata condotta sul campo mediante lo smontaggio fisico dell'apparecchio, una pratica fondamentale per mappare i componenti interni e comprendere le sequenze di assemblaggio industriale[cite: 2]. Questo processo di reverse engineering ha fornito una formazione significativa, favorendo l'apprendimento e l'integrazione di nuovi strumenti digitali[cite: 2].",
      p2: "Da un lato, l'uso di software di modellazione 3D ha permesso la ricostruzione geometrica delle parti e lo studio delle tolleranze; dall'altro, l'applicazione della suite Adobe è stata cruciale per l'impaginazione editoriale, la sintesi grafica e la gestione della comunicazione visiva dei dati tecnici raccolti[cite: 2]."
    },
    design: {
      title: "Design[cite: 2]",
      p1: "Il sistema di bloccaggio è stato analizzato nel suo duplice ruolo di vincolo meccanico e interfaccia di sicurezza, validato dal feedback tattile e acustico (click) del pulsante di chiusura[cite: 2].",
      p2: "L'interfaccia visiva, caratterizzata da indicatori luminosi bicolore, è stata esaminata da una prospettiva di ergonomia cognitiva, valutandone l'efficacia nel comunicare lo stato termico dell'apparecchio[cite: 2].",
      p3: "Lo studio ha evidenziato come le geometrie curve e le finiture lucide del corpo attenuino visivamente la percezione di un oggetto intrinsecamente pericoloso, inserendolo coerentemente in un'immagine domestica rassicurante e giocosa[cite: 2]."
    },
    technical: {
      title: "Skills & Technical Insights[cite: 2]",
      p1: "La ricerca ha dimostrato la cruciale importanza della fase di analisi di prodotto come strumento fondamentale per la formazione dei designer[cite: 2]. Attraverso la decostruzione del waffle maker, l'articolo evidenzia come anche il più semplice dispositivo industriale di massa richieda una meticolosa coordinazione tra linguaggio formale, vincoli costruttivi e usabilità[cite: 2].",
      p2: "I riscontri raccolti nel libro di analisi non solo documentano lo stato dell'arte dell'oggetto esaminato, ma definiscono anche una metodologia critica replicabile, ponendo le basi cognitive necessarie per la progettazione consapevole di futuri sistemi di prodotto più complessi e sicuri[cite: 2]."
    },
    cta: {
      title: "What's next?",
      subtitle: "Progetti",
      button: "TORNA AL PORTFOLIO"
    }
  }
};

export default function WaffleMaker({ heroFit = 'cover' }: WaffleMakerProps) {
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
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('reveal-active');
      } else {
        revealObserver.observe(el);
      }
    });

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

        .project-navigator {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          margin-top: 20px;
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

        .project-preview-card {
          position: absolute;
          bottom: 60px;
          width: 280px;
          background: #111111;
          border: 1px solid #262626;
          border-radius: 0;
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
          border-radius: 0;
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

        @media (max-width: 860px) {
          .project-page {
            padding-top: 90px;
          }

          .project-preview-card {
            display: none !important;
          }

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
            height: 280px;
          }

          .hero-media-fullbleed {
            height: 280px;
            margin-top: 24px;
          }

          .composite-bottom {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .composite-top {
            height: 280px;
          }

          .composite-square {
            height: 280px;
          }

          .editorial-divider {
            margin: 40px 0;
          }
        }
      `}</style>

      <div className="project-container">
        <div className="editorial-content">
          <section className="project-hero reveal-editorial reveal-from-left">
            <h1>{t.title}</h1>
            <p className="project-subtitle">{t.subtitle}</p>

            <div className="hero-info">
              <div className="info-block">
                <span>{t.meta.teamLabel}</span>
                <p>Matteo Finco, Pierpaolo Vedelago</p>
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

        <section className="hero-media-fullbleed reveal-editorial reveal-from-left">
          <img src={IMAGES.hero} alt="Waffle Maker hero" />
        </section>

        <div className="editorial-content">
          <hr className="editorial-divider" />
          <section className="overview-section reveal-editorial reveal-from-left">
            <h2>{t.overview.title}</h2>
            <span className="section-label">{t.overview.subtitle}</span>
            <p>{t.overview.p1}</p>
            <p>{t.overview.p2}</p>
          </section>
          <hr className="editorial-divider" />
        </div>

        <section className="editorial-row-fullbleed row-img-left">
          <div className="row-media reveal-editorial reveal-from-left">
            <img src={IMAGES.solution} alt="Waffle Maker solution" />
          </div>
          <div className="row-text reveal-editorial reveal-from-right">
            <h2>{t.solution.title}</h2>
            <p>{t.solution.p1}</p>
            <p>{t.solution.p2}</p>
            <p>{t.solution.p3}</p>
          </div>
        </section>

        <div className="editorial-content"><hr className="editorial-divider" /></div>

        <section className="editorial-row-fullbleed row-img-right">
          <div className="row-text reveal-editorial reveal-from-left">
            <h2>{t.research.title}</h2>
            <p>{t.research.p1}</p>
            <p>{t.research.p2}</p>
          </div>
          <div className="row-media reveal-editorial reveal-from-right">
            <img src={IMAGES.research} alt="Waffle Maker research" />
          </div>
        </section>

        <div className="editorial-content"><hr className="editorial-divider" /></div>

        <section className="editorial-row-fullbleed row-img-left">
          <div className="row-media reveal-editorial reveal-from-left">
            <img src={IMAGES.design} alt="Waffle Maker design" />
          </div>
          <div className="row-text reveal-editorial reveal-from-right">
            <h2>{t.design.title}</h2>
            <p>{t.design.p1}</p>
            <p>{t.design.p2}</p>
            <p>{t.design.p3}</p>
          </div>
        </section>

        <div className="editorial-content"><hr className="editorial-divider" /></div>

        <section className="fullbleed-composite reveal-editorial reveal-from-left">
          <div className="media-composite-box">
            <div className="composite-top">
              <img src={IMAGES.compositeTop} alt="Waffle Maker assembly" />
            </div>
            <div className="composite-bottom">
              <div className="composite-square">
                <img src={IMAGES.compositeBottomLeft} alt="Waffle Maker detail" />
              </div>
              <div className="composite-square">
                <img src={IMAGES.compositeBottomRight} alt="Waffle Maker detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="editorial-content">
          <hr className="editorial-divider" />
          <section className="technical-section reveal-editorial reveal-from-left">
            <h2>{t.technical.title}</h2>
            <p>{t.technical.p1}</p>
            <p>{t.technical.p2}</p>
          </section>

          <hr className="editorial-divider" />

          <section className="project-cta reveal-editorial reveal-from-left">
            <h2>{t.cta.title}</h2>
            <p className="cta-subtitle">{t.cta.subtitle}</p>

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
                    className={`dot-item ${proj.id === 'wafflemaker' ? 'active' : ''}`}
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
    </div>
  );
}