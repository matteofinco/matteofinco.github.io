import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <style>{`
        .site-footer {
          width: 100%;
          border-top: 1px solid #1a1a1a;
          padding: 40px 4vw;
          margin-top: 40px;
          background: #070707;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 0.8rem;
          letter-spacing: 0.8px;
        }

        .footer-brand {
          color: #888888;
          text-transform: uppercase;
        }

        .footer-links {
          display: flex;
          gap: 28px;
          align-items: center;
        }

        .footer-links a {
          color: #888888;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        @media (max-width: 860px) {
          .footer-inner {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>

      <div className="footer-inner">
        <span className="footer-brand">2026 MATTEO FINCO // PRODUCT DESIGN &amp; MAKER</span>
        <div className="footer-links">
          <a href="/#projects">
            Projects
          </a>
          <a href="/about">
            About
          </a>
          <a href="/cv">
            CV
          </a>
          <a 
            href="https://www.linkedin.com/in/finco-matteo-2k05/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};