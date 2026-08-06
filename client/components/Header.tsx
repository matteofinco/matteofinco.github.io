import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-4 flex justify-between items-center text-white">
      <a href="#" className="font-medium tracking-tight text-lg">
        Portfolio
      </a>
      <nav className="flex gap-6 text-sm font-light opacity-90">
        <a href="#projects" className="hover:opacity-60 transition-opacity">
          Progetti
        </a>
        <a href="#about" className="hover:opacity-60 transition-opacity">
          Info
        </a>
        <a href="#contact" className="hover:opacity-60 transition-opacity">
          Contatti
        </a>
      </nav>
    </header>
  );
}