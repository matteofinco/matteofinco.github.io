import React, { useState, useEffect, useRef } from 'react';

interface StickyObjectProps {
  lang?: 'it' | 'en';
}

const PROCESS_STEPS = {
  it: [
    {
      step: '01 / OSSERVA E COMPRENDI',
      title: 'Ogni progetto parte\nda una domanda.',
      desc: 'Prima di cercare soluzioni, dedico tempo a comprendere le persone, i contesti e i comportamenti. Analizzo come vengono usati i prodotti, dove nascono le difficoltà e quali vincoli guidano ogni decisione progettuale.',
    },
    {
      step: '02 / CREA E TESTA',
      title: 'Le idee prendono forma\nattraverso i prototipi.',
      desc: 'Gli schizzi diventano modelli CAD, prototipi funzionali ed esperimenti fisici. Costruire le idee permette di validare le ipotesi, scoprire problemi inattesi e migliorare ogni iterazione attraverso test diretti.',
    },
    {
      step: '03 / AFFINA E SEMPLIFICA',
      title: 'Il buon design è\nsemplicità consapevole.',
      desc: 'Ogni componente deve avere uno scopo chiaro. Affino geometrie, materiali e processi produttivi finché la complessità scompare e rimane solo ciò che migliora davvero l’esperienza d’uso.',
    },
  ],
  en: [
    {
      step: '01 / OBSERVE & UNDERSTAND',
      title: 'Every project starts\nwith a question.',
      desc: 'Before searching for solutions, I spend time understanding people, contexts and behaviours. I like analysing how products are used, where friction appears and which constraints influence every design decision.',
    },
    {
      step: '02 / MAKE & TEST',
      title: 'Ideas become real\nthrough prototyping.',
      desc: 'Sketches evolve into CAD models, functional prototypes and physical experiments. Building ideas allows me to validate assumptions, discover unexpected problems and improve every iteration through direct testing.',
    },
    {
      step: '03 / REFINE & SIMPLIFY',
      title: 'Good design is\nthoughtful simplicity.',
      desc: 'Every component should have a clear purpose. I refine geometry, materials and manufacturing processes until complexity disappears and only what truly improves the user experience remains.',
    },
  ],
};

export const StickyObject: React.FC<StickyObjectProps> = ({ lang = 'it' }) => {
  const [activeStep, setActiveStep] = useState(0);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = PROCESS_STEPS[lang] || PROCESS_STEPS.it;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step-index'));
            setActiveStep(index);
          }
        });
      },
      {
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0.1,
      }
    );

    triggerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentStep = steps[activeStep];

  return (
    <section className="process-section">
      {/* FRAME STICKY FULL-BLEED A SINISTRA */}
      <div className="process-sticky-frame">
        <div className="process-media">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F0a6666a4c3754165bf5a7b9831b66b28"
            alt="Matteo Finco Design Process"
          />
          <div className="process-tag">
            {lang === 'it' ? 'COME LAVORO // OSSERVA · CREA · AFFINA' : 'HOW I WORK // OBSERVE · MAKE · REFINE'}
          </div>
        </div>

        {/* COLONNA TESTO DESTRA */}
        <div className="process-text-column">
          <div key={`${lang}-${activeStep}`} className="process-content-block animate-fade">
            <span className="step-number">{currentStep.step}</span>

            <h3 className="step-title">
              {currentStep.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>

            <p className="step-description">{currentStep.desc}</p>

            <div className="step-indicators">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`indicator-dot ${i === activeStep ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* STRATO SCROLLABILE TRASPARENTE */}
      <div className="process-triggers-overlay">
        {steps.map((_, index) => (
          <div
            key={index}
            data-step-index={index}
            ref={(el) => (triggerRefs.current[index] = el)}
            className="step-trigger"
          />
        ))}
      </div>

      <style>{`
        .process-section {
          position: relative;
          width: 100%;
          background-color: #070707;
          padding: 0 4vw 0 0;
          box-sizing: border-box;
        }

        .process-sticky-frame {
          position: sticky;
          top: 90px;
          height: calc(100vh - 130px);
          max-height: 820px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 5vw;
          border-radius: 0;
          overflow: hidden;
          z-index: 1;
        }

        .process-media {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 0;
          overflow: hidden;
        }

        .process-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
          filter: none;
        }

        .process-tag {
          position: absolute;
          bottom: 24px;
          left: 24px;
          font-family: monospace;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.85);
          letter-spacing: 1.5px;
          background: rgba(0, 0, 0, 0.65);
          padding: 6px 14px;
          border-radius: 0;
          backdrop-filter: blur(8px);
          z-index: 2;
        }

        .process-text-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 2vw;
          z-index: 2;
        }

        .process-content-block {
          max-width: 460px;
        }

        .process-content-block.animate-fade {
          animation: textFade 0.4s ease-out forwards;
        }

        @keyframes textFade {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .step-number {
          display: inline-block;
          font-family: monospace;
          font-size: 0.8rem;
          color: #777;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .step-title {
          font-size: clamp(2rem, 2.8vw, 2.75rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 20px 0;
        }

        .step-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #aaa;
          margin: 0 0 32px 0;
        }

        .step-indicators {
          display: flex;
          gap: 8px;
        }

        .indicator-dot {
          width: 24px;
          height: 2px;
          background: rgba(255, 255, 255, 0.2);
          transition: background 0.3s ease, width 0.3s ease;
        }

        .indicator-dot.active {
          background: #ffffff;
          width: 40px;
        }

        .process-triggers-overlay {
          position: relative;
          z-index: 3;
          margin-top: calc(-100vh + 130px);
          pointer-events: none;
        }

        .step-trigger {
          height: 80vh;
          width: 100%;
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .process-section {
            padding: 0 4vw;
          }
          .process-sticky-frame {
            grid-template-columns: 1fr;
            top: 70px;
            height: auto;
            max-height: none;
          }
          .process-media {
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
};

export default StickyObject;