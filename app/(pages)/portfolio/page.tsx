"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";
import PageHero from "@/components/ui/PageHero";

const WEB_DEV_CLIENTS = [
  {
    id: 1, name: "Weather Guard Coatings", category: "Contractors",
    description: "Painting Company", location: "London, Ontario",
    href: "https://www.weatherguardcoating.ca/",
    screenshot: "", // replace with /screenshots/weatherguard.png
    accent: "#E8EDF5",
  },
  {
    id: 2, name: "Gravity Contractors", category: "Contractors",
    description: "Construction & Renovation Company", location: "Hamilton, Ontario",
    href: "https://www.gravitycontractors.ca/",
    screenshot: "",
    accent: "#E8EDF5",
  },
  {
    id: 3, name: "Greypro Concrete Designs", category: "Contractors",
    description: "Concrete Design Company", location: "Hamilton, Ontario",
    href: "https://greypro.ca/",
    screenshot: "",
    accent: "#E8EDF5",
  },
  {
    id: 4, name: "Apply Buddies", category: "Education",
    description: "International Education Company", location: "Canada",
    href: "https://www.applybuddies.com/",
    screenshot: "",
    accent: "#E0EFF5",
  },
  {
    id: 5, name: "Tranquility Compassion", category: "Healthcare",
    description: "Elderly Care Company", location: "Canada",
    href: "https://www.tranquilitycompassion.ca/",
    screenshot: "",
    accent: "#E5F0E8",
  },
  {
    id: 6, name: "Faizan Global Relief Foundation", category: "Non-Profit",
    description: "Canadian Relief Organization", location: "Canada",
    href: "https://www.fgrf.ca/",
    screenshot: "",
    accent: "#F0EBF5",
  },
  {
    id: 7, name: "Greypro Concrete Designs", category: "Contractors",
    description: "Concrete Design Company", location: "Hamilton, Ontario",
    href: "https://greypro.ca/",
    screenshot: "",
    accent: "#E8EDF5",
  },
  {
    id: 8, name: "Quick Car Repair", category: "Automotive",
    description: "Auto Mechanic Shop", location: "Hamilton, Ontario",
    href: "https://www.quickcarrepair.ca/",
    screenshot: "",
    accent: "#F7E6DF",
  },
  {
    id: 9, name: "GO Safe Driving", category: "Education",
    description: "Driving School", location: "Hamilton, Ontario",
    href: "https://www.gosafedriving.ca/",
    screenshot: "",
    accent: "#F9EFE6",
  },
  {
    id: 10, name: "Isnad Association", category: "Non-Profit",
    description: "Non-Profit Organization", location: "Canada",
    href: "https://isnadassociation.org/",
    screenshot: "",
    accent: "#F0EBF5",
  },
];

// Remove duplicate - Greypro appeared twice above, keeping unique entries
const UNIQUE_WEB_CLIENTS = WEB_DEV_CLIENTS.filter((c, i, arr) => arr.findIndex(x => x.href === c.href) === i);

const SOCIAL_MEDIA_CLIENTS = [
  { group: "Trades & Skilled Trades", clients: [
    { name: "Gravity Contractors Ltd", location: "Hamilton, ON", initial: "G" },
    { name: "Weather Guard Coatings",  location: "London, ON",   initial: "W" },
  ]},
  { group: "Restaurants", clients: [
    { name: "Bowld Up",          location: "St. Catharines, ON", initial: "B" },
    { name: "Kukus Chicken",     location: "Burlington, ON",     initial: "K" },
    { name: "Moussas Shawarma",  location: "North York, ON",     initial: "M" },
  ]},
  { group: "Real Estate", clients: [
    { name: "Rocket AMG",  location: "Roger Singh", initial: "R" },
  ]},
];

const WEB_FILTERS = ["All", "Contractors", "Education", "Healthcare", "Automotive", "Non-Profit"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

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
      />

      {/* SECTION 2 - PORTFOLIO FILTER AND GRID */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[38px] font-bold text-text-primary text-center leading-tight mb-8">
            Our Recent Work
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-wrap justify-center gap-3 mb-16">
            {WEB_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 text-sm transition-colors duration-300 border ${
                  activeFilter === filter
                    ? 'bg-accent-primary border-accent-primary text-white'
                    : 'bg-background-card border-border text-text-secondary hover:border-accent-primary'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="bg-background-card border border-border rounded-2xl overflow-hidden group shadow-sm hover:border-accent-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Screenshot area */}
                <div className="relative aspect-[16/9] w-full overflow-hidden" style={{ backgroundColor: item.accent }}>
                  {item.screenshot ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.screenshot} alt={item.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 opacity-50">
                      <div className="w-8 h-8 rounded border-2 border-current text-text-muted" />
                      <span className="text-xs text-text-muted">Screenshot coming soon</span>
                    </div>
                  )}
                  {/* Hover overlay */}
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
                    <h3 className="font-bold text-[16px] text-text-primary leading-tight">{item.name}</h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-primary bg-accent-primary/10 rounded-full px-2.5 py-0.5 whitespace-nowrap flex-shrink-0 mt-0.5">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                  <p className="text-xs text-text-muted mt-1 mb-4">{item.location}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-primary transition-colors duration-200 truncate"
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

      {/* SECTION 3 - SOCIAL MEDIA MANAGEMENT */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="mb-14">
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">
              Social Media Management
            </motion.p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="text-[28px] md:text-[38px] font-bold text-text-primary tracking-tight leading-tight">
                Brands We Manage Online
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="text-text-secondary text-sm max-w-sm">
                Content creation, community management, and growth across Instagram, Facebook & TikTok.
              </motion.p>
            </div>
          </div>

          {/* Grouped by industry */}
          <div className="space-y-12">
            {SOCIAL_MEDIA_CLIENTS.map((group, gi) => (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
              >
                {/* Group label */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[13px] font-bold text-text-primary uppercase tracking-widest">{group.group}</span>
                  <div className="flex-grow h-px bg-border" />
                  <span className="text-xs text-text-muted">{group.clients.length} {group.clients.length === 1 ? "client" : "clients"}</span>
                </div>

                {/* Client cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.clients.map((client, ci) => (
                    <div
                      key={ci}
                      className="bg-background-card border border-border rounded-2xl p-5 flex items-center gap-4 hover:border-accent-primary/40 hover:shadow-md transition-all duration-300"
                    >
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-accent-primary text-lg font-bold">{client.initial}</span>
                      </div>
                      {/* Info */}
                      <div className="min-w-0">
                        <p className="font-bold text-[15px] text-text-primary leading-tight truncate">{client.name}</p>
                        <p className="text-xs text-text-muted mt-0.5">{client.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - FEATURED CASE STUDY */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[38px] font-bold text-text-primary text-center leading-tight mb-16">
            Featured Case Study
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative w-full aspect-video rounded-2xl bg-[#F7E6DF] flex items-center justify-center shadow-lg border border-border overflow-hidden group">
              <span className="text-sm text-text-muted">Case Study Image</span>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col">
              <span className="text-accent-primary uppercase text-xs tracking-wider font-semibold mb-2 block">Electrician</span>
              <h3 className="text-[32px] font-bold text-text-primary leading-tight mb-4">Bright Spark Electric</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                Full-service electrical contractor in Hamilton, Ontario. Wanted to move away from relying on referrals and phone book and build a predictable lead generation system.
              </p>
              
              <div className="mb-6">
                <span className="text-sm text-text-muted uppercase tracking-wider font-semibold block mb-2">Challenge</span>
                <p className="text-[16px] text-text-secondary">
                  Bright Spark was getting 2-3 qualified leads per week but wanted to scale to 5-6. Their main concern was that their website was outdated and they had no consistent way to capture emergency calls.
                </p>
              </div>
              
              <div className="mb-8">
                <span className="text-sm text-text-muted uppercase tracking-wider font-semibold block mb-2">Solution</span>
                <p className="text-[16px] text-text-secondary">
                  We rebuilt their website with lead capture focus. Set up Google Local Service Ads to capture emergency electrician searches. Built a Google Ads campaign targeting specific electrical services. Created before and after video content of their work for social media.
                </p>
              </div>

              <div className="mb-8">
                <span className="text-sm text-text-muted uppercase tracking-wider font-semibold block mb-4">Results</span>
                <div className="flex flex-wrap sm:flex-nowrap gap-4">
                  <div className="bg-background-card border border-border rounded-xl p-4 text-center flex-1">
                    <span className="text-[28px] font-bold text-accent-primary block leading-none mb-1">312%</span>
                    <span className="text-xs text-text-muted">Increase in leads</span>
                  </div>
                  <div className="bg-background-card border border-border rounded-xl p-4 text-center flex-1">
                    <span className="text-[28px] font-bold text-accent-primary block leading-none mb-1">18</span>
                    <span className="text-xs text-text-muted">Average leads/week</span>
                  </div>
                  <div className="bg-background-card border border-border rounded-xl p-4 text-center flex-1">
                    <span className="text-[28px] font-bold text-accent-primary block leading-none mb-1">$34K</span>
                    <span className="text-xs text-text-muted">Revenue 90 days</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="btn-primary self-start">Read Full Case Study</Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 4 - TESTIMONIAL CALLOUT */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[700px] mx-auto px-6 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[26px] font-bold text-text-primary leading-relaxed mb-6">
              "These guys completely understand how to market to electricians. We went from scrambling for work to booking months out. Best investment we made."
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-center">
            <span className="font-semibold text-text-primary">John Martinez</span>
            <span className="text-sm text-text-muted mt-1">Owner, Bright Spark Electric</span>
            <div className="flex space-x-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent-primary" fill="currentColor" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - ALL GOOGLE REVIEWS */}
      <section id="reviews" className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">
                Client Reviews
              </motion.p>
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="text-[28px] md:text-[38px] font-bold text-text-primary tracking-tight leading-tight">
                What Our Clients Say
              </motion.h2>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="flex items-center gap-3">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent-primary" fill="currentColor" />)}
              </div>
              <span className="text-text-primary font-bold text-xl">5.0</span>
              <span className="text-text-muted text-sm">on Google</span>
            </motion.div>
          </div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { initials: "DA", name: "Dennis Aboagye", badge: "", time: "a month ago", text: "Excellent social media management service! Very professional, creative, and always responsive. Highly recommend for anyone looking to grow their online presence." },
              { initials: "UO", name: "Unnati Oza", badge: "Local Guide", time: "a month ago", text: "I have been dealing with Pure marketing from past 5-6 months. Asad has been handling my social media page and he has been very professional and easy to contact and connect when needed. I would recommend his service 100%." },
              { initials: "BY", name: "Benard Yeboah", badge: "", time: "a month ago", text: "Asad does an excellent job managing my social media across multiple platforms. Reliable, and easy to work with." },
              { initials: "WB", name: "Wade Beattie", badge: "", time: "7 months ago", text: "Great communication, and pricing." },
              { initials: "EW", name: "Eleanor Wilson", badge: "", time: "4 months ago", text: "Gravity contractors referred me to them and they do a very good job." },
              { initials: "JR", name: "John Riadhh", badge: "Local Guide", time: "4 months ago", text: "Asad was very professional in helping, definitely recommend their marketing team." },
              { initials: "JW", name: "John Williamson", badge: "", time: "14 hours ago", text: "Fantastic business first class." },
              { initials: "N2", name: "Negril 25", badge: "", time: "9 months ago", text: "Asad was very professional and patient while working with me. He helped me to create my Website for my healthcare business. He also helped with creating business cards and pamphlets. I am very happy with the outcome and I will continue to use him for Social Media services. I highly recommend him." },
            ].map((review, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="bg-background-card border border-border rounded-2xl p-6 flex flex-col h-full hover:border-accent-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-accent-primary/15 text-accent-primary flex items-center justify-center font-medium text-sm flex-shrink-0">
                      {review.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-text-primary font-medium text-sm">{review.name}</span>
                      {review.badge && <span className="text-text-muted text-xs">{review.badge}</span>}
                    </div>
                  </div>
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3.5 h-3.5 text-accent-primary" fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed flex-grow mb-4">{review.text}</p>
                <div className="flex items-center space-x-2 text-xs text-text-muted mt-auto">
                  <span>Google</span>
                  <span className="w-1 h-1 rounded-full bg-text-muted/50"></span>
                  <span>{review.time}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }} className="mt-10 text-center">
            <a href="https://g.page/r/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border text-text-secondary rounded-lg px-6 py-3 text-sm font-medium hover:border-accent-primary hover:text-accent-primary transition-colors duration-200">
              Leave Us a Review on Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 - CALL TO ACTION */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-[36px] font-bold text-text-primary leading-tight mb-4">
            Ready To See What We Can Do For Your Business?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-[17px] text-text-secondary max-w-[540px] mb-8">
            Every business on this page started exactly where you are. Let us show you a strategy tailored specifically for your industry and goals.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">Book a Free Consultation</Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 - CTA BANNER */}
      <CTABanner />

    </div>
  );
}
