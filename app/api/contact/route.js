import { NextResponse } from "next/server";
import { postWebhookJson } from "../../../lib/postWebhook";

export const runtime = "nodejs";

const CONTACT_WEBHOOK_URL =
  process.env.CONTACT_WEBHOOK_URL?.trim() ||
  "https://damnart-ai-guladab.n8n-wsk.com/webhook/841cb938-c6ff-4a18-bc00-55b4dec95bce";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Contact API is ready. Submit the form with POST.",
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, company, email, phone, location, vision, source } = body || {};

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, message: "Full name and email are required" },
        { status: 400 }
      );
    }

    const payload = {
      fullName,
      company: company || "",
      email,
      phone: phone || "",
      location: location || "",
      vision: vision || "",
      source: source || "contact-form",
      submittedAt: new Date().toISOString(),
    };

    const res = await postWebhookJson(CONTACT_WEBHOOK_URL, payload);

    if (!res.ok) {
      console.error("Contact webhook failed:", res.status, res.body);
      return NextResponse.json(
        { success: false, message: "Failed to submit contact form" },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error?.cause || error?.message || error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit contact form",
        detail: process.env.NODE_ENV === "development" ? String(error?.message || error) : undefined,
      },
      { status: 500 }
    );
  }
}
