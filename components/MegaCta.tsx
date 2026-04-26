import ContactForm from "@/components/ui/ContactForm";

export default function MegaCta() {
  return (
    <section
      id="contact"
      className="px-8 py-40 border-t border-line reveal"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-[12px] tracking-[0.15em] uppercase text-muted mb-7">
          04 - Contact
        </div>
        <h2 className="font-serif font-normal text-[clamp(56px,11vw,120px)] leading-[0.92] tracking-[-0.025em] mb-16">
          Enough about us,
          <br />
          now it&apos;s <em className="italic">your turn.</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <p className="text-lg leading-relaxed mb-8 text-muted max-w-md">
              We typically respond within 24 hours. If your project is urgent, mention it in the message and we'll prioritize.
            </p>
            <div className="space-y-6">
              <div>
                <div className="text-[11px] tracking-[0.1em] uppercase text-muted mb-2">
                  Email directly
                </div>
                <a 
                  href="mailto:hello@codeontime.dev"
                  className="text-ink text-lg hover:text-accent transition-colors"
                >
                  codeontime39@gmail.com
                </a>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.1em] uppercase text-muted mb-2">
                  Partnership inquiries
                </div>
                <a 
                  href="mailto:partner@codeontime.dev"
                  className="text-ink text-lg hover:text-accent transition-colors"
                >
                  T.B.D.
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
