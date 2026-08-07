import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';

interface PizzaMenteProps {
  heroFit?: 'contain' | 'cover';
}

const IMAGES = {
  hero: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913",
  solution: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913",
  research: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913",
  design: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913",
  compositeTop: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913",
  compositeBottomLeft: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913",
  compositeBottomRight: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913",
};

const PROJECTS_LIST = [
  { id: "archivia", title: "Archivia", subtitle: "Pen holder", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fc4e5eae770e146cc9e7245b921f5d11e", path: "/archivia" },
  { id: "pizzamente", title: "PizzaMente", subtitle: "Automated multisensory pizza experience", imageUrl: IMAGES.hero, path: "/pizzamente" },
  { id: "nando", title: "Nando", subtitle: "Hyperplastic cutlery handle", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F58faeaf495544fe5a8367b24177ac088", path: "/nando" },
  { id: "snake", title: "Snake", subtitle: "Hockey stickhandling trainer", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F9366df60acf94b0bacc85252a2e3865e", path: "/snake" },
  { id: "wafflemaker", title: "Waffle Maker", subtitle: "Waffle Maker analysis", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fedbb2046d3db4d549f4da864fca20382", path: "/wafflemaker" },
  { id: "prop", title: "Prop", subtitle: "3D-Printed Emergency Crutch", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41", path: "/prop" },
  { id: "ttable", title: "T-Table", subtitle: "Interactive table attentive to nutrition", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2c9ec8a6b5fd4d90bb36506ce7b89adc", path: "/ttable" }
];

const content = {
  en: {
    title: "PIZZAMENTE",
    subtitle: "Automated multisensory pizza experience",
    meta: {
      teamLabel: "Designers",
      yearLabel: "Year",
      yearVal: "2025",
      awardLabel: "Project Type",
      awardVal: "Academic Workshop & Automated Food Station"
    },
    overview: {
      title: "Overview",
      subtitle: "Challenge",
      p1: "Redesigning a food automation system, especially when applied to a traditional product like pizza, requires addressing critical issues of both functionality and perception. Developed from an initial brief provided by Daint, the project began with the analysis and study of their existing pizza vending machines.",
      p2: "The primary challenge was to transform an interaction historically perceived as cold and purely transactional into a premium user experience. The goal of the intensive workshop was therefore to rework and reconfigure the performance of these devices, deconstructing consumer skepticism and preserving the cultural values of food in the midst of constant technological evolution."
    },
    solution: {
      title: "Solution",
      p1: "PizzaMente is an automated micro-food station concept that transforms food service into a multisensory and circular user experience. The system stands out for its highly modular design, designed to integrate all phases of consumption into a single machine: from automated food production to immediate consumption and waste disposal.",
      p2: "To address the psychological friction associated with the downtime associated with thermal preparation, the digital interface integrates a suite of waiting mini-games, including PizzaMemory and PizzaPuzzle.",
      p3: "Developed responsively in both vertical and horizontal formats, these playful micro-interventions transform technical cooking times into an opportunity for enjoyable and coordinated entertainment."
    },
    research: {
      title: "Research",
      p1: "The preliminary investigation focused on an in-depth examination of the structural limitations and operating dynamics of existing Daint models, while also analyzing consumers' psychological responses in self-service restaurant settings. The research identified multisensoriality as the primary factor for the proper enjoyment and appreciation of the final product.",
      p2: "By examining the reactions and expectations of people interacting with this type of machine, the working group mapped the engagement of the various senses during the purchase process. The data collected confirmed the need to mitigate the perception of anticipation through dynamic visual and cognitive stimuli, validating the playful approach integrated into the display."
    },
    design: {
      title: "Design",
      p1: "PizzaMente's architecture organizes mechanical workflows within a modular and flexible structure, topped with a calibrated canopy to protect the service island and facilitate its integration into different environments.",
      p2: "The main touchpoint is an interactive screen configured to host the mini-game app and order management. The interface's visual design adopts a contemporary layout, optimized for both vertical and horizontal viewing.",
      p3: "The transition between consumption and subsequent disposal is resolved through the direct integration of a dedicated waste bin module into the chassis; this functional addition completes the service chain in the same physical location, ensuring cleanliness, hygiene, and the decorum of the surrounding space."
    },
    technical: {
      title: "Skills & Technical Insights",
      p1: "Experience design can elevate a mass-produced industrial service to high-quality and emotional standards. Building on Daint's technological and industrial foundations, PizzaMente transcends the traditional concept of a vending machine to create a self-sufficient and circular system.",
      p2: "The end result is a flexible and ergonomic solution that enhances fast food consumption and demonstrates how technology can evolve to control the entire product lifecycle, respecting the consumer's cultural identity and time."
    },
    cta: {
      title: "What's next?",
      subtitle: "Projects",
      button: "BACK TO PORTFOLIO"
    }
  },
  it: {
    title: "PIZZAMENTE",
    subtitle: "Esperienza di pizza multisensoriale automatizzata",
    meta: {
      teamLabel: "Designer",
      yearLabel: "Anno",
      yearVal: "2025",
      awardLabel: "Tipologia Progetto",
      awardVal: "Workshop Accademico & Food Station"
    },
    overview: {
      title: "Overview",
      subtitle: "Sfida progettuale",
      p1: "La riprogettazione di un sistema di automazione alimentare, in particolare se applicato a un prodotto tradizionale come la pizza, richiede di affrontare questioni critiche sia di funzionalità che di percezione. Sviluppato a partire da un brief iniziale fornito da Daint, il progetto è iniziato con l'analisi e lo studio dei distributori automatici di pizza esistenti.",
      p2: "La sfida principale è stata trasformare un'interazione storicamente percepita come fredda e puramente transazionale in un'esperienza utente di livello superiore. L'obiettivo del workshop intensivo è stato quindi rielaborare e riconfigurare le prestazioni di questi dispositivi, decostruendo lo scetticismo dei consumatori e preservando i valori culturali del cibo nel bel mezzo della costante evoluzione tecnologica."
    },
    solution: {
      title: "Solution",
      p1: "PizzaMente è un concept di micro-stazione alimentare automatizzata che trasforma il servizio di ristorazione in un'esperienza utente multisensoriale e circolare. Il sistema si distingue per il design altamente modulare, progettato per integrare tutte le fasi del consumo in un'unica macchina: dalla produzione alimentare automatizzata al consumo immediato e allo smaltimento dei rifiuti.",
      p2: "Per affrontare l'attrito psicologico legato ai tempi morti della preparazione termica, l'interfaccia digitale integra una suite di mini-giochi d'attesa, tra cui PizzaMemory e PizzaPuzzle.",
      p3: "Sviluppati in modo responsivo sia in formato verticale che orizzontale, questi micro-interventi ludici trasformano i tempi tecnici di cottura in un'opportunità di intrattenimento piacevole e coordinato."
    },
    research: {
      title: "Research",
      p1: "L'indagine preliminare si è concentrata su un esame approfondito dei limiti strutturali e delle dinamiche operative dei modelli Daint esistenti, analizzando al contempo le risposte psicologiche dei consumatori negli ambienti di ristorazione self-service. La ricerca ha identificato la multisensorialità come fattore primario per il corretto godimento e apprezzamento del prodotto finale.",
      p2: "Esaminando le reazioni e le aspettative delle persone che interagiscono con questo tipo di macchina, il gruppo di lavoro ha mappato il coinvolgimento dei vari sensi durante il processo di acquisto. I dati raccolti hanno confermato la necessità di mitigare la percezione dell'attesa attraverso stimoli visivi e cognitivi dinamici, validando l'approccio ludico integrato nel display."
    },
    design: {
      title: "Design",
      p1: "L'architettura di PizzaMente organizza i flussi di lavoro meccanici all'interno di una struttura modulare e flessibile, sormontata da una tettoia calibrata per proteggere l'isola di servizio e facilitarne l'inserimento in diversi contesti.",
      p2: "Il touchpoint principale è uno schermo interattivo configurato per ospitare l'app di mini-giochi e la gestione degli ordini. Il design visivo dell'interfaccia adotta un layout contemporaneo, ottimizzato per la visualizzazione sia verticale che orizzontale.",
      p3: "La transizione tra consumo e successivo smaltimento viene risolta attraverso l'integrazione diretta di un modulo di raccolta rifiuti dedicato all'interno dello chassis; questa aggiunta funzionale completa la catena di servizio nello stesso luogo fisico, garantendo pulizia, igiene e decoro dello spazio circostante."
    },
    technical: {
      title: "Skills & Technical Insights",
      p1: "L'experience design può elevare un servizio industriale di massa a standard qualitativi ed emozionali elevati. Basandosi sulle fondamenta tecnologiche e industriali di Daint, PizzaMente trascende il concetto tradizionale di distributore automatico per creare un sistema autosufficiente e circolare.",
      p2: "Il risultato finale è una soluzione flessibile ed ergonomica che valorizza il consumo di fast food e dimostra come la tecnologia possa evolversi per controllare l'intero ciclo di vita del prodotto, rispettando l'identità culturale e il tempo del consumatore."
    },
    cta: {
      title: "What's next?",
      subtitle: "Progetti",
      button: "TORNA AL PORTFOLIO"
    }
  }
};

export default function PizzaMente({ heroFit = 'cover' }: PizzaMenteProps) {
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

        .hero-info.pizza-hero-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-top: 25px;
          border-top: 1px solid #1a1a1a;
        }

        .info-block-full {
          width: 100%;
        }

        .info-grid-secondary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 30px;
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
          line-height: 1.6;
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

        /* DESKTOP NAVIGATOR (DOTS + PREVIEW CARD) */
        .desktop-navigator {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          margin-top: 20px;
          width: 100%;
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

        /* MOBILE IMAGE CAROUSEL */
        .mobile-carousel-container {
          display: none;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 20px 4vw;
          gap: 16px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .mobile-carousel-container::-webkit-scrollbar {
          display: none;
        }

        .mobile-project-card {
          flex: 0 0 78vw;
          max-width: 300px;
          scroll-snap-align: center;
          background: #111111;
          border: 1px solid #222222;
          text-decoration: none;
          text-align: left;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .mobile-project-card.active-card {
          border-color: #ffffff;
        }

        .mobile-card-img-box {
          width: 100%;
          height: 180px;
          overflow: hidden;
          background: #0d0d0d;
        }

        .mobile-card-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .mobile-card-info {
          padding: 16px;
        }

        .mobile-card-info h4 {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .mobile-card-info p {
          font-size: 0.78rem;
          color: #888888;
          font-family: monospace;
          margin: 0;
          text-transform: uppercase;
        }

        /* RESPONSIVE TOGGLES */
        @media (max-width: 860px) {
          .project-page {
            padding-top: 90px;
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
            height: 380px;
          }

          .editorial-row-fullbleed.row-img-left .row-text,
          .editorial-row-fullbleed.row-img-right .row-text {
            padding: 0 4vw;
          }

          .hero-media-fullbleed {
            height: 280px;
            margin-top: 24px;
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

          /* SWAP DESKTOP DOTS WITH MOBILE IMAGE CAROUSEL */
          .desktop-navigator {
            display: none !important;
          }

          .mobile-carousel-container {
            display: flex !important;
          }
        }
      `}</style>

      <div className="project-container">
        {/* HEADER & METADATA */}
        <div className="editorial-content">
          <section className="project-hero reveal-editorial reveal-from-left">
            <h1>{t.title}</h1>
            <p className="project-subtitle">{t.subtitle}</p>

            <div className="hero-info pizza-hero-info">
              <div className="info-block info-block-full">
                <span>{t.meta.teamLabel}</span>
                <p>Matteo Bazzacco, Elisabetta Bryant, Matteo Dal Zotto, Matteo Finco, Febe Galvagni, Endian Hu, Patrizia Marcolin, Emilio Masotto, Andrea Melchiori, Emma Oliver, Ana Papanaga, Gabriel Rossato, Aurora Saraceni, Matteo Scavo, Giovanni Tirapelle, Pier Paolo Vedelago, Aurora Vendramini with Vito Noto</p>
              </div>

              <div className="info-grid-secondary">
                <div className="info-block">
                  <span>{t.meta.yearLabel}</span>
                  <p>{t.meta.yearVal}</p>
                </div>

                <div className="info-block">
                  <span>{t.meta.awardLabel}</span>
                  <p>{t.meta.awardVal}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* HERO PRODUCT IMAGE (FULL BLEED) */}
        <section className="hero-media-fullbleed reveal-editorial reveal-from-left">
          <img src="https://cdn.builder.io/api/v1/file/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fef788ba34cdd4e62a1c02f2341367f29" alt="PizzaMente hero" />
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
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fab3c9bf8dd1b47599b61aed04c257a28" alt="PizzaMente solution" />
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
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F526c333013a34f329ab65c19febf8b01" alt="PizzaMente research" />
          </div>
        </section>

        <div className="editorial-content">
          <hr className="editorial-divider" />
        </div>

        {/* ROW 3: DESIGN (IMAGE LEFT FULL BLEED) */}
        <section className="editorial-row-fullbleed row-img-left">
          <div className="row-media reveal-editorial reveal-from-left">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F7e04da1151794d2291eabde22059541d" alt="PizzaMente design" />
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

        {/* COMPOSITE GRID BOX (FULL BLEED) */}
        <section className="fullbleed-composite reveal-editorial reveal-from-left">
          <div className="media-composite-box">
            <div className="composite-top">
              <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fdf97611c3532461faf7b91926a23b288" alt="PizzaMente assembly" />
            </div>
            
           
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

            {/* 1. DESKTOP NAVIGATOR: DOTS WITH HOVER PREVIEW */}
            <div className="desktop-navigator">
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
                    className={`dot-item ${proj.id === 'pizzamente' ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredProject(proj)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => window.location.href = proj.path}
                    aria-label={`Vai al progetto ${proj.title}`}
                  />
                ))}
              </div>
            </div>

            {/* 2. MOBILE CAROUSEL: TOUCH IMAGE CARDS */}
            <div className="mobile-carousel-container">
              {PROJECTS_LIST.map((proj) => (
                <a
                  key={proj.id}
                  href={proj.path}
                  className={`mobile-project-card ${proj.id === 'pizzamente' ? 'active-card' : ''}`}
                >
                  <div className="mobile-card-img-box">
                    <img src={proj.imageUrl} alt={proj.title} />
                  </div>
                  <div className="mobile-card-info">
                    <h4>{proj.title}</h4>
                    <p>{proj.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>

            <a href="/" className="cta-button">{t.cta.button}</a>
          </section>
        </div>
      </div>
    </div>
  );
}