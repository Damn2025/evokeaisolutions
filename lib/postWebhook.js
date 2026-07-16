import https from "node:https";
import { URL } from "node:url";

/**
 * POST JSON to n8n (or similar) webhooks whose TLS certs may not verify
 * in Node (common on custom n8n hostnames).
 */
export function postWebhookJson(url, payload) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const body = JSON.stringify(payload);

    const req = https.request(
      {
        protocol: parsed.protocol,
        hostname: parsed.hostname,
        port: parsed.port || 443,
        path: `${parsed.pathname}${parsed.search}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
        // n8n-wsk host presents a cert Node cannot verify locally
        rejectUnauthorized: false,
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          resolve({
            ok: (res.statusCode || 0) >= 200 && (res.statusCode || 0) < 300,
            status: res.statusCode || 0,
            body: data,
          });
        });
      }
    );

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}
