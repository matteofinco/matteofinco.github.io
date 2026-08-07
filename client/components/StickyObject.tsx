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
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Ff5c97c63b81e4bcc9e0ffb49878a09be',
    },
    {
      step: '02 / CREA E TESTA',
      title: 'Le idee prendono forma\nattraverso i prototipi.',
      desc: 'Gli schizzi diventano modelli CAD, prototipi funzionali ed esperimenti fisici. Costruire le idee permette di validare le ipotesi, scoprire problemi inattesi e migliorare ogni iterazione attraverso test diretti.',
      tag: 'IMMAGINE 02 // PROTOTIPAZIONE E TEST',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F0427482a7b374ef1b727ec74983b63d8',
    },
    {
      step: '03 / AFFINA E SEMPLIFICA',
      title: 'Il buon design è\nsemplicità consapevole.',
      desc: 'Ogni componente deve avere uno scopo chiaro. Affino geometrie, materiali e processi produttivi finché la complessità scompare e rimane solo ciò che migliora davvero l’esperienza d’uso.',
      tag: 'IMMAGINE 03 // AFFINAMENTO E DETTAGLIO',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F4894abf6b091470cbbc3233eb674a6b9',
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
  const [prevStep, setPrevStep] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const currentLang = PROCESS_STEPS[lang] ? lang : 'it';
  const steps = PROCESS_STEPS[currentLang];

  useEffect(() => {
    setPrevStep(null);
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step-index'));
            setActiveStep((prev) => {
              if (prev !== index) {
                setPrevStep(prev);
              }
              return index;
            });
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    triggerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleStepClick = (index: number) => {
    if (index !== activeStep) {
      setPrevStep(activeStep);
      setActiveStep(index);
      const targetTrigger = triggerRefs.current[index];
      if (targetTrigger) {
        targetTrigger.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const safeActiveStep = Math.min(activeStep, steps.length - 1);
  const currentStepData = steps[safeActiveStep];
  const prevStepData = prevStep !== null && prevStep < steps.length ? steps[prevStep] : null;

  return (
    <section className="process-section">
      {/* VISTA DESKTOP (STICKY INTERATTIVO) */}
      <div className="process-desktop-wrapper">
        <div className="process-sticky-frame">
          <div className="process-media">
            {prevStepData && (
              <img
                key={`prev-${currentLang}-${prevStep}`}
                src={prevStepData.image}
                alt=""
                className="process-img img-fade-out"
              />
            )}

            <img
              key={`curr-${currentLang}-${safeActiveStep}`}
              src={currentStepData.image}
              alt={currentStepData.step}
              className="process-img img-fade-in"
            />

            <div key={`tag-${currentLang}-${safeActiveStep}`} className="process-tag animate-tag-smooth">
              {currentStepData.tag}
            </div>
          </div>

          <div className="process-text-column">
            <div key={`content-${currentLang}-${safeActiveStep}`} className="process-content-block animate-text-smooth">
              <span className="step-number">{currentStepData.step}</span>

              <h3 className="step-title">
                {currentStepData.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>

              <p className="step-description">{currentStepData.desc}</p>

              <div className="step-indicators">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to step ${i + 1}`}
                    onClick={() => handleStepClick(i)}
                    className={`indicator-dot ${i === safeActiveStep ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

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
      </div>

      {/* VISTA MOBILE (SEQUENZIALE LINEARE PARETE) */}
      <div className="process-mobile-list">
        {steps.map((item, idx) => (
          <div key={idx} className="process-mobile-card">
            <div className="mobile-media-container">
              <img src={item.image} alt={item.step} className="mobile-process-img" />
              <div className="mobile-process-tag">{item.tag}</div>
            </div>

            <div className="mobile-text-content">
              <span className="step-number">{item.step}</span>
              <h3 className="step-title">
                {item.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
              <p className="step-description">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .process-section {
          position: relative;
          width: 100%;
          background-color: #070707;
          box-sizing: border-box;
        }

        /* --- STILI DESKTOP --- */
        .process-desktop-wrapper {
          display: block;
          position: relative;
          width: 100%;
          padding: 0 4vw 0 0;
        }

        .process-mobile-list {
          display: none;
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
          background-color: #070707;
        }

        .process-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
          will-change: opacity, transform;
        }

        .img-fade-in {
          z-index: 2;
          animation: crossFadeIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .img-fade-out {
          z-index: 1;
          animation: crossFadeOut 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes crossFadeIn {
          from {
            opacity: 0;
            transform: scale(1.02);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes crossFadeOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.98);
          }
        }

        .animate-tag-smooth {
          animation: tagSmooth 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes tagSmooth {
          from { opacity: 0; }
          to { opacity: 1; }
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
          z-index: 3;
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
          will-change: opacity;
        }

        .animate-text-smooth {
          animation: textSmooth 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes textSmooth {
          from { opacity: 0; }
          to { opacity: 1; }
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
          transition: background 0.6s ease, width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
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
          height: 100vh;
          width: 100%;
          pointer-events: none;
        }

        .step-trigger:first-child {
          height: 140vh;
        }

        /* --- STILI RESPONSIVE MOBILE (< 1024px) --- */
        @media (max-width: 1024px) {
          .process-desktop-wrapper {
            display: none !important;
          }

          .process-mobile-list {
            display: flex;
            flex-direction: column;
            gap: 50px;
            padding: 40px 6vw;
          }

          .process-mobile-card {
            display: flex;
            flex-direction: column;
            background: #0b0b0b;
            border: 1px solid #1a1a1a;
            border-radius: 4px;
            overflow: hidden;
          }

          .mobile-media-container {
            position: relative;
            width: 100%;
            height: 220px;
            background: #141414;
          }

          .mobile-process-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .mobile-process-tag {
            position: absolute;
            bottom: 12px;
            left: 12px;
            font-family: monospace;
            font-size: 0.65rem;
            color: #ffffff;
            background: rgba(0, 0, 0, 0.75);
            padding: 6px 12px;
            letter-spacing: 1px;
            backdrop-filter: blur(4px);
          }

          .mobile-text-content {
            padding: 24px 20px;
          }

          .mobile-text-content .step-title {
            font-size: 1.5rem;
            line-height: 1.25;
            margin-bottom: 12px;
          }

          .mobile-text-content .step-description {
            font-size: 0.92rem;
            line-height: 1.6;
            margin-bottom: 0;
            color: #888888;
          }
        }
      `}</style>
    </section>
  );
};

export default StickyObject;