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
    // Observer mostrare nome nell'header solo quando si esce dalla Hero
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

    // Observer Animazioni d'Ingresso
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

    // Observer Schede Progetti
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
          scroll-padding-top: 64px;
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

        /* SEZIONE FINALE WHAT'S NEXT ISOLATA A 100VH */
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

      {/* HEADER BAR */}
      <Header lang={lang} setLang={setLang} showName={showNavName} />
      
      {/* HERO SECTION REVERTITA */}
      <Hero />

      {/* SEZIONE PRESENTAZIONE (IMMAGINI A FILO BORDO) */}
      <IntroSection t={translations[lang]} />

      {/* STICKY SHOE (BACKGROUND FISSO + SCHEDE CHE SCORRONO) */}
      <StickyObject />

      {/* SHOWCASE CERCHIO CON MAGNETE SUI PROGETTI */}
      <CircleShowcase steps={projectList} activeStep={activeStep} />

      {/* WHAT'S NEXT ISOLATO A TUTTO SCHERMO */}
      <div className="whats-next-wrapper">
        <footer className="whats-next-footer">
          <h2>
            WHAT&apos;S NEXT?
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