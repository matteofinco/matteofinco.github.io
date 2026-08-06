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

        <a href="#process-section" className="nav-link">Progetti</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/cv" className="nav-link">CV</a>
      </nav>

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 70px;
          padding: 0 5vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          background: rgba(7, 7, 7, 0.75);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-sizing: border-box;
        }

        .nav-brand-name {
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 2px;
          color: #fff;
          text-decoration: none;
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .nav-brand-name.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .lang-selector {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: monospace;
          font-size: 0.85rem;
        }

        .lang-btn {
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          padding: 2px 4px;
          transition: color 0.3s ease;
        }

        .lang-btn.active, .lang-btn:hover {
          color: #fff;
        }

        .lang-divider {
          color: #444;
        }

        .nav-link {
          color: #aaa;
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #fff;
        }
      `}</style>
    </header>
  );
};