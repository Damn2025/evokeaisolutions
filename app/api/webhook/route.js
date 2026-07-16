import { NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = 'https://damnart-ai-guladab.n8n-wsk.com/webhook/2f6c820f-507e-4fa5-9d40-ba76b546b500';

export async function POST(request) {
  try {
    const body = await request.json();

    const res = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Webhook server responded with status ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.text();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Webhook proxy error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to forward request to webhook' },
      { status: 500 }
    );
  }
}
