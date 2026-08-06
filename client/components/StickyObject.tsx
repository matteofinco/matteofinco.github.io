import React from 'react';

export const StickyObject: React.FC = () => {
  return (
    <section className="sticky-feature-section">
      <div className="sticky-media-container">
        <div className="sticky-media-box">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&q=80"
            alt="Product Focus"
          />
          <div className="sticky-technical-tag">[SYSTEM_ARCHITECTURE // CMF_STUDY_2026]</div>
        </div>
      </div>

      <div className="scrolling-overlay-container">
        <div className="scrolling-card">
          <span className="card-step">01 / ARCHITETTURA FORMALE</span>
          <h3>Scomposizione ed Ergonomia</h3>
          <p>
            Ogni oggetto nasce dallo studio approfondito delle proporzioni e dell'interazione diretta con l'utente. 
            L'approccio privilegia l'alleggerimento visivo e la pulizia formale, strutturando i volumi in modo che 
            rispondano a precisi vincoli funzionali e sollecitazioni meccaniche.
          </p>
        </div>

        <div className="scrolling-card">
          <span className="card-step">02 / SENSORIALITÀ &amp; MATERIALI</span>
          <h3>Integrazione Tattile e CMF</h3>
          <p>
            La selezione dei materiali non è un dettaglio estetico, ma parte integrante dell'esperienza d'uso. 
            Il contrasto tra superfici rigide strutturali e finiture ad alta resa tattile definisce la percezione 
            di qualità e guida intuitivamente l'impugnatura e l'interfaccia dell'oggetto.
          </p>
        </div>

        <div className="scrolling-card">
          <span className="card-step">03 / FABBRICAZIONE SOSTENIBILE</span>
          <h3>Design for Disassembly</h3>
          <p>
            Progettare da Maker significa pensare all'intero ciclo di vita del prodotto: dall'ottimizzazione dei percorsi 
            di stampa 3D e taglio laser, fino alla facilità di assemblaggio a secco che consente di separare rapidamente 
            ogni componente per la manutenzione o il riciclo.
          </p>
        </div>
      </div>
    </section>
  );
};