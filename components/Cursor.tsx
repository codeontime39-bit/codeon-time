"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const enter = () => cursor.classList.add("hov");
    const leave = () => cursor.classList.remove("hov");

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
    <div
      ref={cursorRef}
      className="custom-cursor fixed w-2 h-2 bg-ink rounded-full pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      style={{
        transition: "width 0.25s, height 0.25s, background 0.25s",
      }}
    />
  );
}
