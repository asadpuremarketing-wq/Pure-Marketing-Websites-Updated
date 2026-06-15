"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/sections/CTABanner";

export interface CityConfig {
  city: string;
  province: string;
  slug: string;
  region: string;
  nearbyAreas: string[];
  localContext: string;
  faq: Array<{ q: string; a: string }>;
}

const SERVICES = [
  { name: "Lead Generation", href: "/services/lead-generation", desc: "40-80 qualified leads/month", from: "from $1,499/mo" },
  { name: "Google Ads Management", href: "/services/google-meta-ads", desc: "Average 5-8x return on ad spend", from: "from $500/mo" },
  { name: "Meta Ads Management", href: "/services/google-meta-ads", desc: "Facebook and Instagram ads", from: "from $500/mo" },
  { name: "Web Design", href: "/services/web-development", desc: "Conversion-optimized websites", from: "Custom quote" },
  { name: "Social Media Management", href: "/services/social-media-management", desc: "Full content and posting service", from: "from $899/mo" },
  { name: "Video Production", href: "/services/video-production", desc: "Reels, testimonials, brand videos", from: "from $699" },
];

const INDUSTRIES = [
  "Electricians", "Plumbers", "HVAC Companies", "Landscapers",
  "General Contractors", "Painters", "Real Estate Agents", "Cleaning Services",
  "Roofers", "Locksmiths", "Renovation Companies", "Home Service Businesses",
];

const STATS = [
  { value: "150+", label: "Local Businesses Served" },
  { value: "$2M+", label: "Ad Spend Managed" },
  { value: "4.9", label: "Average Client Rating" },
  { value: "0", label: "Long-Term Contracts" },
];

const WHY_US = [
  {
    title: "No Contracts",
    desc: "Month-to-month only. Cancel any time. We earn your business every single month through results.",
  },
  {
    title: "Leads Within 14 Days",
    desc: "Most clients see their first qualified leads within 7-14 days of campaign launch.",
  },
  {
    title: "Local Business Specialists",
    desc: "We only work with local service businesses. No generic agency playbooks.",
  },
  {
    title: "Full Transparency",
    desc: "Monthly reports showing exactly where your budget goes and the leads it generates.",
  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

export default function CityPageTemplate({ config }: { config: CityConfig }) {
  const { city, province, region, nearbyAreas, localContext, faq } = config;

  return (
    <div className="flex flex-col min-h-screen">

      <PageHero
        label={`${region}`}
        title={`Digital Marketing Agency in`}
        titleAccent={`${city}, ${province}`}
        subtitle={localContext}
        breadcrumbs={[{ label: "Locations", href: "/locations" }, { label: city }]}
        fadeToColor="#ffffff"
      />

      {/* Stats band */}
      <section className="bg-accent-primary py-5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center py-3 ${i < STATS.length - 1 ? "border-r border-white/20" : ""}`}
              >
                <span className="text-[36px] md:text-[42px] font-black text-white leading-none">{s.value}</span>
                <span className="text-xs md:text-sm text-white/75 font-medium mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div {...fade(0)} className="text-center mb-14">
            <span className="inline-block text-accent-primary text-xs font-bold uppercase tracking-widest border border-accent-primary/20 bg-accent-primary/5 px-4 py-1.5 rounded-full mb-4">
              Services in {city}
            </span>
            <h2 className="text-[30px] md:text-[40px] font-black text-[#080808] leading-tight">
              Everything a {city} Business Needs to Grow
            </h2>
            <p className="text-[#666] text-[16px] mt-4 max-w-[560px] mx-auto">
              From paid ads to web design to video, Pure Marketing handles your full digital marketing presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <motion.div key={i} {...fade(i * 0.07)}>
                <Link
                  href={s.href}
                  className="group flex flex-col h-full bg-white border border-[#ebebeb] rounded-2xl p-6 hover:border-accent-primary/40 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-black text-[16px] text-[#080808] group-hover:text-accent-primary transition-colors leading-snug pr-2">{s.name}</h3>
                    <ArrowRight className="w-4 h-4 text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-[14px] text-[#666] leading-relaxed flex-grow">{s.desc}</p>
                  <p className="text-[12px] font-bold text-accent-primary mt-4">{s.from}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pure Marketing */}
      <section className="bg-[#f7f7f7] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div {...fade(0)} className="text-center mb-14">
            <span className="inline-block text-accent-primary text-xs font-bold uppercase tracking-widest border border-accent-primary/20 bg-accent-primary/5 px-4 py-1.5 rounded-full mb-4">
              Why Pure Marketing
            </span>
            <h2 className="text-[30px] md:text-[40px] font-black text-[#080808] leading-tight">
              The Agency {city} Businesses Trust
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WHY_US.map((item, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="bg-white border border-[#e8e8e8] rounded-2xl p-7 flex gap-5"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-accent-primary flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-[16px] text-[#080808] mb-1">{item.title}</h3>
                  <p className="text-[14px] text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#111] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div {...fade(0)} className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] font-black text-white leading-tight">
              Industries We Serve in {city}
            </h2>
            <p className="text-white/40 text-[15px] mt-3">
              Also serving {nearbyAreas.join(", ")} and surrounding areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {INDUSTRIES.map((industry, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.04)}
                className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-3 text-center text-[13px] font-semibold text-white/60 hover:border-accent-primary/40 hover:text-white transition-all duration-150"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <motion.div {...fade(0)} className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] font-black text-[#080808] leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#666] text-[15px] mt-3">About digital marketing for {city} businesses.</p>
          </motion.div>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="bg-[#f9f9f9] border border-[#ebebeb] rounded-2xl px-7 py-6"
              >
                <h3 className="font-black text-[15px] text-[#080808] mb-2">{item.q}</h3>
                <p className="text-[14px] text-[#555] leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-[#f7f7f7] py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-2 text-[#080808]">
              <MapPin className="w-4 h-4 text-accent-primary flex-shrink-0" />
              <span className="text-[14px] font-semibold">Serving {city} and {region}</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[#ddd]" />
            <a href="tel:+16479512786" className="flex items-center gap-2 text-accent-primary font-bold text-[14px] hover:underline">
              <Phone className="w-4 h-4" />
              +1 647-951-2786
            </a>
            <div className="hidden sm:block w-px h-5 bg-[#ddd]" />
            <Link href="/contact" className="text-[14px] font-bold text-accent-primary hover:underline">
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
