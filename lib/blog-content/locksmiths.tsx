import Link from "next/link";
import Image from "next/image";

export default function LocksmithsContent() {
  return (
    <>
      <p className="text-[17px] leading-relaxed">
        Locksmith is one of the most competitive service categories in local search. The reason is simple: the search intent is almost always urgent, the job values are decent, and the barrier to entry feels low — so dozens of operators, including some with no real credentials, compete aggressively. In most GTA cities, there are 15-20 businesses bidding on the same handful of high-intent keywords.
      </p>
      <p className="text-[17px] leading-relaxed">
        Getting to the top of Google for these searches — and staying there — requires a specific strategy that most locksmiths are not running. Here is exactly how it works.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">1. Why Google Local Service Ads Are the Most Important Channel for Locksmiths</h2>
      <p>
        When someone searches &ldquo;locksmith near me&rdquo; or &ldquo;locked out of house [city],&rdquo; the first results they see are Local Service Ads — the listings with the Google Screened badge. These appear above every other result, including regular Google Ads. They show your business name, your rating, and a direct call button. And critically: you only pay when someone actually calls you, not for clicks to your website.
      </p>
      <p>
        Google Screened LSA requires a background check and business verification. This is the exact step most fly-by-night locksmith operations skip — which means completing it gives you a trust indicator that separates you from the competition at the very top of the search results. A homeowner locked out at 10pm is choosing the Google Screened locksmith with 47 reviews over an unverified listing every time.
      </p>

      <div className="bg-background-card border border-border rounded-xl p-7 my-8 space-y-4">
        <p className="font-semibold text-text-primary text-[15px]">High-intent searches to appear for:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-secondary">
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;locksmith near me&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;locked out of house [city]&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;car lockout service [city]&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;emergency locksmith 24 hours&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;lock rekey service [city]&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;deadbolt installation near me&rdquo;</div>
        </div>
      </div>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">2. Google Business Profile: Your Organic Visibility Engine</h2>
      <p>
        Below the LSA section, Google shows a Map Pack of three businesses. For most locksmiths, this is where the majority of organic (non-paid) calls come from. Getting into the top three requires a fully optimized GBP — and consistent activity signals.
      </p>
      <p>
        The GBP signals that move the needle most: the number and recency of your reviews, whether your business information is complete and consistent across all directories, and whether you are uploading new photos regularly. A locksmith GBP with 80 reviews and new photos every 2 weeks outperforms a competitor with a static profile regardless of how long they have been in business.
      </p>
      <p>
        The review strategy that works: after every job, send a follow-up text within 2 hours. Keep it short: &ldquo;Thanks for calling [Business Name] today. If the service was good, a quick Google review helps a lot — [link].&rdquo; With this system, a locksmith doing 8-10 jobs per day can accumulate 50+ reviews within 30 days of starting. At that volume, you are competitive for Map Pack top 3 in most Ontario cities.
      </p>

      <blockquote className="border-l-4 border-accent-primary pl-6 my-10 italic text-lg text-text-primary bg-accent-primary/5 py-4 pr-4 rounded-r-xl">
        &ldquo;Rapid Lock Service had 11 reviews when they started. We implemented LSA, GBP optimization, and the review text system. Within 60 days they had 74 reviews, Map Pack position 2, and calls had more than doubled.&rdquo;
      </blockquote>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-10 border border-border shadow">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
          alt="Locksmith working on a residential door lock"
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
        />
      </div>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">3. Website Speed and Mobile Conversion</h2>
      <p>
        A locksmith call is made from a phone. The homeowner is frustrated, possibly standing outside in the cold, and searching on mobile. If your website takes more than 3 seconds to load, they are gone. If they cannot find your phone number in the first screen, they are gone. This is one of the most conversion-critical websites in any local business category.
      </p>
      <p>
        The locksmith website checklist: load time under 2.5 seconds on mobile, a large click-to-call button in the very first section of the page, your service area clearly stated (&ldquo;Serving Toronto, Mississauga, Brampton, and Oakville&rdquo;), and Google Screened badge prominently displayed. No sliders, no auto-play videos, no form-only contact. Emergency callers do not fill out forms.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">4. Expanding Beyond Emergency Calls</h2>
      <p>
        Emergency lockouts are high-margin but unpredictable. Rekeying, commercial lock installations, master key systems, and access control upgrades are planned services with higher average job values and repeat business potential. A separate Google Ads campaign targeting these non-emergency searches (&ldquo;lock rekey [city],&rdquo; &ldquo;commercial locksmith [city],&rdquo; &ldquo;access control installation Ontario&rdquo;) adds predictable revenue alongside emergency call volume.
      </p>
      <p className="text-[17px] leading-relaxed mt-4">
        If you want to see exactly where your locksmith business stands in local search and what it would take to reach the top three in your service area, <Link href="/contact" className="text-accent-primary underline font-medium">book a free strategy call</Link>. We will pull your current ranking data and show you the specific steps.
      </p>
    </>
  );
}
