import React from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";


export default function App() {
  // Legge l'URL attuale direttamente al caricamento
  const path = window.location.pathname.toLowerCase();

  // Se l'indirizzo contiene "/about", mostra la pagina About, altrimenti la Home
  if (path.includes("/about")) {
    return <About />;
  }

  return <Index />;
}