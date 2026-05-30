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
  fadeToColor?: string;
}

export default function PageHero({
  label,
  title,
  titleAccent,
  subtitle,
  breadcrumbs,
  fadeToColor = "#ffffff",
}: PageHeroProps) {
  return (
    <section className="relative bg-[#080808] min-h-[320px] md:min-h-[380px] pt-32 pb-20 overflow-hidden flex flex-col justify-center">

      {/* Large ambient orange glow — top right */}
      <div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(240,100,40,0.14) 0%, rgba(240,100,40,0.04) 50%, transparent 70%)",
          filter: "blur(100px)",
          opacity: 0.08,
        }}
      />
      {/* Subtle second glow — left center */}
      <div
        className="absolute top-1/2 -left-40 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(240,100,40,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Line grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          opacity: 0.04,
        }}
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${fadeToColor}, transparent)` }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-xs text-[#555] mb-6"
          >
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-[#444]" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-white/80 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#777]">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Eyebrow badge */}
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 bg-[#F06428]/10 border border-[#F06428]/30 rounded-full px-4 py-1.5 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F06428] animate-pulse" />
            <span className="text-[#F06428] text-[11px] font-bold uppercase tracking-widest">
              {label}
            </span>
          </motion.div>
        )}

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-[40px] md:text-[60px] font-black text-white tracking-tight leading-[1.05] max-w-[760px]"
        >
          {titleAccent ? (
            <>
              {title}{" "}
              <span className="text-[#F06428]">{titleAccent}</span>
            </>
          ) : (
            title
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-5 text-[17px] text-[#777] max-w-[560px] leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
