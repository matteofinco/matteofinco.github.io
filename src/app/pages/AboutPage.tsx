import { Link } from "react-router";
import { useEffect } from "react";

export function AboutPage() {
  useEffect(() => {
    if (window.location.hash === "#cv") {
      const cvSection = document.getElementById("cv");
      if (cvSection) cvSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10 px-12 py-6 flex items-center justify-between">
        <Link to="/" className="tracking-tight opacity-80 hover:opacity-100 transition-opacity font-bold">Matteo Finco</Link>
        <nav className="flex gap-12 tracking-wide">
          <Link to="/portfolio" className="opacity-60 hover:opacity-100 transition-opacity">Portfolio</Link>
          <Link to="/about" className="opacity-100 font-bold">About</Link>
          <Link to="/about#cv" className="opacity-60 hover:opacity-100 transition-opacity">CV</Link>
        </nav>
      </header>

      <main className="pt-32 pb-24 max-w-6xl mx-auto px-12 space-y-32">
        <section className="grid grid-cols-12 gap-16">
          <div className="col-span-3"><h2 className="text-xl font-bold tracking-tight">About</h2></div>
          <div className="col-span-9 space-y-6 opacity-80 text-lg leading-relaxed">
            <p>Matteo Finco è un product designer orientato alla sostenibilità e all'integrazione tra progettazione industriale, fabbricazione digitale e sistemi interattivi. La sua pratica coniuga un approccio rigoroso ai materiali industriali ed ecologici con l'esplorazione di interfacce fisiche minimaliste.</p>
            <p>Attraverso lo sviluppo di prototipi funzionanti e la sperimentazione con tecnologie open-source, esplora le potenzialità dell'economia circolare nel design del prodotto, traducendo la complessità tecnica in geometrie pulite.</p>
          </div>
        </section>

        <section id="cv" className="space-y-20 border-t border-black/5 pt-16">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-3"><h2 className="text-xl font-bold tracking-tight">Education</h2></div>
            <div className="col-span-9">
              <p className="font-medium text-lg">Laurea in Disegno Industriale (Product Design)</p>
              <p className="text-sm opacity-60">Università Iuav di Venezia — Sede di Vicenza (In corso)</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-3"><h2 className="text-xl font-bold tracking-tight">Skills & Software</h2></div>
            <div className="col-span-9 grid grid-cols-2 gap-4 text-sm opacity-70">
              <p>Rhinoceros 3D (Modeling & SquishBack)</p>
              <p>Autodesk Fusion 360 (CAD/CAM)</p>
              <p>Processing (Interactive Sketches)</p>
              <p>Siemens Sinumerik G-code</p>
              <p>3D Printing FDM (CoreXY & Klipper)</p>
              <p>Arduino Prototyping (Dead-front)</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}