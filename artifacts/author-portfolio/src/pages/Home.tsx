import { useState, useEffect, useRef } from "react";

const BOOKS = [
  {
    id: 1,
    title: "The Architecture of Memory",
    description: "An exploration of how the spaces we inhabit shape our recollection of the past.",
    year: "2023",
    genre: "Non-Fiction",
    color: "primary",
    accent: "var(--brand-primary)",
    quote: '"A masterpiece of structural narrative that completely redefines how we think about the spaces we\'ve left behind." — The Literary Review',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3jkcw_A8B0F8g3LCbae4Mw9pZM1vlFs96b7g6UClaks7SB-V3WePzp5EtCf3REMbn4YMaHUXoL6XnT4lGJDQmqMEh_YtspYZoxF6Z99o3Ddu_YHh5xc2haUJoH7cRVNn9ER2phvj_9pIQ09y0sqc_u92OK4dR3_OCOorSbC_RQdMtJO7KkRIpTq3ANBhA-2SqO4Gb1_uw10MO7iuQ353uFXVXA-lpZuxFuLlZrooa4aooNVcturYX2pB-yCbapoGQ2Ywse_rKPQJf",
  },
  {
    id: 2,
    title: "Silent Corridors",
    description: "A novel tracking three generations of a family through the changing landscape of a single European city.",
    year: "2021",
    genre: "Fiction",
    color: "tertiary",
    accent: "var(--brand-tertiary)",
    quote: "Winner of the International Fiction Prize. A hauntingly beautiful tapestry of generational trauma and healing.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW9gkrC9QNF06_qvbW3GRRrSC4cyIagCZpw8WVGNd9ec38k0yJjRyD6yjvvhofImxwtf3YDFPzUt-9GI0DGUVKIbsHf_DnxxrENmxkj1QESKjC2TPPD1tBgFWwHmS1U7jTRZxWy8suGsWPbJqd9yPpwUIEs1Y_8cL7TaqHtfkEfLHCMhj5X6QgKeGCrER4Rfnct1JR04zEqflY-ZcRJOSD1JkcbckiZ9vPLHeaY5yrwzsODnlu7X5KPWax-EvvZ_W21V0peeaI4IjJ",
  },
  {
    id: 3,
    title: "Essays on the Ephemeral",
    description: "A collection of short pieces examining the fleeting nature of digital communication versus analog archives.",
    year: "2018",
    genre: "Essays",
    color: "secondary",
    accent: "var(--brand-secondary)",
    quote: "Sharp, incisive, and beautifully observed essays on our increasingly digital existence.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu4tGTfySpPW1MI5xOepZyGjc3n-qqREo0I1ZMYDKxWEiC7xl7sXa2-0csvt18CI7Q06LBO4nAvVJSEnXa9mMo-G-eoF1ilN2ZBepJA6_PyCFmkzpBD6Ztv2FC2DYJ695kjJ9lTK40LZY7f02vLswpcVyCh7nNE1bLy3P5WBwRIzFwqaQCwP_1pvovIS08NTNiSUbsyX0DosCqZD8drXimiOipBawyccsIJrYEVW9F8utIJkjlC3VfpIvxvERtFq-NVz4DquTgVryZ",
  },
];

const GALLERY = [
  {
    id: 1,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIpHJ0B1pSUAD4fUgXLAciN8UfDpnAI1fzbApx4SRjoXANM7Fz8hUtYwvmFKhjY2vs69hX1KjcvAL2egX1kim1gPwsdJb85L1NhYtpGVJxKnhlD9qow2nRxoX6jcYdriCFMPrWH1RoIEhHdka3WIStjM1Y8ZcHGjBVNY0Hasi6ociL_h2PgwCVQIYhuiLkw_Eeugxv2NhBNdVbVnWA5ng97ov-R21GiLbtkYexsnHnZ8JgivfvRENjsWwdDnZYMR6j98IE9MzCgVGE",
    title: "Oxford Residency",
    caption: "Bodleian Library, 2022",
    color: "var(--brand-primary)",
    lightboxSrc: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2hdD8V9DbYtKSN7-zVzCCrCCRjAMnnSmydv36xXTBBSnTpqS67YajKxVVnCirXTGuWUEuPsJqpdPzpwJ21u7HPdWzySh_7LhwOZFBgbiMAfGvlOPtd0JCXHCm-Xqgy9tlrcQyL1F5Ny6rN3ywzm7F0T4YbKEohxLHRuZem4GfmPEuLmVw7-40SebHYCc5YwEM2G2zwW-DAZuWSHTiAwsZ2-nVBmdnfAqktUfroe16ev40r_z3IcygQz-VfU0OqpTRcxyw0yeqGo6C",
    title: "Silent Corridors Launch",
    caption: "Paris, 2021",
    color: "var(--brand-secondary)",
    lightboxSrc: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV2dyjOeeIgIgtDvrv-w7J1tZh8z7-jz6omRQiCM6u86qH_XNY0nAJCbYcHaR0OpwAHuOdM_BCDx8LPhqMhwDh5dXi1VjXCdl7h3ErTCw42KD80QKw1qyoh6kGV8w4V05GijX83DjItg-PArW3FV2SmSpv6nHUazC2rJLsWIcQpEp6MS9gHvtfkmAtFcrBqHhLrCJJSQbSE4zFTifh7flA4C_Sl9MrA2mqE3g5GTHwRr00E_bYnI783oJ2iiZOlpVg0t85cfG_kvrR",
    title: "Research Trip",
    caption: "Venice, 2023",
    color: "var(--brand-tertiary)",
    lightboxSrc: "https://images.unsplash.com/photo-1516975080661-46bf8e1b64b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNmqz_XnabNUxhDobwS-uKvWVjceXq8D1yj5SwbqaLcwwapgeq5VIm_1pLd-wLE3ngH5byyXSNO2OexnKh_faMTm1n3DGpZa_kAuTfZyGe07kGG_ASy5_b5Pm47LArgrf9Uu4Eg6FXTRGTlLqmVE9YVn5a3tqNFSl6d49gjb7hF8QAW_5GLevrPVORWSHpjtzF9GZ_ZQFzzZLIb-8WE9VQjNTe4_fLK0hnKPjHqIj7l7bg0iQ8IRtQ5__NUIcu26LyYtzGIzzMRCDe",
    title: "The Studio",
    caption: "Brooklyn, Current",
    color: "var(--brand-primary)",
    lightboxSrc: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const UPCOMING_TABS = [
  {
    id: "novel",
    label: "Next Novel",
    accentVar: "var(--brand-primary)",
    badge: "Slated for Fall 2025",
    badgeBg: "#ffd9e1",
    badgeColor: "var(--brand-primary)",
    title: "The Glass Foundation",
    description: "A departure into speculative historical fiction, examining a timeline where glass, rather than steel, became the primary building material of the 20th century. Research ongoing in Venice and Prague.",
    cta: "Read Prologue Excerpt",
    ctaIcon: "open_in_new",
    ctaStyle: "text",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5bSI7vFGTyQKkGrBDi0hsjrXrUCj0kkd_5FueqoAaWzbfOzrNuCZhJIAZF8FljuBsVQ98n8xGKViEA8w39yXmm1xDunwml4kQ1RwM0hpD2ZYlK44BNJBnffFOglF6yIxfyC7rWZf7bOlAU8HQpJbUi6afjnSsK_sj9_nH7QsCjcfH99R13xWxUJMHPZO4E97kXSvSvUE0Mx6fobBu7qbCNKQlTAByV0o5L1W88RsWGaIZm-D1pCJtn71jP6L0U7mg4av1y43iLIVU",
    overlayColor: "rgba(139,0,50,0.3)",
  },
  {
    id: "podcast",
    label: "Audio Series",
    accentVar: "var(--brand-secondary)",
    badge: "In Production",
    badgeBg: "#9ef2f2",
    badgeColor: "var(--brand-secondary)",
    title: "Echoes & Archives",
    description: "A limited 6-part audio series interviewing museum curators, librarians, and private collectors about the items they chose to save, and the items they let burn.",
    cta: "Listen to Trailer",
    ctaIcon: "play_arrow",
    ctaStyle: "filled",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaqGsECFZs9PrqXzvw6yWpEtn12Gwo5ekjFrydhIN_-LoYeGhoIHDAYz6Wt7vndd_Khz0XgFWfFhTPXmCcY1Cz9fVR4UF3Mw4LHgZkkGsskjzONeZUoUtlysPyt9JhlJcqfEIwa1-Veta_sWx7HbTg1_XvNjP_j9DY39b5AGgwHbs3Z5rbJhcQGkOE6vyPtlM4fcm_L_Mmi8DibVYsx8vxRaqSyf1j89dPUV8HD91fV0xW0wVdwAaAklh2bTT7X2yJt-qQBkAaxMAv",
    overlayColor: "rgba(0,90,90,0.1)",
  },
  {
    id: "anthology",
    label: "Anthology",
    accentVar: "var(--brand-tertiary)",
    badge: "Editing Phase",
    badgeBg: "#d4e3ff",
    badgeColor: "var(--brand-tertiary)",
    title: "Cities Invisible",
    description: "Guest editing an anthology of 12 emerging authors writing about fictional cities. Includes an extensive introductory essay on urban mythology.",
    cta: "View Contributor List",
    ctaIcon: "list",
    ctaStyle: "text",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs6DFP59DuDi-34bUE_zxzMYLC1kLq4_ptURDL5xChPhcIEFdyYMqc-34S8pEtbG9CwsBJ1x_O1mymj93tLfVCe30-KOoodDQx-nCiXcRXXZvtvg_4lMwkJ-HfLTvz5OONI-x4JifZHDVuDNB9dIdhPxl-bdmSK_GNYdNp-N8yLoAfbXt8QpFBigFt1hmY-zaY0uvL66wAsZukpHeqe0ZZla34BHeHtnldujofTTyJAWxgXOfcdUdSoAsCppBIoztvJa4yEL3GKWww",
    overlayColor: "rgba(0,71,139,0.2)",
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
  const links = [
    { href: "#introduction", label: "Introduction" },
    { href: "#books", label: "Books" },
    { href: "#journals", label: "Journals" },
    { href: "#events", label: "Events" },
    { href: "#upcoming", label: "Upcoming" },
  ];
  const accentColors = [
    "var(--brand-primary)",
    "var(--brand-secondary)",
    "var(--brand-tertiary)",
    "var(--brand-secondary)",
    "var(--brand-primary)",
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
              data-testid={`link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="hidden md:flex items-center justify-center px-6 py-2 rounded-md signature-gradient text-white font-sans text-sm uppercase tracking-wider scale-100 hover:scale-105 active:scale-95 transition-all duration-300"
          style={{ color: "var(--brand-on-primary)" }}
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
          className="font-sans text-lg leading-relaxed mb-10 max-w-md border-l-2 pl-6"
          style={{ color: "var(--brand-on-surface-variant)", borderColor: "var(--brand-tertiary)" }}
        >
          Award-winning author and essayist exploring the intersections of memory, architecture, and personal history in the modern age.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            className="px-8 py-3 rounded-md signature-gradient text-white font-sans text-sm tracking-widest uppercase hover:opacity-90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group flex items-center gap-2"
            data-testid="button-read-more"
          >
            Read More
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" style={{ fontSize: "16px" }}>arrow_forward</span>
          </button>
          <button
            className="px-8 py-3 rounded-md border font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:text-white"
            style={{ borderColor: "var(--brand-secondary)", color: "var(--brand-secondary)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--brand-secondary)"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "var(--brand-secondary)"; }}
            data-testid="button-press-kit"
          >
            View Press Kit
          </button>
        </div>
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
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxyUo2hWdNf6MDYl6GfqBDU5l0dM3QMqGTy7YJBxk6To8QVTbhG8Wqg9_RZ7xRCqZY5HgxLoQ3_b6TZWMhPE5W-JKU_v2ttM71dTaZ6YBjTv1GHFffb7My7e7k7nvlxXzCGe2SPLFEA_R8rOoLeeOP25KNZS9s8f6ocIFacYQvn63Y4-Nsb7ZpAOBV2SlscIS18yz57jtkOUnhv-zU3ZFNIgTESu4qArLgkjR4MA31I02u1EGGDK0sNNGLXKUWokAqVeA8g5PpdjbL')",
              backgroundPosition: "50% 20%",
            }}
          />
          <div className="absolute inset-0 mix-blend-overlay" style={{ background: "linear-gradient(to top right, rgba(139,0,50,0.4), transparent 60%, rgba(0,71,139,0.2))" }} />
        </div>
      </div>
    </section>
  );
}

function BooksSection() {
  return (
    <section
      id="books"
      className="py-32 px-6 md:px-12 mb-32 relative reveal"
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
              Published Books
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest border-b pb-1 hover:border-b-2 transition-all group"
            style={{ color: "var(--brand-secondary)", borderColor: "var(--brand-secondary)" }}
            data-testid="link-bibliography"
          >
            View Complete Bibliography
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" style={{ fontSize: "16px" }}>arrow_right_alt</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BOOKS.map((book, i) => (
            <article
              key={book.id}
              className="book-card rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer group"
              style={{ background: "var(--brand-surface-container-lowest)", transitionDelay: `${i * 100}ms` }}
              data-testid={`card-book-${book.id}`}
            >
              <div className="book-card-inner p-6 h-full flex flex-col">
                <div
                  className="aspect-[2/3] w-full rounded-lg mb-8 overflow-hidden relative shadow-inner"
                  style={{ background: "var(--brand-surface-variant)" }}
                >
                  <img
                    alt={book.title}
                    src={book.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 book-info-overlay flex flex-col justify-end p-6 text-white">
                    <p className="font-sans text-sm mb-4 line-clamp-3">{book.quote}</p>
                    <button className="px-4 py-2 border border-white rounded font-sans text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors" data-testid={`button-order-${book.id}`}>
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3
                    className="font-serif text-2xl mb-3 transition-colors"
                    style={{ color: "var(--brand-on-background)", fontFamily: "'Newsreader', serif" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLHeadingElement).style.color = book.accent; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLHeadingElement).style.color = "var(--brand-on-background)"; }}
                  >
                    {book.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--brand-on-surface-variant)" }}>
                    {book.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t flex justify-between items-center" style={{ borderColor: "var(--brand-surface-variant)" }}>
                  <span className="font-sans text-xs font-bold tracking-widest uppercase" style={{ color: book.accent }}>
                    {book.year} · {book.genre}
                  </span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    style={{ background: "var(--brand-surface-container)" }}
                  >
                    <span className="material-symbols-outlined text-sm" style={{ fontSize: "16px" }}>east</span>
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

function JournalsSection() {
  const articles = [
    { id: 1, title: "The Memory Palace Revisited", publication: "The Paris Review", date: "Mar 2024", excerpt: "A deep dive into the cognitive architecture of nostalgia, and why some buildings feel like memory itself." },
    { id: 2, title: "Glass Cities, Paper Dreams", publication: "Granta Magazine", date: "Nov 2023", excerpt: "On the intersection of architectural utopias and the literary imagination — from Calvino to current urban theorists." },
    { id: 3, title: "What We Archive", publication: "The New Yorker", date: "Jul 2023", excerpt: "A meditation on selective memory, institutional archives, and the violence of the curator's editorial hand." },
    { id: 4, title: "Analog Futures", publication: "n+1", date: "Feb 2023", excerpt: "Technology promised us infinite memory. Instead, it gave us infinite forgetting. A reckoning with digital permanence." },
  ];

  return (
    <section
      id="journals"
      className="max-w-7xl mx-auto px-6 md:px-12 mb-32 reveal"
    >
      <div className="mb-16">
        <p className="font-sans text-sm tracking-widest uppercase mb-4 flex items-center gap-2 font-bold" style={{ color: "var(--brand-secondary)" }}>
          <span className="w-4 h-4 rounded-full inline-block" style={{ background: "var(--brand-secondary)" }} />
          Recent Writing
        </p>
        <h2 className="font-serif text-4xl md:text-6xl italic" style={{ color: "var(--brand-on-background)", fontFamily: "'Newsreader', serif" }}>
          Journals & Essays
        </h2>
      </div>
      <div className="space-y-0">
        {articles.map((article) => (
          <article
            key={article.id}
            className="py-8 cursor-pointer group transition-all duration-300 rounded-lg px-4 -mx-4"
            style={{ borderBottom: "0" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--brand-surface-container-low)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            data-testid={`article-journal-${article.id}`}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest" style={{ color: "var(--brand-secondary)" }}>
                    {article.publication}
                  </span>
                </div>
                <h3
                  className="font-serif text-xl md:text-2xl mb-3 group-hover:text-[var(--brand-primary)] transition-colors"
                  style={{ color: "var(--brand-on-background)", fontFamily: "'Newsreader', serif" }}
                >
                  {article.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--brand-on-surface-variant)" }}>
                  {article.excerpt}
                </p>
              </div>
              <div className="flex md:flex-col items-center md:items-end gap-4 shrink-0">
                <span className="font-sans text-xs tracking-widest uppercase" style={{ color: "var(--brand-outline)" }}>
                  {article.date}
                </span>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center group-hover:text-white transition-all duration-300"
                  style={{ background: "var(--brand-surface-container)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--brand-primary)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--brand-surface-container)"; }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>east</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function UpcomingSection() {
  const [activeTab, setActiveTab] = useState("novel");
  const activeProject = UPCOMING_TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="upcoming" className="max-w-7xl mx-auto px-6 md:px-12 mb-32 reveal">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl italic mb-6" style={{ color: "var(--brand-on-background)", fontFamily: "'Newsreader', serif" }}>
          Upcoming Projects
        </h2>
        <div
          className="inline-flex rounded-full p-1 border"
          style={{ background: "var(--brand-surface-container)", borderColor: "var(--brand-surface-variant)" }}
        >
          {UPCOMING_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-6 py-2 rounded-full font-sans text-sm uppercase tracking-widest transition-all duration-300"
              style={
                activeTab === tab.id
                  ? { background: "white", boxShadow: "0 1px 4px rgba(0,0,0,0.15)", color: tab.accentVar }
                  : { color: "var(--brand-on-surface-variant)" }
              }
              data-testid={`tab-upcoming-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg border"
        style={{ background: "var(--brand-surface-container-low)", borderColor: "rgba(220,192,190,0.3)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-500">
          <div>
            <span
              className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full mb-4"
              style={{ background: activeProject.badgeBg, color: activeProject.badgeColor }}
            >
              {activeProject.badge}
            </span>
            <h3 className="font-serif text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Newsreader', serif", color: "var(--brand-on-background)" }}>
              {activeProject.title}
            </h3>
            <p className="font-sans leading-relaxed mb-6" style={{ color: "var(--brand-on-surface-variant)" }}>
              {activeProject.description}
            </p>
            {activeProject.ctaStyle === "text" ? (
              <button
                className="font-sans text-sm uppercase tracking-widest hover:underline underline-offset-4 flex items-center gap-2"
                style={{ color: activeProject.accentVar }}
                data-testid={`button-upcoming-cta-${activeProject.id}`}
              >
                {activeProject.cta}{" "}
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>{activeProject.ctaIcon}</span>
              </button>
            ) : (
              <button
                className="px-6 py-3 rounded-full text-white font-sans text-sm uppercase tracking-widest hover:shadow-lg transition-all flex items-center gap-2 secondary-gradient"
                data-testid={`button-upcoming-cta-${activeProject.id}`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>{activeProject.ctaIcon}</span>
                {activeProject.cta}
              </button>
            )}
          </div>
          <div
            className="aspect-video rounded-lg overflow-hidden relative shadow-inner"
            style={{ background: "var(--brand-surface-variant)" }}
          >
            <div className="absolute inset-0 mix-blend-multiply z-10" style={{ background: activeProject.overlayColor }} />
            <img
              alt={activeProject.title}
              src={activeProject.img}
              className="w-full h-full object-cover filter sepia-[0.2]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  return (
    <section
      id="events"
      className="py-24 px-6 md:px-12 reveal"
      style={{ background: "var(--brand-on-background)", color: "var(--brand-surface)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl italic mb-4" style={{ fontFamily: "'Newsreader', serif" }}>
            Gallery &amp; Events
          </h2>
          <p className="font-sans max-w-2xl mx-auto" style={{ color: "var(--brand-surface-variant)" }}>
            Glimpses from book tours, residencies, and architectural research trips.
          </p>
        </div>

        <div className="masonry-grid">
          {GALLERY.map((item) => (
            <div
              key={item.id}
              className="masonry-item relative group overflow-hidden rounded-lg cursor-zoom-in"
              onClick={() => { setCurrentImg(item.lightboxSrc); setLightboxOpen(true); }}
              data-testid={`gallery-item-${item.id}`}
            >
              <img
                alt={item.title}
                src={item.src}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center"
                style={{ background: `${item.color}cc` }}
              >
                <div>
                  <h4 className="font-serif text-xl mb-2 text-white" style={{ fontFamily: "'Newsreader', serif" }}>
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
          data-testid="lightbox-overlay"
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-red-300 transition-colors"
            data-testid="button-lightbox-close"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <img
            src={currentImg}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            data-testid="lightbox-image"
          />
        </div>
      )}
    </section>
  );
}

function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      className="py-20 px-12 w-full relative overflow-hidden border-t-4"
      style={{ background: "var(--brand-surface-container)", borderColor: "var(--brand-primary)" }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2" style={{ background: "rgba(0,90,90,0.05)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2" style={{ background: "rgba(139,0,50,0.05)" }} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <div>
          <a
            href="#"
            className="font-serif italic text-3xl block mb-6"
            style={{ color: "var(--brand-primary)", fontFamily: "'Newsreader', serif" }}
          >
            Akshat's Inkspace
          </a>
          <p className="font-sans text-base max-w-md mb-8" style={{ color: "var(--brand-on-surface-variant)" }}>
            Stay updated with new publications, essays, and events.
          </p>
          <div className="relative max-w-md group">
            <input
              className="w-full rounded-full py-4 px-6 transition-all font-sans outline-none shadow-sm hover:shadow-md border-2"
              style={{
                background: "var(--brand-surface-container-lowest)",
                borderColor: "var(--brand-surface-variant)",
                color: "var(--brand-on-background)",
              }}
              placeholder="Your Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="input-email-subscribe"
            />
            <button
              className="absolute right-2 top-2 bottom-2 px-6 rounded-full signature-gradient text-white font-sans text-sm uppercase tracking-widest hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
              data-testid="button-subscribe"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col md:items-end justify-center">
          <div className="flex space-x-8 mb-12">
            {["Twitter", "Instagram", "Substack"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-sans text-sm tracking-widest uppercase transition-colors duration-300"
                style={{ color: "var(--brand-on-surface-variant)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-secondary)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-on-surface-variant)"; }}
                data-testid={`link-social-${social.toLowerCase()}`}
              >
                {social}
              </a>
            ))}
          </div>
          <p className="font-sans text-xs tracking-widest uppercase" style={{ color: "var(--brand-outline)" }}>
            Akshat Shukla @2026
          </p>
        </div>
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
      <main className="pt-32 pb-24 overflow-hidden">
        <HeroSection />
        <BooksSection />
        <JournalsSection />
        <UpcomingSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
