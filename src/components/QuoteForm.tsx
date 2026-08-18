import { useState } from "react";
import { submitEnquiry } from "@/lib/enquiry.functions";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    try {
      const res = await submitEnquiry({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      setStatus(res.ok ? "sent" : "error");
      setMessage(res.message);
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please call us on +971 56 222 1906.");
    }
  }

  const input =
    "w-full border border-black/20 bg-white px-4 py-3 text-[15px] text-mts-navy outline-none focus:border-mts-gold";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input className={input} name="name" placeholder="Name" required />
      <input className={input} name="email" type="email" placeholder="Email" required />
      <input className={input} name="phone" placeholder="Phone" />
      <textarea className={input} name="message" rows={4} placeholder="Message" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-mts-gold px-6 py-3 text-[15px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-mts-navy disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Send Enquiry"}
      </button>
      {message ? (
        <p className={`text-[14px] ${status === "error" ? "text-red-600" : "text-mts-navy"}`}>{message}</p>
      ) : null}
    </form>
  );
}
