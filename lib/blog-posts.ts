export interface BlogPostMeta {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  toc: string[];
  stats: Array<{ value: string; label: string }>;
  ctaTitle: string;
  ctaDesc: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const ALL_POSTS: BlogPostMeta[] = [
  {
    slug: "how-electricians-get-more-leads",
    category: "Electrician Marketing",
    title: "How Electricians Get More Leads Without Relying on Word of Mouth",
    excerpt:
      "Most electricians get the majority of their business from referrals. That feels safe, until referrals dry up and the schedule empties. Here's the system we use to put electricians in front of homeowners searching for them right now.",
    author: "Asad Saif",
    date: "January 14, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=85",
    imageAlt: "Electrician working on a residential panel",
    toc: ["The Referral Trap", "Google Local Service Ads for Electricians", "Google Business Profile Optimization", "Your Electrician Website", "Follow-Up Automation"],
    stats: [
      { value: "1", label: "Focused Lead Generation System" },
      { value: "CA", label: "Canada-Wide" },
      { value: "0", label: "Long-Term Contracts" },
    ],
    ctaTitle: "Want more qualified calls every week?",
    ctaDesc: "We build complete lead generation systems for electricians. Get a free local growth assessment and see what's possible in your market.",
    metaTitle: "How Electricians Get More Leads Without Word of Mouth | Pure Marketing",
    metaDescription: "The Google Ads, Local Service Ads, and website system Pure Marketing uses to help electricians generate consistent qualified calls without relying on referrals.",
    keywords: ["electrician marketing", "how to get more electrician leads", "Google Ads for electricians", "electrician lead generation Ontario"],
  },
  {
    slug: "plumbing-business-emergency-calls",
    category: "Plumber Marketing",
    title: "Why Your Plumbing Business Is Missing Emergency Calls (And How to Fix It)",
    excerpt:
      "Every day, dozens of homeowners in your service area search for an emergency plumber and call someone else. Not because that company is better, but because they show up on Google and you don't. Here's how to fix it.",
    author: "Asad Saif",
    date: "February 3, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1400&q=85",
    imageAlt: "Plumber working under a sink",
    toc: ["Where Emergency Calls Go", "Local Service Ads for Plumbers", "After-Hours Lead Recovery", "The Complete Plumber Marketing System"],
    stats: [
      { value: "1", label: "Focused Lead Generation System" },
      { value: "CA", label: "Canada-Wide" },
      { value: "0", label: "Long-Term Contracts" },
    ],
    ctaTitle: "Start capturing more emergency calls.",
    ctaDesc: "Paid campaigns can go live quickly, and results build from there as your visibility and reviews grow. Get a free local growth assessment and we'll show you exactly where you're losing calls right now.",
    metaTitle: "Why Plumbers Miss Emergency Calls and How to Fix It | Pure Marketing",
    metaDescription: "Discover why your plumbing business is missing emergency calls and how Google Local Service Ads and after-hours automation help capture more of them.",
    keywords: ["plumber marketing", "how to get more plumbing leads", "Google Ads for plumbers", "plumber lead generation Ontario", "emergency plumber marketing"],
  },
  {
    slug: "hvac-year-round-leads",
    category: "HVAC Marketing",
    title: "How HVAC Companies Stay Fully Booked Through Every Season",
    excerpt:
      "Most HVAC companies are overwhelmed in summer and quiet in spring. The slow season isn't inevitable: it's a marketing calendar problem. Here's the campaign strategy that helps HVAC companies stay busier every month of the year.",
    author: "Asad Saif",
    date: "February 18, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85",
    imageAlt: "HVAC technician servicing an outdoor unit",
    toc: ["The Seasonal Trap", "Campaign Calendar by Season", "Selling Maintenance Contracts", "Off-Season Google Ads Strategy", "The Year-Round HVAC System"],
    stats: [
      { value: "1", label: "Focused Lead Generation System" },
      { value: "CA", label: "Canada-Wide" },
      { value: "0", label: "Long-Term Contracts" },
    ],
    ctaTitle: "Stop writing off your slow season.",
    ctaDesc: "We specialize in year-round HVAC marketing. Get a free local growth assessment and we'll walk through what a campaign calendar could look like for your business.",
    metaTitle: "How HVAC Companies Stay Fully Booked Year-Round | Pure Marketing",
    metaDescription: "The seasonal campaign strategy Pure Marketing uses to help HVAC companies stay busier through summer, winter, and the slow in-between months.",
    keywords: ["HVAC marketing", "how to get HVAC leads year round", "HVAC Google Ads Canada", "HVAC company marketing Ontario", "how to get HVAC customers in slow season"],
  },
  {
    slug: "painting-company-marketing",
    category: "Painter Marketing",
    title: "How Painting Companies Build a Steadier Pipeline Without Cold Calling",
    excerpt:
      "Painting is highly visual, highly seasonal, and competitive for online ads. But the companies winning aren't bidding harder, they're using before/after video content to pre-sell homeowners before a competitor even gets a callback.",
    author: "Asad Saif",
    date: "March 4, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1400&q=85",
    imageAlt: "Painter rolling a wall with fresh white paint",
    toc: ["Why Painters Struggle With Consistent Bookings", "Before/After Video: The Highest-Converting Content for Painters", "Google Ads for Painting Estimate Requests", "Extending Into Commercial Work", "The Painter Marketing System"],
    stats: [
      { value: "1", label: "Focused Lead Generation System" },
      { value: "CA", label: "Canada-Wide" },
      { value: "0", label: "Long-Term Contracts" },
    ],
    ctaTitle: "Build a steadier project pipeline.",
    ctaDesc: "We build marketing systems specifically for painting companies. Get a free local growth assessment and we'll show you how to generate more consistent residential project inquiries in your market.",
    metaTitle: "How Painting Companies Build a Steadier Project Pipeline | Pure Marketing",
    metaDescription: "The before/after video and Google Ads strategy Pure Marketing uses to help painting companies move from sporadic referrals to a steadier pipeline of project inquiries.",
    keywords: ["painting company marketing", "how to get more painting jobs", "painter Google Ads", "painting business lead generation", "how to market a painting business"],
  },
  {
    slug: "general-contractor-90-day-plan",
    category: "Contractor Marketing",
    title: "A 90-Day Marketing Plan to Fill a General Contractor's Calendar",
    excerpt:
      "General contractors have long sales cycles, high job values, and plenty of competitors. Getting consistent projects requires more than a website. Here's a month-by-month example plan for generating more renovation and construction leads.",
    author: "Asad Saif",
    date: "March 20, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85",
    imageAlt: "General contractor reviewing plans at a job site",
    toc: ["Why Contractors Struggle With Consistent Work", "Month 1: Foundation (Website + Google Profile)", "Month 2: Paid Traffic (Google Ads + Meta Ads)", "Month 3: Scale (Retargeting + SEO + Automation)", "What a Typical Buildout Looks Like"],
    stats: [
      { value: "3", label: "Phases in a Typical Buildout" },
      { value: "CA", label: "Canada-Wide" },
      { value: "0", label: "Long-Term Contracts" },
    ],
    ctaTitle: "Fill your project calendar.",
    ctaDesc: "Our local lead generation system is built for general contractors who want more consistent renovation and construction leads. Get a free local growth assessment.",
    metaTitle: "A 90-Day Marketing Plan for General Contractors | Pure Marketing",
    metaDescription: "A month-by-month example marketing plan for general contractors who want a steadier pipeline of residential and commercial renovation leads.",
    keywords: ["general contractor marketing", "how to get more construction leads", "contractor Google Ads", "renovation company marketing", "contractor lead generation Ontario"],
  },
  {
    slug: "locksmith-google-ads-strategy",
    category: "Locksmith Marketing",
    title: "How Locksmiths Get to the Top of Google for Emergency Searches",
    excerpt:
      "Emergency lockout customers don't scroll past the first result. They call the first locksmith they see. If that's not you, you're invisible during the highest-value moments of your business. Here's how to start fixing that.",
    author: "Asad Saif",
    date: "April 25, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1400&q=85",
    imageAlt: "Locksmith using tools to unlock a door",
    toc: ["Where Emergency Lockout Customers Search", "Local Service Ads for Locksmiths", "Google Business Profile for the Map Pack", "Missed-Call Automation", "Building a 24/7 Emergency Lead System"],
    stats: [
      { value: "1", label: "Focused Lead Generation System" },
      { value: "24/7", label: "Lead Capture" },
      { value: "0", label: "Long-Term Contracts" },
    ],
    ctaTitle: "Get in front of emergency locksmith searches.",
    ctaDesc: "Local Service Ads can often go live quickly, and visibility builds from there as reviews and rankings grow. Get a free local growth assessment and we'll show you how to compete for emergency locksmith searches in your city.",
    metaTitle: "How Locksmiths Get to the Top of Google for Emergency Searches | Pure Marketing",
    metaDescription: "The Google Local Service Ads and GBP strategy Pure Marketing uses to help locksmiths capture more emergency call volume over time.",
    keywords: ["locksmith marketing", "locksmith Google Ads", "how to get more locksmith calls", "locksmith Local Service Ads", "emergency locksmith marketing Canada"],
  },
  {
    slug: "roofing-company-storm-season-leads",
    category: "Roofing Marketing",
    title: "How Roofing Companies Capture More Estimate Requests During Storm Season",
    excerpt:
      "When a storm rolls through or a roof starts leaking, homeowners search Google immediately and call whoever shows up first. Here's how roofing companies build visibility before storm season hits, instead of scrambling after.",
    author: "Asad Saif",
    date: "May 29, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1400&q=85",
    imageAlt: "Roofer inspecting shingles on a residential roof",
    toc: ["Why Roofing Demand Spikes and Disappears", "Local Service Ads for Storm Damage Searches", "Google Maps Visibility for Re-Roof Searches", "Fast Follow-Up Wins High-Value Jobs", "Building a Year-Round Roofing System"],
    stats: [
      { value: "1", label: "Focused Lead Generation System" },
      { value: "CA", label: "Canada-Wide" },
      { value: "0", label: "Long-Term Contracts" },
    ],
    ctaTitle: "Get visible before the next storm hits.",
    ctaDesc: "We build local lead generation systems for roofing companies so you capture estimate requests the moment homeowners start searching. Get a free local growth assessment.",
    metaTitle: "How Roofing Companies Capture More Estimate Requests | Pure Marketing",
    metaDescription: "The Google Ads, Local Service Ads, and Google Maps strategy Pure Marketing uses to help roofing companies capture more estimate requests during storm season and beyond.",
    keywords: ["roofing company marketing", "roofing lead generation", "storm damage roofing leads", "re-roof marketing", "roofing Google Ads Canada"],
  },
  {
    slug: "exterior-siding-contractor-lead-generation",
    category: "Exterior & Siding Marketing",
    title: "How Siding and Exterior Contractors Win Projects During the Research Phase",
    excerpt:
      "Homeowners planning a siding or exterior renovation research and compare contractors online for weeks before they ever pick up the phone. If you're not visible during that research phase, you never make the shortlist. Here's how to fix that.",
    author: "Asad Saif",
    date: "June 12, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&q=85",
    imageAlt: "Exterior contractor installing siding on a residential home",
    toc: ["The Homeowner Research Phase", "Local Service Ads for Siding & Exterior Searches", "Why Before/After Photos Matter So Much", "Google Maps Visibility for Exterior Renovation Searches", "Responding Fast Wins High-Value Projects"],
    stats: [
      { value: "1", label: "Focused Lead Generation System" },
      { value: "CA", label: "Canada-Wide" },
      { value: "0", label: "Long-Term Contracts" },
    ],
    ctaTitle: "Get on the shortlist before the quote request.",
    ctaDesc: "We build local lead generation systems for siding and exterior contractors so you're visible during the weeks homeowners spend researching. Get a free local growth assessment.",
    metaTitle: "How Siding & Exterior Contractors Win More Projects | Pure Marketing",
    metaDescription: "The Google Ads, Local Service Ads, and before/after content strategy Pure Marketing uses to help siding and exterior contractors win more projects during the homeowner's research phase.",
    keywords: ["siding contractor marketing", "exterior contractor lead generation", "siding replacement leads", "exterior renovation marketing Canada", "siding company Google Ads"],
  },
];

export function getPost(slug: string): BlogPostMeta | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}
