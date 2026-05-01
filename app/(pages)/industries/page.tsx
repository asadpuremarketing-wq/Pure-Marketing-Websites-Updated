import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

const INDUSTRIES = [
  { name: "Electricians", href: "/industries/electricians", desc: "More service calls and emergency leads" },
  { name: "Plumbers", href: "/industries/plumbers", desc: "Fill your schedule with qualified jobs" },
  { name: "HVAC", href: "/industries/hvac", desc: "Year-round leads for installs and service" },
  { name: "Painters", href: "/industries/painters", desc: "Book more residential and commercial projects" },
  { name: "Real Estate", href: "/industries/real-estate", desc: "More listings, buyers, and referrals" },
  { name: "Restaurants", href: "/industries/restaurants", desc: "Bring more diners through the door" },
  { name: "Locksmiths", href: "/industries/locksmiths", desc: "24/7 emergency calls and local domination on Google Maps" },
  { name: "General Contractors", href: "/industries/general-contractors", desc: "Land bigger projects with a consistent lead pipeline" },
];

export default function Industries() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        label="Industries"
        title="Marketing Built for"
        titleAccent="Your Industry"
        subtitle="We specialize in local service businesses. Pick your industry to see exactly how we help businesses like yours get more leads and grow faster."
        breadcrumbs={[{ label: "Industries" }]}
      />

      <section className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.name}
                href={ind.href}
                className="group bg-background-card border border-border rounded-2xl p-7 hover:border-accent-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-[18px] font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                  {ind.name}
                </h3>
                <p className="text-sm text-text-secondary">{ind.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-accent-primary">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
