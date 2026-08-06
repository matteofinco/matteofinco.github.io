import React, { useState, useEffect } from "react";

// Inline Header component for a self-contained single-file implementation
interface HeaderProps {
showBackToDesigns?: boolean;
currentLang: "it" | "en";
onLanguageChange: (lang: "it" | "en") => void;
}

const Header: React.FC = ({ currentLang, onLanguageChange }) => {
return (



Matteo Finco


/ Portfolio & CV



  <div className="flex items-center gap-4">
    {/* Language Selector */}
    <div className="flex items-center bg-[#111111] p-1 rounded-lg border border-[#222222]">
      <button
        onClick={() => onLanguageChange("en")}
        className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
          currentLang === "en"
            ? "bg-[#ffffff] text-[#070707] shadow-sm font-semibold"
            : "text-[#aaaaaa] hover:text-[#ffffff]"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange("it")}
        className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
          currentLang === "it"
            ? "bg-[#ffffff] text-[#070707] shadow-sm font-semibold"
            : "text-[#aaaaaa] hover:text-[#ffffff]"
        }`}
      >
        IT
      </button>
    </div>
  </div>
</header>


);
};

export default function CV() {
const [language, setLanguage] = useState<"it" | "en">("en");
const [isMobile, setIsMobile] = useState(false);
const [isLoading, setIsLoading] = useState(true);
const [activeTab, setActiveTab] = useState<"en" | "it">("en");

// PDF URLs
const pdfUrls = {
it: "https://cdn.builder.io/o/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Febb4af0f796e4a149200098cc754c84d?alt=media&token=0437e3df-064c-45d1-8bcf-fc07f569c2c3&apiKey=b117f80db1214c899c967fecfbdcaa25",
en: "https://cdn.builder.io/o/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5b03c6980928461fa8fa8a0014ada7e3?alt=media&token=2845f631-5854-4563-8874-d2d6487327f3&apiKey=b117f80db1214c899c967fecfbdcaa25"
};

// Safe window detection on mount
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

// Smooth loading transition
const timer = setTimeout(() => {
  setIsLoading(false);
}, 600);

return () => {
  window.removeEventListener("resize", handleResize);
  clearTimeout(timer);
};


}, []);

const handleLanguageChange = (lang: "it" | "en") => {
setLanguage(lang);
setActiveTab(lang);
};

const handleDownload = async () => {
const fileName = CV_Matteo_Finco_${language.toUpperCase()}.pdf;
try {
const response = await fetch(pdfUrls[language]);
if (!response.ok) throw new Error("Download failed");

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
  // Fallback: direct download/open in new tab
  window.open(pdfUrls[language], "_blank");
}


};

return (

{/* HEADER INTEGRATION */}


  {/* MAIN CONTENT AREA */}
  <main className="flex-1 flex flex-col w-full h-full overflow-hidden relative pt-[70px]">
    <div className="flex-1 w-full h-full pb-[60px] relative overflow-hidden">
      {isMobile ? (
        /* MOBILE MINIMAL VIEW */
        <div className="flex flex-col items-center justify-center h-full w-full p-6 text-center bg-[#070707]">
          <span className="text-xs uppercase tracking-widest text-[#666666] mb-2 font-mono">
            Curriculum Vitae
          </span>
          <h2 className="text-3xl font-light text-[#ffffff] tracking-wide mb-4">
            Matteo Finco
          </h2>
          <p className="text-sm font-light text-[#aaaaaa] max-w-xs leading-relaxed mb-8">
            For the best reading experience on mobile devices, open the resume in full screen or download the PDF file directly.
          </p>

          <div className="flex flex-col gap-3 w-full max-w-[260px]">
            <a
              href={pdfUrls[language]}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 border border-[#ffffff] rounded-lg text-[#070707] bg-[#ffffff] text-xs font-semibold tracking-wider text-center transition-all hover:bg-neutral-200 active:scale-[0.98]"
            >
              View Full Screen ({language.toUpperCase()})
            </a>
            <button
              onClick={handleDownload}
              className="w-full py-3 px-4 border border-[#222222] rounded-lg text-[#e5e5e5] bg-[#111111] text-xs font-medium tracking-wider text-center transition-all hover:border-[#444444] active:scale-[0.98]"
            >
              Download PDF
            </button>
          </div>
        </div>
      ) : (
        /* DESKTOP EMBEDDED PDF VIEW */
        <div className="w-full h-full relative bg-[#070707] flex items-center justify-center">
          {/* EN PDF Viewer */}
          <div 
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              activeTab === "en" ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <object
              data={`${pdfUrls.en}#toolbar=0&navpanes=0&view=FitH`}
              type="application/pdf"
              className="w-full h-full border-0"
            >
              <iframe
                src={`${pdfUrls.en}#toolbar=0&navpanes=0&view=FitH`}
                className="w-full h-full border-0 bg-transparent"
                title="Curriculum Vitae Matteo Finco EN"
              />
            </object>
          </div>

          {/* IT PDF Viewer */}
          <div 
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              activeTab === "it" ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <object
              data={`${pdfUrls.it}#toolbar=0&navpanes=0&view=FitH`}
              type="application/pdf"
              className="w-full h-full border-0"
            >
              <iframe
                src={`${pdfUrls.it}#toolbar=0&navpanes=0&view=FitH`}
                className="w-full h-full border-0 bg-transparent"
                title="Curriculum Vitae Matteo Finco IT"
              />
            </object>
          </div>

          {/* LOADING OVERLAY */}
          <div
            className={`absolute inset-0 bg-[#070707] z-20 flex items-center justify-center transition-opacity duration-500 pointer-events-none ${
              isLoading ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-6 h-6 border-2 border-[#ffffff] border-t-transparent rounded-full animate-spin" />
              <span className="text-xs font-mono text-[#888888] tracking-widest uppercase">
                Loading Resume...
              </span>
            </div>
          </div>
        </div>
      )}
    </div>

    {/* BOTTOM FIXED BAR */}
    <footer className="absolute bottom-0 left-0 w-full h-[60px] bg-[#070707]/90 backdrop-blur-md border-t border-[#1a1a1a] flex items-center justify-between px-8 z-30">
      <button
        onClick={() => window.location.href = "/contact"}
        className="text-xs font-normal tracking-widest text-[#aaaaaa] uppercase hover:text-[#ffffff] transition-colors duration-200 bg-transparent border-0 cursor-pointer"
      >
        Get in touch
      </button>

      <button
        onClick={handleDownload}
        className="text-xs font-normal tracking-widest text-[#aaaaaa] uppercase hover:text-[#ffffff] transition-colors duration-200 bg-transparent border-0 cursor-pointer flex items-center gap-2"
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
        <span>Download PDF ({language.toUpperCase()})</span>
      </button>
    </footer>
  </main>
</div>


);
}