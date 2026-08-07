import React from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import Archivia from "./pages/Archivia";
import Snake from "./pages/Snake";
import ttable from "./pages/ttable";

import Prop from "./pages/Prop";
import Nando from "./pages/Nando";
import { Footer } from "./components/Footer";

export default function App() {
  const path = window.location.pathname.toLowerCase();

  const isCurriculum = path.includes("/curriculum") || path.includes("/cv");

  const renderPage = () => {
    if (path.includes("/about")) {
      return <About />;
    }

    if (isCurriculum) {
      return <Curriculum />;
    }
    

    if (path.includes("/archivia")) {
      return <Archivia />;
    }
    if (path.includes("/ttable")) {
      return <ttable />;
    }

    if (path.includes("/snake")) {
      return <Snake />;
    }

    if (path.includes("/prop")) {
      return <Prop />;
    }

    if (path.includes("/nando")) {
      return <Nando />;
    }

    return <Index />;
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#070707] text-[#e5e5e5]">
      <main className="flex-grow">
        {renderPage()}
      </main>
      {/* Il Footer viene nascosto automaticamente se ci troviamo nella pagina Curriculum */}
      {!isCurriculum && <Footer />}
    </div>
  );
}