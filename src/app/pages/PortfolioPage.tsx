import { Link } from "react-router";

const projects = [
  { id: "vaso-kintsugi", title: "Vaso Kintsugi", description: "An organic root-like texture plant pot inspired by the Japanese Kintsugi technique." },
  { id: "myceil-panels", title: "MyCeil Acoustic Panels", description: "Bio-based acoustic ceiling panels made from mycelium and textile waste." },
  { id: "polyamide-gadget", title: "Recycled Polyamide Gadget", description: "Sustainable industrial design project developed for a manufacturing fair." },
  { id: "cnc-components", title: "Aluminum CNC Components", description: "Custom mechanical pieces machined with Siemens Sinumerik G-code cycles." },
  { id: "arduino-interface", title: "Interactive Arduino Interface", description: "A capacitive touch panel using a 'dead front' minimalist aesthetic." },
  { id: "corexy-printing", title: "CoreXY 3D Printing Architecture", description: "Custom Klipper firmware and hardware integration for high-speed manufacturing." }
];

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10 px-12 py-6 flex items-center justify-between">
        <Link to="/" className="tracking-tight opacity-80 hover:opacity-100 transition-opacity font-bold">Matteo Finco</Link>
        <nav className="flex gap-12 tracking-wide">
          <Link to="/portfolio" className="opacity-100 font-bold">Portfolio</Link>
          <Link to="/about" className="opacity-60 hover:opacity-100 transition-opacity">About</Link>
          <Link to="/about#cv" className="opacity-60 hover:opacity-100 transition-opacity">CV</Link>
        </nav>
      </header>

      <main className="pt-32 pb-24 px-12 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter">PORTFOLIO</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer block border border-black/5 p-6 hover:border-black transition-all">
              <div className="aspect-[3/2] bg-gray-100 mb-4 flex items-center justify-center text-xs opacity-40">[Immagine: {project.title}]</div>
              <h3 className="text-2xl font-bold tracking-tight mb-1">{project.title}</h3>
              <p className="text-gray-500 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}