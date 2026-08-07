import React from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import Archivia from "./pages/Archivia";

export default function App() {
  // Legge l'URL attuale convertendolo in minuscolo
  const path = window.location.pathname.toLowerCase();

  // Mostra la pagina About
  if (path.includes("/about")) {
    return <About />;
  }

  // Mostra la pagina Curriculum (accetta sia /curriculum che /cv)
  if (path.includes("/curriculum") || path.includes("/cv")) {
    return <Curriculum />;
  }

  // Mostra la pagina Archivia (progetto)
  if (path.includes("/archivia")) {
    return <Archivia />;
  }

  // Fallback sulla Home Page
  return <Index />;
}
