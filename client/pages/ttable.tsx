import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { ProjectSelector } from '../components/ProjectSelector';

interface TTableProps {
  heroFit?: 'contain' | 'cover';
}

const content = {
  en: {
    title: "T-TABLE",
    subtitle: "Interactive table attentive to nutrition",
    meta: {
      teamLabel: "Designers",
      yearLabel: "Year",
      yearVal: "2026",
      awardLabel: "Project Type",
      awardVal: "Product Design & Interactive Table"
    },
    overview: {
      title: "Overview",
      subtitle: "Challenge",
      p1: "The growing pervasiveness of screens during mealtimes has fueled the phenomenon of distracted eating, a behavior that alters natural satiety cues and compromises meal memory, resulting in so-called food amnesia.",
      p2: "Although many restaurant chains have introduced touchscreen tables to enrich the experience, these interfaces often end up completely absorbing the user's attention, alienating them from the very act of eating. The project's challenge was to overturn this paradigm within a high-traffic setting, integrating technology harmoniously and non-invasively to restore awareness to the meal ritual and foster social interaction."
    },
    solution: {
      title: "Solution",
      p1: "T-Table is a smart, interactive table concept designed for fast-food environments, aimed at eliminating visual overstimulation and food amnesia. The project is born in the course Approfondimento tematico per il Design at the università Iuav di Venezia (Vicenza design campus).",
      p2: "The system acts as a coordinated ecosystem that adapts its interface in real time based on the meal phases. Before service, the surface entertains families with cooperative mini-games related to the brand; as soon as the food is served, the table recognizes the presence of smart placemats and deactivates the interactive areas occupied by the trays.",
      p3: "The screen thus transforms into a natural, discreet, low-stimulation backdrop, refocusing people's visual, sensorial, and relational attention on the food and the conversation at the table."
    },
    research: {
      title: "Research",
      p1: "With this project, we uncovered the phenomenon of distracted eating, focusing on the impact digital stimuli have on feelings of satiety and meal memory. The scientific studies analyzed demonstrate that distraction at the table increases both immediate and delayed caloric intake, weakening children's ability to listen to their body's signals.",
      p2: "By mapping the restaurant experience, we realized that the problem wasn't the entertainment itself, but the temporal overlap with food: from an ergonomic perspective, continuous interaction with screens positioned on the table top forces the user to adopt incorrect postures and constantly disregard food, altering the proxemics of the convivial ritual. Hence the design breakthrough: the research highlighted the need to decouple play from consumption, defining the specifications for a system of smart tables capable of sensing the arrival of an order and deactivating themselves to rekindle social interaction."
    },
    design: {
      title: "Design",
      p1: "T-Table translates the dictates of Calm Technology into precise engineering choices. The screen abandons traditional glossy glass in favor of a special anti-reflective matte finish that simulates wood both visually and haptically, offering unprecedented sensory stimulation in interactive displays.",
      p2: "Display is provided by a low-density LED matrix with a narrow color gamut to reduce visual impact. Communication between the table and the objects occurs via placemats printed with Touchcode conductive ink, which exchange information with the screen's capacitive sensors to map the exact position of the food.",
      p3: "At the same time, the food packaging has been redesigned from recycled kraft cardboard, using digitally embossed graphics to amplify tactile contrast and stimulate 360° visual and olfactory satiety."
    },
    technical: {
      title: "Skills & Technical Insights",
      p1: "Experience has taught me to design human-machine interfaces (HMIs) not to capture the user's attention, but to support it, learning to apply technology subtractively and contextually.",
      p2: "Coordinating such diverse touchpoints has allowed me to combine traditional materials and electronics to generate a positive and ethical behavioral impact."
    },
    cta: {
      title: "What's next?",
      subtitle: "Projects",
      button: "BACK TO PORTFOLIO"
    }
  },
  it: {
    title: "T-TABLE",
    subtitle: "Tavolo interattivo attento alla nutrizione",
    meta: {
      teamLabel: "Designer",
      yearLabel: "Anno",
      yearVal: "2026",
      awardLabel: "Tipologia Progetto",
      awardVal: "Product Design & Tavolo Interattivo"
    },
    overview: {
      title: "Overview",
      subtitle: "Sfida progettuale",
      p1: "La crescente pervasività degli schermi durante i pasti ha alimentato il fenomeno della distrazione a tavola (distracted eating), un comportamento che altera i segnali naturali di sazietà e compromette la memoria del pasto, dando luogo alla cosiddetta amnesia alimentare.",
      p2: "Sebbene molte catene di ristorazione abbiano introdotto tavoli touchscreen per arricchire l'esperienza, queste interfacce finiscono spesso per assorbire completamente l'attenzione dell'utente, alienandolo dall'atto stesso del mangiare. La sfida del progetto è stata quella di ribaltare questo paradigma in un contesto ad alto traffico, integrando la tecnologia in modo armonioso e non invasivo per restituire consapevolezza al rito del pasto e favorire l'interazione sociale."
    },
    solution: {
      title: "Solution",
      p1: "T-Table è un concept di tavolo smart e interattivo progettato per ambienti fast-food, volto ad eliminare la sovrastimolazione visiva e l'amnesia alimentare. Il progetto nasce all'interno del corso di Approfondimento tematico per il Design presso l'Università Iuav di Venezia (sede di Vicenza).",
      p2: "Il sistema agisce come un ecosistema coordinato che adatta la sua interfaccia in tempo reale in base alle fasi del pasto. Prima del servizio, la superficie intrattiene le famiglie con mini-giochi cooperativi legati al brand; non appena il cibo viene servito, il tavolo riconosce la presenza di tovagliette smart e disattiva le aree interattive occupate dai vassoi.",
      p3: "Lo schermo si trasforma così in uno sfondo naturale, discreto e a bassa stimolazione, rifocalizzando l'attenzione visiva, sensoriale e relazionale delle persone sul cibo e sulla conversazione a tavola."
    },
    research: {
      title: "Research",
      p1: "Con questo progetto abbiamo approfondito il fenomeno del distracted eating, concentrandoci sull'impatto che gli stimoli digitali hanno sul senso di sazietà e sulla memoria del pasto. Gli studi scientifici analizzati dimostrano che la distrazione a tavola aumenta l'apporto calorico sia immediato che ritardato, indebolendo la capacità dei bambini di ascoltare i segnali del proprio corpo.",
      p2: "Mappando l'esperienza nella ristorazione, ci siamo resi conto che il problema non era l'intrattenimento in sé, ma la sovrapposizione temporale con il cibo: da una prospettiva ergonomica, l'interazione continua con gli schermi sul piano del tavolo costringe l'utente ad assumere posture scorrette e a ignorare costantemente il cibo, alterando la prossemica del rito conviviale. Da qui la svolta progettuale: la ricerca ha evidenziato la necessità di disaccoppiare il gioco dal consumo, definendo le specifiche per un sistema di tavoli smart in grado di percepire l'arrivo di un ordine e disattivarsi per riaccendere l'interazione sociale."
    },
    design: {
      title: "Design",
      p1: "T-Table traduce i dettami della Calm Technology in precise scelte ingegneristiche. Lo schermo abbandona il tradizionale vetro lucido a favore di una speciale finitura opaca antiriflesso che simula il legno sia visivamente che tattilmente, offrendo una stimolazione sensoriale senza precedenti nei display interattivi.",
      p2: "La visualizzazione è affidata a una matrice LED a bassa densità con un gamut di colori ristretto per ridurre l'impatto visivo. La comunicazione tra il tavolo e gli oggetti avviene tramite tovagliette stampate con inchiostro conduttivo Touchcode, che scambiano informazioni con i sensori capacitivi dello schermo per mappare l'esatta posizione del cibo.",
      p3: "Allo stesso tempo, il packaging alimentare è stato ridisegnato in cartoncino kraft riciclato, utilizzando grafiche goffratte digitalmente per amplificare il contrasto tattile e stimolare la sazietà visiva e olfattiva a 360°."
    },
    technical: {
      title: "Skills & Technical Insights",
      p1: "L'esperienza mi ha insegnato a progettare interfacce uomo-macchina (HMI) non per catturare l'attenzione dell'utente, ma per supportarla, imparando ad applicare la tecnologia in modo sottrattivo e contestuale.",
      p2: "Coordinare touchpoint così diversi mi ha permesso di combinare materiali tradizionali ed elettronica per generare un impatto comportamentale positivo ed etico."
    },
    cta: {
      title: "What's next?",
      subtitle: "Progetti",
      button: "TORNA AL PORTFOLIO"
    }
  }
};

export default function TTable({ heroFit = 'cover' }: TTableProps) {
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

        /* FULL-BLEED GRID ROWS FOR SIDE-BY-SIDE SECTIONS */
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
          border-radius: 0;
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
          border-radius: 0;
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
          border-radius: 0;
        }

        .row-media:hover img {
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
          padding-top: 40px;
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
          margin: 0 auto 24px;
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
          margin-top: 30px;
        }

        .cta-button:hover {
          background: #070707;
          color: #ffffff;
          border: 1px solid #ffffff;
          transform: translateY(-2px);
        }

        /* RESPONSIVE TOGGLES */
        @media (max-width: 860px) {
          .project-page {
            padding-top: 90px;
          }

          .editorial-row-fullbleed {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .editorial-row-fullbleed.row-img-right {
            flex-direction: column-reverse;
          }

          .editorial-row-fullbleed.row-img-left .row-media,
          .editorial-row-fullbleed.row-img-right .row-media {
            width: 100%;
            height: 380px;
          }

          .editorial-row-fullbleed.row-img-left .row-text,
          .editorial-row-fullbleed.row-img-right .row-text {
            padding: 0 4vw;
          }

          .hero-media-fullbleed {
            height: 280px;
            margin-top: 24px;
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
                <p>Matteo Finco, Anna Foresto, Paolo Levorato, Andrea Melchiori, Giulia Pettenò</p>
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
          <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2c9ec8a6b5fd4d90bb36506ce7b89adc" alt="T-Table hero" />
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

        {/* ROW 1: SOLUTION (IMAGE LEFT FULL BLEED) */}
        <section className="editorial-row-fullbleed row-img-left">
          <div className="row-media reveal-editorial reveal-from-left">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F7bacb81c9a994432be6ef2d8969f9afd" alt="T-Table solution" />
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

        {/* ROW 2: RESEARCH (IMAGE RIGHT FULL BLEED) */}
        <section className="editorial-row-fullbleed row-img-right">
          <div className="row-text reveal-editorial reveal-from-left">
            <h2>{t.research.title}</h2>
            <p>{t.research.p1}</p>
            <p>{t.research.p2}</p>
          </div>
          <div className="row-media reveal-editorial reveal-from-right">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fa0be97adf9fc4f0d83d73411fb52c725" alt="T-Table research" />
          </div>
        </section>

        <div className="editorial-content">
          <hr className="editorial-divider" />
        </div>

        {/* ROW 3: DESIGN (IMAGE LEFT FULL BLEED) */}
        <section className="editorial-row-fullbleed row-img-left">
          <div className="row-media reveal-editorial reveal-from-left">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fac344dead84c457f9148a80a2f60a001" alt="T-Table design" />
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

          {/* TECHNICAL INSIGHTS / SKILLS */}
          <section className="technical-section reveal-editorial reveal-from-left">
            <h2>{t.technical.title}</h2>
            <p>{t.technical.p1}</p>
            <p>{t.technical.p2}</p>
          </section>

          <hr className="editorial-divider" />

          {/* NEXT PROJECT / CTA CAROUSEL SECTION */}
          <section className="project-cta reveal-editorial reveal-from-left">
            <h2>{t.cta.title}</h2>
            <p className="cta-subtitle">{t.cta.subtitle}</p>

            <ProjectSelector currentProjectId="ttable" />

            <a href="/" className="cta-button">{t.cta.button}</a>
          </section>
        </div>
      </div>
    </div>
  );
}