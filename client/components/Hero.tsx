import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="hero-viewport">
      <div className="hero-content">
        {/* TITOLO CON TESTO TRASPARENTE E ANIMAZIONE DI SFONDO VISIBILE ATTRAVERSO LE LETTERE */}
        <h1 className="hero-title-transparent">
          MATTEO FINCO
        </h1>
        <p className="hero-subtitle">PRODUCT DESIGNER &amp; MAKER</p>
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
          overflow: hidden;
        }

        .hero-content {
          text-align: center;
          padding: 0 20px;
          z-index: 2;
        }

        /* EFFETTO TESTO TRASPARENTE CON ANIMAZIONE CHE SI VEDE ATTRAVERSO LE LETTERE */
        .hero-title-transparent {
          font-size: clamp(3.5rem, 9.5vw, 8.5rem);
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 1;
          margin-bottom: 18px;
          
          /* Ritaglio immagine/animazione dentro il testo */
          background-image: url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2000&q=80');
          background-size: 200% 200%;
          background-position: center;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          
          /* Animazione fluida dello sfondo visibile attraverso il testo */
          animation: textTextureMove 18s ease infinite alternate;
        }

        @keyframes textTextureMove {
          0% {
            background-position: 0% 50%;
            filter: brightness(1) contrast(1.1);
          }
          50% {
            background-position: 100% 50%;
            filter: brightness(1.2) contrast(1.3);
          }
          100% {
            background-position: 50% 100%;
            filter: brightness(0.9) contrast(1.2);
          }
        }

        .hero-subtitle {
          font-family: monospace;
          font-size: clamp(0.85rem, 1.6vw, 1.2rem);
          color: #777777;
          letter-spacing: 4px;
        }
      `}</style>
    </section>
  );
};