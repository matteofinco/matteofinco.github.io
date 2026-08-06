import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';

const translations = {
  it: {
    heroTitle: "MATTEO FINCO",
    heroSub: "Product Designer\nbased in Italy\n\nI like understanding how things work.",
    curiosityTitle: "Mi piace capire come funzionano le cose.",
    curiosityText1: "Quando guardo un oggetto, il mio primo impulso non è chiedermi se sia bello o brutto, ma perché sia stato progettato in quel modo. Come è stato costruito, quali vincoli hanno guidato le decisioni e quali compromessi si celano dietro una forma apparentemente semplice.",
    curiosityText2: "Per me, la qualità di un prodotto risiede nella chiarezza della sua logica. Questo approccio mi ha portato al product design, dove curiosità, competenze tecniche e creatività lavorano costantemente insieme.",
    methodTitle: "Il design come metodo",
    methodText1: "Studio Product Design all'Università Iuav di Venezia, campus di Vicenza. In questo percorso ho trasformato un interesse intuitivo in un metodo di lavoro, concentrandomi sul punto in cui un'idea incontra la sua fattibilità: materiali, processi e limiti produttivi.",
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
    expertiseHeader: "Competenze",
    capabilities: [
      { num: "01", title: "ANALISI", items: ["Reverse engineering", "Analisi prodotto", "Ricerca progettuale"] },
      { num: "02", title: "PROGETTAZIONE", items: ["CAD e modellazione 3D", "Disegni tecnici", "Design for Manufacturing"] },
      { num: "03", title: "PROTOTIPAZIONE", items: ["Prototipazione rapida", "Stampa 3D FDM", "Sperimentazione materica"] },
      { num: "04", title: "MATERIALI & PROCESSI", items: ["Studio dei materiali", "Processi produttivi", "Ottimizzazione costruttiva"] },
      { num: "05", title: "COLLABORAZIONE", items: ["Coordinamento progettuale", "Leadership", "Team multidisciplinari"] },
      { num: "06", title: "LINGUE", items: ["Italiano: Madrelingua", "Inglese: Intermedio (B2)"] }
    ],
    ctaTitle: "E adesso?",
    ctaSub: "Interessato a collaborare a un progetto di design? Sono sempre aperto a nuove sfide e a lavori significativi.",
    ctaButton: "VISUALIZZA PORTFOLIO"
  },
  en: {
    heroTitle: "MATTEO FINCO",
    heroSub: "Product Designer\nbased in Italy\n\nI like understanding how things work.",
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
    expertiseHeader: "Capabilities",
    capabilities: [
      { num: "01", title: "ANALYSIS", items: ["Reverse engineering", "Product analysis", "Design research"] },
      { num: "02", title: "DESIGN", items: ["CAD & 3D modeling", "Technical drawings", "Design for Manufacturing"] },
      { num: "03", title: "PROTOTYPING", items: ["Rapid prototyping", "FDM 3D printing", "Material experimentation"] },
      { num: "04", title: "MATERIALS & PROCESSES", items: ["Material study", "Manufacturing processes", "Constructive optimization"] },
      { num: "05", title: "COLLABORATION", items: ["Project coordination", "Leadership", "Multidisciplinary teams"] },
      { num: "06", title: "LANGUAGES", items: ["Italian: Native", "English: Intermediate (B2)"] }
    ],
    ctaTitle: "What's next?",
    ctaSub: "Interested in collaborating on a design project? I'm always open to new challenges and meaningful work.",
    ctaButton: "VIEW PORTFOLIO"
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
    return () => revealObserver.disconnect();
  }, [lang]);

  return (
    <div className="about-page editorial-portfolio bg-[#070707] text-[#e5e5e5] min-h-screen overflow-x-hidden">
      <Header showBackToDesigns={false} currentLang={lang} onLanguageChange={toggleLanguage} setLang={toggleLanguage} />

      <style>{`
        .about-page { padding-top: 80px; }
        .about-hero { min-height: 75vh; display: flex; align-items: center; justify-content: center; padding: 120px 6vw; border-bottom: 1px solid #1a1a1a; }
        .about-hero h1 { font-size: clamp(4rem, 9vw, 9rem); font-weight: 900; letter-spacing: -0.05em; line-height: 0.9; color: #ffffff; margin-bottom: 40px; }
        .about-hero p { white-space: pre-line; font-size: clamp(1.3rem, 2vw, 2rem); color: #888; line-height: 1.5; max-width: 600px; }
        
        .about-fullbleed-wrapper { width: 100%; padding: 100px 0; display: flex; flex-direction: column; gap: 120px; }
        .about-row { display: grid; grid-template-columns: 1fr 1fr; align-items: center; width: 100%; min-height: 70vh; }
        .about-media { height: 620px; }
        .about-media img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(20%); transition: 0.8s; }
        .about-media:hover img { filter: grayscale(0%); transform: scale(1.01); }
        .about-text h2 { font-size: clamp(2.2rem, 3.8vw, 3.5rem); font-weight: 800; margin-bottom: 25px; color: #ffffff; }
        .about-text p { color: #aaaaaa; font-size: 1.12rem; line-height: 1.85; max-width: 560px; }
        
        /* GRID STYLES */
        .expertise-wrapper { max-width: 1200px; margin: 100px auto; padding: 0 6vw; }
        .expertise-wrapper > h2 { font-size: 2.5rem; font-weight: 800; margin-bottom: 60px; color: #fff; }
        .expertise-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1px; background: #1a1a1a; border: 1px solid #1a1a1a; }
        .expertise-card { padding: 40px; background: #070707; transition: all 0.4s ease; display: flex; flex-direction: column; cursor: default; }
        .expertise-card:hover { transform: translateY(-5px); border: 1px solid #444; margin: -1px; z-index: 1; }
        .expertise-num { font-size: 0.8rem; color: #555; margin-bottom: 15px; letter-spacing: 0.2em; font-family: monospace; }
        .expertise-card h3 { font-size: 1.6rem; margin-bottom: 25px; color: #fff; font-weight: 700; }
        .expertise-card ul { list-style: none; padding: 0; margin: 0; }
        .expertise-card li { color: #999; font-size: 1.05rem; line-height: 2.2; }

        .reveal-editorial { opacity: 0; filter: blur(10px); transition: 1.1s; }
        .reveal-active { opacity: 1; filter: blur(0); }

        .about-cta-section { width: 100%; padding: 120px 6vw; text-align: center; border-top: 1px solid #1a1a1a; margin-top: 50px; }
        .cta-button { display: inline-block; padding: 16px 40px; background: #ffffff; color: #070707; font-weight: 700; text-decoration: none; transition: 0.3s; }
        .cta-button:hover { background: #070707; color: #ffffff; transform: translateY(-3px); border: 1px solid #fff; }

        @media (max-width: 1024px) {
          .about-row { grid-template-columns: 1fr; gap: 40px; height: auto; }
          .about-media { height: 400px; }
        }
      `}</style>

      <section className="about-hero">
        <div>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSub}</p>
        </div>
      </section>

      <div className="about-fullbleed-wrapper">
        <section className="about-row media-left">
          <div className="about-media reveal-editorial"><img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80" alt="" /></div>
          <div className="about-text reveal-editorial"><h2>{t.curiosityTitle}</h2><p>{t.curiosityText1}<br/><br/>{t.curiosityText2}</p></div>
        </section>
        <section className="about-row media-right">
          <div className="about-text reveal-editorial"><h2>{t.methodTitle}</h2><p>{t.methodText1}<br/><br/>{t.methodText2}</p></div>
          <div className="about-media reveal-editorial"><img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80" alt="" /></div>
        </section>
      </div>

      <section className="expertise-wrapper">
        <h2>{t.expertiseHeader}</h2>
        <div className="expertise-grid">
          {t.capabilities.map((cap, i) => (
            <div className="expertise-card" key={i}>
              <div className="expertise-num">{cap.num}</div>
              <h3>{cap.title}</h3>
              <ul>
                {cap.items.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta-section">
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{t.ctaTitle}</h2>
        <p style={{ color: '#aaa', maxWidth: '600px', margin: '0 auto 40px' }}>{t.ctaSub}</p>
        <a href="/" className="cta-button">{t.ctaButton}</a>
      </section>
    </div>
  );
}