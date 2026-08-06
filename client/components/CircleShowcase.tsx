import React from 'react';

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
  return (
    <section className="circle-showcase-section">
      <style>{`
        .circle-showcase-section {
          position: relative;
          width: 100%;
          background-color: #070707;
          padding: 100px 6vw;
          box-sizing: border-box;
        }

        .process-scroll-container {
          display: flex;
          flex-direction: column;
          gap: 15vh;
          max-width: 1300px;
          margin: 0 auto;
        }

        .process-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
          min-height: 80vh;
          scroll-snap-align: center;
        }

        /* ADVANCED HUD GRAPHIC CONTAINER */
        .hud-container {
          position: relative;
          width: 520px;
          height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .hud-center-circle {
          position: relative;
          width: 320px;
          height: 320px;
          background: #ffffff;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 60px rgba(0, 0, 0, 0.8);
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
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* COMPLEX HUD RINGS & ARCS */
        .hud-ring-base {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        /* Anello esterno principale sottile */
        .hud-outer-ring {
          width: 480px;
          height: 480px;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        /* Anello intermedio tratteggiato grande */
        .hud-dashed-ring {
          width: 440px;
          height: 440px;
          border: 1px dashed rgba(255, 255, 255, 0.2);
          animation: hud-spin 80s linear infinite;
        }

        /* Anello interno tratteggiato stretto */
        .hud-inner-dashed {
          width: 360px;
          height: 360px;
          border: 1px dashed rgba(255, 255, 255, 0.15);
          animation: hud-spin-reverse 60s linear infinite;
        }

        /* Archi tecnici angolari */
        .hud-tech-arc-1 {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: rgba(255, 255, 255, 0.6);
          border-right-color: rgba(255, 255, 255, 0.1);
          transform: rotate(-30deg);
          pointer-events: none;
        }

        .hud-tech-arc-2 {
          position: absolute;
          width: 410px;
          height: 410px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-bottom-color: rgba(255, 255, 255, 0.4);
          border-left-color: rgba(255, 255, 255, 0.1);
          transform: rotate(45deg);
          pointer-events: none;
        }

        /* Gruppo tacche radiali in alto a sinistra */
        .hud-ticks-top-left {
          position: absolute;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          border: 2px dotted rgba(255, 255, 255, 0.25);
          clip-path: polygon(0 0, 50% 0, 50% 50%, 0 50%);
          pointer-events: none;
          animation: hud-spin 100s linear infinite;
        }

        /* Gruppo tacche radiali in basso a destra */
        .hud-ticks-bottom-right {
          position: absolute;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          border: 2px dashed rgba(255, 255, 255, 0.2);
          clip-path: polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%);
          pointer-events: none;
        }

        /* Indicatore di stato a pallini in alto a destra (stile reference) */
        .hud-status-dots {
          position: absolute;
          top: 35px;
          right: 35px;
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

        /* Linea di puntamento laterale destra con pallino terminale */
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

        /* PROJECT DETAILS INFO PANEL */
        .showcase-info-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .project-category-tag {
          font-family: monospace;
          font-size: 0.85rem;
          color: #888888;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .project-main-title {
          font-size: clamp(2.5rem, 4.5vw, 4rem);
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
          .process-card {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .project-meta-grid {
            text-align: left;
          }
          .project-action-link {
            margin-left: auto;
            margin-right: auto;
          }
          .hud-container {
            transform: scale(0.85);
            margin: -20px auto;
          }
        }
      `}</style>

      <div className="process-scroll-container">
        {steps.map((st, index) => (
          <div 
            key={st.id} 
            className="process-card" 
            data-step={index}
          >
            {/* GRAFICA HUD AVANZATA */}
            <div className="hud-container">
              <div className="hud-ring-base hud-outer-ring"></div>
              <div className="hud-ring-base hud-dashed-ring"></div>
              <div className="hud-ring-base hud-inner-dashed"></div>
              <div className="hud-tech-arc-1"></div>
              <div className="hud-tech-arc-2"></div>
              <div className="hud-ticks-top-left"></div>
              <div className="hud-ticks-bottom-right"></div>

              {/* Indicatore di stato a pallini in alto a destra */}
              <div className="hud-status-dots">
                {steps.map((_, dotIdx) => (
                  <div 
                    key={dotIdx} 
                    className={`status-dot ${dotIdx === activeStep ? 'active' : dotIdx === activeStep - 1 || dotIdx === activeStep + 1 ? 'highlight' : ''}`}
                  ></div>
                ))}
              </div>

              {/* Linea di puntamento laterale */}
              <div className="hud-pointer-group">
                <div className="hud-pointer-line"></div>
                <div className="hud-pointer-node"></div>
              </div>

              {/* Cerchio centrale con immagine */}
              <div className="hud-center-circle">
                <div className="inner-grid-pattern"></div>
                <img 
                  src={st.img} 
                  alt={st.title} 
                  className="hud-project-img" 
                />
              </div>
            </div>

            {/* PANNELLO INFORMAZIONI */}
            <div className="showcase-info-panel">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default CircleShowcase;