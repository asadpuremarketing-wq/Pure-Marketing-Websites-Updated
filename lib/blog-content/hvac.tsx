import Link from "next/link";
import Image from "next/image";

export default function HvacContent() {
  return (
    <>
      <p className="text-[17px] leading-relaxed">
        HVAC is one of the most seasonal service businesses in Canada. AC season runs June through August. Furnace season runs November through February. Spring and fall? Many HVAC companies watch their phones go quiet for weeks at a time. The slow season feels inevitable — but it is not. It is a marketing calendar problem, and it is fixable.
      </p>
      <p className="text-[17px] leading-relaxed">
        Here is the campaign structure we use to keep our HVAC clients consistently busy through every month of the year, including the ones most HVAC companies write off entirely.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">1. The Seasonal Trap (And Why Most HVAC Companies Stay In It)</h2>
      <p>
        Most HVAC companies run ads during busy season and turn them off when demand drops. This creates a cycle: busy season floods you with more calls than you can handle, slow season leaves your technicians sitting idle. The problem compounds because when slow season ends and you turn ads back on, Google needs 3-4 weeks to re-optimize your campaigns. You have missed the first wave of the next busy season while paying for the restart period.
      </p>
      <p>
        The companies breaking out of this cycle run campaigns year-round but shift what they are advertising by month. Instead of turning off marketing in the slow months, they shift their message to the services that are relevant right now — and in HVAC, there is always something relevant.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">2. The Month-by-Month Campaign Calendar</h2>
      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-background-secondary">
              <th className="text-left p-4 text-text-primary font-semibold border-b border-border">Month</th>
              <th className="text-left p-4 text-text-primary font-semibold border-b border-border">Primary Campaign Focus</th>
              <th className="text-left p-4 text-text-primary font-semibold border-b border-border">Why</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            <tr className="border-b border-border"><td className="p-4 font-medium">Jan–Feb</td><td className="p-4">Emergency furnace repair + heating failure calls</td><td className="p-4">Peak emergency season for heating</td></tr>
            <tr className="border-b border-border bg-background-secondary/30"><td className="p-4 font-medium">Mar–Apr</td><td className="p-4">Furnace tune-up + annual maintenance contracts</td><td className="p-4">Homeowners prep for end of heating season</td></tr>
            <tr className="border-b border-border"><td className="p-4 font-medium">May</td><td className="p-4">AC startup inspection + install estimates</td><td className="p-4">First warm days trigger AC anxiety</td></tr>
            <tr className="border-b border-border bg-background-secondary/30"><td className="p-4 font-medium">Jun–Aug</td><td className="p-4">Emergency AC repair + new AC installation</td><td className="p-4">Peak cooling season, high urgency</td></tr>
            <tr className="border-b border-border"><td className="p-4 font-medium">Sep–Oct</td><td className="p-4">Furnace inspection + heating system replacement</td><td className="p-4">Homeowners prep before cold weather hits</td></tr>
            <tr><td className="p-4 font-medium">Nov–Dec</td><td className="p-4">Emergency furnace repair + heat pump promotions</td><td className="p-4">Cold snaps drive high-urgency calls</td></tr>
          </tbody>
        </table>
      </div>

      <blockquote className="border-l-4 border-accent-primary pl-6 my-10 italic text-lg text-text-primary bg-accent-primary/5 py-4 pr-4 rounded-r-xl">
        &ldquo;Arctic Air HVAC was dark during spring and fall before working with us. After implementing the year-round campaign calendar, they had their first fully booked spring in 5 years of business.&rdquo;
      </blockquote>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-10 border border-border shadow">
        <Image
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80"
          alt="HVAC technician servicing a rooftop unit"
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
        />
      </div>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">3. Maintenance Contracts: The Revenue Stream That Eliminates Slow Seasons</h2>
      <p>
        The most sustainable HVAC businesses are built on maintenance contract revenue. A homeowner on a $200/year annual maintenance contract generates predictable revenue, calls you first when something breaks, and refers friends and family at far higher rates than one-time customers. The math is compelling: 150 maintenance contracts at $200/year equals $30,000 in recurring annual revenue before a single emergency call.
      </p>
      <p>
        Marketing maintenance contracts requires a different approach than emergency repair ads. It works best through email campaigns to past customers, dedicated landing pages targeting searches like &ldquo;HVAC maintenance contract [city]&rdquo; and &ldquo;furnace service plan Ontario,&rdquo; and social media content that educates homeowners on why annual service prevents expensive failures.
      </p>
      <p>
        We build separate Google Ads campaigns for maintenance contract acquisition versus emergency service calls, because the intent, keywords, and conversion actions are completely different. Running both from the same campaign dilutes results for both.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">4. Off-Season Google Ads: Finding Demand When Your Competitors Go Dark</h2>
      <p>
        Here is the competitive advantage most HVAC companies miss: when your competitors turn off their ads in April and October, ad costs drop significantly because there are fewer bidders. This is exactly when you should be increasing your spend, not reducing it. Your cost per lead goes down 30-40% in slow months while your competitors are dark, and you are reaching homeowners who are planning ahead rather than responding in an emergency.
      </p>
      <p>
        The off-season campaigns are not about driving emergency calls — they are about capturing homeowners who are thinking about replacing an older unit, looking for an annual service plan, or want a quote before their furnace or AC fails completely. These jobs are larger and less price-sensitive than emergency repairs.
      </p>
      <p className="text-[17px] leading-relaxed mt-4">
        If you want to see a specific campaign calendar built for your HVAC business and your service area, <Link href="/contact" className="text-accent-primary underline font-medium">book a free strategy call</Link>. We will build out the month-by-month plan and show you what year-round revenue looks like for a business your size. See our full <Link href="/industries/hvac" className="text-accent-primary underline font-medium">HVAC marketing services</Link> and our <Link href="/services/lead-generation" className="text-accent-primary underline font-medium">lead generation system</Link>.
      </p>
    </>
  );
}
