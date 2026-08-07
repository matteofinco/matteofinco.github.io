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
  },
  en: {
    approach: 'Design Approach',
    materials: 'Materials & Technologies',
    explore: 'EXPLORE PROJECT',
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
    <section
      className="circle-showcase-section"
      ref={sectionRef}
    >
      {/* VISTA DESKTOP (SCROLL STICKY CON HUD CIRCOLARE) */}
      <div 
        className="showcase-desktop-wrapper" 
        style={{ height: `${steps.length * 100}vh` }}
      >
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

                  {previousProject && (
                    <img
                      key={`prev-${previousProject.id}`}
                      src={previousProject.img}
                      alt=""
                      className="hud-project-img hud-img-exit"
                    />
                  )}

                  <img
                    key={`curr-${currentProject.id}`}
                    src={currentProject.img}
                    alt={currentProject.title[currentLang]}
                    className="hud-project-img hud-img-enter"
                  />
                </div>
              </div>
            </div>

            {/* COLONNA DESTRA: SCHEDE DI TESTO IN DISSOLVENZA */}
            <div className="process-text-stage">
              {steps.map((st, index) => {
                const isActive = index === activeStep;
                return (
                  <div
                    key={st.id}
                    className={`process-card-item ${isActive ? 'active' : ''}`}
                  >
                    <div className="project-category-tag">
                      {st.id} // {st.category[currentLang]} // {st.year}
                    </div>

                    <h2 className="project-main-title">{st.title[currentLang]}</h2>

                    <div className="project-subtitle-text">{st.subtitle[currentLang]}</div>

                    <p className="project-desc-text">{st.desc[currentLang]}</p>

                    <div className="project-meta-grid">
                      <div className="meta-item">
                        <span className="label">{labels[currentLang].approach}</span>
                        <span className="value">{st.tools[currentLang]}</span>
                      </div>

                      <div className="meta-item">
                        <span className="label">{labels[currentLang].materials}</span>
                        <span className="value">{st.material[currentLang]}</span>
                      </div>
                    </div>

                    <a href={st.link} className="project-action-link">
                      {labels[currentLang].explore} →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* VISTA MOBILE (CAROSELLO ORIZZONTALE) */}
      <div className="showcase-mobile-carousel">
        <div className="carousel-track">
          {steps.map((st) => (
            <div key={st.id} className="mobile-showcase-card">
              <div className="mobile-img-wrapper">
                <img src={st.img} alt={st.title[currentLang]} className="mobile-card-img" />
                <div className="mobile-category-tag">
                  {st.id} // {st.category[currentLang]} // {st.year}
                </div>
              </div>

              <div className="mobile-card-body">
                <h2 className="mobile-main-title">{st.title[currentLang]}</h2>
                <div className="mobile-subtitle-text">{st.subtitle[currentLang]}</div>
                <p className="mobile-desc-text">{st.desc[currentLang]}</p>

                <div className="mobile-meta-grid">
                  <div className="meta-item">
                    <span className="label">{labels[currentLang].approach}</span>
                    <span className="value">{st.tools[currentLang]}</span>
                  </div>
                  <div className="meta-item">
                    <span className="label">{labels[currentLang].materials}</span>
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

        /* --- STILI RESPONSIVE MOBILE (< 1024px): CAROSELLO ORIZZONTALE --- */
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
            scrollbar-width: none; /* Nasconde la scrollbar su Firefox */
          }

          .carousel-track::-webkit-scrollbar {
            display: none; /* Nasconde la scrollbar su Chrome/Safari */
          }

          .mobile-showcase-card {
            flex: 0 0 85vw;
            max-width: 380px;
            display: flex;
            flex-direction: column;
            background: #0b0b0b;
            border: 1px solid #1a1a1a;
            border-radius: 4px;
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
            background: rgba(0, 0, 0, 0.75);
            padding: 6px 12px;
            letter-spacing: 1px;
            backdrop-filter: blur(4px);
            text-transform: uppercase;
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
            font-size: 1rem;
            color: #cccccc;
            font-weight: 500;
          }

          .mobile-desc-text {
            font-size: 0.9rem;
            color: #888888;
            line-height: 1.6;
            margin: 0;
          }

          .mobile-meta-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            padding: 16px 0;
            border-top: 1px solid #1a1a1a;
            border-bottom: 1px solid #1a1a1a;
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