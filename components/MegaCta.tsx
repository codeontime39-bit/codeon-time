export default function MegaCta() {
  return (
    <section
      id="contact"
      className="px-8 py-40 text-center border-t border-line reveal"
    >
      <div className="text-[12px] tracking-[0.15em] uppercase text-muted mb-7">
        04 — Contact
      </div>
      <h2 className="font-serif font-normal text-[clamp(56px,11vw,200px)] leading-[0.92] tracking-[-0.025em]">
        Enough about us,
        <br />
        now it&apos;s <em className="italic">your turn.</em>
      </h2>
      <a
        href="mailto:hello@codeontime.dev"
        className="inline-block mt-15 text-sm no-underline text-ink px-9 py-[18px] border border-ink rounded-full relative overflow-hidden group transition-colors duration-500 hover:border-accent"
        style={{ marginTop: "60px" }}
      >
        <span className="relative z-[2] transition-colors duration-500 group-hover:text-white">
          Tell us about your project →
        </span>
        <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]" />
      </a>
    </section>
  );
}
