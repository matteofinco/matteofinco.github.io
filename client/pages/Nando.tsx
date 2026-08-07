import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';

interface NandoProps {
  heroFit?: 'contain' | 'cover';
}

const PROJECTS_LIST = [
  { id: "archivia", title: "Archivia", subtitle: "Pen holder", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fc4e5eae770e146cc9e7245b921f5d11e", path: "/archivia" },
  { id: "pizzamente", title: "PizzaMente", subtitle: "Academic Workshop", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913", path: "/pizzamente" },
  { id: "nando", title: "Nando", subtitle: "Hyperplastic cutlery handle", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F58faeaf495544fe5a8367b24177ac088", path: "/nando" },
  { id: "snake", title: "Snake", subtitle: "Hockey stickhandling trainer", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F9366df60acf94b0bacc85252a2e3865e", path: "/snake" },
  { id: "wafflemaker", title: "Waffle Maker", subtitle: "Waffle Maker analysis", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fedbb2046d3db4d549f4da864fca20382", path: "/wafflemaker" },
  { id: "prop", title: "Prop", subtitle: "3D-Printed Emergency Crutch", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41", path: "/prop" },
  { id: "ttable", title: "T-Table", subtitle: "Interactive feeding-friendly table", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2c9ec8a6b5fd4d90bb36506ce7b89adc", path: "/ttable" }
];

const NANDO_IMAGE_URL = "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F58faeaf495544fe5a8367b24177ac088";

const content = {
  en: {
    title: "NANDO",
    subtitle: "Hyperplastic cutlery handle",
    meta: {
      teamLabel: "Designers",
      yearLabel: "Year",
      yearVal: "2025",
      awardLabel: "Workshop / Context",
      awardVal: "Inclusive Design & Parametric Modeling"
    },
    overview: {
      title: "Overview",
      subtitle: "Challenge",
      p1: "For people with conditions like osteoarthritis or reduced muscle strength in the upper limbs, performing everyday tasks like eating a meal can be a complex challenge. Traditional cutlery requires a tight grip and fine motor control; when the ability to make a fist is lacking or causes discomfort, utensils tend to slip and move uncontrollably, frequently falling.",
      p2: "The design challenge was to transform a standardized everyday tool into an inclusive system capable of compensating for grip deficits without compromising the object's aesthetics."
    },
    solution: {
      title: "Solution",
      p1: "Nando is a concept for a hyperplastic, flexible, and adaptable handle, designed as a universal aid for the use of traditional cutlery and other thin items such as razors or toothbrushes.",
      p2: "Featuring a symmetrical geometric shape that allows for both right- and left-handed use, the object features a generous volume designed to offer comfort and immediate relief to the hand.",
      p3: "Made entirely of ELASTO-1000, Nando ensures flexibility, hygienic use, and intuitive maintenance, making it fully dishwasher safe."
    },
    research: {
      title: "Research",
      p1: "The preliminary investigation focused on the dynamics of the palmar grip and the ergonomic limitations imposed by micromotor disabilities. By analyzing pressure points and the pain resulting from forced fist closure, the research highlighted the need for a large and soft contact surface.",
      p2: "The project's turning point lies in its parametric design approach: through digital mapping and scanning of the hand's anthropometric parameters, the system allows for the generation of a personalized configuration tailored to the specific needs of each user."
    },
    design: {
      title: "Design",
      p1: "Nando’s morphological configuration responds to precise functional constraints through simple, sinuous lines. Its generous volume facilitates palmar grasp, significantly reducing the required muscular effort, while a calibrated lateral protrusion ensures hand stability during use.",
      p2: "Internally, the gripping architecture is engineered to flex and mechanically adapt to cutlery of various shapes and thicknesses, securing them firmly in place. This complex, adaptable geometry is explicitly optimized for additive manufacturing, leveraging 3D printing to achieve the necessary structural compliance.",
      p3: "From a tactile perspective, the surface features a granular texture to maximize friction and prevent slippage. While the curated color palette ensures seamless integration into domestic environments, Nando’s versatility extends into public and dining spaces. By acting as a portable, hygienic interface, it eliminates the ergonomic barriers of standard public tableware, offering a discrete and independent solution that removes the need to carry complex or soiled personal utensils."
    },
    technical: {
      title: "Skills & Technical Insights",
      p1: "The combination of digital manufacturing and inclusive design can solve complex problems through simple gestures. Nando redefines the concept of accessibility, restoring complete autonomy and safety during mealtimes to those with reduced mobility.",
      p2: "Thanks to the flexible production of the parametric model, the device overcomes the limitations of mass-produced industrial products, offering a hygienic, long-lasting solution tailored to the unique needs of each individual."
    },
    cta: {
      title: "What's next?",
      subtitle: "Projects",
      button: "BACK TO PORTFOLIO"
    }
  },
  it: {
    title: "NANDO",
    subtitle: "Impugnatura iperplastica per posate",
    meta: {
      teamLabel: "Designer",
      yearLabel: "Anno",
      yearVal: "2025",
      awardLabel: "Workshop / Contesto",
      awardVal: "Design Inclusivo & Modellazione Parametrica"
    },
    overview: {
      title: "Overview",
      subtitle: "Sfida progettuale",
      p1: "Per le persone affette da patologie come l'osteoartrite o la riduzione della forza muscolare agli arti superiori, compiere gesti quotidiani come mangiare può trasformarsi in una sfida complessa. Le posate tradizionali richiedono una presa salda e un controllo motorio fine; quando la capacità di chiudere il pugno manca o causa dolore, gli utensili tendono a scivolare e muoversi in modo incontrollato, cadendo frequentemente.",
      p2: "La sfida progettuale è stata quella di trasformare uno strumento di uso comune e standardizzato in un sistema inclusivo capace di compensare i deficit di presa senza compromettere l'estetica dell'oggetto."
    },
    solution: {
      title: "Solution",
      p1: "Nando è un concetto di impugnatura iperplastica, flessibile e adattabile, progettata come ausilio universale per l'utilizzo di posate tradizionali e altri oggetti sottili come rasoi o spazzolini da denti.",
      p2: "Caratterizzato da una forma geometrica simmetrica che ne consente l'uso sia a destrimani che a mancini, l'oggetto presenta un volume generoso pensato per offrire comfort e sollievo immediato alla mano.",
      p3: "Realizzato interamente in ELASTO-1000, Nando garantisce flessibilità, igiene e una manutenzione intuitiva, risultando completamente lavabile in lavastoviglie."
    },
    research: {
      title: "Research",
      p1: "L'indagine preliminare si è concentrata sulle dinamiche della presa palmare e sui limiti ergonomici imposti dalle disabilità micromotorie. Analizzando i punti di pressione e il dolore derivante dalla chiusura forzata del pugno, la ricerca ha evidenziato la necessità di una superficie di contatto ampia e morbida.",
      p2: "Il punto di svolta del progetto risiede nel suo approccio alla progettazione parametrica: attraverso la mappatura digitale e la scansione dei parametri antropometrici della mano, il sistema permette di generare una configurazione personalizzata sulle specifiche esigenze di ciascun utente."
    },
    design: {
      title: "Design",
      p1: "La configurazione morfologica di Nando risponde a precisi vincoli funzionali attraverso linee semplici e sinuose. Il suo volume generoso facilita la presa palmare, riducendo significativamente lo sforzo muscolare richiesto, mentre una sporgenza laterale calibrata assicura la stabilità della mano durante l'uso.",
      p2: "All'interno, l'architettura di bloccaggio è ingegnerizzata per flettersi e adattarsi meccanicamente a posate di varie forme e spessori, bloccandole saldamente. Questa geometria complessa e adattabile è esplicitamente ottimizzata per la produzione additiva, sfruttando la stampa 3D per ottenere la conformità strutturale necessaria.",
      p3: "Dal punto di vista tattile, la superficie presenta una texture granulare per massimizzare l'attrito ed evitare lo scivolamento. Se la palette cromatica curata garantisce un'integrazione armonica negli ambienti domestici, la versatilità di Nando si estende anche agli spazi pubblici e alla ristorazione. Agendo come un'interfaccia portatile e igienica, elimina le barriere ergonomiche delle posate standard, offrendo una soluzione discreta e indipendente che evita di dover trasportare utensili personali complessi o sporchi."
    },
    technical: {
      title: "Skills & Technical Insights",
      p1: "La combinazione di produzione digitale e design inclusivo può risolvere problemi complessi attraverso gesti semplici. Nando ridefinisce il concetto di accessibilità, restituendo piena autonomia e sicurezza durante i pasti a chi ha una mobilità ridotta.",
      p2: "Grazie alla produzione flessibile del modello parametrico, il dispositivo supera i limiti dei prodotti industriali di massa, offrendo una soluzione igienica, duratura e su misura per le esigenze uniche di ogni individuo."
    },
    cta: {
      title: "What's next?",
      subtitle: "Progetti",
      button: "TORNA AL PORTFOLIO"
    }
  }
};

export default function Nando({ heroFit = 'cover' }: NandoProps) {
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

        /* PROJECT NAVIGATOR */
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

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 860px) {
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
        }
      `}</style>

      <div className="project-container">
        {/* HEADER & METADATA */}
        <div className="editorial-content">
          <section className="project-hero reveal-editorial reveal-from-left">
            <h1>{t.title}</h1>
            <p className="project-subtitle">{t.subtitle}</p>

            <div className="hero-info">
              <div className="info-block">
                <span>{t.meta.teamLabel}</span>
                <p>
                  Finco Matteo<br />
                  Stecco Dario<br />
                  Vecoli Beatrice
                </p>
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

        {/* HERO PRODUCT IMAGE (FULL BLEED) */}
        <section className="hero-media-fullbleed reveal-editorial reveal-from-left">
          <img
            src={NANDO_IMAGE_URL}
            alt="Nando hyperplastic cutlery handle hero shot"
          />
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
            <img
              src={NANDO_IMAGE_URL}
              alt="Nando solution overview"
            />
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
            <img
              src={NANDO_IMAGE_URL}
              alt="Nando research and ergonomic analysis"
            />
          </div>
        </section>

        <div className="editorial-content">
          <hr className="editorial-divider" />
        </div>

        {/* ROW 3: DESIGN (IMAGE LEFT FULL BLEED) */}
        <section className="editorial-row-fullbleed row-img-left">
          <div className="row-media reveal-editorial reveal-from-left">
            <img
              src={NANDO_IMAGE_URL}
              alt="Nando internal gripping architecture detail"
            />
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
              <img
                src={NANDO_IMAGE_URL}
                alt="Nando ergonomic usage context"
              />
            </div>
            <div className="composite-bottom">
              <div className="composite-square">
                <img
                  src={NANDO_IMAGE_URL}
                  alt="Nando surface texture detail"
                />
              </div>
              <div className="composite-square">
                <img
                  src={NANDO_IMAGE_URL}
                  alt="Nando internal flexible structure"
                />
              </div>
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

          {/* NEXT PROJECT / CTA */}
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
                    className={`dot-item ${proj.id === 'nando' ? 'active' : ''}`}
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