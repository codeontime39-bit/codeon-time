"use client";

import { useState } from "react";

export default function MegaCta() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 fade-up">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60">
              <span className="w-8 h-px bg-electric" />
              04 — Contact
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-serif font-normal leading-[0.92] tracking-tightest text-ink"
              style={{ fontSize: "clamp(48px, 9vw, 180px)" }}
            >
              Tell us about
              <br />
              <span className="italic">your project.</span>
            </h2>
          </div>
        </div>

        {/* Two column form + offices */}
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          {/* Form */}
          <div className="col-span-12 md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="border-b border-ink/30 pb-2">
                  <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 block mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent text-lg text-ink outline-none placeholder:text-ink/30 py-2"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="border-b border-ink/30 pb-2">
                  <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent text-lg text-ink outline-none placeholder:text-ink/30 py-2"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-b border-ink/30 pb-2">
                  <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent text-lg text-ink outline-none placeholder:text-ink/30 py-2"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="border-b border-ink/30 pb-2">
                  <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 block mb-2">
                    Budget
                  </label>
                  <select
                    className="w-full bg-transparent text-lg text-ink outline-none py-2 cursor-pointer"
                  >
                    <option>Under $10k</option>
                    <option>$10k — $25k</option>
                    <option>$25k — $50k</option>
                    <option>$50k+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="border-b border-ink/30 pb-2">
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 block mb-2">
                  What do you need?
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-transparent text-lg text-ink outline-none resize-none placeholder:text-ink/30 py-2"
                  placeholder="A few sentences about the project, timeline, anything important."
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="inline-flex items-center gap-3 px-9 py-5 bg-ink text-beige text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-electric transition-colors duration-500 disabled:opacity-50"
              >
                <span>
                  {status === "idle" && "Send message"}
                  {status === "sending" && "Sending…"}
                  {status === "sent" && "Received — thanks ✓"}
                </span>
                <span className="text-base leading-none">→</span>
              </button>

              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/60">
                We reply within 24 hours.
              </p>
            </form>
          </div>

          {/* Right — direct contact */}
          <div className="col-span-12 md:col-span-5 md:pl-12 md:border-l md:border-ink/15">
            <div className="space-y-12">
              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-2">
                  Or write to us directly
                </div>
                <a
                  href="mailto:nayan@blueblackbeige.in"
                  className="link-line text-2xl md:text-3xl font-serif italic text-ink hover:text-electric transition-colors"
                >
                  nayan@blueblackbeige.in
                </a>
              </div>

              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-2">
                  Partnerships
                </div>
                <a
                  href="mailto:alok@blueblackbeige.in"
                  className="link-line text-2xl md:text-3xl font-serif italic text-ink hover:text-electric transition-colors"
                >
                  alok@blueblackbeige.in
                </a>
              </div>

              <div className="pt-8 border-t border-ink/15">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-3">
                  Where we work from
                </div>
                <p className="text-base leading-relaxed text-ink/80">
                  Bengaluru, India
                  <br />
                  <span className="text-ink/60">Remote, working globally</span>
                </p>
              </div>

              {/* Three colour swatches */}
              <div className="pt-8 border-t border-ink/15">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-4">
                  The studio in three colours
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 h-16 bg-electric flex items-end p-2">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-beige">
                      BLUE
                    </span>
                  </div>
                  <div className="flex-1 h-16 bg-ink flex items-end p-2">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-beige">
                      BLACK
                    </span>
                  </div>
                  <div className="flex-1 h-16 bg-beige-dark border border-ink flex items-end p-2">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-ink">
                      BEIGE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
