"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { useRevealChildren } from "@/hooks/useReveal";

function V2Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between h-14 px-5 md:px-10 lg:px-16 bg-[#fafaf8]/90 backdrop-blur-xl border-b border-black/[0.06]">
      <Link href="/v2" className="text-[11px] tracking-[0.3em] uppercase font-medium text-black">
        Alberto Pranovi
      </Link>
      <nav className="flex items-center gap-6 md:gap-8 text-[11px] tracking-[0.15em] uppercase">
        <a href="#work" className="text-black/40 hover:text-black transition-colors">Work</a>
        <a href="#about" className="text-black/40 hover:text-black transition-colors">About</a>
        <a href="#contact" className="text-black/40 hover:text-black transition-colors">Contact</a>
        <span className="hidden md:block w-px h-3 bg-black/10" />
        <Link href="/" className="hidden md:block text-black/25 hover:text-black transition-colors">Dark</Link>
        <Link href="/v3" className="hidden md:block text-black/25 hover:text-black transition-colors">Brutalist</Link>
      </nav>
    </header>
  );
}

export default function V2Home() {
  const ref = useRevealChildren();

  return (
    <div ref={ref} className="bg-[#fafaf8] text-black min-h-screen font-sans">
      <V2Nav />

      {/* Hero — starts below fixed nav (h-14 = 56px) */}
      <section className="min-h-[100svh] flex flex-col justify-end px-5 md:px-10 lg:px-16 pb-12 md:pb-20 border-b border-black/[0.06]">
        <div className="max-w-5xl">
          <p className="reveal-up text-[11px] tracking-[0.3em] uppercase text-black/30 font-light mb-6 md:mb-8">
            Product Designer &amp; 3D Artist
          </p>
          <h1 className="reveal-up text-[clamp(2.8rem,7.5vw,7.5rem)] font-light leading-[0.93] tracking-[-0.04em] text-black">
            Alberto
            <br />
            <span className="italic font-extralight text-black/35">Pranovi</span>
          </h1>
          <p className="reveal-up text-sm md:text-base font-light text-black/45 mt-8 md:mt-10 max-w-md leading-relaxed">
            Product Designer at Monde / LVMH M&eacute;tiers d&apos;Art.
            Based in Padua, Italy. Specializing in accessories, metal trims &amp; 3D visualization.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        id="work"
        className="px-5 md:px-10 lg:px-16 py-24 md:py-40"
        style={{ scrollMarginTop: "56px" }}
      >
        <h2 className="reveal-up text-[11px] tracking-[0.3em] uppercase text-black/25 font-light mb-16 md:mb-24">
          Selected Work
        </h2>

        <div className="space-y-20 md:space-y-36">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/v2/project/${p.slug}`}
              className="reveal-up group block"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div
                  className={`${
                    i % 2 === 0 ? "md:col-span-7" : "md:col-span-7 md:col-start-6"
                  }`}
                >
                  <div className="relative aspect-[4/3] bg-[#eeeee9] overflow-hidden">
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                      sizes="(max-width:768px)100vw,60vw"
                    />
                  </div>
                </div>
                <div
                  className={`${
                    i % 2 === 0
                      ? "md:col-span-5"
                      : "md:col-span-5 md:col-start-1 md:row-start-1"
                  } flex flex-col justify-center`}
                >
                  <span className="text-[10px] tracking-[0.28em] uppercase text-black/25 font-light">
                    {String(i + 1).padStart(2, "0")} &mdash; {p.year}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-light tracking-[-0.02em] mt-4 group-hover:text-black/50 transition-colors leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm font-light text-black/40 mt-3 leading-relaxed max-w-xs">
                    {p.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-black/25 mt-8 group-hover:text-black transition-colors">
                    View project
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-5 md:px-10 lg:px-16 py-24 md:py-40 bg-[#f2f2ed]"
        style={{ scrollMarginTop: "56px" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal-up text-[11px] tracking-[0.3em] uppercase text-black/25 font-light mb-14 md:mb-20">
            About
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            <div className="reveal-up">
              <div className="relative aspect-[3/4] max-w-[200px] bg-[#e4e4df] overflow-hidden">
                <Image
                  src="/alberto-profile.png"
                  alt="Alberto Pranovi"
                  fill
                  className="object-cover object-top"
                  sizes="25vw"
                />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-black/25 font-light mt-3">
                Padua, 1996
              </p>
            </div>
            <div className="md:col-span-2 flex flex-col justify-center">
              <p className="reveal-up text-lg md:text-xl font-light leading-[1.55] text-black/75">
                Born in Padua in 1996, I grew up with a deep passion for clothing,
                street art and music. Currently Product Designer at{" "}
                <span className="text-black font-normal">Monde / LVMH M&eacute;tiers d&apos;Art</span>,
                developing metallic accessories for luxury fashion houses.
              </p>
              <div className="reveal-up grid grid-cols-2 gap-8 mt-10 md:mt-12">
                {[
                  {
                    label: "Experience",
                    items: ["Monde / LVMH", "Promistamp S.R.L.", "Studio Tecnico Pranovi"],
                  },
                  {
                    label: "Software",
                    items: ["Rhinoceros / KeyShot", "Blender / Photoshop", "Illustrator"],
                  },
                ].map((col) => (
                  <div key={col.label}>
                    <h3 className="text-[10px] tracking-[0.28em] uppercase text-black/25 mb-3">
                      {col.label}
                    </h3>
                    <ul className="space-y-2">
                      {col.items.map((item) => (
                        <li key={item} className="text-sm font-light text-black/55">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-5 md:px-10 lg:px-16 py-24 md:py-40"
        style={{ scrollMarginTop: "56px" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="reveal-up text-[11px] tracking-[0.3em] uppercase text-black/25 mb-10">
            Get in touch
          </p>
          <a
            href="mailto:alberto.pranovi96@gmail.com"
            className="reveal-up block text-[clamp(1.2rem,3.2vw,2.8rem)] font-light tracking-[-0.02em] hover:text-black/40 transition-colors break-all md:break-normal leading-tight"
          >
            alberto.pranovi96@gmail.com
          </a>
          <div className="reveal-up flex gap-8 mt-10 text-[11px] tracking-[0.2em] uppercase text-black/25">
            <a
              href="https://www.instagram.com/apranovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/alberto-pranovi-132152162/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-[10px] text-black/15 mt-16 tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Alberto Pranovi
          </p>
        </div>
      </section>
    </div>
  );
}
