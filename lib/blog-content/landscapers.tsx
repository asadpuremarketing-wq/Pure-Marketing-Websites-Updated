import Link from "next/link";
import Image from "next/image";

export default function LandscapersContent() {
  return (
    <>
      <p className="text-[17px] leading-relaxed">
        Landscaping companies in Ontario have a 6-month window to generate revenue. April through October. Everything outside that window is overhead without income — unless you have built a marketing system that fills your spring calendar before the season even starts and converts one-time customers into year-over-year contracts.
      </p>
      <p className="text-[17px] leading-relaxed">
        The companies getting consistent commercial and residential contracts are not busier in summer. They are smarter in winter. Here is how they do it.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">1. The Problem With Seasonal Marketing</h2>
      <p>
        Most landscaping companies start thinking about marketing in April. By then, the homeowners who planned ahead have already signed contracts with whoever showed up in their search results in February and March. The companies winning spring contracts are marketing in January and February — when competition is lowest, ad costs are cheapest, and homeowners with renovation budgets are planning their outdoor projects.
      </p>
      <p>
        This same principle applies at the end of season. September and October are when smart landscaping companies lock in spring commitments, sell lawn care packages that start in April, and begin marketing snow removal services to the same customer base. The companies that stop marketing in October start 2024 from zero. The ones that stay active finish October with Q2 already partially booked.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">2. Commercial Contracts: Higher Value, Longer Relationships</h2>
      <p>
        A commercial maintenance contract with a property management company, HOA, or office park is worth 5-10x a residential job. Annual contracts with commercial clients eliminate the feast-and-famine cycle entirely — they are recurring revenue that runs regardless of referral volume or seasonal demand fluctuation.
      </p>
      <p>
        Commercial landscaping clients are reached differently than residential. They search for &ldquo;commercial landscaping contractor [city],&rdquo; &ldquo;property maintenance contract Ontario,&rdquo; and &ldquo;commercial grounds maintenance.&rdquo; A dedicated Google Ads campaign targeting these terms — with a landing page that shows your commercial portfolio, your service agreement structure, and a quote form for multi-property inquiries — gets you in front of property managers who are actively looking to switch or add vendors.
      </p>

      <div className="bg-background-card border border-border rounded-xl p-7 my-8 space-y-5">
        <p className="font-semibold text-text-primary text-[15px]">Residential vs. Commercial: Revenue Comparison</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-background-secondary rounded-xl p-5">
            <p className="font-semibold text-text-primary mb-3">Residential Job</p>
            <div className="space-y-2 text-text-secondary">
              <p>Average value: $800-$2,500</p>
              <p>Frequency: 1-3x per season</p>
              <p>Referral rate: moderate</p>
              <p>Planning lead time: 2-4 weeks</p>
            </div>
          </div>
          <div className="bg-accent-primary/5 border border-accent-primary/20 rounded-xl p-5">
            <p className="font-semibold text-text-primary mb-3">Commercial Contract</p>
            <div className="space-y-2 text-text-secondary">
              <p>Average value: $8,000-$40,000/yr</p>
              <p>Frequency: weekly or bi-weekly</p>
              <p>Contract length: 1-3 years</p>
              <p>Planning lead time: 3-6 months</p>
            </div>
          </div>
        </div>
      </div>

      <blockquote className="border-l-4 border-accent-primary pl-6 my-10 italic text-lg text-text-primary bg-accent-primary/5 py-4 pr-4 rounded-r-xl">
        &ldquo;Greenfield Landscaping added one commercial property manager as a client through Google Ads in March. That contract — a 12-property residential complex — paid more than their entire previous summer of residential jobs.&rdquo;
      </blockquote>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-10 border border-border shadow">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80"
          alt="Professional landscaping crew working on a residential property"
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
        />
      </div>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">3. Before/After Content: The Fastest Way to Generate Residential Inquiries</h2>
      <p>
        Landscaping is one of the most visual trades. A photo of a fresh cedar mulch install, a newly sodded backyard, or a professionally designed patio posted to Instagram generates organic enquiries with no ad spend — when done consistently. The formula that works: post before/after transformation content twice per week. Tag the city, tag the neighbourhood when possible. Use 3-5 local hashtags. Show the work in the first frame, not text. Caption with a brief description of what was done and a simple call to action.
      </p>
      <p>
        The boosted post strategy extends this reach efficiently. Spend $15-25 per post to boost the top-performing before/after content to homeowners within 15km. At this budget, a single post typically reaches 3,000-8,000 local homeowners, and a percentage will save it for when they are ready to book. These are warm leads — they have already seen your quality.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">4. Converting One-Time Customers Into Annual Contracts</h2>
      <p>
        The highest-margin growth for any landscaping company is not finding new customers — it is selling maintenance packages to existing ones. A homeowner who spent $4,000 on a landscaping project is the ideal candidate for a $1,500/season maintenance plan. They know your work, they already have the landscape that needs maintaining, and they have already trusted you with their property.
      </p>
      <p>
        The system: after every completed project, send a follow-up text or email two weeks later with a maintenance package offer. Include what is covered (spring cleanup, 6 lawn cuts, fall cleanup, weeding), the price, and an easy way to say yes. 20-30% of new project customers will take this offer. Over 3 seasons, this builds an annuity-style revenue base that is entirely separate from new customer acquisition.
      </p>
      <p className="text-[17px] leading-relaxed mt-4">
        If you want to build a landscaping marketing system that fills spring before April arrives and generates commercial contracts year-round, <Link href="/contact" className="text-accent-primary underline font-medium">book a free strategy call</Link>. We will build a plan specific to your service area and target market.
      </p>
    </>
  );
}
