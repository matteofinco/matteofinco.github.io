import React from 'react';

interface IntroProps {
  t: {
    sec1Title: string;
    sec1Sub: string;
    sec1P: string;
  };
}

export const IntroSection: React.FC<IntroProps> = ({ t }) => {
  return (
    <section className="intro-snap-section" id="intro-section">
      <style>{`
        .intro-snap-section {
          width: 100%;
          height: 100vh;
          min-height: 100vh;
          background-color: #070707;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10;
          box-sizing: border-box;
          /* Abilita l'aggancio di precisione durante lo scroll */
          scroll-snap-align: center;
          scroll-snap-stop: always;
          border-bottom: 1px solid #141414;
        }

        .intro-stage-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          height: 80vh;
          max-height: 720px;
          margin: 0 auto;
          display: flex;
          align-items: center;
        }

        .intro-step-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        /* MEDIA BOX CON DISSOLVENZA E CORNICI */
        .intro-media-box {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          max-height: 620px;
          padding-left: 0;
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

        /* TESTO ED ELEGANZA EDITORIALE */
        .intro-text-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
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

        @media (max-width: 1024px) {
          .intro-snap-section {
            height: auto;
            min-height: auto;
            padding: 80px 0;
            scroll-snap-align: none;
          }
          .intro-stage-container {
            height: auto;
            max-height: none;
          }
          .intro-step-row {
            grid-template-columns: 1fr;
            gap: 30px;
            height: auto;
          }
          .intro-media-box {
            height: 380px;
          }
        }
      `}</style>

      <div className="intro-stage-container">
        <div className="intro-step-row">
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
      </div>
    </section>
  );
};

export default IntroSection;