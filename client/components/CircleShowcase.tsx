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
  const currentProject = steps[activeStep] || steps[0];

  return (
    <section className="circle-showcase-section">
      <style>{`
        .circle-showcase-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 6vw;
          box-sizing: border-box;
          background-color: #070707;
          overflow: hidden;
        }

        .showcase-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          max-width: 1300px;
          width: 100%;
          gap: 60px;
          z-index: 2;
        }

        /* HUD GRAPHIC CONTAINER */
        .hud-container {
          position: relative;
          width: 480px;
          height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .hud-center-content {
          position: relative;
          width: 290px;
          height: 290px;
          background: #ffffff;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.7);
        }

        .inner-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #e0e0e0 1px, transparent 1px);
          background-size: 14px 14px;
          opacity: 0.7;
        }

        .hud-project-img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease;
        }

        /* HUD Rings & Elements */
        .hud-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .hud-ring-1 {
          width: 390px;
          height: 390px;
          border: 1px dashed rgba(255, 255, 255, 0.18);
          animation: hud-spin 50s linear infinite;
        }

        .hud-ring-2 {
          width: 450px;
          height: 450px;
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .hud-ring-dotted {
          width: 420px;
          height: 420px;
          border: 2px dotted rgba(255, 255, 255, 0.22);
          border-radius: 50%;
          animation: hud-spin-reverse 70s linear infinite;
        }

        .hud-arc {
          position: absolute;
          border-radius: 50%;
          border: 2px solid transparent;
          pointer-events: none;
        }

        .hud-arc-1 {
          width: 470px;
          height: 470px;
          border-top-color: rgba(255, 255, 255, 0.55);
          border-right-color: rgba(255, 255, 255, 0.08);
          transform: rotate(-45deg);
        }

        .hud-arc-2 {
          width: 370px;
          height: 370px;
          border-bottom-color: rgba(255, 255, 255, 0.35);
          border-left-color: rgba(255, 255, 255, 0.08);
          transform: rotate(30deg);
        }

        .hud-pointer-line {
          position: absolute;
          right: 5px;
          top: 50%;
          width: 65px;
          height: 1px;
          background: rgba(255, 255, 255, 0.35);
        }

        .hud-pointer-dot {
          position: absolute;
          right: 1px;
          top: calc(50% - 3px);
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
          margin-top: 5px;
        }

        .project-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 15px;
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

        /* LISTA RAPIDA DEI PROGETTI PER CAMBIO STATO */
        .project-steps-selector {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .step-pill {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid #222222;
          color: #777777;
          padding: 6px 14px;
          font-size: 0.8rem;
          font-family: monospace;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .step-pill.active {
          background: #ffffff;
          color: #070707;
          border-color: #ffffff;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .showcase-grid-layout {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .project-meta-grid {
            text-align: left;
          }
          .project-action-link, .project-steps-selector {
            margin-left: auto;
            margin-right: auto;
          }
          .hud-container {
            transform: scale(0.85);
            margin: -30px auto;
          }
        }
      `}</style>

      <div className="showcase-grid-layout">
        {/* GRAFICA HUD CON CERCHIO CENTRALE */}
        <div className="hud-container">
          <div className="hud-ring hud-ring-1"></div>
          <div className="hud-ring hud-ring-2"></div>
          <div className="hud-ring hud-ring-dotted"></div>
          <div className="hud-arc hud-arc-1"></div>
          <div className="hud-arc hud-arc-2"></div>
          
          <div className="hud-pointer-line"></div>
          <div className="hud-pointer-dot"></div>

          <div className="hud-center-content">
            <div className="inner-grid-pattern"></div>
            <img 
              src={currentProject.img} 
              alt={currentProject.title} 
              className="hud-project-img" 
            />
          </div>
        </div>

        {/* PANNELLO INFORMAZIONI PROGETTO ATTIVO */}
        <div className="showcase-info-panel">
          <div className="project-category-tag">
            {currentProject.category} // {currentProject.year}
          </div>
          <h2 className="project-main-title">{currentProject.title}</h2>
          <div className="project-subtitle-text">{currentProject.subtitle}</div>
          <p className="project-desc-text">{currentProject.desc}</p>

          <div className="project-meta-grid">
            <div className="meta-item">
              <span className="label">Strumenti & CAD</span>
              <span className="value">{currentProject.tools}</span>
            </div>
            <div className="meta-item">
              <span className="label">Materiali & CMF</span>
              <span className="value">{currentProject.material}</span>
            </div>
          </div>

          <div className="project-steps-selector">
            {steps.map((st, idx) => (
              <button 
                key={st.id} 
                className={`step-pill ${idx === activeStep ? 'active' : ''}`}
                onClick={() => {
                  const ev = new CustomEvent('set-active-project', { detail: idx });
                  window.dispatchEvent(ev);
                }}
              >
                {st.id}
              </button>
            ))}
          </div>

          <a href={currentProject.link} className="project-action-link">
            ESPLORA PROGETTO →
          </a>
        </div>
      </div>
    </section>
  );
};
export default CircleShowcase;