import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, phone, industry, message, strategyCall } = await req.json();

  if (!name || !email || !phone || !industry || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await Promise.all([
      // Notification email to Pure Marketing
      resend.emails.send({
        from: "Pure Marketing Website <noreply@puremarketing.ca>",
        to: "info@puremarketing.ca",
        subject: `New Lead: ${name} - ${industry}`,
        html: notificationEmail({ name, email, phone, industry, message, strategyCall }),
      }),
      // Confirmation email to the submitter
      resend.emails.send({
        from: "Pure Marketing <noreply@puremarketing.ca>",
        to: email,
        subject: "We received your message - Pure Marketing",
        html: confirmationEmail({ name }),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

function notificationEmail({
  name, email, phone, industry, message, strategyCall,
}: {
  name: string; email: string; phone: string; industry: string; message: string; strategyCall: boolean;
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
          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">
            Pure Marketing
          </h1>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">New Lead from Website</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:36px;border-left:1px solid #e8e8e8;border-right:1px solid #e8e8e8;">
          <p style="margin:0 0 24px;color:#1a1a1a;font-size:16px;font-weight:600;">
            You have a new inquiry from <span style="color:#F06428;">${name}</span>
          </p>

          <!-- Details table -->
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;">
            ${row("Name", name)}
            ${row("Email", `<a href="mailto:${email}" style="color:#F06428;text-decoration:none;">${email}</a>`)}
            ${row("Phone", `<a href="tel:${phone}" style="color:#F06428;text-decoration:none;">${phone}</a>`)}
            ${row("Industry", industry)}
            ${row("Strategy Call", strategyCall ? "Yes - interested" : "No")}
          </table>

          <!-- Message -->
          <div style="margin-top:24px;background:#f7f7f7;border-left:4px solid #F06428;border-radius:0 8px 8px 0;padding:16px 20px;">
            <p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#999999;text-transform:uppercase;letter-spacing:0.5px;">Their Message</p>
            <p style="margin:0;color:#1a1a1a;font-size:15px;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>

          <!-- CTA -->
          <div style="margin-top:28px;text-align:center;">
            <a href="mailto:${email}" style="display:inline-block;background:#F06428;color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:8px;font-size:15px;font-weight:600;">
              Reply to ${name}
            </a>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f7f7f7;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 12px 12px;padding:20px 36px;text-align:center;">
          <p style="margin:0;color:#999999;font-size:12px;">This notification was sent from your website contact form at puremarketing.ca</p>
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
      <td style="padding:12px 16px;background:#f7f7f7;font-size:12px;font-weight:600;color:#666666;text-transform:uppercase;letter-spacing:0.4px;width:120px;white-space:nowrap;">${label}</td>
      <td style="padding:12px 16px;font-size:14px;color:#1a1a1a;">${value}</td>
    </tr>`;
}

function confirmationEmail({ name }: { name: string }) {
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
          <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;letter-spacing:0.3px;">PREMIUM MARKETING AGENCY</p>
        </td></tr>

        <!-- Checkmark band -->
        <tr><td style="background:#d8612a;padding:16px;text-align:center;">
          <p style="margin:0;color:#ffffff;font-size:14px;font-weight:600;">
            &#10003;&nbsp; Message Received
          </p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:40px 36px;border-left:1px solid #e8e8e8;border-right:1px solid #e8e8e8;">
          <h2 style="margin:0 0 12px;color:#1a1a1a;font-size:22px;font-weight:700;">Hi ${name},</h2>
          <p style="margin:0 0 20px;color:#444444;font-size:15px;line-height:1.7;">
            Thank you for reaching out to <strong>Pure Marketing</strong>. We have received your message and one of our team members will be in touch with you shortly.
          </p>
          <p style="margin:0 0 28px;color:#444444;font-size:15px;line-height:1.7;">
            We typically respond within <strong>2 business hours</strong> during our operating hours (Monday to Friday, 9am to 6pm EST).
          </p>

          <!-- What happens next -->
          <div style="background:#f7f7f7;border-radius:10px;padding:24px;">
            <p style="margin:0 0 16px;color:#1a1a1a;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">What happens next</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${step("1", "We review your inquiry", "Our team reads every message personally.")}
              ${step("2", "We reach out to you", "Expect a call or email within 2 business hours.")}
              ${step("3", "Free strategy session", "We discuss your goals and build a custom plan.")}
            </table>
          </div>

          <!-- CTA -->
          <div style="margin-top:32px;text-align:center;">
            <a href="https://puremarketing.ca" style="display:inline-block;background:#F06428;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:600;">
              Visit Our Website
            </a>
          </div>

          <p style="margin:28px 0 0;color:#999999;font-size:13px;text-align:center;">
            If this was not you, please disregard this email.
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#1a1a1a;border-radius:0 0 12px 12px;padding:24px 36px;text-align:center;">
          <p style="margin:0 0 8px;color:#ffffff;font-size:14px;font-weight:600;">Pure Marketing</p>
          <p style="margin:0 0 12px;color:#999999;font-size:12px;">Hamilton, Ontario &bull; info@puremarketing.ca &bull; +1 647-951-2786</p>
          <p style="margin:0;color:#666666;font-size:11px;">
            &copy; ${new Date().getFullYear()} Pure Marketing. All rights reserved.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function step(num: string, title: string, desc: string) {
  return `
    <tr style="margin-bottom:12px;">
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
