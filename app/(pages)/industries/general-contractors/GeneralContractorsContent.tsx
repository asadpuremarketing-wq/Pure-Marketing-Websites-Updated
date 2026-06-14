"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  MapPin,
  Star,
  FileText,
  Target,
  Share2,
  Settings,
  RefreshCw,
  TrendingUp,
  Monitor,
  Search,
  MessageSquare,
  BarChart3,
  Zap,
  ChevronRight,
} from "lucide-react";
import AutoCarousel from "@/components/ui/AutoCarousel";
import VideoTestimonials from "@/components/sections/VideoTestimonials";

/* ── fade-up helper ───────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

/* ── data ─────────────────────────────────────────────────── */
const STATS = [
  { value: "250%+", label: "Average lead increase" },
  { value: "90",    label: "Days to full system" },
  { value: "10+",   label: "Qualified leads/month" },
  { value: "$80K+", label: "Average project value" },
];

const PAIN_POINTS = [
  {
    icon: RefreshCw,
    title: "Trapped in the Referral Cycle",
    desc: "Work dries up when referrals slow down. You have no control over when the phone rings or whether next month looks good.",
  },
  {
    icon: BarChart3,
    title: "Invisible on Google & Maps",
    desc: "Homeowners searching right now can't find you. Competitors with weaker work are winning bids simply because they show up first.",
  },
  {
    icon: MessageSquare,
    title: "Leads Fall Through the Cracks",
    desc: "No system to follow up, no automation, no CRM. Warm leads go cold and jobs that should've been yours go to someone else.",
  },
];

const STEPS = [
  { num: "01", icon: Monitor,    title: "Website",        desc: "A high-converting site that turns visitors into estimate requests." },
  { num: "02", icon: MapPin,     title: "Google Profile", desc: "Optimized GBP so you dominate local map searches." },
  { num: "03", icon: Star,       title: "Reviews",        desc: "Automated systems to earn 5-star reviews consistently." },
  { num: "04", icon: FileText,   title: "Content",        desc: "Monthly content that builds brand authority and trust." },
  { num: "05", icon: Target,     title: "Google Ads",     desc: "High-intent campaigns targeting homeowners ready to hire." },
  { num: "06", icon: Share2,     title: "Meta Ads",       desc: "Facebook & Instagram ads that generate awareness and leads." },
  { num: "07", icon: Settings,   title: "Automation",     desc: "Follow-up sequences so no lead ever goes cold." },
  { num: "08", icon: RefreshCw,  title: "Retargeting",    desc: "Win back warm prospects who didn't book the first time." },
  { num: "09", icon: TrendingUp, title: "SEO Growth",     desc: "Long-term organic visibility that compounds over time." },
];

const DELIVERABLES = [
  { icon: Globe,       title: "High-Converting Website",               desc: "Mobile-first, fast, built to convert visitors into booked estimates." },
  { icon: MapPin,      title: "Google Business Profile",               desc: "Fully optimized to rank in the local map pack." },
  { icon: Star,        title: "Reputation & Review System",            desc: "Automated review requests after every completed job." },
  { icon: FileText,    title: "Monthly Content Creation",              desc: "Project showcases, reels, educational posts, and ads." },
  { icon: Target,      title: "Google Ads + Local Service Ads",        desc: "Pay-per-lead and pay-per-click campaigns fully managed." },
  { icon: Share2,      title: "Facebook & Instagram Advertising",      desc: "Before/after ads, lead forms, and retargeting audiences." },
  { icon: Zap,         title: "Follow-Up Automation & CRM",            desc: "Instant responses, missed-call texts, email sequences." },
  { icon: RefreshCw,   title: "Retargeting Campaigns",                 desc: "Multi-platform retargeting across Google, Meta, and YouTube." },
  { icon: Search,      title: "SEO & Geo Growth Foundation",           desc: "Local citations, schema markup, and service-area pages." },
];


const PROCESS = [
  { num: "01", title: "Free Strategy Audit",    desc: "We review your current presence, competitors, and opportunities. No cost, no obligation." },
  { num: "02", title: "Foundation Build",        desc: "Website, Google profile, tracking, and CRM all configured and launched." },
  { num: "03", title: "Content & Systems",       desc: "Monthly content live, review system active, automation running." },
  { num: "04", title: "Ads & Traffic",           desc: "Google and Meta campaigns launched and optimised for your market." },
  { num: "05", title: "Scale & Optimise",        desc: "Weekly reporting, continuous improvement, and scaling what works." },
];

const INCLUDED = [
  "High-Converting Website",
  "Google Business Profile Optimization",
  "Reputation & Review System",
  "Monthly Content Creation",
  "Google Ads Setup & Management",
  "Meta Ads Management",
  "Follow-Up Automation & CRM",
  "Retargeting Campaigns",
  "SEO & Geo Growth Foundation",
];

/* ── component ────────────────────────────────────────────── */
export default function GeneralContractorsContent() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-[#080808] overflow-hidden pt-24 pb-20">
        {/* ambient glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-accent-primary/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-primary/5 blur-[100px] pointer-events-none" />
        {/* grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── left ── */}
          <div className="flex flex-col gap-8">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 border border-accent-primary/30 bg-accent-primary/8 rounded-full px-4 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
              <span className="text-accent-primary text-[11px] font-bold uppercase tracking-[0.2em]">90-Day General Contractor Growth System</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.08)} className="text-[44px] md:text-[64px] font-black text-white leading-[1.02] tracking-[-0.02em]">
              Stop Chasing Jobs.<br />
              <span className="text-accent-primary">Build a System</span><br />
              That Brings Them.
            </motion.h1>

            <motion.p {...fadeUp(0.16)} className="text-[17px] text-[#888] leading-relaxed max-w-[480px]">
              Websites, Google, Content, Ads, Automation &amp; SEO — unified into one predictable lead generation machine built exclusively for general contractors.
            </motion.p>

            <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-4">
              {["More Quality Leads", "Higher-Value Projects", "Predictable Revenue"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-[#bbb] text-[14px]">
                  <CheckCircle className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  {t}
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.28)} className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 bg-accent-primary hover:bg-[#d9531e] text-white font-bold text-[15px] rounded-xl px-8 py-4 transition-all duration-300 shadow-2xl shadow-accent-primary/25">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a href="tel:+16479512786" className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 hover:border-white/30 hover:text-white rounded-xl px-6 py-4 text-[15px] transition-all duration-300">
                +1 647-951-2786
              </a>
            </motion.div>

            <motion.p {...fadeUp(0.34)} className="text-[#555] text-[13px]">
              No contracts &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; Results within 30 days
            </motion.p>
          </div>

          {/* ── right — team photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-6 items-center"
          >
            {/* Team photo */}
            <div className="relative w-full">
              <div className="absolute inset-0 rounded-3xl bg-accent-primary/15 blur-2xl scale-90 pointer-events-none" />
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

            {/* Trust badge row */}
            <div className="flex flex-col gap-3 w-full">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "New Leads",   val: "248", chg: "+32%" },
                  { label: "Phone Calls", val: "156", chg: "+28%" },
                  { label: "Closed Jobs", val: "38",  chg: "+36%" },
                ].map(({ label, val, chg }) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                    <p className="text-white font-black text-[22px] leading-none">{val}</p>
                    <p className="text-emerald-400 text-[11px] font-semibold mt-1">{chg}</p>
                    <p className="text-[#555] text-[10px] mt-1 uppercase tracking-wider">{label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 flex items-center justify-center gap-3">
                <div className="flex -space-x-2">
                  {["bg-orange-400","bg-orange-500","bg-amber-500"].map((c, i) => (
                    <div key={i} className={`w-7 h-7 rounded-full border-2 border-[#080808] ${c} flex items-center justify-center text-white text-[10px] font-bold`}>
                      {["A","M","S"][i]}
                    </div>
                  ))}
                </div>
                <p className="text-[#666] text-[12px]">Strategy. Systems. Growth.</p>
                <div className="flex gap-0.5 ml-auto">
                  {Array.from({length:5}).map((_,i)=>(
                    <Star key={i} className="w-3 h-3 text-accent-primary fill-accent-primary" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════════════════════ */}
      <section className="bg-accent-primary py-5">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/20">
            {STATS.map(({ value, label }, i) => (
              <motion.div key={label} {...fadeUp(i * 0.08)} className="flex flex-col items-center text-center py-4 px-6">
                <span className="text-white font-black text-[32px] leading-none">{value}</span>
                <span className="text-white/75 text-[12px] mt-1 font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          THE PROBLEM
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#0d0d0d] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#F06428 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p {...fadeUp(0)} className="text-accent-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-4">The Problem</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="text-[32px] md:text-[52px] font-black text-white leading-tight tracking-tight">
              Why Great Contractors Stay Stuck
            </motion.h2>
            <motion.p {...fadeUp(0.14)} className="text-[#555] text-[16px] mt-4 max-w-[480px] mx-auto">
              Skill wins jobs. But without a system, even the best contractors leave money on the table.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PAIN_POINTS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.1)}
                className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-8 hover:border-accent-primary/30 hover:bg-white/[0.05] transition-all duration-400 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent-primary/5 blur-2xl group-hover:bg-accent-primary/10 transition-all duration-500 pointer-events-none" />
                <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mb-6 group-hover:bg-accent-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="text-white font-bold text-[20px] mb-3 leading-tight">{title}</h3>
                <p className="text-[#666] text-[14px] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          VIDEO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div {...fadeUp(0)} className="relative rounded-2xl overflow-hidden aspect-video border border-black/10 shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/dCJCZmdhcNM"
              title="How We Help Local Businesses Generate More Leads"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>

          <motion.div {...fadeUp(0.12)} className="flex flex-col gap-6">
            <span className="text-accent-primary text-[11px] font-bold uppercase tracking-[0.2em]">See It In Action</span>
            <h2 className="text-[32px] md:text-[44px] font-black text-[#0d0d0d] leading-[1.05] tracking-tight">
              Watch How We Turn Contractors Into Market Leaders
            </h2>
            <p className="text-[#666] text-[16px] leading-relaxed">
              A 2-minute breakdown of the exact system we use to generate consistent, high-quality leads for contractors across Canada.
            </p>
            <div className="space-y-3">
              {[
                "Why most contractors rely on luck — and how to change that",
                "The 9-step system we build for every client",
                "Real results from contractors just like you",
                "What to expect in your first 90 days",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-accent-primary" />
                  </div>
                  <span className="text-[#444] text-[14px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="group inline-flex items-center gap-2 bg-[#0d0d0d] hover:bg-accent-primary text-white font-bold text-[14px] rounded-xl px-7 py-4 transition-all duration-300 w-fit shadow-lg mt-2">
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          9-STEP SYSTEM
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#080808] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p {...fadeUp(0)} className="text-accent-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-4">The Solution</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="text-[32px] md:text-[52px] font-black text-white leading-tight tracking-tight">
              The 9-Step Growth System
            </motion.h2>
            <motion.p {...fadeUp(0.14)} className="text-[#555] text-[16px] mt-4 max-w-[540px] mx-auto">
              Every component is designed to work together — like one compounding machine that gets stronger every month.
            </motion.p>
          </div>

          <AutoCarousel
            dark
            perPage={3}
            interval={3200}
            items={STEPS.map(({ num, icon: Icon, title, desc }) => (
              <div
                key={num}
                className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-7 hover:border-accent-primary/40 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden cursor-default h-full"
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent-primary/0 group-hover:bg-accent-primary/8 blur-2xl transition-all duration-500 pointer-events-none" />
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <span className="text-[#2a2a2a] text-[40px] font-black leading-none select-none">{num}</span>
                </div>
                <h3 className="text-white font-bold text-[18px] mb-2">{title}</h3>
                <p className="text-[#555] text-[13px] leading-relaxed">{desc}</p>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <span className="text-accent-primary text-[12px] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                    Included in your system <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          />
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          VIDEO TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <VideoTestimonials />

      {/* ══════════════════════════════════════════════════════
          WHAT'S INCLUDED (DELIVERABLES)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            <motion.div {...fadeUp(0)} className="flex flex-col gap-6">
              <span className="text-accent-primary text-[11px] font-bold uppercase tracking-[0.2em]">Everything You Get</span>
              <h2 className="text-[32px] md:text-[48px] font-black text-[#0d0d0d] leading-tight tracking-tight">
                One System.<br />
                <span className="text-accent-primary">Everything Included.</span>
              </h2>
              <p className="text-[#666] text-[16px] leading-relaxed max-w-[440px]">
                No picking and choosing. No add-ons. Every component of the growth system is built and managed for you — from day one.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {INCLUDED.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-accent-primary" />
                    </div>
                    <span className="text-[#333] text-[13px] font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-accent-primary hover:bg-[#d9531e] text-white font-bold text-[15px] rounded-xl px-8 py-4 transition-all duration-300 w-fit shadow-xl shadow-accent-primary/25 mt-2">
                Get Started Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <AutoCarousel
                perPage={2}
                interval={3800}
                items={DELIVERABLES.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="group rounded-2xl border border-[#ebebeb] bg-[#fafafa] p-5 hover:border-accent-primary/30 hover:bg-white hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent-primary/[0.08] flex items-center justify-center mb-4 group-hover:bg-accent-primary/15 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-accent-primary" />
                    </div>
                    <h3 className="text-[#0d0d0d] font-bold text-[14px] mb-1 leading-tight">{title}</h3>
                    <p className="text-[#888] text-[12px] leading-relaxed">{desc}</p>
                  </div>
                ))}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#0d0d0d] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p {...fadeUp(0)} className="text-accent-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Our Process</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="text-[32px] md:text-[52px] font-black text-white leading-tight tracking-tight">
              How We Get You Results
            </motion.h2>
          </div>

          <div className="relative">
            {/* connecting line */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {PROCESS.map(({ num, title, desc }, i) => (
                <motion.div key={num} {...fadeUp(i * 0.1)} className="flex flex-col items-center text-center gap-4 relative">
                  <div className="relative z-10 w-[52px] h-[52px] rounded-full border-2 border-accent-primary bg-[#0d0d0d] flex items-center justify-center shadow-lg shadow-accent-primary/20">
                    <span className="text-accent-primary font-black text-[13px]">{num}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[15px] mb-2">{title}</h3>
                    <p className="text-[#555] text-[12px] leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fadeUp(0.5)} className="text-center mt-14">
            <Link href="/contact" className="group inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white hover:text-[#0d0d0d] font-bold text-[14px] rounded-xl px-8 py-4 transition-all duration-300">
              Start With a Free Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INVESTMENT
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p {...fadeUp(0)} className="text-accent-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Investment</motion.p>
            <motion.h2 {...fadeUp(0.08)} className="text-[32px] md:text-[52px] font-black text-[#0d0d0d] leading-tight tracking-tight">
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p {...fadeUp(0.14)} className="text-[#777] text-[16px] mt-4 max-w-[480px] mx-auto">
              One flat investment. No retainer surprises. No hidden fees. Ad spend is separate and managed in your accounts.
            </motion.p>
          </div>

          <motion.div {...fadeUp(0.1)} className="max-w-[900px] mx-auto">
            <div className="rounded-3xl border-2 border-[#0d0d0d] overflow-hidden shadow-2xl">

              {/* header bar */}
              <div className="bg-[#0d0d0d] px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[#666] text-[12px] uppercase tracking-widest font-semibold mb-1">Total Investment</p>
                  <div className="flex items-end gap-2">
                    <span className="text-[64px] font-black text-white leading-none">$4,500</span>
                    <span className="text-[#666] text-[18px] mb-2">CAD</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center"><CheckCircle className="w-3 h-3 text-emerald-400" /></div>
                    <span className="text-[#888] text-[13px]">No ongoing retainer required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center"><CheckCircle className="w-3 h-3 text-emerald-400" /></div>
                    <span className="text-[#888] text-[13px]">Split into 3 easy installments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center"><CheckCircle className="w-3 h-3 text-emerald-400" /></div>
                    <span className="text-[#888] text-[13px]">You own all assets & accounts</span>
                  </div>
                </div>
              </div>

              {/* body */}
              <div className="bg-white p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* payment structure */}
                <div>
                  <h3 className="text-[#0d0d0d] font-bold text-[18px] mb-6">Payment Structure</h3>
                  <div className="space-y-4">
                    {[
                      { n: "1", label: "Installment 1 — $1,500 CAD", desc: "Due at project start" },
                      { n: "2", label: "Installment 2 — $1,500 CAD", desc: "Due after foundation systems are completed" },
                      { n: "3", label: "Installment 3 — $1,500 CAD", desc: "Due during advertising and scaling phase" },
                    ].map(({ n, label, desc }) => (
                      <div key={n} className="flex items-start gap-4 p-4 rounded-xl bg-[#f9f9f9] border border-[#ebebeb]">
                        <div className="w-9 h-9 rounded-full bg-accent-primary flex items-center justify-center text-white font-black text-[14px] flex-shrink-0">
                          {n}
                        </div>
                        <div>
                          <p className="text-[#0d0d0d] font-bold text-[14px]">{label}</p>
                          <p className="text-[#888] text-[12px] mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#aaa] text-[12px] mt-4 leading-relaxed">
                    * Ad budgets for Google, Local Service Ads &amp; Meta are separate and determined by your goals &amp; market.
                  </p>
                </div>

                {/* what's included */}
                <div>
                  <h3 className="text-[#0d0d0d] font-bold text-[18px] mb-6">What&apos;s Included</h3>
                  <div className="space-y-2.5 mb-7">
                    {INCLUDED.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-accent-primary flex-shrink-0" />
                        <span className="text-[#333] text-[14px]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/checkout?product=growth-system" className="group inline-flex items-center justify-center gap-2 bg-accent-primary hover:bg-[#d9531e] text-white font-bold text-[15px] rounded-xl px-6 py-4 transition-all duration-300 w-full shadow-xl shadow-accent-primary/20">
                    Get Started — Pay Online
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section className="bg-accent-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 text-center">
          <motion.p {...fadeUp(0)} className="text-white/70 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            Your Competitors Are Already Marketing
          </motion.p>
          <motion.h2 {...fadeUp(0.08)} className="text-[32px] md:text-[56px] font-black text-white leading-tight tracking-tight mb-6">
            Will Customers Find You<br />Or Them?
          </motion.h2>
          <motion.p {...fadeUp(0.14)} className="text-white/75 text-[17px] max-w-[500px] mx-auto mb-10">
            Let&apos;s build your growth system and put your business in front of the right people — before your competitors do.
          </motion.p>
          <motion.div {...fadeUp(0.2)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="group inline-flex items-center gap-2 bg-white text-accent-primary hover:bg-[#f9f9f9] font-black text-[16px] rounded-xl px-10 py-5 transition-all duration-300 shadow-2xl shadow-black/20">
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["bg-white/30","bg-white/25","bg-white/20","bg-white/15"].map((c, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full border-2 border-accent-primary ${c} flex items-center justify-center text-white text-[11px] font-bold`}>
                    {["J","M","A","S"][i]}
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-[13px] text-left leading-tight max-w-[140px]">No obligation. Just real strategies.</p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
