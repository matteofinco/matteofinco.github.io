import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';

// Dizionario dei testi per Italiano e Inglese
const translations = {
  it: {
    heroTitle: "MATTEO FINCO",
    heroSub: "Product Designer\nbased in Italy\n\n",
    curiosityTitle: "I like understanding how things work.",
    curiosityText1: "Quando guardo un oggetto, il mio primo impulso non è chiedermi se sia bello o brutto, ma perché sia stato progettato in quel modo. Come è stato costruito, quali vincoli hanno guidato le decisioni e quali compromessi si celano dietro una forma apparentemente semplice.",
    curiosityText2: "Per me, la qualità di un prodotto risiede nella chiarezza della sua logica. Questo approccio mi ha portato al product design, dove curiosità, competenze tecniche e creatività lavorano costantemente insieme.",
    methodTitle: "Il design come metodo",
    methodText1: "Studio Product Design all'Università Iuav di Venezia, sede di Vicenza. In questo percorso ho trasformato un interesse intuitivo in un metodo di lavoro, concentrandomi sul punto in cui un'idea incontra la sua fattibilità: materiali, processi e limiti produttivi.",
    methodText2: "Non vedo il design come una questione di stile. Mi interessa costruire oggetti e sistemi che abbiano una logica chiara e che semplifichino l'interazione quotidiana.",
    learningTitle: "Imparare da ciò che esiste",
    learningText1: "Per questo motivo, dedico molto tempo all'osservazione dei prodotti esistenti: smontarli, analizzarne la struttura interna, capire come sono fatti e individuarne i limiti è spesso il mio punto di partenza. Comprendere ciò che già esiste è, per me, il modo migliore per immaginare ciò che ancora non c'è.",
    digitalTitle: "Prototipazione Digitale e Fisica",
    digitalText1: "Considero gli strumenti digitali e le pratiche di making come estensioni dello stesso processo di progettazione. Lo spazio digitale è un ambiente in cui testare le regole di un sistema, non solo un palco per la rappresentazione.",
    digitalText2: "Accanto a questo, mantengo un rapporto costante con i materiali fisici. Passo continuamente dalla progettazione digitale alla prototipazione fisica, dove la stampa 3D, la lavorazione meccanica e la falegnameria diventano strumenti per testare e mettere in discussione le idee iniziali.",
    beyondTitle: "Oltre il Design",
    beyondText1: "Fuori dall'università ho sviluppato altre competenze in contesti non strettamente legati al design. La mia esperienza nello scoutismo, da ragazzo a capo, mi ha insegnato a lavorare in un team strutturato ma flessibile, ad assumermi responsabilità e a coordinare persone con ruoli diversi verso un obiettivo comune.",
    beyondText2: "Le esperienze di volontariato, tra cui il lavoro al Cinema Teatro Lux che mi ha portato anche vicino alla Mostra del Cinema di Venezia, hanno ampliato la mia prospettiva e la mia capacità di leggere contesti complessi.",
    collaborationTitle: "Il Design come Collaborazione",
    collaborationText1: "Nel design vedo la stessa dinamica: le soluzioni efficaci sono raramente individuali. Nascono dal confronto e dalla capacità di unire competenze diverse mantenendo una visione d'insieme chiara del sistema.",
    collaborationText2: "Oggi continuo a vedere il design come un modo per comprendere il mondo prima di cambiarlo. Ogni progetto è un'occasione per imparare qualcosa di nuovo e trasformare un problema complesso in una soluzione chiara.",
    ctaTitle: "WHAT'S NEXT?",
    ctaSub: "Per ulteriori informazioni sul mio percorso, competenze e dettagli tecnici, consulta il mio CV completo.",
    ctaButton: "CURRICULUM VITAE"
  },
  en: {
    heroTitle: "MATTEO FINCO",
    heroSub: "Product Designer\nbased in Italy\n\n",
    curiosityTitle: "I like understanding how things work.",
    curiosityText1: "When I look at an object, my first impulse is not to ask whether it is beautiful or not, but why it was designed that way. How it was built, which constraints shaped the decisions, and which compromises are hidden behind an apparently simple form.",
    curiosityText2: "For me, the quality of a product lies in the clarity of its logic. This approach led me to product design, where curiosity, technical skills, and creativity constantly work together.",
    methodTitle: "Design as a Method",
    methodText1: "I am currently studying Product Design at IUAV University of Venice, at the Vicenza campus. In this path, I have turned an intuitive interest into a working method, focusing on the point where an idea meets its feasibility: materials, processes, and production limits.",
    methodText2: "I do not see design as a matter of style. I am interested in building objects and systems that have clear logic and that simplify everyday interaction.",
    learningTitle: "Learning From What Exists",
    learningText1: "For this reason, I spend a lot of time observing existing products: taking them apart, analysing their internal structure, understanding how they are made, and identifying their limits is often my starting point. Understanding what already exists is, for me, the best way to imagine what does not yet exist.",
    digitalTitle: "Digital & Physical Prototyping",
    digitalText1: "I consider digital tools and making practices as extensions of the same design process. The digital space is an environment where I test the rules of a system, not just a stage for representation.",
    digitalText2: "Alongside this, I maintain a constant relationship with physical materials. I move continuously from digital design to physical prototyping, where 3D printing, mechanical processing, and woodworking become tools to test and question initial ideas.",
    beyondTitle: "Beyond Design",
    beyondText1: "Outside university, I have developed other skills in contexts not strictly related to design. My experience in scouting, from being a member to becoming a leader, taught me how to work in a structured but flexible team, how to take responsibility, and how to coordinate people with different roles towards a shared goal.",
    beyondText2: "Volunteering experiences, including working at the Cinema Teatro Lux, which also brought me closer to the Venice Film Festival, have broadened my perspective and my ability to read complex contexts.",
    collaborationTitle: "Design as Collaboration",
    collaborationText1: "In design, I see the same dynamic: effective solutions are rarely individual. They come from discussion and from the ability to combine different skills while keeping a clear overall vision of the system.",
    collaborationText2: "Today, I still see design as a way to understand the world before changing it. Every project is a chance to learn something new and to turn a complex problem into a clear solution.",
    ctaTitle: "WHAT'S NEXT?",
    ctaSub: "For additional information about my background, technical skills, and experience, view my CV.",
    ctaButton: "CURRICULUM VITAE"
  }
};

export default function About() {
  const [lang, setLang] = useState<'it' | 'en'>(() => {
    const savedLang = localStorage.getItem('app_lang');
    if (savedLang === 'it' || savedLang === 'en') return savedLang;
    const docLang = document.documentElement.lang;
    if (docLang === 'en') return 'en';
    return 'it';
  });

  useEffect(() => {
    const handleLanguageChange = (e: CustomEvent) => {
      if (e.detail && (e.detail === 'it' || e.detail === 'en')) {
        setLang(e.detail);
        localStorage.setItem('app_lang', e.detail);
      }
    };

    window.addEventListener('languagechange-custom' as any, handleLanguageChange);
    return () => {
      window.removeEventListener('languagechange-custom' as any, handleLanguageChange);
    };
  }, []);

  const toggleLanguage = (newLang: 'it' | 'en') => {
    setLang(newLang);
    localStorage.setItem('app_lang', newLang);
    document.documentElement.lang = newLang;
    window.dispatchEvent(new CustomEvent('languagechange-custom', { detail: newLang }));
  };

  const t = translations[lang];

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
      { threshold: 0.2 }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, [lang]);

  return (
    <div className="about-page editorial-portfolio bg-[#070707] text-[#e5e5e5] min-h-screen overflow-x-hidden">
      <Header 
        showBackToDesigns={false} 
        currentLang={lang} 
        onLanguageChange={toggleLanguage}
        setLang={toggleLanguage} 
      />

      <style>{`
        .about-page { padding-top: 80px; }
        .about-hero {
          min-height: 75vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 6vw;
          border-bottom: 1px solid #1a1a1a;
          position: relative;
          width: 100%;
        }
        .about-hero > div {
          width: 100%;
          max-width: 1200px;
        }
        .about-hero h1 {
          font-size: clamp(4rem, 9vw, 9rem);
          font-weight: 900;
          letter-spacing: -0.05em;
          line-height: 0.9;
          color: #ffffff;
          margin-bottom: 40px;
          text-align: left;
        }
        .about-hero p {
          white-space: pre-line;
          font-size: clamp(1.3rem, 2vw, 2rem);
          color: #888;
          line-height: 1.5;
          max-width: 600px;
          text-align: left;
        }
        
        /* Centratura assoluta rispetto alla larghezza dello schermo */
        .hero-arrow {
          position: absolute;
          bottom: 35px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0.6;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .hero-arrow svg {
          width: 28px;
          height: 28px;
          stroke: #ffffff;
        }

        .about-fullbleed-wrapper { width: 100%; padding: 100px 0; display: flex; flex-direction: column; gap: 120px; box-sizing: border-box; }
        .about-row { display: grid; grid-template-columns: 1fr 1fr; align-items: center; width: 100%; min-height: 70vh; }
        .about-row.media-left .about-media { width: 100%; height: 620px; padding-left: 0; }
        .about-row.media-left .about-text { padding: 0 8vw 0 6vw; }
        .about-row.media-right .about-media { width: 100%; height: 620px; padding-right: 0; }
        .about-row.media-right .about-text { padding: 0 6vw 0 8vw; }
        .about-media img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(20%); transition: filter 0.8s ease, transform 0.8s ease; display: block; }
        .about-media:hover img { filter: grayscale(0%); transform: scale(1.01); }
        .about-text h2 { font-size: clamp(2.2rem, 3.8vw, 3.5rem); font-weight: 800; line-height: 1.15; margin-bottom: 25px; color: #ffffff; }
        .about-text p { color: #aaaaaa; font-size: 1.12rem; line-height: 1.85; max-width: 560px; margin-bottom: 20px; }
        .about-text p:last-child { margin-bottom: 0; }
        
        .reveal-editorial { opacity: 0; filter: blur(10px); transition: opacity 1.1s cubic-bezier(.22,.61,.36,1), filter 1.1s cubic-bezier(.22,.61,.36,1), transform 1.1s cubic-bezier(.22,.61,.36,1); }
        .reveal-editorial.reveal-from-right { transform: translateX(35px); }
        .reveal-editorial.reveal-from-left { transform: translateX(-35px); }
        .reveal-editorial.reveal-active { opacity: 1; filter: blur(0); transform: translateX(0); }

        .about-cta-section { width: 100%; padding: 100px 6vw; text-align: center; border-top: 1px solid #1a1a1a; margin-top: 40px; }
        .about-cta-section h2 { font-size: clamp(2.2rem, 4vw, 3.2rem); font-weight: 800; color: #ffffff; margin-bottom: 16px; letter-spacing: -0.02em; }
        .about-cta-section p { font-size: 1.1rem; color: #aaaaaa; max-width: 580px; margin: 0 auto 36px; line-height: 1.6; }
        .cta-button { display: inline-block; padding: 16px 40px; background: #ffffff; color: #070707; font-weight: 700; text-decoration: none; transition: all 0.3s ease; border: 1px solid #ffffff; border-radius: 8px; letter-spacing: 0.03em; }
        .cta-button:hover { background: #070707; color: #ffffff; transform: translateY(-3px); }
        
        @media (max-width: 1024px) {
          .about-row { grid-template-columns: 1fr; gap: 40px; height: auto; }
          .about-row.media-left .about-text, .about-row.media-right .about-text { padding: 0 6vw; }
          .about-row.media-left .about-media, .about-row.media-right .about-media { height: 420px; }
          .about-hero { padding: 60px 6vw; }
          .about-cta-section { padding: 70px 6vw; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="about-hero">
        <div>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSub}</p>
        </div>
        
        {/* Freccia Chevron a V centrata nello schermo */}
        <div className="hero-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* FULLBLEED EDITORIAL CONTENT */}
      <div className="about-fullbleed-wrapper">
        <section className="about-row media-left">
          <div className="about-media reveal-editorial reveal-from-left">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2384c8c54fac4c19bd6981e876dba4bb" alt="Studio workspace" />
          </div>
          <div className="about-text reveal-editorial reveal-from-right">
            <h2>{t.curiosityTitle}</h2>
            <p>{t.curiosityText1}</p>
            <p>{t.curiosityText2}</p>
          </div>
        </section>

        <section className="about-row media-right">
          <div className="about-text reveal-editorial reveal-from-left">
            <h2>{t.methodTitle}</h2>
            <p>{t.methodText1}</p>
            <p>{t.methodText2}</p>
          </div>
          <div className="about-media reveal-editorial reveal-from-right">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Ffe00d2a2166f40bdb9808c4ccfa5e4e9" alt="Digital fabrication" />
          </div>
        </section>

        <section className="about-row media-left">
          <div className="about-media reveal-editorial reveal-from-left">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F48827287d32f4f9d8b7ec3376f37c7e8" alt="Product research" />
          </div>
          <div className="about-text reveal-editorial reveal-from-right">
            <h2>{t.learningTitle}</h2>
            <p>{t.learningText1}</p>
          </div>
        </section>

        <section className="about-row media-right">
          <div className="about-text reveal-editorial reveal-from-left">
            <h2>{t.digitalTitle}</h2>
            <p>{t.digitalText1}</p>
            <p>{t.digitalText2}</p>
          </div>
          <div className="about-media reveal-editorial reveal-from-right">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fbf54c799fe944d5b8dd071d09cc0d178" alt="Materials and prototyping" />
          </div>
        </section>

        <section className="about-row media-left">
          <div className="about-media reveal-editorial reveal-from-left">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F665895d4479541e69e27e0f18323d292" alt="Teamwork" />
          </div>
          <div className="about-text reveal-editorial reveal-from-right">
            <h2>{t.beyondTitle}</h2>
            <p>{t.beyondText1}</p>
            <p>{t.beyondText2}</p>
          </div>
        </section>

        <section className="about-row media-right">
          <div className="about-text reveal-editorial reveal-from-left">
            <h2>{t.collaborationTitle}</h2>
            <p>{t.collaborationText1}</p>
            <p>{t.collaborationText2}</p>
          </div>
          <div className="about-media reveal-editorial reveal-from-right">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fccebb9ded9f64abab522b395bbbad713" alt="Collaboration" />
          </div>
        </section>
      </div>

      {/* CTA SECTION */}
      <section className="about-cta-section">
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaSub}</p>
        <a href="/cv" className="cta-button">
          {t.ctaButton}
        </a>
      </section>
    </div>
  );
}