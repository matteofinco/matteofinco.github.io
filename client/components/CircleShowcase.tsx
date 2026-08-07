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
  activeStep?: number;
  lang?: 'it' | 'en';
}

const labels = {
  it: {
    approach: 'Approccio progettuale',
    materials: 'Materiali & Tecnologie',
    explore: 'ESPLORA PROGETTO',
    stepPrefix: 'Fase',
  },
  en: {
    approach: 'Design Approach',
    materials: 'Materials & Technologies',
    explore: 'EXPLORE PROJECT',
    stepPrefix: 'Phase',
  },
};

export const CircleShowcase: React.FC<CircleShowcaseProps> = ({
  steps,
  activeStep: parentActiveStep,
  lang = 'it',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [internalActiveStep, setInternalActiveStep] = useState(0);
  const [prevStep, setPrevStep] = useState<number | null>(null);

  const currentLang = labels[lang] ? lang : 'it';
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

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableHeight));

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
    <section className="circle-showcase-section" ref={sectionRef}>
      {/* VISTA DESKTOP (SCROLL STICKY CON CAD VIEWPORT SQUADRATO) */}
      <div
        className="showcase-desktop-wrapper"
        style={{ height: `${steps.length * 100}vh` }}
      >
        <div className="showcase-pinned-viewport">
          <div className="showcase-layout-grid">

            {/* COLONNA SINISTRA: CAD VIEWPORT SQUADRATO */}
            <div className="tech-viewport-wrapper">
              <div className="tech-viewport-container">

                {/* Elementi vettoriali esterni e quote */}
                <div className="vector-axis-h"></div>
                <div className="vector-axis-v"></div>

                <div className="vector-corner corner-tl">+</div>
                <div className="vector-corner corner-tr">+</div>
                <div className="vector-corner corner-bl">+</div>
                <div className="vector-corner corner-br">+</div>

                <div className="vector-coord-label top-left">
                  // SYS.GRID.0{activeStep + 1}
                </div>
                <div className="vector-coord-label bottom-right">
                  [ {String(activeStep + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')} ]
                </div>

                {/* Bordo della cornice e maschera immagine */}
                <div className="tech-image-mask">
                  <div className="inner-grid-pattern"></div>

                  {previousProject && (
                    <img
                      key={`prev-${previousProject.id}`}
                      src={previousProject.img}
                      alt=""
                      className="tech-project-img tech-img-exit-right"
                    />
                  )}

                  <img
                    key={`curr-${currentProject.id}`}
                    src={currentProject.img}
                    alt={currentProject.title[currentLang]}
                    className="tech-project-img tech-img-enter-left"
                  />

                  {/* Reticolo vettoriale sopra l'immagine */}
                  <div className="vector-overlay-crosshair"></div>
                </div>

                {/* Timeline vettoriale laterale */}
                <div className="vector-step-indicator">
                  {steps.map((_, idx) => (
                    <div
                      key={idx}
                      className={`vector-step-tick ${idx === activeStep ? 'active' : ''}`}
                    >
                      <span className="tick-line"></span>
                      <span className="tick-num">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* COLONNA DESTRA: SCHEDE DI TESTO CON ACCENTI VETTORIALI */}
            <div className="process-text-stage">
              {steps.map((st, index) => {
                const isActive = index === activeStep;
                return (
                  <div
                    key={st.id}
                    className={`process-card-item ${isActive ? 'active' : ''}`}
                  >
                    <div className="project-category-tag">
                      <span className="vector-slash">//</span> {st.id} <span className="vector-bullet">•</span> {st.category[currentLang]} <span className="vector-bullet">•</span> {st.year}
                    </div>

                    <h2 className="project-main-title">{st.title[currentLang]}</h2>

                    <div className="project-subtitle-text">{st.subtitle[currentLang]}</div>

                    <p className="project-desc-text">{st.desc[currentLang]}</p>

                    <div className="project-meta-grid">
                      <div className="meta-item">
                        <span className="label">
                          <span className="vector-mini-dash">--</span> {labels[currentLang].approach}
                        </span>
                        <span className="value">{st.tools[currentLang]}</span>
                      </div>

                      <div className="meta-item">
                        <span className="label">
                          <span className="vector-mini-dash">--</span> {labels[currentLang].materials}
                        </span>
                        <span className="value">{st.material[currentLang]}</span>
                      </div>
                    </div>

                    <a href={st.link} className="project-action-link">
                      <span>{labels[currentLang].explore}</span>
                      <span className="vector-arrow">→</span>
                    </a>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* VISTA MOBILE (CAROSELLO ORIZZONTALE SQUADRATO) */}
      <div className="showcase-mobile-carousel">
        <div className="carousel-track">
          {steps.map((st, idx) => (
            <div key={st.id} className="mobile-showcase-card">
              <div className="mobile-img-wrapper">
                <img src={st.img} alt={st.title[currentLang]} className="mobile-card-img" />
                <div className="mobile-category-tag">
                  // {st.id} • {st.year}
                </div>
                <div className="mobile-step-num">
                  [{String(idx + 1).padStart(2, '0')}]
                </div>
              </div>

              <div className="mobile-card-body">
                <h2 className="mobile-main-title">{st.title[currentLang]}</h2>
                <div className="mobile-subtitle-text">{st.subtitle[currentLang]}</div>
                <p className="mobile-desc-text">{st.desc[currentLang]}</p>

                <div className="mobile-meta-grid">
                  <div className="meta-item">
                    <span className="label">-- {labels[currentLang].approach}</span>
                    <span className="value">{st.tools[currentLang]}</span>
                  </div>
                  <div className="meta-item">
                    <span className="label">-- {labels[currentLang].materials}</span>
                    <span className="value">{st.material[currentLang]}</span>
                  </div>
                </div>

                <a href={st.link} className="mobile-action-link">
                  {labels[currentLang].explore} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .circle-showcase-section {
          position: relative;
          width: 100%;
          background-color: #070707;
          box-sizing: border-box;
          color: #ffffff;
        }

        /* --- STILI DESKTOP --- */
        .showcase-desktop-wrapper {
          display: block;
          position: relative;
          width: 100%;
        }

        .showcase-mobile-carousel {
          display: none;
        }

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

        /* --- VIEWPORT VETTORIALE SQUADRATO (CAD STYLE) --- */
        .tech-viewport-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-viewport-container {
          position: relative;
          width: 100%;
          max-width: 520px;
          aspect-ratio: 1 / 1;
          padding: 24px;
          box-sizing: border-box;
          background: rgba(15, 15, 15, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Assi cartesiani estesi */
        .vector-axis-h {
          position: absolute;
          top: 50%;
          left: -30px;
          right: -30px;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          pointer-events: none;
        }

        .vector-axis-v {
          position: absolute;
          left: 50%;
          top: -30px;
          bottom: -30px;
          width: 1px;
          background: rgba(255, 255, 255, 0.08);
          pointer-events: none;
        }

        /* Crocini d'angolo */
        .vector-corner {
          position: absolute;
          font-family: monospace;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1;
          user-select: none;
        }
        .corner-tl { top: 6px; left: 8px; }
        .corner-tr { top: 6px; right: 8px; }
        .corner-bl { bottom: 6px; left: 8px; }
        .corner-br { bottom: 6px; right: 8px; }

        .vector-coord-label {
          position: absolute;
          font-family: monospace;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .vector-coord-label.top-left {
          top: -20px;
          left: 0;
        }
        .vector-coord-label.bottom-right {
          bottom: -20px;
          right: 0;
        }

        /* Maschera Immagine e Animazioni da Sinistra */
        .tech-image-mask {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .inner-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
          background-size: 20px 20px;
          z-index: 1;
          pointer-events: none;
        }

        .tech-project-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform, opacity;
        }

        /* Ingresso da sinistra */
        .tech-img-enter-left {
          animation: slideInFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          z-index: 3;
        }

        /* Uscita verso destra */
        .tech-img-exit-right {
          animation: slideOutToRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          z-index: 2;
        }

        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0.3;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutToRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        .vector-overlay-crosshair {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(255, 255, 255, 0.05);
          pointer-events: none;
          z-index: 4;
        }

        /* Timeline laterale vettoriale */
        .vector-step-indicator {
          position: absolute;
          right: -45px;
          top: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px 0;
        }

        .vector-step-tick {
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0.25;
          transition: all 0.4s ease;
        }

        .vector-step-tick.active {
          opacity: 1;
        }

        .tick-line {
          width: 12px;
          height: 1px;
          background: #ffffff;
        }

        .vector-step-tick.active .tick-line {
          width: 22px;
          background: #ffffff;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
        }

        .tick-num {
          font-family: monospace;
          font-size: 0.65rem;
          color: #ffffff;
        }

        /* --- COLONNA TESTO DESKTOP --- */
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
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .process-card-item.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .project-category-tag {
          font-family: monospace;
          font-size: 0.8rem;
          color: #888888;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .vector-slash {
          color: #ffffff;
          font-weight: 700;
        }

        .vector-bullet {
          font-size: 0.6rem;
          color: #444444;
        }

        .project-main-title {
          font-size: clamp(2.2rem, 3.2vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.05;
          letter-spacing: -1px;
          margin: 0;
        }

        .project-subtitle-text {
          font-size: 1.15rem;
          color: #dddddd;
          font-weight: 500;
        }

        .project-desc-text {
          font-size: clamp(0.85rem, 1vw, 0.95rem);
          color: #999999;
          line-height: 1.65;
          max-width: 480px;
          margin: 0;
        }

        .project-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          padding: 18px 0;
          max-width: 520px;
        }

        .meta-item span.label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          color: #666666;
          font-family: monospace;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .vector-mini-dash {
          color: #444444;
        }

        .meta-item span.value {
          font-size: 0.95rem;
          color: #eeeeee;
          font-weight: 600;
        }

        .project-action-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 6px;
          padding: 14px 28px;
          background: #ffffff;
          color: #070707;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 1px;
          text-decoration: none;
          width: fit-content;
          border: 1px solid #ffffff;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-action-link:hover {
          background: #070707;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .vector-arrow {
          transition: transform 0.3s ease;
        }

        .project-action-link:hover .vector-arrow {
          transform: translateX(4px);
        }

        /* --- VISTA MOBILE CAROSELLO (< 1024px) --- */
        @media (max-width: 1024px) {
          .showcase-desktop-wrapper {
            display: none !important;
          }

          .showcase-mobile-carousel {
            display: block;
            width: 100%;
            padding: 40px 0 60px 0;
            overflow: hidden;
          }

          .carousel-track {
            display: flex;
            gap: 20px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding: 0 6vw;
            scrollbar-width: none;
          }

          .carousel-track::-webkit-scrollbar {
            display: none;
          }

          .mobile-showcase-card {
            flex: 0 0 85vw;
            max-width: 380px;
            display: flex;
            flex-direction: column;
            background: #0d0d0d;
            border: 1px solid rgba(255, 255, 255, 0.12);
            overflow: hidden;
            scroll-snap-align: center;
          }

          .mobile-img-wrapper {
            position: relative;
            width: 100%;
            height: 240px;
            background: #141414;
          }

          .mobile-card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .mobile-category-tag {
            position: absolute;
            bottom: 12px;
            left: 12px;
            font-family: monospace;
            font-size: 0.65rem;
            color: #ffffff;
            background: rgba(7, 7, 7, 0.85);
            padding: 6px 10px;
            letter-spacing: 1px;
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .mobile-step-num {
            position: absolute;
            top: 12px;
            right: 12px;
            font-family: monospace;
            font-size: 0.75rem;
            color: #ffffff;
            background: rgba(7, 7, 7, 0.85);
            padding: 4px 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .mobile-card-body {
            padding: 24px 20px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .mobile-main-title {
            font-size: 1.6rem;
            font-weight: 800;
            color: #ffffff;
            margin: 0;
            line-height: 1.15;
          }

          .mobile-subtitle-text {
            font-size: 0.95rem;
            color: #cccccc;
            font-weight: 500;
          }

          .mobile-desc-text {
            font-size: 0.85rem;
            color: #888888;
            line-height: 1.6;
            margin: 0;
          }

          .mobile-meta-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            padding: 16px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            margin-top: 4px;
          }

          .mobile-action-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 24px;
            background: #ffffff;
            color: #070707;
            font-weight: 700;
            font-size: 0.85rem;
            text-decoration: none;
            margin-top: 8px;
            width: 100%;
            box-sizing: border-box;
          }
        }
      `}</style>
    </section>
  );
};

export default CircleShowcase;