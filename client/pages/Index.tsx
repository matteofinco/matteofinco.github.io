import React, { useState, useEffect, useRef } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { IntroSection } from '../components/IntroSection';
import { CircleShowcase, ProjectStep } from '../components/CircleShowcase';

const PROJECTS_DATA: ProjectStep[] = [
  {
    id: "01",
    slug: "snake-hockey",
    title: "SNAKE HOCKEY",
    subtitle: "Dispositivo Modulare di Allenamento",
    category: "PRODUCT DESIGN",
    tools: "Rhino 7 / Fusion 360",
    material: "PLA / Sensoristica",
    year: "2026",
    desc: "Un sistema modulare interattivo progettato per migliorare la reattività e il controllo del disco nell'hockey su ghiaccio. Sviluppato per gli atleti del settore giovanile.",
    link: "#snake",
    img: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "02",
    slug: "kintsugi-pot",
    title: "KINTSUGI POT",
    subtitle: "Vaso in Polimero Riciclato",
    category: "SUSTAINABLE DESIGN",
    tools: "Bambu Lab P2S / Mold Design",
    material: "Scarti di produzione PLA",
    year: "2026",
    desc: "Progetto ispirato all'arte giapponese del Kintsugi, realizzato tramite co-iniezione di polimeri di scarto con trame organiche a vista.",
    link: "#kintsugi",
    img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "03",
    slug: "mcdonalds-packaging",
    title: "MCD TACTILE",
    subtitle: "Sensory Packaging System",
    category: "PACKAGING / BRAND",
    tools: "Figma / LaserGRBL",
    material: "Cartone Kraft Riciclato",
    year: "2026",
    desc: "Riprogettazione strutturale del packaging fast-food con finiture tattili e tipografia a rilievo per migliorare l'esperienza sensoriale dell'utente.",
    link: "#mcd",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80"
  }
];

export default function Index() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="page-snap-wrapper" ref={containerRef}>
      <Header />

      {/* Sezione Hero con Snap Centrato */}
      <section className="snap-section">
        <Hero />
      </section>

      {/* Sezione Introduttiva / Calamite Testo */}
      <section className="snap-section">
        <IntroSection />
      </section>

      {/* Sezione Circle Showcase */}
      <section className="snap-section showcase-snap">
        <CircleShowcase 
          steps={PROJECTS_DATA} 
          activeStep={activeStep} 
          onStepChange={(index) => setActiveStep(index)}
        />
      </section>

      <style>{`
        .page-snap-wrapper {
          height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
          background-color: #070707;
        }

        .snap-section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          min-height: 100vh;
          width: 100%;
          position: relative;
        }

        .showcase-snap {
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
}