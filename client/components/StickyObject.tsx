import React from 'react';

export const StickyObject: React.FC = () => {
  return (
    <section className="process-section">
      {/* IMMAGINE FISSA IN BACKGROUND DURANTE LO SCROLL */}
      <div className="process-container">
        <div className="process-media">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F0a6666a4c3754165bf5a7b9831b66b28"
            alt="Matteo Finco Design Process"
          />
          <div className="process-tag">
            HOW I WORK // OBSERVE · MAKE · REFINE
          </div>
        </div>
      </div>

      {/* CASELLE DI TESTO FLUTTUANTI CHE SCORRONO SOPRA */}
      <div className="process-overlay">
        <div className="process-card">
          <span className="card-step">
            01 // OBSERVE &amp; UNDERSTAND
          </span>

          <h3>
            Every project starts
            <br />
            with a question.
          </h3>

          <p>
            Before searching for solutions, I spend time understanding people,
            contexts and behaviours. I like analysing how products are used,
            where friction appears and which constraints influence every design
            decision. Observation is where every project begins.
          </p>
        </div>

        <div className="process-card">
          <span className="card-step">
            02 // MAKE &amp; TEST
          </span>

          <h3>
            Ideas become real
            <br />
            through prototyping.
          </h3>

          <p>
            Sketches evolve into CAD models, functional prototypes and physical
            experiments. Building ideas allows me to validate assumptions,
            discover unexpected problems and improve every iteration through
            direct testing rather than speculation.
          </p>
        </div>

        <div className="process-card">
          <span className="card-step">
            03 // REFINE &amp; SIMPLIFY
          </span>

          <h3>
            Good design is
            <br />
            thoughtful simplicity.
          </h3>

          <p>
            Every component should have a clear purpose. I refine geometry,
            materials and manufacturing processes until complexity disappears
            and only what truly improves the user experience remains.
          </p>
        </div>
      </div>

      <style>{`
        .process-section {
          position: relative;
          width: 100%;
          min-height: 240vh;
          background-color: #050505;
        }

        .process-container {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .process-media {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .process-media img {
          width: 100%;
          height: 100vh;
          object-fit: cover;
          filter: brightness(0.55) contrast(1.1);
        }

        .process-tag {
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

        .process-overlay {
          position: relative;
          z-index: 2;
          margin-top: -100vh;
          padding-bottom: 20vh;
          pointer-events: none;
        }

        .process-card {
          min-height: 60vh;
          max-width: 520px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: auto;
          margin-right: 6vw;
          margin-bottom: 15vh;
          background: rgba(8, 8, 8, 0.72);
          backdrop-filter: blur(28px);
          padding: 48px;
          border-left: 1px solid rgba(255, 255, 255, 0.35);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          pointer-events: auto;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
          box-sizing: border-box;
        }

        .process-card .card-step {
          font-family: monospace;
          font-size: 0.8rem;
          color: #888888;
          margin-bottom: 12px;
          letter-spacing: 1px;
        }

        .process-card h3 {
          font-size: clamp(2rem, 3vw, 3rem);
          line-height: 1.05;
          letter-spacing: -1.5px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 24px;
        }

        .process-card p {
          font-size: 1rem;
          line-height: 1.9;
          color: #bdbdbd;
          max-width: 38ch;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default StickyObject;