"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const BookCallModal = dynamic(() => import("@/components/ui/BookCallModal"), { ssr: false });

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Our System", href: "/services/lead-generation" },
  { label: "Results", href: "/results" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
];

const INDUSTRIES = [
  { name: "Electricians", href: "/industries/electricians" },
  { name: "Plumbers", href: "/industries/plumbers" },
  { name: "HVAC", href: "/industries/hvac" },
  { name: "Painters", href: "/industries/painters" },
  { name: "Real Estate", href: "/industries/real-estate" },
  { name: "Restaurants", href: "/industries/restaurants" },
  { name: "Locksmiths", href: "/industries/locksmiths" },
  { name: "General Contractors", href: "/industries/general-contractors" },
];

// Pages with a dark hero - navbar text should be white when at top
const DARK_HERO_PATHS = ["/"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const pathname = usePathname();
  const industriesDropdownRef = useRef<HTMLDivElement>(null);

  const isDarkHero = DARK_HERO_PATHS.includes(pathname ?? "");
  // When not scrolled on a dark-hero page, use white text; otherwise dark
  const textColor = !isScrolled && isDarkHero ? "text-white" : "text-text-primary";
  const hoverColor = "hover:text-accent-primary";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main nav bar */}
      <div
        className={`flex items-center justify-between px-6 h-[68px] transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md border-b border-border"
            : isDarkHero
            ? "bg-transparent"
            : "bg-white border-b border-border"
        }`}
      >
        <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
          <Link
            href="/"
            className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              !isScrolled && isDarkHero ? "text-white" : "text-text-primary"
            }`}
          >
            Pure Marketing
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-7">
            {NAV_ITEMS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-200 ${hoverColor} relative pb-0.5 ${
                  pathname === href || (href !== "/" && pathname?.startsWith(href))
                    ? "text-accent-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-accent-primary after:rounded-full"
                    : textColor
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Industries dropdown */}
            <div
              ref={industriesDropdownRef}
              className="relative"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                onFocus={() => setIsIndustriesOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") { e.preventDefault(); setIsIndustriesOpen(true); }
                  if (e.key === "Escape") setIsIndustriesOpen(false);
                }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${hoverColor} py-2 cursor-pointer ${
                  pathname?.startsWith("/industries") ? "text-accent-primary" : textColor
                }`}
              >
                Industries
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              <AnimatePresence>
                {isIndustriesOpen && (
                  <div className="absolute top-full left-0 w-48 pt-1">
                    <motion.div
                      role="menu"
                      aria-label="Industry pages"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="bg-white border border-border rounded-xl shadow-xl py-2"
                      onKeyDown={(e) => {
                        if (e.key === "Escape") { setIsIndustriesOpen(false); }
                      }}
                    >
                      {INDUSTRIES.map((industry) => (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          role="menuitem"
                          onClick={() => setIsIndustriesOpen(false)}
                          className={`block px-4 py-2.5 text-sm transition-colors hover:bg-background-secondary hover:text-accent-primary ${
                            pathname === industry.href ? "text-accent-primary font-semibold" : "text-text-primary"
                          }`}
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors duration-200 ${hoverColor} ${
                !isScrolled && isDarkHero ? "text-white/80" : "text-text-secondary"
              }`}
            >
              Contact
            </Link>
            <button
              onClick={() => setBookingOpen(true)}
              className={`inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg border transition-all duration-200 ${
                !isScrolled && isDarkHero
                  ? "border-white/20 text-white/80 hover:border-white/40 hover:text-white"
                  : "border-border text-text-secondary hover:border-accent-primary hover:text-accent-primary"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              Book a Call
            </button>
            <Link href="/contact" className="btn-primary text-sm">
              Get Free Assessment
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${!isScrolled && isDarkHero ? "text-white" : "text-text-primary"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border shadow-lg overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 68px)" }}
          >
            <nav aria-label="Mobile navigation" className="flex flex-col divide-y divide-border">
              {[...NAV_ITEMS, { label: "Contact", href: "/contact" }].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 text-[15px] font-medium transition-colors ${
                    pathname === href ? "text-accent-primary" : "text-text-primary"
                  }`}
                >
                  {label}
                </Link>
              ))}

              {/* Industries accordion */}
              <div>
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 text-[15px] font-medium text-text-primary"
                >
                  <span className={pathname?.startsWith("/industries") ? "text-accent-primary" : ""}>Industries</span>
                  <ChevronDown
                    className={`w-4 h-4 text-text-muted transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-[#fafafa]"
                    >
                      {INDUSTRIES.map((industry) => (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-8 py-3 text-sm border-b border-border last:border-0 transition-colors ${
                            pathname === industry.href ? "text-accent-primary font-semibold" : "text-text-secondary"
                          }`}
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <div className="px-6 py-5 space-y-3">
                <button
                  onClick={() => { setBookingOpen(true); setIsMobileMenuOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 border border-border rounded-lg py-3 text-[15px] font-semibold text-text-primary hover:border-accent-primary hover:text-accent-primary transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Free Call
                </button>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary text-center block w-full"
                >
                  Get Free Assessment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <BookCallModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </header>
  );
}
