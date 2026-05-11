"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CASES = [
  {
    title: "Gravity Contractors - New Website + More Local Leads",
    category: "Contractors · Web Development + SEO",
    metric: "Live in 14 days",
    period: "Hamilton, ON",
    bg: "from-[#111] to-[#1a1a1a]",
    accent: "from-accent-primary/20 to-transparent",
    screenshot: "/screenshots/gravity-contractors.webp",
    featured: true,
    href: "https://www.gravitycontractors.ca/",
  },
  {
    title: "Weather Guard Coatings - Brand New Online Presence",
    category: "Painting · Web Development",
    metric: "Full site built",
    period: "London, ON",
    bg: "from-[#0f1a11] to-[#111]",
    accent: "from-accent-primary/15 to-transparent",
    screenshot: "/screenshots/weatherguard.webp",
    featured: false,
    href: "https://www.weatherguardcoating.ca/",
  },
  {
    title: "Apply Buddies - International Education Platform",
    category: "Education · Web Development",
    metric: "Modern redesign",
    period: "Canada-wide",
    bg: "from-[#0f1118] to-[#111]",
    accent: "from-accent-primary/15 to-transparent",
    screenshot: "/screenshots/apply-buddies.webp",
    featured: false,
    href: "https://www.applybuddies.com/",
  },
];

export default function CaseStudies() {
  const [featured, ...rest] = CASES;

  return (
    <section className="bg-background-primary py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-accent-primary text-sm font-semibold uppercase tracking-widest mb-3"
            >
              Case Studies
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[28px] md:text-[38px] font-bold text-text-primary tracking-tight leading-tight"
            >
              Real Results From Real Clients
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-primary hover:gap-3 transition-all duration-200"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Featured (2 cols wide) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 group relative rounded-2xl overflow-hidden h-[340px] md:h-[400px] cursor-pointer"
          >
            {/* Screenshot background */}
            {featured.screenshot && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={featured.screenshot} alt={featured.title} className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            )}
            <div className={`absolute inset-0 bg-gradient-to-br ${featured.bg} ${featured.screenshot ? 'opacity-70' : 'opacity-100'}`} />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent`} />
            {/* Hover accent bar */}
            <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-accent-primary transition-all duration-500 rounded-full" />
            <a href={featured.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">{featured.category}</span>
              <h3 className="text-white text-[22px] md:text-[26px] font-bold leading-tight mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                {featured.title}
              </h3>
              <div className="flex items-center gap-4">
                <div className="bg-accent-primary rounded-lg px-4 py-2">
                  <span className="text-white text-sm font-bold">{featured.metric}</span>
                </div>
                <span className="text-white/60 text-sm">{featured.period}</span>
              </div>
            </a>
          </motion.div>

          {/* Two smaller cards stacked */}
          <div className="flex flex-col gap-4">
            {rest.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                className="group relative rounded-2xl overflow-hidden flex-1 min-h-[190px] cursor-pointer"
              >
                {/* Screenshot background */}
                {c.screenshot && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.screenshot} alt={c.title} className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${c.bg} ${c.screenshot ? 'opacity-60' : 'opacity-100'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-accent-primary transition-all duration-500" />
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-accent-primary text-[10px] font-semibold uppercase tracking-widest mb-2">{c.category}</span>
                  <h3 className="text-white text-[16px] font-bold leading-snug mb-3 group-hover:-translate-y-0.5 transition-transform duration-300">
                    {c.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="bg-accent-primary/20 border border-accent-primary/30 rounded-md px-3 py-1">
                      <span className="text-accent-primary text-xs font-bold">{c.metric}</span>
                    </div>
                    <span className="text-white/50 text-xs">{c.period}</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
