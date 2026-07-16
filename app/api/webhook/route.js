import { NextResponse } from "next/server";
import { postWebhookJson } from "../../../lib/postWebhook";

export const runtime = "nodejs";

const N8N_WEBHOOK_URL =
  process.env.CONTACT_WEBHOOK_URL?.trim() ||
  "https://damnart-ai-guladab.n8n-wsk.com/webhook/841cb938-c6ff-4a18-bc00-55b4dec95bce";

const AUTOMATIONS_WEBHOOK_URL =
  process.env.AUTOMATIONS_WEBHOOK_URL?.trim() ||
  "https://damnart-ai-guladab.n8n-wsk.com/webhook/2f6c820f-507e-4fa5-9d40-ba76b546b500";

export async function POST(request) {
  try {
    const body = await request.json();
    const { target, ...payload } = body || {};
    const webhookUrl =
      target === "automations" ? AUTOMATIONS_WEBHOOK_URL : N8N_WEBHOOK_URL;

    const res = await postWebhookJson(webhookUrl, payload);

    if (!res.ok) {
      return NextResponse.json(
        { error: `Webhook server responded with status ${res.status}` },
        { status: res.status || 502 }
      );
    }

    return NextResponse.json({ success: true, data: res.body });
  } catch (error) {
    console.error("Webhook proxy error:", error?.cause || error);
    return NextResponse.json(
      { error: error?.message || "Failed to forward request to webhook" },
      { status: 500 }
    );
  }
}
