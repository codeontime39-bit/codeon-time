"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    num: "001",
    name: "Atelier Norden",
    italicize: "Atelier",
    tags: "Marketing site / Design / Development",
    year: "2026",
    color: "#FF4F19",
  },
  {
    num: "002",
    name: "Loop Finance app",
    italicize: "app",
    tags: "Web app / Dashboard / System",
    year: "2026",
    color: "#1A1918",
  },
  {
    num: "003",
    name: "Kura Studio",
    italicize: "Studio",
    tags: "Portfolio / Editorial / WebGL",
    year: "2025",
    color: "#3F5E3A",
  },
  {
    num: "004",
    name: "Reach Wellness",
    italicize: "Wellness",
    tags: "Brand site / E-commerce",
    year: "2025",
    color: "#1F2D5C",
  },
  {
    num: "005",
    name: "Polestar Index",
    italicize: "Polestar",
    tags: "Documentation / Design system",
    year: "2025",
    color: "#7C2418",
  },
  {
    num: "006",
    name: "Halcyon Press",
    italicize: "Press",
    tags: "Editorial / Reader / CMS",
    year: "2024",
    color: "#5C4F1F",
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
    <section id="work" className="px-8 py-32 reveal">
      <div className="grid md:grid-cols-[100px_1fr_1fr] gap-8 mb-20">
        <div className="text-[12px] tracking-[0.1em] text-muted">02 — Work</div>
        <div className="text-[12px] tracking-[0.1em] uppercase text-muted">
          Selected projects
        </div>
        <h2 className="font-serif font-normal text-[clamp(40px,6vw,88px)] leading-[0.98] tracking-[-0.025em]">
          Things we&apos;ve
          <br />
          <em className="italic">built lately.</em>
        </h2>
      </div>

      <div className="border-t border-line">
        {projects.map((p, i) => (
          <a
            key={p.num}
            href="#"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="grid md:grid-cols-[60px_1fr_1.4fr_1fr_80px] gap-8 items-center py-7 border-b border-line relative group transition-[padding] duration-500 hover:pl-3 no-underline text-ink"
          >
            <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent scale-y-0 origin-bottom group-hover:scale-y-100 group-hover:origin-top transition-transform duration-500" />
            <span className="text-[12px] text-muted">{p.num}</span>
            <span className="font-serif text-[clamp(28px,3vw,44px)] leading-none tracking-[-0.02em]">
              {formatName(p.name, p.italicize)}
            </span>
            <span className="text-[13px] text-muted hidden md:block">{p.tags}</span>
            <span className="text-[13px] text-muted text-right hidden md:block">
              {p.year}
            </span>
            <span className="text-lg text-right transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        ))}
      </div>

      <div
        ref={previewRef}
        className={`fixed w-[280px] h-[200px] pointer-events-none z-[80] -translate-x-1/2 -translate-y-1/2 rounded overflow-hidden transition-opacity duration-300 ${
          hover !== null ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: hover !== null ? projects[hover].color : "transparent",
          boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
        }}
      >
        <div className="w-full h-full flex items-center justify-center font-serif italic text-3xl text-bg">
          {hover !== null ? projects[hover].name.split(" ")[0] : ""}
        </div>
      </div>
    </section>
  );
}
