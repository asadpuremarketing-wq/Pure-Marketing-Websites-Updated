import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/puremarketing0",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61576684511407",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/pure-marketing0/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Google",
    href: "https://g.page/puremarketing",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
];

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1714] text-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Logo, Tagline & Social */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tight inline-block text-white">
              Pure Marketing
            </Link>
            <p className="text-[#9E9892] text-sm max-w-xs leading-relaxed">
              Helping local businesses across Canada get more leads, more bookings, and more revenue through proven digital marketing.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9E9892] hover:text-white hover:border-white/30 transition-colors"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#9E9892] hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4 text-[#9E9892] text-sm">
              <li>
                <a href="tel:+16479512786" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  +1 647-951-2786
                </a>
              </li>
              <li>
                <a href="mailto:info@puremarketing.ca" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  info@puremarketing.ca
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-primary flex-shrink-0" />
                Hamilton, Ontario - Serving all of Canada
              </li>
              <li className="pt-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-accent-primary text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-[#D9531E] transition-colors">
                  Book a Free Strategy Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#6B6560]/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#6B6560]">
          <p>&copy; {new Date().getFullYear()} Pure Marketing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
