"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [time, setTime] = useState("--:--");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const tick = () => {
      const t = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 60000);

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearInterval(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-beige/85 backdrop-blur-md border-b border-ink/10"
          : "py-7"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 flex items-center justify-between">
        {/* Brand mark — three coloured B's */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-1">
            <span className="w-3.5 h-3.5 bg-electric inline-block transition-transform duration-500 group-hover:translate-y-[-2px]" />
            <span className="w-3.5 h-3.5 bg-ink inline-block transition-transform duration-500 group-hover:translate-y-[-2px]" style={{ transitionDelay: "60ms" }} />
            <span className="w-3.5 h-3.5 bg-beige-dark border border-ink inline-block transition-transform duration-500 group-hover:translate-y-[-2px]" style={{ transitionDelay: "120ms" }} />
          </div>
          <span className="font-serif text-[20px] leading-none tracking-tightest text-ink">
            Blue Black <span className="italic">Beige</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {[
            { label: "Work", href: "#work" },
            { label: "Studio", href: "#about" },
            { label: "Approach", href: "#approach" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-line text-[13px] tracking-wide text-ink/80 hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right meta */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-ink/60">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
            BLR · {time}
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-beige text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-electric transition-colors duration-500"
          >
            <span>Start a project</span>
            <span className="text-base leading-none">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
