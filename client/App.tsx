import React from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import Archivia from "./pages/Archivia";
import Snake from "./pages/Snake";
import { Footer } from "./components/Footer";

export default function App() {
  // Legge l'URL attuale convertendolo in minuscolo
  const path = window.location.pathname.toLowerCase();

  // Determina quale pagina mostrare
  const renderPage = () => {
    if (path.includes("/about")) {
      return <About />;
    }

    if (path.includes("/curriculum") || path.includes("/cv")) {
      return <Curriculum />;
    }

    if (path.includes("/archivia")) {
      return <Archivia />;
    }

    if (path.includes("/snake")) {
      return <Snake />;
    }

    return <Index />;
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}