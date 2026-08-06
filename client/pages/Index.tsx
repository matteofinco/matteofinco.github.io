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
    subtitle: 'Modulo di Allenamento Interattivo per Hockey',
    category: 'SPORTS & MECHATRONIC DESIGN',
    tools: 'CNC Milling / Stampa 3D / Sensori Laser & PCB',
    material: 'Alluminio Anodizzato & Nylon PA6',
    year: '2026',
    desc: 'Dispositivo cinetico e modulare per l\'allenamento nell\'hockey su ghiaccio e inline (presentato al Lagazuoi WIMA 2026). Combina aste estensibili, sensori laser e LED RGB guidati da un\'interfaccia software per lo sviluppo dell\'agilità e del controllo disco.',
    link: '/snake',
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: '02',
    slug: 'archivia',
    title: 'Archivia',
    subtitle: 'Portapenne ad Iniezione Ispirato alle Chiavette USB',
    category: 'PRODUCT DESIGN & INJECTION MOLDING',
    tools: 'CAD Parametrico / Modellazione ad Iniezione',
    material: 'Poliammide Strutturale Riciclata',
    year: '2026',
    desc: 'Organizzatore da scrivania concettualizzato per il concorso PLEIADES con Ewikon, Arburg e Uniform. Crea un parallelo tra archiviazione digitale e analogica, composto da 3 parti assemblate con incastri meccanici senza viti né colle.',
    link: '/archivia',
    img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: '03',
    slug: 'nando',
    title: 'Nando',
    subtitle: 'Impugnatura Iperplastica per Posate e Utensili',
    category: 'INCLUSIVE DESIGN & 3D PRINTING',
    tools: 'Parametric Design / Scansione 3D / Stampa FDM',
    material: 'ELASTO-1000 Flessibile',
    year: '2026',
    desc: 'Ausilio ergonomico universale progettato per persone con artrosi o ridotta forza manuale. Grazie a una geometria interna adattativa e al materiale ELASTO-1000, compensa i deficit di presa garantendo lavabilità in lavastoviglie e piena autonomia a tavola.',
    link: '/nando',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: '04',
    slug: 'pizzamente',
    title: 'PizzaMente',
    subtitle: 'Micro-Stazione Automatizzata e Multisensoriale',
    category: 'SERVICE & SYSTEM DESIGN',
    tools: 'UX/UI Design / Figma / Progettazione Sistemica',
    material: 'Cartone Kraft Riciclato & Modulo CMF',
    year: '2026',
    desc: 'Riprogettazione dei distributori automatici di pizza in collaborazione con Daint. Il sistema integra l\'intero ciclo di consumo (produzione, consumo, smaltimento) offrendo minigiochi interattivi sull\'interfaccia touch per trasformare i tempi di cottura in intrattenimento.',
    link: '/pizzamente',
    img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: '05',
    slug: 'wafflemaker',
    title: 'Waffle Maker',
    subtitle: 'Analisi Morfologica e Decomposizione Funzionale',
    category: 'REVERSE ENGINEERING & CRITICAL DESIGN',
    tools: 'Reverse Engineering / Modellazione 3D / Visual Layout',
    material: 'Componenti Meccanici & Interfacce Termiche',
    year: '2025',
    desc: 'Studio di Basic Design basato sulla scomposizione fisica e funzionale di un piccolo elettrodomestico. Analisi critica dei meccanismi di blocco, dei flussi di calore, dell\'affordance visiva e dell\'ergonomia di sicurezza domestica.',
    link: '/wafflemaker',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: '06',
    slug: 'ttable',
    title: 'T-Table',
    subtitle: 'Tavolo Interattivo con Tecnologia Calm Tech',
    category: 'HMI & INTERACTION DESIGN',
    tools: 'Touchcode Ink / Matrice LED Low-Density / Sensori Capacitivi',
    material: 'Vetro Opaco Antiriflesso & Cartone Goffrato',
    year: '2026',
    desc: 'Tavolo smart per la ristorazione veloce ideato per contrastare l\'amnesia alimentare da schermi. Utilizza l\'inchiostro conduttivo Touchcode per rilevare il vassoio e disattivare l\'interfaccia luminosa durante il pasto, riconnettendo gli utenti alla convivialità.',
    link: '/ttable',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: '07',
    slug: 'prop',
    title: 'Prop',
    subtitle: 'Stampella di Emergenza Open-Source in 3D',
    category: 'SOLIDARITY & OPEN-SOURCE DESIGN',
    tools: 'Modellazione FDM / Ánako Design Challenge / Prusa Workshop',
    material: 'PETG Arancione ad Alta Visibilità & Fascette Nylon',
    year: '2026',
    desc: 'Kit di connettori stampabili in 3D sviluppato con Prusa Research per campi profughi e contesti di crisi. Permette di trasformare qualsiasi bastone o ramo di recupero (Ø 20-40mm) in una stampella ascellare funzionale senza l\'uso di utensili complessi.',
    link: '/prop',
    img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=80'
  }
];

const translations = {
  it: {
    sec1Title: "Matteo Finco",
    sec1Sub: "Product Designer & Maker basato in Veneto, studente all'Università Iuav di Venezia.",
    sec1P: "Progetto oggetti fisici e sistemi interattivi unendo il rigore della modellazione CAD alla concretezza della fabbricazione digitale. Ogni concept è guidato dall'analisi dei bisogni reali, dal prototyping rapido e dal controllo diretto dei materiali.",
    sec2P1: "La cultura del 'Making' mi permette di testare istantaneamente le idee: dal primo modello concettuale fino alla prototipazione funzionale in scala 1:1.",
    sec2P2: "Lavoro con un approccio incentrato sulla sostenibilità dei componenti, sulla facilità di disassemblaggio e sulla chiarezza dei volumi."
  },
  en: {
    sec1Title: "Matteo Finco",
    sec1Sub: "Product Designer & Maker based in Veneto, studying at Iuav University of Venice.",
    sec1P: "I design physical products and interactive systems combining CAD precision with hands-on digital fabrication. Every concept is driven by user needs, rapid prototyping, and direct material control.",
    sec2P1: "The 'Maker' mindset enables immediate prototyping: from initial mockups to 1:1 scale functional validation.",
    sec2P2: "My workflow focuses on component sustainability, ease of disassembly, and formal clarity."
  }
};

export default function Index() {
  const [lang, setLang] = useState<'it' | 'en'>('it');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [showNavName, setShowNavName] = useState<boolean>(false);

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
          scroll-snap-type: y proximity;
          scroll-padding-top: 70px;
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

        .whats-next-wrapper {
          margin-top: 20vh;
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
      <IntroSection t={translations[lang]} />
      <StickyObject />
      <CircleShowcase steps={projectList} activeStep={activeStep} />

      <div className="whats-next-wrapper">
        <footer className="whats-next-footer">
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
    </div>
  );
}