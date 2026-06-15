import Link from "next/link";
import Image from "next/image";

export default function PaintersContent() {
  return (
    <>
      <p className="text-[17px] leading-relaxed">
        Painting is the most visually demonstrable trade. Before and after a paint job, the transformation is obvious. This should make marketing easy — show the work, get the calls. But most painting companies still rely on flyers, yard signs, and hoping past customers refer a friend. Meanwhile, homeowners are searching for painters online every day and calling someone else.
      </p>
      <p className="text-[17px] leading-relaxed">
        The painters booking 3 months in advance are not necessarily doing better work. They are showing that work online, systematically, to homeowners who are actively looking for exactly what they do.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">1. Why Painting Companies Struggle With Consistent Bookings</h2>
      <p>
        The two most common problems we see when painting companies come to us: extreme seasonality and referral dependency. Painting is heavily concentrated in spring and summer. Without a marketing system running before spring begins, you spend Q1 scrambling to fill Q2. And when referrals slow — which they do, predictably, as your existing customers have fewer friends who need painting done — your schedule empties faster than you can refill it through word of mouth alone.
      </p>
      <p>
        The painters filling their schedules year-round are using Google Ads to capture active search demand and video content to generate desire in homeowners who did not know they wanted a paint job yet.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">2. Before/After Video: The Highest-Converting Content for Painters</h2>
      <p>
        No service business benefits more from before/after content than painting. The transformation from a dingy beige living room to a clean, modern white is visceral. It makes people look around their own homes and think &ldquo;we should do that.&rdquo; This is a desire you created — not something the homeowner was already searching for. That is why social media (where you push content to people) outperforms search ads (where people must already want a service) for painters.
      </p>
      <p>
        The specific format that performs best: a 30-45 second vertical video. The first 3 seconds show the &ldquo;before&rdquo; — dark, dated, worn. Then a wipe transition to the finished room. Upbeat audio. The company name and a simple call to action. This format generates direct estimate requests via Instagram DM at a cost of $8-18 per lead on Meta Ads, well below what Google Ads charges for painting clicks.
      </p>

      <div className="bg-background-card border border-border rounded-xl p-7 my-8 space-y-4">
        <p className="font-semibold text-text-primary text-[15px]">One video shoot, multiple uses:</p>
        <div className="space-y-3 text-sm text-text-secondary">
          <div className="flex gap-3"><span className="text-accent-primary font-bold mt-0.5">→</span><p><strong>Instagram Reels</strong> — primary organic distribution, 20-40k reach per reel for local painting accounts</p></div>
          <div className="flex gap-3"><span className="text-accent-primary font-bold mt-0.5">→</span><p><strong>Facebook Ad</strong> — boosted to homeowners within 15km, targeted by homeownership and renovation interest</p></div>
          <div className="flex gap-3"><span className="text-accent-primary font-bold mt-0.5">→</span><p><strong>Website homepage</strong> — embeds on the landing page that receives Google Ads traffic</p></div>
          <div className="flex gap-3"><span className="text-accent-primary font-bold mt-0.5">→</span><p><strong>TikTok</strong> — cross-posted for additional organic reach, especially for residential bedroom/kitchen transformations</p></div>
        </div>
      </div>

      <blockquote className="border-l-4 border-accent-primary pl-6 my-10 italic text-lg text-text-primary bg-accent-primary/5 py-4 pr-4 rounded-r-xl">
        &ldquo;ProPaint Hamilton had never tried video marketing before. Within 6 weeks of their first reel strategy, they were 8 weeks booked out — in February, their historically slowest month.&rdquo;
      </blockquote>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-10 border border-border shadow">
        <Image
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&q=80"
          alt="Freshly painted bright living room interior"
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
        />
      </div>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">3. Google Ads for Painters: Capturing Homeowners Ready to Book</h2>
      <p>
        While video content creates demand, Google Ads captures it. When a homeowner has already decided they want to paint their kitchen and is ready to get three estimates, they search &ldquo;interior painter near me&rdquo; or &ldquo;house painting estimate [city].&rdquo; These are the highest-converting leads in the painting industry because the decision to buy has already been made — they just need to choose who.
      </p>
      <p>
        The keywords that convert best for painters are highly specific: &ldquo;interior house painter [city],&rdquo; &ldquo;kitchen cabinet painting [city],&rdquo; &ldquo;exterior painting estimate,&rdquo; and &ldquo;accent wall painting near me.&rdquo; Bidding on the generic &ldquo;painting&rdquo; or &ldquo;painters&rdquo; attracts DIY searchers who are looking for tips, not services — and inflates your costs without producing leads.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">4. Extending Into Commercial Work for Year-Round Revenue</h2>
      <p>
        Residential painting has a natural February-March slow period when homeowners are not thinking about renovation. Commercial painting — offices, retail spaces, multi-unit buildings — has different timing. Building managers book commercial repaints in Q1 and Q4, precisely when residential painters are slowest.
      </p>
      <p>
        A separate campaign targeting commercial painting searches (&ldquo;office painting contractor,&rdquo; &ldquo;commercial painter [city],&rdquo; &ldquo;strata painting company&rdquo;) with a landing page specifically addressing commercial clients (pricing by square footage, project timelines, portfolio of commercial work) adds a revenue stream that fills the residential off-season gaps.
      </p>
      <p className="text-[17px] leading-relaxed mt-4">
        If you want a marketing system that keeps your painting business booked before the spring rush hits and extends your revenue into the slow months, <Link href="/contact" className="text-accent-primary underline font-medium">book a free strategy call</Link>. We will show you exactly what a painter marketing system looks like for your market. See our full <Link href="/industries/painters" className="text-accent-primary underline font-medium">painting company marketing services</Link> and how <Link href="/services/social-media-management" className="text-accent-primary underline font-medium">social media management</Link> works for trade businesses.
      </p>
    </>
  );
}
