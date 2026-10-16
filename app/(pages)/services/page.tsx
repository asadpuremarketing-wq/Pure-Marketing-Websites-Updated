"use client";

import { motion } from "framer-motion";
import {
  Megaphone, MapPin, Sparkles, PhoneCall, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/sections/CTABanner";

const CAPABILITIES = [
  {
    icon: Megaphone,
    title: "Paid Customer Acquisition",
    desc: "Google Search Ads, Google Local Services Ads, and Meta Ads that generate customer inquiries in your service area.",
  },
  {
    icon: MapPin,
    title: "Google Maps & Local Search Visibility",
    desc: "Google Business Profile optimization, local SEO, and review strategy to improve visibility to nearby searchers.",
  },
  {
    icon: Sparkles,
    title: "AI Search Discoverability",
    desc: "Clear, structured, helpful content that improves your eligibility across traditional and AI-powered search.",
  },
  {
    icon: PhoneCall,
    title: "Lead Capture & Conversion",
    desc: "High-converting forms, click-to-call, and tracking that turn inquiries into booked jobs.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        label="Our System"
        title="One Service."
        titleAccent="Built to Get You More Local Work."
        subtitle="Pure Marketing has one focus: helping local service businesses generate more qualified calls, estimates, and job opportunities through a complete local lead generation system."
        breadcrumbs={[{ label: "Services" }]}
        fadeToColor="#ffffff"
      />

      <section className="bg-white py-20">
        <div className="max-w-[900px] mx-auto px-6 text-center mb-14">
          <motion.p {...fadeUp(0)} className="text-[17px] text-[#555] leading-relaxed">
            We don&apos;t offer a menu of separate marketing services. We run one system, the Local Lead Generation System,
            that combines four coordinated capabilities to help Canadian local service businesses get found, get called, and get booked.
          </motion.p>
        </div>

        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {CAPABILITIES.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  {...fadeUp(i * 0.08)}
                  className="rounded-2xl border border-[#e8e8e8] bg-white p-6 hover:border-accent-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <h3 className="text-[16px] font-black text-[#0d0d0d] leading-snug mb-2.5">{c.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{c.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div {...fadeUp(0.2)} className="text-center">
            <Link
              href="/services/lead-generation"
              className="inline-flex items-center gap-2 bg-accent-primary text-white text-sm font-bold rounded-xl px-7 py-4 hover:bg-accent-hover transition-all duration-200"
            >
              Explore Our Lead Generation System
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
