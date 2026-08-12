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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Quando lo scroll supera i 150px, fa comparire il nome nell'header
      if (window.scrollY > 150) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blocca lo scroll della pagina sottostante quando il menu overlay è aperto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    setIsMenuOpen(false);
    const isHomePage =
      window.location.pathname === '/' ||
      window.location.pathname.endsWith('/index.html') ||
      window.location.pathname === '';

    if (!isHomePage) {
      window.location.href = '/';
    } else {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMenuOpen(false);
    const isHomePage =
      window.location.pathname === '/' ||
      window.location.pathname.endsWith('/index.html') ||
      window.location.pathname === '';

    if (isHomePage) {
      e.preventDefault();
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const yOffset = 120;
        const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#070707]/90 backdrop-blur-md border-b border-[#1a1a1a] px-6 md:px-8 py-5 flex justify-between items-center text-[#ffffff]">
        {/* NOME / LOGO */}
        <a
          href="/"
          onClick={handleLogoClick}
          className={`text-sm font-normal tracking-widest text-[#ffffff] uppercase transition-all duration-500 ease-in-out cursor-pointer no-underline select-none ${
            showLogo || isMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-1 pointer-events-none'
          }`}
        >
          MATTEO FINCO
        </a>

        {/* LINGUA + MENU HAMBURGER */}
        <div className="flex items-center gap-6">
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

          {/* PULSANTE HAMBURGER - INGOMBRO QUADRATO (20px x 20px) */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex flex-col justify-between items-center w-3 h-3 cursor-pointer z-50 focus:outline-none opacity-80 hover:opacity-100 transition-opacity"
          >
            <span
              className={`block h-[1px] w-full bg-[#ffffff] transition-all duration-300 origin-center ${
                isMenuOpen ? 'rotate-45 translate-y-[9.5px]' : ''
              }`}
            />
            <span
              className={`block h-[1px] w-full bg-[#ffffff] transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-[1px] w-full bg-[#ffffff] transition-all duration-300 origin-center ${
                isMenuOpen ? '-rotate-45 -translate-y-[9.5px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* OVERLAY MENU NAVIGAZIONE */}
      <div
        className={`fixed inset-0 z-40 bg-[#070707] flex flex-col justify-between px-8 md:px-16 pt-28 pb-12 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        {/* LINK DI NAVIGAZIONE */}
        <nav className="flex flex-col gap-6 md:gap-8 max-w-xl my-auto">
          <a
            href="/"
            onClick={handleLogoClick}
            className="text-3xl md:text-5xl font-light tracking-tight text-[#888888] hover:text-[#ffffff] transition-colors no-underline uppercase"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl md:text-5xl font-light tracking-tight text-[#888888] hover:text-[#ffffff] transition-colors no-underline uppercase"
          >
            About
          </a>
          <a
            href="/#projects"
            onClick={handleProjectsClick}
            className="text-3xl md:text-5xl font-light tracking-tight text-[#888888] hover:text-[#ffffff] transition-colors no-underline uppercase"
          >
            Projects
          </a>
          <a
            href="/cv"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl md:text-5xl font-light tracking-tight text-[#888888] hover:text-[#ffffff] transition-colors no-underline uppercase"
          >
            Curriculum
          </a>
          <a
            href="https://www.linkedin.com/in/finco-matteo-2k05/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl md:text-5xl font-light tracking-tight text-[#888888] hover:text-[#ffffff] transition-colors no-underline uppercase"
          >
            LinkedIn
          </a>
        </nav>

        {/* FOOTER INTERNO MENU: WHAT'S NEXT */}
        <div className="border-t border-[#1a1a1a] pt-6 mt-6">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-[#ffffff] uppercase">
            WHAT&apos;S NEXT?
          </h3>
        </div>
      </div>
    </>
  );
};