"use client";

// Replace these with real client logo image paths once available.
// Each item renders as a text-based logo placeholder.
const CLIENTS = [
  "Sparks Electric",
  "GTA Plumbing",
  "AirFlow HVAC",
  "Prime Realty",
  "Casa Restaurant",
  "TrueCoat Painters",
  "Metro Electric",
  "ClearPipe Co.",
  "Summit Real Estate",
  "Flame Kitchen",
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
          {ITEMS.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-background-card border border-border rounded-xl px-6 py-4 flex items-center justify-center min-w-[160px] h-[64px] shadow-sm hover:border-accent-primary/30 transition-colors duration-300"
            >
              <span className="text-text-secondary text-sm font-semibold whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
