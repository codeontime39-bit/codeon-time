"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let magnetTarget: HTMLElement | null = null;

    const move = (e: MouseEvent) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;

      // Check for magnetic elements
      const magnetEls = document.querySelectorAll<HTMLElement>("[data-magnetic]");
      let foundMagnet = false;

      magnetEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        const magnetRadius = 80;

        if (distance < magnetRadius) {
          foundMagnet = true;
          magnetTarget = el;
          const pull = 0.3;
          targetX.current = e.clientX + (centerX - e.clientX) * pull;
          targetY.current = e.clientY + (centerY - e.clientY) * pull;
        }
      });

      if (!foundMagnet) magnetTarget = null;
    };

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      currentX.current = lerp(currentX.current, targetX.current, 0.15);
      currentY.current = lerp(currentY.current, targetY.current, 0.15);

      cursor.style.left = currentX.current + "px";
      cursor.style.top = currentY.current + "px";

      ring.style.left = lerp(parseFloat(ring.style.left || "0"), targetX.current, 0.08) + "px";
      ring.style.top = lerp(parseFloat(ring.style.top || "0"), targetY.current, 0.08) + "px";

      requestAnimationFrame(animate);
    };
    animate();

    const enter = () => {
      cursor.classList.add("hov");
      ring.classList.add("hov");
    };
    const leave = () => {
      cursor.classList.remove("hov");
      ring.classList.remove("hov");
    };

    window.addEventListener("mousemove", move);

    const interactive = document.querySelectorAll("a, button, [data-cursor='hover']");
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
        className="custom-cursor fixed w-2 h-2 bg-ink rounded-full pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-[width,height] duration-300"
      />
      <div
        ref={ringRef}
        className="custom-cursor fixed w-10 h-10 border border-ink/30 rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-300"
      />
      <style jsx>{`
        .hov {
          width: 48px !important;
          height: 48px !important;
          background: var(--accent) !important;
          border-color: var(--accent) !important;
        }
        .custom-cursor.hov:first-child {
          width: 4px !important;
          height: 4px !important;
        }
      `}</style>
    </>
  );
}
