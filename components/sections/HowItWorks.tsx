"use client";

import { motion } from "framer-motion";
import { Phone, FileText, Rocket, TrendingUp } from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    num: "01",
    icon: Phone,
    title: "Book a Free Strategy Call",
    desc: "Tell us about your business. We audit your market, competitors, and current online presence at no cost.",
  },
  {
    num: "02",
    icon: FileText,
    title: "We Build Your Custom Plan",
    desc: "We create a marketing strategy built specifically for your industry, city, and budget. No generic templates.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "We Launch in 7 to 14 Days",
    desc: "Your campaigns, website, or content go live fast. We move while your competitors are still thinking about it.",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Your Phone Starts Ringing",
    desc: "Weekly reports and continuous optimization. We keep improving until you're fully booked, then we scale.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5, delay },
});

export default function HowItWorks() {
  return (
    <section className="bg-[#080808] py-24 relative overflow-hidden">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.04 }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(240,100,40,0.08) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-16">
          <motion.p {...fadeUp(0)} className="text-accent-primary text-xs font-bold uppercase tracking-widest mb-4">
            How It Works
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-[32px] md:text-[44px] font-black text-white leading-tight">
            From Your First Call to{" "}
            <span className="text-accent-primary">Your First Lead</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-[16px] text-[#666] max-w-[480px] mx-auto mt-4 leading-relaxed">
            No long onboarding. No waiting months to see results. Here is exactly what happens when you work with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-accent-primary/20 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top glass sheen */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent rounded-t-2xl" />

                {/* Step badge */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-6 h-6 rounded-full bg-accent-primary text-white text-[10px] font-black flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-[10px] font-bold text-[#555] uppercase tracking-widest">
                    Step {step.num}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent-primary" />
                </div>

                <h3 className="text-[15px] font-black text-white leading-snug mb-2.5">
                  {step.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {step.desc}
                </p>

                {/* Desktop connector */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-3 z-20 w-6 h-6 rounded-full bg-[#111] border border-white/10 items-center justify-center">
                    <svg className="w-3 h-3 text-[#555]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeUp(0.4)} className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-primary text-white rounded-xl px-8 py-4 font-bold text-[15px] hover:bg-[#D9531E] transition-colors duration-300 shadow-lg shadow-accent-primary/30"
          >
            Start With a Free Strategy Call
          </Link>
          <p className="text-[#555] text-xs mt-4">No contracts. No pressure. Results within 30 days.</p>
        </motion.div>

      </div>
    </section>
  );
}
