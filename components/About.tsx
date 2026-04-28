export default function About() {
  const services = [
    "Brand identity",
    "Web design",
    "Frontend engineering",
    "Design systems",
    "Motion design",
    "Art direction",
  ];

  return (
    <section id="about" className="relative py-32 md:py-48 fade-up">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60">
              <span className="w-8 h-px bg-electric" />
              01 — Studio
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="font-serif font-normal leading-[0.95] tracking-tightest text-ink"
              style={{ fontSize: "clamp(40px, 7vw, 120px)" }}
            >
              A studio of <span className="italic">two,</span>
              <br />
              three colours, <span className="text-electric italic">one promise.</span>
            </h2>
          </div>
        </div>

        {/* Three colour philosophy panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/15 mb-20">
          {/* Blue panel */}
          <div className="bg-electric text-beige p-10 md:p-12 min-h-[360px] flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-80 mb-4">
                Blue
              </div>
              <h3 className="font-serif text-4xl md:text-5xl leading-[0.95] tracking-tightest mb-4">
                <span className="italic">Logic.</span>
              </h3>
              <p className="text-sm leading-relaxed opacity-90 max-w-xs">
                The engineering. Clean architecture, performant code,
                systems that scale without falling apart.
              </p>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-60">
              #2952CC
            </div>
          </div>

          {/* Black panel */}
          <div className="bg-ink text-beige p-10 md:p-12 min-h-[360px] flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-80 mb-4">
                Black
              </div>
              <h3 className="font-serif text-4xl md:text-5xl leading-[0.95] tracking-tightest mb-4">
                <span className="italic">Intent.</span>
              </h3>
              <p className="text-sm leading-relaxed opacity-90 max-w-xs">
                The structure. Typography, hierarchy, the unflinching
                ink that gives every layout its backbone.
              </p>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-60">
              #0A0A0A
            </div>
          </div>

          {/* Beige panel */}
          <div className="bg-beige-dark text-ink p-10 md:p-12 min-h-[360px] flex flex-col justify-between border-t border-b md:border-t-0 md:border-b-0 border-ink/10">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70 mb-4">
                Beige
              </div>
              <h3 className="font-serif text-4xl md:text-5xl leading-[0.95] tracking-tightest mb-4">
                <span className="italic">Warmth.</span>
              </h3>
              <p className="text-sm leading-relaxed opacity-80 max-w-xs">
                The paper. The breathing room, the texture, the human
                quality that keeps the work from feeling cold.
              </p>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-60">
              #D4C4A0
            </div>
          </div>
        </div>

        {/* About text + facts */}
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-7">
            <p className="text-lg md:text-xl leading-relaxed text-ink/80 mb-6">
              Blue Black Beige is a two-person studio that takes briefs from
              founders, marketing teams, and the occasional creative director.
              We work in long, focused sprints — no agency layers, no
              middlemen.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-ink/70">
              Every project gets the same care. We&apos;d rather take fewer briefs
              and do them properly than chase volume.
            </p>
            <div className="flex flex-wrap gap-2 mt-10">
              {services.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 border border-ink text-sm hover:bg-ink hover:text-beige transition-colors duration-300 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:pl-12 md:border-l md:border-ink/15">
            {[
              ["Founded", "2026"],
              ["Based in", "Bengaluru, IN"],
              ["Working", "Remote, global"],
              ["Team size", "Two founders"],
              ["Stack", "TS · React · Node"],
              ["Reply within", "24 hours"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`flex justify-between py-4 text-sm ${
                  i === 0 ? "border-t" : ""
                } border-b border-ink/15`}
              >
                <span className="text-ink/60 font-mono text-xs tracking-[0.15em] uppercase">
                  {k}
                </span>
                <span className="text-ink">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
