import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Pure Marketing",
  description: "Pure Marketing's Terms of Service — the rules and guidelines for using our website and services.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 30, 2025";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#080808] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#F06428 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <p className="text-accent-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Legal</p>
          <h1 className="text-[36px] md:text-[52px] font-black text-white leading-tight tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-[#666] text-[15px]">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">

          <Section title="1. Agreement to Terms">
            <p>By accessing or using the website <strong>puremarketing.ca</strong> or any services provided by Pure Marketing (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
          </Section>

          <Section title="2. Services">
            <p>Pure Marketing provides digital marketing services including, but not limited to:</p>
            <ul>
              <li>Website design and development</li>
              <li>Google Ads and Local Service Ads management</li>
              <li>Meta (Facebook & Instagram) advertising</li>
              <li>Social media management</li>
              <li>Search engine optimization (SEO)</li>
              <li>Content creation and video production</li>
              <li>Lead generation systems</li>
            </ul>
            <p>The specific scope of services, deliverables, timelines, and fees are outlined in individual client agreements or proposals provided separately.</p>
          </Section>

          <Section title="3. Client Responsibilities">
            <p>As a client or user of our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information when requested</li>
              <li>Respond to communications in a timely manner</li>
              <li>Provide necessary access to accounts, platforms, and materials</li>
              <li>Not use our services for any unlawful or fraudulent purpose</li>
              <li>Pay all fees on time as outlined in your agreement</li>
            </ul>
          </Section>

          <Section title="4. Payment Terms">
            <p>Payment terms are outlined in individual client agreements. Generally:</p>
            <ul>
              <li>Invoices are due upon receipt unless otherwise agreed</li>
              <li>Late payments may result in suspension of services</li>
              <li>All fees are in Canadian Dollars (CAD) unless otherwise stated</li>
              <li>Ad spend budgets are separate from service fees and managed directly in client ad accounts</li>
              <li>Refunds are handled on a case-by-case basis at our discretion</li>
            </ul>
          </Section>

          <Section title="5. Intellectual Property">
            <p>Upon full payment, clients own the final deliverables created specifically for them (website content, ad creatives, etc.). Pure Marketing retains ownership of:</p>
            <ul>
              <li>Our proprietary processes, systems, and methodologies</li>
              <li>Templates, frameworks, and tools used in service delivery</li>
              <li>Any pre-existing intellectual property we bring to the engagement</li>
            </ul>
            <p>We reserve the right to display completed work in our portfolio unless explicitly agreed otherwise in writing.</p>
          </Section>

          <Section title="6. Confidentiality">
            <p>We treat all client information, business data, and strategies as confidential. We will not disclose your confidential information to third parties without your consent, except as required by law. We expect the same in return regarding our proprietary processes and strategies.</p>
          </Section>

          <Section title="7. Results Disclaimer">
            <p>Digital marketing results vary based on many factors including market competition, ad spend, industry, location, and client follow-through. <strong>Pure Marketing does not guarantee specific results</strong> such as a set number of leads, a specific revenue figure, or a particular search ranking.</p>
            <p>We commit to applying our best expertise, continuously optimizing campaigns, and working toward your stated goals. Any case studies or results mentioned on our website represent past performance and are not a guarantee of future results.</p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>To the maximum extent permitted by law, Pure Marketing shall not be liable for:</p>
            <ul>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits or revenue</li>
              <li>Losses resulting from third-party platform changes (Google, Meta, etc.)</li>
              <li>Losses resulting from client failure to follow recommendations</li>
            </ul>
            <p>Our total liability to any client shall not exceed the total fees paid to us in the three months preceding the claim.</p>
          </Section>

          <Section title="9. Termination">
            <p>Either party may terminate the service relationship with written notice as specified in the individual client agreement. Upon termination:</p>
            <ul>
              <li>All outstanding fees become immediately due</li>
              <li>We will provide reasonable transition assistance</li>
              <li>Client retains ownership of all paid-for deliverables</li>
              <li>Each party returns or destroys confidential information of the other</li>
            </ul>
          </Section>

          <Section title="10. Governing Law">
            <p>These Terms of Service are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes shall be resolved in the courts of Hamilton, Ontario, Canada.</p>
          </Section>

          <Section title="11. Changes to Terms">
            <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to our website with an updated &ldquo;Last updated&rdquo; date. Continued use of our services after changes constitutes acceptance.</p>
          </Section>

          <Section title="12. Contact Us">
            <p>For questions about these Terms of Service:</p>
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
          <Link href="/privacy-policy" className="text-[#888] text-sm hover:text-accent-primary transition-colors">Privacy Policy →</Link>
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
