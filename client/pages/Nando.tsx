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
      yearVal: "2026",
      awardLabel: "Context",
      awardVal: "Inclusive Design & Parametric Aids"
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
      yearVal: "2026",
      awardLabel: "Contesto",
      awardVal: "Design Inclusivo & Ausili Parametrici"
    },
    overview: {
      title: "Overview",
      subtitle: "Sfida progettuale",
      p1: "Per le persone con patologie come l'osteoartrite o con una ridotta forza muscolare agli arti superiori, svolgere attività quotidiane come mangiare può rappresentare una sfida complessa. Le posate tradizionali richiedono una presa salda e un controllo motorio fine; quando la capacità di stringere il pugno manca o causa disagio, gli utensili tendono a scivolare e muoversi in modo incontrollato, cadendo frequentemente.",
      p2: "La sfida progettuale è stata quella di trasformare uno strumento quotidiano standardizzato in un sistema inclusivo capace di compensare i deficit di presa senza compromettere l'estetica dell'oggetto."
    },
    solution: {
      title: "Solution",
      p1: "Nando è un concept per un'impugnatura iperplastica, flessibile e adattabile, progettata come ausilio universale per l'uso di posate tradizionali e altri oggetti sottili come rasoi o spazzolini da denti.",
      p2: "Caratterizzato da una forma geometrica simmetrica che consente l'uso sia con la mano destra che con la sinistra, l'oggetto presenta un volume generoso studiato per offrire comfort e sollievo immediato alla mano.",
      p3: "Realizzato interamente in ELASTO-1000, Nando garantisce flessibilità, un utilizzo igienico e una manutenzione intuitiva, risultando completamente lavabile in lavastoviglie."
    },
    research: {
      title: "Research",
      p1: "L'indagine preliminare si è concentrata sulle dinamiche della presa palmare e sui limiti ergonomici imposti dalle disabilità micromotorie. Analizzando i punti di pressione e il dolore derivante dalla chiusura forzata del pugno, la ricerca ha evidenziato la necessità di un'ampia e morbida superficie di contatto.",
      p2: "Il punto di svolta del progetto risiede nel suo approccio di design parametrico: attraverso la mappatura digitale e la scansione dei parametri antropometrici della mano, il sistema consente di generare una configurazione personalizzata e su misura per le esigenze specifiche di ciascun utente."
    },
    design: {
      title: "Design",
      p1: "La configurazione morfologica di Nando risponde a precisi vincoli funzionali attraverso linee semplici e sinuose. Il suo volume generoso facilita la presa palmare, riducendo significativamente lo sforzo muscolare richiesto, mentre una sporgenza laterale calibrata assicura la stabilità della mano durante l'uso.",
      p2: "All'interno, l'architettura di serraggio è ingegnerizzata per flettersi e adattarsi meccanicamente a posate di varie forme e spessori, bloccandole saldamente in posizione. Questa geometria complessa e adattabile è esplicitamente ottimizzata per la produzione additiva, sfruttando la stampa 3D per ottenere la cedevolezza strutturale necessaria.",
      p3: "Dal punto di vista tattile, la superficie presenta una texture granulare per massimizzare l'attrito e prevenire lo scivolamento. Sebbene la palette cromatica curata ne assicuri un'integrazione armoniosa negli ambienti domestici, la versatilità di Nando si estende anche agli spazi pubblici e di ristorazione. Agendo come un'interfaccia portatile e igienica, elimina le barriere ergonomiche delle posate standard, offrendo una soluzione discreta e indipendente che evita la necessità di trasportare utensili personali complessi o sporchi."
    },
    technical: {
      title: "Skills & Technical Insights",
      p1: "La combinazione di produzione digitale e design inclusivo può risolvere problemi complessi attraverso semplici gesti. Nando ridefinisce il concetto di accessibilità, restituendo completa autonomia e sicurezza durante i pasti a chi ha una mobilità ridotta.",
      p2: "Grazie alla produzione flessibile del modello parametrico, il dispositivo supera i limiti dei prodotti industriali di massa, offrendo una soluzione igienica, duratura e personalizzata per le esigenze uniche di ogni individuo."
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

        /* FULL-BLEED GRID ROWS */
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
        }

        .row-media:hover img {
          transform: scale(1.03);
        }

        /* COMPOSITE GRID BOX */
        .fullbleed-composite {
          width: 100%;
          background: #070707;
        }

        .media-composite-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .composite-top {
          width: 100%;
          height: clamp(380px, 55vh, 600px);
          overflow: hidden;
          background: #0d0d0d;
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
        }

        .media-composite-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
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
          padding-top: 20px;
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
          margin: 0 auto 35px;
        }

        /* DESKTOP NAVIGATOR (DOTS) */
        .desktop-dots-nav-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }

        .desktop-dot-item {
          position: relative;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #2a2a2a;
          border: 1px solid #444444;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          cursor: pointer;
        }

        .desktop-dot-item:hover {
          background: #888888;
          transform: scale(1.3);
        }

        .desktop-dot-item.active {
          background: #ffffff;
          border-color: #ffffff;
          width: 32px;
          border-radius: 20px;
        }

        .desktop-dot-item .dot-tooltip {
          position: absolute;
          bottom: 150%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: #111111;
          border: 1px solid #333333;
          padding: 6px 12px;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
          z-index: 10;
        }

        .desktop-dot-item .dot-tooltip span {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #ffffff;
        }

        .desktop-dot-item:hover .dot-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* MOBILE CAROUSEL NAVIGATOR */
        .mobile-nav-wrapper {
          display: none;
        }

        .projects-carousel-container {
          width: 100%;
          position: relative;
          margin-bottom: 35px;
        }

        .projects-scroll-strip {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 10px 4vw 20px 4vw;
          margin-left: -4vw;
          margin-right: -4vw;
          width: calc(100% + 8vw);
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }

        .projects-scroll-strip::-webkit-scrollbar {
          display: none;
        }

        .carousel-card-item {
          flex: 0 0 200px;
          scroll-snap-align: center;
          background: #0d0d0d;
          border: 1px solid #1f1f1f;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          text-align: left;
          transition: border-color 0.2s ease;
        }

        .carousel-card-item:active {
          border-color: #888888;
        }

        .carousel-card-item.active {
          border-color: #ffffff;
        }

        .card-img-wrapper {
          width: 100%;
          height: 120px;
          overflow: hidden;
          background: #000000;
          position: relative;
        }

        .card-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .card-active-badge {
          position: absolute;
          top: 6px;
          right: 6px;
          background: #ffffff;
          color: #000000;
          font-size: 0.55rem;
          font-family: monospace;
          padding: 2px 5px;
          font-weight: 700;
        }

        .card-content-wrapper {
          padding: 12px 14px;
        }

        .card-content-wrapper h4 {
          font-size: 0.9rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .card-content-wrapper p {
          font-size: 0.7rem;
          color: #777777;
          font-family: monospace;
          margin: 0;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* BUTTON PORTFOLIO */
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
          margin-top: 10px;
        }

        .cta-button:hover {
          background: #070707;
          color: #ffffff;
          border: 1px solid #ffffff;
          transform: translateY(-2px);
        }

        /* BREAKPOINT RESPONSIVE */
        @media (max-width: 860px) {
          .desktop-dots-nav-wrapper {
            display: none;
          }

          .mobile-nav-wrapper {
            display: block;
          }

          .editorial-row-fullbleed {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .editorial-row-fullbleed.row-img-right {
            flex-direction: column-reverse;
          }

          .hero-media-fullbleed {
            height: auto;
            aspect-ratio: 16 / 9;
          }

          .hero-media-fullbleed img {
            object-fit: contain;
          }

          .editorial-row-fullbleed.row-img-left .row-media,
          .editorial-row-fullbleed.row-img-right .row-media {
            width: 100%;
            height: auto;
            aspect-ratio: 16 / 9;
          }

          .editorial-row-fullbleed.row-img-left .row-media img,
          .editorial-row-fullbleed.row-img-right .row-media img {
            object-fit: contain;
          }

          .editorial-row-fullbleed.row-img-left .row-text,
          .editorial-row-fullbleed.row-img-right .row-text {
            padding: 0 4vw;
          }

          .composite-bottom {
            grid-template-columns: 1fr;
          }

          .composite-top {
            height: auto;
            aspect-ratio: 16 / 9;
          }

          .composite-top img {
            object-fit: contain;
          }

          .composite-square {
            height: auto;
            aspect-ratio: 4 / 3;
          }

          .composite-square img {
            object-fit: contain;
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
            alt="Nando hero product shot"
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

        {/* ROW 1: SOLUTION */}
        <section className="editorial-row-fullbleed row-img-left">
          <div className="row-media reveal-editorial reveal-from-left">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F3e8c60da3cb54a2fa37de2c2beb5759a"
              alt="Nando solution view"
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

        {/* ROW 2: RESEARCH */}
        <section className="editorial-row-fullbleed row-img-right">
          <div className="row-text reveal-editorial reveal-from-left">
            <h2>{t.research.title}</h2>
            <p>{t.research.p1}</p>
            <p>{t.research.p2}</p>
          </div>
          <div className="row-media reveal-editorial reveal-from-right">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F1d0debfd32fd4c86be35f6caeadf8c32"
              alt="Nando ergonomic research and palmar grasp analysis"
            />
          </div>
        </section>

        <div className="editorial-content">
          <hr className="editorial-divider" />
        </div>

        {/* ROW 3: DESIGN */}
        <section className="editorial-row-fullbleed row-img-left">
          <div className="row-media reveal-editorial reveal-from-left">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F020a08494a0c49bd8213c70c0130f2d8"
              alt="Nando design detail and internal structure"
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

        {/* COMPOSITE GRID BOX */}
        <section className="fullbleed-composite reveal-editorial reveal-from-left">
          <div className="media-composite-box">
            <div className="composite-top">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F89f7d25782454ef4b596c9e326f8b335"
                alt="Nando wide overview"
              />
            </div>
            <div className="composite-bottom">
              <div className="composite-square">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fef944a8f91a640e8be5a13154fe7f42d"
                  alt="Nando detail view 1"
                />
              </div>
              <div className="composite-square">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fdaa1cd9647f14d3d834e8a6166f9df97"
                  alt="Nando detail view 2"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="editorial-content">
          <hr className="editorial-divider" />

          {/* TECHNICAL INSIGHTS */}
          <section className="technical-section reveal-editorial reveal-from-left">
            <h2>{t.technical.title}</h2>
            <p>{t.technical.p1}</p>
            <p>{t.technical.p2}</p>
          </section>

          <hr className="editorial-divider" />

          {/* NEXT PROJECT / CTA SECTION */}
          <section className="project-cta reveal-editorial reveal-from-left">
            <h2>{t.cta.title}</h2>
            <p className="cta-subtitle">{t.cta.subtitle}</p>

            {/* DESKTOP DOTS NAVIGATION */}
            <div className="desktop-dots-nav-wrapper">
              {PROJECTS_LIST.map((proj) => {
                const isCurrent = proj.id === 'nando';
                return (
                  <a
                    key={proj.id}
                    href={proj.path}
                    className={`desktop-dot-item ${isCurrent ? 'active' : ''}`}
                    aria-label={proj.title}
                  >
                    <div className="dot-tooltip">
                      <span>{proj.title}</span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* MOBILE CAROUSEL NAVIGATION */}
            <div className="mobile-nav-wrapper">
              <div className="projects-carousel-container">
                <div className="projects-scroll-strip">
                  {PROJECTS_LIST.map((proj) => {
                    const isCurrent = proj.id === 'nando';
                    return (
                      <a
                        key={proj.id}
                        href={proj.path}
                        className={`carousel-card-item ${isCurrent ? 'active' : ''}`}
                      >
                        <div className="card-img-wrapper">
                          <img src={proj.imageUrl} alt={proj.title} />
                          {isCurrent && <span className="card-active-badge">NOW</span>}
                        </div>
                        <div className="card-content-wrapper">
                          <h4>{proj.title}</h4>
                          <p>{proj.subtitle}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <a href="/" className="cta-button">{t.cta.button}</a>
          </section>
        </div>
      </div>
    </div>
  );
}