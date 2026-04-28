"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let cx = 0, cy = 0, rx = 0, ry = 0;

    const move = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      cursor.style.left = cx + "px";
      cursor.style.top = cy + "px";
    };

    const animate = () => {
      rx += (cx - rx) * 0.15;
      ry += (cy - ry) * 0.15;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("mousemove", move);

    const enter = () => {
      cursor.classList.add("hov");
      ring.classList.add("hov");
    };
    const leave = () => {
      cursor.classList.remove("hov");
      ring.classList.remove("hov");
    };

    const interactive = document.querySelectorAll("a, button, input, textarea, select, [data-cursor='hover']");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed w-2 h-2 bg-ink rounded-full pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background] duration-300"
      />
      <div
        ref={ringRef}
        className="custom-cursor fixed w-10 h-10 border border-ink/40 rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-300"
      />
      <style jsx global>{`
        .custom-cursor.hov:first-of-type {
          width: 0px !important;
          height: 0px !important;
        }
        .custom-cursor.hov:last-of-type {
          width: 56px !important;
          height: 56px !important;
          border-color: #2952CC !important;
          background: rgba(41, 82, 204, 0.1);
        }
      `}</style>
    </>
  );
}
