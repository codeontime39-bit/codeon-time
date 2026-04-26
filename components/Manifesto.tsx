"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const principles = [
  {
    num: "01",
    title: "Excellent, not just good",
    italic: "Excellent,",
    body: "Acceptable isn't the goal. Every line, every spacing decision, every animation gets the same scrutiny - even if no one else would notice.",
  },
  {
    num: "02",
    title: "Challenge welcome",
    italic: "welcome",
    body: "Ambitious briefs energize us. Hand us the problem you've been told is unsolvable and we'll find the angle.",
  },
  {
    num: "03",
    title: "No time to lose",
    italic: "time",
    body: "Your time is valuable. So is ours. We won't promise the impossible - but what we promise, we deliver, on the day we said we would.",
  },
  {
    num: "04",
    title: "It belongs to you",
    italic: "belongs",
    body: "You own everything we make for you - code, design, components, ideas. No lock-ins, no proprietary middleware. Your independence comes first.",
  },
  {
    num: "05",
    title: "All is said",
    italic: "said",
    body: "Honest collaboration means anyone - you, us, your team - can speak to anything at any time. All ideas are welcome. The best one wins.",
  },
  {
    num: "06",
    title: "Action!",
    italic: "Action!",
    body: "Enough about how we work. Time to prove what we're worth.",
  },
];

function formatTitle(title: string, italic: string) {
  if (title === italic) return <em className="italic">{title}</em>;
  const parts = title.split(italic);
  return (
    <>
      {parts[0]}
      <em className="italic">{italic}</em>
      {parts[1]}
    </>
  );
}

export default function Manifesto() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray(".principle-block");
      
      gsap.fromTo(
        blocks as HTMLElement[],
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="px-8 py-32" ref={container}>
      <div className="grid md:grid-cols-[100px_1fr_1fr] gap-8 mb-20 principle-block">
        <div className="text-[12px] tracking-[0.1em] text-muted">03 - Approach</div>
        <div className="text-[12px] tracking-[0.1em] uppercase text-muted">
          How we work
        </div>
        <h2 className="font-serif font-normal text-[clamp(40px,6vw,88px)] leading-[0.98] tracking-[-0.025em]">
          Six things
          <br />
          we <em className="italic">believe.</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-[100px_1fr] gap-8">
        <div className="hidden md:block" />
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-15" style={{ rowGap: "60px" }}>
          {principles.map((p) => (
            <div key={p.num} className="pt-6 border-t border-line principle-block">
              <div className="text-[12px] text-muted mb-6">{p.num}</div>
              <h3 className="font-serif text-3xl leading-tight tracking-[-0.02em] mb-3 font-normal">
                {formatTitle(p.title, p.italic)}
              </h3>
              <p className="text-[15px] leading-[1.5] text-muted">
                {p.body}
                {p.num === "06" && (
                  <>
                    {" "}
                    <a
                      href="#contact"
                      className="text-ink underline"
                      data-cursor="hover"
                    >
                      Introduce us to your project →
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
