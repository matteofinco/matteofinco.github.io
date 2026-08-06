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

      {/* CASALLE DI TESTO CHE SCORRONO SOPRA L'IMMAGINE */}
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
    </section>
  );
};