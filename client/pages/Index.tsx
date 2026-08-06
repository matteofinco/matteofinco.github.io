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
    link: 'https://matteofinco.vercel.app/snake',
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80'
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
    link: 'https://matteofinco.vercel.app/archivia',
    img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80'
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
    link: 'https://matteofinco.vercel.app/nando',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80'
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
    link: 'https://matteofinco.vercel.app/pizzamente',
    img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80'
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
    desc: 'Esplorazione formale ed ergonomica applicata a un piccoli elettrodomestici. Scomposizione dei volumi tradizionali per facilitare pulizia, ingombro verticale e manutenzione.',
    link: 'https://matteofinco.vercel.app/wafflemaker',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80'
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
    link: 'https://matteofinco.vercel.app/ttable',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
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
    link: 'https://matteofinco.vercel.app/prop',
    img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80'
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
        
        html, body {
          background-color: #070707;
          color: #e5e5e5;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.8;
          overflow-x: clip;
        }

        .editorial-portfolio { background-color: #070707; color: #e5e5e5; min-height: 100vh; overflow-x: clip; }

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
          padding: 160px 6vw;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }
        .editorial-text h2 { font-size: clamp(2.4rem, 4.5vw, 4.2rem); font-weight: 800; line-height: 1.15; margin-bottom: 25px; color: #fff; }
        .editorial-text h3.sub-grey { font-size: clamp(1.3rem, 2.2vw, 2rem); font-weight: 500; color: #888; margin-bottom: 30px; line-height: 1.4; }
        .editorial-text p { color: #aaa; font-size: 1.15rem; line-height: 1.85; max-width: 560px; }
        .editorial-media-box { position: relative; width: 100%; height: 580px; overflow: hidden; background: #111; }
        .editorial-media-box img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(25%); transition: filter 0.8s ease; }
        .editorial-media-box:hover img { filter: grayscale(0%); }

        .reveal-editorial {
          opacity: 0; filter: blur(12px);
          transition: opacity 1.4s cubic-bezier(.22,.61,.36,1), filter 1.4s cubic-bezier(.22,.61,.36,1), transform 1.4s cubic-bezier(.22,.61,.36,1);
        }
        .reveal-editorial.reveal-from-right { transform: scale(1.04) translateX(50px); }
        .reveal-editorial.reveal-from-left { transform: scale(1.04) translateX(-50px); }
        .reveal-editorial.reveal-active { opacity: 1; filter: blur(0); transform: scale(1) translateX(0); }

        /* STICKY FEATURE (IMMAGINE AL VIVO A TUTTO SCHERMO) */
        .sticky-feature-section { position: relative; width: 100vw; min-height: 240vh; background-color: #050505; border-y: 1px solid #181818; }
        .sticky-media-container { position: sticky; top: 0; height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center; z-index: 1; }
        .sticky-media-box { position: relative; width: 100vw; height: 100vh; overflow: hidden; }
        .sticky-media-box img { width: 100vw; height: 100vh; object-fit: cover; filter: brightness(0.65) contrast(1.1); }
        .sticky-technical-tag { position: absolute; bottom: 40px; left: 6vw; font-family: monospace; font-size: 0.8rem; color: rgba(255,255,255,0.7); background: rgba(0,0,0,0.6); padding: 8px 16px; backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,0.1); }
        
        .scrolling-overlay-container { position: relative; z-index: 2; margin-top: -100vh; padding-bottom: 20vh; pointer-events: none; }
        .scrolling-card {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 460px;
          margin-left: auto;
          margin-right: 6vw;
          margin-bottom: 15vh;
          background: rgba(10, 10, 10, 0.82);
          backdrop-filter: blur(20px);
          padding: 45px 38px;
          border-left: 2px solid #ffffff;
          border-y: 1px solid rgba(255,255,255,0.05);
          pointer-events: auto;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .scrolling-card .card-step { font-family: monospace; font-size: 0.8rem; color: #888; margin-bottom: 12px; letter-spacing: 1px; }
        .scrolling-card h3 { font-size: 1.8rem; font-weight: 700; color: #fff; margin-bottom: 16px; line-height: 1.25; }
        .scrolling-card p { color: #bbb; font-size: 1.02rem; line-height: 1.75; }

        /* CIRCLE SHOWCASE (INGRANDITO +20%) */
        .process-showcase-wrapper {
          max-width: 1550px;
          margin: 0 auto;
          padding: 120px 6vw;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 70px;
          align-items: start;
        }

        .process-sticky-left {
          position: sticky;
          top: 60px;
          height: calc(100vh - 100px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .circle-technical-frame { position: relative; width: 100%; max-width: 580px; height: 580px; display: flex; flex-direction: column; align-items: center; }
        .circle-hud-svg { width: 100%; height: 100%; overflow: visible; }

        .circle-img-layer { opacity: 0; transform: scale(1.05); transition: opacity 0.8s ease, transform 0.8s ease; }
        .circle-img-layer.active-layer { opacity: 1; transform: scale(1); }

        @keyframes pulseRing { 0% { r: 8px; opacity: 1; } 100% { r: 20px; opacity: 0; } }
        .node-pulse { animation: pulseRing 1.8s ease-out infinite; }

        .project-title-under-circle {
          margin-top: 15px;
          text-align: center;
          width: 100%;
        }
        .project-index-tag { font-family: monospace; font-size: 0.78rem; color: #777; letter-spacing: 2px; display: block; margin-bottom: 4px; }
        .project-main-name { font-size: 2rem; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; }
        .project-sub-name { font-size: 0.95rem; color: #999; }

        .process-scroll-right { padding-top: 2vh; padding-bottom: 15vh; }
        .process-card { min-height: 80vh; display: flex; flex-direction: column; justify-content: center; padding: 40px 0; opacity: 0.2; filter: blur(4px); transition: opacity 0.6s ease, filter 0.6s ease; border-bottom: 1px solid #161616; }
        .process-card.active-step { opacity: 1; filter: blur(0px); }
        .process-card .phase-number { font-family: monospace; font-size: 0.85rem; color: #777; margin-bottom: 8px; }
        .process-card .phase-title { font-size: 2.6rem; font-weight: 800; color: #fff; line-height: 1.15; }
        .process-card .phase-subtitle { font-size: 1.2rem; color: #888; font-weight: 500; margin-bottom: 25px; }
        .process-meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px; padding: 18px 0; border-y: 1px solid #1c1c1c; }
        .meta-item .meta-label { font-family: monospace; font-size: 0.72rem; color: #555; text-transform: uppercase; margin-bottom: 4px; }
        .meta-item .meta-value { font-size: 0.95rem; color: #ccc; font-weight: 500; }
        .process-card .phase-desc { color: #aaa; font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px; }

        .project-detail-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          align-self: start;
          padding: 14px 28px;
          background: #ffffff;
          color: #070707;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .project-detail-btn:hover {
          background: #e0e0e0;
          transform: translateX(6px);
        }

        /* FOOTER & WHAT'S NEXT */
        .whats-next-footer {
          background-color: #040404;
          padding: 140px 6vw 60px;
          border-top: 1px solid #141414;
          text-align: center;
        }
        .whats-next-footer h2 {
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -2px;
          margin-bottom: 15px;
        }
        .whats-next-footer p.sub-lead {
          font-size: 1.25rem;
          color: #888;
          max-width: 600px;
          margin: 0 auto 50px;
        }
        .footer-actions {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 80px;
        }
        .btn-primary-about {
          padding: 16px 36px;
          background: #ffffff;
          color: #000;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: background 0.3s ease;
        }
        .btn-primary-about:hover { background: #dcdcdc; }
        .btn-secondary-contact {
          padding: 16px 36px;
          border: 1px solid rgba(255,255,255,0.25);
          color: #ffffff;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: border-color 0.3s ease;
        }
        .btn-secondary-contact:hover { border-color: #ffffff; }

        .footer-bottom-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #121212;
          padding-top: 40px;
          font-family: monospace;
          font-size: 0.82rem;
          color: #555;
        }
        .footer-contacts-list { display: flex; gap: 30px; }
        .footer-contacts-list a { color: #888; text-decoration: none; transition: color 0.3s; }
        .footer-contacts-list a:hover { color: #fff; }

        @media (max-width: 1024px) {
          .editorial-section, .process-showcase-wrapper { grid-template-columns: 1fr; gap: 60px; }
          .process-sticky-left { position: relative; top: 0; height: 500px; }
          .scrolling-card { margin: 0 5vw 10vh 5vw; max-width: 100%; }
          .footer-bottom-info { flex-direction: column; gap: 20px; text-align: center; }
        }
      `}</style>

      <Header lang={lang} setLang={setLang} />
      <Hero />
      <IntroSection t={translations[lang]} />
      <StickyObject />
      <CircleShowcase steps={projectList} activeStep={activeStep} />

      {/* FOOTER - WHAT'S NEXT & CONTATTI */}
      <footer className="whats-next-footer">
        <h2>WHAT'S NEXT</h2>
        <p className="sub-lead">
          Sempre aperto a nuove collaborazioni, progetti di design industriale e sperimentazioni di fabbricazione digitale.
        </p>

        <div className="footer-actions">
          <a href="https://matteofinco.vercel.app/about" className="btn-primary-about">
            ABOUT ME &amp; CV
          </a>
          <a href="mailto:matteofinco.design@gmail.com" className="btn-secondary-contact">
            MANDA UNA MAIL
          </a>
        </div>

        <div className="footer-bottom-info">
          <div>© 2026 MATTEO FINCO // PRODUCT DESIGN &amp; MAKER</div>
          <div className="footer-contacts-list">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://matteofinco.vercel.app/about">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}