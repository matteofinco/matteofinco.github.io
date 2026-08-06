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
    title: {
      it: 'Snake',
      en: 'Snake'
    },
    subtitle: {
      it: 'Sistema interattivo per l’allenamento hockey',
      en: 'Interactive hockey training system'
    },
    category: {
      it: 'DESIGN DI PRODOTTO SPORTIVO',
      en: 'SPORT PRODUCT DESIGN'
    },
    tools: {
      it: 'Design di prodotto / Modellazione CAD / Meccatronica / Prototipazione',
      en: 'Product Design / CAD Modelling / Mechatronics / Prototyping'
    },
    material: {
      it: 'Sensori laser / Feedback RGB / Sistema meccanico modulare',
      en: 'Laser Sensors / RGB Feedback / Modular Mechanical System'
    },
    year: '2026',
    desc: {
      it: 'Sistema di allenamento interattivo sviluppato per giocatori di hockey su ghiaccio e inline. Snake combina componenti meccanici modulari, sensori e feedback luminosi in tempo reale per creare esercizi adattivi focalizzati sul controllo del disco, velocità di reazione e agilità cognitiva.',
      en: 'Interactive training system developed for inline and ice hockey players. Snake combines modular mechanical components, sensors and real-time feedback to create adaptive exercises focused on puck control, reaction speed and cognitive agility.'
    },
    link: '/snake',
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1400&q=80'
  },

  {
    id: '02',
    slug: 'archivia',
    title: {
      it: 'Archivia',
      en: 'Archivia'
    },
    subtitle: {
      it: 'Portapenne ispirato alla memoria digitale',
      en: 'USB flash drive inspired pen holder'
    },
    category: {
      it: 'DESIGN DI PRODOTTO & PRODUZIONE INDUSTRIALE',
      en: 'PRODUCT DESIGN & INDUSTRIAL PRODUCTION'
    },
    tools: {
      it: 'Design industriale / Stampaggio a iniezione / Connessioni snap-fit',
      en: 'Industrial Design / Injection Moulding / Snap-fit Engineering'
    },
    material: {
      it: 'Polimero riciclato / Costruzione monomateriale / Assemblaggio meccanico',
      en: 'Recycled Polymer / Monomaterial Construction / Mechanical Assembly'
    },
    year: '2026',
    desc: {
      it: 'Organizzatore da scrivania sviluppato per il concorso PLEIADES con Ewikon, Arburg e Uniform. Archivia traduce la logica della memoria USB in un oggetto fisico caratterizzato da connessioni meccaniche integrate e semplicità costruttiva.',
      en: 'Desk organizer developed for the PLEIADES design competition with Ewikon, Arburg and Uniform. Archivia translates the logic of digital storage devices into a physical object assembled through integrated mechanical connections.'
    },
    link: '/archivia',
    img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1400&q=80'
  },

  {
    id: '03',
    slug: 'nando',
    title: {
      it: 'Nando',
      en: 'Nando'
    },
    subtitle: {
      it: 'Impugnatura adattiva iperplastica',
      en: 'Hyperplastic adaptive handle'
    },
    category: {
      it: 'DESIGN INCLUSIVO & DESIGN PARAMETRICO',
      en: 'INCLUSIVE DESIGN & PARAMETRIC DESIGN'
    },
    tools: {
      it: 'Design inclusivo / Ricerca ergonomica / Modellazione parametrica',
      en: 'Inclusive Design / Ergonomic Research / Parametric Modelling'
    },
    material: {
      it: 'Polimero flessibile ELASTO-1000 / Stampa 3D FDM',
      en: 'ELASTO-1000 Flexible Polymer / FDM 3D Printing'
    },
    year: '2026',
    desc: {
      it: 'Impugnatura inclusiva progettata per migliorare l’utilizzo di posate e strumenti quotidiani da parte di persone con ridotta forza nella mano. Attraverso geometrie flessibili e progettazione parametrica, Nando si adatta a diversi utenti migliorando comfort, stabilità e autonomia.',
      en: 'Inclusive handle designed to improve the use of cutlery and everyday tools for people with reduced hand strength. Through flexible geometry and parametric design, Nando adapts to different users while improving comfort, grip stability and independence.'
    },
    link: '/nando',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1400&q=80'
  },

  {
    id: '04',
    slug: 'pizzamente',
    title: {
      it: 'PizzaMente',
      en: 'PizzaMente'
    },
    subtitle: {
      it: 'Esperienza automatizzata multisensoriale della pizza',
      en: 'Automated multisensory pizza experience'
    },
    category: {
      it: 'SERVICE & SYSTEM DESIGN',
      en: 'SERVICE & SYSTEM DESIGN'
    },
    tools: {
      it: 'Service Design / UX-UI Design / System Thinking',
      en: 'Service Design / UX-UI Design / System Thinking'
    },
    material: {
      it: 'Sistema alimentare automatizzato / Interfaccia interattiva / Architettura modulare',
      en: 'Automated Food System / Interactive Interface / Modular Architecture'
    },
    year: '2026',
    desc: {
      it: 'Concept di servizio automatizzato sviluppato durante un workshop con Daint. PizzaMente ripensa il processo della pizza integrando ordinazione, preparazione, consumo e smaltimento in un unico sistema capace di trasformare l’attesa in esperienza.',
      en: 'Automated pizza service concept developed during a workshop with Daint. PizzaMente redesigns food automation by integrating ordering, preparation, consumption and disposal into a single system that transforms waiting time into engagement.'
    },
    link: '/pizzamente',
    img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=80'
  },

  {
    id: '05',
    slug: 'wafflemaker',
    title: {
      it: 'Waffle Maker',
      en: 'Waffle Maker'
    },
    subtitle: {
      it: 'Analisi e decomposizione di un prodotto',
      en: 'Product analysis and decomposition study'
    },
    category: {
      it: 'DESIGN DI BASE & ANALISI DEL PRODOTTO',
      en: 'BASIC DESIGN & PRODUCT ANALYSIS'
    },
    tools: {
      it: 'Reverse Engineering / Analisi del prodotto / Design editoriale',
      en: 'Reverse Engineering / Product Analysis / Editorial Design'
    },
    material: {
      it: 'Componenti meccanici / Sistemi termici / Linguaggio del prodotto',
      en: 'Mechanical Components / Thermal Systems / Product Language'
    },
    year: '2025',
    desc: {
      it: 'Analisi critica di un elettrodomestico attraverso la decomposizione morfologica e funzionale. Il progetto esplora il rapporto tra componenti, meccanismi, materiali e linguaggio visivo nella relazione tra utenti e oggetti quotidiani.',
      en: 'Critical analysis of a domestic appliance through morphological and functional decomposition. The project investigates how components, mechanisms, materials and visual language define the relationship between users and everyday objects.'
    },
    link: '/wafflemaker',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80'
  },

  {
    id: '06',
    slug: 'ttable',
    title: {
      it: 'T-Table',
      en: 'T-Table'
    },
    subtitle: {
      it: 'Tavolo interattivo per la consapevolezza digitale',
      en: 'Interactive table for digital awareness'
    },
    category: {
      it: 'INTERACTION DESIGN & HMI',
      en: 'INTERACTION DESIGN & HMI'
    },
    tools: {
      it: 'Interaction Design / HMI / Calm Technology',
      en: 'Interaction Design / HMI / Calm Technology'
    },
    material: {
      it: 'Touchcode Ink / Matrice LED / Sistema smart surface',
      en: 'Touchcode Ink / LED Matrix / Smart Surface System'
    },
    year: '2026',
    desc: {
      it: 'Concept di tavolo interattivo progettato per ridurre la distrazione digitale negli ambienti fast-food. T-Table utilizza tecnologie adattive per favorire l’interazione sociale e riportare attenzione all’esperienza del pasto.',
      en: 'Interactive table concept designed to reduce distracted eating in fast-food environments. T-Table uses adaptive technology to support social interaction and restore attention to the meal experience.'
    },
    link: '/ttable',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80'
  },

  {
    id: '07',
    slug: 'prop',
    title: {
      it: 'Prop',
      en: 'Prop'
    },
    subtitle: {
      it: 'Sistema open-source di stampelle stampate in 3D',
      en: 'Open-source 3D printed crutch system'
    },
    category: {
      it: 'SOCIAL DESIGN & OPEN SOURCE',
      en: 'SOCIAL DESIGN & OPEN SOURCE'
    },
    tools: {
      it: 'Design open source / Modellazione CAD / Produzione FDM',
      en: 'Open Source Design / CAD Modelling / FDM Manufacturing'
    },
    material: {
      it: 'Connettori PETG / Fissaggi in nylon / Struttura adattabile',
      en: 'PETG Connectors / Nylon Fasteners / Adaptable Structure'
    },
    year: '2026',
    desc: {
      it: 'Sistema open-source di stampelle sviluppato durante la Ánako Design Challenge con Prusa Research. Prop utilizza connettori stampati in 3D per trasformare bastoni disponibili localmente in ausili funzionali, permettendo una produzione rapida e accessibile in contesti di emergenza.',
      en: 'Open-source emergency crutch system developed during the Ánako Design Challenge with Prusa Research. Prop uses 3D printed connectors to transform locally available sticks into functional mobility aids, enabling rapid and accessible production in crisis contexts.'
    },
    link: '/prop',
    img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=80'
  }
];

const translations = {
  it: {
    sec1Title: "Matteo Finco",
    sec1Sub:
      "Product Designer. Studente presso l'Università IUAV di Venezia.",

    sec1P:
      "Mi piace capire come funzionano le cose. Ogni progetto nasce dall'osservazione del comportamento delle persone e dalla curiosità verso i meccanismi che rendono un prodotto utile, intuitivo e significativo. Per me progettare significa trasformare un problema reale in un'esperienza concreta.",

    sec2P1:
      "Lavoro passando continuamente tra ricerca, modellazione CAD, prototipazione rapida e test fisici. Credo che le idee migliori emergano quando possono essere costruite, smontate, migliorate e rimesse alla prova.",

    sec2P2:
      "Sono interessato al design industriale, ai sistemi interattivi e alla fabbricazione digitale, con particolare attenzione alla semplicità costruttiva, alla sostenibilità e alla qualità dell'esperienza d'uso.",

    whatsNextSub: "Sempre aperto a nuove collaborazioni, progetti di design industriale e sperimentazioni di fabbricazione digitale.",
    aboutBtn: "CHI SONO",
    cvBtn: "CURRICULUM VITAE",
    infoText: "Info"
  },

  en: {
    sec1Title: "Matteo Finco",
    sec1Sub:
      "Product Designer. Student at IUAV University of Venice.",

    sec1P:
      "I like understanding how things work. Every project starts by observing people and questioning the mechanisms that make a product useful, intuitive and meaningful. For me, design is the process of turning real problems into tangible experiences.",

    sec2P1:
      "My workflow moves continuously between research, CAD modelling, rapid prototyping and physical testing. I believe the best ideas emerge when they can be built, taken apart, refined and tested again.",

    sec2P2:
      "I'm particularly interested in industrial design, interactive systems and digital fabrication, with a focus on simplicity, sustainability and thoughtful user experiences.",

    whatsNextSub: "Always open to new collaborations, industrial design projects, and digital fabrication experiments.",
    aboutBtn: "ABOUT ME",
    cvBtn: "CURRICULUM VITAE",
    infoText: "About"
  }
};

export default function Index() {
  const [lang, setLang] = useState<'it' | 'en'>('it');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [showNavName, setShowNavName] = useState<boolean>(false);

  useEffect(() => {
    const intro = document.getElementById("intro-transition");
    const sticky = document.getElementById("sticky-transition");

    if (!intro || !sticky) return;

    let hasMovedToSticky = false;

    const handleWheel = (e: WheelEvent) => {
      if (hasMovedToSticky) return;

      const introBottom = intro.getBoundingClientRect().bottom;

      if (
        e.deltaY > 0 &&
        introBottom <= window.innerHeight + 80
      ) {
        e.preventDefault();

        hasMovedToSticky = true;

        sticky.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    };

    window.addEventListener(
      "wheel",
      handleWheel,
      { passive: false }
    );

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, []);

  useEffect(() => {
    const handleCustomStep = (e: CustomEvent) => {
      setActiveStep(e.detail);
    };
    window.addEventListener('set-active-project' as any, handleCustomStep);

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
      { threshold: 0.4 }
    );
    processCards.forEach((card) => processObserver.observe(card));

    return () => {
      window.removeEventListener('set-active-project' as any, handleCustomStep);
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

        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: #070707;
          color: #e5e5e5;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.8;
        }

        .editorial-portfolio {
          background-color: #070707;
          color: #e5e5e5;
          min-height: 100vh;
        }

        .reveal-editorial {
          opacity: 0;
          filter: blur(10px);
          transition: opacity 1s cubic-bezier(.22,.61,.36,1), filter 1s cubic-bezier(.22,.61,.36,1), transform 1s cubic-bezier(.22,.61,.36,1);
        }
        .reveal-editorial.reveal-from-right { transform: translateX(30px); }
        .reveal-editorial.reveal-from-left { transform: translateX(-30px); }
        .reveal-editorial.reveal-active { opacity: 1; filter: blur(0); transform: translateX(0); }

        /* FASCIA SCURA E SPATIO DEDICATO DI SEPARAZIONE */
        .section-divider-gap {
          width: 100%;
          height: 16vh;
          background-color: #070707;
          border-top: 1px solid #141414;
          border-bottom: 1px solid #141414;
          position: relative;
          z-index: 5;
        }

        .showcase-wrapper {
          position: relative;
          z-index: 2;
        }

        .whats-next-wrapper {
          width: 100%;
          background-color: #040404;
        }

        .whats-next-footer {
          min-height: 100vh;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 60px 6vw 40px;
          text-align: center;
          position: relative;
          scroll-snap-align: start;
          box-sizing: border-box;
        }

        .whats-next-footer h2 {
          font-size: clamp(3.2rem, 7.5vw, 6.5rem);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -2px;
          margin-bottom: 20px;
          line-height: 1;
        }
        
        .question-mark-styled {
          display: inline-block;
          margin-left: 0.25em;
          color: #ffffff;
        }

        .whats-next-footer p.sub-lead {
          font-size: 1.25rem;
          color: #888888;
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
          color: #666666;
        }
        .footer-contacts-list { display: flex; gap: 30px; }
        .footer-contacts-list a { color: #888888; text-decoration: none; transition: color 0.3s; }
        .footer-contacts-list a:hover { color: #ffffff; }

        @media (max-width: 1024px) {
          .section-divider-gap {
            height: 80px;
          }
          .footer-bottom-info {
            position: relative;
            bottom: 0;
            left: 0;
            right: 0;
            flex-direction: column;
            gap: 15px;
            text-align: center;
            margin-top: 40px;
          }
        }
      `}</style>

      <Header lang={lang} setLang={setLang} showName={showNavName} />
      <Hero />
      
      <div id="intro-transition">
        <IntroSection t={t} />
      </div>
      
      {/* FASCIA DI STACCO NERA TRA INTRO E STICKY OBJECT */}
      <div className="section-divider-gap" />

      <div id="sticky-transition">
        <StickyObject lang={lang} />
      </div>

      {/* FASCIA DI STACCO NERA PRIMA DI CIRCLE SHOWCASE */}
      <div className="section-divider-gap" />

      <div className="showcase-wrapper">
        <CircleShowcase steps={projectList} activeStep={activeStep} lang={lang} />
      </div>

      <div className="whats-next-wrapper">
        <footer className="whats-next-footer">
          <h2>
            WHAT&apos;S NEXT
            <span className="question-mark-styled">?</span>
          </h2>

          <p className="sub-lead">
            {t.whatsNextSub}
          </p>

          <div className="footer-actions">
            <a href="/about" className="btn-footer-link">
              {t.aboutBtn}
            </a>
            <a href="/cv" className="btn-footer-outline">
              {t.cvBtn}
            </a>
          </div>

          <div className="footer-bottom-info">
            <div>2026 MATTEO FINCO // PRODUCT DESIGN &amp; MAKER</div>
            <div className="footer-contacts-list">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="/about">{t.infoText}</a>
              <a href="/cv">CV</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}