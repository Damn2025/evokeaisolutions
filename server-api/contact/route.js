import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { fullName, company, email, phone, location, vision } = await request.json();

    // Build transporter options. Allow opt-in to accept self-signed certs
    // by setting SMTP_ALLOW_SELF_SIGNED=true in your .env (DEV ONLY).
    const transporterOptions = {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    };

    if (process.env.SMTP_ALLOW_SELF_SIGNED === "true") {
      transporterOptions.tls = { rejectUnauthorized: false };
      console.warn("Warning: SMTP_ALLOW_SELF_SIGNED=true — accepting self-signed certificates (DEV only)");
    }

    const transporter = nodemailer.createTransport(transporterOptions);

    const mailOptions = {
      from: `"Evoke AI Leads" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.SMTP_TO_EMAIL,
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
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
