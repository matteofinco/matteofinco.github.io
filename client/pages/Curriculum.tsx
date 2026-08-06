import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";

export default function Curriculum() {
  const [language, setLanguage] = useState<'it' | 'en'>("en");
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Stati per il caricamento differito degli iframe
  const [shouldRenderIframes, setShouldRenderIframes] = useState(false);
  const [itRendered, setItRendered] = useState(false);

  // Link CDN Builder.io ai PDF del CV
  const pdfUrls = {
    it: "https://cdn.builder.io/o/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Febb4af0f796e4a149200098cc754c84d?alt=media&token=0437e3df-064c-45d1-8bcf-fc07f569c2c3&apiKey=b117f80db1214c899c967fecfbdcaa25",
    en: "https://cdn.builder.io/o/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5b03c6980928461fa8fa8a0014ada7e3?alt=media&token=2845f631-5854-4563-8874-d2d6487327f3&apiKey=b117f80db1214c899c967fecfbdcaa25"
  };

  // Rileva lo schermo mobile e imposta la lingua di default
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setLanguage("en");
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Timer di rendering e caricamento iniziale
  useEffect(() => {
    const iframeTimer = setTimeout(() => {
      setShouldRenderIframes(true);
    }, 300);

    const loadingTimer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 800);

    return () => {
      clearTimeout(iframeTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  const handleLanguageChange = (lang: 'it' | 'en') => {
    if (lang !== language) {
      if (lang === "it" && !itRendered) {
        setItRendered(true);
      }
      setLanguage(lang);
    }
  };

  const handleDownload = async () => {
    const fileName = `CV_Matteo_Finco_${language.toUpperCase()}.pdf`;
    try {
      const response = await fetch(pdfUrls[language]);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      window.open(pdfUrls[language], "_blank");
    }
  };

  return (
    <div className="bg-[#070707] text-[#e5e5e5] flex flex-col h-screen w-screen overflow-hidden m-0 p-0 relative">
      
      {/* HEADER INTEGRATO */}
      <Header 
        showBackToDesigns={false} 
        currentLang={language} 
        onLanguageChange={handleLanguageChange}
      />

      {/* CONTENITORE PRINCIPALE */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", width: "100%", margin: 0, padding: 0, position: "relative", paddingTop: "70px" }}>
        
        <div style={{ 
          flex: 1, 
          width: "100%", 
          height: "100%", 
          paddingBottom: "60px", 
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden"
        }}>
          
          {isMobile ? (
            /* VISTA MOBILE */
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              padding: "24px",
              textAlign: "center",
              backgroundColor: "#070707"
            }}>
              <span className="text-xs uppercase tracking-widest text-[#666666] mb-2 font-mono">Curriculum Vitae</span>
              <h2 className="text-2xl font-normal text-[#ffffff] tracking-wide mb-6">Matteo Finco</h2>
              <p className="text-sm font-light text-[#aaaaaa] max-w-xs leading-relaxed mb-8">
                For the best reading experience on mobile, view the resume in full screen or download the file directly.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "240px" }}>
                <a 
                  href={pdfUrls.en} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "12px",
                    border: "1px solid #ffffff",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "#070707",
                    backgroundColor: "#ffffff",
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "0.05em",
                    transition: "all 0.2s ease"
                  }}
                >
                  View Full Screen
                </a>
                <button 
                  onClick={handleDownload}
                  style={{
                    padding: "12px",
                    border: "1px solid #1a1a1a",
                    borderRadius: "8px",
                    color: "#e5e5e5",
                    backgroundColor: "#111111",
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  Download PDF
                </button>
              </div>
            </div>
          ) : (
            /* VISTA DESKTOP (IFRAMES PDF) */
            <div style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#070707"
            }}>
              
              {shouldRenderIframes && (
                <>
                  {/* Iframe Italiano */}
                  {itRendered && (
                    <iframe 
                      src={`${pdfUrls.it}#toolbar=0&navpanes=0&view=FitH`} 
                      width="100%" 
                      style={{ 
                        position: "absolute",
                        top: "-56px",
                        left: "-12px", 
                        width: "calc(100% + 36px)", 
                        height: "calc(100% + 75px)",
                        border: "none", 
                        backgroundColor: "transparent",
                        opacity: language === "it" ? 1 : 0,
                        pointerEvents: language === "it" ? "auto" : "none",
                        transition: "opacity 0.4s ease-in-out",
                        zIndex: language === "it" ? 2 : 1
                      }}
                      title="Curriculum Vitae Matteo Finco IT"
                    />
                  )}

                  {/* Iframe Inglese */}
                  <iframe 
                    src={`${pdfUrls.en}#toolbar=0&navpanes=0&view=FitH`} 
                    width="100%" 
                    style={{ 
                      position: "absolute",
                      top: "-56px",
                      left: "-12px", 
                      width: "calc(100% + 36px)", 
                      height: "calc(100% + 75px)",
                      border: "none", 
                      backgroundColor: "transparent",
                      opacity: language === "en" ? 1 : 0,
                      pointerEvents: language === "en" ? "auto" : "none",
                      transition: "opacity 0.4s ease-in-out",
                      zIndex: language === "en" ? 2 : 1
                    }}
                    title="Curriculum Vitae Matteo Finco EN"
                  />
                </>
              )}

              {/* RETTANGOLI DI COPERTURA LATERALI */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "12px",
                height: "100%",
                backgroundColor: "#070707",
                zIndex: 3,
                pointerEvents: "none"
              }} />

              <div style={{
                position: "absolute",
                top: 0,
                right: -1,
                width: "25px",
                height: "100%",
                backgroundColor: "#070707",
                zIndex: 3,
                pointerEvents: "none"
              }} />

              {/* Schermata Scura di Caricamento Iniziale */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#070707",
                zIndex: 10,
                opacity: isInitialLoading ? 1 : 0,
                pointerEvents: "none",
                transition: "opacity 0.5s ease-in-out"
              }} />
            </div>
          )}
        </div>
        
        {/* BARRA INFERIORE */}
        <div 
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px", 
            width: "100%",
            height: "60px",
            backgroundColor: "rgba(7, 7, 7, 0.9)", 
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderTop: "1px solid #1a1a1a", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10
          }}
        >
          <button 
            onClick={() => window.location.href = "/contact"}
            className="text-xs font-normal tracking-widest text-[#aaaaaa] uppercase hover:text-[#ffffff] transition-colors duration-200"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0
            }}
          >
            Get in touch
          </button>

          <button 
            onClick={handleDownload}
            className="text-xs font-normal tracking-widest text-[#aaaaaa] uppercase hover:text-[#ffffff] transition-colors duration-200"
            style={{
              position: "absolute",
              right: "32px",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: 0
            }}
          >
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="hidden sm:inline">Download PDF</span>
          </button>
        </div>
      </main>
    </div>
  );
}