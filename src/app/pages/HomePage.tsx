import { Link } from "react-router";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between p-12 md:p-24">
      <header className="w-full flex justify-between items-center z-50">
        <div className="text-xl font-black tracking-tighter">MATTEO FINCO</div>
        <nav className="flex gap-8 md:gap-12 tracking-wide font-medium text-sm md:text-base">
          <Link to="/portfolio" className="opacity-60 hover:opacity-100 transition-opacity">Portfolio</Link>
          <Link to="/about" className="opacity-60 hover:opacity-100 transition-opacity">About</Link>
          <Link to="/about#cv" className="opacity-60 hover:opacity-100 transition-opacity">CV</Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col justify-center items-start my-auto max-w-4xl">
        <p className="text-xs md:text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">Selected Works & Research</p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 uppercase">
          Product <br /> Designer.
        </h1>
        <p className="text-lg md:text-xl max-w-xl font-medium leading-relaxed tracking-tight opacity-70">
          Specializzato in sostenibilità, economia circolare, fabbricazione digitale avanzata e interfacce fisiche minimaliste. Studente presso l'Università Iuav di Venezia.
        </p>
      </main>

      <footer className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs opacity-40 gap-4 sm:gap-0 pt-8 border-t border-black/5">
        <p>© 2026 Matteo Finco. All rights reserved.</p>
        <p className="tracking-tight">IUAV Vicenza — Disegno Industriale</p>
      </footer>
    </div>
  );
}