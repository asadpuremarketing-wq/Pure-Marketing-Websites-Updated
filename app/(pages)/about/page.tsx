"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Star,
  CheckCircle2,
  Users,
  TrendingUp,
  Award,
  Clock,
  Quote,
} from "lucide-react";

/* ─── Social icon SVGs ─────────────────────────────────────── */
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
  { value: "150+", label: "Local Businesses Served", icon: Users },
  { value: "$2M+", label: "Ad Spend Managed", icon: TrendingUp },
  { value: "4.9★", label: "Average Client Rating", icon: Award },
  { value: "5 yrs", label: "In Business", icon: Clock },
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
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Excellent social media management service! Very professional, creative, and always responsive. Highly recommend for anyone looking to grow their online presence.",
    author: "Dennis Aboagye",
    badge: "",
    time: "a month ago",
    rating: 5,
  },
  {
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "I have been dealing with Pure marketing from past 5-6 months. Asad has been handling my social media page and he has been very professional and easy to contact and connect when needed. I would recommend his service 100%.",
    author: "Unnati Oza",
    badge: "Local Guide",
    time: "a month ago",
    rating: 5,
  },
  {
    photo: "https://randomuser.me/api/portraits/men/88.jpg",
    quote: "Asad was very professional and patient while working with me. He helped me to create my Website for my healthcare business. He also helped with creating business cards and pamphlets. I am very happy with the outcome and I will highly recommend him.",
    author: "Negril 25",
    badge: "",
    time: "9 months ago",
    rating: 5,
  },
];

const TIMELINE = [
  { year: "2019", event: "Founded in Hamilton, ON with a focus on local trades" },
  { year: "2021", event: "Expanded to restaurants and real estate verticals" },
  { year: "2023", event: "Crossed $1M in managed ad spend for clients" },
  { year: "2025", event: "Serving 150+ businesses across Canada and the US" },
];

const SOCIAL_CHANNELS = [
  {
    label: "Instagram",
    handle: "@puremarketing0",
    href: "https://www.instagram.com/puremarketing0",
    icon: InstagramIcon,
    desc: "Client results & behind-the-scenes",
  },
  {
    label: "LinkedIn",
    handle: "Pure Marketing",
    href: "https://www.linkedin.com/company/pure-marketing0/",
    icon: LinkedinIcon,
    desc: "Industry insights & case studies",
  },
  {
    label: "Facebook",
    handle: "Pure Marketing",
    href: "https://www.facebook.com/profile.php?id=61576684511407",
    icon: FacebookIcon,
    desc: "Tips, news & local business wins",
  },
];

/* ─── Animation helper ──────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

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
        fadeToColor="#111111"
      />

      {/* ── 1. STATS BAND ── accent-primary bg, py-5 */}
      <section className="bg-accent-primary py-5">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center py-3 ${
                  i < STATS.length - 1 ? "border-r border-white/20" : ""
                }`}
              >
                <span className="text-[38px] md:text-[44px] font-black text-white leading-none">
                  {s.value}
                </span>
                <span className="text-xs md:text-sm text-white/75 font-medium mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. OUR STORY ── white bg */}
      <section className="bg-white py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: vertical timeline */}
            <motion.div {...fadeUp(0)}>
              <SectionLabel className="mb-4 block">Our Story</SectionLabel>
              <h2 className="text-[30px] md:text-[38px] font-black text-[#080808] leading-tight mb-10">
                Built by Marketers Who Understand the Local Grind
              </h2>

              <div className="relative">
                {/* connector line */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-[#ebebeb]" />
                <div className="space-y-8">
                  {TIMELINE.map((item, i) => (
                    <motion.div
                      key={i}
                      {...fadeUp(i * 0.1)}
                      className="flex items-start gap-5"
                    >
                      <div className="relative flex-shrink-0 w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center shadow-md shadow-accent-primary/30 z-10">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div className="pt-1">
                        <span className="text-xs font-black text-accent-primary uppercase tracking-widest">
                          {item.year}
                        </span>
                        <p className="text-[#555] text-[15px] mt-0.5 leading-relaxed">
                          {item.event}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: story text + pull-quote + location badge */}
            <motion.div {...fadeUp(0.15)} className="space-y-6">
              <p className="text-[17px] text-[#555] leading-relaxed">
                We started working with local service businesses and quickly realized that most marketing agencies treat them as an afterthought. Cookie-cutter websites, generic ads, and zero understanding of how these businesses actually operate.
              </p>
              <p className="text-[17px] text-[#555] leading-relaxed">
                So we built a specialized agency focused entirely on home service companies, restaurants, and real estate professionals. Every strategy we use is tested and proven in these specific industries.
              </p>

              {/* Dark pull-quote card */}
              <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 border-l-4 border-l-accent-primary">
                <p className="text-[17px] text-white italic leading-snug">
                  &ldquo;We manage marketing for businesses across Canada and the US, helping them generate consistent leads month over month.&rdquo;
                </p>
              </div>

              {/* Location badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#ebebeb] rounded-full px-4 py-2 shadow-sm">
                <MapPin className="w-4 h-4 text-accent-primary" />
                <span className="text-sm font-medium text-[#080808]">
                  Based in Hamilton · Serving the GTA &amp; Beyond
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. MEET THE TEAM ── #f5f5f5 bg */}
      <section className="bg-[#f5f5f5] py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-14">
            <motion.div {...fadeUp(0)} className="mb-3">
              <SectionLabel>Our Team</SectionLabel>
            </motion.div>
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[30px] md:text-[40px] font-black text-[#080808] leading-tight"
            >
              The People Behind Your Growth
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.12)}
                className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden flex flex-col group hover:shadow-xl hover:border-accent-primary/30 transition-all duration-300"
              >
                {/* Photo — 3:4 aspect ratio */}
                <div
                  className="relative w-full overflow-hidden bg-[#f0f0f0]"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-grow items-center text-center">
                  <h3 className="font-black text-[18px] text-[#080808]">
                    {member.name}
                  </h3>
                  <span className="text-sm font-semibold text-accent-primary mt-1 block">
                    {member.role}
                  </span>
                  <p className="text-sm text-[#666] mt-3 leading-relaxed flex-grow">
                    {member.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-[#e8e8e8] w-full justify-center">
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#aaa] hover:text-accent-primary transition-colors">
                      <LinkedinIcon className="w-5 h-5" />
                    </Link>
                    <Link href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#aaa] hover:text-accent-primary transition-colors">
                      <InstagramIcon className="w-5 h-5" />
                    </Link>
                    <Link href={member.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#aaa] hover:text-accent-primary transition-colors">
                      <FacebookIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TESTIMONIALS ── #0d0d0d bg */}
      <section className="bg-[#0d0d0d] py-24 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-14">
            <motion.div {...fadeUp(0)} className="mb-3">
              <SectionLabel>Client Stories</SectionLabel>
            </motion.div>
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[30px] md:text-[40px] font-black text-white leading-tight"
            >
              What Our Clients Say
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.12)}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 flex flex-col hover:border-accent-primary/30 transition-all duration-300"
              >
                {/* Large decorative quote icon */}
                <Quote className="w-10 h-10 text-accent-primary/20 mb-4 flex-shrink-0" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-accent-primary fill-accent-primary" />
                  ))}
                </div>

                <p className="text-[15px] text-[#aaa] leading-relaxed flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-accent-primary/15">
                    <Image src={t.photo} alt={t.author} width={36} height={36} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-white text-sm">{t.author}</p>
                    {t.badge && (
                      <span className="text-xs text-accent-primary font-medium">{t.badge} · </span>
                    )}
                    <span className="text-xs text-[#555]">Google Review</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FOLLOW US ── white bg */}
      <section className="bg-white py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <SectionLabel className="mb-4 block">Follow Along</SectionLabel>
            <h2 className="text-[26px] md:text-[34px] font-black text-[#080808] mb-3">
              Stay Connected
            </h2>
            <p className="text-[#666] text-[16px] max-w-[480px] mx-auto">
              Follow our journey, see client results, and get free marketing tips across our social channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SOCIAL_CHANNELS.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <motion.a
                  key={i}
                  {...fadeUp(i * 0.1)}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-[#fafafa] border border-[#ebebeb] rounded-2xl p-5 hover:border-accent-primary/30 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-black text-[#080808] text-sm group-hover:text-accent-primary transition-colors">{channel.label}</p>
                    <p className="text-xs text-[#999] mt-0.5">{channel.handle}</p>
                    <p className="text-xs text-[#666] mt-1.5">{channel.desc}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
