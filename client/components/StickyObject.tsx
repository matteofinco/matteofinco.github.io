import React, { useState, useEffect, useRef } from 'react';

const PROCESS_STEPS = [
  {
    step: '01 // OBSERVE & UNDERSTAND',
    title: 'Every project starts\nwith a question.',
    desc: 'Before searching for solutions, I spend time understanding people, contexts and behaviours. I like analysing how products are used, where friction appears and which constraints influence every design decision. Observation is where every project begins.',
  },
  {
    step: '02 // MAKE & TEST',
    title: 'Ideas become real\nthrough prototyping.',
    desc: 'Sketches evolve into CAD models, functional prototypes and physical experiments. Building ideas allows me to validate assumptions, discover unexpected problems and improve every iteration through direct testing rather than speculation.',
  },
  {
    step: '03 // REFINE & SIMPLIFY',
    title: 'Good design is\nthoughtful simplicity.',
    desc: 'Every component should have a clear purpose. I refine geometry, materials and manufacturing processes until complexity disappears and only what truly improves the user experience remains.',
  },
];

export const StickyObject: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isScrolling = useRef(false);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling.current) {
            const index = Number(entry.target.getAttribute('data-step-index'));
            
            setActiveStep(index);

            isScrolling.current = true;
            entry.target.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });

            setTimeout(() => {
              isScrolling.current = false;
            }, 700);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    triggerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentStep = PROCESS_STEPS[activeStep];

  return (
    <section className="process-section">
      {/* IMMAGINE FISSA E SINGOLA CARD FISSA A DESTRA */}
      <div className="process-sticky-container">
        <div className="process-media">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F0a6666a4c3754165bf5a7b9831b66b28"
            alt="Matteo Finco Design Process"
          />
          <div className="process-tag">
            HOW I WORK // OBSERVE · MAKE · REFINE
          </div>
        </div>

        {/* CARD UNICA POSIZIONATA AL CENTRO-DESTRA */}
        <div className="process-card-wrapper">
          <div key={activeStep} className="process-card animate-step">
            <span className="card-step">{currentStep.step}</span>

            <h3>
              {currentStep.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>

            <p>{currentStep.desc}</p>
          </div>
        </div>
      </div>

      {/* STRATO DI TRIGGER TRASPARENTI PER LO SCROLL ATTIVO (100VH CIASCUNO) */}
      <div className="process-triggers-overlay">
        {PROCESS_STEPS.map((_, index) => (
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
          background-color: #050505;
        }

        .process-sticky-container {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          z-index: 1;
          overflow: hidden;
        }

        .process-media {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100vh;
          z-index: 1;
        }

        .process-media img {
          width: 100%;
          height: 100vh;
          object-fit: cover;
          filter: brightness(0.55) contrast(1.1);
        }

        .process-tag {
          position: absolute;
          bottom: 40px;
          left: 6vw;
          font-family: monospace;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.7);
          background: rgba(0,0,0,0.6);
          padding: 8px 16px;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.1);
          z-index: 2;
        }

        /* STRUTTURA DEL BOX UNICO */
        .process-card-wrapper {
          position: relative;
          z-index: 2;
          margin-right: 6vw;
          width: 100%;
          max-width: 520px;
        }

        .process-card {
          width: 100%;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: rgba(8, 8, 8, 0.72);
          backdrop-filter: blur(28px);
          padding: 48px;
          border-left: 1px solid rgba(255, 255, 255, 0.35);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
          box-sizing: border-box;
        }

        /* ANIMAZIONE EDITORIALE FADE + SLIDE QUANDO CAMBIA LO STEP */
        .process-card.animate-step {
          animation: textFadeSlide 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes textFadeSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .process-card .card-step {
          font-family: monospace;
          font-size: 0.8rem;
          color: #888888;
          margin-bottom: 12px;
          letter-spacing: 1px;
        }

        .process-card h3 {
          font-size: clamp(2rem, 3vw, 3rem);
          line-height: 1.05;
          letter-spacing: -1.5px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 24px;
        }

        .process-card p {
          font-size: 1rem;
          line-height: 1.9;
          color: #bdbdbd;
          max-width: 38ch;
          margin: 0;
        }

        /* OVERLAY TRIGGER TRASPARENTE SCROLLABILE */
        .process-triggers-overlay {
          position: relative;
          z-index: 3;
          margin-top: -100vh;
          pointer-events: none;
        }

        .step-trigger {
          height: 100vh;
          width: 100%;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .process-card-wrapper {
            margin: 0 auto;
            padding: 0 5vw;
          }
        }
      `}</style>
    </section>
  );
};

export default StickyObject;