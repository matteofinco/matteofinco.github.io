import React from 'react';

export interface IntroData {
  sec1Title?: string;
  sec1Sub?: string;
  sec1P?: string;
  sec2P1?: string;
  sec2P2?: string;
}

export interface IntroSectionProps {
  t?: IntroData;
  data?: IntroData;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ t, data }) => {
  // Supporta sia la prop 't' che la prop 'data' con valori di fallback predefiniti
  const content = t || data || {};

  const sec1Title = content.sec1Title ?? "PROGETTAZIONE & METODO";
  const sec1Sub = content.sec1Sub ?? "Dall'idea al prototipo funzionale";
  const sec1P = content.sec1P ?? "Sviluppo soluzioni di design industriale e prototipazione con un approccio incentrato su funzionalità, forma e materiali.";
  const sec2P1 = content.sec2P1 ?? "Integrazione tra modellaizone CAD avanzata, stampa 3D (PLA e materiali tecnici) e lavorazioni CNC / Laser.";
  const sec2P2 = content.sec2P2 ?? "Sperimentazione costante su forme organiche, finiture di superficie e sostenibilità dei materiali.";

  return (
    <div className="intro-fullbleed-wrapper">
      {/* RIGA 1: IMMAGINE A FILO BORDO SINISTRO */}
      <section className="intro-row media-left">
        <div className="intro-media-box reveal-editorial reveal-from-left">
          <img
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80"
            alt="Studio Work"
          />
        </div>
        <div className="intro-text-box reveal-editorial reveal-from-right">
          <h2>{sec1Title}</h2>
          <h3 className="sub-grey">{sec1Sub}</h3>
          <p>{sec1P}</p>
        </div>
      </section>

      {/* RIGA 2: IMMAGINE A FILO BORDO DESTRO */}
      <section className="intro-row media-right">
        <div className="intro-text-box reveal-editorial reveal-from-left">
          <h2>Making &amp;<br />Prototipazione</h2>
          <p className="p-spacer">{sec2P1}</p>
          <p>{sec2P2}</p>
        </div>
        <div className="intro-media-box reveal-editorial reveal-from-right">
          <img
            src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80"
            alt="Digital Fabrication & Hardware"
          />
        </div>
      </section>

      <style>{`
        .intro-fullbleed-wrapper {
          width: 100%;
          padding: 100px 0;
          display: flex;
          flex-direction: column;
          gap: 120px;
          box-sizing: border-box;
          background-color: #070707;
        }

        .intro-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          width: 100%;
          min-height: 70vh;
        }

        /* Immagine che tocca il margine sinistro dello schermo */
        .intro-row.media-left .intro-media-box {
          width: 100%;
          height: 620px;
          padding-left: 0;
        }
        .intro-row.media-left .intro-text-box {
          padding: 0 8vw 0 6vw;
        }

        /* Immagine che tocca il margine destro dello schermo */
        .intro-row.media-right .intro-media-box {
          width: 100%;
          height: 620px;
          padding-right: 0;
        }
        .intro-row.media-right .intro-text-box {
          padding: 0 6vw 0 8vw;
        }

        .intro-media-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
          transition: filter 0.8s ease, transform 0.8s ease;
          display: block;
        }

        .intro-media-box:hover img {
          filter: grayscale(0%);
          transform: scale(1.01);
        }

        .intro-text-box h2 {
          font-size: clamp(2.4rem, 4.2vw, 4rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 25px;
          color: #ffffff;
        }

        .intro-text-box h3.sub-grey {
          font-size: clamp(1.2rem, 2vw, 1.8rem);
          font-weight: 500;
          color: #888888;
          margin-bottom: 30px;
          line-height: 1.4;
        }

        .intro-text-box p {
          color: #aaaaaa;
          font-size: 1.12rem;
          line-height: 1.85;
          max-width: 560px;
        }

        .p-spacer {
          margin-bottom: 20px;
        }

        @media (max-width: 1024px) {
          .intro-row {
            grid-template-columns: 1fr;
            gap: 40px;
            height: auto;
          }
          .intro-row.media-left .intro-text-box,
          .intro-row.media-right .intro-text-box {
            padding: 0 6vw;
          }
          .intro-row.media-left .intro-media-box,
          .intro-row.media-right .intro-media-box {
            height: 420px;
          }
        }
      `}</style>
    </div>
  );
};