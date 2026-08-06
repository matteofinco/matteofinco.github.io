import React from 'react';

interface HeaderProps {
  lang: 'it' | 'en';
  setLang: (lang: 'it' | 'en') => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  return (
    <header className="fixed top-0 left-0 w-full px-[6vw] py-8 flex justify-between items-center z-[1000] bg-gradient-to-b from-[#070707]/90 to-transparent backdrop-blur-md">
      <div className="text-sm font-bold tracking-[3px] uppercase text-white font-mono">
        MATTEO FINCO
      </div>
      <div className="flex gap-4 items-center">
        <button
          className={`bg-none border-none font-semibold text-xs tracking-wider cursor-pointer transition-colors duration-300 ${
            lang === 'it' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
          }`}
          onClick={() => setLang('it')}
        >
          IT
        </button>
        <span className="text-neutral-700">|</span>
        <button
          className={`bg-none border-none font-semibold text-xs tracking-wider cursor-pointer transition-colors duration-300 ${
            lang === 'en' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
          }`}
          onClick={() => setLang('en')}
        >
          EN
        </button>
      </div>
    </header>
  );
};