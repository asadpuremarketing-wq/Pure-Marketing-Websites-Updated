import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const PLAN_LABELS: Record<string, { name: string; price: string; total: string }> = {
  "1-month": { name: "Month-to-Month Plan", price: "$1,499/mo", total: "$1,499" },
  "3-month": { name: "3-Month Package", price: "$1,199/mo", total: "$3,597 (paid once)" },
  "6-month": { name: "6-Month Package", price: "$899/mo", total: "$5,394 (paid once)" },
};

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

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

  const fullName = `${firstName} ${lastName}`;
  const planInfo = PLAN_LABELS[plan] ?? { name: plan, price: "—", total: "—" };

  try {
    await Promise.all([
      // Internal notification to Pure Marketing team
      resend.emails.send({
        from: "Pure Marketing Website <noreply@puremarketing.ca>",
        to: "info@puremarketing.ca",
        subject: `🛒 New Order: ${fullName} — Social Media ${planInfo.name}`,
        html: internalEmail({ fullName, email, phone, businessName, industry, message, planInfo }),
      }),
      // Confirmation email to the client
      resend.emails.send({
        from: "Pure Marketing <noreply@puremarketing.ca>",
        to: email,
        subject: "Your Order with Pure Marketing — We'll Be in Touch Soon!",
        html: clientConfirmationEmail({ firstName, planInfo }),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Checkout email error:", err);
    return NextResponse.json({ error: "Failed to send confirmation" }, { status: 500 });
  }
}

/* ─── Internal notification email ───────────────────────────── */

function internalEmail({
  fullName,
  email,
  phone,
  businessName,
  industry,
  message,
  planInfo,
}: {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  industry: string;
  message: string;
  planInfo: { name: string; price: string; total: string };
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f7f7f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f7;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#F06428;border-radius:12px 12px 0 0;padding:28px 36px;">
          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">Pure Marketing</h1>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">🛒 New Social Media Management Order</p>
        </td></tr>

        <!-- Plan Banner -->
        <tr><td style="background:#d8612a;padding:14px 36px;text-align:center;">
          <p style="margin:0;color:#ffffff;font-size:15px;font-weight:700;">
            ${planInfo.name} &nbsp;·&nbsp; ${planInfo.total}
          </p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:36px;border-left:1px solid #e8e8e8;border-right:1px solid #e8e8e8;">
          <p style="margin:0 0 24px;color:#1a1a1a;font-size:16px;font-weight:600;">
            New order from <span style="color:#F06428;">${fullName}</span>
          </p>

          <!-- Details table -->
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;">
            ${row("Name", fullName)}
            ${row("Email", `<a href="mailto:${email}" style="color:#F06428;text-decoration:none;">${email}</a>`)}
            ${row("Phone", `<a href="tel:${phone}" style="color:#F06428;text-decoration:none;">${phone}</a>`)}
            ${row("Business", businessName)}
            ${row("Industry", industry)}
            ${row("Plan", planInfo.name)}
            ${row("Monthly Rate", planInfo.price)}
            ${row("Total Charge", planInfo.total)}
          </table>

          ${message ? `
          <div style="margin-top:24px;background:#f7f7f7;border-left:4px solid #F06428;border-radius:0 8px 8px 0;padding:16px 20px;">
            <p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#999999;text-transform:uppercase;letter-spacing:0.5px;">Client Notes</p>
            <p style="margin:0;color:#1a1a1a;font-size:15px;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>` : ""}

          <!-- Action buttons -->
          <div style="margin-top:28px;text-align:center;display:flex;gap:12px;justify-content:center;">
            <a href="mailto:${email}" style="display:inline-block;background:#F06428;color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:8px;font-size:15px;font-weight:600;margin-right:10px;">
              Reply to ${fullName.split(" ")[0]}
            </a>
            <a href="tel:${phone}" style="display:inline-block;background:#1a1a1a;color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:8px;font-size:15px;font-weight:600;">
              Call Now
            </a>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f7f7f7;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 12px 12px;padding:20px 36px;text-align:center;">
          <p style="margin:0;color:#999999;font-size:12px;">This order was submitted via the checkout page at puremarketing.ca</p>
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
      <td style="padding:12px 16px;background:#f7f7f7;font-size:12px;font-weight:600;color:#666666;text-transform:uppercase;letter-spacing:0.4px;width:130px;white-space:nowrap;">${label}</td>
      <td style="padding:12px 16px;font-size:14px;color:#1a1a1a;">${value}</td>
    </tr>`;
}

/* ─── Client confirmation email ─────────────────────────────── */

function clientConfirmationEmail({
  firstName,
  planInfo,
}: {
  firstName: string;
  planInfo: { name: string; price: string; total: string };
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f7f7f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f7;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#F06428;border-radius:12px 12px 0 0;padding:32px 36px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;letter-spacing:-0.5px;">Pure Marketing</h1>
          <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;letter-spacing:0.3px;">SOCIAL MEDIA MANAGEMENT</p>
        </td></tr>

        <!-- Confirmation band -->
        <tr><td style="background:#d8612a;padding:16px;text-align:center;">
          <p style="margin:0;color:#ffffff;font-size:14px;font-weight:600;">&#10003;&nbsp; Order Received — We&apos;ll Be In Touch Within 1 Business Day</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:40px 36px;border-left:1px solid #e8e8e8;border-right:1px solid #e8e8e8;">
          <h2 style="margin:0 0 12px;color:#1a1a1a;font-size:22px;font-weight:700;">Hi ${firstName},</h2>
          <p style="margin:0 0 16px;color:#444444;font-size:15px;line-height:1.7;">
            Thank you for choosing <strong>Pure Marketing</strong>! We've received your order and our team will be in touch 
            within <strong>1 business day</strong> to confirm everything and get you set up.
          </p>

          <!-- Order summary box -->
          <div style="background:#fff8f5;border:1px solid #f8d5c5;border-radius:10px;padding:20px 24px;margin-bottom:24px;">
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#F06428;text-transform:uppercase;letter-spacing:0.5px;">Your Order Summary</p>
            <p style="margin:0 0 4px;color:#1a1a1a;font-size:16px;font-weight:700;">${planInfo.name}</p>
            <p style="margin:0;color:#666666;font-size:14px;">${planInfo.price} &nbsp;·&nbsp; Total: ${planInfo.total}</p>
          </div>

          <!-- What happens next -->
          <div style="background:#f7f7f7;border-radius:10px;padding:24px;">
            <p style="margin:0 0 16px;color:#1a1a1a;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">What Happens Next</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${step("1", "We confirm your order", "Our team reviews your submission and reaches out to you within 1 business day.")}
              ${step("2", "Payment is processed", "We send you a secure invoice via email. We accept all major credit cards, e-transfer, and bank transfer.")}
              ${step("3", "Onboarding call scheduled", "We set up a kickoff call to understand your brand, goals, and content preferences.")}
              ${step("4", "We go live!", "Your content calendar is ready and posting begins within the first week.")}
            </table>
          </div>

          <!-- CTA -->
          <div style="margin-top:32px;text-align:center;">
            <a href="https://puremarketing.ca" style="display:inline-block;background:#F06428;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:600;">
              Visit Our Website
            </a>
          </div>

          <p style="margin:28px 0 0;color:#999999;font-size:13px;text-align:center;">
            Questions? Reply to this email or call us at <a href="tel:+16479512786" style="color:#F06428;text-decoration:none;">+1 (647) 951-2786</a>
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#1a1a1a;border-radius:0 0 12px 12px;padding:24px 36px;text-align:center;">
          <p style="margin:0 0 8px;color:#ffffff;font-size:14px;font-weight:600;">Pure Marketing</p>
          <p style="margin:0 0 12px;color:#999999;font-size:12px;">Hamilton, Ontario &bull; info@puremarketing.ca &bull; +1 647-951-2786</p>
          <p style="margin:0;color:#666666;font-size:11px;">&copy; ${new Date().getFullYear()} Pure Marketing. All rights reserved.</p>
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
          <span style="color:#ffffff;font-size:12px;font-weight:700;">${num}</span>
        </div>
      </td>
      <td style="padding-left:12px;padding-bottom:14px;vertical-align:top;">
        <p style="margin:0 0 2px;color:#1a1a1a;font-size:14px;font-weight:600;">${title}</p>
        <p style="margin:0;color:#666666;font-size:13px;">${desc}</p>
      </td>
    </tr>`;
}
