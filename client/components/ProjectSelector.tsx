import React, { useState } from 'react';
import { PROJECTS_LIST, Project } from './projects';

interface ProjectSelectorProps {
  currentProjectId?: string;
}

export const ProjectSelector: React.FC<ProjectSelectorProps> = ({ currentProjectId }) => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <div className="project-selector">
      {/* DESKTOP NAVIGATOR (DOTS + PREVIEW CARD) */}
      <div className="desktop-navigator">
        {hoveredProject && (
          <div className="project-preview-card">
            <div className="preview-img-box">
              <img src={hoveredProject.imageUrl} alt={hoveredProject.title} />
            </div>
            <div className="preview-details">
              <h4>{hoveredProject.title}</h4>
              <p>{hoveredProject.subtitle}</p>
            </div>
          </div>
        )}
        <div className="dots-container">
          {PROJECTS_LIST.map((proj) => {
            const isCurrent = proj.id === currentProjectId;
            return (
              <a
                key={proj.id}
                href={proj.path}
                className={`dot-item ${isCurrent ? 'active' : ''}`}
                aria-label={proj.title}
                onMouseEnter={() => setHoveredProject(proj)}
                onMouseLeave={() => setHoveredProject(null)}
              />
            );
          })}
        </div>
      </div>

      {/* MOBILE IMAGE CAROUSEL */}
      <div className="mobile-carousel-container">
        {PROJECTS_LIST.map((proj) => {
          const isCurrent = proj.id === currentProjectId;
          return (
            <a
              key={proj.id}
              href={proj.path}
              className={`mobile-project-card ${isCurrent ? 'active-card' : ''}`}
            >
              <div className="mobile-card-img-box">
                <img src={proj.imageUrl} alt={proj.title} />
              </div>
              <div className="mobile-card-info">
                <h4>{proj.title}</h4>
                <p>{proj.subtitle}</p>
              </div>
            </a>
          );
        })}
      </div>

      <style>{`
        .project-selector {
          width: 100%;
          margin-top: 20px;
        }

        /* DESKTOP NAVIGATOR */
        .desktop-navigator {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 100%;
        }

        .dots-container {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 40px;
          backdrop-filter: blur(8px);
        }

        .dot-item {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #333333;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0;
          display: block;
        }

        .dot-item:hover,
        .dot-item.active {
          background: #ffffff;
          transform: scale(1.3);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
        }

        .dot-item.active {
          border: 2px solid #070707;
        }

        .project-preview-card {
          position: absolute;
          bottom: 60px;
          width: 280px;
          background: #111111;
          border: 1px solid #262626;
          border-radius: 0;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
          pointer-events: none;
          animation: fadeIn 0.25s ease-out forwards;
          z-index: 100;
        }

        .preview-img-box {
          width: 100%;
          height: 160px;
          overflow: hidden;
          background: #000;
        }

        .preview-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .preview-details {
          padding: 12px 16px;
          text-align: left;
        }

        .preview-details h4 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4px 0;
          letter-spacing: -0.5px;
        }

        .preview-details p {
          font-size: 0.75rem;
          color: #888888;
          font-family: monospace;
          margin: 0;
          text-transform: uppercase;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* MOBILE CAROUSEL */
        .mobile-carousel-container {
          display: none;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 20px 4vw;
          gap: 16px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .mobile-carousel-container::-webkit-scrollbar {
          display: none;
        }

        .mobile-project-card {
          flex: 0 0 78vw;
          max-width: 300px;
          scroll-snap-align: center;
          background: #111111;
          border: 1px solid #222222;
          text-decoration: none;
          text-align: left;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .mobile-project-card.active-card {
          border-color: #ffffff;
        }

        .mobile-card-img-box {
          width: 100%;
          height: 180px;
          overflow: hidden;
          background: #0d0d0d;
        }

        .mobile-card-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .mobile-card-info {
          padding: 16px;
        }

        .mobile-card-info h4 {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .mobile-card-info p {
          font-size: 0.78rem;
          color: #888888;
          font-family: monospace;
          margin: 0;
          text-transform: uppercase;
        }

        /* BREAKPOINT RESPONSIVE */
        @media (max-width: 860px) {
          .desktop-navigator {
            display: none !important;
          }

          .mobile-carousel-container {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
};