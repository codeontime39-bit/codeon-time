const principles = [
  {
    num: "01",
    title: "Excellent, not just good",
    italic: "Excellent,",
    body: "Acceptable isn't the goal. Every line, every spacing decision, every animation gets the same scrutiny — even if no one would notice.",
  },
  {
    num: "02",
    title: "Challenge welcome",
    italic: "welcome",
    body: "Ambitious briefs energise us. Hand us the problem you've been told is unsolvable and we'll find the angle.",
  },
  {
    num: "03",
    title: "No time to lose",
    italic: "time",
    body: "Your time is valuable. So is ours. We won't promise the impossible — but what we promise, we deliver, on the day we said we would.",
  },
  {
    num: "04",
    title: "It belongs to you",
    italic: "belongs",
    body: "You own everything we make for you — code, design, components, ideas. No lock-ins, no proprietary middleware. Your independence comes first.",
  },
  {
    num: "05",
    title: "All is said",
    italic: "said",
    body: "Honest collaboration means anyone — you, us, your team — can speak to anything at any time. All ideas welcome. The best one wins.",
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
  return (
    <section id="approach" className="relative py-32 md:py-48 bg-beige-light border-y border-ink/15 fade-up">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60">
              <span className="w-8 h-px bg-electric" />
              03 — Approach
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-serif font-normal leading-[0.95] tracking-tightest text-ink"
              style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
            >
              Six things we <span className="italic text-electric">believe.</span>
            </h2>
          </div>
        </div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {principles.map((p, i) => (
            <div
              key={p.num}
              className="pt-6 border-t border-ink/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`w-2 h-2 ${
                    i % 3 === 0
                      ? "bg-electric"
                      : i % 3 === 1
                      ? "bg-ink"
                      : "bg-beige-dark border border-ink"
                  }`}
                />
                <span className="font-mono text-[11px] tracking-[0.2em] text-ink/60">
                  {p.num}
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl leading-tight tracking-tightest mb-3 text-ink">
                {formatTitle(p.title, p.italic)}
              </h3>
              <p className="text-[15px] leading-[1.55] text-ink/70 max-w-md">
                {p.body}
                {p.num === "06" && (
                  <>
                    {" "}
                    <a
                      href="#contact"
                      className="link-line text-ink underline-offset-4"
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
