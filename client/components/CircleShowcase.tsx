import React, { useEffect, useRef, useState } from 'react';

export interface ProjectStep {
  id: string;
  slug: string;
  title: {
    it: string;
    en: string;
  };
  subtitle: {
    it: string;
    en: string;
  };
  category: {
    it: string;
    en: string;
  };
  tools: {
    it: string;
    en: string;
  };
  material: {
    it: string;
    en: string;
  };
  year: string;
  desc: {
    it: string;
    en: string;
  };
  link: string;
  img: string;
}

interface CircleShowcaseProps {
  steps: ProjectStep[];
  activeStep: number;
  lang: 'it' | 'en';
}

const labels = {
  it: {
    approach: 'Approccio progettuale',
    materials: 'Materiali & Tecnologie',
    explore: 'ESPLORA PROGETTO'
  },
  en: {
    approach: 'Design Approach',
    materials: 'Materials & Technologies',
    explore: 'EXPLORE PROJECT'
  }
};

export const CircleShowcase: React.FC<CircleShowcaseProps> = ({ 
  steps, 
  activeStep: parentActiveStep,
  lang
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [internalActiveStep, setInternalActiveStep] = useState(0);
  const [prevStep, setPrevStep] = useState<number | null>(null);

  // Sincronizza lo step corrente tra lo scroll interno e la callback del genitore
  const activeStep = parentActiveStep !== undefined ? parentActiveStep : internalActiveStep;

  useEffect(() => {
    setPrevStep((prev) => (prev !== activeStep ? activeStep : prev));
  }, [activeStep]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;

      if (totalScrollableHeight <= 0) return;

      // Calcola quanto siamo entrati nella sezione (da 0 a 1)
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableHeight));

      // Calcola l'indice dello step in base alla percentuale di scroll
      const stepIndex = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      );

      if (stepIndex !== activeStep) {
        setInternalActiveStep(stepIndex);
        const event = new CustomEvent('set-active-project', { detail: stepIndex });
        window.dispatchEvent(event);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep, steps.length]);

  const currentProject = steps[activeStep] || steps[0];
  const previousProject = prevStep !== null && prevStep !== activeStep ? steps[prevStep] : null;

  return (
    <section 
      className="circle-showcase-section" 
      ref={sectionRef}
      style={{ height: `${steps.length * 100}vh` }} // Genera l'altezza necessaria per lo scroll a step
    >
      <style>{`
        .circle-showcase-section {
          position: relative;
          width: 100%;
          background-color: #070707;
          box-sizing: border-box;
        }

        /* L'INTERO CONTAINER RIMANE STICKY AL CENTRO SCHERMO */
        .showcase-pinned-viewport {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 0 6vw;
          box-sizing: border-box;
        }

        .showcase-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          gap: 60px;
        }

        /* COLONNA SINISTRA: HUD CENTRATO */
        .hud-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hud-container {
          position: relative;
          width: 540px;
          height: 540px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* CERCHIO CENTRALE E DISSOLVENZA IMMAGINE (CROSS-FADE) */
        .hud-center-circle {
          position: relative;
          width: 440px;
          height: 440px;
          background: #111111;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 80px rgba(0, 0, 0, 0.9);
        }

        .inner-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #444444 1px, transparent 1px);
          background-size: 16px 16px;
          opacity: 0.3;
          z-index: 1;
        }

        .hud-project-img {
          position: absolute;
          inset: 0;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: opacity, transform;
        }

        .hud-img-enter {
          animation: hudImgFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          z-index: 3;
        }

        .hud-img-exit {
          animation: hudImgFadeOut 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          z-index: 2;
        }

        @keyframes hudImgFadeIn {
          from {
            opacity: 0;
            transform: scale(1.04);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes hudImgFadeOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.96);
          }
        }

        /* GEOMETRIE HUD ESTERNE */
        .hud-ring-base {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .hud-outer-ring {
          width: 520px;
          height: 520px;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .hud-dashed-ring {
          width: 480px;
          height: 480px;
          border: 1px dashed rgba(255, 255, 255, 0.2);
          animation: hud-spin 80s linear infinite;
        }

        .hud-inner-dashed {
          width: 460px;
          height: 460px;
          border: 1px dashed rgba(255, 255, 255, 0.15);
          animation: hud-spin-reverse 60s linear infinite;
        }

        .hud-tech-arc-1 {
          position: absolute;
          width: 540px;
          height: 540px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: rgba(255, 255, 255, 0.6);
          border-right-color: rgba(255, 255, 255, 0.1);
          transform: rotate(-30deg);
          pointer-events: none;
        }

        .hud-tech-arc-2 {
          position: absolute;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-bottom-color: rgba(255, 255, 255, 0.4);
          border-left-color: rgba(255, 255, 255, 0.1);
          transform: rotate(45deg);
          pointer-events: none;
        }

        .hud-curved-dots-wrapper {
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 5;
          transform: rotate(-35deg);
        }

        .curved-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          top: 0;
          left: 50%;
          transform-origin: 50% 240px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .curved-dot:nth-child(1) { transform: rotate(0deg); }
        .curved-dot:nth-child(2) { transform: rotate(5deg); }
        .curved-dot:nth-child(3) { transform: rotate(10deg); }
        .curved-dot:nth-child(4) { transform: rotate(15deg); }
        .curved-dot:nth-child(5) { transform: rotate(20deg); }
        .curved-dot:nth-child(6) { transform: rotate(25deg); }
        .curved-dot:nth-child(7) { transform: rotate(30deg); }

        .curved-dot.active {
          width: 6px;
          height: 6px;
          background: #ffffff;
          box-shadow: 0 0 10px #ffffff;
        }

        .curved-dot.highlight {
          background: #ffffff;
          opacity: 0.8;
        }

        .hud-pointer-group {
          position: absolute;
          right: -25px;
          top: 50%;
          display: flex;
          align-items: center;
          pointer-events: none;
          z-index: 5;
        }

        .hud-pointer-line {
          width: 60px;
          height: 1px;
          background: rgba(255, 255, 255, 0.4);
        }

        .hud-pointer-node {
          width: 6px;
          height: 6px;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 10px #ffffff;
        }

        @keyframes hud-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes hud-spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        /* COLONNA DESTRA: STRUTTURA A SOVRAPPOSIZIONE FISSA */
        .process-text-stage {
          position: relative;
          width: 100%;
          height: 480px;
          display: flex;
          align-items: center;
        }

        .process-card-item {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: clamp(12px, 1.8vh, 20px);
          opacity: 0;
          transform: translateY(20px);
          pointer-events: none;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .process-card-item.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .project-category-tag {
          font-family: monospace;
          font-size: 0.85rem;
          color: #888888;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .project-main-title {
          font-size: clamp(2rem, 3vw, 3rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.05;
          letter-spacing: -1px;
          margin: 0;
        }

        .project-subtitle-text {
          font-size: 1.15rem;
          color: #cccccc;
          font-weight: 500;
        }

        .project-desc-text {
          font-size: clamp(0.85rem, 1vw, 0.95rem);
          color: #999999;
          line-height: 1.6;
          max-width: 480px;
          margin: 0;
        }

        .project-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 10px;
          border-top: 1px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
          padding: 16px 0;
          max-width: 520px;
        }

        .meta-item span.label {
          display: block;
          font-size: 0.75rem;
          color: #666666;
          font-family: monospace;
          margin-bottom: 4px;
          text-transform: uppercase;
        }

        .meta-item span.value {
          font-size: 0.95rem;
          color: #dddddd;
          font-weight: 600;
        }

        .project-action-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 6px;
          padding: 14px 28px;
          background: #ffffff;
          color: #070707;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          width: fit-content;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .project-action-link:hover {
          background: #dcdcdc;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .showcase-layout-grid {
            grid-template-columns: 1fr;
          }
          .process-text-stage {
            height: auto;
            min-height: 400px;
          }
        }
      `}</style>

      {/* VIEWPORT FISSO AL CENTRO DELLO SCHERMO */}
      <div className="showcase-pinned-viewport">
        <div className="showcase-layout-grid">
          
          {/* COLONNA SINISTRA: HUD FISSO */}
          <div className="hud-wrapper">
            <div className="hud-container">
              <div className="hud-ring-base hud-outer-ring"></div>
              <div className="hud-ring-base hud-dashed-ring"></div>
              <div className="hud-ring-base hud-inner-dashed"></div>
              <div className="hud-tech-arc-1"></div>
              <div className="hud-tech-arc-2"></div>

              <div className="hud-curved-dots-wrapper">
                {steps.map((_, dotIdx) => (
                  <div
                    key={dotIdx}
                    className={`curved-dot ${
                      dotIdx === activeStep
                        ? 'active'
                        : dotIdx === activeStep - 1 || dotIdx === activeStep + 1
                        ? 'highlight'
                        : ''
                    }`}
                  ></div>
                ))}
              </div>

              <div className="hud-pointer-group">
                <div className="hud-pointer-line"></div>
                <div className="hud-pointer-node"></div>
              </div>

              <div className="hud-center-circle">
                <div className="inner-grid-pattern"></div>

                {/* Immagine precedente in dissolvenza di uscita */}
                {previousProject && (
                  <img
                    key={`prev-${previousProject.id}`}
                    src={previousProject.img}
                    alt=""
                    className="hud-project-img hud-img-exit"
                  />
                )}

                {/* Immagine corrente in dissolvenza di ingresso */}
                <img
                  key={`curr-${currentProject.id}`}
                  src={currentProject.img}
                  alt={currentProject.title[lang]}
                  className="hud-project-img hud-img-enter"
                />
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA: SCHEDA DI TESTO FISSA SULLO STESSO PUNTO */}
          <div className="process-text-stage">
            {steps.map((st, index) => {
              const isActive = index === activeStep;
              return (
                <div
                  key={st.id}
                  className={`process-card-item ${isActive ? 'active' : ''}`}
                >
                  <div className="project-category-tag">
                    {st.id} // {st.category[lang]} // {st.year}
                  </div>

                  <h2 className="project-main-title">{st.title[lang]}</h2>

                  <div className="project-subtitle-text">{st.subtitle[lang]}</div>

                  <p className="project-desc-text">{st.desc[lang]}</p>

                  <div className="project-meta-grid">
                    <div className="meta-item">
                      <span className="label">{labels[lang].approach}</span>
                      <span className="value">{st.tools[lang]}</span>
                    </div>

                    <div className="meta-item">
                      <span className="label">{labels[lang].materials}</span>
                      <span className="value">{st.material[lang]}</span>
                    </div>
                  </div>

                  <a href={st.link} className="project-action-link">
                    {labels[lang].explore} →
                  </a>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CircleShowcase;