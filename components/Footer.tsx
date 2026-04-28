"use client";

import { useEffect, useState } from "react";

const cities = [
  { id: "BLR", name: "Bengaluru", tz: "Asia/Kolkata" },
  { id: "LDN", name: "London", tz: "Europe/London" },
  { id: "NYC", name: "New York", tz: "America/New_York" },
  { id: "TYO", name: "Tokyo", tz: "Asia/Tokyo" },
];

function timeIn(tz: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export default function Footer() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const tick = () => {
      const next: Record<string, string> = {};
      cities.forEach((c) => (next[c.id] = timeIn(c.tz)));
      setTimes(next);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative bg-ink text-beige pt-24 pb-10">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* The three colour blocks at the very top */}
        <div className="grid grid-cols-3 gap-px mb-16 h-2">
          <div className="bg-electric" />
          <div className="bg-beige" />
          <div className="bg-beige-dark" />
        </div>

        {/* Massive BBB wordmark */}
        <div className="border-b border-beige/15 pb-12 mb-12">
          <h2
            className="font-serif font-normal leading-[0.85] tracking-tightest text-beige"
            style={{ fontSize: "clamp(64px, 16vw, 280px)" }}
          >
            Blue Black <span className="italic text-beige-dark">Beige</span>
          </h2>
          <div className="flex items-end justify-between flex-wrap gap-4 mt-6">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-beige/50">
              Design &amp; development studio · Est. 2026
            </p>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-beige/50">
              Made on planet earth
            </p>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-5">
            <p className="text-base leading-relaxed text-beige/70 max-w-md">
              A two-person studio working at the intersection of design and
              engineering. We take a small number of briefs each quarter and do
              them properly.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h5 className="font-mono text-[10px] tracking-[0.3em] uppercase text-beige/40 mb-5">
              Studio
            </h5>
            <ul className="space-y-3 text-sm">
              {["Work", "About", "Approach", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="link-line text-beige/80 hover:text-beige">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h5 className="font-mono text-[10px] tracking-[0.3em] uppercase text-beige/40 mb-5">
              Reach us
            </h5>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:nayan@blueblackbeige.in" className="link-line text-beige/80 hover:text-beige">
                  nayan@blueblackbeige.in
                </a>
              </li>
              <li>
                <a href="mailto:alok@blueblackbeige.in" className="link-line text-beige/80 hover:text-beige">
                  alok@blueblackbeige.in
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <h5 className="font-mono text-[10px] tracking-[0.3em] uppercase text-beige/40 mb-5">
              Networks
            </h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="link-line text-beige/80 hover:text-beige">LinkedIn ↗</a></li>
              <li><a href="#" className="link-line text-beige/80 hover:text-beige">Instagram ↗</a></li>
              <li><a href="#" className="link-line text-beige/80 hover:text-beige">GitHub ↗</a></li>
            </ul>
          </div>
        </div>

        {/* World clocks */}
        <div className="pt-8 border-t border-beige/10 flex gap-12 flex-wrap mb-12">
          {cities.map((c) => (
            <div
              key={c.id}
              className="font-serif text-[22px] italic flex items-baseline gap-3"
            >
              <span className="tabular text-beige">{times[c.id] || "—:—:—"}</span>
              <span className="font-sans not-italic text-[10px] tracking-[0.25em] uppercase text-beige/50">
                {c.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-beige/10 flex justify-between flex-wrap gap-4 text-[11px] text-beige/40 font-mono tracking-wider">
          <span>© 2026 Blue Black Beige. All rights reserved.</span>
          <span>Made in Bengaluru, shipped worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
