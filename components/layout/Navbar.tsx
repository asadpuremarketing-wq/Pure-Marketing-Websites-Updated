"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownBlur = () => {
    setTimeout(() => {
      if (dropdownRef.current && !dropdownRef.current.contains(document.activeElement)) {
        setIsIndustriesOpen(false);
      }
    }, 100);
  };

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
          <nav className="hidden md:flex items-center space-x-7">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Packages", href: "/social-media-packages" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Blog", href: "/blog" },
            ].map(({ label, href }) => (
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
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
              onBlur={handleDropdownBlur}
            >
              <Link
                href="/industries"
                onFocus={() => setIsIndustriesOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") { e.preventDefault(); setIsIndustriesOpen(true); }
                  if (e.key === "Escape") setIsIndustriesOpen(false);
                }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${hoverColor} py-2 ${
                  pathname?.startsWith("/industries") ? "text-accent-primary" : textColor
                }`}
              >
                Industries
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </Link>
              <AnimatePresence>
                {isIndustriesOpen && (
                  <motion.div
                    role="menu"
                    aria-label="Industry pages"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-48 bg-white border border-border rounded-xl shadow-xl py-2 mt-1"
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
            <Link href="/contact" className="btn-primary text-sm">
              Get a Free Audit
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
            className="md:hidden bg-white border-b border-border overflow-hidden shadow-lg"
          >
            <div className="px-6 py-5 flex flex-col space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Packages", href: "/social-media-packages" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    pathname === href ? "text-accent-primary" : "text-text-primary"
                  }`}
                >
                  {label}
                </Link>
              ))}

              <div className="flex flex-col space-y-2 border-t border-border pt-3">
                <span className="text-xs font-semibold text-text-muted uppercase tracking-widest">Industries</span>
                {INDUSTRIES.map((industry) => (
                  <Link
                    key={industry.name}
                    href={industry.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm pl-2 transition-colors ${
                      pathname === industry.href ? "text-accent-primary" : "text-text-secondary"
                    }`}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center mt-2"
              >
                Get a Free Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
