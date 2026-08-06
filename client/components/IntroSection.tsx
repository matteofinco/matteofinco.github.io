import React from 'react';

interface IntroProps {
  t: {
    sec1Title: string;
    sec1Sub: string;
    sec1P: string;
    sec2P1: string;
    sec2P2: string;
  };
}

export const IntroSection: React.FC<IntroProps> = ({ t }) => {
  return (
    <div className="intro-container-fullbleed">
      {/* PRIMO BLOCCO: IMMAGINE A FILO SINISTRO */}
      <section className="fullbleed-row media-left">
        <div className="fullbleed-media reveal-editorial reveal-from-left">
          <img
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80"
            alt="Matteo Finco Studio Work"
          />
        </div>
        <div className="fullbleed-content reveal-editorial reveal-from-right">
          <h2>{t.sec1Title}</h2>
          <h3 className="sub-grey">{t.sec1Sub}</h3>
          <p>{t.sec1P}</p>
        </div>
      </section>

      {/* SECONDO BLOCCO: IMMAGINE A FILO DESTRO */}
      <section className="fullbleed-row media-right">
        <div className="fullbleed-content reveal-editorial reveal-from-left">
          <h2>Making &amp;<br />Prototipazione</h2>
          <p className="p-margin-bottom">{t.sec2P1}</p>
          <p>{t.sec2P2}</p>
        </div>
        <div className="fullbleed-media reveal-editorial reveal-from-right">
          <img
            src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80"
            alt="Digital Fabrication & Hardware"
          />
        </div>
      </section>
    </div>
  );
};