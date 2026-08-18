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
    "w-full rounded-[10px] border border-black/15 bg-white px-5 py-4 text-[16px] text-mts-navy placeholder:text-[#9b9b9b] outline-none transition-colors focus:border-mts-gold";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input className={input} name="name" placeholder="Name" required />
      <input className={input} name="phone" placeholder="Phone" />
      <input className={input} name="email" type="email" placeholder="Email" required />
      <textarea className={input} name="message" rows={4} placeholder="Message" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#c6ab84] px-6 py-4 text-[17px] font-medium text-white transition-colors hover:bg-mts-gold disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : (<>Send <span aria-hidden="true">&#8594;</span></>)}
      </button>
      {message ? (
        <p className={`text-[14px] ${status === "error" ? "text-red-600" : "text-mts-navy"}`}>{message}</p>
      ) : null}
    </form>
  );
}
