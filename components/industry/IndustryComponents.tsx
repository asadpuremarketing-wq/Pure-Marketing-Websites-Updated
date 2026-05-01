"use client";

import { motion } from "framer-motion";
import { Play, Star, Check } from "lucide-react";
import Link from "next/link";
import { ElementType } from "react";

// --- HERO ---
export function IndustryHero({ label, headline, subtext, trustLine }: { label: string; headline: string; subtext: string; trustLine: string }) {
  return (
    <section className="bg-background-primary pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="text-accent-primary uppercase tracking-widest text-sm font-medium">{label}</span>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="font-serif text-[32px] md:text-[48px] text-text-primary leading-tight">
              {headline}
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-[18px] text-text-secondary max-w-[500px] leading-relaxed">
              {subtext}
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">Book a Free Audit</Link>
              <Link href="/portfolio" className="btn-secondary w-full sm:w-auto text-center">See Case Studies</Link>
            </motion.div>
            
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="text-sm text-text-muted mt-4">
              {trustLine}
            </motion.p>
          </div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative w-full max-w-[500px] mx-auto lg:ml-auto">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#E2DDD7] flex items-center justify-center shadow-lg border border-border/50">
              <span className="text-sm text-text-muted">Industry Photo</span>
              <div className="absolute left-0 top-0 w-2 h-full bg-accent-primary"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// --- VIDEO ---
export function IndustryVideoSection({ headline, subtext, features }: { headline: string; subtext: string; features: string[] }) {
  return (
    <section className="bg-background-secondary py-20">
      <div className="max-w-[900px] mx-auto px-6 flex flex-col items-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="font-serif text-[36px] text-text-primary text-center leading-tight mb-4">
          {headline}
        </motion.h2>
        
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }} className="text-[17px] text-text-secondary text-center max-w-[600px] mb-12">
          {subtext}
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full aspect-video bg-[#1A1714] rounded-2xl border border-border shadow-2xl relative flex flex-col items-center justify-center overflow-hidden mb-12 group cursor-pointer">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="w-20 h-20 bg-accent-primary rounded-full flex items-center justify-center mb-4">
            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-wrap items-center justify-center gap-4">
          {features.map((feature: string, i: number) => (
            <div key={i} className="bg-background-card border border-border rounded-full px-5 py-2.5 text-sm text-text-secondary font-medium shadow-sm">
              {feature}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- CASE STUDIES ---
interface StudyMetric { value: string; label: string; }
interface Study { business: string; description: string; metrics: StudyMetric[]; }
export function IndustryCaseStudies({ headline, studies }: { headline: string; studies: Study[] }) {
  return (
    <section className="bg-background-primary py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="font-serif text-[38px] text-text-primary text-center leading-tight mb-16">
          {headline}
        </motion.h2>

        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((study: Study, i: number) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="bg-background-card border border-border rounded-2xl p-8 flex flex-col h-full">
              <span className="text-accent-primary text-xs uppercase tracking-widest font-medium mb-2 block">Case Study</span>
              <h3 className="font-serif text-[22px] text-text-primary mb-2">{study.business}</h3>
              <p className="text-sm text-text-secondary mb-8 leading-relaxed flex-grow">{study.description}</p>
              
              <div className="flex flex-col space-y-4 mb-8">
                {study.metrics.map((metric: StudyMetric, idx: number) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-serif text-[28px] text-accent-primary leading-none">{metric.value}</span>
                    <span className="text-sm text-text-muted mt-1">{metric.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto">
                <Link href="#" className="text-accent-primary text-sm font-medium hover:underline">Read Full Case Study</Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- SERVICES ---
interface ServiceItem { icon: ElementType; title: string; description: string; bullets: string[]; }
export function IndustryServices({ headline, subtext, services }: { headline: string; subtext: string; services: ServiceItem[] }) {
  return (
    <section className="bg-background-secondary py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="font-serif text-[38px] text-text-primary leading-tight mb-4">
            {headline}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }} className="text-[14px] text-text-secondary max-w-[540px]">
            {subtext}
          </motion.p>
        </div>

        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service: ServiceItem, i: number) => {
            const Icon = service.icon;
            return (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="bg-background-card border border-border rounded-2xl p-6 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <Icon className="w-8 h-8 text-accent-primary" />
                </div>
                <h3 className="font-semibold text-[17px] text-text-primary mb-2">{service.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">{service.description}</p>
                
                <ul className="space-y-2 mt-auto">
                  {service.bullets.map((bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-accent-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// --- TESTIMONIAL ---
export function IndustryTestimonial({ quote, reviewer, title }: { quote: string; reviewer: string; title: string }) {
  return (
    <section className="bg-background-primary py-20">
      <div className="max-w-[700px] mx-auto px-6 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
          <span className="font-serif text-[60px] text-accent-primary/20 leading-none block mb-4">&quot;</span>
        </motion.div>
        
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }} className="font-serif text-[22px] text-text-primary leading-relaxed mb-6">
          {quote}
        </motion.p>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-center">
          <span className="font-semibold text-text-primary">{reviewer}</span>
          <span className="text-sm text-text-muted mt-1">{title}</span>
          
          <div className="flex space-x-1 mt-4 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-accent-primary" fill="currentColor" />
            ))}
          </div>
          <span className="text-sm text-text-muted mt-2">Verified Client</span>
        </motion.div>
      </div>
    </section>
  );
}
