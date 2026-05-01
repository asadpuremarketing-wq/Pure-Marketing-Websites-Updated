"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

// Note: Add blog post data to a separate data file (lib/blogPosts.ts) for easier management and filtering.
const BLOG_POSTS = [
  {
    id: 1,
    category: "Lead Generation",
    title: "The Complete Lead Generation Playbook for Local Service Businesses",
    excerpt: "The exact system we use to generate consistent qualified leads. Learn our proven process used by 150+ local businesses.",
    author: "Alex Rivera",
    date: "March 15, 2024",
    readTime: "8 min read",
    slug: "complete-lead-generation-playbook",
    color: "#E0EFF5"
  },
  {
    id: 2,
    category: "Lead Generation",
    title: "Google Local Service Ads vs Google Search Ads: Which Should You Use?",
    excerpt: "An in-depth comparison of the two most effective Google advertising options for local service businesses. When to use each one.",
    author: "Jamie Chen",
    date: "March 10, 2024",
    readTime: "6 min read",
    slug: "local-service-ads-vs-search-ads",
    color: "#E0EFF5"
  },
  {
    id: 3,
    category: "Lead Generation",
    title: "5 Mistakes Local Service Businesses Make With Lead Generation",
    excerpt: "We analyzed 50+ local service businesses. These are the five most common mistakes costing them leads and revenue every month.",
    author: "Alex Rivera",
    date: "March 5, 2024",
    readTime: "7 min read",
    slug: "5-lead-generation-mistakes",
    color: "#E0EFF5"
  },
  {
    id: 4,
    category: "Video Marketing",
    title: "How Professional Video Increased Sales by 312% for This Electrician",
    excerpt: "Case study breakdown. How we used before and after project videos and a brand story video to increase leads for Bright Spark Electric.",
    author: "Marcus Webb",
    date: "February 28, 2024",
    readTime: "5 min read",
    slug: "video-case-study-electrician",
    color: "#F0EBF5"
  },
  {
    id: 5,
    category: "Video Marketing",
    title: "The 5 Types of Videos Every Local Business Needs",
    excerpt: "From brand videos to service explanations to customer testimonials. Here are the five video types that drive the most leads.",
    author: "Marcus Webb",
    date: "February 20, 2024",
    readTime: "7 min read",
    slug: "5-types-of-videos",
    color: "#F0EBF5"
  },
  {
    id: 6,
    category: "Video Marketing",
    title: "Video Content for Real Estate: Getting More Showings and Faster Sales",
    excerpt: "Property tour videos, agent branding videos, and market update videos. How real estate professionals use video to dominate their market.",
    author: "Marcus Webb",
    date: "February 15, 2024",
    readTime: "6 min read",
    slug: "video-content-real-estate",
    color: "#F0EBF5"
  },
  {
    id: 7,
    category: "Social Media",
    title: "Daily Social Media Content Ideas for Local Service Businesses",
    excerpt: "Never run out of content ideas. 30 days of post ideas specifically for electricians, plumbers, HVAC, painters, and other trades.",
    author: "Jamie Chen",
    date: "February 10, 2024",
    readTime: "9 min read",
    slug: "daily-social-media-content",
    color: "#F9EFE6"
  },
  {
    id: 8,
    category: "Social Media",
    title: "How to Build a Following on Instagram as a Local Service Business",
    excerpt: "Growth from zero to 10,000 followers. The strategy we use for restaurant clients works for service businesses too.",
    author: "Jamie Chen",
    date: "February 5, 2024",
    readTime: "8 min read",
    slug: "build-following-instagram",
    color: "#F9EFE6"
  },
  {
    id: 9,
    category: "Social Media",
    title: "TikTok for Local Businesses: Should You Be There?",
    excerpt: "Is TikTok worth your time as a local service business? We tested it for 6 months and here is what we learned.",
    author: "Jamie Chen",
    date: "January 30, 2024",
    readTime: "5 min read",
    slug: "tiktok-for-local-businesses",
    color: "#F9EFE6"
  }
];

const CATEGORIES = ["All", "Lead Generation", "Video Marketing", "Social Media", "Google Ads", "Web Design"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      
      <PageHero
        label="Blog"
        title="Marketing Insights for"
        titleAccent="Local Businesses"
        subtitle="Strategies, tips, and case studies to help you grow your business. Updated weekly with actionable advice."
        breadcrumbs={[{ label: "Blog" }]}
      />

      {/* Search bar */}
      <section className="bg-background-primary py-8 border-b border-border">
        <div className="max-w-[700px] mx-auto px-6 flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full relative max-w-[440px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-border rounded-full py-3 pl-12 pr-4 text-sm text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - FEATURED POST */}
      {!searchQuery && activeCategory === "All" && (
        <section className="bg-background-secondary py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative w-full aspect-video rounded-2xl bg-[#E2DDD7] flex items-center justify-center shadow-lg border border-border overflow-hidden">
                <span className="text-sm text-text-muted">Featured Article Image</span>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col relative pl-6">
                <div className="absolute left-0 top-0 w-[2px] h-full bg-accent-primary"></div>
                
                <span className="text-accent-primary uppercase text-xs tracking-wider font-semibold mb-3 block">Marketing Strategy</span>
                <h2 className="text-[32px] font-bold text-text-primary leading-tight mb-4">The Complete Lead Generation Playbook for Local Service Businesses</h2>
                <p className="text-[16px] text-text-secondary leading-relaxed mb-6 max-w-[500px]">
                  Learn the exact system we use to generate consistent, qualified leads for electricians, plumbers, HVAC companies, and other local service businesses. This is the strategy we charge thousands for, now available in full.
                </p>
                
                <div className="flex gap-6 text-sm text-text-muted mb-8">
                  <span>By Alex Rivera</span>
                  <span>March 15, 2024</span>
                  <span>8 min read</span>
                </div>
                
                <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="btn-primary self-start">Read Full Article</Link>
              </motion.div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 3 - BLOG POST GRID */}
      <section className="bg-background-primary py-20 flex-grow">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[38px] font-bold text-text-primary text-center leading-tight mb-8">
            {searchQuery ? "Search Results" : "Latest Articles"}
          </motion.h2>

          {!searchQuery && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm transition-colors duration-300 border ${
                    activeCategory === cat 
                      ? 'bg-accent-primary border-accent-primary text-white' 
                      : 'bg-background-card border-border text-text-secondary hover:border-accent-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col h-full">
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="bg-background-card border border-border rounded-2xl overflow-hidden cursor-pointer group-hover:border-accent-primary group-hover:shadow-lg transition-all duration-300 flex flex-col h-full transform group-hover:-translate-y-1"
                  >
                    <div className="relative h-3 w-full" style={{ backgroundColor: post.color }} />
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-accent-primary text-xs uppercase font-semibold tracking-wider mb-3">{post.category}</span>
                      <h3 className="font-serif text-[18px] text-text-primary leading-tight mb-3 group-hover:text-accent-primary transition-colors">{post.title}</h3>
                      <p className="text-sm text-text-secondary line-clamp-2 mb-6 flex-grow">{post.excerpt}</p>
                      
                      <div className="flex justify-between items-center text-xs text-text-muted mt-auto pt-4 border-t border-border">
                        <span>By {post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-xs text-text-muted/60 mt-2 block">Posted {post.date}</span>
                    </div>
                  </motion.div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-text-secondary">
                No articles found matching your search.
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - NEWSLETTER SIGNUP */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[600px] mx-auto bg-background-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-sm">
            <h2 className="text-[28px] font-bold text-text-primary mb-3">Get New Articles Every Week</h2>
            <p className="text-sm text-text-secondary mb-8">
              Subscribe to our email list. New marketing strategies and case studies delivered to your inbox every Friday.
            </p>
            
            {/* Note: Connect to email service (ConvertKit, Mailchimp, or similar) */}
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                required
                placeholder="your@email.com" 
                className="flex-1 bg-white border border-border rounded-lg px-4 py-3 text-base text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors" 
              />
              <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
            </form>
            
            <p className="text-xs text-text-muted mt-4">We respect your privacy. No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
