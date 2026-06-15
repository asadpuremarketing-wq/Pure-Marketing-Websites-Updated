import Link from "next/link";
import Image from "next/image";

export default function RestaurantsContent() {
  return (
    <>
      <p className="text-[17px] leading-relaxed">
        Walk down any major street in Mississauga, Brampton, Etobicoke, or downtown Toronto and you will pass dozens of restaurants competing for the same lunch crowd. The GTA is home to over 15,000 food and beverage businesses. In that environment, the restaurants that win are not necessarily the ones with the best food. They are the ones people can find.
      </p>
      <p className="text-[17px] leading-relaxed">
        This guide covers the exact digital marketing system we build for restaurant clients, from getting found on Google Maps to turning Instagram followers into reservations.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">1. Your Google Business Profile Is Your Most Valuable Marketing Asset</h2>
      <p>
        When someone types &ldquo;best brunch near Scarborough&rdquo; or &ldquo;halal restaurant Brampton&rdquo; into Google, the first thing they see is the Map Pack. If you are not in that top three, you are invisible to high-intent customers. Getting into the Map Pack requires a fully optimized GBP: complete and consistent business information across every platform, the most specific primary category possible, weekly photo uploads, Google Posts for specials and events, and a consistent review generation system.
      </p>

      <blockquote className="border-l-4 border-accent-primary pl-6 my-10 italic text-lg text-text-primary bg-accent-primary/5 py-4 pr-4 rounded-r-xl">
        &ldquo;Restaurants in the Google Map Pack top 3 capture roughly 70% of all clicks for that search query. Restaurants with 100+ GBP photos get 520% more calls than those with fewer than 10.&rdquo;
      </blockquote>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">2. The Review Strategy That Actually Works</h2>
      <p>
        GTA diners are among the most review-conscious consumers in the country. A restaurant with 200 reviews averaging 4.4 stars will almost always beat one with 30 reviews at 4.8 — because volume signals legitimacy. The review system that works: train front-of-house staff to ask right after a compliment, place a QR code on the check presenter linking directly to your Google review page, and send an automated follow-up text to online order customers 1 hour after delivery. Respond to every review, positive and negative, within 48 hours.
      </p>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-10 border border-border shadow">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80"
          alt="Restaurant interior with full tables and warm lighting"
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
        />
      </div>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">3. Social Media: What Actually Drives Reservations</h2>
      <p>
        Instagram and TikTok are the primary discovery channels for food in Toronto. Short-form video — specifically Reels and TikToks — still has a massive organic reach advantage over still images. The content that converts: 15-second dish reveals and close-up plating clips, behind-the-scenes kitchen content, special announcements with urgency (&ldquo;Friday brunch this weekend — only 12 tables left&rdquo;), and user-generated content reposts.
      </p>
      <p>
        Use hyper-local hashtags alongside dish tags: #mississaugaeats, #bramptonrestaurants, #etobicokefood, #gtafoodie. Tag your location on every post. Instagram&apos;s location-based explore feed is a significant organic discovery channel for local food content.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">4. Meta Ads: The $15/Day Campaign That Fills Weekend Tables</h2>
      <p>
        For restaurants, Facebook and Instagram ads are the most cost-effective way to promote specific offers, events, or seasonal menus. The weekend fill campaign: objective is traffic to your booking page, audience is an 8-12km radius around the restaurant targeting ages 25-55 with dining and local event interests, creative is a 15-second video reel of your best-looking dish with the offer in text, running Wednesday through Friday for the upcoming weekend at $15-25/day. This structure generates 8-25 additional covers per weekend depending on market and offer quality.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">5. Website: The Leaky Bucket Most Restaurants Ignore</h2>
      <p>
        A high-converting restaurant website requires: a prominent reservation CTA above the fold visible without scrolling, mobile load time under 3 seconds, an HTML menu that is readable on mobile without zooming, real photography from a professional shoot (not stock images), and Google reviews embedded on the homepage. A restaurant spending money on ads while sending that traffic to a slow, unclear website is losing the conversion at the last step.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">What a Realistic GTA Restaurant Marketing Budget Looks Like</h2>
      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-background-secondary">
              <th className="text-left p-4 text-text-primary font-semibold border-b border-border">Channel</th>
              <th className="text-left p-4 text-text-primary font-semibold border-b border-border">Monthly</th>
              <th className="text-left p-4 text-text-primary font-semibold border-b border-border">Goal</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            <tr className="border-b border-border"><td className="p-4">GBP Management</td><td className="p-4">Included</td><td className="p-4">Local search ranking</td></tr>
            <tr className="border-b border-border bg-background-secondary/30"><td className="p-4">Social Media Content</td><td className="p-4">$500-$800</td><td className="p-4">Brand awareness</td></tr>
            <tr className="border-b border-border"><td className="p-4">Meta Ads (ad spend)</td><td className="p-4">$400-$700</td><td className="p-4">Reservation conversions</td></tr>
            <tr className="border-b border-border bg-background-secondary/30"><td className="p-4">Video Production</td><td className="p-4">$300-$500</td><td className="p-4">Social + brand content</td></tr>
            <tr><td className="p-4 font-semibold text-text-primary">Total</td><td className="p-4 font-semibold text-accent-primary">$1,500-$2,500/mo</td><td className="p-4 font-semibold text-text-primary">8-25 new covers/week</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-[17px] leading-relaxed mt-4">
        For a restaurant averaging $45 per cover, 20 additional weekly covers represent over $180,000 in annual incremental revenue. If you want to see what this system looks like specifically for your restaurant, <Link href="/contact" className="text-accent-primary underline font-medium">book a free strategy call</Link>. See our full <Link href="/industries/restaurants" className="text-accent-primary underline font-medium">restaurant marketing services</Link> and how our <Link href="/services/social-media-management" className="text-accent-primary underline font-medium">social media management</Link> works for food businesses.
      </p>
    </>
  );
}
