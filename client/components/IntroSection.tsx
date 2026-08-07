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
          height: 220vh;
          background-color: #070707;
          box-sizing: border-box;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          border-bottom: 1px solid #141414;
        }

        .intro-sticky-viewport {
          position: sticky;
          top: 0;
          width: 100%;
          height: 100vh;
          /* Calcola il padding sinistro per allinearsi con la griglia mantenendo il margine destro a 0 */
          padding-left: max(6vw, calc((100vw - 1400px) / 2));
          padding-right: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          box-sizing: border-box;
          overflow: hidden;
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
          padding-right: 20px;
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

        /* MEDIA BOX (Destra - Full Bleed al bordo dello schermo) */
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
          .intro-text-box {
            padding-right: 0;
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
              src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F8bb57828b5694c82bd4e123e8d86a466"
              alt="Matteo Finco Studio Work"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;