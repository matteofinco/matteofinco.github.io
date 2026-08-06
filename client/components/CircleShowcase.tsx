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
    <section className="circle-showcase-container">
      <div className="sticky-viewport">
        {/* Pane Fisso Sticky Sinistra */}
        <div className="visual-sticky-pane">
          <div className="circle-frame">
            <div 
              className="circle-image" 
              style={{ backgroundImage: `url(${currentProject.img})` }}
            />
            <div className="circle-overlay-ring" />
          </div>

          {/* Titolo Sotto il Cerchio */}
          <div className="sticky-project-meta">
            <span className="project-step-badge">{currentProject.id} / 0{steps.length}</span>
            <h3 className="project-sticky-title">{currentProject.title}</h3>
            <p className="project-sticky-sub">{currentProject.subtitle}</p>
          </div>
        </div>

        {/* Schede Descrittive a Destra */}
        <div className="scrollable-cards-pane">
          {steps.map((step, idx) => (
            <div 
              key={step.id} 
              className={`process-card ${idx === activeStep ? 'is-active' : ''}`}
              data-step={idx}
            >
              <div className="card-header-tags">
                <span className="category-tag">{step.category}</span>
                <span className="year-tag">{step.year}</span>
              </div>

              <h2 className="card-title">{step.title}</h2>
              <p className="card-subtitle">{step.subtitle}</p>
              <p className="card-desc">{step.desc}</p>

              <div className="card-specs-grid">
                <div>
                  <span className="spec-label">STRUMENTI</span>
                  <span className="spec-val">{step.tools}</span>
                </div>
                <div>
                  <span className="spec-label">MATERIALI</span>
                  <span className="spec-val">{step.material}</span>
                </div>
              </div>

              <a href={step.link} className="project-details-btn">
                ESPLORA PROGETTO →
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .circle-showcase-container {
          position: relative;
          width: 100%;
          background-color: #070707;
        }

        .sticky-viewport {
          display: flex;
          align-items: flex-start;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5vw;
        }

        .visual-sticky-pane {
          position: sticky;
          top: 100px;
          height: calc(100vh - 120px);
          width: 48%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }

        .circle-frame {
          position: relative;
          width: clamp(260px, 28vw, 420px);
          height: clamp(260px, 28vw, 420px);
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 0 50px rgba(0,0,0,0.8);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .circle-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: background-image 0.5s ease-in-out, transform 0.6s ease;
        }

        .circle-overlay-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.6);
          pointer-events: none;
        }

        .sticky-project-meta {
          margin-top: 30px;
          text-align: center;
          transition: opacity 0.3s ease;
        }

        .project-step-badge {
          font-family: monospace;
          font-size: 0.85rem;
          color: #666;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 6px;
        }

        .project-sticky-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -1px;
          margin: 0;
        }

        .project-sticky-sub {
          font-size: 0.95rem;
          color: #888888;
          margin-top: 4px;
        }

        .scrollable-cards-pane {
          width: 52%;
          padding-top: 10vh;
          padding-bottom: 20vh;
          padding-left: 4vw;
        }

        .process-card {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          opacity: 0.25;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .process-card.is-active {
          opacity: 1;
          transform: translateY(0);
        }

        .card-header-tags {
          display: flex;
          gap: 15px;
          font-family: monospace;
          font-size: 0.78rem;
          margin-bottom: 12px;
        }

        .category-tag { color: #aaa; letter-spacing: 1.5px; }
        .year-tag { color: #555; }

        .card-title {
          font-size: clamp(2rem, 3.5vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 8px;
        }

        .card-subtitle {
          font-size: 1.1rem;
          color: #999;
          margin-bottom: 24px;
        }

        .card-desc {
          font-size: 1rem;
          color: #cccccc;
          line-height: 1.8;
          max-width: 520px;
          margin-bottom: 30px;
        }

        .card-specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding: 20px 0;
          border-top: 1px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
          margin-bottom: 30px;
          max-width: 520px;
        }

        .spec-label {
          display: block;
          font-family: monospace;
          font-size: 0.72rem;
          color: #555555;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }

        .spec-val {
          font-size: 0.88rem;
          color: #dddddd;
        }

        .project-details-btn {
          display: inline-block;
          font-family: monospace;
          font-size: 0.85rem;
          color: #ffffff;
          text-decoration: none;
          letter-spacing: 1.5px;
          border-bottom: 1px solid #ffffff;
          padding-bottom: 4px;
          align-self: flex-start;
        }

        @media (max-width: 900px) {
          .sticky-viewport { flex-direction: column; }
          .visual-sticky-pane { position: relative; top: 0; height: auto; width: 100%; }
          .scrollable-cards-pane { width: 100%; padding-left: 0; }
          .process-card { min-height: auto; padding: 60px 0; }
        }
      `}</style>
    </section>
  );
};