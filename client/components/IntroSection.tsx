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
    <div className="intro-pinned-container" id="intro-section">
      <style>{`
        .intro-pinned-container {
          position: relative;
          width: 100%;
          height: 220vh; /* Crea lo spazio di scroll prolungato stile editoriale */
          background-color: #070707;
          box-sizing: border-box;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          border-bottom: 1px solid #141414;
          /* IMPORTANTE: niente overflow: hidden qui, altrimenti position: sticky si disattiva */
        }

        .intro-sticky-viewport {
          position: sticky;
          top: 0;
          width: 100%;
          height: 100vh;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 6vw;
          box-sizing: border-box;
        }

        .intro-step-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
          width: 100%;
          height: 80vh;
          max-height: 720px;
        }

        /* TESTI (Sinistra) */
        .intro-text-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
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

        /* MEDIA BOX (Destra) */
        .intro-media-box {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          max-height: 620px;
        }

        .intro-media-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
          transition: filter 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          display: block;
        }

        .intro-media-box:hover img {
          filter: grayscale(0%);
          transform: scale(1.03);
        }

        @media (max-width: 1024px) {
          .intro-pinned-container {
            height: auto;
          }
          .intro-sticky-viewport {
            position: relative;
            height: auto;
            padding: 80px 6vw;
          }
          .intro-step-row {
            grid-template-columns: 1fr;
            height: auto;
            gap: 40px;
          }
          .intro-media-box {
            height: 380px;
          }
        }
      `}</style>

      <div className="intro-sticky-viewport">
        <div className="intro-step-row">
          {/* Testo a sinistra */}
          <div className="intro-text-box">
            <h2>{t.sec1Title}</h2>
            <h3 className="sub-grey">{t.sec1Sub}</h3>
            <p>{t.sec1P}</p>
          </div>

          {/* Immagine a destra */}
          <div className="intro-media-box">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Ffd2f84c112c140578bdb169a972c5725"
              alt="Matteo Finco Studio Work"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;