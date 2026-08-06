import React, { useState, useRef } from 'react';

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  tag: string;
  image: string;
}

interface StickyObjectProps {
  t?: {
    steps?: ProcessStep[];
  };
}

// Fallback dati nel caso la prop t non arrivi subito dal genitore
const FALLBACK_STEPS: ProcessStep[] = [
  {
    step: '01 / OSSERVA E COMPRENDI',
    title: 'Ogni progetto parte\nda una domanda.',
    desc: 'Prima di cercare soluzioni, dedico tempo a comprendere le persone, i contesti e i comportamenti.',
    tag: 'IMMAGINE 01 // RICERCA E OSSERVAZIONE',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    step: '02 / CREA E TESTA',
    title: 'Le idee prendono forma\nattraverso i prototipi.',
    desc: 'Gli schizzi diventano modelli CAD, prototipi funzionali ed esperimenti fisici.',
    tag: 'IMMAGINE 02 // PROTOTIPAZIONE E TEST',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
  },
  {
    step: '03 / AFFINA E SEMPLIFICA',
    title: 'Il buon design è\nsemplicità consapevole.',
    desc: 'Ogni componente deve avere uno scopo chiaro e una funzione definita.',
    tag: 'IMMAGINE 03 // AFFINAMENTO E DETTAGLIO',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  },
];

export const StickyObject: React.FC<StickyObjectProps> = ({ t }) => {
  const [activeStep, setActiveStep] = useState(0);

  // Prende i passi da t.steps, altrimenti usa il fallback per evitare che sparisca tutto
  const steps = t?.steps && t.steps.length > 0 ? t.steps : FALLBACK_STEPS;
  const currentStepData = steps[activeStep] || steps[0];

  return (
    <section className="process-section">
      <div className="process-sticky-frame">
        {/* MEDIA / IMMAGINE A SINISTRA */}
        <div className="process-media">
          <img
            key={currentStepData.image}
            src={currentStepData.image}
            alt={currentStepData.step}
            className="process-img img-fade-in"
          />
          <div className="process-tag animate-tag-smooth">
            {currentStepData.tag}
          </div>
        </div>

        {/* COLONNA TESTO A DESTRA */}
        <div className="process-text-column">
          <div className="process-content-block animate-text-smooth" key={activeStep}>
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

            {/* INDICATORI / PALLINI INTERATTIVI */}
            <div className="step-indicators">
              {steps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to step ${i + 1}`}
                  onClick={() => setActiveStep(i)}
                  className={`indicator-dot ${i === activeStep ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .process-section {
          position: relative;
          width: 100%;
          background-color: #070707;
          padding: 4vw 4vw;
          box-sizing: border-box;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }

        .process-sticky-frame {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 5vw;
          z-index: 1;
        }

        .process-media {
          position: relative;
          width: 100%;
          height: 500px;
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
        }

        .img-fade-in {
          animation: crossFadeIn 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes crossFadeIn {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
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
          backdrop-filter: blur(8px);
          z-index: 3;
        }

        .process-text-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .process-content-block {
          max-width: 460px;
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
          transition: background 0.4s ease, width 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .indicator-dot:hover {
          background: rgba(255, 255, 255, 0.6);
        }

        .indicator-dot.active {
          background: #ffffff;
          width: 52px;
        }

        @media (max-width: 900px) {
          .process-sticky-frame {
            grid-template-columns: 1fr;
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