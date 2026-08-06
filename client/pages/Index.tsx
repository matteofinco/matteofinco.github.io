import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { IntroSection } from '../components/IntroSection';
import { StickyObject } from '../components/StickyObject';
import { CircleShowcase, ProcessStep } from '../components/CircleShowcase';

const processSteps: ProcessStep[] = [
  {
    id: '01',
    phase: 'RESEARCH & USER ANALYSIS',
    title: 'Analisi Funzionale e Contestuale',
    tools: 'Desk Research / Antropometria',
    material: 'Mappe concettuali & Brief',
    year: '2026',
    role: 'Industrial Designer',
    desc: 'Studio delle interazioni fisiche e dei vincoli d\'uso. L\'obiettivo è individuare i punti critici di usabilità e definire le linee guida di progetto.',
    quote: '"Comprendere il contesto d\'uso è il primo passo per dare forma a oggetti con un valore reale."',
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '02',
    phase: 'CONCEPT & FORM STUDIES',
    title: 'Esplorazione Formale',
    tools: 'Schizzi Analogici / Mockup Rapidi',
    material: 'Cartone, Polistirolo & Argilla',
    year: '2026',
    role: 'Product Designer',
    desc: 'Definizione dei volumi primari e test di presa ergonomica attraverso modelli di studio in scala reale.',
    quote: '"Lo schizzo rapido permette di esplorare decine di alternative prima di passare al modello tridimensionale."',
    img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '03',
    phase: 'CAD & PARAMETRIC MODELING',
    title: 'Sviluppo Superfici e Volumi',
    tools: 'Rhino 7 / Fusion 360',
    material: 'Superfici NURBS & Mesh',
    year: '2026',
    role: 'CAD Modeler',
    desc: 'Modellazione matematica ad alta precisione. Gestione dei raccordi, degli spessori di parete e degli incastri meccanici tra i componenti.',
    quote: '"La precisione parametrica trasforma la visione concettuale in una geometria pronta alla produzione."',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '04',
    phase: 'RAPID PROTOTYPING',
    title: 'Stampa 3D e Validazione',
    tools: 'Bambu Lab P2S / Slicing',
    material: 'Filamento PLA / Polimeri Riciclati',
    year: '2026',
    role: 'Prototipazione Fisica',
    desc: 'Fabbricazione digitale e test tolleranze. Ogni prototipo stampato viene verificato sul campo per affinare il fit meccanico e la resa estetica.',
    quote: '"La prototipazione rapida è il ponte fondamentale tra il modello digitale e il prodotto fisico."',
    img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '05',
    phase: 'PRODUCTION & DETAILS',
    title: 'Ingegnerizzazione Finale',
    tools: 'Design for Assembly (DFA) / CMF',
    material: 'Documentazione Tecnica',
    year: '2026',
    role: 'System Designer',
    desc: 'Ottimizzazione del prodotto per la disassemblabilità e la sostenibilità dei materiali, riducendo al minimo colle o giunzioni irreversibili.',
    quote: '"Un buon progetto di design pensa alla fine del ciclo di vita dell\'oggetto fin dal primo giorno."',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80'
  }
];

const translations = {
  it: {
    sec1Title: "Matteo Finco",
    sec1Sub: "Student in Industrial & Product Design presso l'Università Iuav di Venezia.",
    sec1P: "Mi occupo della progettazione di prodotti fisici, esplorando l'equilibrio tra usabilità quotidiana, modellazione parametrica e tecniche di prototipazione rapida.",
    sec2P1: "Ogni progetto parte dall'analisi dei bisogni dell'utente per tradursi in geometrie pulite, funzionali e attente alla sostenibilità dei materiali.",
    sec2P2: "Dallo schizzo iniziale al prototipo stampato in 3D, controllo ogni fase del processo per verificare forme, usabilità e dettagli costruttivi."
  },
  en: {
    sec1Title: "Matteo Finco",
    sec1Sub: "Industrial & Product Design Student at Iuav University of Venice.",
    sec1P: "Focused on physical product design, balancing everyday usability, parametric modeling, and rapid prototyping techniques.",
    sec2P1: "Every project starts from user needs analysis, translating into clean, functional geometries mindful of material sustainability.",
    sec2P2: "From the initial sketch to the 3D printed prototype, I manage every phase to test shapes, usability, and technical details."
  }
};

export default function Index() {
  const [lang, setLang] = useState<'it' | 'en'>('it');
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    // Observer per le immagini editoriali
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

    // Observer per sincronizzare lo scroll a destra con il cerchio sticky a sinistra
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
      { threshold: 0.45 }
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
        
        /* Uso di overflow-x: clip per non rompere position: sticky */
        html, body {
          background-color: #070707;
          color: #e5e5e5;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.7;
          overflow-x: clip;
        }

        .editorial-portfolio { background-color: #070707; color: #e5e5e5; min-height: 100vh; overflow-x: clip; }

        /* HERO ANIMATIONS */
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
          padding: 160px 6vw;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }
        .editorial-text h2 { font-size: clamp(2.4rem, 4.5vw, 4.2rem); font-weight: 800; line-height: 1.1; margin-bottom: 25px; color: #fff; }
        .editorial-text h3.sub-grey { font-size: clamp(1.4rem, 2.5vw, 2.2rem); font-weight: 500; color: #888; margin-bottom: 30px; }
        .editorial-text p { color: #aaa; font-size: 1.15rem; line-height: 1.8; max-width: 540px; }
        .editorial-media-box { position: relative; width: 100%; height: 560px; overflow: hidden; background: #111; }
        .editorial-media-box img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(30%); transition: filter 0.8s ease; }
        .editorial-media-box:hover img { filter: grayscale(0%); }

        .reveal-editorial {
          opacity: 0; filter: blur(12px);
          transition: opacity 1.4s cubic-bezier(.22,.61,.36,1), filter 1.4s cubic-bezier(.22,.61,.36,1), transform 1.4s cubic-bezier(.22,.61,.36,1);
        }
        .reveal-editorial.reveal-from-right { transform: scale(1.04) translateX(50px); }
        .reveal-editorial.reveal-from-left { transform: scale(1.04) translateX(-50px); }
        .reveal-editorial.reveal-active { opacity: 1; filter: blur(0); transform: scale(1) translateX(0); }

        /* STICKY FEATURE */
        .sticky-feature-section { position: relative; width: 100%; min-height: 240vh; background-color: #050505; border-y: 1px solid #181818; }
        .sticky-media-container { position: sticky; top: 0; height: 100vh; width: 100%; display: flex; align-items: center; justify-content: center; z-index: 1; }
        .sticky-media-box { position: relative; width: 75vw; max-width: 1100px; height: 70vh; overflow: hidden; }
        .sticky-media-box img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.7) contrast(1.1); }
        .sticky-technical-tag { position: absolute; bottom: 30px; left: 30px; font-family: monospace; font-size: 0.8rem; color: rgba(255,255,255,0.6); background: rgba(0,0,0,0.5); padding: 6px 12px; backdrop-filter: blur(4px); }
        .scrolling-overlay-container { position: relative; z-index: 2; margin-top: -100vh; padding-bottom: 20vh; pointer-events: none; }
        .scrolling-card { min-height: 80vh; display: flex; flex-direction: column; justify-content: center; max-width: 520px; margin: 0 auto 10vh 10vw; background: rgba(12, 12, 12, 0.85); backdrop-filter: blur(16px); padding: 50px 40px; border-left: 2px solid #fff; pointer-events: auto; }
        .scrolling-card .card-step { font-family: monospace; font-size: 0.85rem; color: #777; margin-bottom: 15px; }
        .scrolling-card h3 { font-size: 2rem; font-weight: 700; color: #fff; margin-bottom: 20px; }
        .scrolling-card p { color: #aaa; font-size: 1.05rem; }

        /* CIRCLE SHOWCASE - STICKY LAYOUT CORRETTO */
        .process-showcase-wrapper {
          max-width: 1500px;
          margin: 0 auto;
          padding: 100px 6vw;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .process-sticky-left {
          position: sticky;
          top: 80px;
          height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .circle-technical-frame { position: relative; width: 100%; max-width: 480px; height: 480px; }
        .circle-hud-svg { width: 100%; height: 100%; overflow: visible; }

        .circle-img-layer { opacity: 0; transform: scale(1.05); transition: opacity 0.8s ease, transform 0.8s ease; }
        .circle-img-layer.active-layer { opacity: 1; transform: scale(1); }

        @keyframes pulseRing { 0% { r: 8px; opacity: 1; } 100% { r: 18px; opacity: 0; } }
        .node-pulse { animation: pulseRing 1.8s ease-out infinite; }

        .process-scroll-right { padding-top: 4vh; padding-bottom: 15vh; }
        .process-card { min-height: 75vh; display: flex; flex-direction: column; justify-content: center; padding: 40px 0; opacity: 0.2; filter: blur(4px); transition: opacity 0.6s ease, filter 0.6s ease; border-bottom: 1px solid #141414; }
        .process-card.active-step { opacity: 1; filter: blur(0px); }
        .process-card .phase-number { font-family: monospace; font-size: 0.9rem; color: #666; margin-bottom: 10px; }
        .process-card .phase-title { font-size: 2.4rem; font-weight: 800; color: #fff; margin-bottom: 25px; }
        .process-meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px; padding: 20px 0; border-y: 1px solid #1a1a1a; }
        .meta-item .meta-label { font-family: monospace; font-size: 0.75rem; color: #555; text-transform: uppercase; margin-bottom: 4px; }
        .meta-item .meta-value { font-size: 0.95rem; color: #ccc; font-weight: 500; }
        .process-card .phase-desc { color: #a0a0a0; font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px; }
        .process-card blockquote { font-style: italic; color: #888; border-left: 2px solid #555; padding-left: 20px; font-size: 1.05rem; }

        footer { background-color: #040404; padding: 80px 6vw 40px; text-align: center; border-top: 1px solid #121212; }
        footer p { color: #444; font-size: 0.85rem; font-family: monospace; }

        @media (max-width: 1024px) {
          .editorial-section, .process-showcase-wrapper { grid-template-columns: 1fr; gap: 60px; }
          .process-sticky-left { position: relative; top: 0; height: 420px; }
          .scrolling-card { margin: 0 5vw 10vh 5vw; }
        }
      `}</style>

      <Header lang={lang} setLang={setLang} />
      <Hero />
      <IntroSection t={translations[lang]} />
      <StickyObject />
      <CircleShowcase steps={processSteps} activeStep={activeStep} />

      <footer>
        <p>© 2026 MATTEO FINCO // INDUSTRIAL DESIGN PORTFOLIO</p>
      </footer>
    </div>
  );
}