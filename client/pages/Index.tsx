import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import CircleShowcase from "@/components/CircleShowcase";
import StickyObject from "@/components/StickyObject";

const PROJECTS = [
  {
    id: "snake",
    title: "Snake Hockey",
    category: "Product / Sports Device",
    image: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "packaging",
    title: "Tactile Packaging",
    category: "Sustainable Packaging",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kintsugi",
    title: "Root Vase Kintsugi",
    category: "Recycled Polymer Design",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Header />
      <Hero />
      <IntroSection />

      {/* Griglia Progetti con Calamita sui titoli */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-12">
          Progetti Selezionati
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative bg-neutral-950 border border-neutral-800 rounded-2xl p-4 overflow-hidden transition-all duration-300 hover:border-neutral-700"
            >
              <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Wrapper Magnetico sul Testo */}
              <div className="p-2">
                <StickyObject strength={0.25}>
                  <h3 className="text-xl font-medium tracking-tight group-hover:text-neutral-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    {project.category}
                  </p>
                </StickyObject>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CircleShowcase />

      <footer id="contact" className="py-20 border-t border-neutral-900 text-center text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} Matteo Finco. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}