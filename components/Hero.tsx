"use client";

export default function Hero() {
  return (
    <section className="min-h-screen px-8 pt-[140px] pb-20 flex flex-col justify-between relative">
      <div className="hero-tag text-[12px] tracking-[0.1em] uppercase text-muted flex items-center gap-3">
        <span className="w-7 h-px bg-muted" />
        Available — Booking Q3 2026
      </div>

      <h1 className="font-serif font-normal text-[clamp(56px,12vw,220px)] leading-[0.92] tracking-[-0.025em] mt-8">
        <span className="hero-line">
          <span className="hero-line-inner line-1">Code, delivered</span>
        </span>
        <span className="hero-line">
          <span className="hero-line-inner line-2">
            <em className="italic">on time.</em>
            <sup className="reg-sup">®</sup>
          </span>
        </span>
      </h1>

      <div className="hero-bottom grid md:grid-cols-3 gap-8 items-end mt-20">
        <div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-muted mb-1.5">
            The studio
          </div>
          <div className="text-sm">
            A two-person freelance practice
            <br />
            building digital products with care.
          </div>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-muted mb-1.5">
            Founded
          </div>
          <div className="text-sm">
            2026 — Bengaluru, India
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
        .hero-tag {
          opacity: 0;
          animation: fadeIn 0.8s 0.1s ease forwards;
        }
        .hero-line {
          display: block;
          overflow: hidden;
          line-height: 0.92;
          padding-bottom: 0.05em;
        }
        .hero-line-inner {
          display: inline-block;
          transform: translateY(100%);
        }
        .line-1 {
          animation: lineUp 1.2s 0.3s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }
        .line-2 {
          animation: lineUp 1.2s 0.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }
        .reg-sup {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.18em;
          font-style: normal;
          vertical-align: top;
          margin-left: 0.1em;
          line-height: 1;
          font-weight: 400;
          top: 0.5em;
        }
        .hero-bottom {
          opacity: 0;
          animation: fadeIn 1s 1.4s ease forwards;
        }
        @keyframes lineUp {
          to {
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
