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
    headerTag: "2. IMMERSIONE NEL CUORE DEI NOSTRI TEAM",
    sec1Title: "Progettare un prodotto è un mestiere.",
    sec1Sub: "In realtà è un insieme di tanti mestieri. Scopriamoli.",
    sec1P: "Al centro del DESIGN in DECATHLON ci sono persone che, prima di tutto, sono appassionate di sport e lavorano ogni giorno per progettare prodotti sportivi. Ma le specialità creative e le competenze non si limitano solo al prodotto: ci sono designer nel retail, nel digitale e nella comunicazione. I designer lavorano su oltre dodici campi di competenza, dall'abbigliamento alle calzature, fino ai componenti e al 3D.",
    sec2P1: "Parte del lavoro di un designer consiste nel conferire ai prodotti la loro personalità, oltre alla funzione. Fondamentalmente, oltre la percezione comune, DECATHLON vuole stringere un legame profondo tra lo sport, il DESIGN e la società.",
    sec2P2: "I team si sono uniti per creare il progetto \"Sports Mates\". Una strategia unica nel mondo dello sport che pone il valore emozionale al centro della propria missione. Attraverso motivazioni e desideri, i prodotti sono pensati per essere compagni, partner e motivatori."
  },
  en: {
    headerTag: "2. IMMERSION AT THE HEART OF OUR TEAMS",
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
    const revealElements = document.querySelectorAll('.reveal-from-right, .reveal-from-left');
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
      { threshold: 0.6 }
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

        .portfolio-page {
          --bg-color: #050505;
          --text-white: #ffffff;
          --text-gray: #a0a0a0;
          --accent-blue: #0082c3;
          --font-family: 'Helvetica Neue', Arial, sans-serif;
          background-color: var(--bg-color);
          color: var(--text-white);
          font-family: var(--font-family);
          overflow-x: hidden;
          line-height: 1.6;
          min-height: 100vh;
        }

        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          background: linear-gradient(to bottom, rgba(5,5,5,0.9), rgba(5,5,5,0));
        }

        .header-tag {
          color: var(--accent-blue);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .lang-switcher {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .lang-btn {
          background: none;
          border: none;
          color: var(--text-gray);
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .lang-btn.active, .lang-btn:hover {
          color: var(--text-white);
        }

        .header-stripes {
          color: var(--accent-blue);
          font-weight: 900;
          letter-spacing: -2px;
          margin-left: 10px;
        }

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
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px, 80px 80px, 80px 80px;
          animation: techBgPulse 8s ease-in-out infinite alternate;
          z-index: 1;
        }

        @keyframes techBgPulse {
          0% { transform: scale(1) translate(0, 0); opacity: 0.4; }
          100% { transform: scale(1.05) translate(-10px, -10px); opacity: 0.8; }
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
          line-height: 0.8;
          letter-spacing: -5px;
          user-select: none;
        }

        .hero-block {
          color: var(--text-white);
          overflow: hidden;
        }

        .hero-block:nth-child(2) { transform: translateY(20px); }
        .hero-block:nth-child(3) { transform: translateY(-15px); }
        .hero-block:nth-child(4) { transform: translateY(10px); }

        .section-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 120px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .text-content h2 {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 10px;
          color: var(--text-white);
        }

        .text-content h3.sub-grey {
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          font-weight: 800;
          color: #666;
          margin-bottom: 30px;
        }

        .text-content p {
          color: var(--text-gray);
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .media-box {
          position: relative;
          width: 100%;
          height: 450px;
          overflow: hidden;
          border-radius: 4px;
        }

        .media-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hatch-lines {
          position: absolute;
          top: -20px;
          right: -20px;
          font-size: 2rem;
          font-weight: 900;
          color: rgba(255,255,255,0.3);
          letter-spacing: -3px;
          pointer-events: none;
        }

        .reveal-from-right {
          opacity: 0;
          transform: translateX(80px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-from-left {
          opacity: 0;
          transform: translateX(-80px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-active {
          opacity: 1;
          transform: translateX(0);
        }

        .parallax-window-section {
          position: relative;
          width: 100%;
          height: 75vh;
          background-image: url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1920&q=80');
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 80px 0;
          box-shadow: inset 0 0 100px rgba(0,0,0,0.8);
        }

        .parallax-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .showcase-wrapper {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
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
          background-color: #111;
          box-shadow: 0 0 30px rgba(0,0,0,0.8);
        }

        .circle-image-holder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .svg-ring-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 3;
          pointer-events: none;
        }

        .dot-indicator {
          fill: #444;
          transition: fill 0.4s ease, r 0.4s ease;
        }

        .dot-indicator.active {
          fill: #ffffff;
          r: 6px;
          filter: drop-shadow(0px 0px 6px rgba(255,255,255,0.8));
        }

        .showcase-scroll-right {
          padding-top: 10vh;
          padding-bottom: 25vh;
        }

        .project-card {
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 0;
          opacity: 0.3;
          transition: opacity 0.5s ease;
        }

        .project-card.active-project {
          opacity: 1;
        }

        .project-card .designer-name {
          font-size: 2rem;
          font-weight: 800;
          margin-top: 20px;
          color: var(--text-white);
        }

        .project-card .designer-role {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-white);
          margin-bottom: 15px;
        }

        .project-card .designer-meta {
          font-size: 0.95rem;
          color: var(--text-gray);
          margin-bottom: 20px;
        }

        .project-card blockquote {
          font-style: italic;
          color: var(--text-gray);
          border-left: 2px solid var(--text-white);
          padding-left: 15px;
          margin-top: 15px;
          font-size: 0.95rem;
        }

        footer {
          background-color: #000;
          padding: 100px 20px 40px;
          text-align: center;
          border-top: 1px solid #151515;
        }

        .footer-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 60px;
          background: #0082c3;
          padding: 15px 0;
          color: #fff;
        }

        .footer-banner-btn {
          background: #00699e;
          border: none;
          color: #fff;
          padding: 10px 15px;
          cursor: pointer;
          font-weight: 700;
        }

        .footer-banner h3 {
          font-size: clamp(1.2rem, 3vw, 2.2rem);
          font-weight: 900;
          letter-spacing: 1px;
        }

        .footer-contacts h4 {
          font-size: 1.2rem;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .footer-contacts a {
          color: var(--text-white);
          text-decoration: underline;
          display: block;
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .footer-socials {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 30px 0;
        }

        .footer-socials a {
          color: var(--text-gray);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          font-size: 0.8rem;
          color: var(--text-gray);
          margin-top: 40px;
        }

        @media (max-width: 900px) {
          .section-container, .showcase-wrapper {
            grid-template-columns: 1fr;
          }
          .showcase-sticky-left {
            position: relative;
            top: 0;
            height: 400px;
          }
          .svg-frame-container {
            width: 340px;
            height: 340px;
          }
          .circle-image-holder {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>

      <header>
        <div className="header-tag">{t.headerTag}</div>
        <div className="lang-switcher">
          <button className={`lang-btn ${lang === 'it' ? 'active' : ''}`} onClick={() => setLang('it')}>IT</button>
          <span style={{ color: '#444' }}>|</span>
          <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
          <span className="header-stripes">///</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-tech-bg" />
        <div className="hero-title-container">
          <div className="hero-block"><span>DE</span></div>
          <div className="hero-block"><span>SI</span></div>
          <div className="hero-block"><span>G</span></div>
          <div className="hero-block"><span>N</span></div>
        </div>
      </section>

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

      <section className="parallax-window-section">
        <div className="parallax-overlay" />
      </section>

      <section className="showcase-wrapper">
        <div className="showcase-sticky-left">
          <div className="svg-frame-container">
            <div className="circle-image-holder">
              <img src={projects[activeProject]?.img} alt="Active Project" />
            </div>

            <svg className="svg-ring-overlay" viewBox="0 0 500 500">
              <circle cx="250" cy="250" r="190" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
              <circle cx="250" cy="250" r="215" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4,4" fill="none" />

              <g>
                {dotsCoordinates.map((dot, idx) => (
                  <circle
                    key={idx}
                    className={`dot-indicator ${activeProject === idx ? 'active' : ''}`}
                    cx={dot.cx}
                    cy={dot.cy}
                    r={4.5}
                  />
                ))}
              </g>

              <path d="M 420 180 L 470 180 L 490 200" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
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
              <blockquote >{proj.quote}</blockquote>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-banner">
          <button className="footer-banner-btn">&lt;</button>
          <h3>/////////////////////// AND WHAT ABOUT TOMORROW? ///////</h3>
          <button className="footer-banner-btn">&gt;</button>
        </div>

        <div className="footer-contacts">
          <h4>DECATHLON UNITED PR CONTACTS</h4>
          <a href="mailto:international.media@decathlon.com">international.media@decathlon.com</a>
          <a href="https://decathlon-united.media" target="_blank" rel="noreferrer">decathlon-united.media</a>
          <a href="#">Download the Media Kit</a>
        </div>

        <div className="footer-socials">
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>

        <div className="footer-links">
          <span>Decathlon United Media</span> | <span>Decathlon around the world</span> | <span>Decathlon Media France</span> | <span>Recruitment</span> | <span>Legal notice</span> | <span>Terms of use</span> | <span>Cookie settings</span>
        </div>
        <p style={{ marginTop: '25px', fontSize: '0.75rem', color: '#555' }}>© 2026 Decathlon - All rights reserved</p>
      </footer>
    </div>
  );
}