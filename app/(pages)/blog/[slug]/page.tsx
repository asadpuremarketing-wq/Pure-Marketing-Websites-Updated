import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import { ALL_POSTS, getPost } from "@/lib/blog-posts";

import RestaurantsContent from "@/lib/blog-content/restaurants";
import ElectriciansContent from "@/lib/blog-content/electricians";
import PlumbersContent from "@/lib/blog-content/plumbers";
import HvacContent from "@/lib/blog-content/hvac";
import PaintersContent from "@/lib/blog-content/painters";
import GeneralContractorsContent from "@/lib/blog-content/general-contractors";
import RealEstateContent from "@/lib/blog-content/real-estate";
import LocksmithsContent from "@/lib/blog-content/locksmiths";
import LandscapersContent from "@/lib/blog-content/landscapers";

const BASE = "https://puremarketing.ca";

const BLOG_CONTENT: Record<string, React.ComponentType> = {
  "gta-restaurant-marketing-guide": RestaurantsContent,
  "how-electricians-get-more-leads": ElectriciansContent,
  "plumbing-business-emergency-calls": PlumbersContent,
  "hvac-year-round-leads": HvacContent,
  "painting-company-marketing": PaintersContent,
  "general-contractor-90-day-plan": GeneralContractorsContent,
  "real-estate-agent-video-marketing": RealEstateContent,
  "locksmith-google-ads-strategy": LocksmithsContent,
  "landscaping-company-lead-generation": LandscapersContent,
};

export function generateStaticParams() {
  return ALL_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const ContentComponent = BLOG_CONTENT[params.slug];
  if (!ContentComponent) notFound();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE}/blog/${post.slug}`,
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      "@id": `${BASE}/#founder`,
    },
    publisher: {
      "@id": `${BASE}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script id={`blog-schema-${post.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      {/* POST HERO */}
      <section className="relative bg-[#111] pt-[100px] pb-14 md:pt-[120px] md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_50%,_rgba(240,100,40,0.08),_transparent)]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: "linear-gradient(to top, #ffffff, transparent)" }} />

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 w-full">
          <Link href="/blog" className="inline-flex items-center text-accent-primary text-sm font-medium hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>

          <span className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4 block">{post.category}</span>
          <h1 className="font-serif text-[32px] md:text-[48px] text-white leading-tight mb-6 max-w-[800px]">
            {post.title}
          </h1>
          <p className="text-[17px] text-white/60 max-w-[680px] leading-relaxed mb-10">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center border-t border-white/10 pt-6">
            <div className="flex items-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">AS</div>
                <span className="font-medium text-white/80">{post.author}</span>
              </div>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-background-primary pb-20">
        <div className="max-w-[1000px] mx-auto px-6 w-full pt-12">
          <div className="relative w-full aspect-video md:aspect-[21/9] max-h-[500px] rounded-2xl overflow-hidden mb-16 shadow-lg border border-border">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 1000px) 100vw, 1000px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* CONTENT + SIDEBAR */}
        <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col lg:flex-row gap-16 relative pt-4">

          {/* MAIN CONTENT */}
          <div className="lg:w-2/3 w-full">
            <div className="prose prose-lg max-w-none text-text-secondary">
              <ContentComponent />
            </div>

            {/* CTA BOX */}
            <div className="mt-14 bg-accent-primary/10 border border-accent-primary/20 rounded-2xl p-8 md:p-10">
              <h3 className="font-serif text-[24px] text-text-primary mb-3">{post.ctaTitle}</h3>
              <p className="text-text-secondary mb-6">{post.ctaDesc}</p>
              <Link href="/contact" className="btn-primary inline-block">Book a Free Strategy Call</Link>
            </div>

            {/* AUTHOR */}
            <div className="border-t border-border mt-14 pt-10">
              <h3 className="font-serif text-[24px] text-text-primary mb-6">About the Author</h3>
              <div className="bg-background-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="w-20 h-20 rounded-full bg-accent-primary flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">AS</div>
                <div>
                  <h4 className="font-semibold text-lg text-text-primary">Asad Saif</h4>
                  <p className="text-sm text-accent-primary mb-3">Founder, Pure Marketing</p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Asad founded Pure Marketing after seeing local businesses in Hamilton and the GTA lose customers to competitors with better online presence. Pure Marketing works exclusively with local service businesses to build marketing systems that generate consistent, measurable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="hidden lg:block lg:w-1/3 relative">
            <div className="sticky top-32">

              {/* Table of Contents */}
              <div className="bg-background-secondary rounded-2xl p-6 mb-8">
                <h4 className="font-serif text-lg text-text-primary mb-4 border-b border-border pb-2">Table of Contents</h4>
                <ul className="space-y-3 text-sm text-text-secondary">
                  {post.toc.map((item) => (
                    <li key={item} className="hover:text-accent-primary cursor-pointer transition-colors">{item}</li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-background-card border border-accent-primary/30 rounded-2xl p-6 mb-8">
                <p className="text-xs text-accent-primary uppercase font-semibold tracking-wider mb-2">Free Strategy Call</p>
                <h4 className="font-serif text-lg text-text-primary mb-3">See What&apos;s Possible for Your Business</h4>
                <p className="text-sm text-text-secondary mb-5 leading-relaxed">We will review your current online presence and show you where the biggest lead opportunities are.</p>
                <Link href="/contact" className="btn-primary text-sm w-full text-center block">Book Free Audit</Link>
              </div>

              {/* Stats */}
              <div className="bg-background-secondary rounded-2xl p-6">
                <h4 className="font-serif text-lg text-text-primary mb-4">Key Stats</h4>
                <div className="space-y-4">
                  {post.stats.map((stat, i) => (
                    <div key={i} className={i < post.stats.length - 1 ? "border-b border-border pb-4" : ""}>
                      <p className="text-2xl font-bold text-accent-primary">{stat.value}</p>
                      <p className="text-xs text-text-muted mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
