import React, { useEffect, useRef, useState } from 'react';

interface ImageItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

const imagesList: ImageItem[] = [
  {
    id: '01',
    src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80',
    alt: 'Prototyping and CAD modeling',
    title: 'PROTOTYPING & CAD',
    description: 'Sviluppo di modelli tridimensionali e prototipi fisici per testare ergonomia e usabilità.'
  },
  {
    id: '02',
    src: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80',
    alt: '3D printing and digital fabrication',
    title: 'DIGITAL FABRICATION',
    description: 'Sperimentazione con stampa 3D FDM, taglio laser e lavorazioni CNC.'
  },
  {
    id: '03',
    src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=80',
    alt: 'Material exploration and mechanics',
    title: 'MATERIALS & MECHANICS',
    description: 'Studio dei materiali polimerici e integrazione di componenti meccanici e meccatronici.'
  },
  {
    id: '04',
    src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80',
    alt: 'User testing and physical feedback',
    title: 'PHYSICAL TESTING',
    description: 'Verifica continua delle performance e affinamento dei dettagli costruttivi.'
  }
];

export const StickyObject: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      // 1. Calcoliamo il progresso grezzo dello scroll interno [0 -> 1]
      const rawProgress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);

      // 2. INTRODUCIAMO LA DEAD ZONE PER LA PRIMA IMMAGINE:
      // Fino al 18% di scroll, il progresso effettivo rimane a 0 (prima foto fissa).
      const deadZone = 0.18;
      let effectiveProgress = 0;

      if (rawProgress > deadZone) {
        // Rimappiamo il restante spazio (da 0.18 a 1.0) nell'intervallo [0 -> 1]
        effectiveProgress = (rawProgress - deadZone) / (1 - deadZone);
      }

      // 3. Calcolo dell'indice dell'immagine in base al progresso rimappato
      const totalImages = imagesList.length;
      const calculatedIndex = Math.min(
        Math.floor(effectiveProgress * totalImages),
        totalImages - 1
      );

      setCurrentIndex(calculatedIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Esecuzione iniziale

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky-object-container" ref={containerRef}>
      <style>{`
        .sticky-object-container {
          position: relative;
          width: 100%;
          /* Un'altezza di 250vh garantisce un'esperienza di scroll molto fluida e controllata */
          height: 250vh;
          background-color: #070707;
          box-sizing: border-box;
        }

        .sticky-object-viewport {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .sticky-object-stage {
          position: relative;
          width: 100%;
          max-width: 1400px;
          height: 80vh;
          max-height: 720px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }

        /* FRAME IMMAGINI CON STACK E FADE IN/OUT */
        .sticky-media-frame {
          position: relative;
          width: 100%;
          height: 100%;
          max-height: 620px;
          overflow: hidden;
        }

        .sticky-image-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          filter: grayscale(15%);
          will-change: opacity, transform;
        }

        .sticky-image-layer.active {
          opacity: 1;
          transform: scale(1);
        }

        /* TESTI REATTIVI ALLA FOTO ATTIVATA */
        .sticky-info-box {
          padding: 0 6vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .sticky-counter {
          font-family: monospace;
          font-size: 0.9rem;
          color: #666666;
          margin-bottom: 20px;
          letter-spacing: 0.1em;
        }

        .sticky-info-content {
          position: relative;
          min-height: 180px;
        }

        .sticky-text-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          pointer-events: none;
        }

        .sticky-text-item.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .sticky-text-item h3 {
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 16px 0;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .sticky-text-item p {
          color: #a0a0a0;
          font-size: clamp(0.95rem, 1.1vw, 1.1rem);
          line-height: 1.7;
          margin: 0;
          max-width: 480px;
        }

        @media (max-width: 1024px) {
          .sticky-object-container {
            height: auto !important;
          }
          .sticky-object-viewport {
            position: relative;
            height: auto;
            padding: 80px 0;
          }
          .sticky-object-stage {
            grid-template-columns: 1fr;
            gap: 30px;
            height: auto;
          }
          .sticky-media-frame {
            height: 380px;
          }
        }
      `}</style>

      <div className="sticky-object-viewport">
        <div className="sticky-object-stage">
          {/* LATO SINISTRO: IMMAGINI STACKATE */}
          <div className="sticky-media-frame">
            {imagesList.map((img, idx) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                className={`sticky-image-layer ${idx === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>

          {/* LATO DESTRO: TESTI Sincronizzati */}
          <div className="sticky-info-box">
            <div className="sticky-counter">
              0{currentIndex + 1} / 0{imagesList.length}
            </div>
            <div className="sticky-info-content">
              {imagesList.map((item, idx) => (
                <div
                  key={item.id}
                  className={`sticky-text-item ${idx === currentIndex ? 'active' : ''}`}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyObject;