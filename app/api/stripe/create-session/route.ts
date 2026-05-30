import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const SOCIAL_PLANS: Record<string, {
  name: string;
  description: string;
  amountCents: number;
  cancellationNote: string;
  intervalCount: number;
}> = {
  "1-month": {
    name: "Social Media Management — Monthly",
    description: "Full social media management. Instagram, Facebook, daily content, community engagement, monthly analytics. Cancel anytime.",
    amountCents: 149900,
    cancellationNote: "Cancel anytime. No cancellation fee.",
    intervalCount: 1,
  },
  "3-month": {
    name: "Social Media Management — 3 Month Plan",
    description: "Everything in Monthly plus TikTok, LinkedIn, bi-weekly check-ins, competitor analysis, Story and Reel creation. Billed monthly for 3 months. 25% cancellation fee if cancelled early.",
    amountCents: 119900,
    cancellationNote: "Billed monthly for 3 months. 25% cancellation fee applies if cancelled before 3 months.",
    intervalCount: 1,
  },
  "6-month": {
    name: "Social Media Management — 6 Month Plan",
    description: "Everything in 3 Month plus all platforms, weekly strategy calls, 2 Reels per month, priority support. Billed monthly for 6 months. 25% cancellation fee if cancelled early.",
    amountCents: 89900,
    cancellationNote: "Billed monthly for 6 months. 25% cancellation fee applies if cancelled before 6 months.",
    intervalCount: 1,
  },
};

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return NextResponse.json(
      { error: "Stripe is not configured. Add STRIPE_SECRET_KEY to your environment variables." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeKey, { apiVersion: "2026-04-22.dahlia" });

  const { firstName, lastName, email, phone, businessName, industry, message, plan, productType } = await req.json();

  if (!firstName || !lastName || !email || !phone || !businessName || !industry) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  try {
    // ── 90-Day Growth System ──────────────────────────────────────
    if (productType === "growth-system") {
      // $1,500/month subscription that auto-cancels after 3 payments
      const cancelAt = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 92; // ~3 months from now

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "subscription",
        customer_email: email,
        line_items: [
          {
            price_data: {
              currency: "cad",
              product_data: {
                name: "90-Day Growth System",
                description:
                  "Complete lead generation system: website, Google Ads, Meta Ads, SEO, automation, and more. $1,500/month × 3 months. Payment info saved — you will be charged automatically each month.",
              },
              unit_amount: 150000, // $1,500 CAD
              recurring: { interval: "month" },
            },
            quantity: 1,
          },
        ],
        metadata: {
          plan: "growth-system",
          productType: "growth-system",
          firstName,
          lastName,
          email,
          phone,
          businessName,
          industry,
          message: message ?? "",
        },
        subscription_data: {
          cancel_at: cancelAt,
          metadata: {
            plan: "growth-system",
            productType: "growth-system",
            firstName,
            lastName,
            phone,
            businessName,
            industry,
          },
        } as Parameters<typeof stripe.checkout.sessions.create>[0]["subscription_data"],
        success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}&plan=growth-system`,
        cancel_url: `${baseUrl}/checkout?product=growth-system&cancelled=true`,
        custom_text: {
          submit: {
            message:
              "Your payment info is saved securely. You will be charged $1,500 CAD/month for 3 months (total $4,500 CAD). Subscription ends automatically after 3 payments.",
          },
        },
      });

      return NextResponse.json({ url: session.url });
    }

    // ── Social Media Management ───────────────────────────────────
    const planConfig = SOCIAL_PLANS[plan];
    if (!planConfig) {
      return NextResponse.json({ error: "Invalid plan selected" }, { status: 400 });
    }

    // For fixed-term plans (3-month / 6-month) cancel automatically at end of commitment
    const months = plan === "6-month" ? 6 : plan === "3-month" ? 3 : null;
    const cancelAt = months
      ? Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 31 * months
      : undefined;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: {
              name: planConfig.name,
              description: planConfig.description,
            },
            unit_amount: planConfig.amountCents,
            recurring: { interval: "month" },
          },
          quantity: 1,
        },
      ],
      metadata: {
        plan,
        productType: "social-media",
        firstName,
        lastName,
        email,
        phone,
        businessName,
        industry,
        message: message ?? "",
      },
      subscription_data: {
        ...(cancelAt ? { cancel_at: cancelAt } : {}),
        metadata: {
          plan,
          productType: "social-media",
          firstName,
          lastName,
          phone,
          businessName,
          industry,
        },
      } as Parameters<typeof stripe.checkout.sessions.create>[0]["subscription_data"],
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}&plan=${plan}`,
      cancel_url: `${baseUrl}/checkout?plan=${plan}&cancelled=true`,
      custom_text: {
        submit: {
          message: planConfig.cancellationNote,
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", err);
    return NextResponse.json({ error: "Failed to create payment session" }, { status: 500 });
  }
}
