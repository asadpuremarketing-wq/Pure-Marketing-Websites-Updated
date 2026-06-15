import Link from "next/link";
import Image from "next/image";

export default function RealEstateContent() {
  return (
    <>
      <p className="text-[17px] leading-relaxed">
        Walk into any real estate brokerage in Ontario and you will see dozens of headshots, identical taglines, and the same claims about &ldquo;putting clients first.&rdquo; Every agent looks the same on paper. Sellers cannot tell you apart. So they call whoever their friend used, whoever came up first on Google, or whoever had a video they actually remembered.
      </p>
      <p className="text-[17px] leading-relaxed">
        Video is not just a nice-to-have for Ontario real estate agents anymore. It is the primary differentiator for agents consistently winning listings over competitors with equal or better track records. Here is exactly how it works and how to deploy it.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">1. Why Video Has Become Non-Negotiable for Ontario Agents</h2>
      <p>
        Properties with professional video sell faster. Properties without video sit longer. This is now documented across every major market in Canada, and Ontario is no exception. The reason is simple: buyers make decisions emotionally, and video creates emotional connection in a way that photos cannot. A still image of a living room shows a room. A video of a living room shows light changing through windows, the flow between rooms, the feeling of scale — all the things a buyer experiences when they walk through in person.
      </p>
      <p>
        But the bigger opportunity is not listing videos for buyers. It is agent brand videos that win listings from sellers. When a homeowner is deciding between three agents to list their property, the agent with a polished 2-minute video on their website — explaining their process, their results, their market expertise — closes the listing presentation before walking through the door. Sellers have already decided they trust them.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">2. The 3 Videos Every Agent Needs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-8">
        <div className="bg-background-card border border-border rounded-xl p-6">
          <h4 className="font-semibold text-text-primary mb-2 text-[15px]">Agent Brand Video</h4>
          <p className="text-sm text-text-secondary leading-relaxed">90-second to 2-minute video about who you are, your market expertise, and your results. Lives on your website homepage, your GBP, and your Facebook and Instagram profile. This is your digital listing presentation.</p>
        </div>
        <div className="bg-background-card border border-border rounded-xl p-6">
          <h4 className="font-semibold text-text-primary mb-2 text-[15px]">Property Tour Videos</h4>
          <p className="text-sm text-text-secondary leading-relaxed">60-90 second walkthrough of each listing. Shot vertically for Instagram and TikTok, horizontally for YouTube and the listing page. Properties with video tours generate 3x more qualified showing requests than photo-only listings.</p>
        </div>
        <div className="bg-background-card border border-border rounded-xl p-6">
          <h4 className="font-semibold text-text-primary mb-2 text-[15px]">Market Update Videos</h4>
          <p className="text-sm text-text-secondary leading-relaxed">Monthly 60-second updates on your local market: average days on market, list-to-sale ratios, what is happening with prices. These establish you as the neighbourhood expert and generate seller inquiries from homeowners watching the market.</p>
        </div>
      </div>

      <blockquote className="border-l-4 border-accent-primary pl-6 my-10 italic text-lg text-text-primary bg-accent-primary/5 py-4 pr-4 rounded-r-xl">
        &ldquo;Sarah Mitchell Real Estate added property tour videos to every listing. Average days on market dropped from 28 days to 6. She now uses video as a listing differentiator — and wins almost every presentation she attends.&rdquo;
      </blockquote>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-10 border border-border shadow">
        <Image
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&q=80"
          alt="Professional real estate photography of a modern home interior"
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
        />
      </div>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">3. How to Turn Listing Videos Into Seller Leads</h2>
      <p>
        The mechanism is straightforward: you produce a property tour video, promote it on Instagram and Facebook targeting homeowners in the same neighbourhood, and the sellers watching the video think &ldquo;I should sell my house and that agent should do it.&rdquo; You are reaching the exact demographic — homeowners in a specific area who are watching real estate content — with proof of your quality at the exact moment they are thinking about the market.
      </p>
      <p>
        The campaign structure: boost each listing video as a Facebook/Instagram ad targeting homeowners aged 40-65 within a 5km radius of the property. Budget $10-25 per listing for 7 days. This generates local brand awareness at near-zero cost, positions you as the active agent in that neighbourhood, and captures inbound DMs and calls from homeowners who want to know what their home is worth.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">4. Neighbourhood Pages for Organic Seller Leads</h2>
      <p>
        Beyond video, the highest-converting long-term lead source for agents is organic search from neighbourhood-specific pages. A seller typing &ldquo;how much is my house worth in [neighbourhood]&rdquo; or &ldquo;real estate agent [neighbourhood]&rdquo; is a very high-intent lead. An agent with a dedicated page for that neighbourhood — with market statistics, recent sales, a valuation tool, and their own sales history there — captures these searches consistently without ad spend.
      </p>
      <p>
        We build these neighbourhood pages for agent clients as part of their website, targeting 3-5 specific geographic areas where they want to build dominant market share. Combined with the video strategy, this creates two lead sources: paid (video + ads) for immediate pipeline, and organic (neighbourhood SEO) for long-term cost-efficient growth.
      </p>
      <p className="text-[17px] leading-relaxed mt-4">
        If you want to see what a video and digital marketing system looks like for your real estate business, <Link href="/contact" className="text-accent-primary underline font-medium">book a free strategy call</Link>. We will review your current presence and show you exactly where the listing opportunities are.
      </p>
    </>
  );
}
