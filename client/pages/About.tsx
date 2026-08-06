import React, { useEffect } from 'react';
import Header from '../components/Header';

export default function About() {
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
      { threshold: 0.2 }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="about-page editorial-portfolio bg-[#070707] text-[#e5e5e5] min-h-screen overflow-x-hidden">
      {/* Header coerente con la navigazione e il selettore IT/EN */}
      <Header showBackToDesigns={false} />

      <style>{`
        .about-page {
          padding-top: 80px;
        }

        .about-hero {
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 6vw;
          text-align: center;
          border-bottom: 1px solid #1a1a1a;
        }

        .about-hero h1 {
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 1.1;
          color: #ffffff;
          max-width: 900px;
          margin-bottom: 30px;
          letter-spacing: -1px;
        }

        .about-hero p {
          font-size: 1.25rem;
          color: #888888;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* FULLBLEED EDITORIAL STRUCTURE */
        .about-fullbleed-wrapper {
          width: 100%;
          padding: 100px 0;
          display: flex;
          flex-direction: column;
          gap: 120px;
          box-sizing: border-box;
        }

        .about-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          width: 100%;
          min-height: 70vh;
        }

        /* Media left - image touches left edge */
        .about-row.media-left .about-media {
          width: 100%;
          height: 620px;
          padding-left: 0;
        }
        .about-row.media-left .about-text {
          padding: 0 8vw 0 6vw;
        }

        /* Media right - image touches right edge */
        .about-row.media-right .about-media {
          width: 100%;
          height: 620px;
          padding-right: 0;
        }
        .about-row.media-right .about-text {
          padding: 0 6vw 0 8vw;
        }

        .about-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
          transition: filter 0.8s ease, transform 0.8s ease;
          display: block;
        }

        .about-media:hover img {
          filter: grayscale(0%);
          transform: scale(1.01);
        }

        .about-text h2 {
          font-size: clamp(2.2rem, 3.8vw, 3.5rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 25px;
          color: #ffffff;
        }

        .about-text p {
          color: #aaaaaa;
          font-size: 1.12rem;
          line-height: 1.85;
          max-width: 560px;
          margin-bottom: 20px;
        }

        .about-text p:last-child {
          margin-bottom: 0;
        }

        /* REVEAL ANIMATIONS */
        .reveal-editorial {
          opacity: 0;
          filter: blur(10px);
          transition: opacity 1.1s cubic-bezier(.22,.61,.36,1), 
                      filter 1.1s cubic-bezier(.22,.61,.36,1), 
                      transform 1.1s cubic-bezier(.22,.61,.36,1);
        }

        .reveal-editorial.reveal-from-right {
          transform: translateX(35px);
        }

        .reveal-editorial.reveal-from-left {
          transform: translateX(-35px);
        }

        .reveal-editorial.reveal-active {
          opacity: 1;
          filter: blur(0);
          transform: translateX(0);
        }

        /* EXPERTISE SECTION */
        .about-expertise-wrapper {
          max-width: 1200px;
          margin: 100px auto 0;
          padding: 0 6vw 100px;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .expertise-card {
          padding: 40px;
          border: 1px solid #1a1a1a;
          background: rgba(255, 255, 255, 0.02);
          transition: all 0.4s ease;
        }

        .expertise-card:hover {
          border-color: #444444;
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-6px);
        }

        .expertise-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 15px;
        }

        .expertise-card p {
          color: #888888;
          font-size: 1rem;
          line-height: 1.7;
        }

        /* CTA SECTION */
        .about-cta-section {
          width: 100%;
          padding: 80px 6vw;
          text-align: center;
          border-top: 1px solid #1a1a1a;
          margin-top: 100px;
        }

        .about-cta-section h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 30px;
        }

        .about-cta-section p {
          font-size: 1.1rem;
          color: #aaaaaa;
          max-width: 600px;
          margin: 0 auto 40px;
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
        }

        .cta-button:hover {
          background: #070707;
          color: #ffffff;
          transform: translateY(-3px);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .about-row {
            grid-template-columns: 1fr;
            gap: 40px;
            height: auto;
          }

          .about-row.media-left .about-text,
          .about-row.media-right .about-text {
            padding: 0 6vw;
          }

          .about-row.media-left .about-media,
          .about-row.media-right .about-media {
            height: 420px;
          }

          .about-hero {
            padding: 60px 6vw;
          }

          .expertise-grid {
            grid-template-columns: 1fr;
          }

          .about-cta-section {
            padding: 60px 6vw;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="about-hero">
        <div>
          <h1>Understanding Design Through Making</h1>
          <p>
            A journey into product design, digital tools, and the art of building things that work.
          </p>
        </div>
      </section>

      {/* FULLBLEED EDITORIAL CONTENT CON I TUOI TESTI ORIGINALI */}
      <div className="about-fullbleed-wrapper">
        {/* SECTION 1: CURIOSITY */}
        <section className="about-row media-left">
          <div className="about-media reveal-editorial reveal-from-left">
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80"
              alt="Studio workspace and design process"
            />
          </div>
          <div className="about-text reveal-editorial reveal-from-right">
            <h2>I like understanding how things work.</h2>
            <p>
              When I look at an object, my first impulse is not to ask whether it is beautiful or not, but why it was designed that way. How it was built, which constraints shaped the decisions, and which compromises are hidden behind an apparently simple form.
            </p>
            <p>
              For me, the quality of a product lies in the clarity of its logic. This approach led me to product design, where curiosity, technical skills, and creativity constantly work together.
            </p>
          </div>
        </section>

        {/* SECTION 2: EDUCATION & METHOD */}
        <section className="about-row media-right">
          <div className="about-text reveal-editorial reveal-from-left">
            <h2>Design as a Method</h2>
            <p>
              I am currently studying Product Design at IUAV University of Venice, at the Vicenza campus. In this path, I have turned an intuitive interest into a working method, focusing on the point where an idea meets its feasibility: materials, processes, and production limits.
            </p>
            <p>
              I do not see design as a matter of style. I am interested in building objects and systems that have clear logic and that simplify everyday interaction.
            </p>
          </div>
          <div className="about-media reveal-editorial reveal-from-right">
            <img
              src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80"
              alt="Digital fabrication and prototyping tools"
            />
          </div>
        </section>

        {/* SECTION 3: RESEARCH & ANALYSIS */}
        <section className="about-row media-left">
          <div className="about-media reveal-editorial reveal-from-left">
            <img
              src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=80"
              alt="Product research and disassembly"
            />
          </div>
          <div className="about-text reveal-editorial reveal-from-right">
            <h2>Learning From What Exists</h2>
            <p>
              For this reason, I spend a lot of time observing existing products: taking them apart, analysing their internal structure, understanding how they are made, and identifying their limits is often my starting point. Understanding what already exists is, for me, the best way to imagine what does not yet exist.
            </p>
          </div>
        </section>

        {/* SECTION 4: DIGITAL & MAKING */}
        <section className="about-row media-right">
          <div className="about-text reveal-editorial reveal-from-left">
            <h2>Digital &amp; Physical Prototyping</h2>
            <p>
              I consider digital tools and making practices as extensions of the same design process. The digital space is an environment where I test the rules of a system, not just a stage for representation.
            </p>
            <p>
              Alongside this, I maintain a constant relationship with physical materials. I move continuously from digital design to physical prototyping, where 3D printing, mechanical processing, and woodworking become tools to test and question initial ideas. Direct contact with errors and with the resistance of materials is a fundamental part of my workflow.
            </p>
          </div>
          <div className="about-media reveal-editorial reveal-from-right">
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80"
              alt="Materials and fabrication techniques"
            />
          </div>
        </section>

        {/* SECTION 5: EXPERIENCE & COLLABORATION */}
        <section className="about-row media-left">
          <div className="about-media reveal-editorial reveal-from-left">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
              alt="Team and collaboration"
            />
          </div>
          <div className="about-text reveal-editorial reveal-from-right">
            <h2>Beyond Design</h2>
            <p>
              Outside university, I have developed other skills in contexts not strictly related to design. My experience in scouting, from being a member to becoming a leader, taught me how to work in a structured but flexible team, how to take responsibility, and how to coordinate people with different roles towards a shared goal.
            </p>
            <p>
              Volunteering experiences, including working at the Cinema Teatro Lux, which also brought me closer to the Venice Film Festival, have broadened my perspective and my ability to read complex contexts.
            </p>
          </div>
        </section>

        {/* SECTION 6: DESIGN AS COLLABORATION */}
        <section className="about-row media-right">
          <div className="about-text reveal-editorial reveal-from-left">
            <h2>Design as Collaboration</h2>
            <p>
              In design, I see the same dynamic: effective solutions are rarely individual. They come from discussion and from the ability to combine different skills while keeping a clear overall vision of the system.
            </p>
            <p>
              Today, I still see design as a way to understand the world before changing it. Every project is a chance to learn something new and to turn a complex problem into a clear solution. I am interested in working on systems that combine logic, matter, and interaction. I see each project as an exercise in possibility: not only asking how things work, but how they could work better.
            </p>
          </div>
          <div className="about-media reveal-editorial reveal-from-right">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
              alt="Creative process and teamwork"
            />
          </div>
        </section>
      </div>

      {/* EXPERTISE SECTION */}
      <section className="about-expertise-wrapper">
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#ffffff' }}>
          Core Areas &amp; Skills
        </h2>
        <div className="expertise-grid">
          <div className="expertise-card reveal-editorial reveal-from-left">
            <h3>Product Design</h3>
            <p>
              From initial concept through detailed CAD modeling, design for manufacturability, and digital rendering. Proficiency in Rhino 7, Fusion 360, and parametric modeling.
            </p>
          </div>
          <div className="expertise-card reveal-editorial reveal-from-left">
            <h3>Digital Fabrication</h3>
            <p>
              3D printing technologies, laser cutting, CNC milling, and post-processing techniques. Hands-on experience with Bambu Lab, LightBurn, and various material finishing methods.
            </p>
          </div>
          <div className="expertise-card reveal-editorial reveal-from-left">
            <h3>Materials &amp; Process</h3>
            <p>
              Deep understanding of material properties, manufacturing constraints, sustainability considerations, and assembly methods. Expertise in wood, polymers, metals, and composites.
            </p>
          </div>
          <div className="expertise-card reveal-editorial reveal-from-left">
            <h3>Research &amp; Analysis</h3>
            <p>
              User-centered research, competitive analysis, product teardowns, and systematic problem-solving. Ability to translate observations into design opportunities.
            </p>
          </div>
          <div className="expertise-card reveal-editorial reveal-from-left">
            <h3>System Design</h3>
            <p>
              Design of modular systems, parametric design approaches, and scalable solutions. Focus on clarity of logic and ease of use across product ecosystems.
            </p>
          </div>
          <div className="expertise-card reveal-editorial reveal-from-left">
            <h3>Communication</h3>
            <p>
              Clear presentation of design thinking through renderings, prototypes, technical documentation, and storytelling. Ability to convey complex ideas simply.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta-section">
        <h2>What's next?</h2>
        <p>
          Interested in collaborating on a design project? I'm always open to new challenges and meaningful work.
        </p>
        <a href="/" className="cta-button">
          VIEW PORTFOLIO
        </a>
      </section>
    </div>
  );
}