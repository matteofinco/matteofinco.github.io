import React, { useState, useEffect } from 'react';

interface HeaderProps {
  showBackToDesigns?: boolean;
  currentLang: 'it' | 'en';
  onLanguageChange: (lang: 'it' | 'en') => void;
  setLang?: (lang: 'it' | 'en') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Quando lo scroll supera i 150px, fa comparire il nome nell'header
      if (window.scrollY > 150) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    // Controlla subito la posizione di scroll al caricamento della pagina
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    const isHomePage =
      window.location.pathname === '/' ||
      window.location.pathname.endsWith('/index.html') ||
      window.location.pathname === '';

    if (!isHomePage) {
      // Se si trova in /about o altra pagina, torna alla Home
      window.location.href = '/';
    } else {
      // Se è già in Home Page, torna in cima con scroll fluido
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#070707]/90 backdrop-blur-md border-b border-[#1a1a1a] px-8 py-5 flex justify-between items-center text-[#ffffff]">
      {/* NOME / LOGO - Minimal, non bold, con transizione in dissolvenza allo scroll */}
      <a
        href="/"
        onClick={handleLogoClick}
        className={`text-sm font-normal tracking-widest text-[#ffffff] uppercase transition-all duration-500 ease-in-out cursor-pointer no-underline select-none ${
          showLogo
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
      >
        MATTEO FINCO
      </a>

      {/* SELETTORE LINGUA */}
      <div className="flex items-center gap-3 text-xs font-semibold tracking-widest">
        <button
          type="button"
          onClick={() => onLanguageChange('it')}
          className={`transition-colors cursor-pointer ${
            currentLang === 'it' ? 'text-[#ffffff] font-bold' : 'text-[#666666] hover:text-[#ffffff]'
          }`}
        >
          IT
        </button>
        <span className="text-[#333333]">/</span>
        <button
          type="button"
          onClick={() => onLanguageChange('en')}
          className={`transition-colors cursor-pointer ${
            currentLang === 'en' ? 'text-[#ffffff] font-bold' : 'text-[#666666] hover:text-[#ffffff]'
          }`}
        >
          EN
        </button>
      </div>
    </header>
  );
};