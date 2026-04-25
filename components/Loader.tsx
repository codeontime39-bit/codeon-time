"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-bg z-[200] flex items-center justify-center flex-col transition-opacity duration-700 ${
        gone ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      <div className="loader-mark font-serif leading-none tracking-[-0.02em]">
        code on <em className="italic">time</em>
        <sup className="loader-r">®</sup>
      </div>
      <div className="w-[280px] h-px bg-line mt-9 relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-0 bg-ink animate-fillBar" />
      </div>
      <div className="mt-4 text-[11px] tracking-[0.1em] uppercase text-muted">
        Preparing the studio
      </div>

      <style jsx>{`
        .loader-mark {
          font-size: clamp(48px, 8vw, 120px);
        }
        .loader-r {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.2em;
          font-style: normal;
          font-weight: 400;
          vertical-align: top;
          margin-left: 4px;
          top: 0.3em;
          position: relative;
        }
      `}</style>
    </div>
  );
}
