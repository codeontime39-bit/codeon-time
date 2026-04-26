export default function About() {
  const services = [
    "UX/UI design",
    "Web development",
    "SEO & performance",
    "Design systems",
    "Marketing sites",
    "Web apps",
    "Backend & APIs",
    "Animations & interactions",
  ];

  const facts = [
    ["Founded", "2025"],
    ["Based", "DELHI, IN"],
    ["Working", "Remote, global"],
    ["Team", " Desiner & Developer"],
    ["Stack", "TS / React / JS / CSS / Three.js / Next / Node"],
    ["Reply", "Within 24h"],
  ];

  return (
    <section id="about" className="px-8 py-32 reveal">
      <div className="grid md:grid-cols-[100px_1fr_1fr] gap-8 mb-20">
        <div className="text-[12px] tracking-[0.1em] text-muted">01 - Studio</div>
        <div className="text-[12px] tracking-[0.1em] uppercase text-muted">About us</div>
        <h2 className="font-serif font-normal text-[clamp(40px,6vw,88px)] leading-[0.98] tracking-[-0.025em]">
          A small team
          <br />
          with <em className="italic">big ideas.</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-[100px_1fr_1fr] gap-8">
        <div className="hidden md:block" />
        <div>
          <p className="text-lg leading-[1.5] max-w-[520px]">
            We&apos;re a duo with a passion for design, web architecture and
            shipping code that lasts. Code On Time<sup>®</sup> is a freelance
            studio founded in 2026 with one promise:{" "}
            <em className="italic">
              we build well, and we deliver on the day we said we would.
            </em>
          </p>
          <p className="text-lg leading-[1.5] max-w-[520px] mt-6">
            No agency layers, no project managers translating between you and
            the people writing the code. You talk to the makers - directly,
            every day, until your product is live.
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {services.map((s) => (
              <span
                key={s}
                className="px-4 py-2 border border-line rounded-full text-[13px] transition-colors duration-300 hover:bg-ink hover:text-bg hover:border-ink"
                data-cursor="hover"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          {facts.map(([k, v], i) => (
            <div
              key={k}
              className={`flex justify-between py-3.5 border-b border-line text-sm ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <span className="text-muted">{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
