import React from 'react';

export const StickyObject: React.FC = () => {
  return (
    <section className="sticky-feature-section">
      <div className="sticky-media-container">
        <div className="sticky-media-box">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80"
            alt="Featured Design Object"
          />
          <div className="sticky-technical-tag">[OBJECT_REF_01 // SYSTEM_PROTOTYPE]</div>
        </div>
      </div>

      <div className="scrolling-overlay-container">
        <div className="scrolling-card">
          <span className="card-step">01 / ARCHITETTURA FORMALE</span>
          <h3>Scomposizione dei Volumi</h3>
          <p>Il progetto nasce dalla necessità di alleggerire la percezione visiva, concentrando la massa strutturale solo nei punti di sollecitazione meccanica.</p>
        </div>

        <div className="scrolling-card">
          <span className="card-step">02 / INTERAZIONE E MATERIALI</span>
          <h3>Integrazione Sensoriale</h3>
          <p>L'accoppiamento tra polimeri rigidi e superfici tattili crea una transizione fluida tra i punti di presa manuale e la struttura di supporto.</p>
        </div>

        <div className="scrolling-card">
          <span className="card-step">03 / SOSTENIBILITÀ E MONTAGGIO</span>
          <h3>Design for Disassembly</h3>
          <p>Senza l'impiego di colle permanenti, ogni componente può essere separato in meno di due minuti per favorire il riciclo o la sostituzione singola.</p>
        </div>
      </div>
    </section>
  );
};