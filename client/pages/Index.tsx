import { useState, useEffect } from 'react';
import './Index.css';

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
  }
];

const translations = {
  it: {
    headerTag: "2. IMMERSIONE NEL CUORE DEI NOSTRI TEAM",
    sec1Title: "Progettare un prodotto è un mestiere.",
    sec1Sub: "In realtà è un insieme di tanti mestieri. Scopriamoli.",
    sec1P: "Al centro del DESIGN in DECATHLON ci sono persone che, prima di tutto, sono appassionate di sport e lavorano ogni giorno per progettare prodotti sportivi."
  },
  en: {
    headerTag: "2. IMMERSION AT THE HEART OF OUR TEAMS",
    sec1Title: "Designing a product is a trade.",
    sec1Sub: "It's actually a whole heap of trades. Let's take a look.",
    sec1P: "At the heart of DESIGN at DECATHLON are people who, above all, are passionate sports enthusiasts working day in, day out to design sports products."
  }
};

export default function Index() {
  const [lang, setLang] = useState<'it' | 'en'>('it');
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver(
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

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const t = translations[lang];

  return (
    <div className="portfolio-container">
      <header>
        <div className="header-tag">{t.headerTag}</div>
        <div className="lang-switcher">
          <button className={`lang-btn ${lang === 'it' ? 'active' : ''}`} onClick={() => setLang('it')}>IT</button>
          <span>|</span>
          <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
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
        <div className="media-box">
          <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80" alt="Design Workshop" />
        </div>
      </section>

      <section className="showcase-wrapper">
        <div className="showcase-sticky-left">
          <div className="svg-frame-container">
            <div className="circle-image-holder">
              <img src={projects[activeProject]?.img} alt="Active Project" />
            </div>
          </div>
        </div>

        <div className="showcase-scroll-right">
          {projects.map((proj, idx) => (
            <div key={idx} className={`project-card ${activeProject === idx ? 'active-project' : ''}`} data-project={idx}>
              <div className="designer-name">{proj.name}</div>
              <div className="designer-role">{proj.role}</div>
              <div className="designer-meta">{proj.meta}</div>
              <blockquote >{proj.quote}</blockquote>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}