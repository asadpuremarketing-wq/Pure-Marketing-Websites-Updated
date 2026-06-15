import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(req: NextRequest) {
  const { name, email, phone, date, time } = await req.json();

  if (!name || !email || !phone || !date || !time) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Insert into DB — unique constraint on (booking_date, booking_time) prevents double-bookings
  const { error: dbError } = await getSupabase().from("bookings").insert({
    name,
    email,
    phone,
    booking_date: date,
    booking_time: time,
  });

  if (dbError) {
    // PostgreSQL unique_violation code
    if (dbError.code === "23505") {
      return NextResponse.json(
        { error: "That slot was just booked by someone else. Please choose another time." },
        { status: 409 }
      );
    }
    console.error("DB insert error:", dbError);
    return NextResponse.json({ error: "Failed to save booking." }, { status: 500 });
  }

  // Send emails — booking is already locked in the DB even if email fails
  const transporter = createTransporter();
  try {
    await Promise.all([
      transporter.sendMail({
        from: `"Pure Marketing Website" <${process.env.SMTP_USER}>`,
        to: "info@puremarketing.ca",
        replyTo: email,
        subject: `New Call Booking: ${name} — ${date} at ${time} EST`,
        html: notificationHtml({ name, email, phone, date, time }),
      }),
      transporter.sendMail({
        from: `"Pure Marketing" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Your strategy call is confirmed — Pure Marketing",
        html: confirmationHtml({ name, date, time }),
      }),
    ]);
  } catch (err) {
    // Log but don't fail — slot is already reserved
    console.error("Email send error:", err);
  }

  return NextResponse.json({ success: true });
}

/* ── Email templates ──────────────────────────────────────────────────────── */

function row(label: string, value: string) {
  return `
<tr style="border-bottom:1px solid #e8e8e8;">
  <td style="padding:12px 16px;background:#f9f9f9;font-size:11px;font-weight:600;color:#666;text-transform:uppercase;letter-spacing:0.4px;width:110px;white-space:nowrap;">${label}</td>
  <td style="padding:12px 16px;font-size:14px;color:#111;">${value}</td>
</tr>`;
}

function notificationHtml({ name, email, phone, date, time }: {
  name: string; email: string; phone: string; date: string; time: string;
}) {
  return `
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
  <tr><td style="background:#F06428;border-radius:12px 12px 0 0;padding:28px 36px;">
    <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">Pure Marketing</h1>
    <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">New Call Booking from Website</p>
  </td></tr>
  <tr><td style="background:#fff;padding:36px;border:1px solid #e8e8e8;border-top:none;">
    <p style="margin:0 0 20px;color:#111;font-size:16px;font-weight:600;">
      <span style="color:#F06428;">${name}</span> has booked a 30-minute strategy call.
    </p>
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;margin-bottom:24px;">
      ${row("Name", name)}
      ${row("Email", `<a href="mailto:${email}" style="color:#F06428;">${email}</a>`)}
      ${row("Phone", `<a href="tel:${phone}" style="color:#F06428;">${phone}</a>`)}
      ${row("Date", date)}
      ${row("Time", time + " EST")}
    </table>
    <p style="margin:0 0 20px;color:#666;font-size:14px;line-height:1.6;">
      Send them a Google Meet link and confirm. They are expecting a reply at <a href="mailto:${email}" style="color:#F06428;">${email}</a>.
    </p>
    <div style="text-align:center;">
      <a href="mailto:${email}?subject=Your%20Pure%20Marketing%20Strategy%20Call%20is%20Confirmed&body=Hi%20${encodeURIComponent(name)}%2C%0A%0AYour%20strategy%20call%20on%20${encodeURIComponent(date)}%20at%20${encodeURIComponent(time)}%20EST%20is%20confirmed.%0A%0AJoin%20via%20Google%20Meet%3A%20%5BINSERT%20MEET%20LINK%5D%0A%0ALooking%20forward%20to%20speaking%20with%20you%21%0A%0AAsad%0APure%20Marketing" style="display:inline-block;background:#F06428;color:#fff;text-decoration:none;padding:13px 28px;border-radius:8px;font-size:15px;font-weight:600;">
        Reply to ${name} with Meet Link
      </a>
    </div>
  </td></tr>
  <tr><td style="background:#f4f4f4;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 12px 12px;padding:18px 36px;text-align:center;">
    <p style="margin:0;color:#999;font-size:12px;">Sent from puremarketing.ca booking form</p>
  </td></tr>
</table>
</td></tr>
</table>
</body></html>`;
}

function confirmationHtml({ name, date, time }: { name: string; date: string; time: string }) {
  return `
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
  <tr><td style="background:#F06428;border-radius:12px 12px 0 0;padding:36px;text-align:center;">
    <h1 style="margin:0;color:#fff;font-size:26px;font-weight:800;">Pure Marketing</h1>
    <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">Strategy · Systems · Growth</p>
  </td></tr>
  <tr><td style="background:#d8521e;padding:14px;text-align:center;">
    <p style="margin:0;color:#fff;font-size:14px;font-weight:600;">Your call request has been received</p>
  </td></tr>
  <tr><td style="background:#fff;padding:40px 36px;border:1px solid #e8e8e8;border-top:none;">
    <h2 style="margin:0 0 14px;color:#111;font-size:22px;font-weight:700;">Hi ${name},</h2>
    <p style="margin:0 0 18px;color:#444;font-size:15px;line-height:1.7;">Your slot is reserved:</p>
    <div style="background:#f9f9f9;border-left:4px solid #F06428;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
      <p style="margin:0;color:#111;font-size:18px;font-weight:700;">${date}</p>
      <p style="margin:4px 0 0;color:#F06428;font-size:15px;font-weight:600;">${time} Eastern Time</p>
      <p style="margin:4px 0 0;color:#888;font-size:13px;">30-minute strategy call · Google Meet</p>
    </div>
    <p style="margin:0 0 28px;color:#444;font-size:15px;line-height:1.7;">
      Asad will send you a Google Meet link within 2 hours (Mon–Fri, 9am–6pm EST).
    </p>
    <div style="text-align:center;">
      <a href="https://puremarketing.ca" style="display:inline-block;background:#F06428;color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:700;">Visit Our Website</a>
    </div>
  </td></tr>
  <tr><td style="background:#111;border-radius:0 0 12px 12px;padding:24px 36px;text-align:center;">
    <p style="margin:0 0 6px;color:#fff;font-size:14px;font-weight:700;">Pure Marketing</p>
    <p style="margin:0 0 10px;color:#888;font-size:12px;">Hamilton, Ontario · info@puremarketing.ca · +1 647-951-2786</p>
    <p style="margin:0;color:#555;font-size:11px;">&copy; ${new Date().getFullYear()} Pure Marketing.</p>
  </td></tr>
</table>
</td></tr>
</table>
</body></html>`;
}
