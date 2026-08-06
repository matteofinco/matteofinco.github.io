import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import CircleShowcase from "@/components/CircleShowcase";

export default function Index() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: "40px" }}>
      <h1>Portfolio Matte</h1>
      <p>Test di rendering base ok!</p>
      
      {/* Scommenta uno alla volta per trovare quale componente fa crashare la pagina: */}
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <IntroSection /> */}
      {/* <CircleShowcase /> */}
    </div>
  );
}