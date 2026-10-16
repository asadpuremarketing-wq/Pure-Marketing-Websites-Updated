import Link from "next/link";
import Image from "next/image";

export default function ExteriorServicesContent() {
  return (
    <>
      <p className="text-[17px] leading-relaxed">
        Unlike an emergency plumbing call or a locksmith lockout, a siding or exterior renovation project is a considered purchase. Homeowners rarely wake up one morning and decide to re-side their house. They notice a problem, start researching, compare a handful of contractors over several weeks, and only then start requesting quotes. By the time they pick up the phone, they have usually already formed a shortlist, and if you weren&apos;t visible during that research phase, you were never on it.
      </p>
      <p className="text-[17px] leading-relaxed">
        That makes exterior and siding contractor marketing a different problem than most emergency trades: the goal is not just capturing a search at the moment of urgency, it is being present and credible across the weeks a homeowner spends comparing options.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">1. The Homeowner Research Phase</h2>
      <p>
        Most homeowners planning a siding, soffit, fascia, or full exterior renovation project start with a general search: &ldquo;how much does siding replacement cost&rdquo; or &ldquo;best siding material for Ontario homes.&rdquo; They browse a handful of company websites, scroll through photo galleries, check reviews, and often return to the same sites more than once before ever filling out a contact form. If your business isn&apos;t showing up at that early stage, a competitor is building familiarity with that homeowner while you stay invisible.
      </p>
      <p>
        The practical implication is that exterior contractor marketing needs to work at two different stages: visibility during the broad research phase (so you get on the shortlist) and visibility during the high-intent comparison phase (so you get the quote request). Most contractors only invest in the second and wonder why their ad spend isn&apos;t producing more leads.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">2. Local Service Ads for Siding and Exterior Searches</h2>
      <p>
        When a homeowner moves from research to action and searches something like &ldquo;siding contractor near me&rdquo; or &ldquo;siding replacement [city],&rdquo; Local Service Ads (LSA), where available in your area, appear above regular search results with a Google Guarantee badge and a direct call button. You pay per verified lead rather than per click, which suits exterior work well given how high the average project value is.
      </p>
      <p>
        LSA approval requires a background check and licence/insurance verification. For a purchase this size, that verification badge gives homeowners a meaningful reason to trust your business over a competitor who skipped the process.
      </p>

      <div className="bg-background-card border border-border rounded-xl p-7 my-8 space-y-4">
        <p className="font-semibold text-text-primary text-[15px]">Searches exterior contractors need to appear for:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-secondary">
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;siding contractor near me&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;siding replacement cost [city]&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;vinyl siding installation [city]&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;soffit and fascia repair near me&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;exterior renovation contractor [city]&rdquo;</div>
          <div className="bg-background-secondary rounded-lg px-4 py-2.5">&ldquo;storm damage siding repair&rdquo;</div>
        </div>
      </div>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-10 border border-border shadow">
        <Image
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80"
          alt="Exterior contractor installing siding on a residential home"
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
        />
      </div>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">3. Why Before/After Photos Matter So Much</h2>
      <p>
        No piece of content does more work for an exterior contractor than a strong before/after photo gallery. Siding, in particular, is highly visual, and homeowners comparing contractors want to see proof that a company can take a dated, worn exterior and turn it into something they would want on their own home. A gallery organized by material and style (vinyl, board and batten, stone accent, colour changes) helps a homeowner picture their own project before they ever call.
      </p>
      <p>
        These same photos do double duty as ad creative. A before/after carousel or short video performs well on Meta for reaching homeowners in the research phase who are not yet actively searching, building the kind of familiarity that makes them call you first when they are ready to request quotes.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">4. Google Maps Visibility for Exterior Renovation Searches</h2>
      <p>
        Below the paid listings, the Google Map Pack shows three local businesses, and for a considered purchase like exterior renovation, a lot of homeowners check this before calling anyone. The signals that move the needle most: a complete, accurate Google Business Profile with every service listed separately (siding, soffit and fascia, full exterior renovation), a steady stream of recent reviews, and project photos uploaded regularly rather than in one batch years ago.
      </p>

      <h2 className="font-serif text-[28px] text-text-primary mt-14 mb-6">5. Responding Fast Wins High-Value Projects</h2>
      <p>
        Because exterior renovation quotes are expensive, most homeowners request several and compare closely. The contractor who shows up for the on-site assessment fastest and sends a clear, professional written quote soonest has a real advantage, independent of price. A missed-call text-back and a simple online quote request form catch homeowners who reach out outside of business hours or while you are on-site with another client, so a slower-moving competitor doesn&apos;t win the project by default.
      </p>
      <p className="text-[17px] leading-relaxed mt-4">
        How quickly project inquiries build for your business depends on your market, competition, and the strength of your existing project portfolio, so we don&apos;t promise a fixed number of leads or a guaranteed timeline. If you want to see what a visibility and lead capture system like this could look like for your exterior or siding business, <Link href="/contact" className="text-accent-primary underline font-medium">get a free local growth assessment</Link>. See our full <Link href="/industries/exterior-services" className="text-accent-primary underline font-medium">exterior & siding contractor marketing services</Link> and how our <Link href="/services/lead-generation" className="text-accent-primary underline font-medium">lead generation system</Link> works.
      </p>
    </>
  );
}
