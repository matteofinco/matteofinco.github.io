import React from "react";

export default function IntroSection() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      alt: "Design Studio Placeholder 1",
    },
    {
      src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
      alt: "Design Studio Placeholder 2",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
            Esplorazione formale, materia e processi di produzione.
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Un percorso integrato tra modellazione 3D, fabbricazione digitale e
            ricerca sensoriale applicata ai prodotti industriali.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}