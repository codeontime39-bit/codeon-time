"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [stage, setStage] = useState<"intro" | "filling" | "exit" | "done">("intro");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Stage 1: Letters drop in (0-1s)
    // Stage 2: Bar fills + counter ticks (1-2.6s)
    // Stage 3: Exit upward (2.6-3.4s)
    const t1 = setTimeout(() => setStage("filling"), 1000);
    const t2 = setTimeout(() => setStage("exit"), 2600);
    const t3 = setTimeout(() => setStage("done"), 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Counter ticking from 0 → 100 during filling stage
  useEffect(() => {
    if (stage !== "filling") return;
    const start = Date.now();
    const duration = 1500;
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setCount(pct);
      if (pct >= 100) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [stage]);

  if (stage === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-beige overflow-hidden"
      style={{
        animation: stage === "exit" ? "loaderExit 0.9s cubic-bezier(0.85, 0, 0.15, 1) forwards" : "none",
      }}
    >
      {/* Top meta bar */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60">
          <span
            className="w-1.5 h-1.5 rounded-full bg-electric"
            style={{ animation: "pulseDot 1.4s ease-in-out infinite" }}
          />
          INITIALISING STUDIO
        </div>
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60">
          EST. 2026
        </div>
      </div>

      {/* Center stage — BBB letterforms in three coloured blocks */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-stretch gap-3 md:gap-5">
          {/* B — Blue */}
          <Block
            color="bg-electric"
            text="text-beige"
            letter="B"
            label="Blue"
            delay={0}
            stage={stage}
          />
          {/* B — Black */}
          <Block
            color="bg-ink"
            text="text-beige"
            letter="B"
            label="Black"
            delay={120}
            stage={stage}
          />
          {/* B — Beige */}
          <Block
            color="bg-beige-dark"
            text="text-ink"
            letter="B"
            label="Beige"
            delay={240}
            stage={stage}
            border
          />
        </div>
      </div>

      {/* Bottom: progress bar + counter + brand */}
      <div className="absolute bottom-10 left-8 right-8">
        <div className="flex items-end justify-between gap-6 mb-4">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60">
            Blue · Black · Beige
          </div>
          <div className="font-mono text-[11px] tracking-[0.2em] tabular text-ink/80">
            {String(count).padStart(3, "0")}%
          </div>
        </div>
        {/* Progress bar */}
        <div className="relative w-full h-px bg-ink/15">
          <div
            className="absolute inset-y-0 left-0 bg-ink origin-left"
            style={{
              transform: stage === "intro" ? "scaleX(0)" : "scaleX(1)",
              animation:
                stage === "filling"
                  ? "barFill 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards"
                  : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Block({
  color,
  text,
  letter,
  label,
  delay,
  stage,
  border,
}: {
  color: string;
  text: string;
  letter: string;
  label: string;
  delay: number;
  stage: "intro" | "filling" | "exit" | "done";
  border?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Color label above */}
      <div
        className="font-mono text-[9px] tracking-[0.3em] uppercase text-ink/60 transition-opacity duration-500"
        style={{
          opacity: stage === "intro" ? 0 : 1,
          transitionDelay: `${1100 + delay}ms`,
        }}
      >
        {label}
      </div>

      {/* The block */}
      <div
        className={`relative ${color} ${border ? "border border-ink" : ""} overflow-hidden`}
        style={{
          width: "clamp(80px, 18vw, 220px)",
          height: "clamp(110px, 24vw, 300px)",
        }}
      >
        {/* Sweep wash on enter */}
        <div
          className="absolute inset-0 bg-beige"
          style={{
            animation: `blockSweep 0.6s ${delay}ms cubic-bezier(0.85, 0, 0.15, 1) forwards`,
          }}
        />

        {/* The letter */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <span
            className={`font-serif italic ${text}`}
            style={{
              fontSize: "clamp(70px, 16vw, 200px)",
              lineHeight: "1",
              animation: `letterDrop 0.9s ${600 + delay}ms cubic-bezier(0.34, 1.56, 0.64, 1) backwards`,
            }}
          >
            {letter}
          </span>
        </div>
      </div>
    </div>
  );
}
