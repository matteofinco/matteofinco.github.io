import React, { useEffect, useRef } from 'react';

export interface ProjectStep {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tools: string;
  material: string;
  year: string;
  desc: string;
  link: string;
  img: string;
}

interface CircleShowcaseProps {
  steps: ProjectStep[];
  activeStep: number;
}

export const CircleShowcase: React.FC<CircleShowcaseProps> = ({ steps, activeStep }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.process-card-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            const event = new CustomEvent('set-active-project', { detail: index });
            window.dispatchEvent(event);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const currentProject = steps[activeStep] || steps[0];

  return (
    <section className="circle-showcase-section" ref={containerRef}>
      <style>{`
        .circle-showcase-section {
          position: relative;
          width: 100%;
          background-color: #070707;
          padding: 60px 6vw;
          box-sizing: border-box;
        }

        .showcase-sticky-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto;
          min-height: 90vh;
          position: relative;
          gap: 60px;
        }

        /* COLONNA SINISTRA: HUD FISSA (STICKY) CON IMMAGINE PIÙ GRANDE */
        .hud-sticky-wrapper {
          position: sticky;
          top: calc(50vh - 280px);
          height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .hud-container {
          position: relative;
          width: 560px;
          height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Cerchio centrale ingrandito per maggiore impatto visivo */
        .hud-center-circle {
          position: relative;
          width: 360px;
          height: 360px;
          background: #ffffff;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 70px rgba(0, 0, 0, 0.85);
        }

        .inner-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #cccccc 1px, transparent 1px);
          background-size: 16px 16px;
          opacity: 0.5;
        }

        .hud-project-img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease;
        }

        /* GEOMETRIE HUD AVANZATE */
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
          width: 400px;
          height: 400px;
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
          width: 440px;
          height: 440px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-bottom-color: rgba(255, 255, 255, 0.4);
          border-left-color: rgba(255, 255, 255, 0.1);
          transform: rotate(45deg);
          pointer-events: none;
        }

        .hud-ticks-top-left {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          border: 2px dotted rgba(255, 255, 255, 0.25);
          clip-path: polygon(0 0, 50% 0, 50% 50%, 0 50%);
          pointer-events: none;
          animation: hud-spin 100s linear infinite;
        }

        .hud-ticks-bottom-right {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          border: 2px dashed rgba(255, 255, 255, 0.2);
          clip-path: polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%);
          pointer-events: none;
        }

        /* INDICATORI DI STATO A PALLINI IN ALTO A DESTRA */
        .hud-status-dots {
          position: absolute;
          top: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 5;
          align-items: center;
        }

        .status-dot {
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .status-dot.active {
          width: 6px;
          height: 6px;
          background: #ffffff;
          box-shadow: 0 0 8px #ffffff;
        }

        .status-dot.highlight {
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

        /* COLONNA DESTRA: CONTENITORE DELLO SCROLL TESTUALE */
        .process-scroll-column {
          display: flex;
          flex-direction: column;
          gap: 30vh;
          padding: 15vh 0;
        }

        .process-card-item {
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-height: 50vh;
          justify-content: center;
        }

        .project-category-tag {
          font-family: monospace;
          font-size: 0.85rem;
          color: #888888;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .project-main-title {
          font-size: clamp(2.5rem, 4vw, 3.8rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .project-subtitle-text {
          font-size: 1.15rem;
          color: #cccccc;
          font-weight: 500;
        }

        .project-desc-text {
          font-size: 1rem;
          color: #999999;
          line-height: 1.75;
          max-width: 520px;
        }

        .project-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 10px;
          border-top: 1px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
          padding: 20px 0;
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
          margin-top: 10px;
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
          .showcase-sticky-layout {
            grid-template-columns: 1fr;
          }
          .hud-sticky-wrapper {
            position: relative;
            top: 0;
            height: auto;
            margin-bottom: 40px;
          }
          .hud-container {
            transform: scale(0.85);
          }
          .process-scroll-column {
            gap: 10vh;
            padding: 0;
          }
        }
      `}</style>

      <div className="showcase-sticky-layout">
        {/* COLONNA SINISTRA STICKY CON LA GRAFICA HUD E L'IMMAGINE ATTIVA */}
        <div className="hud-sticky-wrapper">
          <div className="hud-container">
            <div className="hud-ring-base hud-outer-ring"></div>
            <div className="hud-ring-base hud-dashed-ring"></div>
            <div className="hud-ring-base hud-inner-dashed"></div>
            <div className="hud-tech-arc-1"></div>
            <div className="hud-tech-arc-2"></div>
            <div className="hud-ticks-top-left"></div>
            <div className="hud-ticks-bottom-right"></div>

            {/* Indicatori di stato a pallini sincronizzati con i progetti */}
            <div className="hud-status-dots">
              {steps.map((_, dotIdx) => (
                <div
                  key={dotIdx}
                  className={`status-dot ${dotIdx === activeStep ? 'active' : dotIdx === activeStep - 1 || dotIdx === activeStep + 1 ? 'highlight' : ''}`}
                ></div>
              ))}
            </div>

            <div className="hud-pointer-group">
              <div className="hud-pointer-line"></div>
              <div className="hud-pointer-node"></div>
            </div>

            <div className="hud-center-circle">
              <div className="inner-grid-pattern"></div>
              <img
                src={currentProject.img}
                alt={currentProject.title}
                className="hud-project-img"
              />
            </div>
          </div>
        </div>

        {/* COLONNA DESTRA CON LO SCROLL DEI TESTI */}
        <div className="process-scroll-column">
          {steps.map((st, index) => (
            <div
              key={st.id}
              className="process-card-item"
              data-index={index}
            >
              <div className="project-category-tag">
                {st.id} // {st.category} // {st.year}
              </div>
              <h2 className="project-main-title">{st.title}</h2>
              <div className="project-subtitle-text">{st.subtitle}</div>
              <p className="project-desc-text">{st.desc}</p>

              <div className="project-meta-grid">
                <div className="meta-item">
                  <span className="label">Strumenti & CAD</span>
                  <span className="value">{st.tools}</span>
                </div>
                <div className="meta-item">
                  <span className="label">Materiali & CMF</span>
                  <span className="value">{st.material}</span>
                </div>
              </div>

              <a href={st.link} className="project-action-link">
                ESPLORA PROGETTO →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircleShowcase;