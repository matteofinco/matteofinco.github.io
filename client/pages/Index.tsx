import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { IntroSection } from '../components/IntroSection';
import { StickyObject } from '../components/StickyObject';
import { CircleShowcase, ProjectStep } from '../components/CircleShowcase';

const projectList: ProjectStep[] = [
  {
    id: '01',
    slug: 'snake',
    title: 'Snake',
    subtitle: 'Modulo di Allenamento per Hockey',
    category: 'INDUSTRIAL & SPORT DESIGN',
    tools: 'Rhino 7 / Fusion 360 / Stampa 3D',
    material: 'Polimeri Tecnici & Sensori',
    year: '2026',
    desc: 'Sistema modulare interattivo sviluppato per l\'allenamento e il miglioramento del controllo del disco nell\'hockey su ghiaccio. Combina resistenza meccanica e flessibilità configurabile.',
    link: '/snake',
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: '02',
    slug: 'archivia',
    title: 'Archivia',
    subtitle: 'Sistema Organizzativo Modulare',
    category: 'PRODUCT & SYSTEM DESIGN',
    tools: 'Parametric CAD / Laser Cutting',
    material: 'Legno Curvato & Alluminio',
    year: '2026',
    desc: 'Un\'architettura di archiviazione minimale progettata per ottimizzare gli spazi di lavoro contemporanei, combinando modularità strutturale e finiture ad alta resa sensoriale.',
    link: '/archivia',
    img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: '03',
    slug: 'nando',
    title: 'Nando',
    subtitle: 'Soluzione per la Mobilità Urbana',
    category: 'PRODUCT & MAKER EXPERIENCE',
    tools: 'Prototipazione Fisica / Bambu Lab',
    material: 'PLA Riciclato & Inserti Metallici',
    year: '2026',
    desc: 'Progetto incentrato sull\'usabilità quotidiana e la trasportabilità. Nando reinterpreta gli accessori da viaggio attraverso un linguaggio formale essenziale e componenti facilmente sostituibili.',
    link: '/nando',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: '04',
    slug: 'pizzamente',
    title: 'Pizzamente',
    subtitle: 'Packaging Esperienziale e Sostenibile',
    category: 'PACKAGING & CMF DESIGN',
    tools: 'Figma / Fustellatura Digitale',
    material: 'Cartone Kraft Riciclato & Goffratura',
    year: '2026',
    desc: 'Riflessione sulla sostenibilità e la tattilità nel settore del food packaging. Il contenitore elimina l\'uso di plastiche monouso offrendo una nuova ritualità di apertura e consumo.',
    link: '/pizzamente',
    img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: '05',
    slug: 'wafflemaker',
    title: 'Waffle Maker',
    subtitle: 'Elettrodomestico Essenziale',
    category: 'EQUIPMENT DESIGN',
    tools: 'Surface Modeling / Rendering CMF',
    material: 'Alluminio Spazzolato & Bakelite',
    year: '2025',
    desc: 'Esplorazione formale ed ergonomica applicata a piccoli elettrodomestici. Scomposizione dei volumi tradizionali per facilitare pulizia, ingombro verticale e manutenzione.',
    link: '/wafflemaker',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: '06',
    slug: 'ttable',
    title: 'TTable',
    subtitle: 'Tavolo Parametrico con Giunzioni a Secco',
    category: 'FURNITURE DESIGN',
    tools: 'Grasshopper / CNC Milling',
    material: 'Multistrato di Betulla',
    year: '2025',
    desc: 'Elemento d\'arredo sviluppato attraverso l\'algoritmo parametrico. I componenti ad incastro meccanico eliminano completamente l\'uso di colle o ferramenta metallica.',
    link: '/ttable',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: '07',
    slug: 'prop',
    title: 'Prop Collection',
    subtitle: 'Fabbricazione Digitale & Accessori di Scena',
    category: 'DIGITAL FABRICATION & PROPS',
    tools: 'LightBurn / Post-Processing Manuale',
    material: 'PETG, Vernici Acriliche & Resine',
    year: '2025',
    desc: 'Raccolta di prop fisici e componenti scenografici realizzati combinando modellazione 3D avanzata, taglio laser e finiture artigianali ad alto impatto visivo.',
    link: '/prop',
    img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=80'
  }
];

const translations = {
  it: {
    sec1Title: "Matteo Finco",
    sec1Sub: "Product Designer & Maker basato in Veneto, studente all'Università Iuav di Venezia.",
    sec1P: "Progetto oggetti fisici e sistemi interattivi unendo il rigore della modellazione CAD alla concretezza della fabbricazione digitale. Ogni concept è guidato dall'analisi dei bisogni reali e dal controllo diretto dei materiali.",
    sec2P1: "La cultura del 'Making' mi permette di testare istantaneamente le idee: dal primo modello concettuale fino alla prototipazione funzionale in scala 1:1.",
    sec2P2: "Lavoro con un approccio incentrato sulla sostenibilità dei componenti, sulla facilità di disassemblaggio e sulla chiarezza dei volumi."
  },
  en: {
    sec1Title: "Matteo Finco",
    sec1Sub: "Product Designer & Maker based in Veneto, studying at Iuav University of Venice.",
    sec1P: "I design physical products and interactive systems combining CAD precision with hands-on digital fabrication. Every concept is driven by user needs and direct material control.",
    sec2P1: "The 'Maker' mindset enables immediate prototyping: from initial mockups to 1:1 scale functional validation.",
    sec2P2: "My workflow focuses on component sustainability, ease of disassembly, and formal clarity."
  }
};

export default function Index() {
  const [lang, setLang] = useState<'it' | 'en'>('it');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [showNavName, setShowNavName] = useState<boolean>(false);

  useEffect(() => {
    // Observer per attivare la visibilità del nome nell'Header
    const heroEl = document.getElementById('hero-section');
    if (heroEl) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          setShowNavName(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      heroObserver.observe(heroEl);
    }

    // Observer per attivare le dissolvenze editoriali
    const revealElements = document.querySelectorAll('.reveal-editorial');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.25 }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    // Observer per sincronizzare il cerchio gigante sticky con la scheda di testo magnetica
    const processCards = document.querySelectorAll('.process-card');
    const processObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step'));
            setActiveStep(index);
          }
        });
      },
      { threshold: 0.55 }
    );
    processCards.forEach((card) => processObserver.observe(card));

    return () => {
      revealObserver.disconnect();
      processObserver.disconnect();
    };
  }, []);

  return (
    <div className="editorial-portfolio">
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        
        /* SCROLL SNAP MANDATORIO SU HTML / BODY */
        html {
          scroll-behavior: smooth;
          scroll-snap-type: y mandatory;
        }

        body {
          background-color: #070707;
          color: #e5e5e5;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.8;
          overflow-x: clip;
        }

        .editorial-portfolio { background-color: #070707; color: #e5e5e5; min-height: 100vh; overflow-x: clip; }

        .snap-center {
          scroll-snap-align: center;
          scroll-snap-stop: always;
        }

        /* HERO LAYER ANIMATIONS */
        .layer-blueprint { fill: url(#blueprintPattern); animation: layerMove1 22s ease-in-out infinite alternate; }
        .layer-sketches { animation: layerMove2 18s ease-in-out infinite alternate, layerFade1 14s ease-in-out infinite alternate; }
        .layer-photo { animation: layerMove3 24s ease-in-out infinite alternate, layerFade2 16s ease-in-out infinite alternate; }

        @keyframes layerMove1 { 0% { transform: scale(1) translate(0, 0); } 100% { transform: scale(1.12) translate(-30px, -15px); } }
        @keyframes layerMove2 { 0% { transform: scale(1.05) translate(20px, -20px); } 100% { transform: scale(1.2) translate(-20px, 20px); } }
        @keyframes layerMove3 { 0% { transform: scale(1) translate(-15px, 15px); } 100% { transform: scale(1.1) translate(25px, -25px); } }
        @keyframes layerFade1 { 0%, 100% { opacity: 0.25; } 50% { opacity: 0.75; } }
        @keyframes layerFade2 { 0%, 100% { opacity: 0.7; } 50% { opacity: 0.2; } }

        /* INTRO SECTIONS */
        .editorial-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 6vw;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
          height: 100vh;
        }
        .editorial-text h2 { font-size: clamp(2.4rem, 4.5vw, 4.2rem); font-weight: 800; line-height: 1.15; margin-bottom: 25px; color: #fff; }
        .editorial-text h3.sub-grey { font-size: clamp(1.3rem, 2.2vw, 2rem); font-weight: 500; color: #888; margin-bottom: 30px; line-height: 1.4; }
        .editorial-text p { color: #aaa; font-size: 1.15rem; line-height: 1.85; max-width: 560px; }
        .editorial-media-box { position: relative; width: 100%; height: 580px; overflow: hidden; background: #111; }
        .editorial-media-box img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(25%); transition: filter 0.8s ease; }
        .editorial-media-box:hover img { filter: grayscale(0%); }

        .reveal-editorial {
          opacity: 0; filter: blur(12px);
          transition: opacity 1.2s cubic-bezier(.22,.61,.36,1), filter 1.2s cubic-bezier(.22,.61,.36,1), transform 1.2s cubic-bezier(.22,.61,.36,1);
        }
        .reveal-editorial.reveal-from-right { transform: scale(1.04) translateX(40px); }
        .reveal-editorial.reveal-from-left { transform: scale(1.04) translateX(-40px); }
        .reveal-editorial.reveal-active { opacity: 1; filter: blur(0); transform: scale(1) translateX(0); }

        /* CIRCLE SHOWCASE & STICKY CARDS MAGNETICI */
        .process-showcase-wrapper {
          max-width: 1650px;
          margin: 0 auto;
          padding: 0 6vw;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: start;
        }

        .process-sticky-left {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .circle-technical-frame {
          position: relative;
          width: 100%;
          max-width: 640px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .circle-hud-svg { width: 100%; height: auto; max-height: 580px; overflow: visible; }

        /* REGOLE ANTI-GLITCH SU IMMAGINI SVG */
        .circle-images-container { isolation: isolate; }
        .circle-img-layer {
          opacity: 0;
          transform: scale(1.04) translateZ(0);
          backface-visibility: hidden;
          will-change: opacity, transform;
          transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .circle-img-layer.active-layer { opacity: 1; transform: scale(1) translateZ(0); }

        @keyframes pulseRing { 0% { r: 9px; opacity: 1; } 100% { r: 24px; opacity: 0; } }
        .node-pulse { animation: pulseRing 1.8s ease-out infinite; }

        .project-title-under-circle {
          margin-top: 15px;
          text-align: center;
          width: 100%;
        }
        .project-index-tag { font-family: monospace; font-size: 0.82rem; color: #777; letter-spacing: 2px; display: block; margin-bottom: 4px; }
        .project-main-name { font-size: 2.5rem; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; line-height: 1.1; }
        .project-sub-name { font-size: 1.05rem; color: #aaa; margin-top: 4px; font-weight: 500; }

        .process-scroll-right { padding: 0; }

        /* EFFETTO STICKY / CALAMITA PER OGNI SCHEDA PROGETTO (CENTRO SCHERMO) */
        .process-card.snap-card {
          height: 100vh;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          scroll-snap-align: center;
          scroll-snap-stop: always;
          opacity: 0.15;
          filter: blur(6px);
          transition: opacity 0.6s ease, filter 0.6s ease;
          border-bottom: 1px solid #141414;
        }
        .process-card.snap-card.active-step { opacity: 1; filter: blur(0px); }

        .card-content-wrapper { padding: 20px 0; }
        .process-card .phase-number { font-family: monospace; font-size: 0.85rem; color: #777; margin-bottom: 8px; }
        .process-card .phase-title { font-size: 2.8rem; font-weight: 800; color: #fff; line-height: 1.15; }
        .process-card .phase-subtitle { font-size: 1.25rem; color: #888; font-weight: 500; margin-bottom: 25px; }
        .process-meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px; padding: 20px 0; border-y: 1px solid #1c1c1c; }
        .meta-item .meta-label { font-family: monospace; font-size: 0.72rem; color: #555; text-transform: uppercase; margin-bottom: 4px; }
        .meta-item .meta-value { font-size: 0.95rem; color: #ccc; font-weight: 500; }
        .process-card .phase-desc { color: #aaa; font-size: 1.1rem; line-height: 1.85; margin-bottom: 35px; }

        .project-detail-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          align-self: start;
          padding: 16px 32px;
          background: #ffffff;
          color: #070707;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .project-detail-btn:hover {
          background: #e0e0e0;
          transform: translateX(6px);
        }

        /* FOOTER REVISIONATO CON CARENATURA E SPAZIATURA PUNTO DI DOMANDA */
        .whats-next-footer {
          background-color: #040404;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 6vw;
          border-top: 1px solid #141414;
          text-align: center;
          position: relative;
        }
        .whats-next-footer h2 {
          font-size: clamp(3.2rem, 7.5vw, 6.5rem);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -2px;
          margin-bottom: 20px;
          line-height: 1;
        }
        
        /* SPAN DEDICATO PER IL PUNTO DI DOMANDA CON MEZZO SPAZIO E CARENATURA */
        .question-mark-styled {
          display: inline-block;
          margin-left: 0.25em;
          letter-spacing: 0.08em;
          color: #ffffff;
        }

        .whats-next-footer p.sub-lead {
          font-size: 1.25rem;
          color: #888;
          max-width: 620px;
          margin: 0 auto 50px;
          line-height: 1.7;
        }
        .footer-actions {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 80px;
        }
        .btn-footer-link {
          padding: 16px 38px;
          background: #ffffff;
          color: #070707;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          border: 1px solid #ffffff;
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }
        .btn-footer-link:hover {
          background: #dcdcdc;
          transform: translateY(-2px);
        }
        .btn-footer-outline {
          padding: 16px 38px;
          background: transparent;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          border: 1px solid #ffffff;
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }
        .btn-footer-outline:hover {
          background: #ffffff;
          color: #070707;
          transform: translateY(-2px);
        }

        .footer-bottom-info {
          position: absolute;
          bottom: 40px;
          left: 6vw;
          right: 6vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #141414;
          padding-top: 25px;
          font-family: monospace;
          font-size: 0.82rem;
          color: #666;
        }
        .footer-contacts-list { display: flex; gap: 30px; }
        .footer-contacts-list a { color: #888; text-decoration: none; transition: color 0.3s; }
        .footer-contacts-list a:hover { color: #fff; }

        @media (max-width: 1024px) {
          .editorial-section, .process-showcase-wrapper { grid-template-columns: 1fr; gap: 60px; height: auto; }
          .process-sticky-left { position: relative; top: 0; height: 500px; }
          .process-card.snap-card { height: auto; min-height: 80vh; }
          .footer-bottom-info { flex-direction: column; gap: 15px; text-align: center; position: relative; bottom: 0; margin-top: 40px; }
        }
      `}</style>

      {/* HEADER CON PULSANTE PER SCROLL TO TOP */}
      <Header lang={lang} setLang={setLang} showName={showNavName} />
      
      {/* HERO GIGANTE */}
      <Hero />

      {/* SEZIONE INTRO SNAP MAGNETICA */}
      <div className="snap-center">
        <IntroSection t={translations[lang]} />
      </div>

      {/* SEZIONE STICKY OGGETTO MAGNETICA */}
      <div className="snap-center">
        <StickyObject />
      </div>

      {/* SEZIONE CERCHIO GIGANTE CON CARD TESTO MAGNETICHE IN ALINEAMENTO CENTRALE */}
      <CircleShowcase steps={projectList} activeStep={activeStep} />

      {/* FOOTER WHAT'S NEXT CON PUNTO DI DOMANDA FORMATTATO E CALIBRATO */}
      <footer className="whats-next-footer snap-center">
        <h2>
          WHAT&apos;S NEXT
          <span className="question-mark-styled">?</span>
        </h2>
        
        <p className="sub-lead">
          Sempre aperto a nuove collaborazioni, progetti di design industriale e sperimentazioni di fabbricazione digitale.
        </p>

        <div className="footer-actions">
          <a href="/about" className="btn-footer-link">
            ABOUT ME
          </a>
          <a href="/cv" className="btn-footer-outline">
            CURRICULUM VITAE
          </a>
        </div>

        <div className="footer-bottom-info">
          <div>2026 MATTEO FINCO // PRODUCT DESIGN &amp; MAKER</div>
          <div className="footer-contacts-list">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/about">About</a>
            <a href="/cv">CV</a>
          </div>
        </div>
      </footer>
    </div>
  );
}