import { useLocation } from "wouter";

export default function Contact() {
  const [, setLocation] = useLocation();
  const inquiryEmails = ["akshatshuklawrites@gmail.com", "akshatshuklaasays@gmail.com"];
  const inquiryMailto = `mailto:${inquiryEmails.join(",")}`;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--brand-background)", color: "var(--brand-on-background)" }}
    >
      {/* Minimal nav */}
      <nav
        className="glass-nav fixed top-0 w-full z-50 border-b"
        style={{ borderColor: "rgba(233,232,230,0.5)", boxShadow: "0px 4px 30px rgba(0,0,0,0.05)" }}
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-5 w-full max-w-screen-2xl mx-auto">
          <button
            className="text-2xl font-serif italic transition-colors duration-500"
            style={{ color: "var(--brand-primary)", fontFamily: "'Newsreader', serif" }}
            onClick={() => setLocation("/")}
            data-testid="link-brand-contact"
          >
            Akshat's Inkspace
          </button>
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 font-sans text-sm uppercase tracking-widest transition-colors duration-300"
            style={{ color: "var(--brand-on-surface-variant)" }}
            data-testid="button-back-home"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_back</span>
            Back
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-6 pt-32 pb-24">
        <div className="w-full max-w-xl">
          {/* Decorative accent */}
          <p
            className="font-sans text-sm tracking-widest uppercase mb-6 font-bold flex items-center gap-2"
            style={{ color: "var(--brand-secondary)" }}
          >
            <span className="w-8 inline-block" style={{ height: "2px", background: "var(--brand-secondary)" }} />
            Get in Touch
          </p>

          <h1
            className="font-serif italic mb-12 leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--brand-on-background)",
              fontFamily: "'Newsreader', serif",
            }}
          >
            Inquire
          </h1>

          {/* Contact card */}
          <div
            className="rounded-2xl p-8 md:p-12 border shadow-sm relative overflow-hidden"
            style={{
              background: "var(--brand-surface-container-low)",
              borderColor: "rgba(220,192,190,0.3)",
            }}
          >
            {/* Subtle gradient blob */}
            <div
              className="absolute -top-10 -right-10 w-48 h-48 rounded-full filter blur-3xl opacity-40 pointer-events-none"
              style={{ background: "var(--brand-primary-container)" }}
            />

            <p
              className="font-sans text-base leading-relaxed mb-8 relative z-10"
              style={{ color: "var(--brand-on-surface-variant)" }}
            >
              For any content writing related query, drop a mail at:
            </p>

            <div className="relative z-10 border-l-2 pl-6" style={{ borderColor: "var(--brand-primary)" }}>
              <p
                className="font-serif text-2xl italic mb-2"
                style={{ color: "var(--brand-on-background)", fontFamily: "'Newsreader', serif" }}
              >
                Akshat Shukla
              </p>
              <div className="flex flex-col gap-2">
                {inquiryEmails.map((email, index) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="font-sans text-base font-medium transition-all duration-200 hover:underline underline-offset-4"
                    style={{ color: "var(--brand-primary)" }}
                    data-testid={index === 0 ? "link-email" : "link-email-secondary"}
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 relative z-10">
              <a
                href={inquiryMailto}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-md signature-gradient text-white font-sans text-sm uppercase tracking-widest hover:opacity-90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                data-testid="button-send-email"
              >
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>mail</span>
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer strip */}
      <footer
        className="py-6 px-12 border-t-4 text-center"
        style={{ background: "var(--brand-surface-container)", borderColor: "var(--brand-primary)" }}
      >
        <p className="font-sans text-xs tracking-widest uppercase" style={{ color: "var(--brand-outline)" }}>
          Akshat Shukla @2026
        </p>
      </footer>
    </div>
  );
}
