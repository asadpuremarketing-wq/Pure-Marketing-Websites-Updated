"use client";

import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/sections/CTABanner";

export default function BlogPostPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-primary pt-32 pb-20 md:pt-40">

      {/* POST HERO */}
      <div className="max-w-[1000px] mx-auto px-6 w-full">
        <Link href="/blog" className="inline-flex items-center text-accent-primary text-sm font-medium hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>

        <div className="flex flex-col mb-10">
          <span className="text-accent-primary text-sm uppercase tracking-wider font-semibold mb-4 block">Restaurant Marketing</span>
          <h1 className="font-serif text-[32px] md:text-[48px] text-text-primary leading-tight mb-6">
            How GTA Restaurants Can Fill More Tables Using Digital Marketing in 2024
          </h1>
          <p className="text-[18px] text-text-secondary max-w-[800px] leading-relaxed mb-8">
            The restaurant industry in Greater Toronto is one of the most competitive markets in Canada. Here&apos;s the exact digital marketing playbook we use to help local restaurants stand out, get found, and fill seats consistently — even against big chains.
          </p>

          <div className="flex flex-wrap items-center justify-between border-t border-border pt-6 pb-2">
            <div className="flex items-center gap-6 text-sm text-text-muted mb-4 sm:mb-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">AS</div>
                <span className="font-medium text-text-primary">Asad Saif</span>
              </div>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> April 22, 2024</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 11 min read</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-text-muted">Share:</span>
              <button className="w-8 h-8 rounded-full bg-background-card border border-border flex items-center justify-center text-text-muted hover:text-accent-primary transition-colors">
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-video md:aspect-[21/9] max-h-[500px] rounded-2xl overflow-hidden mb-16 shadow-lg border border-border">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85"
            alt="Busy restaurant dining room with warm lighting"
            fill
            sizes="(max-width: 1000px) 100vw, 1000px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* CONTENT + SIDEBAR */}
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col lg:flex-row gap-16 relative">

        {/* MAIN CONTENT */}
        <div className="lg:w-2/3 w-full">
          <div className="prose prose-lg max-w-none text-text-secondary">

            <p className="text-[17px] leading-relaxed">
              Walk down any major street in Mississauga, Brampton, Etobicoke, or downtown Toronto and you&apos;ll pass dozens of restaurants competing for the same lunch crowd. The GTA is home to over 15,000 food and beverage businesses — one of the highest concentrations in North America. In that kind of environment, the restaurants that win aren&apos;t necessarily the ones with the best food. They&apos;re the ones people can <em>find</em>.
            </p>

            <p className="text-[17px] leading-relaxed">
              At Pure Marketing, we&apos;ve worked with restaurants across Hamilton, Mississauga, and the broader GTA. What we&apos;ve learned is that most independent restaurants are invisible online. No Google presence, inconsistent social media, and zero paid advertising. Meanwhile, the chains spending millions on national campaigns are capturing the same customers you could be getting with a $1,500/month budget and the right strategy.
            </p>

            <p className="text-[17px] leading-relaxed">
              This guide covers the exact digital marketing system we build for restaurant clients — from getting found on Google Maps to turning Instagram followers into reservations.
            </p>

            {/* SECTION 1 */}
            <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">1. Your Google Business Profile Is Your Most Valuable Marketing Asset</h2>

            <p>
              When someone types &ldquo;best brunch near Scarborough&rdquo; or &ldquo;halal restaurant Brampton&rdquo; into Google, the first thing they see isn&apos;t your website. It&apos;s the Map Pack — the three local listings that appear with photos, reviews, hours, and a call button. If you&apos;re not in that top three, you&apos;re effectively invisible to high-intent customers.
            </p>

            <p>
              Getting into the Map Pack requires a fully optimized Google Business Profile. That means:
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li><strong>Complete and consistent NAP data</strong> — your Name, Address, and Phone number must be identical across every platform (Google, Yelp, Zomato, your website). Inconsistency confuses Google&apos;s algorithm and drops your ranking.</li>
              <li><strong>Category selection</strong> — choose the most specific primary category possible. &ldquo;Indian Restaurant&rdquo; outperforms &ldquo;Restaurant&rdquo; for targeted searches in Brampton and Mississauga where those searches are competitive and volume is high.</li>
              <li><strong>Weekly photo uploads</strong> — restaurants with 100+ photos on their GBP get 520% more calls than those with fewer than 10. Photos of your dishes, interior, and team signal an active, credible business to Google.</li>
              <li><strong>Google Posts</strong> — treat your GBP like a social feed. Post weekly specials, events, and new menu items. This keeps your profile active and gives Google fresh signals.</li>
              <li><strong>Review generation system</strong> — we&apos;ll cover this in depth below, but getting a consistent flow of 4 and 5-star reviews is the single most powerful ranking factor for local search.</li>
            </ul>

            <blockquote className="border-l-4 border-accent-primary pl-6 my-10 italic text-lg text-text-primary bg-accent-primary/5 py-4 pr-4 rounded-r-xl">
              &ldquo;Restaurants in the Google Map Pack top 3 capture roughly 70% of all clicks for that search query. Position 4 barely gets noticed.&rdquo;
            </blockquote>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-10 border border-border shadow">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80"
                alt="Restaurant interior with full tables"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            {/* SECTION 2 */}
            <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">2. The Review Strategy That Actually Works</h2>

            <p>
              GTA diners are among the most review-conscious consumers in the country. Before trying a new restaurant, the majority will check Google or Yelp. A restaurant with 200 reviews averaging 4.4 stars will almost always beat one with 30 reviews at 4.8 — because volume signals legitimacy. Here&apos;s the review system we implement for clients:
            </p>

            <div className="bg-background-card border border-border rounded-xl p-7 my-8 space-y-5">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <p className="font-semibold text-text-primary mb-1">Ask at the right moment</p>
                  <p className="text-sm text-text-secondary">Train your front-of-house staff to ask for a review right after a compliment — &ldquo;We&apos;re so glad you enjoyed it! If you have a moment, a Google review means the world to us.&rdquo; The moment a guest expresses satisfaction is the highest-conversion window.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <p className="font-semibold text-text-primary mb-1">QR code on receipts and table cards</p>
                  <p className="text-sm text-text-secondary">A printed QR code linking directly to your Google review page removes all friction. We design these for clients as part of onboarding. Placed on the check presenter, it gets a 12–18% conversion rate in our experience.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <p className="font-semibold text-text-primary mb-1">Follow-up SMS (for online orders)</p>
                  <p className="text-sm text-text-secondary">If you use an online ordering platform that captures customer phone numbers, send an automated SMS 1 hour after delivery: &ldquo;Thanks for ordering from [Name]! How was your meal? [⭐ Leave a review]&rdquo;. We integrate this with most POS and ordering systems.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary font-bold text-sm flex-shrink-0">4</div>
                <div>
                  <p className="font-semibold text-text-primary mb-1">Respond to every review</p>
                  <p className="text-sm text-text-secondary">Google&apos;s algorithm rewards businesses that engage with reviews. Respond to every review — positive and negative — within 48 hours. For negative reviews, respond professionally and invite the guest to reconnect directly. This shows future customers you care.</p>
                </div>
              </div>
            </div>

            {/* SECTION 3 */}
            <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">3. Social Media for GTA Restaurants: What Actually Drives Reservations</h2>

            <p>
              Instagram and TikTok are the primary discovery channels for food in Toronto. A reel of your signature dish hitting the right hashtags can bring 50 new customers through the door that week. But most restaurants post inconsistently, use the wrong content formats, and have no strategy behind their feed.
            </p>

            <p>Here&apos;s what the highest-performing restaurant accounts in the GTA do differently:</p>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 border border-border shadow">
              <Image
                src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1000&q=80"
                alt="Food photography flat lay"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <h3 className="font-serif text-[22px] text-text-primary mt-8 mb-4">Content that converts</h3>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li><strong>Dish reveals and close-ups</strong> — simple 15-second clips of plating a dish or slicing into food outperform polished photography on both Instagram Reels and TikTok. People eat with their eyes and crave authenticity.</li>
              <li><strong>Behind-the-scenes content</strong> — showing your kitchen prep, your chefs, or your sourcing story builds emotional connection and trust. Diners in Toronto are increasingly loyal to restaurants they feel they &ldquo;know.&rdquo;</li>
              <li><strong>Special announcements with urgency</strong> — &ldquo;Friday brunch starting this weekend — only 12 tables available&rdquo; performs far better than generic promotional posts. Scarcity and time-sensitivity are powerful conversion drivers.</li>
              <li><strong>User-generated content reposts</strong> — when a customer posts about your food, repost it with permission. This is free social proof and tells your algorithm that real people engage with your restaurant.</li>
            </ul>

            <h3 className="font-serif text-[22px] text-text-primary mt-8 mb-4">Hashtag and location strategy for the GTA</h3>
            <p>
              Use hyper-local hashtags to get discovered by Torontonians actively looking for restaurants. Alongside dish-specific tags, layer in neighbourhood and city tags like <strong>#mississaugaeats</strong>, <strong>#bramptonrestaurants</strong>, <strong>#etobicokefood</strong>, <strong>#gtafoodie</strong>, and <strong>#torontorestaurants</strong>. Tag your location on every post and story. Instagram&apos;s location-based explore feed is a significant organic discovery channel for local food content.
            </p>

            {/* SECTION 4 */}
            <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">4. Meta Ads for Restaurants: The $15/Day Campaign That Fills Weekend Tables</h2>

            <p>
              Organic social media builds brand over time, but paid ads drive immediate action. For restaurants, Facebook and Instagram ads are the most cost-effective way to promote specific offers, events, or seasonal menus to people within a defined radius of your location.
            </p>

            <p>
              Here&apos;s the campaign structure we use for restaurant clients in the GTA:
            </p>

            <div className="bg-background-secondary rounded-xl p-7 my-8 border border-border">
              <h4 className="font-semibold text-text-primary mb-4">The Weekend Fill Campaign</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                <div>
                  <p className="text-accent-primary font-semibold mb-1">Objective</p>
                  <p className="text-text-secondary">Traffic or Conversions (to OpenTable / Resy booking page)</p>
                </div>
                <div>
                  <p className="text-accent-primary font-semibold mb-1">Audience</p>
                  <p className="text-text-secondary">8–12km radius around the restaurant, ages 25–55, interests: dining out, food, local events</p>
                </div>
                <div>
                  <p className="text-accent-primary font-semibold mb-1">Creative</p>
                  <p className="text-text-secondary">15-second video reel of your best-looking dish with the offer overlaid in text</p>
                </div>
                <div>
                  <p className="text-accent-primary font-semibold mb-1">Copy</p>
                  <p className="text-text-secondary">&ldquo;This Friday and Saturday at [Name]. Reserve your table before it&apos;s gone → [link]&rdquo;</p>
                </div>
                <div>
                  <p className="text-accent-primary font-semibold mb-1">Budget</p>
                  <p className="text-text-secondary">$15–$25/day running Wednesday through Friday for the upcoming weekend</p>
                </div>
                <div>
                  <p className="text-accent-primary font-semibold mb-1">Expected result</p>
                  <p className="text-text-secondary">8–25 additional covers per weekend depending on market and offer quality</p>
                </div>
              </div>
            </div>

            <p>
              The reason this works is <strong>timing and intent</strong>. People in your target demographic are already thinking about &ldquo;what should we do this weekend&rdquo; on Wednesday and Thursday. A well-placed ad that shows beautiful food and an easy booking link converts at far higher rates than awareness campaigns run mid-week without a hook.
            </p>

            {/* SECTION 5 */}
            <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">5. Your Website: The Leaky Bucket Most Restaurants Ignore</h2>

            <p>
              We see it constantly — a restaurant spends money on Google Ads or runs a successful Instagram campaign, then sends that traffic to a website built in 2018 that loads slowly on mobile, has no clear reservation button, and buries the menu behind three clicks. The marketing works; the website kills the conversion.
            </p>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-8 border border-border shadow">
              <Image
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1000&q=80"
                alt="Person browsing a restaurant website on mobile phone"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <p>A high-converting restaurant website in 2024 needs:</p>

            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li><strong>A prominent reservation/order CTA above the fold</strong> — on mobile, the first thing a visitor sees must include a &ldquo;Book a Table&rdquo; or &ldquo;Order Now&rdquo; button. Not a hero image. A call to action.</li>
              <li><strong>Fast mobile load time (&lt;3 seconds)</strong> — Google penalizes slow sites in search rankings, and users bounce within seconds. Large unoptimized images are the most common culprit for restaurant websites.</li>
              <li><strong>An accessible, attractive menu</strong> — your menu should be readable on mobile without zooming. Avoid PDF menus — they&apos;re terrible for SEO and frustrating on phones. Use an HTML or embedded menu tool.</li>
              <li><strong>Real photography</strong> — stock food photos are immediately identifiable and erode trust. A professional half-day shoot produces 20–30 hero-quality images that pay for themselves within the first month of use.</li>
              <li><strong>Google reviews embedded</strong> — displaying your actual Google review feed on your website builds immediate credibility and improves your local SEO signals simultaneously.</li>
            </ul>

            {/* SECTION 6 */}
            <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">6. Video: The Competitive Advantage Most GTA Restaurants Haven&apos;t Tapped</h2>

            <p>
              The GTA food scene is visually saturated. Every restaurant posts photos. But short-form video — specifically vertical Reels and TikToks — still has a massive organic reach advantage over still images. Restaurants that invest in even basic video production consistently outperform those that don&apos;t, both in follower growth and reservation conversion.
            </p>

            <p>
              We produce two types of video content for our restaurant clients:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
              <div className="bg-background-card border border-border rounded-xl p-6">
                <h4 className="font-semibold text-text-primary mb-2">Social Content Videos</h4>
                <p className="text-sm text-text-secondary leading-relaxed">Short 15–30 second vertical clips of dish preparation, plating reveals, and atmosphere shots. These are produced in batches — one shoot gives you 8–12 pieces of content ready to drip over several weeks. Format-optimized for Instagram Reels, TikTok, and Facebook video.</p>
              </div>
              <div className="bg-background-card border border-border rounded-xl p-6">
                <h4 className="font-semibold text-text-primary mb-2">Brand Story Video</h4>
                <p className="text-sm text-text-secondary leading-relaxed">A 90-second to 2-minute cinematic video about your restaurant&apos;s story, your team, and your food philosophy. This lives on your website homepage, your Google Business Profile, and gets used in paid ad campaigns. Builds the emotional connection that turns first-timers into regulars.</p>
              </div>
            </div>

            <blockquote className="border-l-4 border-accent-primary pl-6 my-10 italic text-lg text-text-primary bg-accent-primary/5 py-4 pr-4 rounded-r-xl">
              &ldquo;One of our restaurant clients in Hamilton saw a 40% increase in Friday and Saturday reservation requests within 6 weeks of launching a consistent Reels strategy we built for them.&rdquo;
            </blockquote>

            {/* SECTION 7 */}
            <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">Putting It All Together: A Realistic GTA Restaurant Marketing Budget</h2>

            <p>
              You don&apos;t need a $20,000/month marketing budget to compete in Toronto. You need the right channels, the right creative, and consistency. Here&apos;s what a realistic monthly marketing program looks like for an independent GTA restaurant doing $600K–$1.5M in annual revenue:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-background-secondary">
                    <th className="text-left p-4 text-text-primary font-semibold border-b border-border">Channel</th>
                    <th className="text-left p-4 text-text-primary font-semibold border-b border-border">Monthly Investment</th>
                    <th className="text-left p-4 text-text-primary font-semibold border-b border-border">Primary Goal</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-border">
                    <td className="p-4">Google Business Profile Management</td>
                    <td className="p-4">Included in management fee</td>
                    <td className="p-4">Local search ranking</td>
                  </tr>
                  <tr className="border-b border-border bg-background-secondary/30">
                    <td className="p-4">Social Media Content (posts + stories)</td>
                    <td className="p-4">$500–$800</td>
                    <td className="p-4">Brand awareness + discovery</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Meta Ads (Facebook + Instagram)</td>
                    <td className="p-4">$400–$700 (ad spend)</td>
                    <td className="p-4">Reservation and order conversions</td>
                  </tr>
                  <tr className="border-b border-border bg-background-secondary/30">
                    <td className="p-4">Video Production (quarterly shoot)</td>
                    <td className="p-4">$300–$500/mo avg</td>
                    <td className="p-4">Social content + brand story</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-text-primary">Total</td>
                    <td className="p-4 font-semibold text-accent-primary">$1,500–$2,500/mo</td>
                    <td className="p-4 font-semibold text-text-primary">8–25 new covers/week</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For a restaurant averaging $45 per cover, 20 additional weekly covers represent roughly $3,600 in incremental weekly revenue — or over $180,000 per year. The ROI math is clear.
            </p>

            {/* CONCLUSION */}
            <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">The Bottom Line</h2>

            <p>
              The GTA restaurant market rewards operators who treat digital marketing as seriously as they treat their menu. Your food might already be exceptional — but if you&apos;re invisible on Google, inconsistent on social media, and sending traffic to an outdated website, you&apos;re leaving tables empty.
            </p>

            <p>
              At Pure Marketing, we specialize exclusively in local businesses. We don&apos;t work with national brands or e-commerce companies. Our focus is helping businesses like yours — restaurants, trades, real estate professionals — build marketing systems that generate predictable, measurable results in your specific city.
            </p>

            <p>
              If you&apos;re a restaurant owner in Hamilton, Mississauga, Brampton, Etobicoke, Scarborough, or anywhere in the GTA and you want to know exactly what it would take to fill your tables more consistently, <Link href="/contact" className="text-accent-primary underline font-medium">book a free 30-minute strategy call</Link>. We&apos;ll audit your current online presence and show you where the biggest opportunities are.
            </p>

          </div>

          {/* CTA BOX */}
          <div className="mt-14 bg-accent-primary/10 border border-accent-primary/20 rounded-2xl p-8 md:p-10">
            <h3 className="font-serif text-[24px] text-text-primary mb-3">Ready to fill more tables?</h3>
            <p className="text-text-secondary mb-6">We work with restaurants across the GTA and Hamilton. Book a free 30-minute strategy call and we&apos;ll audit your online presence for free.</p>
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
                  Asad founded Pure Marketing after spending years watching local businesses in Hamilton and the GTA lose customers to competitors with better online presence — not better products. Pure Marketing works exclusively with local service businesses to build marketing systems that generate consistent, measurable growth.
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
                <li className="hover:text-accent-primary cursor-pointer transition-colors">1. Google Business Profile</li>
                <li className="hover:text-accent-primary cursor-pointer transition-colors">2. The Review Strategy</li>
                <li className="hover:text-accent-primary cursor-pointer transition-colors">3. Social Media for GTA Restaurants</li>
                <li className="hover:text-accent-primary cursor-pointer transition-colors">4. Meta Ads: The $15/Day Campaign</li>
                <li className="hover:text-accent-primary cursor-pointer transition-colors">5. Your Website</li>
                <li className="hover:text-accent-primary cursor-pointer transition-colors">6. Video Content</li>
                <li className="hover:text-accent-primary cursor-pointer transition-colors">Budget Breakdown</li>
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-background-card border border-accent-primary/30 rounded-2xl p-6 mb-8">
              <p className="text-xs text-accent-primary uppercase font-semibold tracking-wider mb-2">Free for GTA Restaurants</p>
              <h4 className="font-serif text-lg text-text-primary mb-3">Get a Free Online Presence Audit</h4>
              <p className="text-sm text-text-secondary mb-5 leading-relaxed">We&apos;ll review your Google profile, website, and social media and show you where you&apos;re losing customers.</p>
              <Link href="/contact" className="btn-primary text-sm w-full text-center block">Book Free Audit</Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-background-secondary rounded-2xl p-6">
              <h4 className="font-serif text-lg text-text-primary mb-4">Key Stats</h4>
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <p className="text-2xl font-bold text-accent-primary">70%</p>
                  <p className="text-xs text-text-muted mt-1">of Map Pack clicks go to the top 3 Google results</p>
                </div>
                <div className="border-b border-border pb-4">
                  <p className="text-2xl font-bold text-accent-primary">520%</p>
                  <p className="text-xs text-text-muted mt-1">more calls for restaurants with 100+ GBP photos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent-primary">$180K+</p>
                  <p className="text-xs text-text-muted mt-1">annual revenue gain from 20 additional weekly covers</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="w-full bg-background-secondary py-20 mt-16">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h3 className="font-serif text-[32px] text-text-primary mb-4">More articles coming soon</h3>
          <p className="text-text-secondary mb-8">We publish in-depth guides on local marketing for restaurants, trades, and service businesses in the GTA and Hamilton. Subscribe to get notified.</p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-white border border-border rounded-lg px-4 py-3 text-base text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
