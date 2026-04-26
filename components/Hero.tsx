"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const comp = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.5 });
      
      tl.to(".hero-tag", { opacity: 1, duration: 1 })
        .fromTo(
          ".word",
          { yPercent: 120, rotationZ: 3 },
          { yPercent: 0, rotationZ: 0, duration: 1.2, stagger: 0.1, ease: "power4.out" },
          "-=0.7"
        )
        .to(".hero-bottom", { opacity: 1, duration: 1 }, "-=0.6");
    }, comp);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen px-8 pt-[140px] pb-20 flex flex-col justify-between relative" ref={comp}>
      <div className="hero-tag opacity-0 text-[12px] tracking-[0.1em] uppercase text-muted flex items-center gap-3">
        <span className="w-7 h-px bg-muted" />
        Available 24/7
      </div>

      <h1 className="font-serif font-normal text-[clamp(56px,12vw,220px)] leading-[0.92] tracking-[-0.025em] mt-8">
        <span className="hero-line block overflow-hidden pb-1">
          <span className="word inline-block origin-bottom-left">Code,</span>{" "}
          <span className="word inline-block origin-bottom-left">delivered</span>
        </span>
        <span className="hero-line block overflow-hidden pb-1">
          <span className="word inline-block origin-bottom-left">
            <em className="italic">on time.</em>
          </span>
        </span>
      </h1>

      <div className="hero-bottom opacity-0 grid md:grid-cols-3 gap-8 items-end mt-20">
        <div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-muted mb-1.5">
            The studio
          </div>
          <div className="text-sm">
            An independent studio creating 
            <br />
            refined digital experiences.
          </div>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-muted mb-1.5">
            Founded
          </div>
          <div className="text-sm">
            2025 - India
            <br />
            Working remote, working global.
          </div>
        </div>
        <div className="text-[11px] tracking-[0.15em] uppercase text-muted flex items-center gap-3 md:justify-end">
          Scroll
          <span className="inline-block w-9 h-px bg-current relative overflow-hidden">
            <span
              className="absolute top-0 w-full h-full bg-ink"
              style={{ animation: "scrollHint 2.4s infinite", left: "-100%" }}
            />
          </span>
        </div>
      </div>

      <style jsx>{`
        .reg-sup {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.18em;
          font-style: normal;
          vertical-align: top;
          margin-left: 0.1em;
          line-height: 1;
          font-weight: 400;
          top: 0.5em;
          position: relative;
        }
      `}</style>
    </section>
  );
}
