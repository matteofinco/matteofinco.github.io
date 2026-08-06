import React from "react";

interface HeaderProps {
  lang?: 'it' | 'en';
  setLang?: (lang: 'it' | 'en') => void;
  showName?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ lang = 'it', setLang, showName = false }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-4 flex justify-between items-center text-white">
      <div className="font-medium tracking-tight text-lg">
        {showName ? "MATTEO FINCO" : "PORTFOLIO"}
      </div>
      <nav className="flex gap-6 text-sm font-light opacity-90">
        <a href="#projects" className="hover:opacity-60 transition-opacity">
          {lang === 'it' ? 'Progetti' : 'Projects'}
        </a>
        <a href="#about" className="hover:opacity-60 transition-opacity">
          {lang === 'it' ? 'Info' : 'About'}
        </a>
        <button
          onClick={() => setLang?.(lang === 'it' ? 'en' : 'it')}
          className="hover:opacity-60 transition-opacity cursor-pointer bg-none border-none text-white text-sm font-light"
        >
          {lang === 'it' ? 'EN' : 'IT'}
        </button>
      </nav>
    </header>
  );
};
