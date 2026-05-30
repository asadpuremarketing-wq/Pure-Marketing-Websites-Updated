"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AutoCarouselProps {
  items: React.ReactNode[];
  /** Cards visible at once on desktop (default 3) */
  perPage?: number;
  /** Milliseconds between auto-advances (default 3500) */
  interval?: number;
  /** Dark mode — changes dot/arrow colours */
  dark?: boolean;
}

export default function AutoCarousel({
  items,
  perPage = 3,
  interval = 3500,
  dark = false,
}: AutoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [dir, setDir]     = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* responsive perPage: mobile=1, sm=2, desktop=perPage */
  const [cols, setCols] = useState(1);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCols(perPage);
      else if (window.innerWidth >= 640) setCols(Math.min(perPage, 2));
      else setCols(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [perPage]);

  const total = Math.ceil(items.length / cols);

  const go = useCallback((next: number, d: number) => {
    setDir(d);
    setIndex((next + total) % total);
  }, [total]);

  const advance = useCallback(() => go(index + 1, 1), [go, index]);

  /* auto-scroll */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(advance, interval);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [advance, paused, interval]);

  const page = items.slice(index * cols, index * cols + cols);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit:  (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  const btnBase =
    "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 flex-shrink-0";
  const btnStyle = dark
    ? `${btnBase} border-white/15 text-white/50 hover:border-accent-primary hover:text-accent-primary`
    : `${btnBase} border-[#ddd] text-[#aaa] hover:border-accent-primary hover:text-accent-primary`;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* slide area */}
      <div className="relative overflow-hidden">
        <AnimatePresence custom={dir} mode="popLayout">
          <motion.div
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className={`grid gap-4 ${
              cols === 3 ? "grid-cols-3" :
              cols === 2 ? "grid-cols-2" :
              "grid-cols-1"
            }`}
          >
            {page.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="flex items-center justify-between mt-8">
        {/* dots */}
        <div className="flex gap-2 items-center">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > index ? 1 : -1)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-7 bg-accent-primary"
                  : dark
                  ? "w-2 bg-white/20 hover:bg-white/40"
                  : "w-2 bg-[#ddd] hover:bg-[#bbb]"
              }`}
            />
          ))}
        </div>

        {/* arrows */}
        <div className="flex gap-2">
          <button onClick={() => go(index - 1, -1)} className={btnStyle} aria-label="Previous">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={() => go(index + 1, 1)} className={btnStyle} aria-label="Next">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
