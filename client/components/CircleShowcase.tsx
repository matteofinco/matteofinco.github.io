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
    <section className="process-showcase-wrapper">
      {/* COLONNA FISSA STICKY CON MARGINE TOP DEDICATO PER EVITARE L'HEADER */}
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
            
            {/* Fondo scuro anti-glitch */}
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

          {/* Titoli sotto il cerchio */}
          <div className="project-title-under-circle">
            <span className="project-index-tag">PROJECT_0{activeStep + 1} // {steps[activeStep].year}</span>
            <h3 className="project-main-name">{steps[activeStep].title}</h3>
            <p className="project-sub-name">{steps[activeStep].subtitle}</p>
          </div>
        </div>
      </div>

      {/* SCHEDE TESTO CON SNAP MAGNETICO SUI PROGETTI */}
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
    </section>
  );
};