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
    slug: "gta-restaurant-marketing-guide",
    category: "Restaurant Marketing",
    title: "How GTA Restaurants Can Fill More Tables Using Digital Marketing",
    excerpt:
      "The restaurant industry in Greater Toronto is one of the most competitive markets in Canada. Here's the exact digital marketing playbook we use to help local restaurants stand out, get found, and fill seats consistently.",
    author: "Asad Saif",
    date: "April 22, 2024",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85",
    imageAlt: "Busy restaurant dining room with warm lighting",
    toc: ["Google Business Profile", "The Review Strategy", "Social Media for GTA Restaurants", "Meta Ads: The $15/Day Campaign", "Your Website", "Video Content", "Budget Breakdown"],
    stats: [
      { value: "70%", label: "of Map Pack clicks go to top 3 results" },
      { value: "520%", label: "more calls with 100+ GBP photos" },
      { value: "$180K+", label: "annual revenue gain from 20 extra weekly covers" },
    ],
    ctaTitle: "Ready to fill more tables?",
    ctaDesc: "We work with restaurants across the GTA and Hamilton. Book a free 30-minute strategy call and we'll audit your online presence for free.",
    metaTitle: "How GTA Restaurants Fill More Tables With Digital Marketing | Pure Marketing",
    metaDescription: "The exact digital marketing playbook Pure Marketing uses to help GTA restaurants get found on Google, build reviews, and fill seats consistently.",
    keywords: ["restaurant marketing Toronto", "how to get more restaurant customers", "restaurant Google Ads", "GTA restaurant digital marketing"],
  },
  {
    slug: "how-electricians-get-more-leads",
    category: "Electrician Marketing",
    title: "How Electricians Get More Leads Without Relying on Word of Mouth",
    excerpt:
      "Most electricians get 80% of their business from referrals. That feels safe — until referrals dry up and the schedule empties. Here's the system we use to put electricians in front of homeowners searching for them right now.",
    author: "Asad Saif",
    date: "January 14, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=85",
    imageAlt: "Electrician working on a residential panel",
    toc: ["The Referral Trap", "Google Local Service Ads for Electricians", "Google Business Profile Optimization", "Your Electrician Website", "Follow-Up Automation"],
    stats: [
      { value: "312%", label: "average lead increase for electrician clients" },
      { value: "18+", label: "qualified calls per week" },
      { value: "90", label: "days to full results" },
    ],
    ctaTitle: "Want 18+ qualified calls per week?",
    ctaDesc: "We build complete lead generation systems exclusively for electricians. Book a free 30-minute strategy call and see exactly what's possible in your market.",
    metaTitle: "How Electricians Get More Leads Without Word of Mouth | Pure Marketing",
    metaDescription: "The exact Google Ads, Local Service Ads, and website system Pure Marketing uses to get electricians 18+ qualified calls per week. No referrals needed.",
    keywords: ["electrician marketing", "how to get more electrician leads", "Google Ads for electricians", "electrician lead generation Ontario"],
  },
  {
    slug: "plumbing-business-emergency-calls",
    category: "Plumber Marketing",
    title: "Why Your Plumbing Business Is Missing Emergency Calls (And How to Fix It)",
    excerpt:
      "Every day, dozens of homeowners in your service area search for an emergency plumber and call someone else. Not because that company is better — because they show up on Google and you don't. Here's how to fix it.",
    author: "Asad Saif",
    date: "February 3, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1400&q=85",
    imageAlt: "Plumber working under a sink",
    toc: ["Where Emergency Calls Go", "Local Service Ads for Plumbers", "After-Hours Lead Recovery", "The Complete Plumber Marketing System"],
    stats: [
      { value: "289%", label: "average lead increase for plumber clients" },
      { value: "22+", label: "qualified calls per week" },
      { value: "7–14", label: "days to first leads" },
    ],
    ctaTitle: "Start getting more emergency calls this week.",
    ctaDesc: "Most plumber clients start seeing qualified leads within 7-14 days of launch. Book a free strategy call and we'll show you exactly where you're losing calls right now.",
    metaTitle: "Why Plumbers Miss Emergency Calls and How to Fix It | Pure Marketing",
    metaDescription: "Discover why your plumbing business is missing emergency calls and how Google Local Service Ads and after-hours automation capture every lead.",
    keywords: ["plumber marketing", "how to get more plumbing leads", "Google Ads for plumbers", "plumber lead generation Ontario", "emergency plumber marketing"],
  },
  {
    slug: "hvac-year-round-leads",
    category: "HVAC Marketing",
    title: "How HVAC Companies Stay Fully Booked Through Every Season",
    excerpt:
      "Most HVAC companies are overwhelmed in summer and bored in spring. The slow season isn't inevitable — it's a marketing problem. Here's the campaign strategy that keeps our HVAC clients busy every month of the year.",
    author: "Asad Saif",
    date: "February 18, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85",
    imageAlt: "HVAC technician servicing an outdoor unit",
    toc: ["The Seasonal Trap", "Campaign Calendar by Season", "Selling Maintenance Contracts", "Off-Season Google Ads Strategy", "The Year-Round HVAC System"],
    stats: [
      { value: "267%", label: "average lead increase for HVAC clients" },
      { value: "12", label: "months per year fully booked" },
      { value: "$36K", label: "revenue tracked in first 90 days" },
    ],
    ctaTitle: "Stop losing money in slow seasons.",
    ctaDesc: "We specialize in year-round HVAC marketing. Book a free strategy call and we'll build you a campaign calendar that keeps your technicians busy every month.",
    metaTitle: "How HVAC Companies Stay Fully Booked Year-Round | Pure Marketing",
    metaDescription: "The seasonal campaign strategy Pure Marketing uses to keep HVAC companies fully booked through summer, winter, and the slow in-between months.",
    keywords: ["HVAC marketing", "how to get HVAC leads year round", "HVAC Google Ads Canada", "HVAC company marketing Ontario", "how to get HVAC customers in slow season"],
  },
  {
    slug: "painting-company-marketing",
    category: "Painter Marketing",
    title: "How Painting Companies Book 3 Months in Advance Without Cold Calling",
    excerpt:
      "Painting is highly visual, highly seasonal, and extremely competitive for online ads. But the companies winning aren't bidding harder — they're using before/after video content to pre-sell homeowners before a competitor even gets a callback.",
    author: "Asad Saif",
    date: "March 4, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1400&q=85",
    imageAlt: "Painter rolling a wall with fresh white paint",
    toc: ["Why Painters Struggle With Consistent Bookings", "Before/After Video: The Highest-Converting Content for Painters", "Google Ads for Painting Estimate Requests", "Extending Into Commercial Work", "The Painter Marketing System"],
    stats: [
      { value: "324%", label: "average project booking increase" },
      { value: "8 wk.", label: "booked in advance on average" },
      { value: "$52K", label: "revenue tracked in first 90 days" },
    ],
    ctaTitle: "Book your schedule 8 weeks in advance.",
    ctaDesc: "We build marketing systems specifically for painting companies. Book a free strategy call and we'll show you how to generate consistent residential projects in your market.",
    metaTitle: "How Painting Companies Book 3 Months in Advance | Pure Marketing",
    metaDescription: "The before/after video and Google Ads strategy Pure Marketing uses to help painting companies go from sporadic referrals to booking 8 weeks out consistently.",
    keywords: ["painting company marketing", "how to get more painting jobs", "painter Google Ads", "painting business lead generation", "how to market a painting business"],
  },
  {
    slug: "general-contractor-90-day-plan",
    category: "Contractor Marketing",
    title: "The 90-Day Marketing Plan That Fills a General Contractor's Calendar",
    excerpt:
      "General contractors have long sales cycles, high job values, and plenty of competitors. Getting consistent projects requires more than a website. Here's the month-by-month system we build for contractors to generate reliable renovation and construction leads.",
    author: "Asad Saif",
    date: "March 20, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85",
    imageAlt: "General contractor reviewing plans at a job site",
    toc: ["Why Contractors Struggle With Consistent Work", "Month 1: Foundation (Website + Google Profile)", "Month 2: Paid Traffic (Google Ads + Meta Ads)", "Month 3: Scale (Retargeting + SEO + Automation)", "What to Expect in 90 Days"],
    stats: [
      { value: "10", label: "proven systems in the 90-day program" },
      { value: "30", label: "days to first qualified estimate requests" },
      { value: "$4,500", label: "complete 90-day growth system" },
    ],
    ctaTitle: "Fill your project calendar in 90 days.",
    ctaDesc: "Our 90-day contractor growth system is built specifically for general contractors who want consistent renovation and construction leads. Book a free strategy call.",
    metaTitle: "The 90-Day Marketing Plan for General Contractors | Pure Marketing",
    metaDescription: "The month-by-month marketing system Pure Marketing uses to fill general contractors' project calendars with consistent residential and commercial renovation leads.",
    keywords: ["general contractor marketing", "how to get more construction leads", "contractor Google Ads", "renovation company marketing", "contractor lead generation Ontario"],
  },
  {
    slug: "real-estate-agent-video-marketing",
    category: "Real Estate Marketing",
    title: "How Ontario Real Estate Agents Get More Listings Using Video",
    excerpt:
      "Every agent has a headshot and a listing sheet. The agents closing 30+ deals a year have something different: a video presence that makes sellers choose them before they've even made a call. Here's how video marketing works for Ontario real estate agents.",
    author: "Asad Saif",
    date: "April 8, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=85",
    imageAlt: "Real estate agent showing a home to potential buyers",
    toc: ["Why Video Has Become Non-Negotiable for Agents", "The 3 Videos Every Agent Needs", "How to Turn Listing Videos Into Seller Leads", "Distributing Your Videos for Maximum Reach", "Case Study: 4.2x Faster Sales"],
    stats: [
      { value: "4.2x", label: "faster property sales with listing video" },
      { value: "35%", label: "more qualified buyer leads" },
      { value: "8%", label: "higher average selling price" },
    ],
    ctaTitle: "Build a video presence that wins listings.",
    ctaDesc: "We produce professional property tour videos and agent brand videos for Ontario real estate agents. Book a free strategy call to see what's possible in your market.",
    metaTitle: "How Ontario Real Estate Agents Get More Listings With Video | Pure Marketing",
    metaDescription: "The video marketing strategy Pure Marketing uses to help Ontario real estate agents sell properties 4.2x faster and win more listings through personal brand videos.",
    keywords: ["real estate agent marketing", "real estate video marketing Ontario", "how to get more real estate listings", "property tour video", "real estate marketing Canada"],
  },
  {
    slug: "locksmith-google-ads-strategy",
    category: "Locksmith Marketing",
    title: "How Locksmiths Get to the Top of Google for Emergency Searches",
    excerpt:
      "Emergency lockout customers don't scroll past the first result. They call the first locksmith they see. If that's not you, you're invisible during the highest-value moments of your business. Here's how to fix that in 7 days.",
    author: "Asad Saif",
    date: "April 25, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1400&q=85",
    imageAlt: "Locksmith using tools to unlock a door",
    toc: ["Where Emergency Lockout Customers Search", "Local Service Ads for Locksmiths", "Google Business Profile for the Map Pack", "Missed-Call Automation", "Building a 24/7 Emergency Lead System"],
    stats: [
      { value: "3x", label: "more daily emergency calls in 30 days" },
      { value: "Top 3", label: "Google Maps ranking achieved" },
      { value: "100%", label: "missed-call recovery rate with automation" },
    ],
    ctaTitle: "Get to the top of emergency locksmith searches.",
    ctaDesc: "We can have your Local Service Ads live within 7 days. Book a free strategy call and we'll show you exactly how to dominate emergency locksmith searches in your city.",
    metaTitle: "How Locksmiths Get to the Top of Google for Emergency Searches | Pure Marketing",
    metaDescription: "The Google Local Service Ads and GBP strategy Pure Marketing uses to triple daily emergency calls for locksmiths within 30 days of launch.",
    keywords: ["locksmith marketing", "locksmith Google Ads", "how to get more locksmith calls", "locksmith Local Service Ads", "emergency locksmith marketing Canada"],
  },
  {
    slug: "landscaping-company-lead-generation",
    category: "Landscaper Marketing",
    title: "How Landscaping Companies Get Consistent Contracts (Not Just One-Time Jobs)",
    excerpt:
      "One-time lawn cuts pay the bills. Seasonal maintenance contracts build a business. The difference is marketing — specifically, how you position your services online to attract homeowners looking for an ongoing landscaping partner.",
    author: "Asad Saif",
    date: "May 12, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=85",
    imageAlt: "Landscaper mowing a well-kept lawn",
    toc: ["One-Time Jobs vs Recurring Contracts", "What Homeowners Search for When They Want a Landscaper", "Before/After Content on Meta: The Landscaper's Best Channel", "Converting Estimates Into Seasonal Contracts", "The Landscaper Marketing System"],
    stats: [
      { value: "40–80", label: "qualified leads per month on average" },
      { value: "5–8x", label: "average return on ad spend" },
      { value: "14", label: "days to first leads" },
    ],
    ctaTitle: "Build a landscaping business that runs year-round.",
    ctaDesc: "We help landscaping companies shift from sporadic one-time jobs to consistent seasonal maintenance contracts. Book a free strategy call to see what's possible.",
    metaTitle: "How Landscaping Companies Get Consistent Seasonal Contracts | Pure Marketing",
    metaDescription: "The lead generation and content strategy Pure Marketing uses to help landscaping companies move from one-time jobs to recurring seasonal maintenance contracts.",
    keywords: ["landscaping company marketing", "how to get landscaping clients", "landscaper Google Ads", "lawn care lead generation", "landscaping business marketing Canada"],
  },
];

export function getPost(slug: string): BlogPostMeta | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}
