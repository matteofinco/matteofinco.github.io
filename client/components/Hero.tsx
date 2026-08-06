import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="hero-viewport">
      <div className="hero-background-layers">
        <svg className="hero-svg" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
            
            {/* MASCHERA SVG NOME - SOSTITUIBILE CON TRACCIATO DA PHOTOSHOP / ILLUSTRATOR */}
            <mask id="designTextMask">
              <rect width="100%" height="100%" fill="white" />
              <text
                x="50%"
                y="45%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="black"
                fontSize="110"
                fontWeight="900"
                fontFamily="system-ui, sans-serif"
                letterSpacing="-3"
              >
                MATTEO FINCO
              </text>
            </mask>
          </defs>

          {/* Sfondo Griglia */}
          <rect width="100%" height="100%" fill="url(#gridPattern)" />

          {/* Elementi Decorativi del Visual Hero */}
          <g mask="url(#designTextMask)">
            <circle cx="700" cy="360" r="280" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
            <circle cx="700" cy="360" r="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="6,6" fill="none" />
            <line x1="200" y1="360" x2="1200" y2="360" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <line x1="700" y1="100" x2="700" y2="620" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          </g>
        </svg>

        <div className="hero-overlay-text">
          <h1 className="hero-title">MATTEO FINCO</h1>
          <p className="hero-subtitle">PRODUCT DESIGNER &amp; MAKER</p>
          <div className="hero-location">// VENETO, ITALY — IUAV VENICE</div>
        </div>
      </div>

      <style>{`
        .hero-viewport {
          position: relative;
          width: 100%;
          height: 100vh;
          background-color: #070707;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-background-layers {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-svg {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        .hero-overlay-text {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
        }

        .hero-title {
          font-size: clamp(3.2rem, 8.5vw, 7.5rem);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -2px;
          line-height: 1;
          margin-bottom: 15px;
        }

        .hero-subtitle {
          font-family: monospace;
          font-size: clamp(0.9rem, 1.8vw, 1.3rem);
          color: #888888;
          letter-spacing: 4px;
          margin-bottom: 25px;
        }

        .hero-location {
          font-family: monospace;
          font-size: 0.78rem;
          color: #555555;
          letter-spacing: 2px;
        }
      `}</style>
    </section>
  );
};