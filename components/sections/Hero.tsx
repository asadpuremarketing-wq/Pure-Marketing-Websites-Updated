"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], ["0%", "30%"]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">

      {/* Parallax background layer */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: mounted ? backgroundY : "0%" }}
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#080808] to-[#080808]" />

        {/* Large ambient orange glow — top right */}
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(240,100,40,0.18) 0%, rgba(240,100,40,0.06) 45%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Secondary glow — bottom left */}
        <div
          className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(240,100,40,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.05,
          }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="max-w-[1200px] w-full mx-auto px-6 relative z-10 py-20 pt-36"
        style={{ opacity: mounted ? opacityFade : 1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col items-start space-y-7">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#F06428]/10 border border-[#F06428]/30 rounded-full px-4 py-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#F06428] animate-pulse" />
              <span className="text-[#F06428] text-xs font-semibold uppercase tracking-widest">
                Local Lead Generation for Canadian Service Businesses
              </span>
            </motion.div>

            {/* H1 — no motion animation to avoid delaying LCP */}
            <h1 className="text-[44px] md:text-[64px] leading-[1.05] font-black text-white tracking-tight">
              More Calls. More Estimates.<br />
              More <span className="text-[#F06428]">Local Jobs.</span>
            </h1>

            {/* Subtext */}
            <p className="text-[17px] text-[#b3b3b3] max-w-[500px] leading-relaxed">
              We help Canadian contractors and local service companies attract
              customers in their service areas through targeted advertising,
              stronger Google visibility, AI search discoverability, and better
              lead conversion.
            </p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-3 pt-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F06428] text-white rounded-xl px-7 py-4 font-bold text-[15px] hover:bg-[#D9531E] transition-colors duration-300 shadow-xl shadow-[#F06428]/30"
              >
                Get a Free Local Growth Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/lead-generation"
                className="inline-flex items-center gap-2 border border-white/15 text-white/75 rounded-xl px-6 py-4 hover:border-white/35 hover:text-white transition-all duration-300 text-sm backdrop-blur-sm"
              >
                See How Our System Works
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              className="text-sm text-[#888] pt-1 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Phone className="w-3.5 h-3.5" />
              <a href="tel:+16479512786" className="hover:text-white transition-colors">
                +1 647-951-2786
              </a>
              {" "}· Serving local service businesses across Canada
            </motion.p>

          </div>

          {/* ── RIGHT COLUMN — team photo ── */}
          <motion.div
            className="hidden lg:flex flex-col gap-6 items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            {/* Team photo */}
            <div className="relative w-full">
              <div className="absolute inset-0 rounded-3xl bg-[#F06428]/15 blur-2xl scale-90 pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/team/team-hero.png"
                  alt="Pure Marketing Team"
                  width={560}
                  height={480}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Trust strip */}
            <div className="flex flex-col gap-3 w-full">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["bg-orange-400","bg-orange-500","bg-amber-500"].map((c, i) => (
                    <div key={i} className={`w-7 h-7 rounded-full border-2 border-[#080808] ${c} flex items-center justify-center text-white text-[10px] font-bold`}>
                      {["A","M","S"][i]}
                    </div>
                  ))}
                </div>
                <p className="text-[#999] text-[12px]">Local Lead Generation System</p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#F06428] rounded-full"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
