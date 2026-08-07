import React from "react";

import Index from "./pages/Index";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";

import Archivia from "./pages/Archivia";
import WaffleMaker from "./pages/WaffleMaker";

import Snake from "./pages/Snake";
import TTable from "./pages/ttable";
import Pizzamente from "./pages/Pizzamente";


import Prop from "./pages/Prop";
import Nando from "./pages/Nando";

import { Footer } from "./components/Footer";


export default function App() {

  const path = window.location.pathname.toLowerCase();


  const isCurriculum =
    path.includes("/curriculum") ||
    path.includes("/cv");


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
      return <TTable />;
    }


    if (path.includes("/snake")) {
      return <Snake />;
    }

      if (path.includes("/wafflemaker")) {
      return <WaffleMaker />;
      }
     if (path.includes("/pizzamente")) {
      return <Pizzamente />;
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
    <>
      {renderPage()}

      {!isCurriculum && <Footer />}
    </>
  );
}