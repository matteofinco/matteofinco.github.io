import React from 'react';


export default function About() {
  return (
    <div className="bg-[#070707] flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}>
      {/* Header coerente con il sito */}
      <Header showBackToDesigns={false} />

      {/* Contenitore principale con iframe */}
      <main style={{ flex: 1, overflow: "hidden", width: "100%", height: "100%", margin: 0, padding: 0, position: "relative" }}>
        <iframe
          src="https://paginematteo.framer.website/about"
          title="About"
          className="absolute top-0 left-0 w-full h-full border-none"
          style={{ background: "#070707" }}
        />
        
        {/* Barra inferiore minimale coordinata in versione dark */}
        <div 
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            width: "100%",
            height: "60px",
            backgroundColor: "rgba(7, 7, 7, 0.95)", 
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            boxShadow: "0 -15px 30px -10px rgba(0, 0, 0, 0.5)"
          }}
        >
          <button 
            onClick={() => {
              window.history.pushState({}, "", "/Contact");
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
            className="text-sm font-light text-gray-400 tracking-wide hover:text-white transition-colors duration-200"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0
            }}
          >
            Get in touch
          </button>
        </div>
      </main>
    </div>
  );
}