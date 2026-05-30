import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

/* ── Hostinger SMTP transporter ────────────────────────────────────────── */
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true, // port 465 = SSL
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/* ── POST handler ──────────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  const { name, email, phone, industry, message, strategyCall } = await req.json();

  if (!name || !email || !phone || !industry || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transporter = createTransporter();

  try {
    await Promise.all([
      // 1 — Notification to Pure Marketing
      transporter.sendMail({
        from: `"Pure Marketing Website" <${process.env.SMTP_USER}>`,
        to: "info@puremarketing.ca",
        subject: `New Lead: ${name} — ${industry}`,
        html: notificationEmail({ name, email, phone, industry, message, strategyCall }),
      }),

      // 2 — Confirmation to the person who submitted
      transporter.sendMail({
        from: `"Pure Marketing" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "We received your message — Pure Marketing",
        html: confirmationEmail({ name }),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

/* ── Email templates ───────────────────────────────────────────────────── */

function notificationEmail({
  name, email, phone, industry, message, strategyCall,
}: {
  name: string; email: string; phone: string;
  industry: string; message: string; strategyCall: boolean;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Header -->
  <tr><td style="background:#F06428;border-radius:12px 12px 0 0;padding:28px 36px;">
    <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">Pure Marketing</h1>
    <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">🔔 New Lead from Website Contact Form</p>
  </td></tr>

  <!-- Body -->
  <tr><td style="background:#ffffff;padding:36px;border:1px solid #e8e8e8;border-top:none;">
    <p style="margin:0 0 24px;color:#111;font-size:16px;font-weight:600;">
      You have a new inquiry from <span style="color:#F06428;">${name}</span>
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;margin-bottom:24px;">
      ${row("Name",     name)}
      ${row("Email",    `<a href="mailto:${email}" style="color:#F06428;">${email}</a>`)}
      ${row("Phone",    `<a href="tel:${phone}" style="color:#F06428;">${phone}</a>`)}
      ${row("Industry", industry)}
      ${row("Strategy Call", strategyCall ? "✅ Yes — interested" : "No")}
    </table>

    <div style="background:#f9f9f9;border-left:4px solid #F06428;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
      <p style="margin:0 0 6px;font-size:11px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:0.5px;">Their Message</p>
      <p style="margin:0;color:#111;font-size:15px;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
    </div>

    <div style="text-align:center;">
      <a href="mailto:${email}" style="display:inline-block;background:#F06428;color:#fff;text-decoration:none;padding:13px 28px;border-radius:8px;font-size:15px;font-weight:600;">
        Reply to ${name} →
      </a>
    </div>
  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#f4f4f4;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 12px 12px;padding:18px 36px;text-align:center;">
    <p style="margin:0;color:#999;font-size:12px;">Sent from puremarketing.ca contact form</p>
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
  <td style="padding:12px 16px;background:#f9f9f9;font-size:11px;font-weight:600;color:#666;text-transform:uppercase;letter-spacing:0.4px;width:130px;white-space:nowrap;">${label}</td>
  <td style="padding:12px 16px;font-size:14px;color:#111;">${value}</td>
</tr>`;
}

function confirmationEmail({ name }: { name: string }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Header -->
  <tr><td style="background:#F06428;border-radius:12px 12px 0 0;padding:36px;text-align:center;">
    <h1 style="margin:0;color:#fff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">Pure Marketing</h1>
    <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;letter-spacing:0.5px;text-transform:uppercase;">Strategy · Systems · Growth</p>
  </td></tr>

  <!-- Confirmation band -->
  <tr><td style="background:#d8521e;padding:14px;text-align:center;">
    <p style="margin:0;color:#fff;font-size:14px;font-weight:600;">✓ &nbsp;Message Received — We'll be in touch shortly</p>
  </td></tr>

  <!-- Body -->
  <tr><td style="background:#ffffff;padding:40px 36px;border:1px solid #e8e8e8;border-top:none;">
    <h2 style="margin:0 0 14px;color:#111;font-size:22px;font-weight:700;">Hi ${name},</h2>
    <p style="margin:0 0 18px;color:#444;font-size:15px;line-height:1.7;">
      Thank you for reaching out to <strong>Pure Marketing</strong>. We've received your message and a member of our team will be in touch with you <strong>within 2 business hours</strong>.
    </p>
    <p style="margin:0 0 32px;color:#444;font-size:15px;line-height:1.7;">
      Our hours are Monday to Friday, 9am – 6pm EST. If you submitted outside of these hours, we'll follow up first thing the next business day.
    </p>

    <!-- What happens next -->
    <div style="background:#f9f9f9;border-radius:10px;padding:24px 28px;margin-bottom:32px;">
      <p style="margin:0 0 18px;color:#111;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;">What Happens Next</p>
      ${step("1", "We review your inquiry", "Every message is read personally by our team.")}
      ${step("2", "We reach out to you", "Expect a call or email within 2 business hours.")}
      ${step("3", "Free strategy session", "We discuss your goals and build a custom growth plan.")}
    </div>

    <div style="text-align:center;">
      <a href="https://puremarketing.ca" style="display:inline-block;background:#F06428;color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:700;">
        Visit Our Website
      </a>
    </div>

    <p style="margin:28px 0 0;color:#bbb;font-size:12px;text-align:center;">
      If you did not submit this form, please ignore this email.
    </p>
  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#111;border-radius:0 0 12px 12px;padding:24px 36px;text-align:center;">
    <p style="margin:0 0 6px;color:#fff;font-size:14px;font-weight:700;">Pure Marketing</p>
    <p style="margin:0 0 10px;color:#888;font-size:12px;">Hamilton, Ontario &nbsp;·&nbsp; info@puremarketing.ca &nbsp;·&nbsp; +1 647-951-2786</p>
    <p style="margin:0;color:#555;font-size:11px;">&copy; ${new Date().getFullYear()} Pure Marketing. All rights reserved.</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function step(num: string, title: string, desc: string) {
  return `
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
<tr>
  <td style="vertical-align:top;width:32px;">
    <div style="width:26px;height:26px;background:#F06428;border-radius:50%;text-align:center;line-height:26px;">
      <span style="color:#fff;font-size:12px;font-weight:700;">${num}</span>
    </div>
  </td>
  <td style="padding-left:12px;vertical-align:top;">
    <p style="margin:0 0 2px;color:#111;font-size:14px;font-weight:600;">${title}</p>
    <p style="margin:0;color:#666;font-size:13px;">${desc}</p>
  </td>
</tr>
</table>`;
}
