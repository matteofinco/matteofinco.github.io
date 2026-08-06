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
      tag: 'IMMAGINE 01 // RICERCA E OSSERVAZIONE',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      step: '02 / CREA E TESTA',
      title: 'Le idee prendono forma\nattraverso i prototipi.',
      desc: 'Gli schizzi diventano modelli CAD, prototipi funzionali ed esperimenti fisici. Costruire le idee permette di validare le ipotesi, scoprire problemi inattesi e migliorare ogni iterazione attraverso test diretti.',
      tag: 'IMMAGINE 02 // PROTOTIPAZIONE E TEST',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    },
    {
      step: '03 / AFFINA E SEMPLIFICA',
      title: 'Il buon design è\nsemplicità consapevole.',
      desc: 'Ogni componente deve avere uno scopo chiaro. Affino geometrie, materiali e processi produttivi finché la complessità scompare e rimane solo ciò che migliora davvero l’esperienza d’uso.',
      tag: 'IMMAGINE 03 // AFFINAMENTO E DETTAGLIO',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  en: [
    {
      step: '01 / OBSERVE & UNDERSTAND',
      title: 'Every project starts\nwith a question.',
      desc: 'Before searching for solutions, I spend time understanding people, contexts and behaviours. I like analysing how products are used, where friction appears and which constraints influence every design decision.',
      tag: 'IMAGE 01 // RESEARCH & OBSERVATION',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      step: '02 / MAKE & TEST',
      title: 'Ideas become real\nthrough prototyping.',
      desc: 'Sketches evolve into CAD models, functional prototypes and physical experiments. Building ideas allows me to validate assumptions, discover unexpected problems and improve every iteration through direct testing.',
      tag: 'IMAGE 02 // PROTOTYPING & TESTING',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    },
    {
      step: '03 / REFINE & SIMPLIFY',
      title: 'Good design is\nthoughtful simplicity.',
      desc: 'Every component should have a clear purpose. I refine geometry, materials and manufacturing processes until complexity disappears and only what truly improves the user experience remains.',
      tag: 'IMAGE 03 // REFINEMENT & DETAIL',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
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

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    const targetTrigger = triggerRefs.current[index];
    if (targetTrigger) {
      targetTrigger.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const currentStep = steps[activeStep];

  return (
    <section className="process-section">
      {/* FRAME STICKY FULL-BLEED A SINISTRA */}
      <div className="process-sticky-frame">
        <div className="process-media">
          <img
            key={currentStep.image}
            src={currentStep.image}
            alt={currentStep.step}
            className="animate-image-slide-fade"
          />
          <div key={currentStep.tag} className="process-tag animate-tag-fade">
            {currentStep.tag}
          </div>
        </div>

        {/* COLONNA TESTO DESTRA */}
        <div className="process-text-column">
          <div key={`${lang}-${activeStep}`} className="process-content-block animate-text-fade">
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
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to step ${i + 1}`}
                  onClick={() => handleStepClick(i)}
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
          background-color: #0d0d0d;
        }

        .process-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
          filter: none;
          will-change: transform, opacity;
        }

        /* IMMAGINE: Scivolamento morbido da sinistra + Fade in graduale */
        .animate-image-slide-fade {
          animation: imageSlideFade 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes imageSlideFade {
          from {
            opacity: 0;
            transform: translateX(-35px) scale(1.01);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        /* BADGE TAG: Entrata delicata con leggero offset */
        .animate-tag-fade {
          animation: tagSoftFade 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
          opacity: 0;
        }

        @keyframes tagSoftFade {
          from {
            opacity: 0;
            transform: translateX(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .process-tag {
          position: absolute;
          bottom: 24px;
          left: 24px;
          font-family: monospace;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 1.5px;
          background: rgba(0, 0, 0, 0.65);
          padding: 8px 16px;
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
          will-change: transform, opacity;
        }

        /* TESTO: Fade in puro, senza sbalzi bruschi, impercettibile translateY */
        .animate-text-fade {
          animation: textSoftFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes textSoftFade {
          from {
            opacity: 0;
            transform: translateY(8px);
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
          gap: 10px;
          align-items: center;
        }

        .indicator-dot {
          width: 32px;
          height: 3px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          padding: 0;
          cursor: pointer;
          outline: none;
          transition: background 0.4s ease, width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .indicator-dot:hover {
          background: rgba(255, 255, 255, 0.6);
        }

        .indicator-dot.active {
          background: #ffffff;
          width: 52px;
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