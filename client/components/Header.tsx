import React from 'react';

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
  const handleLogoClick = (e: React.MouseEvent) => {
    // Verifica se l'utente si trova attualmente nella Home Page
    const isHomePage =
      window.location.pathname === '/' ||
      window.location.pathname.endsWith('/index.html') ||
      window.location.pathname === '';

    if (!isHomePage) {
      // Se si trova in /about o in un'altra pagina, va alla Home Page
      window.location.href = '/';
    } else {
      // Se è già in Home Page, esegue lo scroll fluido in cima
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#070707]/90 backdrop-blur-md border-b border-[#1a1a1a] px-8 py-5 flex justify-between items-center text-[#ffffff]">
      {/* NOME / LOGO - Sempre visibile ed esplicitamente bianco */}
      <a
        href="/"
        onClick={handleLogoClick}
        className="text-base font-bold tracking-wider text-[#ffffff] hover:opacity-70 transition-opacity cursor-pointer no-underline select-none"
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