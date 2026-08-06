import React, { useEffect, useRef, useState } from 'react';

interface IntroProps {
  t: {
    sec1Title: string;
    sec1Sub: string;
    sec1P: string;
    sec2P1: string;
    sec2P2: string;
  };
}

export const IntroSection: React.FC<IntroProps> = ({ t }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const TOTAL_STEPS = 2;

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;

      if (totalScrollableHeight <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableHeight));
      const stepIndex = Math.min(TOTAL_STEPS - 1, Math.floor(progress * TOTAL_STEPS));

      setActiveStep(stepIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="intro-pinned-wrapper"
      ref={wrapperRef}
      style={{ height: `${TOTAL_STEPS * 100}vh` }}
    >
      <style>{`
        .intro-pinned-wrapper {
          position: relative;
          width: 100%;
          background-color: #070707;
          box-sizing: border-box;
          border-bottom: 1px solid #1a1a1a; /* Bordo scuro di separazione a fine sezione */
        }

        /* VIEWPORT FISSA CENTRATA AL 100vh */
        .intro-sticky-viewport {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-sizing: border-box;
        }

        .intro-stage-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          height: 80vh;
          max-height: 720px;
          margin: 0 auto;
        }

        /* STRIP STEP IN SOVRAPPOSIZIONE */
        .intro-step-row {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          width: 100%;
          height: 100%;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateY(20px);
          will-change: opacity, transform;
        }

        .intro-step-row.active {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        /* MEDIA BOX CON DISSOLVENZA E CORNICI SPINTI AI BORDI */
        .intro-media-box {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          max-height: 620px;
        }

        .intro-step-row.media-left .intro-media-box {
          padding-left: 0;
        }

        .intro-step-row.media-right .intro-media-box {
          padding-right: 0;
        }

        .intro-media-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
          transition: filter 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          display: block;
          will-change: transform, filter;
        }

        .intro-media-box:hover img {
          filter: grayscale(0%);
          transform: scale(1.03);
        }

        /* TESTI E PADDING EDITORIALI */
        .intro-text-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .intro-step-row.media-left .intro-text-box {
          padding: 0 6vw;
        }

        .intro-step-row.media-right .intro-text-box {
          padding: 0 6vw;
        }

        .intro-text-box h2 {
          font-size: clamp(2.4rem, 4vw, 3.8rem);
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 20px 0;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .intro-text-box h3.sub-grey {
          font-size: clamp(1.1rem, 1.8vw, 1.6rem);
          font-weight: 500;
          color: #888888;
          margin: 0 0 24px 0;
          line-height: 1.4;
        }

        .intro-text-box p {
          color: #aaaaaa;
          font-size: clamp(0.95rem, 1.1vw, 1.1rem);
          line-height: 1.8;
          max-width: 540px;
          margin: 0;
        }

        .p-spacer {
          margin-bottom: 20px !important;
        }

        @media (max-width: 1024px) {
          .intro-pinned-wrapper {
            height: auto !important;
          }
          .intro-sticky-viewport {
            position: relative;
            height: auto;
            padding: 80px 0;
          }
          .intro-stage-container {
            height: auto;
            max-height: none;
            display: flex;
            flex-direction: column;
            gap: 80px;
          }
          .intro-step-row {
            position: relative;
            inset: auto;
            grid-template-columns: 1fr;
            gap: 30px;
            opacity: 1;
            transform: none;
            pointer-events: auto;
            height: auto;
          }
          .intro-media-box {
            height: 380px;
          }
        }
      `}</style>

      {/* VIEWPORT FISSO PINNED */}
      <div className="intro-sticky-viewport">
        <div className="intro-stage-container">
          
          {/* STEP 01: MEDIA A SINISTRA / TESTO A DESTRA */}
          <div className={`intro-step-row media-left ${activeStep === 0 ? 'active' : ''}`}>
            <div className="intro-media-box">
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80"
                alt="Matteo Finco Studio Work"
              />
            </div>
            <div className="intro-text-box">
              <h2>{t.sec1Title}</h2>
              <h3 className="sub-grey">{t.sec1Sub}</h3>
              <p>{t.sec1P}</p>
            </div>
          </div>

          {/* STEP 02: TESTO A SINISTRA / MEDIA A DESTRA */}
          <div className={`intro-step-row media-right ${activeStep === 1 ? 'active' : ''}`}>
            <div className="intro-text-box">
              <h2>
                Making &amp;
                <br />
                Prototipazione
              </h2>
              <p className="p-spacer">{t.sec2P1}</p>
              <p>{t.sec2P2}</p>
            </div>
            <div className="intro-media-box">
              <img
                src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80"
                alt="Digital Fabrication & Hardware"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IntroSection;