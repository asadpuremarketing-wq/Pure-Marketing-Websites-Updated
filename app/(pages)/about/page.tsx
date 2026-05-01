"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Star,
  CheckCircle2,
  Target,
  Zap,
  Heart,
} from "lucide-react";

/* ─── Social icon SVGs (lucide-react v1 doesn't ship these) ── */
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
import { SectionLabel } from "@/components/ui/SectionLabel";
import CTABanner from "@/components/sections/CTABanner";
import PageHero from "@/components/ui/PageHero";

/* ─── Data ─────────────────────────────────────────────────── */

const STATS = [
  { value: "150+", label: "Local Businesses Served" },
  { value: "$2M+", label: "Ad Spend Managed" },
  { value: "4.9★", label: "Average Client Rating" },
  { value: "5 yrs", label: "In Business" },
];

const VALUES = [
  {
    icon: Target,
    title: "Results-First",
    description:
      "Every strategy we build is tied to real business outcomes — leads, calls, and revenue — not vanity metrics.",
  },
  {
    icon: Heart,
    title: "Local Focus",
    description:
      "We exclusively serve local businesses. That specialization means deeper expertise and better results for you.",
  },
  {
    icon: Zap,
    title: "Transparent",
    description:
      "No hidden fees, no long-term lock-ins, no jargon. You always know what we're doing and why.",
  },
];

const WHY_CHOOSE_US = [
  {
    num: "01",
    title: "We Only Work With Local Businesses",
    description:
      "We are not a generalist agency trying to serve everyone. Our entire system is built around the specific needs of trades, restaurants, and real estate.",
  },
  {
    num: "02",
    title: "Full Service, Not Just One Thing",
    description:
      "From website to ads to video to social media, we handle everything under one roof so your marketing is consistent and connected.",
  },
  {
    num: "03",
    title: "We Track Results, Not Vanity Metrics",
    description:
      "Clicks and impressions do not pay bills. We focus on leads, calls, bookings, and revenue. Every report we send is tied to real business outcomes.",
  },
  {
    num: "04",
    title: "Fast Setup, No Long Term Contracts",
    description:
      "We get your campaigns live quickly and we earn your business every month. No locking you into 12 month contracts before you have seen any results.",
  },
];

const TEAM = [
  {
    name: "Asad Saif",
    role: "Owner & Marketing Strategist",
    bio: "Asad built Pure Marketing from the ground up after seeing too many great local businesses get ignored by generic agencies. He leads strategy, client relationships, and campaign direction.",
    image: "/team/asad.png",
    linkedin: "https://www.linkedin.com/company/pure-marketing0/",
    instagram: "https://www.instagram.com/puremarketing0",
    facebook: "https://www.facebook.com/profile.php?id=61576684511407",
  },
  {
    name: "Ali Saif",
    role: "Software Engineer",
    bio: "Ali architects the digital foundations — from blazing-fast websites to custom marketing tech. He ensures every client's online presence is built to perform and scale.",
    image: "/team/ali.png",
    linkedin: "https://www.linkedin.com/company/pure-marketing0/",
    instagram: "https://www.instagram.com/puremarketing0",
    facebook: "https://www.facebook.com/profile.php?id=61576684511407",
  },
  {
    name: "Muhammad Amir",
    role: "Content Creator",
    bio: "Amir brings brands to life through compelling video, photo, and written content. He specializes in telling authentic local business stories that connect and convert.",
    image: "/team/amir.png",
    linkedin: "https://www.linkedin.com/company/pure-marketing0/",
    instagram: "https://www.instagram.com/puremarketing0",
    facebook: "https://www.facebook.com/profile.php?id=61576684511407",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Pure Marketing completely transformed our online presence. We went from almost zero leads online to booking out 3 weeks in advance.",
    author: "James R.",
    business: "HVAC Company, Hamilton",
    rating: 5,
  },
  {
    quote:
      "Finally an agency that actually understands what a local business needs. No fluff, just results. Our Google calls doubled in 60 days.",
    author: "Maria T.",
    business: "Restaurant Owner, Burlington",
    rating: 5,
  },
  {
    quote:
      "The team is responsive, transparent, and genuinely cares about our growth. Best marketing investment we have made.",
    author: "Derek M.",
    business: "Electrical Contractor, Oakville",
    rating: 5,
  },
];

const TIMELINE = [
  { year: "2019", event: "Founded in Hamilton, ON with a focus on local trades" },
  { year: "2021", event: "Expanded to restaurants and real estate verticals" },
  { year: "2023", event: "Crossed $1M in managed ad spend for clients" },
  { year: "2025", event: "Serving 150+ businesses across Canada and the US" },
];

/* ─── Variants ──────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

/* ─── Component ─────────────────────────────────────────────── */

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO */}
      <PageHero
        label="About Us"
        title="A Marketing Agency Built"
        titleAccent="for Local Businesses"
        subtitle="We started this agency because we saw too many great local businesses being ignored by generic marketing agencies. We fix that — from Hamilton to across North America."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* STATS BAR */}
      <section className="bg-accent-primary py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="flex flex-col items-center"
              >
                <span className="text-[42px] md:text-[50px] font-bold text-white leading-none">
                  {s.value}
                </span>
                <span className="text-sm text-white/80 mt-2 font-medium">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR STORY — Two Column */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-0"
            >
              <SectionLabel className="mb-4 block">Our Story</SectionLabel>
              <h2 className="text-[28px] md:text-[36px] font-bold text-text-primary leading-tight mb-10">
                Built by Marketers Who Understand the Local Grind
              </h2>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
                <div className="space-y-8">
                  {TIMELINE.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex gap-6 items-start pl-2"
                    >
                      <div className="relative flex-shrink-0 w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center shadow-md z-10">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">
                          {item.year}
                        </span>
                        <p className="text-text-secondary text-[15px] mt-0.5 leading-relaxed">
                          {item.event}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6 text-[17px] text-text-secondary leading-relaxed"
            >
              <p>
                We started working with local service businesses and quickly realized that most marketing agencies treat them as an afterthought. Cookie-cutter websites, generic ads, and zero understanding of how these businesses actually operate.
              </p>
              <p>
                So we built a specialized agency focused entirely on home service companies, restaurants, and real estate professionals. Every strategy we use is tested and proven in these specific industries.
              </p>
              <p>
                Today we manage marketing for businesses across Canada and the United States, helping them generate consistent leads, build their brand online, and grow revenue month over month.
              </p>

              {/* Location badge */}
              <div className="inline-flex items-center gap-2 bg-background-card border border-border rounded-full px-4 py-2 mt-2">
                <MapPin className="w-4 h-4 text-accent-primary" />
                <span className="text-sm font-medium text-text-primary">
                  Based in Hamilton · Serving the GTA & Beyond
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-14">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4"
            >
              <SectionLabel>Our Values</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[30px] md:text-[38px] font-bold text-text-primary leading-tight"
            >
              What We Stand For
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="bg-background-card border border-border rounded-2xl p-8 text-center hover:border-accent-primary hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <h3 className="font-bold text-[17px] text-text-primary mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4"
            >
              <SectionLabel>Why Choose Us</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[30px] md:text-[38px] font-bold text-text-primary leading-tight mb-4"
            >
              What Makes Us Different From Every Other Agency
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[17px] text-text-secondary max-w-[560px]"
            >
              We do not work with every business. We specialize so we can deliver better results for the ones we do.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {WHY_CHOOSE_US.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-background-card border border-border rounded-2xl p-7 hover:border-accent-primary hover:shadow-md transition-all duration-300"
              >
                <span className="text-[48px] font-bold text-accent-primary/20 leading-none block mb-4">
                  {card.num}
                </span>
                <h3 className="font-semibold text-[18px] text-text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4"
            >
              <SectionLabel>Our Team</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[30px] md:text-[38px] font-bold text-text-primary leading-tight"
            >
              The People Behind Your Growth
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-background-card border border-border rounded-2xl overflow-hidden text-center flex flex-col group hover:shadow-xl hover:border-accent-primary transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative w-full aspect-square overflow-hidden bg-background-secondary">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-grow items-center">
                  <h3 className="font-bold text-[18px] text-text-primary">
                    {member.name}
                  </h3>
                  <span className="text-sm font-medium text-accent-primary mt-1">
                    {member.role}
                  </span>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed flex-grow">
                    {member.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border w-full justify-center">
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-primary transition-colors"
                      title="LinkedIn"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </Link>
                    <Link
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-primary transition-colors"
                      title="Instagram"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </Link>
                    <Link
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-primary transition-colors"
                      title="Facebook"
                    >
                      <FacebookIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4"
            >
              <SectionLabel>Client Stories</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[30px] md:text-[38px] font-bold text-text-primary leading-tight"
            >
              What Our Clients Say
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-background-card border border-border rounded-2xl p-7 flex flex-col hover:border-accent-primary hover:shadow-md transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 text-accent-primary fill-accent-primary"
                    />
                  ))}
                </div>
                <p className="text-[15px] text-text-secondary leading-relaxed flex-grow italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-border">
                  <p className="font-semibold text-text-primary text-sm">
                    {t.author}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">{t.business}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOLLOW US */}
      <section className="bg-background-primary py-16">
        <div className="max-w-[780px] mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel className="mb-4 block">Follow Along</SectionLabel>
            <h2 className="text-[26px] md:text-[32px] font-bold text-text-primary mb-3">
              Stay Connected With Us
            </h2>
            <p className="text-text-secondary text-[16px] mb-8">
              Follow our journey, see client results, and get free marketing tips across our social channels.
            </p>
            <div className="flex items-center justify-center gap-5">
              <Link
                href="https://www.instagram.com/puremarketing0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-background-secondary border border-border hover:border-accent-primary hover:text-accent-primary px-5 py-3 rounded-xl text-sm font-medium text-text-primary transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com/company/pure-marketing0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-background-secondary border border-border hover:border-accent-primary hover:text-accent-primary px-5 py-3 rounded-xl text-sm font-medium text-text-primary transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61576684511407"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-background-secondary border border-border hover:border-accent-primary hover:text-accent-primary px-5 py-3 rounded-xl text-sm font-medium text-text-primary transition-all duration-200"
              >
                <FacebookIcon className="w-4 h-4" />
                Facebook
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
