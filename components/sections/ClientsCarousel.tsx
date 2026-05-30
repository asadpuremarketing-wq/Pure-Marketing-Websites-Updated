"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CLIENTS = [
  { name: "Weather Guard Coatings",         src: "/logos/weather-guard-coatings.png" },
  { name: "Gravity Contractors",             src: "/logos/gravity-contractors.png" },
  { name: "Greypro Concrete Designs",        src: "/logos/greypro-concrete.png" },
  { name: "Apply Buddies",                   src: "/logos/apply-buddies.png" },
  { name: "Tranquility Compassion",          src: "/logos/tranquility-compassion.png" },
  { name: "Faizan Global Relief Foundation", src: "/logos/fgrf.png" },
  { name: "Quick Car Repair",                src: "/logos/quick-car-repair.png" },
  { name: "GO Safe Driving",                src: "/logos/go-safe-driving.png" },
  { name: "Isnad Association",               src: "/logos/isnad-association.webp" },
  { name: "Prudent Locksmith & Garage",      src: "/logos/prudent-locksmith.jpg" },
  { name: "Bowld Up",                        src: "/logos/bowld-up.png" },
  { name: "Kukus Chicken",                   src: "/logos/kukus-chicken.png" },
  { name: "Moussas Shawarma",               src: "/logos/moussas-shawarma.png" },
];

// Triple the list for seamless infinite loop
const ITEMS = [...CLIENTS, ...CLIENTS, ...CLIENTS];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

export default function ClientsCarousel() {
  return (
    <section className="bg-[#080808] py-16 overflow-hidden">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 mb-10 text-center">
        <motion.p {...fadeUp(0)} className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">
          Trusted By
        </motion.p>
        <motion.h2
          {...fadeUp(0.1)}
          className="text-[28px] md:text-[36px] font-black text-white leading-tight"
        >
          150+ Businesses Across Canada
        </motion.h2>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-r from-[#080808] to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-l from-[#080808] to-transparent pointer-events-none" />

        <div className="flex gap-4 animate-infinite-scroll hover:[animation-play-state:paused]">
          {ITEMS.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white/[0.05] border border-white/10 rounded-full px-5 py-2.5 flex items-center justify-center min-w-[160px] h-[56px] hover:border-white/20 transition-colors duration-300"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={110}
                height={36}
                className="object-contain max-h-[36px] w-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
