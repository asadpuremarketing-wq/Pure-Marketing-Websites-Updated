"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

const BLOG_POSTS = [
  {
    id: 1,
    category: "Restaurant Marketing",
    title: "How GTA Restaurants Can Fill More Tables Using Digital Marketing in 2024",
    excerpt: "The restaurant industry in Greater Toronto is one of the most competitive markets in Canada. Here's the exact digital marketing playbook we use to help local restaurants stand out, get found, and fill seats consistently.",
    author: "Asad Saif",
    date: "April 22, 2024",
    readTime: "11 min read",
    slug: "gta-restaurant-marketing-guide",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    color: "#FEF3E2"
  }
];

const CATEGORIES = ["All", "Restaurant Marketing"];

export default function BlogPage() {
  const post = BLOG_POSTS[0];

  return (
    <div className="flex flex-col min-h-screen">

      <PageHero
        label="Blog"
        title="Marketing Insights for"
        titleAccent="Local Businesses"
        subtitle="Strategies, tips, and case studies to help you grow your business."
        breadcrumbs={[{ label: "Blog" }]}
      />

      {/* FEATURED POST */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-border"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col relative pl-6"
            >
              <div className="absolute left-0 top-0 w-[2px] h-full bg-accent-primary" />

              <span className="text-accent-primary uppercase text-xs tracking-wider font-semibold mb-3 block">{post.category}</span>
              <h2 className="text-[28px] md:text-[32px] font-bold text-text-primary leading-tight mb-4">{post.title}</h2>
              <p className="text-[16px] text-text-secondary leading-relaxed mb-6 max-w-[500px]">{post.excerpt}</p>

              <div className="flex gap-6 text-sm text-text-muted mb-8">
                <span>By {post.author}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              <Link href={`/blog/${post.slug}`} className="btn-primary self-start">Read Full Article</Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ALL POSTS GRID */}
      <section className="bg-background-primary py-20 flex-grow">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[38px] font-bold text-text-primary text-center leading-tight mb-12"
          >
            Latest Articles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((p) => (
              <Link href={`/blog/${p.slug}`} key={p.id} className="group flex flex-col h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-background-card border border-border rounded-2xl overflow-hidden cursor-pointer group-hover:border-accent-primary group-hover:shadow-lg transition-all duration-300 flex flex-col h-full transform group-hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-accent-primary text-xs uppercase font-semibold tracking-wider mb-3">{p.category}</span>
                    <h3 className="font-serif text-[18px] text-text-primary leading-tight mb-3 group-hover:text-accent-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-text-secondary line-clamp-2 mb-6 flex-grow">{p.excerpt}</p>

                    <div className="flex justify-between items-center text-xs text-text-muted mt-auto pt-4 border-t border-border">
                      <span>By {p.author}</span>
                      <span>{p.readTime}</span>
                    </div>
                    <span className="text-xs text-text-muted/60 mt-2 block">Posted {p.date}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SIGNUP */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[600px] mx-auto bg-background-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-sm">
            <h2 className="text-[28px] font-bold text-text-primary mb-3">Get New Articles Every Week</h2>
            <p className="text-sm text-text-secondary mb-8">
              Subscribe to our email list. New marketing strategies and case studies delivered to your inbox every Friday.
            </p>
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
