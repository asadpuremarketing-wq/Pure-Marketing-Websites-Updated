import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Pure Marketing",
  description: "Pure Marketing's Privacy Policy — how we collect, use, and protect your personal information.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 30, 2025";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#080808] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#F06428 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <p className="text-accent-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Legal</p>
          <h1 className="text-[36px] md:text-[52px] font-black text-white leading-tight tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#666] text-[15px]">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">

          <Section title="1. Who We Are">
            <p>Pure Marketing (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a digital marketing agency based in Hamilton, Ontario, Canada. We operate the website <strong>puremarketing.ca</strong> and provide marketing services to local businesses across Canada and the United States.</p>
            <p>If you have questions about this policy, contact us at <a href="mailto:info@puremarketing.ca" className="text-accent-primary hover:underline">info@puremarketing.ca</a>.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li><strong>Contact form submissions:</strong> Name, email address, phone number, business type, and message content.</li>
              <li><strong>Email communications:</strong> Any information you include when emailing us.</li>
              <li><strong>Analytics data:</strong> Pages visited, time spent on site, device type, browser, and general location (country/city level) — collected anonymously via Google Analytics.</li>
              <li><strong>Cookies:</strong> Session data and preferences stored in your browser to improve your experience.</li>
            </ul>
            <p>We do <strong>not</strong> collect payment information directly — all payments are processed securely through Stripe.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide our services</li>
              <li>Send you confirmation emails after form submissions</li>
              <li>Improve our website and marketing strategies</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We do <strong>not</strong> sell, rent, or share your personal information with third parties for their marketing purposes.</p>
          </Section>

          <Section title="4. Cookies">
            <p>Our website uses cookies to enhance your browsing experience. These include:</p>
            <ul>
              <li><strong>Essential cookies:</strong> Required for the website to function properly.</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site (Google Analytics). These are anonymized.</li>
              <li><strong>Advertising cookies:</strong> Used by Google Ads and Meta Ads to show relevant advertising. These may track your activity across other websites.</li>
            </ul>
            <p>You can disable cookies in your browser settings at any time, though this may affect site functionality.</p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>We use the following third-party services that may collect data:</p>
            <ul>
              <li><strong>Google Analytics</strong> — website traffic analysis</li>
              <li><strong>Google Ads / Google Local Service Ads</strong> — advertising</li>
              <li><strong>Meta (Facebook & Instagram) Ads</strong> — advertising</li>
              <li><strong>Stripe</strong> — payment processing</li>
              <li><strong>Vercel</strong> — website hosting</li>
            </ul>
            <p>Each of these services has their own privacy policies, which we encourage you to review.</p>
          </Section>

          <Section title="6. Data Retention">
            <p>We retain contact form submissions and email communications for up to <strong>2 years</strong> for business purposes. Analytics data is retained as per Google Analytics default settings (26 months). You may request deletion of your data at any time by contacting us.</p>
          </Section>

          <Section title="7. Your Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p>To exercise any of these rights, email us at <a href="mailto:info@puremarketing.ca" className="text-accent-primary hover:underline">info@puremarketing.ca</a>.</p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>Our website and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="10. Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:info@puremarketing.ca" className="text-accent-primary hover:underline">info@puremarketing.ca</a></li>
              <li><strong>Phone:</strong> <a href="tel:+16479512786" className="text-accent-primary hover:underline">+1 647-951-2786</a></li>
              <li><strong>Address:</strong> Hamilton, Ontario, Canada</li>
            </ul>
          </Section>

        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-[#eee] flex items-center justify-between">
          <Link href="/" className="text-accent-primary font-semibold text-sm hover:underline">← Back to Home</Link>
          <Link href="/terms-of-service" className="text-[#888] text-sm hover:text-accent-primary transition-colors">Terms of Service →</Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-[22px] font-black text-[#0d0d0d] mb-4 pb-2 border-b border-[#f0f0f0]">{title}</h2>
      <div className="text-[#444] text-[15px] leading-relaxed space-y-3">{children}</div>
    </div>
  );
}
