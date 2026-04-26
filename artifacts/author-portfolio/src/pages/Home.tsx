import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import akshatPhoto from "@assets/1000267151_1777190353205.png";
import frogpondImg from "@assets/Screenshot_2026-04-20-11-21-09-628_com.android.chrome-edit_1777190353201.jpg";
import petalsImg from "@assets/Screenshot_2026-04-20-11-17-21-323_com.android.chrome-edit_1777190353202.jpg";
import dewDropsImg from "@assets/Screenshot_2026-04-16-22-15-35-866_com.android.chrome_1777190353203.jpg";
import etherealImg from "@assets/IMG_20260420_111632_1777190353204.jpg";

const BOOKS = [
  {
    id: 1,
    title: "Frogpond",
    description: "Published by the Haiku Society of America, Frogpond is an internationally acclaimed haiku journal featuring Dr. Akshat Shukla's haiku poetry.",
    year: "2023",
    genre: "Haiku Journal",
    accent: "var(--brand-primary)",
    img: frogpondImg,
  },
  {
    id: 2,
    title: "Petals of Haiku: An Anthology",
    description: "A curated anthology edited by Gabriela Marie Milton, featuring haiku poems by contributors from around the world, including Dr. Akshat Shukla.",
    year: "2023",
    genre: "Anthology",
    accent: "var(--brand-tertiary)",
    img: petalsImg,
  },
  {
    id: 3,
    title: "Dew Drops",
    description: "Dedicated to childhood, this haiku collection by Dr. Akshat Shukla explores innocence, nature, and the fleeting moments of early life.",
    year: "2024",
    genre: "Haiku Collection",
    accent: "var(--brand-secondary)",
    img: dewDropsImg,
  },
  {
    id: 4,
    title: "Ethereal Excesses",
    description: "A compilation of haikus and short-length poems with eclectic themes. The haikus adhere to a syllabic pattern and hark back to nature; other poems are in free verse, written on special occasions or just randomly at night.",
    year: "2024",
    genre: "Poetry",
    accent: "var(--brand-primary)",
    img: etherealImg,
  },
];

function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Navbar({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const [, setLocation] = useLocation();
  const links = [
    { href: "#introduction", label: "Introduction" },
    { href: "#books", label: "Books & Journals" },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className="glass-nav fixed top-0 w-full z-50 border-b transition-all duration-300"
      style={{ borderColor: "rgba(233,232,230,0.5)", boxShadow: "0px 4px 30px rgba(0,0,0,0.05)" }}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-5 w-full max-w-screen-2xl mx-auto">
        <a
          href="#"
          className="text-2xl font-serif italic transition-colors duration-500"
          style={{ color: "var(--brand-primary)", fontFamily: "'Newsreader', serif" }}
          data-testid="link-brand"
        >
          Akshat's Inkspace
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans font-medium uppercase tracking-widest text-[11px] nav-link transition-colors duration-300"
              style={{
                color: i === 0 ? "var(--brand-primary)" : "var(--brand-on-surface-variant)",
                borderBottom: i === 0 ? "1px solid var(--brand-primary)" : undefined,
                paddingBottom: i === 0 ? "4px" : undefined,
              }}
              data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="hidden md:flex items-center justify-center px-6 py-2 rounded-md signature-gradient text-white font-sans text-sm uppercase tracking-wider scale-100 hover:scale-105 active:scale-95 transition-all duration-300"
          onClick={() => setLocation("/contact")}
          data-testid="button-inquire"
        >
          Inquire
        </button>

        <button
          aria-label="Open Menu"
          className="md:hidden"
          style={{ color: "var(--brand-primary)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="button-mobile-menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(250,249,247,0.97)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans uppercase tracking-widest text-[11px] font-semibold"
              style={{ color: "var(--brand-on-surface-variant)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="text-left font-sans uppercase tracking-widest text-[11px] font-semibold"
            style={{ color: "var(--brand-primary)" }}
            onClick={() => { setMenuOpen(false); setLocation("/contact"); }}
          >
            Inquire
          </button>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="introduction"
      className="max-w-7xl mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal active"
      style={{ minHeight: "80vh" }}
    >
      <div className="lg:col-span-5 order-2 lg:order-1 relative z-10">
        <div className="absolute -inset-4 rounded-3xl -z-10 blur-xl" style={{ background: "linear-gradient(to bottom right, rgba(255,217,225,0.2), transparent)" }} />
        <p className="font-sans text-sm tracking-widest uppercase mb-6 font-bold flex items-center gap-2" style={{ color: "var(--brand-secondary)" }}>
          <span className="w-8 inline-block" style={{ height: "2px", background: "var(--brand-secondary)" }} />
          Introduction
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8" style={{ color: "var(--brand-on-background)", fontFamily: "'Newsreader', serif" }}>
          Chronicling the{" "}
          <br />
          <span className="italic relative inline-block" style={{ color: "var(--brand-primary)" }}>
            Human Experience.
            <svg
              className="absolute -bottom-2 left-0 w-full -z-10"
              fill="none"
              viewBox="0 0 200 20"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "#ffd9e1" }}
            >
              <path d="M0 10 Q 50 20 100 10 T 200 10" stroke="currentColor" strokeWidth="8" />
            </svg>
          </span>
        </h1>
        <p
          className="font-sans text-base leading-relaxed mb-0 max-w-md border-l-2 pl-6"
          style={{ color: "var(--brand-on-surface-variant)", borderColor: "var(--brand-tertiary)" }}
        >
          Dr. Akshat Shukla is an elementary educator in the government sector and holds a Ph.D. in Ecocriticism from CSJM University Kanpur (2022). His poems and short stories have appeared in various journals, including the internationally acclaimed haiku journal <em>Frogpond</em> (published by the Haiku Society of America), and in the anthology <em>Petals of Haiku: An Anthology</em>. His book <em>Ethereal Excesses</em> is available on Amazon.
        </p>
      </div>

      <div className="lg:col-span-7 order-1 lg:order-2 relative h-full">
        <div
          className="absolute -left-16 top-1/4 transform -rotate-90 hidden xl:block mix-blend-multiply opacity-50"
          style={{ color: "var(--brand-tertiary)" }}
        >
          <p className="font-sans text-xs tracking-widest uppercase font-bold">Est. 2014</p>
        </div>
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ background: "var(--brand-tertiary-container)" }} />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ background: "var(--brand-primary-container)", animationDelay: "1s" }} />
        <div className="rounded-2xl overflow-hidden aspect-[3/4] md:aspect-[4/3] w-full relative group shadow-2xl" style={{ background: "var(--brand-surface-container-highest)" }}>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage: `url(${akshatPhoto})`,
              backgroundPosition: "50% 15%",
            }}
          />
          <div className="absolute inset-0 mix-blend-overlay" style={{ background: "linear-gradient(to top right, rgba(139,0,50,0.25), transparent 60%, rgba(0,71,139,0.15))" }} />
        </div>
      </div>
    </section>
  );
}

function BooksSection() {
  return (
    <section
      id="books"
      className="py-32 px-6 md:px-12 mb-0 relative reveal"
      style={{ background: "var(--brand-surface-container)" }}
    >
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, var(--brand-primary), var(--brand-secondary), var(--brand-tertiary))" }} />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="font-sans text-sm tracking-widest uppercase mb-4 flex items-center gap-2 font-bold" style={{ color: "var(--brand-tertiary)" }}>
              <span className="w-4 h-4 rounded-full inline-block" style={{ background: "var(--brand-tertiary)" }} />
              Selected Works
            </p>
            <h2 className="font-serif text-4xl md:text-6xl italic" style={{ color: "var(--brand-on-background)", fontFamily: "'Newsreader', serif" }}>
              Books &amp; Journals
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BOOKS.map((book, i) => (
            <article
              key={book.id}
              className="book-card rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer group"
              style={{ background: "var(--brand-surface-container-lowest)", transitionDelay: `${i * 80}ms` }}
              data-testid={`card-book-${book.id}`}
            >
              <div className="book-card-inner p-5 h-full flex flex-col">
                <div
                  className="aspect-[2/3] w-full rounded-lg mb-6 overflow-hidden relative shadow-inner"
                  style={{ background: "var(--brand-surface-variant)" }}
                >
                  <img
                    alt={book.title}
                    src={book.img}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="flex-grow">
                  <h3
                    className="font-serif text-xl mb-2 transition-colors leading-snug"
                    style={{ color: "var(--brand-on-background)", fontFamily: "'Newsreader', serif" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLHeadingElement).style.color = book.accent; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLHeadingElement).style.color = "var(--brand-on-background)"; }}
                  >
                    {book.title}
                  </h3>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "var(--brand-on-surface-variant)" }}>
                    {book.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--brand-surface-variant)" }}>
                  <span className="font-sans text-xs font-bold tracking-widest uppercase" style={{ color: book.accent }}>
                    {book.year} · {book.genre}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-16 px-12 w-full relative overflow-hidden border-t-4"
      style={{ background: "var(--brand-surface-container)", borderColor: "var(--brand-primary)" }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2" style={{ background: "rgba(0,90,90,0.05)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2" style={{ background: "rgba(139,0,50,0.05)" }} />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <a
          href="#"
          className="font-serif italic text-3xl"
          style={{ color: "var(--brand-primary)", fontFamily: "'Newsreader', serif" }}
        >
          Akshat's Inkspace
        </a>
        <p className="font-sans text-xs tracking-widest uppercase" style={{ color: "var(--brand-outline)" }}>
          Akshat Shukla @2026
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  return (
    <div className="scroll-smooth">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="pt-32 pb-0 overflow-hidden">
        <HeroSection />
        <BooksSection />
      </main>
      <Footer />
    </div>
  );
}
