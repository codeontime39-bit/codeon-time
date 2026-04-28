export default function Marquee() {
  const items = [
    "Brand identity",
    "Web design",
    "Frontend engineering",
    "Design systems",
    "Motion",
    "Strategy",
  ];
  const doubled = [...items, ...items];

  return (
    <section className="relative py-8 border-y border-ink/15 bg-beige-light overflow-hidden">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-serif italic text-3xl md:text-4xl text-ink">
              {item}
            </span>
            <span
              className={`w-2 h-2 rounded-full ${
                i % 3 === 0 ? "bg-electric" : i % 3 === 1 ? "bg-ink" : "bg-beige-dark border border-ink"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
