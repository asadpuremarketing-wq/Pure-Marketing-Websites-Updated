import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

/* ─── Plan configuration ─────────────────────────────────────── */

const PLANS: Record<
  string,
  { name: string; description: string; amountCents: number; billingLabel: string }
> = {
  "1-month": {
    name: "Social Media Management — Month-to-Month",
    description:
      "Full social media management: daily posting on Instagram & Facebook, custom content creation, community engagement, monthly analytics report, dedicated account manager.",
    amountCents: 149900, // $1,499.00
    billingLabel: "Monthly plan — cancel anytime",
  },
  "3-month": {
    name: "Social Media Management — 3-Month Package",
    description:
      "Everything in Month-to-Month + priority content, TikTok & LinkedIn, bi-weekly check-ins, competitor analysis, Story & Reel creation, ad creative templates. Paid once.",
    amountCents: 359700, // $3,597.00
    billingLabel: "$1,199/mo × 3 months — paid once",
  },
  "6-month": {
    name: "Social Media Management — 6-Month Package",
    description:
      "Everything in 3-Month + full platform management, weekly strategy calls, 2 monthly Reels, influencer outreach, custom brand voice guide, priority 24/7 support. Paid once.",
    amountCents: 539400, // $5,394.00
    billingLabel: "$899/mo × 6 months — paid once",
  },
};

/* ─── Route handler ─────────────────────────────────────────── */

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return NextResponse.json(
      { error: "Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment variables." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeKey, { apiVersion: "2026-04-22.dahlia" });

  const {
    firstName,
    lastName,
    email,
    phone,
    businessName,
    industry,
    message,
    plan,
  } = await req.json();

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
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: {
              name: planConfig.name,
              description: planConfig.description,
              images: [`${baseUrl}/og-image.jpg`],
            },
            unit_amount: planConfig.amountCents,
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
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}&plan=${plan}`,
      cancel_url: `${baseUrl}/checkout?plan=${plan}&cancelled=true`,
      billing_address_collection: "auto",
      phone_number_collection: { enabled: false },
      custom_text: {
        submit: {
          message:
            "After payment, our team will reach out within 1 business day to schedule your onboarding call and get you started.",
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe session creation error:", err);
    return NextResponse.json({ error: "Failed to create payment session" }, { status: 500 });
  }
}
