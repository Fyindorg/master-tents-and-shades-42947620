import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  phone: z.string().max(60).optional().default(""),
  message: z.string().max(5000).optional().default(""),
});

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const webhook = process.env["ENQUIRY_WEBHOOK_URL"];
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.text();
        console.error(`Enquiry webhook failed [${res.status}]: ${body}`);
        return { ok: false as const, message: "We could not send your message. Please call +971 56 222 1906." };
      }
    } else {
      console.info("Enquiry received", { name: data.name, email: data.email, phone: data.phone });
    }
    return { ok: true as const, message: "Thank you. We will get back to you shortly." };
  });
