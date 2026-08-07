import React from 'react';

export default function Archivia() {
  return (
    <>
      <style>{`
        /* Prevent horizontal scrollbar caused by 50vw full-bleed */
        body {
          overflow-x: hidden;
        }

        /* Base image constraints */
        img {
          max-width: 100%;
        }

        /* Container centrale dell'articolo/progetto */
        .editorial-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Grid per righe editoriali */
        .editorial-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          width: 100%;
          margin: 100px 0;
        }

        /* Wrapper dei media full-bleed */
        .row-media {
          width: 50vw;
          height: 520px;
          overflow: hidden;
          background: #0d0d0d;
          border: none;
        }

        /* Sfondamento a sinistra per prima immagine */
        .editorial-row .row-media:first-child {
          margin-left: calc(-50vw + 50%);
        }

        /* Sfondamento a destra per ultima immagine */
        .editorial-row .row-media:last-child {
          margin-right: calc(-50vw + 50%);
          justify-self: end;
        }

        /* Pieno controllo dell'immagine senza distorsioni */
        .row-media img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }

        /* Stili testo di supporto */
        .editorial-text h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        .editorial-text p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #aaa;
        }
      `}</style>

      <div className="editorial-content">
        {/* Sezione Solution: Immagine a sinistra (bordo schermo), testo a destra */}
        <section className="editorial-row">
          <div className="row-media">
            <img src="/images/solution.jpg" alt="Solution" />
          </div>
          <div className="editorial-text">
            <h2>Solution</h2>
            <p>
              Descrizione dettagliata della soluzione progettuale. L'immagine sulla sinistra si estende
              fino al bordo esterno dello schermo, mantenendo la proporzione perfetta grazie a height: 520px
              e object-fit: contain.
            </p>
          </div>
        </section>

        {/* Sezione Research: Testo a sinistra, immagine a destra (bordo schermo) */}
        <section className="editorial-row">
          <div className="editorial-text">
            <h2>Research</h2>
            <p>
              Fase di analisi e ricerca. Il testo rimane perfettamente vincolato e allineato alla colonna
              centrale da 1200px, mentre l'immagine sulla destra tocca la parte finale del viewport.
            </p>
          </div>
          <div className="row-media">
            <img src="/images/research.jpg" alt="Research" />
          </div>
        </section>

        {/* Sezione Design: Immagine a sinistra (bordo schermo), testo a destra */}
        <section className="editorial-row">
          <div className="row-media">
            <img src="/images/design.jpg" alt="Design" />
          </div>
          <div className="editorial-text">
            <h2>Design Process</h2>
            <p>
              Prototipazione e dettagli costruttivi. La griglia continua ad alternare gli elementi
              mantenendo la stabilità visiva su monitor FHD, 2K e Ultrawide.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}