import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';

interface CurriculumProps {
  heroFit?: 'contain' | 'cover';
}

const content = {
  en: {
    title: "CURRICULUM VITAE",
    subtitle: "Product Designer & Maker",
    profile: {
      title: "Professional Profile",
      text1: "I aim to work in the field of product design, contributing to the development of products that combine innovation, manufacturing feasibility, and user experience.",
      text2: "I am interested in overseeing the entire project lifecycle—from problem analysis to prototyping—while engaging with materials, production processes, and technologies. I approach every project with an analytical and experimental mindset, combining research, modeling, and prototyping to develop concrete, functional, and user-oriented solutions. I view Design as a tool for understanding problems just as much as for solving them."
    },
    education: {
      title: "Education",
      items: [
        {
          period: "2024 - Current",
          title: "Bachelor's Degree in Product Design",
          institution: "iuav University of Venice - Vicenza Campus",
          location: "Vicenza, Italy"
        },
        {
          period: "2019 - 2024",
          title: "Diploma in Industry for 'Made in Italy' Mechanical Production and 3D Design",
          institution: "Ipsia F. Lampertico",
          location: "Vicenza, Italy"
        }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        {
          period: "10/2025 - Current",
          role: "Scout Leader - L/C Branch",
          company: "Agesci group 'Santa Maria 1'",
          location: "Camisano Vicentino (VI)",
          tasks: [
            "Designing activities based on play and \"learning by doing\";",
            "Supervising the safety of the children during activities;",
            "Conceiving, planning, and managing the logistics of short- and long-term educational activities for large groups."
          ]
        },
        {
          period: "08/2022 - Current",
          role: "Cinema Volunteer",
          company: "Cinema Teatro Lux",
          location: "Camisano Vicentino (VI)",
          tasks: [
            "Operational support in the projection booth;",
            "Care, monitoring, and routine maintenance of the auditorium to ensure comfort and safety;",
            "Selection of feature films for the screening program."
          ]
        },
        {
          period: "Current",
          role: "Volunteer",
          company: "Contra Meridiana APS",
          location: "Camisano Vicentino (VI)",
          tasks: [
            "Logistical and operational support in organizing and setting up local public and cultural events."
          ]
        },
        {
          period: "01/2024 - 02/2024",
          role: "Internship",
          company: "Carollo Gessy Auto Repair Shop",
          location: "Grumolo delle Abbadesse (VI)",
          tasks: [
            "Assistance with vehicle maintenance and repair tasks, including scheduled servicing, replacement of mechanical components, tire changes, system repairs, and workshop organization."
          ]
        }
      ]
    },
    skills: {
      title: "Skills & Competencies",
      categories: [
        {
          name: "Analysis",
          items: ["Reverse engineering", "Product analysis", "Design research", "Materials and manufacturing processes"]
        },
        {
          name: "Design",
          items: ["CAD and 3D modeling", "Technical drawings", "Design for Manufacturing"]
        },
        {
          name: "Prototyping",
          items: ["Rapid prototyping", "FDM 3D printing", "Material experimentation"]
        },
        {
          name: "Cooperation & Leadership",
          items: ["Project coordination", "Leadership", "Multidisciplinary collaboration"]
        }
      ]
    },
    languages: {
      title: "Language Skills",
      items: [
        { lang: "Italian", level: "Native speaker" },
        { lang: "English", level: "Intermediate (B2)" }
      ]
    },
    certifications: {
      title: "Certifications",
      items: ["Fire Safety Level 3", "HACCP certification"]
    },
    cta: {
      button: "BACK TO PORTFOLIO"
    }
  },
  it: {
    title: "CURRICULUM VITAE",
    subtitle: "Product Designer & Maker",
    profile: {
      title: "Profilo Professionale",
      text1: "Desidero lavorare nell'ambito del Product Design, contribuendo allo sviluppo di prodotti che uniscano innovazione, fattibilità produttiva ed esperienza d'uso.",
      text2: "Mi interessa seguire il progetto lungo tutto il suo percorso, dall'analisi del problema alla prototipazione, confrontandomi con materiali, processi produttivi e tecnologie. Affronto ogni progetto con un approccio analitico e sperimentale, combinando ricerca, modellazione e prototipazione per sviluppare soluzioni concrete, funzionali e orientate all'utente. Considero il design uno strumento per comprendere i problemi prima ancora che per risolverli."
    },
    education: {
      title: "Formazione",
      items: [
        {
          period: "2024 - Attuale",
          title: "Laurea triennale in Product Design",
          institution: "Università Iuav di Venezia - Sede di Vicenza",
          location: "Vicenza, Italia"
        },
        {
          period: "2019 - 2024",
          title: "Diploma: Industria e artigianato per il Made in Italy - Produzioni meccaniche e disegno 3D",
          institution: "Ipsia F. Lampertico",
          location: "Vicenza, Italia"
        }
      ]
    },
    experience: {
      title: "Esperienze",
      items: [
        {
          period: "10/2025 - Attuale",
          role: "Capo Scout - Branca L/C",
          company: "Agesci gruppo \"Santa Maria 1\"",
          location: "Camisano Vicentino (VI)",
          tasks: [
            "Progettazione di attività basate sul gioco e sull'imparare facendo (learning by doing);",
            "Supervisione della sicurezza dei ragazzi durante le attività;",
            "Ideazione, pianificazione e gestione logistica di attività educative a breve e lungo termine per gruppi numerosi."
          ]
        },
        {
          period: "08/2022 - Attuale",
          role: "Volontario sala cinematografica",
          company: "Cinema Teatro Lux",
          location: "Camisano Vicentino (VI)",
          tasks: [
            "Supporto operativo in cabina di proiezione;",
            "Cura, controllo e manutenzione ordinaria della sala per garantire comfort e sicurezza;",
            "Selezione dei lungometraggi da includere nella rassegna."
          ]
        },
        {
          period: "Attuale",
          role: "Volontario",
          company: "Contra Meridiana APS",
          location: "Camisano Vicentino (VI)",
          tasks: [
            "Supporto logistico e operativo nell'organizzazione e allestimento di manifestazioni pubbliche e culturali locali."
          ]
        },
        {
          period: "01/2024 - 02/2024",
          role: "Stage",
          company: "Autofficina Carollo Gessy",
          location: "Grumolo delle Abbadesse (VI)",
          tasks: [
            "Supporto nelle attività di manutenzione e riparazione di autoveicoli, inclusi tagliandi, sostituzione di componenti meccanici, cambio pneumatici, interventi su impianti e organizzazione dell'officina."
          ]
        }
      ]
    },
    skills: {
      title: "Competenze",
      categories: [
        {
          name: "Analisi",
          items: ["Reverse engineering", "Analisi di prodotto", "Ricerca progettuale", "Materiali e processi produttivi"]
        },
        {
          name: "Progettazione",
          items: ["CAD e 3D", "Disegni tecnici", "Design for Manufacturing"]
        },
        {
          name: "Prototipazione",
          items: ["Prototipazione rapida", "Stampa 3D FDM", "Sperimentazione materica"]
        },
        {
          name: "Collaborazione",
          items: ["Coordinamento progettuale", "Leadership", "Collaborazione multidisciplinare"]
        }
      ]
    },
    languages: {
      title: "Competenze linguistiche",
      items: [
        { lang: "Italiano", level: "Lingua madre" },
        { lang: "Inglese", level: "Intermedio (B2)" }
      ]
    },
    certifications: {
      title: "Certificazioni",
      items: ["Antincendio Livello 3", "Certificazione HACCP"]
    },
    cta: {
      button: "TORNA AL PORTFOLIO"
    }
  }
};

export default function Curriculum() {
  const [language, setLanguage] = useState<'it' | 'en'>('en');
  const t = content[language];

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-editorial');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('reveal-active');
      } else {
        revealObserver.observe(el);
      }
    });

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

        .editorial-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 4vw;
        }

        .editorial-divider {
          border: none;
          height: 1px;
          background-color: #1a1a1a;
          margin: 60px 0;
        }

        /* CV Hero Section */
        .cv-hero {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 40px;
        }

        .cv-avatar-container {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #262626;
          background: #111;
        }

        .cv-avatar-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cv-hero-info h1 {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          line-height: 1;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: -2px;
          text-transform: uppercase;
        }

        .cv-subtitle {
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: #888888;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .cv-contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 0.85rem;
          font-family: monospace;
          color: #aaaaaa;
        }

        .cv-contacts a {
          color: #e5e5e5;
          text-decoration: none;
          transition: color 0.2s;
        }

        .cv-contacts a:hover {
          color: #ffffff;
          text-decoration: underline;
        }

        /* Section Styling */
        .cv-section h2 {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 30px;
          letter-spacing: -0.8px;
        }

        .profile-box p {
          color: #aaaaaa;
          font-size: 1.08rem;
          line-height: 1.8;
          margin-bottom: 18px;
        }

        /* Timeline / List items */
        .cv-timeline {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .cv-item {
          position: relative;
          padding-left: 24px;
          border-left: 2px solid #222222;
        }

        .cv-item-period {
          font-size: 0.75rem;
          font-family: monospace;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #666666;
          margin-bottom: 6px;
          display: block;
        }

        .cv-item-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .cv-item-institution {
          font-size: 0.95rem;
          color: #999999;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .cv-item-tasks {
          margin: 0;
          padding-left: 18px;
          color: #aaaaaa;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .cv-item-tasks li {
          margin-bottom: 6px;
        }

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }

        .skill-card {
          background: #111111;
          border: 1px solid #1a1a1a;
          padding: 24px;
          border-radius: 0;
        }

        .skill-card h3 {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 14px;
          font-family: monospace;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .skill-card ul {
          margin: 0;
          padding-left: 16px;
          color: #999999;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .skill-card li {
          margin-bottom: 4px;
        }

        /* Two columns for Languages & Certifications */
        .cv-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .info-subbox h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          font-family: monospace;
          text-transform: uppercase;
        }

        .info-subbox ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .info-subbox li {
          color: #aaaaaa;
          font-size: 0.95rem;
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #161616;
          padding-bottom: 6px;
        }

        .info-subbox li span:last-child {
          color: #666666;
          font-family: monospace;
          font-size: 0.85rem;
        }

        /* Reveal animations */
        .reveal-editorial {
          opacity: 0;
          filter: blur(6px);
          transition: opacity 0.8s cubic-bezier(.22,.61,.36,1), 
                      filter 0.8s cubic-bezier(.22,.61,.36,1), 
                      transform 0.8s cubic-bezier(.22,.61,.36,1);
          transform: translateY(20px);
        }

        .reveal-editorial.reveal-active {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0);
        }

        /* CTA */
        .project-cta {
          text-align: center;
          padding-top: 20px;
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
        }

        .cta-button:hover {
          background: #070707;
          color: #ffffff;
          border: 1px solid #ffffff;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .cv-hero {
            grid-template-columns: 1fr;
            text-align: center;
            justify-items: center;
          }

          .cv-contacts {
            justify-content: center;
          }

          .cv-bottom-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .project-page {
            padding-top: 90px;
          }
        }
      `}</style>

      <div className="project-container">
        <div className="editorial-content">

          {/* Hero & Profile Photo Section */}
          <section className="cv-hero reveal-editorial">
            <div className="cv-avatar-container">
              <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913" alt="Matteo Finco" />
            </div>
            <div className="cv-hero-info">
              <h1>Matteo Finco</h1>
              <p className="cv-subtitle">{t.subtitle}</p>
              <div className="cv-contacts">
                <span>+39 320 053 7133</span>
                <span>•</span>
                <a href="mailto:matteofinco05@gmail.com">matteofinco05@gmail.com</a>
                <span>•</span>
                <a href="https://linkedin.com/in/Matteo Finco" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </section>

          <hr className="editorial-divider" />

          {/* Professional Profile */}
          <section className="cv-section profile-box reveal-editorial">
            <h2>{t.profile.title}</h2>
            <p>{t.profile.text1}</p>
            <p>{t.profile.text2}</p>
          </section>

          <hr className="editorial-divider" />

          {/* Experience */}
          <section className="cv-section reveal-editorial">
            <h2>{t.experience.title}</h2>
            <div className="cv-timeline">
              {t.experience.items.map((exp, idx) => (
                <div key={idx} className="cv-item">
                  <span className="cv-item-period">{exp.period}</span>
                  <div className="cv-item-title">{exp.role}</div>
                  <div className="cv-item-institution">{exp.company} | {exp.location}</div>
                  {exp.tasks && exp.tasks.length > 0 && (
                    <ul className="cv-item-tasks">
                      {exp.tasks.map((task, tIdx) => (
                        <li key={tIdx}>{task}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <hr className="editorial-divider" />

          {/* Education */}
          <section className="cv-section reveal-editorial">
            <h2>{t.education.title}</h2>
            <div className="cv-timeline">
              {t.education.items.map((edu, idx) => (
                <div key={idx} className="cv-item">
                  <span className="cv-item-period">{edu.period}</span>
                  <div className="cv-item-title">{edu.title}</div>
                  <div className="cv-item-institution">{edu.institution} | {edu.location}</div>
                </div>
              ))}
            </div>
          </section>

          <hr className="editorial-divider" />

          {/* Skills */}
          <section className="cv-section reveal-editorial">
            <h2>{t.skills.title}</h2>
            <div className="skills-grid">
              {t.skills.categories.map((cat, idx) => (
                <div key={idx} className="skill-card">
                  <h3>{cat.name}</h3>
                  <ul>
                    {cat.items.map((item, iIdx) => (
                      <li key={iIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <hr className="editorial-divider" />

          {/* Languages & Certifications */}
          <section className="cv-section reveal-editorial">
            <div className="cv-bottom-grid">
              <div className="info-subbox">
                <h3>{t.languages.title}</h3>
                <ul>
                  {t.languages.items.map((l, idx) => (
                    <li key={idx}>
                      <span>{l.lang}</span>
                      <span>{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="info-subbox">
                <h3>{t.certifications.title}</h3>
                <ul>
                  {t.certifications.items.map((c, idx) => (
                    <li key={idx}>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <hr className="editorial-divider" />

          {/* Back to Portfolio CTA */}
          <section className="project-cta reveal-editorial">
            <a href="/" className="cta-button">{t.cta.button}</a>
          </section>

        </div>
      </div>
    </div>
  );
}