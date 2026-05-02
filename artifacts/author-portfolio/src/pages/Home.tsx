import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import akshatPhoto from "@assets/1000267151_1777190353205.png";
import frogpondImg from "@assets/Screenshot_2026-04-20-11-21-09-628_com.android.chrome-edit_1777190353201.jpg";
import petalsImg from "@assets/Screenshot_2026-04-20-11-17-21-323_com.android.chrome-edit_1777190353202.jpg";
import dewDropsImg from "@assets/IMG_20260426_133831_1777191660497.jpg";
import etherealImg from "@assets/IMG_20260420_111632_1777190353204.jpg";

import gallery1 from "@assets/file_00000000f1747207b8f831f625193335_1777574801692.png";
import gallery2 from "@assets/file_000000001d8c720799a48780e5b21095_1777574801741.png";
import gallery3 from "@assets/file_0000000029247207979fba3d6aa1c1a8_1777574801760.png";
import gallery4 from "@assets/file_0000000096c47207ab20fc9fec8bc72a_1777574801784.png";
import gallery5 from "@assets/file_00000000c87472079ad8509fc3cb6f33_1777574801810.png";

import monsoonImg from "@assets/file_00000000a7a4720b9f7dd762e9a316fd_1777749100868.png";
import hopesImg from "@assets/file_00000000a5c0720bafc0f89c298d5788_1777749150660.png";

const BOOKS = [
  {
    id: 1,
    title: "Dew Drops",
    description: "Dedicated to childhood, this haiku collection by Dr. Akshat Shukla explores innocence, nature, and the fleeting moments of early life.",
    year: "2026",
    genre: "Haiku Collection",
    accent: "var(--brand-secondary)",
    img: dewDropsImg,
    link: "https://ebooks.bookleafpub.com/product-page/dew-drops",
    linkLabel: "Read",
  },
  {
    id: 2,
    title: "Ethereal Excesses",
    description: "A compilation of haikus and short-length poems with eclectic themes. The haikus adhere to a syllabic pattern and hark back to nature; other poems are in free verse, written on special occasions or just randomly at night.",
    year: "2024",
    genre: "Poetry",
    accent: "var(--brand-primary)",
    img: etherealImg,
    link: "https://www.amazon.in/Ethereal-Excesses-Akshat-Shukla/dp/9357746692/",
    linkLabel: "Buy on Amazon",
  },
  {
    id: 3,
    title: "Frogpond",
    description: "Published by the Haiku Society of America, Frogpond is an internationally acclaimed haiku journal featuring Dr. Akshat Shukla's haiku poetry.",
    year: "2023",
    genre: "Haiku Journal",
    accent: "var(--brand-primary)",
    img: frogpondImg,
    link: "https://www.hsa-haiku.org/frogpond/2023-issue46-3/index.html",
    linkLabel: "Read Issue",
  },
  {
    id: 4,
    title: "Petals of Haiku: An Anthology",
    description: "A curated anthology edited by Gabriela Marie Milton, featuring haiku poems by contributors from around the world, including Dr. Akshat Shukla.",
    year: "2023",
    genre: "Anthology",
    accent: "var(--brand-tertiary)",
    img: petalsImg,
    link: "https://www.amazon.in/Petals-Haiku-Anthology-Literary-Revelations-ebook/dp/B0D578FJWJ/",
    linkLabel: "Buy on Amazon",
  },
];

const POEMS = [
  {
    id: 1,
    title: "Monsoon",
    img: monsoonImg,
    lines: [
      "the dreams-soaked nights,",
      "of my first monsoon",
      "passed in your warm arms,",
      "linger in the drenched words",
      "of my worn-out diary,",
      "still lying under the tender shadow",
      "of our neglected neem tree.",
      "when it rains hard, and the winds",
      "thrust open the window,",
      "the aroma of your dark curls",
      "seeps in, captivating my thoughts",
      "coiling in the corners of our locked room",
    ],
    accent: "var(--brand-primary)",
  },
  {
    id: 2,
    title: "Hopes",
    img: hopesImg,
    lines: [
      "art in my tongue",
      "i lick my wounds",
      "i crawl and cry",
      "ten teardrops in my eye",
      "",
      "ink in my blood",
      "creative flood",
      "shadows around me",
      "and i kick them",
      "",
      "words reside in me",
      "and i pick them",
      "thoughts carnivore",
      "I don't run anymore",
      "",
      "dark night bright sky",
      "hopes high",
      "hopes high",
    ],
    accent: "var(--brand-secondary)",
  },
];

const GALLERY = [
  { id: 1, src: gallery4, alt: "Poetry for every season of life — all four books" },
  { id: 2, src: gallery5, alt: "InkSpace by Akshat — Ideas deserve space" },
  { id: 3, src: gallery1, alt: "Dew Drops & Ethereal Excesses — Two poetic collections" },
  { id: 4, src: gallery2, alt: "Dew Drops and Ethereal Excesses — side by side" },
  { id: 5, src: gallery3, alt: "Frogpond and Petals of Haiku — Haiku that lingers" },
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
    { href: "#poems", label: "Poems" },
    { href: "#gallery", label: "Gallery" },
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
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans font-medium uppercase tracking-widest text-[11px] nav-link transition-colors duration-300"
              style={{ color: "var(--brand-on-surface-variant)" }}
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
          Dr. Akshat Shukla serves as an elementary educator in the government sector and holds a Ph.D. in Ecocriticism from CSJM University, Kanpur (2022). His poetic and narrative sensibilities find expression in a range of esteemed publications, including the internationally acclaimed haiku journal <em>Frogpond</em> (published by the Haiku Society of America) and the anthology <em>Petals of Haiku: An Anthology</em>. His book <em>Ethereal Excesses</em>, available on Amazon, further attests to his lyrical and imaginative depth.
        </p>
        <p
          className="font-sans text-base leading-relaxed mt-5 max-w-md border-l-2 pl-6"
          style={{ color: "var(--brand-on-surface-variant)", borderColor: "var(--brand-secondary)" }}
        >
          He has also published his creative writings widely across numerous journals and literary platforms, including <em>Modern Research Studies</em>, <em>Ashvamegh Journal</em>, <em>The Criterion Journal</em>, <em>Galaxy Journal</em>, <em>Indian Ruminations</em>, <em>121Words</em>, <em>Fictional Café</em>, <em>Contemporary Literary Review India</em>, <em>The Expression Journal</em>, <em>Medium</em>, <em>Ad Hoc Fiction</em>, <em>Pixel Heart</em>, and <em>The Literary Herald</em>, among others.
        </p>
        <p
          className="font-sans text-base leading-relaxed mt-5 max-w-md border-l-2 pl-6"
          style={{ color: "var(--brand-on-surface-variant)", borderColor: "var(--brand-tertiary)" }}
        >
          Deeply engaged with the reflective disciplines of psychology and philosophy, and profoundly influenced by the art of cinema, Dr. Shukla's intellectual and creative pursuits are marked by a contemplative richness. He also nurtures a keen interest in artificial intelligence, exploring its evolving intersections with human thought and creativity. Complementing his literary endeavors is his passion for graphic design, through which he extends his aesthetic vision into the visual realm.
        </p>
      </div>

      <div className="lg:col-span-7 order-1 lg:order-2 relative h-full">
        <div
          className="absolute -left-16 top-1/4 transform -rotate-90 hidden xl:block mix-blend-multiply opacity-50"
          style={{ color: "var(--brand-tertiary)" }}
        >
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
                <div className="mt-4 pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--brand-surface-variant)" }}>
                  <span className="font-sans text-xs font-bold tracking-widest uppercase" style={{ color: book.accent }}>
                    {book.year} · {book.genre}
                  </span>
                  {book.link && (
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full transition-all hover:opacity-80"
                      style={{ background: book.accent, color: "#fff" }}
                    >
                      {book.linkLabel}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PoemsSection() {
  return (
    <section
      id="poems"
      className="py-32 px-6 md:px-12 relative reveal"
      style={{ background: "var(--brand-surface-container)" }}
    >
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, var(--brand-secondary), var(--brand-primary), var(--brand-tertiary))" }} />
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-sans text-sm tracking-widest uppercase mb-4 flex items-center gap-2 font-bold" style={{ color: "var(--brand-primary)" }}>
            <span className="w-4 h-4 rounded-full inline-block" style={{ background: "var(--brand-primary)" }} />
            Verses
          </p>
          <h2 className="font-serif text-4xl md:text-6xl italic" style={{ color: "var(--brand-on-background)", fontFamily: "'Newsreader', serif" }}>
            Poems
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {POEMS.map((poem) => (
            <article key={poem.id} className="flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500" style={{ background: "var(--brand-surface-container-lowest)" }}>
              <div className="w-full overflow-hidden relative" style={{ maxHeight: "320px" }}>
                <img
                  src={poem.img}
                  alt={poem.title}
                  className="w-full object-cover object-center hover:scale-[1.03] transition-transform duration-700 ease-out"
                  style={{ maxHeight: "320px" }}
                />
              </div>
              <div className="p-8 flex flex-col gap-4 flex-grow">
                <h3
                  className="font-serif text-3xl font-bold"
                  style={{ color: poem.accent, fontFamily: "'Newsreader', serif" }}
                >
                  {poem.title}
                </h3>
                <div className="font-serif text-base leading-loose italic" style={{ color: "var(--brand-on-surface-variant)", fontFamily: "'Newsreader', serif" }}>
                  {poem.lines.map((line, i) =>
                    line === "" ? (
                      <br key={i} />
                    ) : (
                      <span key={i} className="block">{line}</span>
                    )
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
    }
    if (lightbox) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section
      id="gallery"
      className="py-32 px-6 md:px-12 relative reveal"
      style={{ background: "var(--brand-background)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-sans text-sm tracking-widest uppercase mb-4 flex items-center gap-2 font-bold" style={{ color: "var(--brand-secondary)" }}>
            <span className="w-4 h-4 rounded-full inline-block" style={{ background: "var(--brand-secondary)" }} />
            Visual Stories
          </p>
          <h2 className="font-serif text-4xl md:text-6xl italic" style={{ color: "var(--brand-on-background)", fontFamily: "'Newsreader', serif" }}>
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First image spans full width */}
          <div
            className="md:col-span-2 rounded-2xl overflow-hidden cursor-zoom-in group relative shadow-md hover:shadow-2xl transition-all duration-500"
            onClick={() => setLightbox(GALLERY[0])}
          >
            <img
              src={GALLERY[0].src}
              alt={GALLERY[0].alt}
              className="w-full object-cover max-h-[500px] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}>
              <span className="text-white font-sans text-sm tracking-widest uppercase font-semibold">View Full Size</span>
            </div>
          </div>

          {/* Second image spans full width */}
          <div
            className="md:col-span-2 rounded-2xl overflow-hidden cursor-zoom-in group relative shadow-md hover:shadow-2xl transition-all duration-500"
            onClick={() => setLightbox(GALLERY[4])}
          >
            <img
              src={GALLERY[4].src}
              alt={GALLERY[4].alt}
              className="w-full object-cover max-h-[480px] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}>
              <span className="text-white font-sans text-sm tracking-widest uppercase font-semibold">View Full Size</span>
            </div>
          </div>

          {/* Remaining three in a row */}
          {GALLERY.slice(1, 4).map((item) => (
            <div
              key={item.id}
              className={`${item.id === 3 ? "md:col-span-2 lg:col-span-1" : ""} rounded-2xl overflow-hidden cursor-zoom-in group relative shadow-md hover:shadow-2xl transition-all duration-500`}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover max-h-[420px] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}>
                <span className="text-white font-sans text-sm tracking-widest uppercase font-semibold">View Full Size</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white opacity-70 hover:opacity-100 transition-opacity"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
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
        <PoemsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
