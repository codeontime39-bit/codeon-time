"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const projects = [
  {
    num: "001",
    name: "Atelier Norden",
    italicize: "Atelier",
    tags: "Brand identity / Web design",
    year: "2026",
    accent: "electric",
    slug: "atelier-norden",
  },
  {
    num: "002",
    name: "Loop Finance app",
    italicize: "app",
    tags: "Web app / Design system",
    year: "2026",
    accent: "ink",
    slug: "loop-finance",
  },
  {
    num: "003",
    name: "Kura Studio",
    italicize: "Studio",
    tags: "Portfolio / Editorial",
    year: "2025",
    accent: "beige",
    slug: "kura-studio",
  },
  {
    num: "004",
    name: "Reach Wellness",
    italicize: "Wellness",
    tags: "Brand site / E-commerce",
    year: "2025",
    accent: "electric",
    slug: "reach-wellness",
  },
  {
    num: "005",
    name: "Polestar Index",
    italicize: "Polestar",
    tags: "Documentation / System",
    year: "2025",
    accent: "ink",
    slug: "polestar-index",
  },
  {
    num: "006",
    name: "Halcyon Press",
    italicize: "Press",
    tags: "Editorial / CMS",
    year: "2024",
    accent: "beige",
    slug: "halcyon-press",
  },
];

function formatName(name: string, italicize: string) {
  const parts = name.split(italicize);
  return (
    <>
      {parts[0]}
      <em className="italic">{italicize}</em>
      {parts[1]}
    </>
  );
}

function accentBg(accent: string) {
  if (accent === "electric") return "bg-electric";
  if (accent === "ink") return "bg-ink";
  return "bg-beige-dark border border-ink";
}

function accentText(accent: string) {
  if (accent === "electric" || accent === "ink") return "text-beige";
  return "text-ink";
}

export default function Work() {
  const [hover, setHover] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (previewRef.current) {
        previewRef.current.style.left = e.clientX + "px";
        previewRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section id="work" className="relative py-32 md:py-48 fade-up">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60">
              <span className="w-8 h-px bg-electric" />
              02 — Work
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-serif font-normal leading-[0.95] tracking-tightest text-ink"
              style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
            >
              Selected <span className="italic">projects.</span>
            </h2>
          </div>
        </div>

        {/* Project list */}
        <div className="border-t border-ink/30">
          {projects.map((p, i) => (
            <Link
              key={p.num}
              href={`/work/${p.slug}`}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="grid md:grid-cols-[60px_1fr_1.4fr_1fr_80px] gap-8 items-center py-7 border-b border-ink/30 relative group transition-[padding] duration-500 hover:pl-3 no-underline text-ink"
            >
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-electric scale-y-0 origin-bottom group-hover:scale-y-100 group-hover:origin-top transition-transform duration-500" />
              <span className="font-mono text-[11px] text-ink/60">{p.num}</span>
              <span
                className="font-serif tracking-tightest leading-none"
                style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
              >
                {formatName(p.name, p.italicize)}
              </span>
              <span className="text-[13px] text-ink/60 hidden md:block">
                {p.tags}
              </span>
              <span className="text-[13px] text-ink/60 text-right hidden md:block">
                {p.year}
              </span>
              <span className="text-lg text-right transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Cursor-following preview */}
      <div
        ref={previewRef}
        className={`fixed w-[280px] h-[340px] pointer-events-none z-[80] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          hover !== null ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{
          boxShadow: "0 30px 60px rgba(10,10,10,0.15)",
        }}
      >
        {hover !== null && (
          <div
            className={`w-full h-full flex items-center justify-center font-serif italic text-3xl ${accentBg(
              projects[hover].accent
            )} ${accentText(projects[hover].accent)}`}
          >
            {projects[hover].name.split(" ")[0]}
          </div>
        )}
      </div>
    </section>
  );
}
