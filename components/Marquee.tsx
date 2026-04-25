export default function Marquee() {
  const items = [
    "Strategy",
    "Design",
    "Development",
    "Performance",
    "Care",
    "On time, every time",
  ];

  // Doubled for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="border-t border-b border-line py-3.5 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap pr-12">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-serif text-2xl italic">{item}</span>
            <span className="text-accent text-lg">●</span>
          </div>
        ))}
      </div>
    </div>
  );
}
