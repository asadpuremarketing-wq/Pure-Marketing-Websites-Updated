"use client";

import { motion } from "framer-motion";
import { Globe, TrendingUp, Video, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    name: "Web Development",
    description: "High-converting websites built for local service businesses - fast, mobile-first, and SEO-ready.",
    icon: Globe,
    result: "2x more leads",
  },
  {
    name: "Lead Generation",
    description: "Google Ads, Meta Ads, and Local Service Ads working together to fill your pipeline with qualified leads.",
    icon: TrendingUp,
    result: "3x qualified leads",
  },
  {
    name: "Video Production",
    description: "Professional brand videos, property tours, and social content that drives engagement and builds trust.",
    icon: Video,
    result: "5x engagement",
  },
];

export default function Services() {
  return (
    <section className="bg-background-primary py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3"
            >
              What We Offer
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[28px] md:text-[38px] font-bold text-text-primary tracking-tight leading-tight"
            >
              Marketing That Gets Results
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-primary hover:gap-3 transition-all duration-200 whitespace-nowrap"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group bg-background-card border border-border rounded-2xl p-7 hover:border-accent-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col gap-4"
              >
                {/* Hover circle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-0 h-0 rounded-full bg-accent-primary/[0.06] group-hover:w-[300px] group-hover:h-[300px] transition-all duration-500 ease-out" />
                </div>

                {/* Icon */}
                <div className="relative z-10 w-11 h-11 rounded-xl bg-accent-primary/10 group-hover:bg-accent-primary/20 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent-primary" />
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="text-[18px] font-bold text-text-primary mb-2">{service.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{service.description}</p>
                </div>

                {/* Result pill */}
                <div className="relative z-10 mt-auto flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-accent-primary/10 text-accent-primary text-xs font-semibold rounded-full px-3 py-1">
                    {service.result}
                  </span>
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-accent-primary inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link href="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
