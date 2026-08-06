import React, { useState, useEffect, useRef } from 'react';

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  tag: string;
  image: string;
}

interface StickyObjectProps {
  t: {
    steps: ProcessStep[];
  };
}

export const StickyObject: React.FC<StickyObjectProps> = ({ t }) => {
  const [activeStep, setActiveStep] = useState(0);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Estrae l'array dei passi dalla prop 't' (con fallback di sicurezza)
  const steps = t?.steps || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step-index'));
            if (!isNaN(index)) {
              setActiveStep(index);
            }
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
  }, [steps]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    const targetTrigger = triggerRefs.current[index];
    if (targetTrigger) {
      targetTrigger.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const currentStepData = steps[activeStep] || steps[0] || {
    step: '',
    title: '',
    desc: '',
    tag: '',
    image: ''
  };

  return (
    <section className="process-section">
      <div className="process-sticky-frame">
        <div className="process-media">
          <img
            src={currentStepData.image}
            alt={currentStepData.step}
            className="process-img img-fade-in"
          />

          <div className="process-tag animate-tag-smooth">
            {currentStepData.tag}
          </div>
        </div>

        <div className="process-text-column">
          <div className="process-content-block animate-text-smooth">
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
                  className={`indicator-dot ${i === activeStep ? 'active' : ''}`}
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
          will-change: opacity;
        }

        .img-fade-in {
          z-index: 2;
          animation: crossFadeIn 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes crossFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-tag-smooth {
          animation: tagSmooth 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
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
          animation: textSmooth 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
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