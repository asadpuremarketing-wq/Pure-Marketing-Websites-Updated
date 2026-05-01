"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

const RECENT_WINS = [
  { client: "Sparks Electric", result: "+340% more leads in 60 days" },
  { client: "GTA Plumbing Co.", result: "Booked out 6 weeks ahead" },
  { client: "Prime Realty", result: "3x website traffic in 30 days" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], ["0%", "30%"]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111]">
      {/* Dark gradient background matching existing site */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#0a0a0a]" />
        {/* Subtle orange glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_50%,_rgba(240,100,40,0.12),_transparent)]" />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </motion.div>

      <motion.div
        className="max-w-[1200px] w-full mx-auto px-6 relative z-10 py-20 pt-32"
        style={{ opacity: opacityFade }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT: Text */}
          <div className="flex flex-col items-start space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/30 rounded-full px-4 py-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              <span className="text-accent-primary text-xs font-semibold uppercase tracking-widest">
                Marketing Agency for Local Businesses
              </span>
            </motion.div>

            <motion.h1
              className="text-[38px] md:text-[56px] leading-[1.1] font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Grow Your Business<br />
              With Marketing That{" "}
              <span className="text-accent-primary">Actually Works</span>
            </motion.h1>

            <motion.p
              className="text-[17px] text-[#aaa] max-w-[500px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We help electricians, plumbers, HVAC companies, restaurants, and real estate agents get more leads, more bookings, and more revenue through proven digital marketing systems.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-3 pt-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent-primary text-white rounded-lg px-7 py-4 font-bold text-[15px] hover:bg-[#D9531E] transition-colors duration-300 shadow-lg shadow-accent-primary/30"
              >
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+16479512786"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 rounded-lg px-6 py-4 hover:border-white/40 hover:text-white transition-all duration-300 text-sm"
              >
                <Phone className="w-4 h-4" />
                +1 647-951-2786
              </a>
            </motion.div>

            <motion.p
              className="text-sm text-[#666] pt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Trusted by <span className="text-white font-medium">150+ local businesses</span> across Canada · No contracts · Results guaranteed
            </motion.p>
          </div>

          {/* RIGHT: Stats card */}
          <motion.div
            className="hidden lg:flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-xs text-[#666] uppercase tracking-widest font-medium mb-5">Client Results at a Glance</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { value: "150+", label: "Clients" },
                  { value: "4.9★", label: "Rating" },
                  { value: "$2M+", label: "Revenue" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-1">
                    <span className="text-[26px] font-bold text-white">{value}</span>
                    <span className="text-xs text-[#666]">{label}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-5 space-y-3">
                <p className="text-xs text-[#666] uppercase tracking-widest font-medium mb-3">Recent Wins</p>
                {RECENT_WINS.map(({ client, result }) => (
                  <div key={client} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-white">{client}</span>
                      <span className="text-sm text-[#888]"> - {result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini CTA */}
            <div className="bg-gradient-to-r from-accent-primary to-[#d8612a] rounded-2xl p-5 flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-[15px]">Free Marketing Audit</p>
                <p className="text-white/75 text-sm mt-0.5">No commitment. 30-minute call.</p>
              </div>
              <Link
                href="/contact"
                className="bg-white text-accent-primary text-sm font-bold rounded-xl px-4 py-2 hover:bg-white/90 transition-colors flex-shrink-0 ml-4"
              >
                Book Now
              </Link>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-accent-primary rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
