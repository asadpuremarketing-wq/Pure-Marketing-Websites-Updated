"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ExternalLink, Camera, Globe, Video, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/sections/CTABanner";
import PageHero from "@/components/ui/PageHero";

const WEB_DEV_CLIENTS = [
  {
    id: 1, name: "Weather Guard Coatings", category: "Contractors",
    description: "Painting Company", location: "London, Ontario",
    href: "https://www.weatherguardcoating.ca/",
    screenshot: "/screenshots/weatherguard.webp",
    accent: "#E8EDF5",
  },
  {
    id: 2, name: "Gravity Contractors", category: "Contractors",
    description: "Construction & Renovation Company", location: "Hamilton, Ontario",
    href: "https://www.gravitycontractors.ca/",
    screenshot: "/screenshots/gravity-contractors.webp",
    accent: "#E8EDF5",
  },
  {
    id: 3, name: "Greypro Concrete Designs", category: "Contractors",
    description: "Concrete Design Company", location: "Hamilton, Ontario",
    href: "https://greypro.ca/",
    screenshot: "/screenshots/greypro.webp",
    accent: "#E8EDF5",
  },
  {
    id: 4, name: "Apply Buddies", category: "Education",
    description: "International Education Company", location: "Canada",
    href: "https://www.applybuddies.com/",
    screenshot: "/screenshots/apply-buddies.webp",
    accent: "#E0EFF5",
  },
  {
    id: 5, name: "Tranquility Compassion", category: "Healthcare",
    description: "Elderly Care Company", location: "Canada",
    href: "https://www.tranquilitycompassion.ca/",
    screenshot: "/screenshots/tranquility-compassion.webp",
    accent: "#E5F0E8",
  },
  {
    id: 6, name: "Faizan Global Relief Foundation", category: "Non-Profit",
    description: "Canadian Relief Organization", location: "Canada",
    href: "https://www.fgrf.ca/",
    screenshot: "/screenshots/fgrf.webp",
    accent: "#F0EBF5",
  },
  {
    id: 7, name: "Quick Car Repair", category: "Automotive",
    description: "Auto Mechanic Shop", location: "Hamilton, Ontario",
    href: "https://www.quickcarrepair.ca/",
    screenshot: "/screenshots/quick-car-repair.webp",
    accent: "#F7E6DF",
  },
  {
    id: 9, name: "GO Safe Driving", category: "Education",
    description: "Driving School", location: "Hamilton, Ontario",
    href: "https://www.gosafedriving.ca/",
    screenshot: "/screenshots/go-safe-driving.webp",
    accent: "#F9EFE6",
  },
  {
    id: 10, name: "Isnad Association", category: "Non-Profit",
    description: "Non-Profit Organization", location: "Canada",
    href: "https://isnadassociation.org/",
    screenshot: "/screenshots/isnad-association.webp",
    accent: "#F0EBF5",
  },
  {
    id: 11, name: "Prudent Locksmith & Garage Services", category: "Home Services",
    description: "Locksmith & Garage Door Company", location: "Hamilton, Ontario",
    href: "https://www.purdentlocksmith.ca/",
    screenshot: "/screenshots/Prudentlocksmith.webp",
    accent: "#E8EDF5",
  },
];

const UNIQUE_WEB_CLIENTS = WEB_DEV_CLIENTS;

const SOCIAL_MEDIA_CLIENTS = [
  {
    name: "Gravity Contractors Ltd",
    location: "Hamilton, ON",
    initial: "G",
    category: "Construction",
    instagram: "https://www.instagram.com/gravitycontractorsltd/",
    screenshot: "/screenshots/social/gravity-contractors.webp",
  },
  {
    name: "Weather Guard Coatings",
    location: "London, ON",
    initial: "W",
    category: "Painting",
    instagram: "https://www.instagram.com/weatherguardcoatings/",
    screenshot: "/screenshots/social/weather-guard.webp",
  },
  {
    name: "Bowld Up",
    location: "St. Catharines, ON",
    initial: "B",
    category: "Restaurant",
    instagram: "https://www.instagram.com/bowldup/",
    screenshot: "/screenshots/social/bowld-up.webp",
  },
  {
    name: "Kukus Chicken",
    location: "Burlington, ON",
    initial: "K",
    category: "Restaurant",
    instagram: "https://www.instagram.com/kukuschicken/",
    screenshot: "/screenshots/social/kukus-chicken.webp",
  },
  {
    name: "Moussas Shawarma",
    location: "North York, ON",
    initial: "M",
    category: "Restaurant",
    instagram: "https://www.instagram.com/moussasshawarma/",
    screenshot: "/screenshots/social/moussas-shawarma.webp",
  },
  {
    name: "Rocket AMG",
    location: "Hamilton, ON",
    initial: "R",
    category: "Real Estate",
    instagram: "https://www.instagram.com/rocketamg/",
    screenshot: "/screenshots/social/rocket-amg.webp",
  },
];

const WEB_FILTERS = ["All", "Contractors", "Education", "Healthcare", "Automotive", "Non-Profit", "Home Services"];

const REVIEWS = [
  { initials: "DA", name: "Dennis Aboagye", badge: "", time: "a month ago", photo: "https://randomuser.me/api/portraits/men/32.jpg", text: "Excellent social media management service! Very professional, creative, and always responsive. Highly recommend for anyone looking to grow their online presence." },
  { initials: "UO", name: "Unnati Oza", badge: "Local Guide", time: "a month ago", photo: "https://randomuser.me/api/portraits/women/44.jpg", text: "I have been dealing with Pure marketing from past 5-6 months. Asad has been handling my social media page and he has been very professional and easy to contact and connect when needed. I would recommend his service 100%." },
  { initials: "BY", name: "Benard Yeboah", badge: "", time: "a month ago", photo: "https://randomuser.me/api/portraits/men/75.jpg", text: "Asad does an excellent job managing my social media across multiple platforms. Reliable, and easy to work with." },
  { initials: "WB", name: "Wade Beattie", badge: "", time: "7 months ago", photo: "https://randomuser.me/api/portraits/men/52.jpg", text: "Great communication, and pricing." },
  { initials: "EW", name: "Eleanor Wilson", badge: "", time: "4 months ago", photo: "https://randomuser.me/api/portraits/women/68.jpg", text: "Gravity contractors referred me to them and they do a very good job." },
  { initials: "JR", name: "John Riadhh", badge: "Local Guide", time: "4 months ago", photo: "https://randomuser.me/api/portraits/men/41.jpg", text: "Asad was very professional in helping, definitely recommend their marketing team." },
  { initials: "JW", name: "John Williamson", badge: "", time: "14 hours ago", photo: "https://randomuser.me/api/portraits/men/60.jpg", text: "Fantastic business first class." },
  { initials: "N2", name: "Negril 25", badge: "", time: "9 months ago", photo: "https://randomuser.me/api/portraits/men/88.jpg", text: "Asad was very professional and patient while working with me. He helped me to create my Website for my healthcare business. He also helped with creating business cards and pamphlets. I am very happy with the outcome and I will continue to use him for Social Media services. I highly recommend him." },
];

const VISIBLE = 3;

/* ─── Helper ────────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

/* ─── Page ──────────────────────────────────────────────────── */

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const totalPages = Math.ceil(REVIEWS.length / VISIBLE);

  const next = useCallback(() => {
    setDirection(1);
    setPage(p => (p + 1) % totalPages);
  }, [totalPages]);

  const prev = () => {
    setDirection(-1);
    setPage(p => (p - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  const visible = REVIEWS.slice(page * VISIBLE, page * VISIBLE + VISIBLE);

  const filteredItems = activeFilter === "All"
    ? UNIQUE_WEB_CLIENTS
    : UNIQUE_WEB_CLIENTS.filter(item => item.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen">

      <PageHero
        label="Portfolio"
        title="Real Work. Real Results."
        titleAccent="Real Businesses."
        subtitle="See the websites we built, the campaigns we ran, and the results we delivered for local businesses just like yours."
        breadcrumbs={[{ label: "Portfolio" }]}
        fadeToColor="#111111"
      />

      {/* ── PORTFOLIO GRID ── */}
      <section className="bg-[#080808] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent-primary/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-14">
            <motion.div {...fadeUp(0)} className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-primary border border-accent-primary/30 rounded-full px-4 py-1.5">
                Our Work
              </span>
            </motion.div>
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[32px] md:text-[46px] font-black text-white leading-tight mb-4"
            >
              Real Work. Real Results.
            </motion.h2>
            <motion.p {...fadeUp(0.2)} className="text-[17px] text-[#666] max-w-[540px]">
              Every project built to convert, designed to last, and optimized for growth.
            </motion.p>
          </div>

          {/* Filter pills */}
          <motion.div
            {...fadeUp(0.25)}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {WEB_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 border ${
                  activeFilter === filter
                    ? "bg-accent-primary border-accent-primary text-white"
                    : "bg-white/[0.06] border-white/10 text-white/60 hover:border-accent-primary/50 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Project cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden group hover:border-accent-primary/40 hover:shadow-2xl hover:shadow-accent-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Screenshot */}
                <div className="relative aspect-[16/9] w-full overflow-hidden" style={{ backgroundColor: item.accent }}>
                  {item.screenshot ? (
                    <Image
                      src={item.screenshot}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 opacity-50">
                      <div className="w-8 h-8 rounded border-2 border-current text-white/30" />
                      <span className="text-xs text-white/30">Screenshot coming soon</span>
                    </div>
                  )}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <span className="inline-flex items-center gap-2 bg-accent-primary text-white text-sm font-semibold rounded-lg px-5 py-2.5">
                      Visit Website <ExternalLink className="w-4 h-4" />
                    </span>
                  </a>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-bold text-[16px] text-white leading-tight">{item.name}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-primary bg-accent-primary/10 rounded-full px-2.5 py-0.5 whitespace-nowrap flex-shrink-0 mt-0.5">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-[#666]">{item.description}</p>
                  <p className="text-xs text-[#444] mt-1 mb-4">{item.location}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-xs text-accent-primary hover:underline transition-colors duration-200 truncate"
                  >
                    {item.href.replace(/https?:\/\/(www\.)?/, "")}
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA ── */}
      <section className="bg-[#0d0d0d] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_50%,_rgba(240,100,40,0.05),_transparent)]" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <motion.p
                {...fadeUp(0)}
                className="text-accent-primary text-xs font-bold uppercase tracking-widest mb-3"
              >
                Social Media Management
              </motion.p>
              <motion.h2
                {...fadeUp(0.1)}
                className="text-[28px] md:text-[42px] font-black text-white tracking-tight leading-tight"
              >
                Brands We Manage Online
              </motion.h2>
            </div>
            <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 text-white/70 text-xs font-medium rounded-full px-4 py-2">
                <Camera className="w-3.5 h-3.5 text-accent-primary" /> Instagram
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 text-white/70 text-xs font-medium rounded-full px-4 py-2">
                <Globe className="w-3.5 h-3.5 text-accent-primary" /> Facebook
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 text-white/70 text-xs font-medium rounded-full px-4 py-2">
                <Video className="w-3.5 h-3.5 text-accent-primary" /> TikTok
              </span>
            </motion.div>
          </div>

          {/* Client grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOCIAL_MEDIA_CLIENTS.map((client, ci) => (
              <motion.div
                key={ci}
                {...fadeUp(ci * 0.07)}
                className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-accent-primary/40 transition-all duration-300"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-white/5">
                  {client.screenshot ? (
                    <Image
                      src={client.screenshot}
                      alt={client.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-accent-primary/30">{client.initial}</span>
                    </div>
                  )}
                  <a
                    href={client.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <span className="inline-flex items-center gap-2 bg-accent-primary text-white text-sm font-semibold rounded-lg px-5 py-2.5">
                      View on Instagram <ExternalLink className="w-4 h-4" />
                    </span>
                  </a>
                </div>
                <div className="px-4 py-3 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold text-[14px] text-white leading-tight truncate">{client.name}</p>
                    <p className="text-[11px] text-white/40 mt-0.5">{client.category} · {client.location}</p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-white/30 font-medium">Active</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS CAROUSEL ── */}
      <section id="reviews" className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <motion.p
                {...fadeUp(0)}
                className="text-accent-primary text-xs font-bold uppercase tracking-widest mb-3"
              >
                Client Reviews
              </motion.p>
              <motion.h2
                {...fadeUp(0.1)}
                className="text-[28px] md:text-[38px] font-black text-[#0d0d0d] tracking-tight leading-tight"
              >
                What Our Clients Say
              </motion.h2>
            </div>
            <motion.div {...fadeUp(0.2)} className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent-primary" fill="currentColor" />)}
              </div>
              <span className="text-[#0d0d0d] font-black text-xl">5.0</span>
              <span className="text-[#666] text-sm">on Google</span>
            </motion.div>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -80 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {visible.map((review, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#ebebeb] rounded-2xl p-6 flex flex-col h-full hover:border-accent-primary/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-accent-primary/15">
                          <Image src={review.photo} alt={review.name} width={40} height={40} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-[#0d0d0d] font-semibold text-sm leading-tight">{review.name}</p>
                          {review.badge && <p className="text-[#888] text-xs">{review.badge}</p>}
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3.5 h-3.5 text-accent-primary" fill="currentColor" />)}
                      </div>
                    </div>
                    <p className="text-[#555] text-sm leading-relaxed flex-grow mb-4">{review.text}</p>
                    <div className="flex items-center gap-2 text-xs text-[#888] mt-auto pt-4 border-t border-[#ebebeb]">
                      <span>Google</span>
                      <span className="w-1 h-1 rounded-full bg-[#ccc]" />
                      <span>{review.time}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === page ? "w-6 bg-accent-primary" : "w-2 bg-[#ebebeb] hover:bg-accent-primary/40"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#ebebeb] bg-white flex items-center justify-center text-[#666] hover:border-accent-primary hover:text-accent-primary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#ebebeb] bg-white flex items-center justify-center text-[#666] hover:border-accent-primary hover:text-accent-primary transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 text-center"
          >
            <a
              href="https://g.page/r/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#ebebeb] text-[#666] rounded-lg px-6 py-3 text-sm font-medium hover:border-accent-primary hover:text-accent-primary transition-colors duration-200"
            >
              Leave Us a Review on Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="bg-[#080808] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
          <motion.h2
            {...fadeUp(0)}
            className="text-[36px] md:text-[50px] font-black text-white leading-tight mb-4 max-w-[700px]"
          >
            Ready To See What We Can Do?
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-[17px] text-[#666] max-w-[500px] mb-10"
          >
            Every business on this page started exactly where you are. Let us show you a strategy tailored specifically for your industry and goals.
          </motion.p>
          <motion.div {...fadeUp(0.2)} className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="bg-accent-primary text-white font-bold text-[16px] px-10 py-4 rounded-xl hover:bg-accent-primary/90 transition-colors"
            >
              Get a Free Strategy Call
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 text-white font-medium text-[15px] px-8 py-4 rounded-xl hover:bg-white hover:text-[#0d0d0d] transition-all"
            >
              Book a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />

    </div>
  );
}
