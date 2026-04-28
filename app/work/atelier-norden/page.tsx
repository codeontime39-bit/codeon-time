import Link from "next/link";

export default function AtelierNordenCase() {
  return (
    <div className="min-h-screen bg-beige">
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-7 flex justify-between items-center bg-beige/85 backdrop-blur-md border-b border-ink/10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-electric inline-block" />
            <span className="w-3 h-3 bg-ink inline-block" />
            <span className="w-3 h-3 bg-beige-dark border border-ink inline-block" />
          </div>
          <span className="font-serif text-[18px] tracking-tightest text-ink no-underline">
            Blue Black <span className="italic">Beige</span>
          </span>
        </Link>
        <Link
          href="/#work"
          className="link-line text-[13px] text-ink/80 hover:text-ink no-underline"
        >
          ← Back to work
        </Link>
      </header>

      <section className="px-8 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-8">
            <span>001</span>
            <span className="w-px h-3 bg-ink/30" />
            <span>2026</span>
            <span className="w-px h-3 bg-ink/30" />
            <span>Brand identity / Web design</span>
          </div>

          <h1
            className="font-serif font-normal leading-[0.92] tracking-tightest text-ink mb-12"
            style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
          >
            <em className="italic">Atelier</em> Norden
          </h1>

          <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-20">
            <div>
              <div className="mb-8">
                <h3 className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-3">
                  Client
                </h3>
                <p className="text-sm text-ink/80">Scandinavian design studio</p>
              </div>
              <div className="mb-8">
                <h3 className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-3">
                  Services
                </h3>
                <p className="text-sm text-ink/80">
                  Brand identity, Web design, Development, Art direction
                </p>
              </div>
              <div className="mb-8">
                <h3 className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-3">
                  Tech stack
                </h3>
                <p className="text-sm text-ink/80">
                  Next.js, Tailwind CSS, Framer Motion, Sanity CMS
                </p>
              </div>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-ink mb-6">
                Atelier Norden approached us to build a digital presence that
                reflects their minimalist Scandinavian design philosophy. The
                challenge: create a site that feels both timeless and
                contemporary, showcasing their furniture and lighting work
                without overwhelming the viewer.
              </p>
              <p className="text-lg leading-relaxed text-ink/70">
                We developed a modular system built around large imagery,
                generous whitespace, and typographic hierarchy that lets each
                piece breathe.
              </p>
            </div>
          </div>

          {/* Image grid placeholders — three colour blocks */}
          <div className="space-y-8 mb-20">
            <div className="w-full h-[600px] bg-electric flex items-center justify-center text-beige font-serif italic text-3xl">
              Hero image — 1600×900px
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-[400px] bg-ink flex items-center justify-center text-beige font-serif italic text-2xl">
                Detail shot 1
              </div>
              <div className="h-[400px] bg-beige-dark border border-ink flex items-center justify-center text-ink font-serif italic text-2xl">
                Detail shot 2
              </div>
            </div>
            <div className="w-full h-[700px] bg-ink flex items-center justify-center text-beige font-serif italic text-3xl">
              Full-width section
            </div>
          </div>

          <div className="border-t border-ink/30 pt-16">
            <h2
              className="font-serif font-normal leading-tight tracking-tightest text-ink mb-8"
              style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
            >
              The <em className="italic text-electric">approach</em>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-medium mb-4 tracking-wide text-ink">
                  Visual language
                </h3>
                <p className="text-ink/70 leading-relaxed">
                  We established a monochromatic palette with warm undertones,
                  allowing product photography to take center stage. Typography
                  pairs a classic serif for headlines with a clean sans-serif
                  for body text.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-4 tracking-wide text-ink">
                  Interaction design
                </h3>
                <p className="text-ink/70 leading-relaxed">
                  Subtle hover states and scroll-triggered animations provide
                  feedback without calling attention to themselves. The
                  navigation disappears on scroll, returning only when needed.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-16 border-t border-ink/30">
            <div className="flex justify-between items-center flex-wrap gap-6">
              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 mb-3">
                  Next project
                </div>
                <Link
                  href="/work/loop-finance"
                  className="font-serif tracking-tightest hover:text-electric transition-colors no-underline text-ink"
                  style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
                >
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
