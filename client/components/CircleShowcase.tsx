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
  onStepChange?: (index: number) => void;
}

export const CircleShowcase: React.FC<CircleShowcaseProps> = ({ 
  steps, 
  activeStep, 
  onStepChange 
}) => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const currentProject = steps[activeStep] || steps[0];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-step-idx'));
          if (!isNaN(index) && onStepChange) {
            onStepChange(index);
          }
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [steps, onStepChange]);

  return (
    <div className="circle-showcase-container">
      <div className="sticky-viewport">
        {/* Pane Visivo Fisso con Cerchio e Titolo */}
        <div className="visual-sticky-pane">
          <div className="circle-frame">
            <div 
              className="circle-image" 
              style={{ backgroundImage: `url(${currentProject.img})` }}
            />
            <div className="circle-overlay-ring" />
          </div>

          <div className="sticky-project-meta">
            <span className="project-step-badge">{currentProject.id} / 0{steps.length}</span>
            <h3 className="project-sticky-title">{currentProject.title}</h3>
            <p className="project-sticky-sub">{currentProject.subtitle}</p>
          </div>
        </div>

        {/* Schede di Scorrimento a Calamita */}
        <div className="scrollable-cards-pane">
          {steps.map((step, idx) => (
            <div 
              key={step.id} 
              ref={(el) => (cardsRef.current[idx] = el)}
              data-step-idx={idx}
              className={`process-card ${idx === activeStep ? 'is-active' : ''}`}
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
          min-height: 100vh;
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
          top: 15vh;
          height: 70vh;
          width: 45%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }

        .circle-frame {
          position: relative;
          width: clamp(260px, 26vw, 400px);
          height: clamp(260px, 26vw, 400px);
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 0 50px rgba(0,0,0,0.8);
          border: 1px solid rgba(255,255,255,0.15);
        }

        .circle-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: background-image 0.4s ease-in-out, transform 0.5s ease;
        }

        .circle-overlay-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          box-shadow: inset 0 0 25px rgba(0,0,0,0.7);
          pointer-events: none;
        }

        .sticky-project-meta {
          margin-top: 25px;
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
          font-size: 2rem;
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
          width: 55%;
          padding-left: 4vw;
        }

        .process-card {
          height: 100vh;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          display: flex;
          flex-direction: column;
          justify-content: center;
          opacity: 0.2;
          transform: translateY(30px);
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
          .visual-sticky-pane { position: relative; top: 0; height: auto; width: 100%; margin-top: 50px; }
          .scrollable-cards-pane { width: 100%; padding-left: 0; }
          .process-card { height: auto; min-height: 80vh; }
        }
      `}</style>
    </div>
  );
};