"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState("—:—:—");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const t = `${String(d.getHours()).padStart(2, "0")}:${String(
        d.getMinutes()
      ).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[90] flex justify-between items-center px-8 py-7 mix-blend-difference text-white">
      <a
        href="#"
        className="brand font-serif text-[26px] leading-none tracking-[-0.01em] no-underline text-white"
      >
        code on <em className="italic">time</em>
        <sup className="brand-r">®</sup>
      </a>

      <nav className="hidden md:flex gap-9">
        {[
          { label: "Work", href: "#work" },
          { label: "Studio", href: "#about" },
          { label: "Approach", href: "#process" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[13px] no-underline text-white relative py-1 group"
          >
            {item.label}
            <span className="absolute bottom-0 left-0 right-0 h-px bg-white scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500" />
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <span className="hidden md:inline text-[13px] tabular-nums">{time}</span>
        <a
          href="#contact"
          className="text-[12px] no-underline text-white px-[18px] py-[10px] border border-current rounded-full inline-flex items-center gap-2 transition-colors duration-500 hover:bg-white hover:text-ink group"
        >
          Start a project
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      <style jsx>{`
        .brand-r {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.4em;
          font-style: normal;
          font-weight: 400;
          vertical-align: top;
          margin-left: 2px;
          top: 0.2em;
          position: relative;
        }
      `}</style>
    </header>
  );
}
