<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DESIGN BY DECATHLON - Portfolio Showcase</title>
  
  <style>
    /* ==========================================================================
       1. RESET & GLOBALS
       ========================================================================== */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      --bg-color: #050505;
      --text-white: #ffffff;
      --text-gray: #a0a0a0;
      --accent-blue: #0082c3;
      --font-family: 'Helvetica Neue', Arial, sans-serif;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-white);
      font-family: var(--font-family);
      overflow-x: hidden;
      line-height: 1.6;
    }

    /* ==========================================================================
       2. HEADER & LANGUAGE SWITCHER
       ========================================================================== */
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 20px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      background: linear-gradient(to bottom, rgba(5,5,5,0.9), rgba(5,5,5,0));
    }

    .header-tag {
      color: var(--accent-blue);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    .lang-switcher {
      display: flex;
      gap: 15px;
      align-items: center;
    }

    .lang-btn {
      background: none;
      border: none;
      color: var(--text-gray);
      font-weight: 700;
      font-size: 0.9rem;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .lang-btn.active, .lang-btn:hover {
      color: var(--text-white);
    }

    .header-stripes {
      color: var(--accent-blue);
      font-weight: 900;
      letter-spacing: -2px;
      margin-left: 10px;
    }

    /* ==========================================================================
       3. HERO SECTION (STENCIL DESIGN + TECHNICAL BG)
       ========================================================================== */
    .hero {
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    /* Background animated technical mesh */
    .hero-tech-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
        linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 40px 40px, 80px 80px, 80px 80px;
      animation: techBgPulse 8s ease-in-out infinite alternate;
      z-index: 1;
    }

    @keyframes techBgPulse {
      0% { transform: scale(1) translate(0, 0); opacity: 0.4; }
      100% { transform: scale(1.05) translate(-10px, -10px); opacity: 0.8; }
    }

    /* Large Broken Typography Stencil */
    .hero-title-container {
      position: relative;
      z-index: 2;
      width: 90%;
      max-width: 1200px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0px;
      text-transform: uppercase;
      font-weight: 900;
      font-size: clamp(6rem, 18vw, 16rem);
      line-height: 0.8;
      letter-spacing: -5px;
      user-select: none;
    }

    .hero-block {
      color: var(--text-white);
      overflow: hidden;
    }

    .hero-block span {
      display: block;
      transform: translateY(0);
      transition: transform 0.5s ease;
    }

    /* Offset cut style matching reference screenshot */
    .hero-block:nth-child(2) { transform: translateY(20px); }
    .hero-block:nth-child(3) { transform: translateY(-15px); }
    .hero-block:nth-child(4) { transform: translateY(10px); }

    /* ==========================================================================
       4. CONTENT SECTIONS (FADE IN LEFT / RIGHT)
       ========================================================================== */
    .section-container {
      max-width: 1300px;
      margin: 0 auto;
      padding: 120px 40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .text-content h2 {
      font-size: clamp(2rem, 4vw, 3.5rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 10px;
      color: var(--text-white);
    }

    .text-content h3.sub-grey {
      font-size: clamp(1.8rem, 3.5vw, 3rem);
      font-weight: 800;
      color: #666;
      margin-bottom: 30px;
    }

    .text-content p {
      color: var(--text-gray);
      font-size: 1.05rem;
      line-height: 1.7;
    }

    .text-content strong {
      color: var(--text-white);
    }

    .media-box {
      position: relative;
      width: 100%;
      height: 450px;
      overflow: hidden;
      border-radius: 4px;
    }

    .media-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* Decorative diagonal hatch lines */
    .hatch-lines {
      position: absolute;
      top: -20px;
      right: -20px;
      font-size: 2rem;
      font-weight: 900;
      color: rgba(255,255,255,0.3);
      letter-spacing: -3px;
      pointer-events: none;
    }

    /* Scroll Animations */
    .reveal-from-right {
      opacity: 0;
      transform: translateX(80px);
      transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .reveal-from-left {
      opacity: 0;
      transform: translateX(-80px);
      transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .reveal-active {
      opacity: 1;
      transform: translateX(0);
    }

    /* ==========================================================================
       5. PARALLAX SHOE WINDOW SECTION
       ========================================================================== */
    .parallax-window-section {
      position: relative;
      width: 100%;
      height: 75vh;
      background-image: url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1920&q=80');
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 80px 0;
      box-shadow: inset 0 0 100px rgba(0,0,0,0.8);
    }

    .parallax-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.3);
    }

    /* ==========================================================================
       6. PINNED STICKY DESIGNER SHOWCASE SECTION
       ========================================================================== */
    .showcase-wrapper {
      position: relative;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }

    /* Sticky Left Graphic Side */
    .showcase-sticky-left {
      position: sticky;
      top: 15vh;
      height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .svg-frame-container {
      position: relative;
      width: 480px;
      height: 480px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Dynamic Circle Image Inside SVG Frame */
    .circle-image-holder {
      position: absolute;
      width: 320px;
      height: 320px;
      border-radius: 50%;
      overflow: hidden;
      z-index: 2;
      background-color: #111;
      box-shadow: 0 0 30px rgba(0,0,0,0.8);
    }

    .circle-image-holder img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    /* SVG Overlay Ring with 10 Dot Indicators */
    .svg-ring-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 3;
      pointer-events: none;
    }

    .dot-indicator {
      fill: #444;
      transition: fill 0.4s ease, r 0.4s ease;
    }

    .dot-indicator.active {
      fill: #ffffff;
      r: 6;
      filter: drop-shadow(0px 0px 6px rgba(255,255,255,0.8));
    }

    /* Right Scrolling Designer List */
    .showcase-scroll-right {
      padding-top: 10vh;
      padding-bottom: 25vh;
    }

    .project-card {
      min-height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px 0;
      opacity: 0.3;
      transition: opacity 0.5s ease;
    }

    .project-card.active-project {
      opacity: 1;
    }

    .project-card h2.section-heading {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 30px;
      line-height: 1.1;
    }

    .project-card .designer-name {
      font-size: 2rem;
      font-weight: 800;
      margin-top: 20px;
      color: var(--text-white);
    }

    .project-card .designer-role {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text-white);
      margin-bottom: 15px;
    }

    .project-card .designer-meta {
      font-size: 0.95rem;
      color: var(--text-gray);
      margin-bottom: 20px;
    }

    .project-card blockquote {
      font-style: italic;
      color: var(--text-gray);
      border-left: 2px solid var(--text-white);
      padding-left: 15px;
      margin-top: 15px;
      font-size: 0.95rem;
    }

    /* ==========================================================================
       7. FOOTER SECTION
       ========================================================================== */
    footer {
      background-color: #000;
      padding: 100px 20px 40px;
      text-align: center;
      border-top: 1px solid #151515;
    }

    .footer-banner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-bottom: 60px;
      background: #0082c3;
      padding: 15px 0;
      color: #fff;
    }

    .footer-banner-btn {
      background: #00699e;
      border: none;
      color: #fff;
      padding: 10px 15px;
      cursor: pointer;
      font-weight: 700;
    }

    .footer-banner h3 {
      font-size: clamp(1.2rem, 3vw, 2.2rem);
      font-weight: 900;
      letter-spacing: 1px;
    }

    .footer-contacts h4 {
      font-size: 1.2rem;
      margin-bottom: 20px;
      letter-spacing: 1px;
    }

    .footer-contacts a {
      color: var(--text-white);
      text-decoration: underline;
      display: block;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }

    .footer-socials {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin: 30px 0;
    }

    .footer-socials a {
      color: var(--text-gray);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.9rem;
    }

    .footer-links {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      font-size: 0.8rem;
      color: var(--text-gray);
      margin-top: 40px;
    }

    /* Responsive */
    @media (max-width: 900px) {
      .section-container, .showcase-wrapper {
        grid-template-columns: 1fr;
      }
      .showcase-sticky-left {
        position: relative;
        top: 0;
        height: 400px;
      }
      .svg-frame-container {
        width: 340px;
        height: 340px;
      }
      .circle-image-holder {
        width: 220px;
        height: 220px;
      }
    }
  </style>
</head>
<body>

  <!-- ==========================================================================
       HEADER & LANGUAGE SWITCHER
       ========================================================================== -->
  <header>
    <div class="header-tag">
      <span id="txt-header-tag">2. IMMERSIONE NEL CUORE DEI NOSTRI TEAM</span>
    </div>
    <div class="lang-switcher">
      <button class="lang-btn active" id="btn-it" onclick="setLanguage('it')">IT</button>
      <span style="color: #444;">|</span>
      <button class="lang-btn" id="btn-en" onclick="setLanguage('en')">EN</button>
      <span class="header-stripes">///</span>
    </div>
  </header>

  <!-- ==========================================================================
       HERO SECTION (STENCIL DESIGN TEXT + TECH BG)
       ========================================================================== -->
  <section class="hero">
    <div class="hero-tech-bg"></div>
    <div class="hero-title-container">
      <div class="hero-block"><span>DE</span></div>
      <div class="hero-block"><span>SI</span></div>
      <div class="hero-block"><span>G</span></div>
      <div class="hero-block"><span>N</span></div>
    </div>
  </section>

  <!-- ==========================================================================
       INTRO SECTION 1 (IMAGE REVEAL RIGHT)
       ========================================================================== -->
  <section class="section-container">
    <div class="text-content">
      <h2 id="txt-sec1-title">Progettare un prodotto è un mestiere.</h2>
      <h3 class="sub-grey" id="txt-sec1-sub">In realtà è un insieme di tanti mestieri. Scopriamoli.</h3>
      <p id="txt-sec1-p">
        Al centro del DESIGN in DECATHLON ci sono persone che, prima di tutto, sono appassionate di sport e lavorano ogni giorno per progettare prodotti sportivi. Ma le specialità creative e le competenze non si limitano solo al prodotto: ci sono designer nel retail, nel digitale e nella comunicazione. I designer lavorano su oltre <strong>dodici campi di competenza</strong>, dall'abbigliamento alle calzature, fino ai componenti e al 3D.
      </p>
    </div>
    <div class="media-box reveal-from-right">
      <div class="hatch-lines">///////////////</div>
      <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80" alt="Design Workshop">
    </div>
  </section>

  <!-- ==========================================================================
       INTRO SECTION 2 (IMAGE REVEAL LEFT)
       ========================================================================== -->
  <section class="section-container">
    <div class="media-box reveal-from-left">
      <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80" alt="Sketching Shoes">
    </div>
    <div class="text-content">
      <p id="txt-sec2-p1">
        Parte del lavoro di un designer consiste nel conferire ai prodotti la loro personalità, oltre alla funzione. Fondamentalmente, oltre la percezione comune, DECATHLON vuole stringere un legame profondo tra lo sport, il DESIGN e la società.
      </p>
      <br>
      <p id="txt-sec2-p2">
        I team si sono uniti per creare il progetto <strong>"Sports Mates"</strong>. Una strategia unica nel mondo dello sport che pone il valore emozionale al centro della propria missione. Attraverso motivazioni e desideri, i prodotti sono pensati per essere compagni, partner e motivatori.
      </p>
    </div>
  </section>

  <!-- ==========================================================================
       PARALLAX SHOE WINDOW SECTION
       ========================================================================== -->
  <section class="parallax-window-section">
    <div class="parallax-overlay"></div>
  </section>

  <!-- ==========================================================================
       PINNED STICKY DESIGNER SHOWCASE SECTION (10 PROJECTS)
       ========================================================================== -->
  <section class="showcase-wrapper" id="showcase-section">
    
    <!-- Sticky Left Image + Dynamic SVG Dots Frame -->
    <div class="showcase-sticky-left">
      <div class="svg-frame-container">
        
        <!-- Center Dynamic Circular Image -->
        <div class="circle-image-holder">
          <img id="sticky-project-img" src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80" alt="Project Active Image">
        </div>

        <!-- SVG Orbital Overlay with 10 Dots -->
        <svg class="svg-ring-overlay" viewBox="0 0 500 500">
          <!-- Concentric Decorative Circles -->
          <circle cx="250" cy="250" r="190" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" fill="none" />
          <circle cx="250" cy="250" r="215" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="4,4" fill="none" />

          <!-- 10 Interactive Indicator Dots along top-right arc -->
          <g id="dots-group">
            <circle class="dot-indicator active" cx="420" cy="180" r="4.5" data-index="0" />
            <circle class="dot-indicator" cx="435" cy="210" r="4" data-index="1" />
            <circle class="dot-indicator" cx="440" cy="245" r="4" data-index="2" />
            <circle class="dot-indicator" cx="438" cy="280" r="4" data-index="3" />
            <circle class="dot-indicator" cx="425" cy="315" r="4" data-index="4" />
            <circle class="dot-indicator" cx="405" cy="350" r="4" data-index="5" />
            <circle class="dot-indicator" cx="378" cy="380" r="4" data-index="6" />
            <circle class="dot-indicator" cx="345" cy="405" r="4" data-index="7" />
            <circle class="dot-indicator" cx="310" cy="422" r="4" data-index="8" />
            <circle class="dot-indicator" cx="270" cy="432" r="4" data-index="9" />
          </g>

          <!-- Line Connection to Content -->
          <path d="M 420 180 L 470 180 L 490 200" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" fill="none" />
          <circle cx="490" cy="200" r="4" fill="#ffffff" />
        </svg>

      </div>
    </div>

    <!-- Right Scrollable Content Blocks (Projects) -->
    <div class="showcase-scroll-right">
      
      <!-- Project 1 -->
      <div class="project-card active-project" data-project="0" data-img="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80">
        <h2 class="section-heading" class="txt-playground">QUAL È IL MIO CAMPO DI GIOCO?</h2>
        <p class="txt-p1">In DECATHLON, l'innovazione è al centro del design del prodotto, con la sfida costante di offrire continuamente nuove soluzioni agli utenti.</p>
        <div class="designer-name">CEDRIC C.</div>
        <div class="designer-role">Designer della prima versione della maschera EasyBreath</div>
        <div class="designer-meta">Lavora in DECATHLON da 23 anni<br>Water Sports Centre - Hendaye, Francia</div>
        <blockquote>"Per me, DESIGN significa comprendere le aspirazioni delle persone e saper anticipare i loro bisogni in acqua."</blockquote>
      </div>

      <!-- Project 2 -->
      <div class="project-card" data-project="1" data-img="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80">
        <div class="designer-name">MATHIEU C.</div>
        <div class="designer-role">Designer delle scarpe da calcio Traxium Compressor</div>
        <div class="designer-meta">Lavora in DECATHLON da 10 anni<br>Kipstadium - Tourcoing, Francia</div>
        <blockquote>"Il DESIGN è un processo creativo che aiuta a risolvere le sfide quotidiane sul campo da gioco, unendo funzione ed estetica."</blockquote>
      </div>

      <!-- Project 3 -->
      <div class="project-card" data-project="2" data-img="https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=600&q=80">
        <div class="designer-name">THOMAS C.</div>
        <div class="designer-role">DESIGN Manager per lo skateboard DK900</div>
        <div class="designer-meta">Lavora in DECATHLON da 6 anni<br>B'Twin Village - Lille, Francia</div>
        <blockquote>"Co-creare con atleti professionisti ci spinge a superare i limiti della resistenza meccanica e dello stile urbano."</blockquote>
      </div>

      <!-- Project 4 -->
      <div class="project-card" data-project="3" data-img="https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80">
        <div class="designer-name">ELENA R.</div>
        <div class="designer-role">Senior Footwear Designer per il Running</div>
        <div class="designer-meta">Lavora in DECATHLON da 8 anni<br>Kalenji Lab - Lille, Francia</div>
        <blockquote>"Ogni grammo risparmiato sulla scarpa è una vittoria per la maratona dell'atleta."</blockquote>
      </div>

      <!-- Project 5 -->
      <div class="project-card" data-project="4" data-img="https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80">
        <div class="designer-name">LUCAS M.</div>
        <div class="designer-role">Hardware & Outdoor Gear Specialist</div>
        <div class="designer-meta">Lavora in DECATHLON da 12 anni<br>Mountain Store - Passy, Francia</div>
        <blockquote>"Progettare tende ed equipaggiamento da montagna richiede un'affidabilità totale in condizioni estreme."</blockquote>
      </div>

      <!-- Project 6 -->
      <div class="project-card" data-project="5" data-img="https://images.unsplash.com/photo-1483721063386-cc26459e13ba?auto=format&fit=crop&w=600&q=80">
        <div class="designer-name">SOPHIE B.</div>
        <div class="designer-role">Color & Material Lead Designer</div>
        <div class="designer-meta">Lavora in DECATHLON da 5 anni<br>Design Hub - Lille, Francia</div>
        <blockquote>"La palette cromatica definisce l'identità visiva ed emozionale dell'esperienza sportiva."</blockquote>
      </div>

      <!-- Project 7 -->
      <div class="project-card" data-project="6" data-img="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=600&q=80">
        <div class="designer-name">ANTOINE T.</div>
        <div class="designer-role">Digital Concept & Smart Products</div>
        <div class="designer-meta">Lavora in DECATHLON da 7 anni<br>Tech Centre - Parigi, Francia</div>
        <blockquote>"Integrando l'elettronica discreta e l'IoT miglioriamo la sicurezza e l'analisi della performance."</blockquote>
      </div>

      <!-- Project 8 -->
      <div class="project-card" data-project="7" data-img="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80">
        <div class="designer-name">CAMILLE L.</div>
        <div class="designer-role">Eco-Design & Circular Economy Lead</div>
        <div class="designer-meta">Lavora in DECATHLON da 9 anni<br>EcoLab - Hendaye, Francia</div>
        <blockquote>"Il miglior prodotto è quello progettato per essere interamente smontato, riparato e riciclato."</blockquote>
      </div>

      <!-- Project 9 -->
      <div class="project-card" data-project="8" data-img="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80">
        <div class="designer-name">JULIEN V.</div>
        <div class="designer-role">Urban Mobility & E-Bike Designer</div>
        <div class="designer-meta">Lavora in DECATHLON da 11 anni<br>B'Twin Village - Lille, Francia</div>
        <blockquote>"Riprogettare i trasporti urbani significa plasmare le città del futuro rendendole più vivibili."</blockquote>
      </div>

      <!-- Project 10 -->
      <div class="project-card" data-project="9" data-img="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80">
        <div class="designer-name">MARIE D.</div>
        <div class="designer-role">3D Prototyping & Additive Manufacturing</div>
        <div class="designer-meta">Lavora in DECATHLON da 4 anni<br>Prototype Lab - Lille, Francia</div>
        <blockquote>"Stampare in 3D in poche ore quello che prima richiedeva settimane accelera l'innovazione immediata."</blockquote>
      </div>

    </div>
  </section>

  <!-- ==========================================================================
       FOOTER & CONTACTS
       ========================================================================== -->
  <footer>
    <div class="footer-banner">
      <button class="footer-banner-btn">&lt;</button>
      <h3>/////////////////////// AND WHAT ABOUT TOMORROW? ///////</h3>
      <button class="footer-banner-btn">&gt;</button>
    </div>

    <div class="footer-contacts">
      <h4>DECATHLON UNITED PR CONTACTS</h4>
      <a href="mailto:international.media@decathlon.com">international.media@decathlon.com</a>
      <a href="https://decathlon-united.media" target="_blank">decathlon-united.media</a>
      <a href="#">Download the Media Kit</a>
    </div>

    <div class="footer-socials">
      <a href="#">LinkedIn</a>
      <a href="#">Twitter</a>
      <a href="#">Facebook</a>
      <a href="#">Instagram</a>
    </div>

    <div class="footer-links">
      <span>Decathlon United Media</span> |
      <span>Decathlon around the world</span> |
      <span>Decathlon Media France</span> |
      <span>Recruitment</span> |
      <span>Legal notice</span> |
      <span>Terms of use</span> |
      <span>Cookie settings</span>
    </div>
    <p style="margin-top: 25px; font-size: 0.75rem; color: #555;">© 2026 Decathlon - All rights reserved</p>
  </footer>

  <!-- ==========================================================================
       JAVASCRIPT INTERACTIONS & SCROLL OBSERVERS
       ========================================================================== -->
  <script>
    // 1. Language Toggle Logic (IT / EN)
    const translations = {
      it: {
        headerTag: "2. IMMERSIONE NEL CUORE DEI NOSTRI TEAM",
        sec1Title: "Progettare un prodotto è un mestiere.",
        sec1Sub: "In realtà è un insieme di tanti mestieri. Scopriamoli.",
        sec1P: "Al centro del DESIGN in DECATHLON ci sono persone che, prima di tutto, sono appassionate di sport e lavorano ogni giorno per progettare prodotti sportivi. Ma le specialità creative e le competenze non si limitano solo al prodotto: ci sono designer nel retail, nel digitale e nella comunicazione. I designer lavorano su oltre dodici campi di competenza dall'abbigliamento alle calzature, fino ai componenti e al 3D.",
        sec2P1: "Parte del lavoro di un designer consiste nel conferire ai prodotti la loro personalità, oltre alla funzione. Fondamentalmente, oltre la percezione comune, DECATHLON vuole stringere un legame profondo tra lo sport, il DESIGN e la società.",
        sec2P2: "I team si sono uniti per creare il progetto 'Sports Mates'. Una strategia unica nel mondo dello sport che pone il valore emozionale al centro della propria missione. Attraverso motivazioni e desideri, i prodotti sono pensati per essere compagni, partner e motivatori."
      },
      en: {
        headerTag: "2. IMMERSION AT THE HEART OF OUR TEAMS",
        sec1Title: "Designing a product is a trade.",
        sec1Sub: "It's actually a whole heap of trades. Let's take a look.",
        sec1P: "At the heart of DESIGN at DECATHLON are people who, above all, are passionate sports enthusiasts working day in, day out to design sports products. But the creative specialities and expertise within DESIGN are not just limited to products. There are designers in retail, digital and communications departments. Designers work across more than twelve expert fields from apparel DESIGN to footwear DESIGN, components, 3D and others.",
        sec2P1: "Part of a designer's work consists in giving products their personality, in addition to their function. Essentially, beyond the usual perception, DECATHLON wants to forge a link between sport, DESIGN and society.",
        sec2P2: "DECATHLON teams came together to create the 'Sports Mates' project. A unique strategy in the world of sport that places emotional value at the heart of their mission. Through motivations, desires and persistence, products are designed to be companions and partners."
      }
    };

    function setLanguage(lang) {
      document.getElementById('btn-it').classList.toggle('active', lang === 'it');
      document.getElementById('btn-en').classList.toggle('active', lang === 'en');

      document.getElementById('txt-header-tag').textContent = translations[lang].headerTag;
      document.getElementById('txt-sec1-title').textContent = translations[lang].sec1Title;
      document.getElementById('txt-sec1-sub').textContent = translations[lang].sec1Sub;
      document.getElementById('txt-sec1-p').innerHTML = translations[lang].sec1P;
      document.getElementById('txt-sec2-p1').textContent = translations[lang].sec2P1;
      document.getElementById('txt-sec2-p2').innerHTML = translations[lang].sec2P2;
    }

    // 2. IntersectionObserver for Reveal Animations (Left/Right)
    document.addEventListener('DOMContentLoaded', () => {
      const revealElements = document.querySelectorAll('.reveal-from-right, .reveal-from-left');

      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      }, { threshold: 0.25 });

      revealElements.forEach(el => revealObserver.observe(el));

      // 3. Scroll Sync for Sticky Designer Showcase & SVG Dots
      const projectCards = document.querySelectorAll('.project-card');
      const stickyImg = document.getElementById('sticky-project-img');
      const dots = document.querySelectorAll('.dot-indicator');

      const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Highlight active card
            projectCards.forEach(card => card.classList.remove('active-project'));
            entry.target.classList.add('active-project');

            // Get active project index & image URL
            const projectIndex = parseInt(entry.target.getAttribute('data-project'));
            const newImgSrc = entry.target.getAttribute('data-img');

            // Fade transition for image
            stickyImg.style.opacity = '0';
            stickyImg.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
              stickyImg.src = newImgSrc;
              stickyImg.style.opacity = '1';
              stickyImg.style.transform = 'scale(1)';
            }, 200);

            // Update Active SVG Dot Indicator
            dots.forEach(dot => {
              const dotIdx = parseInt(dot.getAttribute('data-index'));
              if (dotIdx === projectIndex) {
                dot.classList.add('active');
              } else {
                dot.classList.remove('active');
              }
            });
          }
        });
      }, {
        threshold: 0.6
      });

      projectCards.forEach(card => projectObserver.observe(card));
    });
  </script>
</body>
</html>