import React from 'react';

interface HeaderProps {
  lang: 'it' | 'en';
  setLang: (lang: 'it' | 'en') => void;
  showName: boolean;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, showName }) => {
  return (
    <header className="site-header">
      <div className="header-left">
        <a href="#hero-section" className={`nav-brand-name ${showName ? 'visible' : ''}`}>
          MATTEO FINCO
        </a>
      </div>

      <nav className="header-right">
        <div className="lang-selector">
          <button
            className={`lang-btn ${lang === 'it' ? 'active' : ''}`}
            onClick={() => setLang('it')}
          >
            IT
          </button>
          <span className="lang-divider">/</span>
          <button
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>

        <a href="/about" className="nav-link">About</a>
        <a href="/cv" className="nav-link">CV</a>
      </nav>

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 64px;
          padding: 0 5vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          background: rgba(7, 7, 7, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-sizing: border-box;
        }

        /* NOME DISCRETO E NON PREVALENTE IN ALTO A SINISTRA */
        .nav-brand-name {
          font-weight: 500;
          font-size: 0.78rem;
          letter-spacing: 1.8px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 0.4s ease, transform 0.4s ease, color 0.3s ease;
        }

        .nav-brand-name:hover {
          color: #ffffff;
        }

        .nav-brand-name.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .lang-selector {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: monospace;
          font-size: 0.8rem;
        }

        .lang-btn {
          background: none;
          border: none;
          color: #555555;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          padding: 2px 4px;
          transition: color 0.3s ease;
        }

        .lang-btn.active, .lang-btn:hover {
          color: #ffffff;
        }

        .lang-divider {
          color: #333333;
        }

        .nav-link {
          color: #888888;
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #ffffff;
        }
      `}</style>
    </header>
  );
};