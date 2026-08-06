import React, { useState, useEffect } from 'react';

const projects = [
  {
    name: 'CEDRIC C.',
    role: 'Designer della prima versione della maschera EasyBreath',
    meta: 'Lavora in DECATHLON da 23 anni | Water Sports Centre - Hendaye, Francia',
    quote: '"Per me, DESIGN significa comprendere le aspirazioni delle persone e saper anticipare i loro bisogni in acqua."',
    img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'MATHIEU C.',
    role: 'Designer delle scarpe da calcio Traxium Compressor',
    meta: 'Lavora in DECATHLON da 10 anni | Kipstadium - Tourcoing, Francia',
    quote: '"Il DESIGN è un processo creativo che aiuta a risolvere le sfide quotidiane sul campo da gioco, unendo funzione ed estetica."',
    img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'THOMAS C.',
    role: 'DESIGN Manager per lo skateboard DK900',
    meta: "Lavora in DECATHLON da 6 anni | B'Twin Village - Lille, Francia",
    quote: '"Co-creare con atleti professionisti ci spinge a superare i limiti della resistenza meccanica e dello stile urbano."',
    img: 'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'ELENA R.',
    role: 'Senior Footwear Designer per il Running',
    meta: 'Lavora in DECATHLON da 8 anni | Kalenji Lab - Lille, Francia',
    quote: '"Ogni grammo risparmiato sulla scarpa è una vittoria per la maratona dell\'atleta."',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'LUCAS M.',
    role: 'Hardware & Outdoor Gear Specialist',
    meta: 'Lavora in DECATHLON da 12 anni | Mountain Store - Passy, Francia',
    quote: '"Progettare tende ed equipaggiamento da montagna richiede un\'affidabilità totale in condizioni estreme."',
    img: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'SOPHIE B.',
    role: 'Color & Material Lead Designer',
    meta: 'Lavora in DECATHLON da 5 anni | Design Hub - Lille, Francia',
    quote: '"La palette cromatica definisce l\'identità visiva ed emozionale dell\'esperienza sportiva."',
    img: 'https://images.unsplash.com/photo-1483721063386-cc26459e13ba?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'ANTOINE T.',
    role: 'Digital Concept & Smart Products',
    meta: 'Lavora in DECATHLON da 7 anni | Tech Centre - Parigi, Francia',
    quote: '"Integrando l\'elettronica discreta e l\'IoT miglioriamo la sicurezza e l\'analisi della performance."',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'CAMILLE L.',
    role: 'Eco-Design & Circular Economy Lead',
    meta: 'Lavora in DECATHLON da 9 anni | EcoLab - Hendaye, Francia',
    quote: '"Il miglior prodotto è quello progettato per essere interamente smontato, riparato e riciclato."',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'JULIEN V.',
    role: 'Urban Mobility & E-Bike Designer',
    meta: 'Lavora in DECATHLON da 11 anni | B\'Twin Village - Lille, Francia',
    quote: '"Riprogettare i trasporti urbani significa plasmare le città del futuro rendendole più vivibili."',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'MARIE D.',
    role: '3D Prototyping & Additive Manufacturing',
    meta: 'Lavora in DECATHLON da 4 anni | Prototype Lab - Lille, Francia',
    quote: '"Stampare in 3D in poche ore quello che prima richiedeva settimane accelera l\'innovazione immediata."',
    img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80'
  }
];

const dotsCoordinates = [
  { cx: 420, cy: 180 }, { cx: 435, cy: 210 }, { cx: 440, cy: 245 },
  { cx: 438, cy: 280 }, { cx: 425, cy: 315 }, { cx: 405, cy: 350 },
  { cx: 378, cy: 380 }, { cx: 345, cy: 405 }, { cx: 310, cy: 422 },
  { cx: 270, cy: 432 }
];

const translations = {
  it: {
    sec1Title: "Progettare un prodotto è un mestiere.",
    sec1Sub: "In realtà è un insieme di tanti mestieri. Scopriamoli.",
    sec1P: "Al centro del DESIGN in DECATHLON ci sono persone che, prima di tutto, sono appassionate di sport e lavorano ogni giorno per progettare prodotti sportivi. Ma le specialità creative e le competenze non si limitano solo al prodotto: ci sono designer nel retail, nel digitale e nella comunicazione. I designer lavorano su oltre dodici campi di competenza, dall'abbigliamento alle calzature, fino ai componenti e al 3D.",
    sec2P1: "Parte del lavoro di un designer consiste nel conferire ai prodotti la loro personalità, oltre alla funzione. Fondamentalmente, oltre la percezione comune, DECATHLON vuole stringere un legame profondo tra lo sport, il DESIGN e la società.",
    sec2P2: "I team si sono uniti per creare il progetto \"Sports Mates\". Una strategia unica nel mondo dello sport che pone il valore emozionale al centro della propria missione. Attraverso motivazioni e desideri, i prodotti sono pensati per essere compagni, partner e motivatori."
  },
  en: {
    sec1Title: "Designing a product is a trade.",
    sec1Sub: "It's actually a whole heap of trades. Let's take a look.",
    sec1P: "At the heart of DESIGN at DECATHLON are people who, above all, are passionate sports enthusiasts working day in, day out to design sports products. But the creative specialities and expertise within DESIGN are not just limited to products. There are designers in retail, digital and communications departments. Designers work across more than twelve expert fields from apparel DESIGN to footwear DESIGN, components, 3D and others.",
    sec2P1: "Part of a designer's work consists in giving products their personality, in addition to their function. Essentially, beyond the usual perception, DECATHLON wants to forge a link between sport, DESIGN and society.",
    sec2P2: "DECATHLON teams came together to create the 'Sports Mates' project. A unique strategy in the world of sport that places emotional value at the heart of their mission. Through motivations, desires and persistence, products are designed to be companions and partners."
  }
};

export default function Index() {
  const [lang, setLang] = useState<'it' | 'en'>('it');
  const [activeProject, setActiveProject] = useState<number>(0);

  useEffect(() => {
    // Reveal Animations
    const revealElements = document.querySelectorAll('.reveal-from-right, .reveal-from-left');
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

    // Pinned Sticky Showcase Observer
    const projectCards = document.querySelectorAll('.project-card');
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-project'));
            setActiveProject(index);
          }
        });
      },
      { threshold: 0.55 }
    );

    projectCards.forEach((card) => projectObserver.observe(card));

    return () => {
      revealObserver.disconnect();
      projectObserver.disconnect();
    };
  }, []);

  const t = translations[lang];

  return (
    <div className="portfolio-page">
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          background-color: #050505;
          color: #ffffff;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
        }

        .portfolio-page {
          --accent-blue: #0082c3;
          background-color: #050505;
          color: #ffffff;
          min-height: 100vh;
        }

        /* 1. HEADER (TOLLTO TITOLO BLU A SINISTRA) */
        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 25px 40px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          z-index: 1000;
          background: linear-gradient(to bottom, rgba(5,5,5,0.95), rgba(5,5,5,0));
        }

        .lang-switcher {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .lang-btn {
          background: none;
          border: none;
          color: #777;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .lang-btn.active, .lang-btn:hover {
          color: #ffffff;
        }

        .header-stripes {
          color: var(--accent-blue);
          font-weight: 900;
          letter-spacing: -2px;
          margin-left: 10px;
        }

        /* 2. HERO SECTION CON TESTO TRASPARENTE STENCIL */
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-tech-bg {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px),
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px, 80px 80px, 80px 80px;
          animation: techBgPulse 10s ease-in-out infinite alternate;
          z-index: 1;
        }

        @keyframes techBgPulse {
          0% { transform: scale(1) translate(0, 0); opacity: 0.5; }
          100% { transform: scale(1.08) translate(-15px, -15px); opacity: 0.9; }
        }

        .hero-title-container {
          position: relative;
          z-index: 2;
          width: 90%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0px;
          text-transform: uppercase;
          font-weight: 900;
          font-size: clamp(6rem, 18vw, 16rem);
          line-height: 0.78;
          letter-spacing: -6px;
          user-select: none;
        }

        /* Trasparenza e sfondamento visibile della scritta DESIGN */
        .hero-block span {
          display: block;
          color: rgba(255, 255, 255, 0.15);
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.85);
          mix-blend-mode: overlay;
          transition: transform 0.5s ease;
        }

        .hero-block:nth-child(2) { transform: translateY(25px); }
        .hero-block:nth-child(3) { transform: translateY(-20px); }
        .hero-block:nth-child(4) { transform: translateY(15px); }

        /* 3. SEZIONI INTRODUTTIVE & ANIMAZIONI */
        .section-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 120px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .text-content h2 {
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          font-weight: 900;
          line-height: 1.05;
          margin-bottom: 15px;
          letter-spacing: -1px;
          color: #ffffff;
        }

        .text-content h3.sub-grey {
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          font-weight: 800;
          color: #555555;
          margin-bottom: 30px;
          line-height: 1.1;
        }

        .text-content p {
          color: #a0a0a0;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .media-box {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
          border-radius: 2px;
          background: #111;
        }

        .media-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hatch-lines {
          position: absolute;
          top: -15px;
          right: -15px;
          font-size: 2.2rem;
          font-weight: 900;
          color: rgba(255,255,255,0.25);
          letter-spacing: -4px;
          pointer-events: none;
          z-index: 2;
        }

        .reveal-from-right {
          opacity: 0;
          transform: translateX(90px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-from-left {
          opacity: 0;
          transform: translateX(-90px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-active {
          opacity: 1;
          transform: translateX(0);
        }

        /* 4. SEZIONE SCARPA CON SFONDO ESTRATTO FISSO (PARALLAX CUT-OUT) */
        .parallax-window-section {
          position: relative;
          width: 100%;
          height: 85vh;
          background-image: url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1920&q=80');
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          margin: 100px 0;
          border-top: 2px solid #111;
          border-bottom: 2px solid #111;
        }

        /* 5. SHOWCASE DESIGNER CON PINNING STICKY GARANTITO */
        .showcase-wrapper {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start; /* Fondamentale per il corretto funzionamento di position: sticky */
        }

        .showcase-sticky-left {
          position: sticky;
          top: 15vh;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .svg-frame-container {
          position: relative;
          width: 480px;
          height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circle-image-holder {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          overflow: hidden;
          z-index: 2;
          background-color: #0d0d0d;
          box-shadow: 0 0 40px rgba(0,0,0,0.9);
        }

        .circle-image-holder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .svg-ring-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 3;
          pointer-events: none;
        }

        .dot-indicator {
          fill: #333333;
          transition: fill 0.3s ease, r 0.3s ease;
        }

        .dot-indicator.active {
          fill: #ffffff;
          r: 6px;
          filter: drop-shadow(0px 0px 8px rgba(255,255,255,0.9));
        }

        .showcase-scroll-right {
          padding-top: 5vh;
          padding-bottom: 20vh;
        }

        .project-card {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 0;
          opacity: 0.2;
          transition: opacity 0.5s ease;
        }

        .project-card.active-project {
          opacity: 1;
        }

        .project-card .designer-name {
          font-size: 2.3rem;
          font-weight: 900;
          margin-top: 15px;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .project-card .designer-role {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .project-card .designer-meta {
          font-size: 0.95rem;
          color: #888888;
          margin-bottom: 25px;
        }

        .project-card blockquote {
          font-style: italic;
          color: #aaaaaa;
          border-left: 2px solid #ffffff;
          padding-left: 18px;
          margin-top: 10px;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        footer {
          background-color: #000;
          padding: 80px 20px 40px;
          text-align: center;
          border-top: 1px solid #151515;
        }

        @media (max-width: 900px) {
          .section-container, .showcase-wrapper {
            grid-template-columns: 1fr;
          }
          .showcase-sticky-left {
            position: relative;
            top: 0;
            height: 380px;
          }
          .svg-frame-container {
            width: 320px;
            height: 320px;
          }
          .circle-image-holder {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>

      {/* HEADER SENZA IL TITOLO IN ALTO A SINISTRA */}
      <header>
        <div className="lang-switcher">
          <button className={`lang-btn ${lang === 'it' ? 'active' : ''}`} onClick={() => setLang('it')}>IT</button>
          <span style={{ color: '#444' }}>|</span>
          <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
          <span className="header-stripes">///</span>
        </div>
      </header>

      {/* HERO SECTION CON SCRITTA DESIGN IN TRASPARENZA */}
      <section className="hero">
        <div className="hero-tech-bg" />
        <div className="hero-title-container">
          <div className="hero-block"><span>DE</span></div>
          <div className="hero-block"><span>SI</span></div>
          <div className="hero-block"><span>G</span></div>
          <div className="hero-block"><span>N</span></div>
        </div>
      </section>

      {/* SEZIONE 1 CON DISSOLVENZA DA DESTRI */}
      <section className="section-container">
        <div className="text-content">
          <h2>{t.sec1Title}</h2>
          <h3 className="sub-grey">{t.sec1Sub}</h3>
          <p>{t.sec1P}</p>
        </div>
        <div className="media-box reveal-from-right">
          <div className="hatch-lines">///////////////</div>
          <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80" alt="Design Workshop" />
        </div>
      </section>

      {/* SEZIONE 2 CON DISSOLVENZA DA SINISTRA */}
      <section className="section-container">
        <div className="media-box reveal-from-left">
          <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80" alt="Sketching Shoes" />
        </div>
        <div className="text-content">
          <p>{t.sec2P1}</p>
          <br />
          <p>{t.sec2P2}</p>
        </div>
      </section>

      {/* FINESTRA PARALLAX CON SCARPA FISSA */}
      <section className="parallax-window-section" />

      {/* SHOWCASE DESIGNER STICKY BLOCATO */}
      <section className="showcase-wrapper">
        <div className="showcase-sticky-left">
          <div className="svg-frame-container">
            <div className="circle-image-holder">
              <img src={projects[activeProject]?.img} alt={projects[activeProject]?.name} />
            </div>

            <svg className="svg-ring-overlay" viewBox="0 0 500 500">
              <circle cx="250" cy="250" r="190" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
              <circle cx="250" cy="250" r="215" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4,4" fill="none" />

              <g>
                {dotsCoordinates.map((dot, idx) => (
                  <circle
                    key={idx}
                    className={`dot-indicator ${activeProject === idx ? 'active' : ''}`}
                    cx={dot.cx}
                    cy={dot.cy}
                    r={4}
                  />
                ))}
              </g>

              <path d="M 420 180 L 470 180 L 490 200" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />
              <circle cx="490" cy="200" r="4" fill="#ffffff" />
            </svg>
          </div>
        </div>

        <div className="showcase-scroll-right">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`project-card ${activeProject === idx ? 'active-project' : ''}`}
              data-project={idx}
            >
              <div className="designer-name">{proj.name}</div>
              <div className="designer-role">{proj.role}</div>
              <div className="designer-meta">{proj.meta}</div>
              <blockquote>{proj.quote}</blockquote>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p style={{ color: '#555', fontSize: '0.85rem' }}>© Decathlon Design Showcase</p>
      </footer>
    </div>
  );
}