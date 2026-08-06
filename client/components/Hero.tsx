import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#070707] snap-center">
      <div className="w-[92vw] max-w-[1300px] h-[82vh] relative z-10 flex items-center justify-center">
        <svg className="w-full h-full block" viewBox="0 0 1000 880" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="blueprintPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.22)" strokeWidth="1.2" />
              <circle cx="20" cy="20" r="1.5" fill="rgba(255, 255, 255, 0.4)" />
            </pattern>

            <mask id="designTextMask" x="0" y="0" width="100%" height="100%">
              <rect x="0" y="0" width="100%" height="100%" fill="#000000" />
              
              {/* MATTEO (Gigante, prima riga) */}
              <text
                x="50%"
                y="27%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ffffff"
                fontSize="240"
                fontWeight="900"
                fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
                letterSpacing="-6"
              >
                MATTEO
              </text>

              {/* FINCO (Gigante, seconda riga) */}
              <text
                x="50%"
                y="57%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ffffff"
                fontSize="240"
                fontWeight="900"
                fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
                letterSpacing="-6"
              >
                FINCO
              </text>

              {/* PRODUCT DESIGN & MAKER (Sottotitolo centrato in basso) */}
              <text
                x="50%"
                y="84%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ffffff"
                fontSize="44"
                fontWeight="700"
                fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
                letterSpacing="10"
              >
                PRODUCT DESIGN &amp; MAKER
              </text>
            </mask>
          </defs>

          <g mask="url(#designTextMask)">
            <rect className="layer-blueprint" x="-10%" y="-10%" width="120%" height="120%" />
            <g className="layer-sketches">
              <image
                href="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80"
                x="0"
                y="0"
                width="100%"
                height="100%"
                opacity="0.55"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
            <g className="layer-photo">
              <image
                href="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80"
                x="0"
                y="0"
                width="100%"
                height="100%"
                opacity="0.5"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
};