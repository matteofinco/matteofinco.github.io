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
    <>
      <section className="editorial-section">
        <div className="editorial-text">
          <h2>{t.sec1Title}</h2>
          <h3 className="sub-grey">{t.sec1Sub}</h3>
          <p>{t.sec1P}</p>
        </div>
        <div className="editorial-media-box reveal-editorial reveal-from-right">
          <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80" alt="Design Lab" />
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-media-box reveal-editorial reveal-from-left">
          <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1000&q=80" alt="Process Sketch" />
        </div>
        <div className="editorial-text">
          <p>{t.sec2P1}</p>
          <br />
          <p>{t.sec2P2}</p>
        </div>
      </section>
    </>
  );
};