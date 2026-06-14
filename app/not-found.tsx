import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Pure Marketing",
  description: "The page you were looking for doesn't exist.",
  robots: { index: false, follow: false },
};

const QUICK_LINKS = [
  { label: "Home", href: "/", desc: "Back to the homepage" },
  { label: "Services", href: "/services/web-development", desc: "See what we offer" },
  { label: "Portfolio", href: "/portfolio", desc: "View our work" },
  { label: "Contact", href: "/contact", desc: "Get in touch" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center px-6 py-32">
      <div className="max-w-[560px] w-full text-center">
        <p className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4">404 Error</p>
        <h1 className="text-[72px] md:text-[100px] font-bold text-white leading-none mb-4">404</h1>
        <h2 className="text-[24px] md:text-[32px] font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-[#aaa] text-[17px] leading-relaxed mb-10">
          The page you are looking for does not exist or has been moved. Let us help you find what you need.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-10">
          {QUICK_LINKS.map(({ label, href, desc }) => (
            <Link
              key={href}
              href={href}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:border-accent-primary/50 hover:bg-white/10 transition-all duration-200 group"
            >
              <p className="font-semibold text-white text-sm group-hover:text-accent-primary transition-colors">{label}</p>
              <p className="text-[#666] text-xs mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-primary text-white rounded-lg px-7 py-3.5 font-bold text-[15px] hover:bg-[#D9531E] transition-colors shadow-lg shadow-accent-primary/30"
          >
            Book a Free Strategy Call
          </Link>
          <a
            href="tel:+16479512786"
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 rounded-lg px-6 py-3.5 hover:border-white/40 hover:text-white transition-all text-sm"
          >
            Call +1 647-951-2786
          </a>
        </div>
      </div>
    </div>
  );
}
