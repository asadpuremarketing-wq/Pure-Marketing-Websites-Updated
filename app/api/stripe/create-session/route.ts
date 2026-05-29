import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const PLANS: Record<string, {
  name: string;
  description: string;
  amountCents: number;
  cancellationNote: string;
}> = {
  "1-month": {
    name: "Social Media Management — Monthly",
    description: "Full social media management. Instagram, Facebook, daily content, community engagement, monthly analytics. Cancel anytime.",
    amountCents: 149900,
    cancellationNote: "Cancel anytime. No cancellation fee.",
  },
  "3-month": {
    name: "Social Media Management — 3 Month Plan",
    description: "Everything in Monthly plus TikTok, LinkedIn, bi-weekly check-ins, competitor analysis, Story and Reel creation. Billed monthly for 3 months. 25% cancellation fee if cancelled early.",
    amountCents: 119900,
    cancellationNote: "Billed monthly for 3 months. 25% cancellation fee applies if cancelled before 3 months.",
  },
  "6-month": {
    name: "Social Media Management — 6 Month Plan",
    description: "Everything in 3 Month plus all platforms, weekly strategy calls, 2 Reels per month, priority support. Billed monthly for 6 months. 25% cancellation fee if cancelled early.",
    amountCents: 89900,
    cancellationNote: "Billed monthly for 6 months. 25% cancellation fee applies if cancelled before 6 months.",
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

  const { firstName, lastName, email, phone, businessName, industry, message, plan } = await req.json();

  if (!firstName || !lastName || !email || !phone || !businessName || !industry || !plan) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const planConfig = PLANS[plan];
  if (!planConfig) {
    return NextResponse.json({ error: "Invalid plan selected" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  try {
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
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        plan,
        firstName,
        lastName,
        email,
        phone,
        businessName,
        industry,
        message: message ?? "",
      },
      subscription_data: {
        metadata: {
          plan,
          firstName,
          lastName,
          phone,
          businessName,
          industry,
        },
      },
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
