import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="hero-viewport">
      {/* Sfondo dinamico animato con dissolvenze */}
      <div className="hero-bg-animator" />
      <div className="hero-overlay-gradient" />

      <div className="hero-content">
        {/* Titolo trasparente che rivela il movimento e la dissolvenza sottostante */}
        <h1 className="hero-title-mask">
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

        /* Strato di sfondi in dissolvenza incrociata */
        .hero-bg-animator {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 60%),
            url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2000&q=80');
          background-size: 180% 180%;
          background-position: center;
          animation: heroTextureMotion 16s ease-in-out infinite alternate;
          z-index: 1;
        }

        .hero-overlay-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(7,7,7,0.2) 0%, rgba(7,7,7,0.95) 90%);
          z-index: 2;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          padding: 0 20px;
        }

        /* Testo mascherato trasparente */
        .hero-title-mask {
          font-size: clamp(3.8rem, 10vw, 9rem);
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 1;
          margin-bottom: 20px;
          background-image: url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2000&q=80');
          background-size: 220% 220%;
          background-position: center;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: textTextureMove 14s ease-in-out infinite alternate;
        }

        .hero-subtitle {
          font-family: monospace;
          font-size: clamp(0.85rem, 1.6vw, 1.2rem);
          color: #888888;
          letter-spacing: 5px;
          text-transform: uppercase;
        }

        @keyframes heroTextureMotion {
          0% {
            transform: scale(1) translate(0, 0);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.08) translate(-2%, 2%);
            opacity: 0.95;
          }
          100% {
            transform: scale(1.03) translate(2%, -1%);
            opacity: 0.75;
          }
        }

        @keyframes textTextureMove {
          0% {
            background-position: 0% 40%;
            filter: brightness(1) contrast(1.1);
          }
          50% {
            background-position: 100% 60%;
            filter: brightness(1.3) contrast(1.25);
          }
          100% {
            background-position: 40% 100%;
            filter: brightness(0.95) contrast(1.15);
          }
        }
      `}</style>
    </section>
  );
};