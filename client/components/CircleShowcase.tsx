import React from 'react';

export interface ProcessStep {
  id: string;
  phase: string;
  title: string;
  tools: string;
  material: string;
  year: string;
  role: string;
  desc: string;
  quote: string;
  img: string;
}

interface ShowcaseProps {
  steps: ProcessStep[];
  activeStep: number;
}

export const CircleShowcase: React.FC<ShowcaseProps> = ({ steps, activeStep }) => {
  // Calcolo delle posizioni dei pallini sul cerchio SVG (Raggio = 180, Centro = 250,250)
  const radius = 180;
  const centerX = 250;
  const centerY = 250;

  return (
    <section className="process-showcase-wrapper">
      {/* COLONNA FISSA A SINISTRA CON CERCHIO SVG E PALLINI DINAMICI */}
      <div className="process-sticky-left">
        <div className="circle-technical-frame">
          <svg className="circle-hud-svg" viewBox="0 0 500 500">
            <defs>
              <clipPath id="circleImageClip">
                <circle cx={centerX} cy={centerY} r={radius - 20} />
              </clipPath>
            </defs>

            {/* Cerchi concentrici di guida e scala numerica */}
            <circle cx={centerX} cy={centerY} r={radius + 15} stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
            <circle cx={centerX} cy={centerY} r={radius} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="6,6" fill="none" />
            <circle cx={centerX} cy={centerY} r={radius - 20} stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />

            {/* Foto ritagliata all'interno del cerchio */}
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

            {/* Pallini interattivi lungo la circonferenza */}
            {steps.map((step, idx) => {
              const angleDeg = -90 + idx * (360 / steps.length);
              const angleRad = (angleDeg * Math.PI) / 180;
              const px = centerX + radius * Math.cos(angleRad);
              const py = centerY + radius * Math.sin(angleRad);
              const isActive = activeStep === idx;

              return (
                <g key={step.id} className="circle-node-group">
                  {/* Anello esterno pulsante se attivo */}
                  {isActive && (
                    <circle cx={px} cy={py} r="12" fill="none" stroke="#ffffff" strokeWidth="1" className="node-pulse" />
                  )}
                  {/* Pallino principale */}
                  <circle
                    cx={px}
                    cy={py}
                    r={isActive ? "6" : "4"}
                    fill={isActive ? "#ffffff" : "#444444"}
                    stroke="#070707"
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />
                  {/* Etichetta numerica del pallino */}
                  <text
                    x={px + (Math.cos(angleRad) * 22)}
                    y={py + (Math.sin(angleRad) * 22) + 4}
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

            {/* Dettagli tecnici centrali e reticolo */}
            <line x1={centerX - 15} y1={centerY} x2={centerX + 15} y2={centerY} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1={centerX} y1={centerY - 15} x2={centerX} y2={centerY + 15} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <text x={centerX} y={centerY + 45} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">
              PHASE_0{activeStep + 1} // ACTIVE
            </text>
          </svg>
        </div>
      </div>

      {/* SPIEGAZIONI A DESTRA */}
      <div className="process-scroll-right">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className={`process-card ${activeStep === idx ? 'active-step' : ''}`}
            data-step={idx}
          >
            <div className="phase-number">PHASE_{step.id} // {step.phase}</div>
            <div className="phase-title">{step.title}</div>

            <div className="process-meta-grid">
              <div className="meta-item">
                <div className="meta-label">Strumenti</div>
                <div className="meta-value">{step.tools}</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Materiali / Output</div>
                <div className="meta-value">{step.material}</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Anno / Stato</div>
                <div className="meta-value">{step.year}</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Ruolo</div>
                <div className="meta-value">{step.role}</div>
              </div>
            </div>

            <p className="phase-desc">{step.desc}</p>
            <blockquote>{step.quote}</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};