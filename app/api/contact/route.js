import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  // Gmail app passwords are often stored with spaces; strip them for auth
  const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");
  const to = process.env.SMTP_TO_EMAIL?.trim();
  const from = (process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER)?.trim();
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = String(process.env.SMTP_SECURE || "").trim() === "true";

  const missing = [];
  if (!host) missing.push("SMTP_HOST");
  if (!user) missing.push("SMTP_USER");
  if (!pass) missing.push("SMTP_PASS");
  if (!to) missing.push("SMTP_TO_EMAIL");
  if (!from) missing.push("SMTP_FROM_EMAIL");

  return { host, user, pass, to, from, port, secure, missing };
}

export async function POST(request) {
  try {
    const { fullName, company, email, phone, location, vision } = await request.json();

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, message: "Full name and email are required" },
        { status: 400 }
      );
    }

    const smtp = getSmtpConfig();
    if (smtp.missing.length) {
      console.error("SMTP misconfigured. Missing:", smtp.missing.join(", "));
      return NextResponse.json(
        { success: false, message: "Email service is not configured on the server" },
        { status: 500 }
      );
    }

    const transporterOptions = {
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    };

    if (process.env.SMTP_ALLOW_SELF_SIGNED === "true") {
      transporterOptions.tls = { rejectUnauthorized: false };
      console.warn("Warning: SMTP_ALLOW_SELF_SIGNED=true — accepting self-signed certificates (DEV only)");
    }

    const transporter = nodemailer.createTransport(transporterOptions);

    const mailOptions = {
      from: `"Evoke AI Leads" <${smtp.from}>`,
      replyTo: email,
      to: smtp.to,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `New Contact Form Submission\n\nFull Name: ${fullName}\nCompany: ${company || "N/A"}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nLocation: ${location || "N/A"}\nVision: ${vision || "N/A"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Location:</strong> ${location || "N/A"}</p>
        <p><strong>Vision:</strong><br/> ${vision || "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", {
      code: error?.code,
      command: error?.command,
      response: error?.response,
      responseCode: error?.responseCode,
      message: error?.message,
    });
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
        detail: process.env.NODE_ENV === "development" ? error?.message : undefined,
      },
      { status: 500 }
    );
  }
}
