"use client";

import Image from "next/image";

const CLIENTS = [
  { name: "Weather Guard Coatings",       src: "/logos/weather-guard-coatings.png" },
  { name: "Gravity Contractors",           src: "/logos/gravity-contractors.png" },
  { name: "Greypro Concrete Designs",      src: "/logos/greypro-concrete.png" },
  { name: "Apply Buddies",                 src: "/logos/apply-buddies.png" },
  { name: "Tranquility Compassion",        src: "/logos/tranquility-compassion.png" },
  { name: "Faizan Global Relief Foundation", src: "/logos/fgrf.png" },
  { name: "Quick Car Repair",              src: "/logos/quick-car-repair.png" },
  { name: "GO Safe Driving",              src: "/logos/go-safe-driving.png" },
  { name: "Isnad Association",             src: "/logos/isnad-association.webp" },
  { name: "Prudent Locksmith & Garage",    src: "/logos/prudent-locksmith.jpg" },
  { name: "Bowld Up",                      src: "/logos/bowld-up.png" },
  { name: "Kukus Chicken",                 src: "/logos/kukus-chicken.png" },
  { name: "Moussas Shawarma",              src: "/logos/moussas-shawarma.png" },
];

// Triple the list for seamless infinite loop
const ITEMS = [...CLIENTS, ...CLIENTS, ...CLIENTS];

export default function ClientsCarousel() {
  return (
    <section className="bg-background-secondary py-14 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-8 text-center">
        <p className="text-text-muted text-sm font-medium uppercase tracking-widest">
          Trusted by Local Businesses Across Canada
        </p>
      </div>

      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-r from-background-secondary to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-l from-background-secondary to-transparent pointer-events-none" />

        <div className="flex gap-6 animate-infinite-scroll hover:[animation-play-state:paused]">
          {ITEMS.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-background-card border border-border rounded-xl px-5 py-3 flex items-center justify-center min-w-[160px] h-[72px] shadow-sm hover:border-accent-primary/30 transition-colors duration-300"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={120}
                height={48}
                className="object-contain max-h-[48px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
