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

interface ShowcaseProps {
  steps: ProjectStep[];
  activeStep: number;
}

export const CircleShowcase: React.FC<ShowcaseProps> = ({ steps, activeStep }) => {
  const radius = 240;
  const centerX = 290;
  const centerY = 280;

  return (
    <section id="process-section" className="process-showcase-wrapper">
      {/* COLONNA FISSA STICKY A SINISTRA (CON RISPETTO HEADER) */}
      <div className="process-sticky-left">
        <div className="circle-technical-frame">
          <svg className="circle-hud-svg" viewBox="0 0 580 560">
            <defs>
              <clipPath id="circleImageClip" clipPathUnits="userSpaceOnUse">
                <circle cx={centerX} cy={centerY} r={radius - 2} />
              </clipPath>
            </defs>

            {/* Anelli HUD Esterni */}
            <circle cx={centerX} cy={centerY} r={radius + 20} stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
            <circle cx={centerX} cy={centerY} r={radius + 6} stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="8,8" fill="none" />
            
            {/* Fondo scuro */}
            <circle cx={centerX} cy={centerY} r={radius - 2} fill="#070707" />

            {/* Layer Immagini */}
            <g clipPath="url(#circleImageClip)" className="circle-images-container">
              {steps.map((step, idx) => (
                <image
                  key={step.id}
                  href={step.img}
                  x={centerX - radius}
                  y={centerY - radius}
                  width={radius * 2}
                  height={radius * 2}
                  preserveAspectRatio="xMidYMid slice"
                  className={`circle-img-layer ${activeStep === idx ? 'active-layer' : ''}`}
                />
              ))}
            </g>

            <circle cx={centerX} cy={centerY} r={radius - 2} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />

            {/* Nodi sulla circonferenza */}
            {steps.map((step, idx) => {
              const angleDeg = -90 + idx * (360 / steps.length);
              const angleRad = (angleDeg * Math.PI) / 180;
              const px = centerX + radius * Math.cos(angleRad);
              const py = centerY + radius * Math.sin(angleRad);
              const isActive = activeStep === idx;

              return (
                <g key={step.id} className="circle-node-group">
                  {isActive && (
                    <circle cx={px} cy={py} r="14" fill="none" stroke="#ffffff" strokeWidth="1" className="node-pulse" />
                  )}
                  <circle
                    cx={px}
                    cy={py}
                    r={isActive ? "6.5" : "4"}
                    fill={isActive ? "#ffffff" : "#333333"}
                    stroke="#070707"
                    strokeWidth="2"
                  />
                  <text
                    x={px + Math.cos(angleRad) * 26}
                    y={py + Math.sin(angleRad) * 26 + 4}
                    fill={isActive ? "#ffffff" : "#666666"}
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    0{idx + 1}
                  </text>
                </g>
              );
            })}

            <line x1={centerX - 12} y1={centerY} x2={centerX + 12} y2={centerY} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1={centerX} y1={centerY - 12} x2={centerX} y2={centerY + 12} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          </svg>

          {/* Dettagli sotto il cerchio */}
          <div className="project-title-under-circle">
            <span className="project-index-tag">PROJECT_0{activeStep + 1} // {steps[activeStep].year}</span>
            <h3 className="project-main-name">{steps[activeStep].title}</h3>
            <p className="project-sub-name">{steps[activeStep].subtitle}</p>
          </div>
        </div>
      </div>

      {/* SCHEDE PROGETTO A DESTRA CON MAGNETO DELICATO */}
      <div className="process-scroll-right">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className={`process-card snap-card ${activeStep === idx ? 'active-step' : ''}`}
            data-step={idx}
          >
            <div className="card-content-wrapper">
              <div className="phase-number">0{idx + 1} // {step.category}</div>
              <div className="phase-title">{step.title}</div>
              <div className="phase-subtitle">{step.subtitle}</div>

              <div className="process-meta-grid">
                <div className="meta-item">
                  <div className="meta-label">Strumenti &amp; Software</div>
                  <div className="meta-value">{step.tools}</div>
                </div>
                <div className="meta-item">
                  <div className="meta-label">Materiali / Output</div>
                  <div className="meta-value">{step.material}</div>
                </div>
              </div>

              <p className="phase-desc">{step.desc}</p>

              <a href={step.link} className="project-detail-btn">
                <span>Scopri il progetto {step.title}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .process-showcase-wrapper {
          max-width: 1650px;
          margin: 0 auto;
          padding: 0 6vw;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: start;
          box-sizing: border-box;
        }

        .process-sticky-left {
          position: sticky;
          top: 90px;
          height: calc(100vh - 100px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .circle-technical-frame {
          position: relative;
          width: 100%;
          max-width: 580px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .circle-hud-svg {
          width: 100%;
          height: auto;
          max-height: calc(100vh - 230px);
          max-width: min(580px, 42vw);
          overflow: visible;
        }

        .circle-images-container { isolation: isolate; }

        .circle-img-layer {
          opacity: 0;
          transform: scale(1.04) translateZ(0);
          backface-visibility: hidden;
          transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .circle-img-layer.active-layer { opacity: 1; transform: scale(1) translateZ(0); }

        @keyframes pulseRing { 0% { r: 8px; opacity: 1; } 100% { r: 22px; opacity: 0; } }
        .node-pulse { animation: pulseRing 1.8s ease-out infinite; }

        .project-title-under-circle {
          margin-top: 10px;
          text-align: center;
          width: 100%;
        }

        .project-index-tag { font-family: monospace; font-size: 0.8rem; color: #777; letter-spacing: 2px; display: block; margin-bottom: 4px; }
        .project-main-name { font-size: 2.3rem; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; line-height: 1.1; }
        .project-sub-name { font-size: 1rem; color: #aaa; margin-top: 4px; font-weight: 500; }

        .process-card.snap-card {
          height: 100vh;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          scroll-snap-align: center;
          scroll-snap-stop: normal;
          opacity: 0.15;
          filter: blur(6px);
          transition: opacity 0.6s ease, filter 0.6s ease;
          border-bottom: 1px solid #141414;
        }

        .process-card.snap-card.active-step { opacity: 1; filter: blur(0px); }

        .card-content-wrapper { padding: 20px 0; }
        .process-card .phase-number { font-family: monospace; font-size: 0.85rem; color: #777777; margin-bottom: 8px; }
        .process-card .phase-title { font-size: 2.8rem; font-weight: 800; color: #ffffff; line-height: 1.15; }
        .process-card .phase-subtitle { font-size: 1.25rem; color: #888888; font-weight: 500; margin-bottom: 25px; }

        .process-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
          padding: 20px 0;
          border-y: 1px solid #1c1c1c;
        }

        .meta-item .meta-label { font-family: monospace; font-size: 0.72rem; color: #555555; text-transform: uppercase; margin-bottom: 4px; }
        .meta-item .meta-value { font-size: 0.95rem; color: #cccccc; font-weight: 500; }
        .process-card .phase-desc { color: #aaaaaa; font-size: 1.1rem; line-height: 1.85; margin-bottom: 35px; }

        .project-detail-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          align-self: start;
          padding: 16px 32px;
          background: #ffffff;
          color: #070707;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .project-detail-btn:hover {
          background: #e0e0e0;
          transform: translateX(6px);
        }

        @media (max-width: 1024px) {
          .process-showcase-wrapper { grid-template-columns: 1fr; gap: 60px; }
          .process-sticky-left { position: relative; top: 0; height: auto; padding-top: 40px; }
          .process-card.snap-card { height: auto; min-height: 80vh; }
        }
      `}</style>
    </section>
  );
};