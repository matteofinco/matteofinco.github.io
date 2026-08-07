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
    title: { it: 'Snake', en: 'Snake' },
    subtitle: {
      it: 'Sistema interattivo per l’allenamento nell’hockey',
      en: 'Interactive hockey training system'
    },
    year: '2026',
    discipline: {
      it: 'Sports Product Design',
      en: 'Sports Product Design'
    },
    context: {
      it: 'Progetto Accademico (IUAV)',
      en: 'Academic Project (IUAV)'
    },
    focus: {
      it: 'Interactive Training System',
      en: 'Interactive Training System'
    },
    // Compatibilità con strutture precedenti
    category: { it: 'SPORTS PRODUCT', en: 'SPORTS PRODUCT' },
    tools: { it: 'Progetto Accademico (IUAV)', en: 'Academic Project (IUAV)' },
    material: { it: 'Interactive Training System', en: 'Interactive Training System' },
    desc: {
      it: 'Snake è un sistema di allenamento interattivo pensato per hockey su ghiaccio e inline. Sensori, feedback luminosi e moduli riconfigurabili permettono di creare esercizi che allenano controllo del disco, tempi di reazione e capacità decisionale.',
      en: 'Snake is an interactive training system for ice and inline hockey. Sensors, light feedback and configurable modules create exercises that improve puck control, reaction time and decision-making.'
    },
    link: '/snake',
    img: 'https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fe5a19d0f69c144558eb6c865747a9536'
  },
  {
    id: '02',
    slug: 'archivia',
    title: { it: 'Archivia', en: 'Archivia' },
    subtitle: {
      it: 'Portapenne ispirato a una chiavetta USB',
      en: 'USB flash drive inspired pen holder'
    },
    year: '2026',
    discipline: {
      it: 'Product Design',
      en: 'Product Design'
    },
    context: {
      it: 'Concorso PLEIADES (Ewikon, Arburg, Uniform)',
      en: 'PLEIADES Competition (Ewikon, Arburg, Uniform)'
    },
    focus: {
      it: 'Injection Moulding & Industrial Production',
      en: 'Injection Moulding & Industrial Production'
    },
    category: { it: 'PRODUCT DESIGN', en: 'PRODUCT DESIGN' },
    tools: { it: 'Concorso PLEIADES', en: 'PLEIADES Competition' },
    material: { it: 'Injection Moulding & Desk Storage', en: 'Injection Moulding & Desk Storage' },
    desc: {
      it: 'Portapenne sviluppato per il concorso PLEIADES con Ewikon, Arburg e Uniform. Il progetto è ispirato a una memoria USB trasformandone il principio di funzionamento in un oggetto da scrivania semplice da assemblare e produrre.',
      en: 'Desk organiser developed for the PLEIADES competition with Ewikon, Arburg and Uniform. The project reinterprets the USB flash drive, translating its working principle into a simple and efficient desk object.'
    },
    link: '/archivia',
    img: 'https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fb8ef76dbdd4f4619959ec6122f1096c8'
  },
  {
    id: '03',
    slug: 'nando',
    title: { it: 'Nando', en: 'Nando' },
    subtitle: {
      it: 'Impugnatura adattiva iperplastica',
      en: 'Hyperplastic adaptive handle'
    },
    year: '2026',
    discipline: {
      it: 'Inclusive Design',
      en: 'Inclusive Design'
    },
    context: {
      it: 'Progetto Accademico (IUAV)',
      en: 'Academic Project (IUAV)'
    },
    focus: {
      it: 'Ergonomics & Parametric Adaptive Grip',
      en: 'Ergonomics & Parametric Adaptive Grip'
    },
    category: { it: 'INCLUSIVE DESIGN', en: 'INCLUSIVE DESIGN' },
    tools: { it: 'Progetto Accademico (IUAV)', en: 'Academic Project (IUAV)' },
    material: { it: 'Ergonomics & Parametric Design', en: 'Ergonomics & Parametric Design' },
    desc: {
      it: 'Impugnatura adattiva progettata per facilitare l’utilizzo di posate e strumenti quotidiani da parte di persone con ridotta forza nella mano. La geometria parametrica permette di adattare il prodotto a esigenze differenti.',
      en: 'Adaptive handle designed to make cutlery and everyday tools easier to use for people with reduced hand strength. Its parametric geometry allows the product to be adapted to different users.'
    },
    link: '/nando',
    img: 'https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5cdc7719da0c413d9e444dfccaa36d3a'
  },
  {
    id: '04',
    slug: 'pizzamente',
    title: { it: 'PizzaMente', en: 'PizzaMente' },
    subtitle: {
      it: 'Sviluppo distributore automatico di pizza',
      en: 'Development of an automatic pizza vending machine'
    },
    year: '2026',
    discipline: {
      it: 'Service Design',
      en: 'Service Design'
    },
    context: {
      it: 'Workshop con Daint',
      en: 'Workshop with Daint'
    },
    focus: {
      it: 'Automated Dining & Customer Experience',
      en: 'Automated Dining & Customer Experience'
    },
    category: { it: 'SERVICE DESIGN', en: 'SERVICE DESIGN' },
    tools: { it: 'Workshop con Daint', en: 'Workshop with Daint' },
    material: { it: 'Automated Dining & Customer Experience', en: 'Automated Dining & Customer Experience' },
    desc: {
      it: 'Concept sviluppato durante un workshop con Daint che ripensa l’esperienza della pizza integrando ordinazione, preparazione, consumo e smaltimento in un unico sistema.',
      en: 'Concept developed during a workshop with Daint that redesigns the pizza experience by integrating ordering, preparation, dining and disposal into one coherent system.'
    },
    link: '/pizzamente',
    img: 'https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fe186b1b1b013459f94a05a22f6ea48e5'
  },
  {
    id: '05',
    slug: 'wafflemaker',
    title: { it: 'Waffle Maker', en: 'Waffle Maker' },
    subtitle: {
      it: 'Analisi di un prodotto',
      en: 'Product analysis'
    },
    year: '2025',
    discipline: {
      it: 'Product Analysis',
      en: 'Product Analysis'
    },
    context: {
      it: 'Progetto Accademico (IUAV)',
      en: 'Academic Project (IUAV)'
    },
    focus: {
      it: 'Reverse Engineering & Disassembly Study',
      en: 'Reverse Engineering & Disassembly Study'
    },
    category: { it: 'PRODUCT ANALYSIS', en: 'PRODUCT ANALYSIS' },
    tools: { it: 'Progetto Accademico (IUAV)', en: 'Academic Project (IUAV)' },
    material: { it: 'Reverse Engineering & Component Study', en: 'Reverse Engineering & Component Study' },
    desc: {
      it: 'Analisi di un piccolo elettrodomestico attraverso smontaggio, studio dei componenti e valutazione delle scelte costruttive, funzionali e formali.',
      en: 'Analysis of a household appliance through disassembly, component study and evaluation of its construction, functionality and formal design.'
    },
    link: '/wafflemaker',
    img: 'https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F3a822d198e0a451c859170a4c51e8367'
  },
  {
    id: '06',
    slug: 'ttable',
    title: { it: 'T-Table', en: 'T-Table' },
    subtitle: {
      it: 'Tavolo interattivo per la consapevolezza alimentare',
      en: 'Interactive table focused on food awareness'
    },
    year: '2026',
    discipline: {
      it: 'Interaction Design',
      en: 'Interaction Design'
    },
    context: {
      it: 'Progetto Accademico (IUAV)',
      en: 'Academic Project (IUAV)'
    },
    focus: {
      it: 'Human Behaviour & Calm Technology',
      en: 'Human Behaviour & Calm Technology'
    },
    category: { it: 'INTERACTION DESIGN', en: 'INTERACTION DESIGN' },
    tools: { it: 'Progetto Accademico (IUAV)', en: 'Academic Project (IUAV)' },
    material: { it: 'Human Behaviour & Calm Tech', en: 'Human Behaviour & Calm Tech' },
    desc: {
      it: 'Concept di tavolo interattivo progettato per ridurre la distrazione digitale durante il pasto nel fast food. Il sistema riconosce automaticamente l’arrivo del cibo e modifica il comportamento dell’interfaccia per riportare l’attenzione sulle persone e sulla conversazione.',
      en: 'Interactive table concept designed to reduce digital distraction during meals at the fast-food restaurant. The system detects when food is served and adapts its interface to encourage conversation and focus on the dining experience.'
    },
    link: '/ttable',
    img: 'https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F8c7e5ac2dbcc429b8c3808887abfb51a'
  },
  {
    id: '07',
    slug: 'prop',
    title: { it: 'Prop', en: 'Prop' },
    subtitle: {
      it: 'Sistema open-source di stampelle stampate in 3D',
      en: 'Open-source 3D printed crutch system'
    },
    year: '2026',
    discipline: {
      it: 'Social Design',
      en: 'Social Design'
    },
    context: {
      it: 'Ánako Design Challenge (con Prusa Research)',
      en: 'Ánako Design Challenge (with Prusa Research)'
    },
    focus: {
      it: 'Open-Source Emergency Mobility Aid',
      en: 'Open-Source Emergency Mobility Aid'
    },
    category: { it: 'SOCIAL DESIGN', en: 'SOCIAL DESIGN' },
    tools: { it: 'Ánako Design Challenge', en: 'Ánako Design Challenge' },
    material: { it: 'Open-Source Emergency Aid', en: 'Open-Source Emergency Aid' },
    desc: {
      it: 'Sistema open-source sviluppato durante la Ánako Design Challenge con Prusa Research. Attraverso componenti stampati in 3D permette di realizzare stampelle utilizzando materiali facilmente reperibili sul territorio.',
      en: 'Open-source mobility aid developed during the Ánako Design Challenge with Prusa Research. 3D-printed components make it possible to build crutches using locally available materials.'
    },
    link: '/prop',
    img: 'https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5ea37818589140f49395200bfbdbbb41'
  }
];

const translations = {
  it: {
    sec1Title: "Matteo Finco",
    sec1Sub: "Product Designer. Studente presso l'Università IUAV di Venezia.",
    sec1P: "Mi piace capire come funzionano le cose. Davanti a un oggetto mi interessa capire perché è stato progettato in quel modo, quali vincoli hanno guidato le scelte e quali compromessi si nascondono dietro una forma apparentemente semplice. È questo modo di osservare che mi ha portato al product design.",
    sec2P1: "Il mio modo di progettare alterna continuamente ricerca, modellazione 3D, prototipazione e test. Preferisco verificare le idee costruendole: ogni prototipo diventa un'occasione per mettere in discussione le scelte fatte, correggerle e migliorare il progetto.",
    sec2P2: "Sono interessato al design industriale, ai sistemi interattivi e ai processi di fabbricazione digitale. Cerco di sviluppare oggetti che siano semplici da comprendere, coerenti da costruire e piacevoli da utilizzare, senza perdere di vista i vincoli produttivi e l'impatto delle scelte progettuali.",
    whatsNextSub: "Sempre aperto a nuove collaborazioni e progetti.",
    aboutBtn: "ABOUT ME",
    cvBtn: "CURRICULUM VITAE",
    infoText: "Info",
    projectsBadge: "",
    projectsTitle: "PROJECTS",
    projectsSub: ""
  },
  en: {
    sec1Title: "Matteo Finco",
    sec1Sub: "Product Designer. Student at IUAV University of Venice.",
    sec1P: "I like understanding how things work. I'm interested in why it was designed that way, which constraints shaped its development, and what compromises lie behind an apparently simple form. This way of observing the world is what led me to product design.",
    sec2P1: "My design process moves constantly between research, 3D modelling, prototyping and testing. I prefer to validate ideas by building them. Every prototype is an opportunity to question previous decisions, refine them and improve the final outcome.",
    sec2P2: "I'm particularly interested in product design, interactive systems and digital fabrication. I aim to create products that are easy to understand, coherent to manufacture and enjoyable to use, while always considering production constraints and the impact of design decisions.",
    whatsNextSub: "Always open to new collaborations & projects.",
    aboutBtn: "ABOUT ME",
    cvBtn: "CURRICULUM VITAE",
    infoText: "About",
    projectsBadge: "",
    projectsTitle: "PROJECTS",
    projectsSub: ""
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
      if (window.innerWidth < 1024) return;
      if (hasMovedToSticky) return;

      const introBottom = intro.getBoundingClientRect().bottom;

      if (e.deltaY > 0 && introBottom <= window.innerHeight + 80) {
        e.preventDefault();
        hasMovedToSticky = true;
        sticky.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
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

  const handleLanguageChange = (newLang: 'it' | 'en') => {
    setLang(newLang);
  };

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
          scroll-snap-type: y proximity;
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

        .section-divider-gap {
          width: 100%;
          height: 16vh;
          background-color: #070707;
          border-top: 1px solid #141414;
          border-bottom: 1px solid #141414;
          position: relative;
          z-index: 5;
        }

        /* HEADER SEZIONE PROGETTI */
        .projects-header-section {
          padding: 100px 6vw 40px;
          text-align: center;
          position: relative;
          z-index: 4;
        }

        .projects-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 3px;
          color: #888888;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .projects-section-title {
          font-size: clamp(2.5rem, 7vw, 5.5rem);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -2px;
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 16px;
        }

        .projects-section-sub {
          font-size: 1.15rem;
          color: #888888;
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* CAROSELLO PROGETTI CON EFFETTO CALAMITA / MAGNET SNAP */
        .showcase-wrapper {
          position: relative;
          z-index: 2;
          scroll-snap-type: y mandatory;
        }

        .showcase-wrapper .process-card,
        .showcase-wrapper .circle-showcase-container {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }

        .whats-next-wrapper {
          width: 100%;
          background-color: #040404;
        }

        .whats-next-section {
          padding: 120px 6vw 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          box-sizing: border-box;
        }

        .whats-next-section h2 {
          font-size: clamp(2rem, 6.5vw, 6.2rem);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -2px;
          margin-bottom: 20px;
          line-height: 1;
          white-space: nowrap;
        }
        
        .question-mark-styled {
          display: inline-block;
          margin-left: 0.25em;
          color: #ffffff;
        }

        .whats-next-section p.sub-lead {
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

        /* REGOLAZIONI MOBILE / SMARTPHONE */
        @media (max-width: 1024px) {
          #hero-section img,
          .hero img,
          .hero-image,
          #intro-transition img:first-of-type,
          .intro-section img:first-of-type {
            display: none !important;
          }

          .showcase-wrapper p:not(.subtitle):not(.category),
          .circle-showcase p,
          .project-card-desc {
            display: none !important;
          }
          
          .projects-header-section { padding: 60px 6vw 20px; }
          .projects-section-title { font-size: clamp(2rem, 8vw, 3.5rem); }
          .projects-section-sub { font-size: 1rem; }

          .section-divider-gap { height: 60px; }
          .whats-next-section { padding: 60px 6vw 50px; }
          .whats-next-section h2 { font-size: clamp(1.8rem, 7.5vw, 3.8rem); }
          .whats-next-section p.sub-lead { font-size: 1.05rem; margin-bottom: 35px; }
          .footer-actions { width: 100%; flex-direction: column; gap: 12px; }
          .btn-footer-link, .btn-footer-outline { text-align: center; width: 100%; padding: 14px 20px; }
        }
      `}</style>

      {/* HEADER */}
      <Header
        currentLang={lang}
        onLanguageChange={handleLanguageChange}
        showName={showNavName}
      />

      <Hero />

      <div id="intro-transition">
        <IntroSection t={t} />
      </div>

      <div className="section-divider-gap" />

      <div id="sticky-transition">
        <StickyObject lang={lang} />
      </div>

      <div className="section-divider-gap" />

      {/* TITOLO PROJECTS SEZIONE PROGETTI */}
      <div className="projects-header-section reveal-editorial">
        {t.projectsBadge && <span className="projects-badge">{t.projectsBadge}</span>}
        <h2 className="projects-section-title">{t.projectsTitle}</h2>
        {t.projectsSub && <p className="projects-section-sub">{t.projectsSub}</p>}
      </div>

    {/* CIRCLE SHOWCASE CON EFFETTO CALAMITA */}
<div className="showcase-wrapper" id="projects">
  <CircleShowcase steps={projectList} activeStep={activeStep} lang={lang} />
</div>

      {/* SEZIONE CALL-TO-ACTION (WHAT'S NEXT) */}
      <div className="whats-next-wrapper">
        <section className="whats-next-section">
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
        </section>
      </div>
    </div>
  );
}