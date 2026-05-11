import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/* ─── Webhook handler ───────────────────────────────────────── */

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeKey || !webhookSecret) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
  }

  const stripe = new Stripe(stripeKey, { apiVersion: "2026-04-22.dahlia" });
  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  /* ─── Handle payment success ─────────────────────────────── */

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status !== "paid") {
      return NextResponse.json({ received: true });
    }

    const meta = session.metadata ?? {};
    const {
      plan,
      firstName,
      lastName,
      email,
      phone,
      businessName,
      industry,
      message,
    } = meta;

    const fullName = `${firstName} ${lastName}`;
    const amountPaid = session.amount_total
      ? `$${(session.amount_total / 100).toLocaleString("en-CA", { minimumFractionDigits: 2 })} CAD`
      : "—";

    const PLAN_LABELS: Record<string, string> = {
      "1-month": "Month-to-Month Plan — $1,499/mo",
      "3-month": "3-Month Package — $1,199/mo · $3,597 total",
      "6-month": "6-Month Package — $899/mo · $5,394 total",
    };
    const planLabel = PLAN_LABELS[plan] ?? plan;

    try {
      await Promise.all([
        /* Internal notification to Pure Marketing */
        resend.emails.send({
          from: "Pure Marketing Website <noreply@puremarketing.ca>",
          to: "info@puremarketing.ca",
          subject: `💳 Payment Received: ${fullName} — Social Media ${planLabel}`,
          html: internalEmail({ fullName, email, phone, businessName, industry, message, planLabel, amountPaid }),
        }),
        /* Confirmation to the client */
        resend.emails.send({
          from: "Pure Marketing <noreply@puremarketing.ca>",
          to: email,
          subject: "Payment Confirmed — Welcome to Pure Marketing! 🎉",
          html: clientEmail({ firstName, planLabel, amountPaid }),
        }),
      ]);
    } catch (emailErr) {
      console.error("Email send error after payment:", emailErr);
      // Don't fail the webhook response — payment already succeeded
    }
  }

  return NextResponse.json({ received: true });
}

/* ─── Email templates ────────────────────────────────────────── */

function internalEmail({
  fullName, email, phone, businessName, industry, message, planLabel, amountPaid,
}: {
  fullName: string; email: string; phone: string; businessName: string;
  industry: string; message: string; planLabel: string; amountPaid: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f7f7f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f7;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <tr><td style="background:#16a34a;border-radius:12px 12px 0 0;padding:28px 36px;">
          <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700;">Pure Marketing</h1>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">💳 Payment Confirmed — New Client!</p>
        </td></tr>

        <tr><td style="background:#15803d;padding:13px 36px;text-align:center;">
          <p style="margin:0;color:#fff;font-size:15px;font-weight:700;">${amountPaid} received via Stripe</p>
        </td></tr>

        <tr><td style="background:#fff;padding:36px;border-left:1px solid #e8e8e8;border-right:1px solid #e8e8e8;">
          <p style="margin:0 0 24px;color:#1a1a1a;font-size:16px;font-weight:600;">
            New paying client: <span style="color:#F06428;">${fullName}</span>
          </p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;">
            ${row("Name", fullName)}
            ${row("Email", `<a href="mailto:${email}" style="color:#F06428;text-decoration:none;">${email}</a>`)}
            ${row("Phone", `<a href="tel:${phone}" style="color:#F06428;text-decoration:none;">${phone}</a>`)}
            ${row("Business", businessName)}
            ${row("Industry", industry)}
            ${row("Plan", planLabel)}
            ${row("Amount Paid", `<strong style="color:#16a34a;">${amountPaid}</strong>`)}
          </table>

          ${message ? `
          <div style="margin-top:24px;background:#f7f7f7;border-left:4px solid #F06428;border-radius:0 8px 8px 0;padding:16px 20px;">
            <p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:0.5px;">Client Notes</p>
            <p style="margin:0;color:#1a1a1a;font-size:15px;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>` : ""}

          <div style="margin-top:28px;display:flex;gap:12px;">
            <a href="mailto:${email}" style="display:inline-block;background:#F06428;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600;margin-right:10px;">
              Email ${fullName.split(" ")[0]}
            </a>
            <a href="tel:${phone}" style="display:inline-block;background:#1a1a1a;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600;">
              Call Now
            </a>
          </div>
          <p style="margin-top:16px;color:#999;font-size:12px;">⏱ Schedule the onboarding call within 24 hours.</p>
        </td></tr>

        <tr><td style="background:#f7f7f7;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 12px 12px;padding:18px 36px;text-align:center;">
          <p style="margin:0;color:#999;font-size:12px;">Payment processed via Stripe · puremarketing.ca</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string) {
  return `
    <tr style="border-bottom:1px solid #e8e8e8;">
      <td style="padding:11px 16px;background:#f7f7f7;font-size:12px;font-weight:600;color:#666;text-transform:uppercase;letter-spacing:0.4px;width:120px;white-space:nowrap;">${label}</td>
      <td style="padding:11px 16px;font-size:14px;color:#1a1a1a;">${value}</td>
    </tr>`;
}

function clientEmail({
  firstName, planLabel, amountPaid,
}: {
  firstName: string; planLabel: string; amountPaid: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f7f7f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f7;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <tr><td style="background:#F06428;border-radius:12px 12px 0 0;padding:32px 36px;text-align:center;">
          <h1 style="margin:0;color:#fff;font-size:26px;font-weight:700;">Pure Marketing</h1>
          <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;letter-spacing:0.3px;">SOCIAL MEDIA MANAGEMENT</p>
        </td></tr>

        <tr><td style="background:#d8612a;padding:15px;text-align:center;">
          <p style="margin:0;color:#fff;font-size:14px;font-weight:600;">🎉 Payment Confirmed — Welcome to the Family!</p>
        </td></tr>

        <tr><td style="background:#fff;padding:40px 36px;border-left:1px solid #e8e8e8;border-right:1px solid #e8e8e8;">
          <h2 style="margin:0 0 12px;color:#1a1a1a;font-size:22px;font-weight:700;">Hi ${firstName},</h2>
          <p style="margin:0 0 20px;color:#444;font-size:15px;line-height:1.7;">
            Your payment has been received and confirmed! Welcome to <strong>Pure Marketing</strong> — we're thrilled to have you on board.
          </p>

          <div style="background:#fff8f5;border:1px solid #f8d5c5;border-radius:10px;padding:20px 24px;margin-bottom:24px;">
            <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#F06428;text-transform:uppercase;letter-spacing:0.5px;">Payment Receipt</p>
            <p style="margin:0 0 4px;color:#1a1a1a;font-size:15px;font-weight:700;">${planLabel}</p>
            <p style="margin:0;color:#16a34a;font-size:18px;font-weight:800;">${amountPaid} ✓</p>
          </div>

          <div style="background:#f7f7f7;border-radius:10px;padding:24px;margin-bottom:28px;">
            <p style="margin:0 0 16px;color:#1a1a1a;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">What Happens Next</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${step("1", "Onboarding call scheduled", "Our team will reach out within 1 business day to schedule your kickoff call.")}
              ${step("2", "Brand intake & strategy", "We learn your brand voice, goals, target audience, and content preferences.")}
              ${step("3", "Content calendar approved", "You'll review and approve your first month of content before we go live.")}
              ${step("4", "We go live!", "Daily posting begins — sit back and watch your audience grow.")}
            </table>
          </div>

          <div style="text-align:center;">
            <a href="https://puremarketing.ca" style="display:inline-block;background:#F06428;color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:600;">
              Visit Our Website
            </a>
          </div>

          <p style="margin:28px 0 0;color:#999;font-size:13px;text-align:center;">
            Questions? Reply to this email or call us at <a href="tel:+16479512786" style="color:#F06428;text-decoration:none;">+1 (647) 951-2786</a>
          </p>
        </td></tr>

        <tr><td style="background:#1a1a1a;border-radius:0 0 12px 12px;padding:24px 36px;text-align:center;">
          <p style="margin:0 0 6px;color:#fff;font-size:14px;font-weight:600;">Pure Marketing</p>
          <p style="margin:0 0 10px;color:#999;font-size:12px;">Hamilton, Ontario &bull; info@puremarketing.ca &bull; +1 647-951-2786</p>
          <p style="margin:0;color:#666;font-size:11px;">&copy; ${new Date().getFullYear()} Pure Marketing. All rights reserved.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function step(num: string, title: string, desc: string) {
  return `
    <tr>
      <td style="vertical-align:top;width:32px;padding-bottom:14px;">
        <div style="width:26px;height:26px;background:#F06428;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;">
          <span style="color:#fff;font-size:12px;font-weight:700;">${num}</span>
        </div>
      </td>
      <td style="padding-left:12px;padding-bottom:14px;vertical-align:top;">
        <p style="margin:0 0 2px;color:#1a1a1a;font-size:14px;font-weight:600;">${title}</p>
        <p style="margin:0;color:#666;font-size:13px;">${desc}</p>
      </td>
    </tr>`;
}
