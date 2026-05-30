"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CASES = [
  {
    title: "Gravity Contractors - New Website + More Local Leads",
    category: "Contractors · Web Development + SEO",
    metric: "Live in 14 days",
    metricNum: "14",
    metricLabel: "Days to Launch",
    client: "Gravity Contractors",
    period: "Hamilton, ON",
    desc: "Full website redesign and local SEO setup that generated inbound inquiries within the first month of going live.",
    screenshot: "/screenshots/gravity-contractors.webp",
    featured: true,
    href: "https://www.gravitycontractors.ca/",
  },
  {
    title: "Weather Guard Coatings - Brand New Online Presence",
    category: "Painting · Web Development",
    metric: "Full site built",
    metricNum: "100%",
    metricLabel: "Built from Scratch",
    client: "Weather Guard Coatings",
    period: "London, ON",
    desc: "Designed and launched a professional brand identity and website from zero.",
    screenshot: "/screenshots/weatherguard.webp",
    featured: false,
    href: "https://www.weatherguardcoating.ca/",
  },
  {
    title: "Apply Buddies - International Education Platform",
    category: "Education · Web Development",
    metric: "Modern redesign",
    metricNum: "3×",
    metricLabel: "User Engagement",
    client: "Apply Buddies",
    period: "Canada-wide",
    desc: "A full platform redesign that dramatically increased session time and inquiry conversion.",
    screenshot: "/screenshots/apply-buddies.webp",
    featured: false,
    href: "https://www.applybuddies.com/",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

export default function CaseStudies() {
  return (
    <section className="bg-[#080808] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p {...fadeUp(0)} className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Case Studies
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-[32px] md:text-[44px] font-black text-white leading-tight"
          >
            Results That Speak for Themselves
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            className="text-[16px] text-[#666] max-w-[500px] mx-auto mt-4 leading-relaxed"
          >
            Real businesses. Real growth. See what we&apos;ve built for clients across Canada.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group bg-white/[0.04] border border-white/10 rounded-2xl p-8 hover:border-accent-primary/30 hover:bg-white/[0.06] transition-all duration-300 flex flex-col"
            >
              {/* Category */}
              <p className="text-accent-primary text-[10px] font-semibold uppercase tracking-widest mb-6">
                {c.category}
              </p>

              {/* Large metric number */}
              <div className="mb-2">
                <span className="text-[56px] font-black text-accent-primary leading-none">
                  {c.metricNum}
                </span>
              </div>

              {/* Metric label */}
              <p className="text-white font-bold text-sm mb-1">{c.metricLabel}</p>

              {/* Client name */}
              <p className="text-[#666] text-sm mb-4">{c.client} · {c.period}</p>

              {/* Description */}
              <p className="text-[#555] text-sm leading-relaxed flex-grow mb-6">
                {c.desc}
              </p>

              {/* Title + arrow */}
              <div className="flex items-center justify-between border-t border-white/[0.08] pt-5 mt-auto">
                <p className="text-white/70 text-sm font-medium leading-snug max-w-[200px]">
                  {c.title}
                </p>
                <ArrowRight className="w-4 h-4 text-accent-primary flex-shrink-0 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Orange CTA */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-accent-primary text-white rounded-xl px-8 py-4 font-bold text-[15px] hover:bg-[#D9531E] transition-colors duration-300 shadow-lg shadow-accent-primary/30"
          >
            View All Case Studies →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
