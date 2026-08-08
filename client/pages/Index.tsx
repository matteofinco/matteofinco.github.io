import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { IntroSection } from '../components/IntroSection';
import { StickyObject } from '../components/StickyObject';
import { CircleShowcase } from '../components/CircleShowcase';

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
  const [showNavName, setShowNavName] = useState<boolean>(false);

  // Auto-scroll alla sezione #projects se la pagina viene caricata con l'hash nell'URL
  useEffect(() => {
    if (window.location.hash === '#projects') {
      setTimeout(() => {
        const el = document.getElementById('projects');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, []);

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
    const heroEl = document.getElementById('hero-section');
    if (heroEl) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          setShowNavName(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      heroObserver.observe(heroEl);

      return () => heroObserver.disconnect();
    }
  }, []);

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

    return () => revealObserver.disconnect();
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
          scroll-snap-align: start;
          scroll-snap-stop: always;
          scroll-margin-top: 60px;
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
      <div 
        
        className="projects-header-section reveal-editorial"
      >
        {t.projectsBadge && <span className="projects-badge">{t.projectsBadge}</span>}
        <h2 className="projects-section-title">{t.projectsTitle}</h2>
        {t.projectsSub && <p className="projects-section-sub">{t.projectsSub}</p>}
      </div>

      {/* CIRCLE SHOWCASE CON EFFETTO CALAMITA */}
      <div
      

        className="showcase-wrapper" >
        <CircleShowcase lang={lang} />
      
          
      </div>

      {/* SEZIONE CALL-TO-ACTION (WHAT'S NEXT) */}
      <div className="whats-next-wrapper" id="projects">
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