import Link from "next/link";

export default function AtelierNordenCase() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-7 flex justify-between items-center mix-blend-difference">
        <Link href="/" className="text-white font-serif text-[22px] no-underline">
          code on <em className="italic">time</em><sup className="text-[8px]">®</sup>
        </Link>
        <Link href="/#work" className="text-white text-[13px] no-underline hover:opacity-60 transition-opacity">
          ← Back to work
        </Link>
      </header>

      <section className="px-8 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 text-[11px] tracking-[0.1em] uppercase text-muted mb-8">
            <span>001</span>
            <span className="w-px h-3 bg-line" />
            <span>2026</span>
            <span className="w-px h-3 bg-line" />
            <span>Marketing site</span>
          </div>

          <h1 className="font-serif text-[clamp(48px,8vw,120px)] leading-[0.92] tracking-[-0.025em] mb-12">
            <em className="italic">Atelier</em> Norden
          </h1>

          <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-20">
            <div>
              <div className="mb-8">
                <h3 className="text-[11px] tracking-[0.1em] uppercase text-muted mb-3">Client</h3>
                <p className="text-sm">Scandinavian design studio</p>
              </div>
              <div className="mb-8">
                <h3 className="text-[11px] tracking-[0.1em] uppercase text-muted mb-3">Services</h3>
                <p className="text-sm">Brand identity, Web design, Development, Art direction</p>
              </div>
              <div className="mb-8">
                <h3 className="text-[11px] tracking-[0.1em] uppercase text-muted mb-3">Tech stack</h3>
                <p className="text-sm">Next.js, Tailwind CSS, Framer Motion, Sanity CMS</p>
              </div>
            </div>

            <div>
              <p className="text-lg leading-relaxed mb-6">
                Atelier Norden approached us to build a digital presence that reflects their minimalist Scandinavian design philosophy. The challenge: create a site that feels both timeless and contemporary, showcasing their furniture and lighting work without overwhelming the viewer.
              </p>
              <p className="text-lg leading-relaxed text-muted">
                We developed a modular system built around large imagery, generous whitespace, and typographic hierarchy that lets each piece breathe. The result is a portfolio that feels more like an editorial magazine than a traditional product catalog.
              </p>
            </div>
          </div>

          {/* Image grid - replace with real images */}
          <div className="space-y-8 mb-20">
            <div className="w-full h-[600px] bg-line rounded flex items-center justify-center text-muted">
              Hero image - 1600×900px
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-[400px] bg-line rounded flex items-center justify-center text-muted">
                Detail shot 1
              </div>
              <div className="h-[400px] bg-line rounded flex items-center justify-center text-muted">
                Detail shot 2
              </div>
            </div>
            <div className="w-full h-[700px] bg-line rounded flex items-center justify-center text-muted">
              Full-width section
            </div>
          </div>

          <div className="border-t border-line pt-16">
            <h2 className="font-serif text-[clamp(32px,5vw,64px)] leading-tight tracking-[-0.02em] mb-8">
              The <em className="italic">approach</em>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-medium mb-4 tracking-wide">Visual language</h3>
                <p className="text-muted leading-relaxed">
                  We established a monochromatic palette with warm undertones, allowing product photography to take center stage. Typography pairs a classic serif for headlines with a clean sans-serif for body text.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-4 tracking-wide">Interaction design</h3>
                <p className="text-muted leading-relaxed">
                  Subtle hover states and scroll-triggered animations provide feedback without calling attention to themselves. The navigation disappears on scroll, returning only when needed.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-16 border-t border-line">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[11px] tracking-[0.1em] uppercase text-muted mb-3">Next project</div>
                <Link href="/work/loop-finance" className="font-serif text-[clamp(28px,4vw,48px)] hover:opacity-60 transition-opacity no-underline text-ink">
                  Loop Finance <em className="italic">app</em> →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
