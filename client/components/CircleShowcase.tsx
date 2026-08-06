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
  const radius = 180;
  const centerX = 250;
  const centerY = 250;

  return (
    <section className="process-showcase-wrapper">
      {/* COLONNA STICKY A SINISTRA (CERCHIO INGRANDITO DEL 20%) */}
      <div className="process-sticky-left">
        <div className="circle-technical-frame">
          <svg className="circle-hud-svg" viewBox="0 0 500 500">
            <defs>
              <clipPath id="circleImageClip">
                <circle cx={centerX} cy={centerY} r={radius - 15} />
              </clipPath>
            </defs>

            {/* Anelli di riferimento geometrico */}
            <circle cx={centerX} cy={centerY} r={radius + 20} stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
            <circle cx={centerX} cy={centerY} r={radius} stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="6,6" fill="none" />
            <circle cx={centerX} cy={centerY} r={radius - 15} stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none" />

            {/* Immagine del progetto attivo */}
            <g clipPath="url(#circleImageClip)">
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

            {/* 7 Nodi distribuiti lungo la circonferenza */}
            {steps.map((step, idx) => {
              const angleDeg = -90 + idx * (360 / steps.length);
              const angleRad = (angleDeg * Math.PI) / 180;
              const px = centerX + radius * Math.cos(angleRad);
              const py = centerY + radius * Math.sin(angleRad);
              const isActive = activeStep === idx;

              return (
                <g key={step.id} className="circle-node-group">
                  {isActive && (
                    <circle cx={px} cy={py} r="13" fill="none" stroke="#ffffff" strokeWidth="1" className="node-pulse" />
                  )}
                  <circle
                    cx={px}
                    cy={py}
                    r={isActive ? "6.5" : "4"}
                    fill={isActive ? "#ffffff" : "#444444"}
                    stroke="#070707"
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />
                  <text
                    x={px + Math.cos(angleRad) * 24}
                    y={py + Math.sin(angleRad) * 24 + 4}
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

            {/* Reticolo di centraggio */}
            <line x1={centerX - 15} y1={centerY} x2={centerX + 15} y2={centerY} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1={centerX} y1={centerY - 15} x2={centerX} y2={centerY + 15} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          </svg>

          {/* TITOLO DEL PROGETTO SOTTO IL CERCHIO */}
          <div className="project-title-under-circle">
            <span className="project-index-tag">PROJECT_0{activeStep + 1} // {steps[activeStep].year}</span>
            <h3 className="project-main-name">{steps[activeStep].title}</h3>
            <p className="project-sub-name">{steps[activeStep].subtitle}</p>
          </div>
        </div>
      </div>

      {/* COLONNA TESTI E PULSANTI LINK A DESTRA */}
      <div className="process-scroll-right">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className={`process-card ${activeStep === idx ? 'active-step' : ''}`}
            data-step={idx}
          >
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

            {/* BOTTONE LINK DI APPROFONDIMENTO */}
            <a href={step.link} className="project-detail-btn">
              <span>Scopri il progetto {step.title}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};