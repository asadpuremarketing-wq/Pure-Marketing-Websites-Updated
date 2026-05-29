"use client";

import { notFound } from "next/navigation";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, TrendingUp, Video, Share2, BarChart2,
  Check, ArrowRight, Phone, ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/sections/CTABanner";

/* ── Portfolio data ─────────────────────────────────────────── */
const WEB_CLIENTS = [
  { name: "Weather Guard Coatings", description: "Painting Company", location: "London, ON", href: "https://www.weatherguardcoating.ca/", screenshot: "/screenshots/weatherguard.webp", accent: "#E8EDF5" },
  { name: "Gravity Contractors", description: "Construction & Renovation", location: "Hamilton, ON", href: "https://www.gravitycontractors.ca/", screenshot: "/screenshots/gravity-contractors.webp", accent: "#E8EDF5" },
  { name: "Greypro Concrete Designs", description: "Concrete Design Company", location: "Hamilton, ON", href: "https://greypro.ca/", screenshot: "/screenshots/greypro.webp", accent: "#E8EDF5" },
  { name: "Apply Buddies", description: "International Education Company", location: "Canada", href: "https://www.applybuddies.com/", screenshot: "/screenshots/apply-buddies.webp", accent: "#E0EFF5" },
  { name: "Tranquility Compassion", description: "Elderly Care Company", location: "Canada", href: "https://www.tranquilitycompassion.ca/", screenshot: "/screenshots/tranquility-compassion.webp", accent: "#E5F0E8" },
  { name: "Faizan Global Relief Foundation", description: "Canadian Relief Organization", location: "Canada", href: "https://www.fgrf.ca/", screenshot: "/screenshots/fgrf.webp", accent: "#F0EBF5" },
  { name: "Quick Car Repair", description: "Auto Mechanic Shop", location: "Hamilton, ON", href: "https://www.quickcarrepair.ca/", screenshot: "/screenshots/quick-car-repair.webp", accent: "#F7E6DF" },
  { name: "GO Safe Driving", description: "Driving School", location: "Hamilton, ON", href: "https://www.gosafedriving.ca/", screenshot: "/screenshots/go-safe-driving.webp", accent: "#F9EFE6" },
  { name: "Isnad Association", description: "Non-Profit Organization", location: "Canada", href: "https://isnadassociation.org/", screenshot: "/screenshots/isnad-association.webp", accent: "#F0EBF5" },
  { name: "Prudent Locksmith & Garage Services", description: "Locksmith & Garage Door Company", location: "Hamilton, ON", href: "https://www.purdentlocksmith.ca/", screenshot: "/screenshots/Prudentlocksmith.webp", accent: "#E8EDF5" },
];

// ── Video portfolio ─────────────────────────────────────────────
// How to add a video:
//   platform "youtube" → id is everything after "v=" or after "shorts/"
//   platform "vimeo"   → id is the number at the end of the Vimeo URL
//   thumbnail (YouTube) → https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg
//   thumbnail (Vimeo)   → https://vumbnail.com/VIDEO_ID.jpg
// Max 6 videos per industry — extras are ignored.

type VideoItem = {
  id: string;
  title: string;
  client: string;
  platform: "youtube" | "vimeo";
  thumbnail: string;
};

const VIDEO_INDUSTRIES: { label: string; description: string; videos: VideoItem[] }[] = [
  {
    label: "Restaurants",
    description: "Menu highlights, behind-the-scenes, and atmosphere videos that bring customers through the door.",
    videos: [
      { id: "jNQXAC9IVRw", title: "Menu Highlight Reel", client: "Kukus Chicken", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=711&fit=crop" },
      { id: "dQw4w9WgXcQ", title: "Behind the Kitchen", client: "Moussas Shawarma", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=711&fit=crop" },
      { id: "9bZkp7q19f0", title: "Grand Opening Promo", client: "Local Restaurant", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=711&fit=crop" },
      { id: "kJQP7kiw5Fk", title: "Chef's Special", client: "Local Restaurant", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=711&fit=crop" },
      { id: "JGwWNGJdvx8", title: "Weekend Brunch Reel", client: "Local Café", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=711&fit=crop" },
      { id: "RgKAFK5djSk", title: "Catering Showcase", platform: "youtube", client: "Catering Co.", thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=711&fit=crop" },
    ],
  },
  {
    label: "Skilled Trades",
    description: "Project transformations, team intros, and trust-building content that wins more jobs.",
    videos: [
      { id: "jNQXAC9IVRw", title: "Before & After Reveal", client: "Gravity Contractors", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=711&fit=crop" },
      { id: "dQw4w9WgXcQ", title: "Painting Project Tour", client: "Weather Guard Coatings", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=711&fit=crop" },
      { id: "9bZkp7q19f0", title: "Electrical Panel Upgrade", client: "Local Electrician", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=711&fit=crop" },
      { id: "kJQP7kiw5Fk", title: "Bathroom Renovation", client: "Local Contractor", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=711&fit=crop" },
      { id: "JGwWNGJdvx8", title: "Roofing Time-Lapse", client: "Local Roofer", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=400&h=711&fit=crop" },
      { id: "RgKAFK5djSk", title: "Team Introduction", client: "Trades Company", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=711&fit=crop" },
    ],
  },
  {
    label: "Real Estate",
    description: "Property tours, agent brand videos, and neighbourhood highlights that close more deals.",
    videos: [
      { id: "jNQXAC9IVRw", title: "Luxury Home Tour", client: "Real Estate Agent", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=711&fit=crop" },
      { id: "dQw4w9WgXcQ", title: "Agent Brand Story", client: "Local Realtor", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=711&fit=crop" },
      { id: "9bZkp7q19f0", title: "Condo Walkthrough", client: "Real Estate Agent", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=711&fit=crop" },
      { id: "kJQP7kiw5Fk", title: "Neighbourhood Highlight", client: "Local Realtor", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=711&fit=crop" },
      { id: "JGwWNGJdvx8", title: "New Listing Reveal", client: "Real Estate Team", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=711&fit=crop" },
      { id: "RgKAFK5djSk", title: "Client Testimonial", client: "Happy Homeowner", platform: "youtube", thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=711&fit=crop" },
    ],
  },
];

const SOCIAL_CLIENTS = [
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
    screenshot: "/screenshots/social/weatherguard.webp",
  },
  {
    name: "Bowld Up",
    location: "St. Catharines, ON",
    initial: "B",
    category: "Restaurant",
    instagram: "https://www.instagram.com/bowldup/",
    screenshot: "/screenshots/social/bowldup.webp",
  },
  {
    name: "Kukus Chicken",
    location: "Burlington, ON",
    initial: "K",
    category: "Restaurant",
    instagram: "https://www.instagram.com/kukuschicken/",
    screenshot: "/screenshots/social/kukus.webp",
  },
  {
    name: "Moussas Shawarma",
    location: "North York, ON",
    initial: "M",
    category: "Restaurant",
    instagram: "https://www.instagram.com/moussasshawarma/",
    screenshot: "/screenshots/social/moussas.webp",
  },
  {
    name: "Rocket AMG",
    location: "Hamilton, ON",
    initial: "R",
    category: "Automotive",
    instagram: "https://www.instagram.com/rocketamg/",
    screenshot: "/screenshots/social/rocket-amg.webp",
  },
];

function VideoCard({ v, onPlay }: { v: VideoItem; onPlay: (key: string) => void }) {
  return (
    <motion.button
      onClick={() => onPlay(v.id + "|" + v.platform)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl overflow-hidden border border-border hover:border-accent-primary hover:shadow-xl transition-all duration-300 aspect-[9/16] w-full"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={v.thumbnail} alt={v.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 text-accent-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-[13px] font-semibold leading-tight">{v.title}</p>
        <p className="text-white/60 text-[11px]">{v.client}</p>
      </div>
    </motion.button>
  );
}

function VideoPortfolioSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const close = useCallback(() => setActiveVideo(null), []);

  const industries = VIDEO_INDUSTRIES.filter((ind) => ind.videos.length > 0);
  if (industries.length === 0) return null;

  const embedUrl = (key: string) => {
    const [id, platform] = key.split("|");
    return platform === "youtube"
      ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
      : `https://player.vimeo.com/video/${id}?autoplay=1`;
  };

  return (
    <>
      {industries.map((industry, idx) => (
        <section
          key={industry.label}
          className={`py-20 ${idx % 2 === 0 ? "bg-background-primary" : "bg-background-secondary"}`}
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
            >
              <div>
                <p className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">Video Portfolio</p>
                <h2 className="text-[28px] md:text-[36px] font-bold text-text-primary leading-tight mb-2">
                  {industry.label}
                </h2>
                <p className="text-[15px] text-text-secondary max-w-[480px]">{industry.description}</p>
              </div>
              <span className="text-[13px] text-text-muted shrink-0">{industry.videos.slice(0, 6).length} videos</span>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {industry.videos.slice(0, 6).map((v, i) => (
                <VideoCard key={i} v={v} onPlay={setActiveVideo} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                src={embedUrl(activeVideo)}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>
            <button onClick={close} className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-background-card border border-border rounded-xl mb-3 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="font-semibold text-[16px] text-text-primary group-hover:text-accent-primary transition-colors">
          {question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-5 text-sm text-text-secondary leading-relaxed border-t border-border pt-4"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const SERVICES = [
  {
    slug: "web-development",
    icon: Globe,
    gradient: "from-blue-500/15 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    popular: false,
    tag: "Foundation",
    title: "Web Development",
    headline: "A Website That Actually Converts Visitors Into Customers",
    description:
      "Most local business websites are digital brochures — pretty but passive. We build websites engineered around one goal: turning visitors into leads. Every page, every button, every form is built to make your phone ring.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=85",
    result: "Avg. 3× more contact form submissions vs. DIY sites",
    price: "From $2,500",
    turnaround: "2–3 weeks",
    features: [
      { title: "Custom Responsive Design", desc: "Built from scratch to match your brand — not a template. Looks perfect on every screen size." },
      { title: "Lead Capture Optimization", desc: "Strategically placed CTAs, contact forms, and click-to-call buttons that convert visitors at every stage." },
      { title: "Mobile-First Development", desc: "Over 70% of local search traffic is mobile. Your site is built for mobile speed and usability first." },
      { title: "SEO Technical Foundation", desc: "Proper heading structure, meta tags, schema markup, and page speed optimization built in from day one." },
      { title: "Google Analytics + Tracking", desc: "Know exactly where your leads come from. Conversion tracking set up and verified before launch." },
      { title: "30 Days of Post-Launch Support", desc: "Unlimited revisions and support for 30 days after your site goes live. We do not disappear after launch." },
    ],
    process: [
      { step: "01", title: "Discovery Call", desc: "We learn about your business, your customers, and your goals. Usually 30 minutes." },
      { step: "02", title: "Design Mockup", desc: "We present a full design mockup for your approval before writing a single line of code." },
      { step: "03", title: "Development", desc: "We build your site. You get a staging link to review at every stage." },
      { step: "04", title: "Launch", desc: "We handle the domain, hosting setup, and go-live. Your site is live in 2–3 weeks." },
    ],
    faqs: [
      { q: "Do I need to provide content?", a: "We can work with content you have or help you develop it. Copywriting is available as an add-on." },
      { q: "What if I already have a website?", a: "We can redesign your existing site or rebuild it from scratch — whichever makes more sense for your goals." },
      { q: "Do you handle hosting?", a: "Yes. We recommend and set up hosting on your behalf and can manage it ongoing for a small monthly fee." },
      { q: "How long does it take?", a: "Typically 2–3 weeks from design approval to launch, depending on content readiness." },
    ],
    relatedSlugs: ["lead-generation", "google-meta-ads"],
  },
  {
    slug: "lead-generation",
    icon: TrendingUp,
    gradient: "from-accent-primary/20 to-transparent",
    iconBg: "bg-accent-primary/15",
    iconColor: "text-accent-primary",
    popular: true,
    tag: "Most Popular",
    title: "Lead Generation System",
    headline: "Stop Relying on Referrals. Build a Predictable Lead Machine.",
    description:
      "Referrals are great — until they dry up. We build a complete, done-for-you lead generation system using Google Ads, Meta Ads, and Local Service Ads so your phone rings consistently every single week.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
    result: "Clients average 40–80 qualified leads per month",
    price: "From $1,500/mo",
    turnaround: "Live in 7–10 days",
    features: [
      { title: "Google Local Service Ads", desc: "The highest-intent leads available. You only pay when a qualified customer calls you directly." },
      { title: "Google Search Ads", desc: "Capture people actively searching for your service right now, in your exact service area." },
      { title: "Meta Ads (Facebook + Instagram)", desc: "Build awareness and retarget website visitors with scroll-stopping creative and offers." },
      { title: "Keyword Research and Targeting", desc: "We find the exact terms your ideal customers search and build campaigns around them." },
      { title: "Monthly Optimization", desc: "Campaigns are reviewed and optimized every week. Nothing is set and forgotten." },
      { title: "Dedicated Account Manager", desc: "One person who knows your business, answers your calls, and is accountable for your results." },
    ],
    process: [
      { step: "01", title: "Audit and Strategy", desc: "We audit your current setup and build a custom strategy for your market and service area." },
      { step: "02", title: "Campaign Build", desc: "We set up every campaign, write ad copy, build audiences, and configure tracking." },
      { step: "03", title: "Launch", desc: "Campaigns go live. You start seeing leads within the first week in most cases." },
      { step: "04", title: "Optimize and Scale", desc: "Monthly reports, weekly optimizations, and ongoing scaling as results improve." },
    ],
    faqs: [
      { q: "How fast will I see leads?", a: "Most clients see their first leads within 2–3 weeks. Significant volume typically builds over 30–60 days as campaigns optimize." },
      { q: "What is the minimum ad budget?", a: "We recommend a minimum of $500–$1,000/month in ad spend on top of our management fee to see meaningful results." },
      { q: "Do I need a good website first?", a: "Yes — we will not run traffic to a site that will not convert. If your site needs work, we will tell you upfront." },
      { q: "Is there a contract?", a: "No long-term contracts. Month-to-month. We earn your business every single month." },
    ],
    relatedSlugs: ["web-development", "google-meta-ads"],
  },
  {
    slug: "video-production",
    icon: Video,
    gradient: "from-purple-500/15 to-transparent",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    popular: false,
    tag: "Brand Building",
    title: "Video Production",
    headline: "Professional Video That Makes Your Business Impossible to Ignore",
    description:
      "People buy from businesses they trust, and nothing builds trust faster than video. We produce professional video content for local businesses — from 15-second social clips to cinematic brand stories — that drives real engagement and leads.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=85",
    result: "Video content gets 4× more reach than static posts",
    price: "From $800/project",
    turnaround: "7–14 days",
    features: [
      { title: "Professional Video Shoots", desc: "We come to your location with professional gear. Multiple angles, multiple formats, one efficient shoot day." },
      { title: "Concept Development", desc: "We plan every shot list and script in advance. No wasted time on the day of the shoot." },
      { title: "Professional Editing", desc: "Color grading, sound design, motion graphics, and subtitles included in every edit." },
      { title: "Multi-Format Delivery", desc: "Every video delivered in all required formats — vertical for Reels/TikTok, horizontal for YouTube and ads." },
      { title: "Licensed Music", desc: "Professional royalty-free music included. No copyright strikes on your social posts." },
      { title: "Unlimited Revisions", desc: "We revise until you are satisfied. No extra charges for revision rounds." },
    ],
    process: [
      { step: "01", title: "Creative Brief", desc: "We discuss your goals, audience, and the story you want to tell. Takes 30 minutes." },
      { step: "02", title: "Pre-Production", desc: "Shot list, script, location scout, and scheduling confirmed before shoot day." },
      { step: "03", title: "Shoot Day", desc: "We arrive, set up, and capture everything. Most shoot days are 2–4 hours." },
      { step: "04", title: "Delivery", desc: "Edited videos delivered within 7 days. Revisions turned around within 48 hours." },
    ],
    faqs: [
      { q: "What types of video do you produce?", a: "Brand story videos, social media content, before/after project videos, testimonial videos, food and product content, and property tours." },
      { q: "Do you travel outside Hamilton?", a: "Yes. We work throughout the GTA and surrounding areas. Travel fees may apply for distant locations." },
      { q: "How many videos do I get per shoot?", a: "A typical half-day shoot produces 8–12 pieces of social content plus one long-form asset." },
      { q: "Can you post the content for us?", a: "Yes — combine with our Social Media Management service and we handle everything end to end." },
    ],
    relatedSlugs: ["social-media-management", "lead-generation"],
  },
  {
    slug: "social-media-management",
    icon: Share2,
    gradient: "from-pink-500/15 to-transparent",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500",
    popular: false,
    tag: "Stay Top of Mind",
    title: "Social Media Management",
    headline: "Your Brand, Active Online Every Day. Without You Lifting a Finger.",
    description:
      "Inconsistent posting kills your credibility. We fully manage your social media — creating content, posting daily, engaging with your audience, and growing your following — so you can focus on running your business.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=85",
    result: "Average 2× follower growth in the first 90 days",
    price: "From $600/mo",
    turnaround: "Start in 5 days",
    features: [
      { title: "Daily Content Creation", desc: "Original posts, graphics, and captions written and designed specifically for your brand and audience." },
      { title: "Multi-Platform Posting", desc: "Instagram, Facebook, TikTok, LinkedIn — we manage whichever platforms your customers use." },
      { title: "Community Engagement", desc: "We respond to comments and DMs promptly, maintaining your brand voice across every interaction." },
      { title: "Monthly Content Calendar", desc: "A full month of content planned and approved by you before we post anything." },
      { title: "Growth Strategy", desc: "Hashtag research, collaboration outreach, and platform-specific strategies to grow your following." },
      { title: "Analytics Reporting", desc: "Monthly report covering reach, engagement, follower growth, and what is working best." },
    ],
    process: [
      { step: "01", title: "Brand Onboarding", desc: "We learn your brand voice, values, and audience. Build your content guidelines." },
      { step: "02", title: "Content Calendar", desc: "First month of content planned and presented for your approval." },
      { step: "03", title: "Go Live", desc: "We take over posting and engagement. You get a shared calendar to see everything in advance." },
      { step: "04", title: "Monthly Review", desc: "Monthly performance review and strategy adjustment based on what is working." },
    ],
    faqs: [
      { q: "Do I get to approve content before it posts?", a: "Yes. You review and approve the monthly content calendar before anything goes live." },
      { q: "What platforms do you manage?", a: "Instagram, Facebook, TikTok, and LinkedIn. We recommend the platforms that make sense for your specific business." },
      { q: "Do I need to provide photos?", a: "We work with what you have. Combine with our Video Production service for a fully handled content pipeline." },
      { q: "How quickly will I see growth?", a: "Consistent posting and engagement compounds over time. Most clients see meaningful follower growth within 60–90 days." },
    ],
    relatedSlugs: ["video-production", "lead-generation"],
  },
  {
    slug: "google-meta-ads",
    icon: BarChart2,
    gradient: "from-emerald-500/15 to-transparent",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    popular: false,
    tag: "Paid Traffic",
    title: "Google and Meta Ads",
    headline: "Every Dollar You Spend on Ads Should Come Back Multiplied.",
    description:
      "Wasted ad spend is the most common complaint we hear from new clients. We build and manage Google and Meta ad campaigns where every dollar is tied to a measurable outcome — leads, calls, bookings, or revenue.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
    result: "Average 5–8× return on ad spend for local clients",
    price: "From $750/mo",
    turnaround: "Live in 5–7 days",
    features: [
      { title: "Campaign Strategy and Setup", desc: "Full campaign architecture designed around your specific business goals and service area." },
      { title: "Keyword Research", desc: "We find high-intent, commercially relevant keywords and eliminate wasteful broad terms." },
      { title: "Ad Copy and Creative", desc: "Compelling ad copy and visual creative tested in rotation to find what converts best." },
      { title: "Audience Targeting", desc: "Precise demographic, interest, and behavioral targeting on Meta. Location targeting on Google." },
      { title: "Bid Management", desc: "Manual bid strategies and automated rules to maximize return on every dollar spent." },
      { title: "Monthly Detailed Reporting", desc: "Full performance reports with cost per lead, ROAS, and clear recommendations for next month." },
    ],
    process: [
      { step: "01", title: "Audit Existing Campaigns", desc: "If you have run ads before, we audit everything to find what was wasting budget." },
      { step: "02", title: "Strategy and Build", desc: "New campaign structure, ad copy, creative, and targeting built and reviewed with you." },
      { step: "03", title: "Launch and Monitor", desc: "Campaigns launched. We monitor performance daily in the first two weeks." },
      { step: "04", title: "Optimize Monthly", desc: "Monthly optimization pass. Winning ads scaled, losing ads paused, new tests launched." },
    ],
    faqs: [
      { q: "What ad budget do I need?", a: "We recommend a minimum of $500–$1,500/month in ad spend depending on your market and goals, separate from our management fee." },
      { q: "Google Ads or Meta Ads — which is better?", a: "Depends on your industry. Google captures high-intent searches. Meta builds awareness and retargets. Most clients benefit from both." },
      { q: "Do you manage the ad account or do I?", a: "We manage everything inside your own ad account, which you own. You always have full access and visibility." },
      { q: "What results can I realistically expect?", a: "In competitive local markets, a well-managed campaign typically generates leads at $20–$60 each depending on industry." },
    ],
    relatedSlugs: ["lead-generation", "web-development"],
  },
];

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = SERVICES.filter(s => service.relatedSlugs.includes(s.slug));

  return (
    <div className="flex flex-col min-h-screen">

      <PageHero
        label={service.tag}
        title={service.title}
        titleAccent=""
        subtitle={service.headline}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
        fadeToColor="#111111"
      />

      {/* HERO IMAGE + INTRO */}
      <section className="bg-[#111] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/20 rounded-full px-4 py-2 mb-6">
                <Icon className="w-4 h-4 text-accent-primary" />
                <span className="text-accent-primary text-xs font-semibold uppercase tracking-wider">{service.tag}</span>
              </div>
              <p className="text-[17px] text-white/60 leading-relaxed mb-8">{service.description}</p>

              <div className="bg-accent-primary/10 border border-accent-primary/20 rounded-xl px-5 py-4 mb-8 inline-flex items-center gap-3">
                <span className="text-accent-primary text-lg font-bold">→</span>
                <p className="text-sm font-semibold text-white">{service.result}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary">Book a Free Strategy Call</Link>
                <a href="tel:+16479512786" className="flex items-center justify-center gap-2 border border-white/20 rounded-lg px-5 py-3 text-sm font-medium text-white/60 hover:border-accent-primary hover:text-accent-primary transition-colors">
                  <Phone className="w-4 h-4" /> Call Us Now
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {service.slug === "web-development" ? (
                <div className="grid grid-cols-2 gap-3">
                  {WEB_CLIENTS.slice(0, 4).map((client, i) => (
                    <a key={i} href={client.href} target="_blank" rel="noopener noreferrer" className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" style={{ backgroundColor: client.accent }}>
                      <Image src={client.screenshot} alt={client.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <span className="text-white text-xs font-semibold truncate">{client.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              ) : service.slug === "social-media-management" ? (
                <div className="grid grid-cols-2 gap-3">
                  {SOCIAL_CLIENTS.slice(0, 4).map((client, i) => (
                    <div key={i} className="bg-white/[0.04] border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-accent-primary/40 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-accent-primary font-bold">{client.initial}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-white truncate">{client.name}</p>
                        <p className="text-xs text-white/40">{client.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">Everything Included</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary leading-tight">What You Get</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-background-card border border-border rounded-2xl p-6 hover:border-accent-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-4 h-4 text-accent-primary" />
                </div>
                <h3 className="font-semibold text-[16px] text-text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO PORTFOLIO */}
      {service.slug === "video-production" && <VideoPortfolioSection />}

      {/* PORTFOLIO */}
      {(service.slug === "web-development" || service.slug === "social-media-management") && (
        <section className="bg-background-primary py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">Real Work</p>
                <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary leading-tight">
                  {service.slug === "web-development" ? "Websites We've Built" : "Brands We Manage"}
                </h2>
              </div>
              <Link href="/portfolio" className="hidden md:inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-primary transition-colors">
                View full portfolio <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {service.slug === "web-development" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WEB_CLIENTS.map((client, i) => (
                  <motion.a
                    key={i}
                    href={client.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group bg-background-card border border-border rounded-2xl overflow-hidden hover:border-accent-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative aspect-video w-full overflow-hidden" style={{ backgroundColor: client.accent }}>
                      <Image
                        src={client.screenshot}
                        alt={client.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-accent-primary text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2">
                          Visit Website <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-[15px] text-text-primary">{client.name}</h3>
                      <p className="text-sm text-text-secondary">{client.description}</p>
                      <p className="text-xs text-text-muted mt-1">{client.location}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}

            {service.slug === "social-media-management" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SOCIAL_CLIENTS.map((client, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="bg-background-card border border-border rounded-2xl overflow-hidden hover:border-accent-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                  >
                    {/* Screenshot */}
                    <div className="relative aspect-square w-full overflow-hidden bg-background-secondary">
                      {client.screenshot ? (
                        <Image
                          src={client.screenshot}
                          alt={`${client.name} Instagram`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl font-bold text-text-muted/30">{client.initial}</span>
                        </div>
                      )}
                      {/* Instagram overlay on hover */}
                      <a
                        href={client.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="bg-white text-text-primary text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                          View on Instagram
                        </span>
                      </a>
                    </div>

                    {/* Info row */}
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[14px] text-text-primary leading-tight">{client.name}</p>
                        <p className="text-xs text-text-muted mt-0.5">{client.category} · {client.location}</p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] text-text-muted font-medium">Active</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="mt-8 text-center md:hidden">
              <Link href="/portfolio" className="text-sm text-text-muted hover:text-accent-primary transition-colors">
                View full portfolio →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* SOCIAL MEDIA PACKAGES */}
      {service.slug === "social-media-management" && (
        <section className="bg-[#111] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="relative z-10 max-w-[1100px] mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-primary border border-accent-primary/30 rounded-full px-4 py-1.5 mb-4 inline-block">Pricing</span>
              <h2 className="text-[32px] md:text-[42px] font-bold text-white leading-tight mt-4">Social Media Packages</h2>
              <p className="text-white/50 text-[16px] mt-3">No lock-in on monthly. Longer commitments save you more.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {[
                {
                  name: "Monthly",
                  price: "$1,500",
                  period: "/month",
                  commitment: "Month-to-month",
                  badge: null,
                  cancellation: null,
                  planKey: "1-month",
                  features: [
                    "Full social media management",
                    "Daily content creation & posting",
                    "Instagram, Facebook, TikTok",
                    "Community engagement",
                    "Monthly analytics report",
                    "Cancel anytime",
                  ],
                  popular: false,
                },
                {
                  name: "3 Months",
                  price: "$1,199",
                  period: "/month",
                  commitment: "3-month commitment",
                  badge: "Save $900",
                  cancellation: "25% cancellation fee applies",
                  planKey: "3-month",
                  features: [
                    "Everything in Monthly",
                    "Priority content turnaround",
                    "Quarterly strategy review",
                    "Advanced growth tracking",
                    "Paid monthly, 3-month term",
                    "25% fee to cancel early",
                  ],
                  popular: true,
                },
                {
                  name: "6 Months",
                  price: "$899",
                  period: "/month",
                  commitment: "6-month commitment",
                  badge: "Best Value",
                  cancellation: "25% cancellation fee applies",
                  planKey: "6-month",
                  features: [
                    "Everything in 3-Month",
                    "Monthly content strategy call",
                    "Competitor analysis included",
                    "Influencer outreach support",
                    "Paid monthly, 6-month term",
                    "25% fee to cancel early",
                  ],
                  popular: false,
                },
              ].map((pkg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  {pkg.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-accent-primary text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap shadow-md">
                      {pkg.badge}
                    </div>
                  )}
                  <div className={`rounded-2xl p-8 flex flex-col h-full border ${
                    pkg.popular
                      ? "bg-white/[0.07] border-accent-primary shadow-[0_4px_32px_rgba(240,100,40,0.15)]"
                      : "bg-white/[0.03] border-white/10"
                  }`}>
                    <p className="text-white/50 text-sm font-medium mb-1">{pkg.name}</p>
                    <div className="mb-1">
                      <span className="text-[42px] font-bold text-white leading-none">{pkg.price}</span>
                      <span className="text-white/40 text-sm ml-1">{pkg.period}</span>
                    </div>
                    <p className="text-white/30 text-[12px] mb-6">{pkg.commitment}</p>

                    <ul className="space-y-3 mb-6 flex-grow">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                          <span className={`text-sm ${f.includes("fee") ? "text-white/30" : "text-white/60"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {pkg.cancellation && (
                      <p className="text-[11px] text-white/25 mb-5 border-t border-white/10 pt-4">⚠ {pkg.cancellation}</p>
                    )}

                    <Link
                      href={`/checkout?plan=${pkg.planKey}`}
                      className={`w-full py-3 rounded-xl text-center text-sm font-semibold transition-all duration-300 ${
                        pkg.popular
                          ? "bg-accent-primary text-white hover:bg-accent-hover"
                          : "border border-white/20 text-white hover:border-accent-primary hover:text-accent-primary"
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS */}
      <section className="bg-[#111] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight">Our Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-accent-primary/40 transition-all duration-300"
              >
                <span className="text-[40px] font-bold text-accent-primary/20 leading-none block mb-4">{step.step}</span>
                <h3 className="font-semibold text-white text-[16px] mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                {i < service.process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-accent-primary/30 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[700px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary leading-tight">Frequently Asked Questions</h2>
          </motion.div>

          <div>
            {service.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <AccordionItem question={faq.q} answer={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="text-[28px] font-bold text-text-primary">Related Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((rel, i) => {
              const RelIcon = rel.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  {rel.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-accent-primary text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap shadow-md">
                      Most Popular
                    </div>
                  )}
                  <Link
                    href={`/services/${rel.slug}`}
                    className={`group bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.08)] hover:-translate-y-1 border-2 ${
                      rel.popular
                        ? "border-accent-primary shadow-[0_4px_24px_rgba(240,100,40,0.15)]"
                        : "border-transparent hover:border-accent-primary/40"
                    }`}
                  >
                    <div className={`relative h-36 w-full bg-gradient-to-br ${rel.gradient} flex items-center justify-center`}>
                      <div className={`w-16 h-16 rounded-2xl ${rel.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <RelIcon className={`w-8 h-8 ${rel.iconColor}`} />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow border-t border-border">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-2">{rel.tag}</p>
                      <h3 className="text-[19px] font-bold text-text-primary leading-tight mb-3">{rel.title}</h3>
                      <p className="text-[13px] text-text-secondary leading-relaxed flex-grow mb-5">{rel.result}</p>
                      <div className={`flex items-center gap-2 rounded-lg px-4 py-2.5 transition-all duration-300 ${
                        rel.popular
                          ? "bg-accent-primary text-white group-hover:bg-accent-hover"
                          : "bg-accent-primary/5 text-accent-primary border border-accent-primary/20 group-hover:bg-accent-primary group-hover:text-white group-hover:border-accent-primary"
                      }`}>
                        <span className="text-sm font-semibold flex-1">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-8 text-center">
            <Link href="/services" className="text-sm text-text-muted hover:text-accent-primary transition-colors">
              ← View all services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary leading-tight mb-4">
              Ready to get started with {service.title}?
            </h2>
            <p className="text-text-secondary mb-8">Book a free 30-minute strategy call. No pitch, no pressure — just an honest conversation about what will work for your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Book Free Strategy Call</Link>
              <a href="tel:+16479512786" className="flex items-center justify-center gap-2 border border-border rounded-lg px-5 py-3 text-sm font-medium text-text-secondary hover:border-accent-primary hover:text-accent-primary transition-colors">
                <Phone className="w-4 h-4" /> +1 647-951-2786
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
