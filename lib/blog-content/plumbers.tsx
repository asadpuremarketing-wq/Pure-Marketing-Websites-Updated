import Link from "next/link";
import Image from "next/image";

export default function PlumbersContent() {
  return (
    <>
      <p className="text-[17px] leading-relaxed">
        Emergency plumbing is one of the highest-intent service categories on Google. When a pipe bursts at 9pm, the homeowner is not browsing options — they are calling the first licensed plumber they find. The question is whether that call is going to you or to the company two miles away that is spending $800 a month on ads and answering every call immediately.
      </p>
      <p className="text-[17px] leading-relaxed">
        Here is exactly where those calls are going, why your business is not capturing them, and the specific system that fixes it.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">1. Where Emergency Plumbing Calls Are Going Right Now</h2>
      <p>
        Open Google and search &ldquo;emergency plumber [your city]&rdquo; right now. The first results you see are Local Service Ads — the verified, pay-per-lead listings with the green &ldquo;Google Guaranteed&rdquo; badge. Below those are regular Google Ads. Below those are three Map Pack listings. Organic results start on page two, essentially.
      </p>
      <p>
        If your business is not in the LSA section or the Map Pack top three, a homeowner in a genuine emergency is not going to find you before they find someone else. The average plumbing emergency results in a call within 3 minutes of the first search. There is no second page consideration. Visibility in that top section is the entire game.
      </p>

      <div className="bg-background-card border border-border rounded-xl p-7 my-8 space-y-4">
        <p className="font-semibold text-text-primary text-[15px]">The searches plumbers need to appear for:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-secondary">
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;emergency plumber near me&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;plumber [city] 24 hour&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;burst pipe repair [city]&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;drain cleaning near me&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;water heater replacement [city]&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;licensed plumber [city]&rdquo;</div>
        </div>
      </div>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">2. Local Service Ads for Plumbers: The Pay-Per-Lead Channel</h2>
      <p>
        Google Local Service Ads (LSA) are the most cost-efficient advertising channel for plumbers. You only pay when a verified customer contacts you — not for impressions, not for clicks, only for actual leads. For emergency services with high job values (drain clearing averages $250-$500, water heater replacements $1,200+), even a $40 cost per lead produces strong ROI.
      </p>
      <p>
        Getting into LSA requires a background check and licence verification. This process eliminates unlicensed competition and is the reason most smaller plumbing operations skip it. Completing it takes 5-7 business days and puts you above every competitor paying for regular Google Ads.
      </p>

      <blockquote className="border-l-4 border-accent-primary pl-6 my-10 italic text-lg text-text-primary bg-accent-primary/5 py-4 pr-4 rounded-r-xl">
        &ldquo;Blue Wave Plumbing went from 6 calls per week to 22+ after we launched their LSA and Google Ads system. They were fully booked 3 weeks out within 90 days.&rdquo;
      </blockquote>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-10 border border-border shadow">
        <Image
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80"
          alt="Plumber working on residential pipes"
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
        />
      </div>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">3. The After-Hours Problem: Why You Are Losing Half Your Emergency Calls</h2>
      <p>
        The majority of plumbing emergencies happen between 6pm and midnight. This is when homeowners discover a leak, a backed-up drain, or a hot water heater that stopped working. If you are not available to answer during these hours, your marketing investment is generating leads you are giving away to competitors who do answer.
      </p>
      <p>
        The solution is not hiring an answering service. It is automation. A missed-call text-back fires within 30 seconds of any unanswered call: &ldquo;Hi, I just missed your call. I can be there tonight or first thing in the morning — which works better?&rdquo; This simple automation recovers 40-60% of after-hours leads. The homeowner gets immediate acknowledgement, which reduces their urgency to keep calling other plumbers.
      </p>
      <p>
        Pair this with a 24-hour booking form on your website and a Google Business Profile that shows &ldquo;Open 24 hours&rdquo; if that is genuinely true, and you create a lead capture system that works while you sleep.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">4. What a Complete Plumber Marketing System Looks Like</h2>
      <p>
        The plumbing businesses consistently getting 22+ calls per week are not doing one thing right. They are doing five things consistently:
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-8">
        <li><strong>LSA campaign</strong> for emergency and high-intent searches, set to the exact service area where they want jobs</li>
        <li><strong>Google Ads</strong> targeting drain cleaning, water heater, and renovation plumbing searches that LSA does not cover</li>
        <li><strong>Google Business Profile</strong> optimized with every service, pricing ranges, and weekly photo uploads from real jobs</li>
        <li><strong>Fast, mobile-first website</strong> with a click-to-call button in the first screen and a form for non-emergency bookings</li>
        <li><strong>Missed-call automation</strong> that texts every unanswered call within 30 seconds, keeping your lead from calling the next plumber</li>
      </ul>
      <p className="text-[17px] leading-relaxed">
        If you want to see where your business stands against this checklist and what it would take to get your first qualified calls within 7-14 days, <Link href="/contact" className="text-accent-primary underline font-medium">book a free strategy call</Link>. We will audit your current visibility and show you exactly where the calls are going. You can also see our full <Link href="/industries/plumbers" className="text-accent-primary underline font-medium">plumber marketing services</Link> and how our <Link href="/services/google-meta-ads" className="text-accent-primary underline font-medium">Google Ads management</Link> works.
      </p>
    </>
  );
}
