import React, { useState, useEffect } from 'react';

const processSteps = [
  {
    id: '01',
    phase: 'RESEARCH & ANALYSIS',
    title: 'Indagine Formale e Sociale',
    tools: 'Desk Research / User Interviews',
    material: 'Context & Behavioral Mapping',
    year: '2026',
    role: 'Product Strategy & Concept',
    desc: 'L\'osservazione dei comportamenti quotidiani e la decompressione delle necessità primarie guida la prima definizione dell\'architettura dell\'oggetto.',
    quote: '"Comprendere il contesto d\'uso significa anticipare la relazione affettiva tra utente e prodotto."',
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '02',
    phase: 'CONCEPT & SKETCHING',
    title: 'Esplorazione Ideativa',
    tools: 'Analog Sketching / Form Studies',
    material: 'Paper & Cardboard Mockups',
    year: '2026',
    role: 'Industrial Design',
    desc: 'Tracciare le linee guida volumetriche attraverso lo schizzo rapido e la modellazione di studio per testare pesi, ingombri ed ergonomia.',
    quote: '"La linea sulla carta definisce il confine tra la funzione pura e la carica espressiva del volume."',
    img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '03',
    phase: 'CAD & SURFACING',
    title: 'Modellazione Parametrica',
    tools: 'NURBS / Solid Modeling / FEA',
    material: 'Digital Surfaces & Tolerance Check',
    year: '2026',
    role: 'Technical & Surface Design',
    desc: 'Traduzione dell\'idea informale in geometrie matematiche complesse, ottimizzando raggi di raccordo, incastri e spessori di parete.',
    quote: '"Il controllo millimetrico delle superfici garantisce la continuità della luce sul pezzo finale."',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '04',
    phase: 'PROTOTYPING & TESTING',
    title: 'Validazione Materiale',
    tools: 'Additive Mfg / CNC / Laser Cutting',
    material: 'PLA / Recycled Polymers / Metal',
    year: '2026',
    role: 'Physical Fabrication',
    desc: 'Fabbricazione digitale di prototipi funzionali in scala 1:1 per valutare tolleranze accoppiamenti, resistenza meccanica e usabilità.',
    quote: '"Il prototipo fisico è l\'unico giudice infallibile della bontà di un\'intuizione CAD."',
    img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '05',
    phase: 'FINAL SYSTEM & DETAILS',
    title: 'Integrazione e Finitura',
    tools: 'Design for Assembly (DFA)',
    material: 'Tactile Finishes & CMF',
    year: '2026',
    role: 'System Design',
    desc: 'Ingegnerizzazione dei componenti finali, definizione delle texture superficiali e semplificazione delle fasi di montaggio e riciclo.',
    quote: '"Un oggetto ben progettato si smonta con la stessa eleganza con cui è stato assemblato."',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80'
  }
];

const translations = {
  it: {
    sec1Title: "Progettare un prodotto è una sequenza di scelte.",
    sec1Sub: "Un dialogo costante tra vincoli tecnici e visione espressiva.",
    sec1P: "Il design di prodotto non è un atto isolato, ma una stratificazione di competenze. Dall'analisi antropometrica alla scelta dei materiali, ogni passaggio costruisce la personalità dell'oggetto e la sua relazione con la persona che lo vive.",
    sec2P1: "Attribuire una forma significa conferire una voce. Oltre alla pura funzione meccanica, l'oggetto industriale instaura un legame profondo con lo spazio e la cultura quotidiana.",
    sec2P2: "I progetti sono pensati come sistemi aperti: soluzioni sostenibili, materiali trasparenti e geometrie pronte ad evolversi nel tempo."
  },
  en: {
    sec1Title: "Designing a product is a sequence of choices.",
    sec1Sub: "A constant dialogue between technical constraints and expressive vision.",
    sec1P: "Product design is not an isolated act, but a layering of skills. From anthropometric analysis to material selection, every step builds the object's personality and its relationship with the user.",
    sec2P1: "Giving form means giving a voice. Beyond pure mechanical function, industrial objects forge a deep link with space and everyday culture.",
    sec2P2: "Projects are conceived as open systems: sustainable solutions, transparent materials, and geometries ready to evolve over time."
  }
};

export default function Index() {
  const [lang, setLang] = useState<'it' | 'en'>('it');
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    // Reveal Animations morbide con Blur & Scale
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

    // Observer per la sezione Showcase dei Progetti/Processo
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
      { threshold: 0.5 }
    );

    processCards.forEach((card) => processObserver.observe(card));

    return () => {
      revealObserver.disconnect();
      processObserver.disconnect();
    };
  }, []);

  const t = translations[lang];

  return (
    <div className="editorial-portfolio">
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          background-color: #070707;
          color: #e5e5e5;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .editorial-portfolio {
          background-color: #070707;
          color: #e5e5e5;
          min-height: 100vh;
        }

        /* HEADER EDITORIALE MINIMALE */
        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 35px 6vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          background: linear-gradient(to bottom, rgba(7,7,7,0.85), rgba(7,7,7,0));
          backdrop-filter: blur(8px);
        }

        .header-brand {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #888888;
        }

        .lang-switcher {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .lang-btn {
          background: none;
          border: none;
          color: #555555;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 1px;
          cursor: pointer;
          transition: color 0.4s ease;
        }

        .lang-btn.active, .lang-btn:hover {
          color: #ffffff;
        }

        /* 1. HERO CON MASCHERA SVG "DESIGN" E LAYER IN CONTINUO FADE */
        .hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #070707;
        }

        .hero-svg-wrapper {
          width: 90vw;
          max-width: 1300px;
          height: auto;
          position: relative;
          z-index: 2;
        }

        .hero-svg-mask {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Layer Animati dietro la Maschera */
        .layer-blueprint {
          fill: url(#blueprintPattern);
          animation: layerMove1 22s ease-in-out infinite alternate;
        }

        .layer-sketches {
          animation: layerMove2 18s ease-in-out infinite alternate, layerFade1 14s ease-in-out infinite alternate;
        }

        .layer-photo {
          animation: layerMove3 24s ease-in-out infinite alternate, layerFade2 16s ease-in-out infinite alternate;
        }

        @keyframes layerMove1 {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.12) translate(-30px, -15px); }
        }

        @keyframes layerMove2 {
          0% { transform: scale(1.05) translate(20px, -20px); }
          100% { transform: scale(1.2) translate(-20px, 20px); }
        }

        @keyframes layerMove3 {
          0% { transform: scale(1) translate(-15px, 15px); }
          100% { transform: scale(1.1) translate(25px, -25px); }
        }

        @keyframes layerFade1 {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.75; }
        }

        @keyframes layerFade2 {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.2; }
        }

        /* 2. SEZIONI INTRODUTTIVE CON TANTO RESPIRO E ANIMAZIONI MORBIDE */
        .editorial-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 160px 6vw;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        .editorial-text h2 {
          font-size: clamp(2.4rem, 4.5vw, 4.2rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 25px;
          letter-spacing: -1.5px;
          color: #ffffff;
        }

        .editorial-text h3.sub-grey {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 500;
          color: #666666;
          margin-bottom: 40px;
          line-height: 1.25;
          letter-spacing: -0.5px;
        }

        .editorial-text p {
          color: #999999;
          font-size: 1.15rem;
          line-height: 1.8;
          max-width: 540px;
        }

        .editorial-media-box {
          position: relative;
          width: 100%;
          height: 560px;
          overflow: hidden;
          background: #111111;
        }

        .editorial-media-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(30%);
          transition: filter 0.8s ease;
        }

        .editorial-media-box:hover img {
          filter: grayscale(0%);
        }

        /* Nuova animazione morbida: opacity + blur + scale + translateX */
        .reveal-editorial {
          opacity: 0;
          filter: blur(12px);
          transform: scale(1.04) translateX(35px);
          transition: opacity 1.4s cubic-bezier(.22,.61,.36,1), 
                      filter 1.4s cubic-bezier(.22,.61,.36,1), 
                      transform 1.4s cubic-bezier(.22,.61,.36,1);
        }

        .reveal-editorial.reveal-from-left {
          transform: scale(1.04) translateX(-35px);
        }

        .reveal-editorial.reveal-active {
          opacity: 1;
          filter: blur(0);
          transform: scale(1) translateX(0);
        }

        /* 3. SEZIONE STICKY CON PRODOTTO/SCARPA ANCORATA E TESTO CHE SCORRE SOPRA */
        .sticky-feature-section {
          position: relative;
          width: 100%;
          min-height: 240vh;
          background-color: #050505;
          border-top: 1px solid #181818;
          border-bottom: 1px solid #181818;
        }

        .sticky-media-container {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          z-index: 1;
        }

        .sticky-media-box {
          position: relative;
          width: 75vw;
          max-width: 1100px;
          height: 70vh;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
        }

        .sticky-media-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.7) contrast(1.1);
        }

        .sticky-technical-tag {
          position: absolute;
          bottom: 30px;
          left: 30px;
          font-family: monospace;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.6);
          letter-spacing: 2px;
          text-transform: uppercase;
          background: rgba(0,0,0,0.5);
          padding: 6px 12px;
          backdrop-filter: blur(4px);
        }

        /* Testi che scorrono sopra l'oggetto sticky */
        .scrolling-overlay-container {
          position: relative;
          z-index: 2;
          margin-top: -100vh;
          padding-bottom: 20vh;
          pointer-events: none;
        }

        .scrolling-card {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 520px;
          margin: 0 auto 10vh 10vw;
          background: rgba(12, 12, 12, 0.85);
          backdrop-filter: blur(16px);
          padding: 50px 40px;
          border-left: 2px solid #ffffff;
          pointer-events: auto;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }

        .scrolling-card .card-step {
          font-family: monospace;
          font-size: 0.85rem;
          color: #777777;
          letter-spacing: 2px;
          margin-bottom: 15px;
          display: block;
        }

        .scrolling-card h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .scrolling-card p {
          color: #aaaaaa;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        /* 4. SEZIONE SHOWCASE PROCESSO/PROGETTI IN STILE EDITORIALE E TECNICO */
        .process-showcase-wrapper {
          position: relative;
          max-width: 1500px;
          margin: 0 auto;
          padding: 120px 6vw;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 90px;
          align-items: start;
        }

        /* Colonna Sticky di Sinistra con Telaio Tecnico */
        .process-sticky-left {
          position: sticky;
          top: 12vh;
          height: 76vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .technical-frame {
          position: relative;
          width: 100%;
          height: 100%;
          max-height: 620px;
          background-color: #0c0c0c;
          border: 1px solid #1a1a1a;
          overflow: hidden;
        }

        .technical-img-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .technical-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(.22,.61,.36,1);
        }

        /* Sovrapposizione grafica con quote, coordinate e indicatori tecnici */
        .technical-hud-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
        }

        /* Colonna di Destra con i blocchi del processo */
        .process-scroll-right {
          padding-top: 6vh;
          padding-bottom: 20vh;
        }

        .process-card {
          min-height: 75vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 0;
          opacity: 0.25;
          filter: blur(4px);
          transition: opacity 0.6s ease, filter 0.6s ease;
          border-bottom: 1px solid #141414;
        }

        .process-card.active-step {
          opacity: 1;
          filter: blur(0px);
        }

        .process-card .phase-number {
          font-family: monospace;
          font-size: 0.9rem;
          color: #666666;
          letter-spacing: 3px;
          margin-bottom: 10px;
        }

        .process-card .phase-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 25px;
          letter-spacing: -1px;
        }

        .process-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
          padding: 20px 0;
          border-top: 1px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
        }

        .meta-item .meta-label {
          font-family: monospace;
          font-size: 0.75rem;
          color: #555555;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }

        .meta-item .meta-value {
          font-size: 0.95rem;
          color: #cccccc;
          font-weight: 500;
        }

        .process-card .phase-desc {
          color: #a0a0a0;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .process-card blockquote {
          font-style: italic;
          color: #888888;
          border-left: 2px solid #555555;
          padding-left: 20px;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        footer {
          background-color: #040404;
          padding: 100px 6vw 50px;
          text-align: center;
          border-top: 1px solid #121212;
        }

        footer p {
          color: #444444;
          font-size: 0.85rem;
          letter-spacing: 1px;
          font-family: monospace;
        }

        @media (max-width: 1024px) {
          .editorial-section, .process-showcase-wrapper {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .process-sticky-left {
            position: relative;
            top: 0;
            height: 450px;
          }
          .scrolling-card {
            margin: 0 5vw 10vh 5vw;
          }
        }
      `}</style>

      {/* HEADER EDITORIALE */}
      <header>
        <div className="header-brand">PORTFOLIO // INDUSTRIAL DESIGN</div>
        <div className="lang-switcher">
          <button className={`lang-btn ${lang === 'it' ? 'active' : ''}`} onClick={() => setLang('it')}>IT</button>
          <span style={{ color: '#333' }}>|</span>
          <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
        </div>
      </header>

      {/* 1. HERO CON MASCHERA SVG "DESIGN" & FADE CONTINUI DEI LAYER */}
      <section className="hero-section">
        <div className="hero-svg-wrapper">
          <svg className="hero-svg-mask" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid meet">
            <defs>
              {/* Pattern Blueprint */}
              <pattern id="blueprintPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
                <circle cx="20" cy="20" r="1.5" fill="rgba(255, 255, 255, 0.4)" />
              </pattern>

              {/* Maschera di testo DESIGN */}
              <mask id="designTextMask" x="0" y="0" width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" fill="#000000" />
                <text
                  x="50%"
                  y="55%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#ffffff"
                  fontSize="220"
                  fontWeight="900"
                  fontFamily="-apple-system, Helvetica Neue, Arial, sans-serif"
                  letterSpacing="-8"
                >
                  DESIGN
                </text>
              </mask>
            </defs>

            {/* Layer in movimento ritmico mascherati dentro il testo DESIGN */}
            <g mask="url(#designTextMask)">
              {/* Layer 1: Blueprint Grid */}
              <rect className="layer-blueprint" x="-10%" y="-10%" width="120%" height="120%" />

              {/* Layer 2: Schizzi a Matita */}
              <g className="layer-sketches">
                <image
                  href="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80"
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  opacity="0.5"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>

              {/* Layer 3: Immagine Desaturata Tecnico/Cromatico */}
              <g className="layer-photo">
                <image
                  href="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80"
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  opacity="0.45"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </g>
          </svg>
        </div>
      </section>

      {/* 2. SEZIONI INTRODUTTIVE CON ANIMAZIONI EDITORIALI (BLUR + SCALE + FADE) */}
      <section className="editorial-section">
        <div className="editorial-text">
          <h2>{t.sec1Title}</h2>
          <h3 className="sub-grey">{t.sec1Sub}</h3>
          <p>{t.sec1P}</p>
        </div>
        <div className="editorial-media-box reveal-editorial">
          <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80" alt="Design Lab" />
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-media-box reveal-editorial reveal-from-left">
          <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1000&q=80" alt="Process Sketch" />
        </div>
        <div className="editorial-text">
          <p>{t.sec2P1}</p>
          <br />
          <p>{t.sec2P2}</p>
        </div>
      </section>

      {/* 3. SEZIONE STICKY: SCARPA / PRODOTTO ANCORATO CON CONTENUTI CHE SCORRONO */}
      <section className="sticky-feature-section">
        <div className="sticky-media-container">
          <div className="sticky-media-box">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80"
              alt="Featured Design Object"
            />
            <div className="sticky-technical-tag">[OBJECT_REF_01 // SYSTEM_PROTOTYPE]</div>
          </div>
        </div>

        <div className="scrolling-overlay-container">
          <div className="scrolling-card">
            <span className="card-step">01 / ARCHITETTURA FORMALE</span>
            <h3>Scomposizione dei Volumi</h3>
            <p>Il progetto nasce dalla necessità di alleggerire la percezione visiva, concentrando la massa strutturale solo nei punti di sollecitazione meccanica.</p>
          </div>

          <div className="scrolling-card">
            <span className="card-step">02 / INTERAZIONE E MATERIALI</span>
            <h3>Integrazione Sensoriale</h3>
            <p>L'accoppiamento tra polimeri rigidi e superfici tattili crea una transizione fluida tra i punti di presa manuale e la struttura di supporto.</p>
          </div>

          <div className="scrolling-card">
            <span className="card-step">03 / SOSTENIBILITÀ E MONTAGGIO</span>
            <h3>Design for Disassembly</h3>
            <p>Senza l'impiego di colle permanenti, ogni componente può essere separato in meno di due minuti per favorire il riciclo o la sostituzione singola.</p>
          </div>
        </div>
      </section>

      {/* 4. SHOWCASE PROCESSO/PROGETTI IN STILE EDITORIALE E TELAIO TECNICO */}
      <section className="process-showcase-wrapper">
        {/* Colonna Fissa a Sinistra con Sovrapposizioni Tecniche */}
        <div className="process-sticky-left">
          <div className="technical-frame">
            <div className="technical-img-wrapper">
              <img
                src={processSteps[activeStep]?.img}
                alt={processSteps[activeStep]?.title}
              />
            </div>

            {/* Telaio di quote e coordinate SVG */}
            <svg className="technical-hud-overlay" viewBox="0 0 500 600">
              {/* Crocette di registro agli angoli */}
              <path d="M 20 30 L 20 20 L 30 20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
              <path d="M 470 20 L 480 20 L 480 30" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
              <path d="M 20 570 L 20 580 L 30 580" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
              <path d="M 470 580 L 480 580 L 480 570" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />

              {/* Indicatori e Coordinate */}
              <text x="35" y="32" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">
                SEC_REF // A-0{activeStep + 1}
              </text>
              
              <circle cx="450" cy="50" r="14" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
              <text x="444" y="53" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="monospace">12°</text>

              {/* Linea di quota inferiore */}
              <line x1="30" y1="560" x2="470" y2="560" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3,3" />
              <text x="35" y="550" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace">
                SCALE 1:1 // TOLERANCE 0.05mm
              </text>
              <text x="390" y="550" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="monospace" fontWeight="bold">
                [{processSteps[activeStep]?.id} / 05]
              </text>
            </svg>
          </div>
        </div>

        {/* Colonna di Destra con lo scorrimento dei blocchi editoriali */}
        <div className="process-scroll-right">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className={`process-card ${activeStep === idx ? 'active-step' : ''}`}
              data-step={idx}
            >
              <div className="phase-number">PHASE_{step.id} // {step.phase}</div>
              <div className="phase-title">{step.title}</div>

              <div className="process-meta-grid">
                <div className="meta-item">
                  <div className="meta-label">Strumenti</div>
                  <div className="meta-value">{step.tools}</div>
                </div>
                <div className="meta-item">
                  <div className="meta-label">Materiali / Output</div>
                  <div className="meta-value">{step.material}</div>
                </div>
                <div className="meta-item">
                  <div className="meta-label">Anno / Stato</div>
                  <div className="meta-value">{step.year}</div>
                </div>
                <div className="meta-item">
                  <div className="meta-label">Ruolo</div>
                  <div className="meta-value">{step.role}</div>
                </div>
              </div>

              <p className="phase-desc">{step.desc}</p>
              <blockquote>{step.quote}</blockquote>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 INDUSTRIAL DESIGN PORTFOLIO // ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
}