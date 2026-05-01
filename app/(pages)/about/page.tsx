"use client";

import { motion } from "framer-motion";
import { Briefcase, Camera } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import CTABanner from "@/components/sections/CTABanner";
import PageHero from "@/components/ui/PageHero";

const WHY_CHOOSE_US = [
  {
    num: "01",
    title: "We Only Work With Local Businesses",
    description: "We are not a generalist agency trying to serve everyone. Our entire system is built around the specific needs of trades, restaurants, and real estate.",
  },
  {
    num: "02",
    title: "Full Service, Not Just One Thing",
    description: "From website to ads to video to social media, we handle everything under one roof so your marketing is consistent and connected.",
  },
  {
    num: "03",
    title: "We Track Results, Not Vanity Metrics",
    description: "Clicks and impressions do not pay bills. We focus on leads, calls, bookings, and revenue. Every report we send is tied to real business outcomes.",
  },
  {
    num: "04",
    title: "Fast Setup, No Long Term Contracts",
    description: "We get your campaigns live quickly and we earn your business every month. No locking you into 12 month contracts before you have seen any results.",
  },
];

const TEAM = [
  {
    name: "Alex Rivera",
    role: "Founder and Lead Strategist",
    bio: "10 years in digital marketing with a focus on local service businesses. Built this agency from the ground up after seeing trades get ignored by mainstream agencies.",
  },
  {
    name: "Jamie Chen",
    role: "Head of Paid Advertising",
    bio: "Certified Google and Meta Ads specialist. Manages over a million dollars in ad spend annually for local businesses across North America.",
  },
  {
    name: "Marcus Webb",
    role: "Lead Videographer",
    bio: "Commercial video producer who specializes in brand storytelling for local businesses, restaurants, and real estate professionals.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <PageHero
        label="About Us"
        title="We Are a Marketing Agency Built"
        titleAccent="for Local Businesses"
        subtitle="We started this agency because we saw too many great local businesses being ignored by generic marketing agencies that did not understand their world. We fix that."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* SECTION 2 - OUR STORY */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[780px] mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <SectionLabel>Our Story</SectionLabel>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[30px] md:text-[38px] font-bold text-text-primary leading-tight mb-10"
          >
            Built by Marketers Who Actually Understand Trades and Local Service
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-6 text-[17px] text-text-secondary leading-relaxed text-left sm:text-center"
          >
            <p>
              We started working with local service businesses and quickly realized that most marketing agencies treat them as an afterthought. Cookie cutter websites, generic ads, and zero understanding of how these businesses actually operate.
            </p>
            <p>
              So we built a specialized agency focused entirely on home service companies, restaurants, and real estate professionals. Every strategy we use is tested and proven in these specific industries.
            </p>
            <p>
              Today we manage marketing for businesses across Canada and the United States, helping them generate consistent leads, build their brand online, and grow revenue month over month.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - WHY CHOOSE US */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <SectionLabel>Why Choose Us</SectionLabel>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[30px] md:text-[38px] font-bold text-text-primary leading-tight mb-4"
            >
              What Makes Us Different From Every Other Agency
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[17px] text-text-secondary max-w-[560px]"
            >
              We do not work with every business. We specialize so we can deliver better results for the ones we do.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {WHY_CHOOSE_US.map((card, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="bg-background-card border border-border rounded-2xl p-7 hover:border-accent-primary transition-colors duration-300"
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

      {/* SECTION 4 - MEET THE TEAM */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <SectionLabel>Our Team</SectionLabel>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[30px] md:text-[38px] font-bold text-text-primary leading-tight"
            >
              The People Behind Your Growth
            </motion.h2>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="bg-background-card border border-border rounded-2xl overflow-hidden text-center flex flex-col"
              >
                {/* Replace placeholder photos with actual team photos. Update names and bios with real team information. */}
                <div className="w-full aspect-square bg-[#E2DDD7] flex items-center justify-center">
                  <span className="text-sm text-text-muted">Photo</span>
                </div>
                
                <div className="p-5 flex flex-col flex-grow items-center">
                  <h3 className="font-semibold text-[17px] text-text-primary">{member.name}</h3>
                  <span className="text-sm text-text-muted mt-1">{member.role}</span>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed flex-grow">
                    {member.bio}
                  </p>
                  
                  <div className="flex items-center space-x-4 mt-6">
                    <button className="text-text-muted hover:text-accent-primary transition-colors" title="LinkedIn">
                      <Briefcase className="w-4 h-4" />
                    </button>
                    <button className="text-text-muted hover:text-accent-primary transition-colors" title="Instagram">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - CTA BANNER */}
      <CTABanner />

    </div>
  );
}
