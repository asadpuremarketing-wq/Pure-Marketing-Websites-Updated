"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, X, ArrowRight } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed) setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const dismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <>
      {/* Mobile: fixed bottom bar (always visible, no scroll trigger) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-xl flex items-center gap-3 px-4 py-3">
        <a
          href="tel:+16479512786"
          className="flex-1 flex items-center justify-center gap-2 border border-border rounded-lg py-2.5 text-sm font-semibold text-text-primary hover:border-accent-primary hover:text-accent-primary transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-accent-primary text-white rounded-lg py-2.5 text-sm font-bold hover:bg-[#D9531E] transition-colors"
        >
          Free Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Desktop: floating bottom-right card that appears after scrolling */}
      {isVisible && (
        <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="w-6 h-6 rounded-full bg-white border border-border shadow flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="bg-white border border-border rounded-2xl shadow-2xl p-4 flex flex-col gap-3 w-[240px]">
            <div>
              <p className="font-bold text-text-primary text-sm">Get a Free Marketing Audit</p>
              <p className="text-xs text-text-muted mt-0.5">No commitment · From $1,500/mo</p>
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-accent-primary text-white rounded-lg px-4 py-2.5 text-sm font-bold hover:bg-[#D9531E] transition-colors"
            >
              Book Free Call
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="tel:+16479512786"
              className="flex items-center justify-center gap-2 border border-border rounded-lg px-4 py-2 text-sm font-medium text-text-secondary hover:border-accent-primary hover:text-accent-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              647-951-2786
            </a>
          </div>
        </div>
      )}
    </>
  );
}
