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

  // Calcolo dello scroll per cambiare progetto senza muovere la colonna testo
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const sectionHeight = rect.height - window.innerHeight;
      
      if (sectionHeight <= 0) return;

      // Calcola quanto si è scrollato all'interno della sezione (da 0 a 1)
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));

      // Determina l'indice del progetto attivo
      const index = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      );

      const event = new CustomEvent('set-active-project', { detail: index });
      window.dispatchEvent(event);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  const currentProject = steps[activeStep] || steps[0];

  return (
    <section 
      className="circle-showcase-section" 
      ref={containerRef}
      style={{ height: `${steps.length * 100}vh` }}
    >
      <style>{`
        .circle-showcase-section {
          position: relative;
          width: 100%;
          background-color: #070707;
          box-sizing: border-box;
        }

        /* SCHERMATA FISSA AL CENTRO DEL VIEWPORT */
        .sticky-viewport {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 6vw;
          box-sizing: border-box;
          overflow: hidden;
        }

        .showcase-sticky-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          gap: 60px;
        }

        /* COLONNA SINISTRA: HUD FISSO */
        .hud-sticky-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hud-container {
          position: relative;
          width: 580px;
          height: 580px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hud-center-circle {
          position: relative;
          width: 460px;
          height: 460px;
          background: #ffffff;
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

        .hud-ring-base {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .hud-outer-ring {
          width: 540px;
          height: 540px;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .hud-dashed-ring {
          width: 500px;
          height: 500px;
          border: 1px dashed rgba(255, 255, 255, 0.2);
          animation: hud-spin 80s linear infinite;
        }

        .hud-inner-dashed {
          width: 480px;
          height: 480px;
          border: 1px dashed rgba(255, 255, 255, 0.15);
          animation: hud-spin-reverse 60s linear infinite;
        }

        .hud-tech-arc-1 {
          position: absolute;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: rgba(255, 255, 255, 0.6);
          border-right-color: rgba(255, 255, 255, 0.1);
          transform: rotate(-30deg);
          pointer-events: none;
        }

        .hud-tech-arc-2 {
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-bottom-color: rgba(255, 255, 255, 0.4);
          border-left-color: rgba(255, 255, 255, 0.1);
          transform: rotate(45deg);
          pointer-events: none;
        }

        .hud-curved-dots-wrapper {
          position: absolute;
          width: 500px;
          height: 500px;
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
          transform-origin: 50% 250px;
          transition: all 0.3s ease;
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

        /* COLONNA DESTRA: TESTI SOVRAPPOSTI (STAGED) */
        .text-stage-wrapper {
          position: relative;
          height: 480px;
          width: 100%;
          display: flex;
          align-items: center;
        }

        .process-card-item {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: clamp(10px, 1.5vh, 18px);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .process-card-item.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
          z-index: 2;
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
          line-height: 1;
          letter-spacing: -1px;
        }

        .project-subtitle-text {
          font-size: 1.15rem;
          color: #cccccc;
          font-weight: 500;
        }

        .project-desc-text {
          font-size: clamp(0.85rem, 1vw, 0.95rem);
          color: #999999;
          line-height: 1.55;
          max-width: 480px;
        }

        .project-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 6px;
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
          .showcase-sticky-layout {
            grid-template-columns: 1fr;
          }
          .hud-container {
            transform: scale(0.8);
          }
        }
      `}</style>

      <div className="sticky-viewport">
        <div className="showcase-sticky-layout">
          {/* HUD FISSO A SINISTRA */}
          <div className="hud-sticky-wrapper">
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
                    className={`curved-dot ${dotIdx === activeStep ? 'active' : dotIdx === activeStep - 1 || dotIdx === activeStep + 1 ? 'highlight' : ''}`}
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

          {/* STAGE TESTI A DESTRA (UN SOLO PROGETTO VISIBILE ALLA VOLTA) */}
          <div className="text-stage-wrapper">
            {steps.map((st, index) => (
              <div 
                key={st.id} 
                className={`process-card-item ${index === activeStep ? 'active' : ''}`}
              >
                <div className="project-category-tag">
                  {st.id} // {st.category} // {st.year}
                </div>

                <h2 className="project-main-title">
                  {st.title}
                </h2>

                <div className="project-subtitle-text">
                  {st.subtitle}
                </div>

                <p className="project-desc-text">
                  {st.desc}
                </p>

                <div className="project-meta-grid">
                  <div className="meta-item">
                    <span className="label">Design Approach</span>
                    <span className="value">{st.tools}</span>
                  </div>

                  <div className="meta-item">
                    <span className="label">Materials &amp; Technologies</span>
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
      </div>
    </section>
  );
};

export default CircleShowcase;