import React from 'react';

export const StickyObject: React.FC = () => {
  return (
    <section className="sticky-shoe-section">
      {/* IMMAGINE FISSA IN BACKGROUND DURANTE LO SCROLL */}
      <div className="sticky-shoe-container">
        <div className="sticky-shoe-media">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=2000&q=80"
            alt="Prototipo Prodotto"
          />
          <div className="sticky-shoe-tag">
            PROTOTYPE_01 // HIGH PERFORMANCE FOOTWEAR
          </div>
        </div>
      </div>

      {/* CASELLE DI TESTO FLUTTUANTI CHE SCORRONO SOPRA */}
      <div className="shoe-scrolling-overlay">
        <div className="shoe-card">
          <span className="card-step">01 // CONCETTO & ERGONOMIA</span>
          <h3>Studio della Calzata Parametrica</h3>
          <p>
            Anatomia e supporto strutturale ingegnerizzati tramite modellazione algoritmica. Il volume principale si adatta ai movimenti ad alta sollecitazione.
          </p>
        </div>

        <div className="shoe-card">
          <span className="card-step">02 // MATERIALI & STAMPA 3D</span>
          <h3>Fabbricazione Additiva TPU</h3>
          <p>
            Struttura reticolare a densità differenziata stampata in TPU riciclabile. Riduzione del peso del 35% mantenendo il massimo assorbimento degli urti.
          </p>
        </div>

        <div className="shoe-card">
          <span className="card-step">03 // INTAGLIO & FINITURA</span>
          <h3>Assemblaggio Meccanico a Secco</h3>
          <p>
            Senza l'uso di colle tossiche. Ogni componente è interamente disassemblabile e sostituibile per estendere il ciclo di vita del prodotto.
          </p>
        </div>
      </div>

      <style>{`
        .sticky-shoe-section {
          position: relative;
          width: 100%;
          min-height: 240vh;
          background-color: #050505;
        }

        .sticky-shoe-container {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .sticky-shoe-media {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .sticky-shoe-media img {
          width: 100%;
          height: 100vh;
          object-fit: cover;
          filter: brightness(0.55) contrast(1.1);
        }

        .sticky-shoe-tag {
          position: absolute;
          bottom: 40px;
          left: 6vw;
          font-family: monospace;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.7);
          background: rgba(0,0,0,0.6);
          padding: 8px 16px;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .shoe-scrolling-overlay {
          position: relative;
          z-index: 2;
          margin-top: -100vh;
          padding-bottom: 20vh;
          pointer-events: none;
        }

        .shoe-card {
          min-height: 65vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 480px;
          margin-left: auto;
          margin-right: 6vw;
          margin-bottom: 15vh;
          background: rgba(10, 10, 10, 0.88);
          backdrop-filter: blur(20px);
          padding: 42px 36px;
          border-left: 2px solid #ffffff;
          border-y: 1px solid rgba(255,255,255,0.06);
          pointer-events: auto;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
          box-sizing: border-box;
        }

        .shoe-card .card-step {
          font-family: monospace;
          font-size: 0.8rem;
          color: #888888;
          margin-bottom: 12px;
          letter-spacing: 1px;
        }

        .shoe-card h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          line-height: 1.25;
        }

        .shoe-card p {
          color: #bbbbbb;
          font-size: 1.02rem;
          line-height: 1.75;
        }
      `}</style>
    </section>
  );
};