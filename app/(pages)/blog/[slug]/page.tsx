"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";

// This is a template structure. Actual post content will be added via MDX files or CMS integration in future prompts. For now, create placeholder content.
export default function BlogPostTemplate() {
  return (
    <div className="flex flex-col min-h-screen bg-background-primary pt-32 pb-20 md:pt-40">
      
      {/* POST HERO */}
      <div className="max-w-[1000px] mx-auto px-6 w-full">
        <Link href="/blog" className="inline-flex items-center text-accent-primary text-sm font-medium hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
        
        <div className="flex flex-col mb-10">
          <span className="text-accent-primary text-sm uppercase tracking-wider font-semibold mb-4 block">Lead Generation</span>
          <h1 className="font-serif text-[32px] md:text-[48px] text-text-primary leading-tight mb-6">
            The Complete Lead Generation Playbook for Local Service Businesses
          </h1>
          <p className="text-[18px] text-text-secondary max-w-[800px] leading-relaxed mb-8">
            Learn the exact system we use to generate consistent, qualified leads for electricians, plumbers, HVAC companies, and other local service businesses. This is the strategy we charge thousands for, now available in full.
          </p>
          
          <div className="flex flex-wrap items-center justify-between border-t border-border pt-6 pb-2">
            <div className="flex items-center gap-6 text-sm text-text-muted mb-4 sm:mb-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-border overflow-hidden"></div>
                <span className="font-medium text-text-primary">Alex Rivera</span>
              </div>
              <span>March 15, 2024</span>
              <span>8 min read</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-text-muted">Share:</span>
              <button className="w-8 h-8 rounded-full bg-background-card border border-border flex items-center justify-center text-text-muted hover:text-accent-primary transition-colors">
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full aspect-video md:aspect-[21/9] max-h-[500px] rounded-2xl bg-[#E2DDD7] overflow-hidden mb-16 shadow-lg border border-border flex items-center justify-center">
          <span className="text-text-muted">Featured Image Placeholder</span>
        </div>
      </div>

      {/* CONTENT AND SIDEBAR */}
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col lg:flex-row gap-16 relative">
        
        {/* MAIN CONTENT AREA */}
        <div className="lg:w-2/3 w-full">
          <div className="prose prose-lg max-w-none text-text-secondary">
            {/* Placeholder Content simulating MDX / Rich Text */}
            <p>If you run a local service business, you know the drill. Some weeks your phone rings off the hook. Other weeks, it's crickets. This inconsistency makes it impossible to hire, scale, or even plan your month.</p>
            
            <p>Relying solely on word-of-mouth or neighborhood referrals worked ten years ago. Today, when a homeowner needs a plumber, an electrician, or an HVAC tech, they don't ask their neighbor-they ask Google.</p>
            
            <h2 className="font-serif text-[28px] text-text-primary mt-12 mb-6">The Three Pillars of Local Lead Generation</h2>
            
            <p>After managing marketing for over 150 local service businesses across North America, we've identified that the most successful companies don't rely on a single channel. They use an integrated "Three Pillar" system.</p>
            
            <h3 className="font-serif text-[22px] text-text-primary mt-8 mb-4">1. Local Search Dominance (High Intent)</h3>
            <p>This is capturing people who have a problem right now and need it fixed immediately. They are searching for terms like "emergency plumber near me" or "ac repair open now".</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Google Local Service Ads (LSAs):</strong> The absolute best ROI for trades. You only pay when a qualified lead calls you.</li>
              <li><strong>Google Search Ads:</strong> Used to capture overflow traffic and specific high-ticket services that LSAs might miss.</li>
              <li><strong>Google Business Profile SEO:</strong> Ranking in the "Map Pack" (the top 3 local results) is critical for long-term free leads.</li>
            </ul>

            <blockquote className="border-l-4 border-accent-primary pl-6 my-8 italic text-lg text-text-primary">
              "Companies that dominate the Google Map Pack capture 68% of all local search traffic for their industry."
            </blockquote>
            
            <h3 className="font-serif text-[22px] text-text-primary mt-8 mb-4">2. Social Media and Brand Awareness (Medium Intent)</h3>
            <p>Not everyone needs an electrician right now. But they might need one in three months when they renovate their kitchen. Social media keeps you top-of-mind so when that time comes, they call you, not your competitor.</p>
            
            <div className="bg-background-card border border-border rounded-xl p-6 my-8">
              <p className="font-mono text-sm">Pro Tip: Before-and-after videos of your work perform exceptionally well on platforms like Facebook and Instagram. They provide instant visual proof of your competence.</p>
            </div>

            <h2 className="font-serif text-[28px] text-text-primary mt-12 mb-6">Implementing the System</h2>
            <p>Building this system takes time. If you try to do everything at once, you will get overwhelmed and fail. Here is the exact order of operations we recommend for implementing this playbook:</p>
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li><strong>Optimize your website for conversions:</strong> Don't drive traffic to a leaky bucket. Make sure your site loads fast on mobile and has clear call-to-actions.</li>
              <li><strong>Launch Google Local Service Ads:</strong> Get through the background check process ASAP. This is your fastest path to ROI.</li>
              <li><strong>Dial in your Google Business Profile:</strong> Set up a system to automatically request reviews from satisfied customers.</li>
            </ol>
            
            <p>The businesses that win in the long term are the ones that stop treating marketing as an expense and start treating it as a predictable acquisition system.</p>
          </div>
          
          <div className="border-t border-border mt-16 pt-10">
            <h3 className="font-serif text-[24px] text-text-primary mb-6">About the Author</h3>
            <div className="bg-background-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-20 h-20 rounded-full bg-border flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-lg text-text-primary">Alex Rivera</h4>
                <p className="text-sm text-accent-primary mb-3">Founder and Lead Strategist</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Alex has spent the last decade building digital marketing systems specifically for local service businesses. He founded this agency after seeing too many trades get ripped off by generic marketing agencies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR (Desktop Only) */}
        <div className="hidden lg:block lg:w-1/3 relative">
          <div className="sticky top-32">
            
            {/* Table of Contents */}
            <div className="bg-background-secondary rounded-2xl p-6 mb-8">
              <h4 className="font-serif text-lg text-text-primary mb-4 border-b border-border pb-2">Table of Contents</h4>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="hover:text-accent-primary cursor-pointer transition-colors">The Three Pillars of Local Lead Gen</li>
                <li className="pl-4 hover:text-accent-primary cursor-pointer transition-colors">1. Local Search Dominance</li>
                <li className="pl-4 hover:text-accent-primary cursor-pointer transition-colors">2. Social Media and Brand Awareness</li>
                <li className="hover:text-accent-primary cursor-pointer transition-colors">Implementing the System</li>
              </ul>
            </div>

            {/* Related Sidebar */}
            <div className="bg-background-card border border-border rounded-2xl p-6">
              <h4 className="font-serif text-lg text-text-primary mb-4">Related Articles</h4>
              <div className="space-y-4">
                <Link href="#" className="block group">
                  <span className="text-xs text-accent-primary uppercase font-medium mb-1 block">Google Ads</span>
                  <p className="text-sm text-text-primary group-hover:text-accent-primary transition-colors font-medium">Google Local Service Ads vs Google Search Ads: Which Should You Use?</p>
                </Link>
                <div className="w-full h-px bg-border"></div>
                <Link href="#" className="block group">
                  <span className="text-xs text-accent-primary uppercase font-medium mb-1 block">Lead Generation</span>
                  <p className="text-sm text-text-primary group-hover:text-accent-primary transition-colors font-medium">5 Mistakes Local Service Businesses Make With Lead Generation</p>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* BOTTOM RELATED POSTS & CTA */}
      <div className="w-full bg-background-secondary py-20 mt-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h3 className="font-serif text-[32px] text-text-primary text-center mb-12">Read Next</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Placeholder Related Cards */}
            {[1, 2, 3].map((i) => (
              <Link href="#" key={i} className="bg-background-card border border-border rounded-xl overflow-hidden group hover:border-accent-primary transition-colors">
                <div className="aspect-video bg-[#E0EFF5]"></div>
                <div className="p-5">
                  <span className="text-xs text-accent-primary uppercase font-semibold block mb-2">Category</span>
                  <h4 className="font-serif text-lg text-text-primary group-hover:text-accent-primary transition-colors leading-tight mb-2">Another related article title goes here</h4>
                  <p className="text-sm text-text-muted">5 min read</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="bg-accent-primary/10 border border-accent-primary/20 rounded-2xl p-10 text-center max-w-[800px] mx-auto">
            <h3 className="font-serif text-[28px] text-text-primary mb-4">Ready to implement this system?</h3>
            <p className="text-text-secondary mb-8">Stop guessing with your marketing. Let our team build a predictable lead generation engine for your business.</p>
            <Link href="/contact" className="btn-primary inline-block">Book a Free Strategy Call</Link>
          </div>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
