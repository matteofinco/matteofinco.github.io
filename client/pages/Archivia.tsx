import React, { useEffect } from 'react';

interface ArchiviaProps {
  heroFit?: 'contain' | 'cover';
}

export default function Archivia({ heroFit = 'contain' }: ArchiviaProps) {
  useEffect(() => {
    // Scroll reveal animation setup
    const revealElements = document.querySelectorAll('.reveal-editorial');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="project-page editorial-portfolio">
      <style>{`
        .project-page {
          background-color: #070707;
          color: #e5e5e5;
          min-height: 100vh;
          overflow-x: hidden;
          padding-top: 120px;
        }

        /* HERO SECTION (MINIMAL / APPLE STYLE) */
        .project-hero {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 6vw 60px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .project-hero-text {
          margin-bottom: 40px;
          max-width: 900px;
        }

        .project-hero h1 {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 900;
          line-height: 1.05;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -1.5px;
          text-transform: uppercase;
        }

        .project-subtitle {
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          color: #aaaaaa;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .project-tag {
          display: inline-block;
          font-family: monospace;
          font-size: 0.85rem;
          color: #888888;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 1px solid #222222;
          padding: 6px 14px;
          border-radius: 4px;
        }

        /* HERO IMAGE CONTAINER */
        .project-hero-image-wrapper {
          width: 100%;
          height: 65vh;
          max-height: 750px;
          min-height: 380px;
          background-color: #0d0d0d;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #1a1a1a;
        }

        .project-hero-image {
          width: 100%;
          height: 100%;
          display: block;
          transition: transform 0.8s ease;
        }

        /* METADATA GRID IN OVERVIEW */
        .project-metadata-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 25px;
          padding: 30px 0;
          margin-bottom: 40px;
          border-top: 1px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
        }

        .metadata-item h4 {
          font-size: 0.8rem;
          font-family: monospace;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #666666;
          margin-bottom: 8px;
        }

        .metadata-item p {
          font-size: 0.95rem;
          color: #dddddd;
          line-height: 1.5;
          margin: 0;
        }

        /* FULLBLEED EDITORIAL STRUCTURE */
        .project-fullbleed-wrapper {
          width: 100%;
          padding: 60px 0 100px;
          display: flex;
          flex-direction: column;
          gap: 120px;
          box-sizing: border-box;
        }

        .project-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          width: 100%;
          min-height: 60vh;
        }

        /* Media left - image touches left edge */
        .project-row.media-left .project-media {
          width: 100%;
          height: 580px;
          padding-left: 0;
        }
        .project-row.media-left .project-text {
          padding: 0 8vw 0 6vw;
        }

        /* Media right - image touches right edge */
        .project-row.media-right .project-media {
          width: 100%;
          height: 580px;
          padding-right: 0;
        }
        .project-row.media-right .project-text {
          padding: 0 6vw 0 8vw;
        }

        .project-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(10%);
          transition: filter 0.8s ease, transform 0.8s ease;
          display: block;
        }

        .project-media:hover img {
          filter: grayscale(0%);
          transform: scale(1.01);
        }

        .project-text h2 {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 25px;
          color: #ffffff;
        }

        .project-text h3 {
          font-size: clamp(1.1rem, 1.8vw, 1.5rem);
          font-weight: 500;
          color: #888888;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .project-text p {
          color: #aaaaaa;
          font-size: 1.05rem;
          line-height: 1.8;
          max-width: 560px;
          margin-bottom: 20px;
        }

        /* IMAGE GRID - 3 COLUMN */
        .image-grid-section {
          width: 100%;
          padding: 0 6vw;
          margin-bottom: 100px;
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          width: 100%;
        }

        .grid-item {
          position: relative;
          overflow: hidden;
          aspect-ratio: 1;
          background: #0a0a0a;
          border-radius: 4px;
        }

        .grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(10%);
          transition: filter 0.8s ease, transform 0.8s ease;
        }

        .grid-item:hover img {
          filter: grayscale(0%);
          transform: scale(1.04);
        }

        /* REVEAL ANIMATIONS */
        .reveal-editorial {
          opacity: 0;
          filter: blur(8px);
          transition: opacity 1s cubic-bezier(.22,.61,.36,1), 
                      filter 1s cubic-bezier(.22,.61,.36,1), 
                      transform 1s cubic-bezier(.22,.61,.36,1);
        }

        .reveal-editorial.reveal-from-right {
          transform: translateX(30px);
        }

        .reveal-editorial.reveal-from-left {
          transform: translateX(-30px);
        }

        .reveal-editorial.reveal-active {
          opacity: 1;
          filter: blur(0);
          transform: translateX(0);
        }

        /* SKILLS SECTION */
        .project-skills-wrapper {
          max-width: 1200px;
          margin: 60px auto 0;
          padding: 0 6vw 100px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .skill-item {
          padding: 35px;
          border: 1px solid #1a1a1a;
          background: rgba(255, 255, 255, 0.015);
          border-radius: 6px;
          transition: all 0.4s ease;
        }

        .skill-item:hover {
          border-color: #333333;
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-4px);
        }

        .skill-item h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .skill-item p {
          color: #888888;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* CTA SECTION */
        .project-cta {
          width: 100%;
          padding: 100px 6vw;
          text-align: center;
          border-top: 1px solid #1a1a1a;
          margin-top: 100px;
          background-color: #0a0a0a;
        }

        .project-cta h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 25px;
        }

        .cta-button {
          display: inline-block;
          padding: 16px 40px;
          background: #ffffff;
          color: #070707;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid #ffffff;
          border-radius: 2px;
          letter-spacing: 0.5px;
        }

        .cta-button:hover {
          background: #070707;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .project-row {
            grid-template-columns: 1fr;
            gap: 40px;
            height: auto;
          }

          .project-row.media-left .project-text,
          .project-row.media-right .project-text {
            padding: 0 6vw;
          }

          .project-row.media-left .project-media,
          .project-row.media-right .project-media {
            height: 420px;
          }

          .image-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .project-hero-image-wrapper {
            height: 45vh;
            min-height: 300px;
          }
        }

        @media (max-width: 640px) {
          .project-page {
            padding-top: 90px;
          }

          .project-hero {
            padding: 0 6vw 40px;
          }

          .project-hero h1 {
            font-size: 2.2rem;
            margin-bottom: 12px;
          }

          .project-subtitle {
            font-size: 1.1rem;
          }

          .project-metadata-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .project-text h2 {
            font-size: 1.8rem;
          }

          .image-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .project-fullbleed-wrapper {
            gap: 60px;
            padding: 40px 0;
          }

          .project-row {
            gap: 30px;
          }

          .project-hero-image-wrapper {
            height: 35vh;
          }
        }
      `}</style>

      {/* MINIMAL HERO SECTION */}
      <section className="project-hero reveal-editorial reveal-from-left">
        <div className="project-hero-text">
          <h1>Archivia</h1>
          <p className="project-subtitle">Flash drive shaped pen holder</p>
          <span className="project-tag">Plastic European Innovation Award • 2025</span>
        </div>

        <div className="project-hero-image-wrapper">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fc4e5eae770e146cc9e7245b921f5d11e"
            alt="Archivia Hero Render"
            className="project-hero-image"
            style={{ objectFit: heroFit }}
          />
        </div>
      </section>

      {/* FULLBLEED CONTENT */}
      <div className="project-fullbleed-wrapper">
        {/* OVERVIEW & METADATA SECTION */}
        <section className="project-row media-left">
          <div className="project-media reveal-editorial reveal-from-left">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
              alt="Archivia product overview"
            />
          </div>
          <div className="project-text reveal-editorial reveal-from-right">
            <h2>Overview</h2>

            {/* METADATA GRID */}
            <div className="project-metadata-grid">
              <div className="metadata-item">
                <h4>Role</h4>
                <p>Product Designer</p>
              </div>
              <div className="metadata-item">
                <h4>Team</h4>
                <p>Matteo Finco<br />Giulia Pettenò<br />Nadia Zanella</p>
              </div>
              <div className="metadata-item">
                <h4>Year</h4>
                <p>2025</p>
              </div>
              <div className="metadata-item">
                <h4>Photo</h4>
                <p>Nadia Zanella</p>
              </div>
            </div>

            <h3>Challenge</h3>
            <p>
              Developing a small everyday object made from recycled polymers for PLEIADES (Plastic European Innovation Award for Design and Sustainability), a design competition organized by the Università Iuav di Venezia (Vicenza campus) in partnership with global leaders in the plastics and molding sectors: Ewikon, Arburg, and Uniform.
            </p>
            <p>
              The core challenge was to balance high creative freedom with the rigorous technical constraints of mass industrial production, optimizing the object for advanced injection molding.
            </p>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section className="project-row media-right">
          <div className="project-text reveal-editorial reveal-from-left">
            <h2>Solution</h2>
            <p>
              Archivia is a compact desk pen holder that creates a symbolic parallel between digital preservation and analog transcription. Taking visual and functional inspiration from a classic USB flash drive, the product translates the concept of digital file storage into a physical workspace organizer.
            </p>
            <p>
              Composed of three monomaterial parts that lock together without screws or adhesives. The pen's main body is divided into two mirrored halves that fit together securely. This central assembly connects directly to the 90° rotating cover. Each connection relies entirely on integrated mechanical interlocks.
            </p>
          </div>
          <div className="project-media reveal-editorial reveal-from-right">
            <img
              src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80"
              alt="Archivia product solution details"
            />
          </div>
        </section>

        {/* RESEARCH SECTION */}
        <section className="project-row media-left">
          <div className="project-media reveal-editorial reveal-from-left">
            <img
              src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=80"
              alt="Archivia research and analysis"
            />
          </div>
          <div className="project-text reveal-editorial reveal-from-right">
            <h2>Research</h2>
            <p>
              The initial research phase focused on analyzing diverse everyday environments like home, office, and transit to identify a product typology capable of maximizing the technical constraints of the brief.
            </p>
            <p>
              The design process began by exploring various products. Ultimately, desktop optimization emerged as the most compelling direction, leading to an in-depth study of structural polyamide behavior and high-precision snap-fit engineering.
            </p>
          </div>
        </section>

        {/* DESIGN GRID SECTION */}
        <section className="image-grid-section">
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#ffffff', marginBottom: '50px' }}>
            Design Process
          </h2>
          <div className="image-grid">
            <div className="grid-item reveal-editorial reveal-from-left">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=500&q=80"
                alt="Design iteration 1"
              />
            </div>
            <div className="grid-item reveal-editorial reveal-from-left">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
                alt="Design iteration 2"
              />
            </div>
            <div className="grid-item reveal-editorial reveal-from-left">
              <img
                src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80"
                alt="Design iteration 3"
              />
            </div>
          </div>
          <p style={{ color: '#aaaaaa', fontSize: '1.05rem', lineHeight: '1.8', marginTop: '40px', maxWidth: '800px' }}>
            Archivia's architecture mirrors the mechanical movement of a rotating USB flash drive. The design optimizes for effortless assembly within a single mold, leveraging integrated mechanical interlocks to ensure structural integrity without additional hardware.
          </p>
        </section>
      </div>

      {/* SKILLS / KEY INSIGHTS SECTION */}
      <section className="project-skills-wrapper">
        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#ffffff', marginBottom: '50px' }}>
          Key Insights
        </h2>
        <div className="skills-grid">
          <div className="skill-item reveal-editorial reveal-from-left">
            <h3>Creative & Technical Balance</h3>
            <p>
              Working closely with companies in the sector has given me insights into how to combine creativity and industrial rigor in every design decision.
            </p>
          </div>
          <div className="skill-item reveal-editorial reveal-from-left">
            <h3>Material Efficiency</h3>
            <p>
              Understanding polymer molding technology revealed the importance of material efficiency and mold geometry optimization for sustainable production.
            </p>
          </div>
          <div className="skill-item reveal-editorial reveal-from-left">
            <h3>Mechanical Design</h3>
            <p>
              Mastering snap-fit engineering and integrated interlocks enabled a product that requires zero additional hardware while maintaining superior structural performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="project-cta">
        <h2>What's Next?</h2>
        <p style={{ color: '#aaaaaa', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.7' }}>
          Explore more design projects and methodologies in the portfolio.
        </p>
        <a href="/" className="cta-button">BACK TO PORTFOLIO</a>
      </section>
    </div>
  );
}