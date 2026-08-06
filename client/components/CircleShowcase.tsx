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
  // CERCHIO INGRANDITO (Radius 265px su canvas 640x640)
  const radius = 265;
  const centerX = 320;
  const centerY = 310;

  return (
    <section className="process-showcase-wrapper">
      {/* COLONNA FISSA (STICKY) A SINISTRA CON CERCHIO GIGANTE */}
      <div className="process-sticky-left">
        <div className="circle-technical-frame">
          <svg className="circle-hud-svg" viewBox="0 0 640 620">
            <defs>
              <clipPath id="circleImageClip" clipPathUnits="userSpaceOnUse">
                <circle cx={centerX} cy={centerY} r={radius - 2} />
              </clipPath>
            </defs>

            {/* Anelli HUD Esterni */}
            <circle cx={centerX} cy={centerY} r={radius + 24} stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
            <circle cx={centerX} cy={centerY} r={radius + 8} stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="8,8" fill="none" />
            
            {/* FONDO NERO ANTI-GLITCH PER EVITARE RIGHE COLORATE AI BORDI */}
            <circle cx={centerX} cy={centerY} r={radius - 2} fill="#070707" />

            {/* IMMAGINI CON MASK E TRANSITION SMUSSATA */}
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

            {/* Bordo di chiusura del cerchio */}
            <circle cx={centerX} cy={centerY} r={radius - 2} stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />

            {/* NODI NUMERATI SULLA CIRCONFERENZA */}
            {steps.map((step, idx) => {
              const angleDeg = -90 + idx * (360 / steps.length);
              const angleRad = (angleDeg * Math.PI) / 180;
              const px = centerX + radius * Math.cos(angleRad);
              const py = centerY + radius * Math.sin(angleRad);
              const isActive = activeStep === idx;

              return (
                <g key={step.id} className="circle-node-group">
                  {isActive && (
                    <circle cx={px} cy={py} r="15" fill="none" stroke="#ffffff" strokeWidth="1.2" className="node-pulse" />
                  )}
                  <circle
                    cx={px}
                    cy={py}
                    r={isActive ? "7" : "4.5"}
                    fill={isActive ? "#ffffff" : "#333333"}
                    stroke="#070707"
                    strokeWidth="2"
                  />
                  <text
                    x={px + Math.cos(angleRad) * 28}
                    y={py + Math.sin(angleRad) * 28 + 4}
                    fill={isActive ? "#ffffff" : "#666666"}
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight={isActive ? "bold" : "normal"}
                    textAnchor="middle"
                  >
                    0{idx + 1}
                  </text>
                </g>
              );
            })}

            {/* Reticolo Mirino Centrale */}
            <line x1={centerX - 14} y1={centerY} x2={centerX + 14} y2={centerY} stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
            <line x1={centerX} y1={centerY - 14} x2={centerX} y2={centerY + 14} stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          </svg>

          {/* TITOLO DEL PROGETTO SOTTO IL CERCHIO GIGANTE */}
          <div className="project-title-under-circle">
            <span className="project-index-tag">PROJECT_0{activeStep + 1} // {steps[activeStep].year}</span>
            <h3 className="project-main-name">{steps[activeStep].title}</h3>
            <p className="project-sub-name">{steps[activeStep].subtitle}</p>
          </div>
        </div>
      </div>

      {/* SCHEDE PROGETTI A DESTRA: OGNI SCHEDA È UN BLOCCO SNAP MAGNETICO AL CENTRO */}
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