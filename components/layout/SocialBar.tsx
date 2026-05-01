import Link from "next/link";

const SOCIAL = [
  {
    name: "Instagram",
    href: "https://instagram.com/puremarketing",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/puremarketing",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/puremarketing",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function SocialBar() {
  return (
    <div className="bg-[#1a1a1a] text-white text-xs py-2 px-6 hidden md:block">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <span className="text-[#999] text-xs">
          Hamilton, Ontario - Serving all of Canada & USA
        </span>
        <div className="flex items-center gap-5">
          <a href="tel:+16479512786" className="text-[#999] hover:text-white transition-colors">
            +1 647-951-2786
          </a>
          <div className="flex items-center gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                className="text-[#999] hover:text-accent-primary transition-colors"
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
