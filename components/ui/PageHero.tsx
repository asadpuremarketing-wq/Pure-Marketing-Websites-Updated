"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  label?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  fadeToColor?: string; // bottom fade target color, defaults to background-primary (white)
}

export default function PageHero({ label, title, titleAccent, subtitle, breadcrumbs, fadeToColor = "#ffffff" }: PageHeroProps) {
  return (
    <section className="relative bg-[#111] pt-[100px] pb-16 md:pt-[120px] md:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_50%,_rgba(240,100,40,0.08),_transparent)]" />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Bottom fade into the next section's background color */}
      <div className="absolute bottom-0 left-0 right-0 h-12 to-transparent" style={{ background: `linear-gradient(to top, ${fadeToColor}, transparent)` }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-xs text-[#666] mb-5"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-[#999]">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {label && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4"
          >
            {label}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[32px] md:text-[48px] font-bold text-white tracking-tight leading-tight max-w-[700px]"
        >
          {titleAccent ? (
            <>
              {title}{" "}
              <span className="text-accent-primary">{titleAccent}</span>
            </>
          ) : (
            title
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[16px] text-[#888] max-w-[580px] leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
