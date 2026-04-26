"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    // TODO: Add your actual form submission here (Formspree, Netlify Forms, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[11px] tracking-[0.1em] uppercase text-muted mb-3">
            Your name
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 bg-transparent border border-line rounded-none focus:border-ink outline-none transition-colors text-sm"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="block text-[11px] tracking-[0.1em] uppercase text-muted mb-3">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 bg-transparent border border-line rounded-none focus:border-ink outline-none transition-colors text-sm"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] tracking-[0.1em] uppercase text-muted mb-3">
          What do you need?
        </label>
        <textarea
          required
          rows={6}
          className="w-full px-4 py-3 bg-transparent border border-line rounded-none focus:border-ink outline-none transition-colors text-sm resize-none"
          placeholder="Tell us about your project, timeline, and budget..."
        />
      </div>

      <button
        type="submit"
        disabled={status !== "idle"}
        className="px-8 py-4 bg-ink text-bg border-none text-[12px] tracking-[0.15em] uppercase font-medium transition-all hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
        data-magnetic
      >
        {status === "idle" && "Send message"}
        {status === "sending" && "Sending..."}
        {status === "sent" && "Sent ✓"}
      </button>
    </form>
  );
}
