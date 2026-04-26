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
    <footer className="bg-ink text-bg px-8 pt-20 pb-7">
      <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 items-start">
        <div className="footer-mark font-serif leading-none tracking-[-0.02em] col-span-2 md:col-span-1">
          code on <em className="italic">time</em>
        </div>
        <div>
          <h5 className="text-[11px] tracking-[0.15em] uppercase text-white/40 mb-5 font-medium">
            Studio
          </h5>
          <a href="#about" className="block text-[15px] py-1 text-bg no-underline hover:text-accent">
            About
          </a>
          <a href="#work" className="block text-[15px] py-1 text-bg no-underline hover:text-accent">
            Work
          </a>
          <a href="#process" className="block text-[15px] py-1 text-bg no-underline hover:text-accent">
            Approach
          </a>
        </div>
        <div>
          <h5 className="text-[11px] tracking-[0.15em] uppercase text-white/40 mb-5 font-medium">
            Contact
          </h5>
          <a
            href="mailto:codeontime39@gmail.com"
            className="block text-[15px] py-1 text-bg no-underline hover:text-accent"
          >
            codeontime39@gmail.com
          </a>
          {/* <a
            href="mailto:partner@codeontime.dev"
            className="block text-[15px] py-1 text-bg no-underline hover:text-accent"
          >
            partner@codeontime.dev
          </a> */}
        </div>
        <div>
          <h5 className="text-[11px] tracking-[0.15em] uppercase text-white/40 mb-5 font-medium">
            Networks
          </h5>
          <a href="#" className="block text-[15px] py-1 text-bg no-underline hover:text-accent">
            LinkedIn ↗
          </a>
          <a href="#" className="block text-[15px] py-1 text-bg no-underline hover:text-accent">
            Instagram ↗
          </a>
          <a href="#" className="block text-[15px] py-1 text-bg no-underline hover:text-accent">
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="mt-20 pt-7 border-t border-white/10 flex gap-12 flex-wrap">
        {cities.map((c) => (
          <div key={c.id} className="font-serif text-[22px] italic flex items-baseline gap-3">
            <span className="tabular-nums">{times[c.id] || "-:-:-"}</span>
            <span className="font-sans not-italic text-[11px] tracking-[0.15em] uppercase text-white/50">
              {c.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-7 pt-7 border-t border-white/10 flex justify-between flex-wrap gap-4 text-[12px] text-white/40">
        <span>2026 Code On Time. Built by hand.</span>
        <span>Made in India, shipped worldwide.</span>
      </div>

      <style jsx>{`
        .footer-mark {
          font-size: clamp(40px, 6vw, 80px);
        }
        .footer-r {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.22em;
          font-style: normal;
          font-weight: 400;
          vertical-align: top;
          margin-left: 4px;
          top: 0.3em;
          position: relative;
        }
      `}</style>
    </footer>
  );
}
