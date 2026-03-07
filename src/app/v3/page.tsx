"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { useRevealChildren } from "@/hooks/useReveal";

function V3Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between h-16 px-4 md:px-8 bg-black border-b-2 border-white">
      <Link href="/v3" className="text-sm md:text-base font-bold uppercase tracking-wider text-white">
        AP&reg;
      </Link>
      <nav className="flex items-center gap-4 md:gap-6 text-xs md:text-sm font-bold uppercase tracking-wider">
        <a href="#work" className="text-white hover:text-yellow-400 transition-colors">Work</a>
        <a href="#about" className="text-white hover:text-yellow-400 transition-colors">Info</a>
        <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Say Hi</a>
        <span className="hidden md:block w-0.5 h-4 bg-white" />
        <Link href="/" className="hidden md:block text-white/40 hover:text-yellow-400 transition-colors">Dark</Link>
        <Link href="/v2" className="hidden md:block text-white/40 hover:text-yellow-400 transition-colors">Editorial</Link>
      </nav>
    </header>
  );
}

export default function V3Home() {
  const ref = useRevealChildren();

  return (
    <div ref={ref} className="bg-black text-white min-h-screen font-mono">
      <V3Nav />

      {/* Hero */}
      <section className="min-h-[100svh] flex flex-col justify-center px-4 md:px-8 border-b-2 border-white relative overflow-hidden">
        <div className="absolute top-20 right-4 md:right-8 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/20 writing-mode-vertical hidden md:block"
          style={{ writingMode: "vertical-rl" }}
        >
          Padua, Italy — {new Date().getFullYear()}
        </div>

        <div>
          <p className="reveal-up text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-yellow-400 mb-4 md:mb-6">
            Product Designer / 3D Artist
          </p>
          <h1 className="reveal-up text-[clamp(3rem,14vw,12rem)] font-bold leading-[0.85] uppercase tracking-[-0.04em]">
            Alberto
            <br />
            Pranovi
          </h1>
          <div className="reveal-up flex flex-wrap gap-3 mt-8">
            {["LVMH", "Accessories", "Metal Trims", "3D", "CGI"].map((tag) => (
              <span key={tag} className="border border-white/30 px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/60 hover:bg-white hover:text-black transition-all">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-4 md:left-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
          Scroll &darr;
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="border-b-2 border-white">
        <div className="px-4 md:px-8 py-6 border-b-2 border-white flex items-baseline justify-between">
          <h2 className="reveal-up text-xs md:text-sm font-bold uppercase tracking-[0.3em]">Projects</h2>
          <span className="reveal-up text-xs font-bold text-yellow-400">{String(projects.length).padStart(2, "0")}</span>
        </div>

        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={`/v3/project/${p.slug}`}
            className="reveal-up group block border-b-2 border-white last:border-b-0"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Image */}
              <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto md:h-full bg-[#111] overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-white">
                <Image
                  src={p.heroImage}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width:768px)100vw,42vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              {/* Info */}
              <div className="md:col-span-7 p-4 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[300px]">
                <div>
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 h-px bg-white/10" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      {p.year}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-0.02em] group-hover:text-yellow-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs md:text-sm font-light text-white/40 mt-2 md:mt-3 uppercase tracking-wider">
                    {p.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 group-hover:text-yellow-400 transition-colors mt-4">
                  View &rarr;
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* About */}
      <section id="about" className="border-b-2 border-white">
        <div className="px-4 md:px-8 py-6 border-b-2 border-white">
          <h2 className="reveal-up text-xs md:text-sm font-bold uppercase tracking-[0.3em]">About</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          <div className="md:col-span-4 border-b-2 md:border-b-0 md:border-r-2 border-white p-4 md:p-8">
            <div className="reveal-up relative aspect-square bg-[#111] overflow-hidden">
              <Image src="/alberto-profile.png" alt="Alberto Pranovi" fill className="object-cover object-top grayscale" sizes="33vw" />
            </div>
          </div>
          <div className="md:col-span-8 p-4 md:p-8">
            <p className="reveal-up text-base md:text-xl lg:text-2xl font-light leading-[1.5]">
              Born in Padua, 1996. Deep passion for clothing, street art and music.
              Product Designer at <span className="font-bold text-yellow-400">MONDE / LVMH</span>.
              Developing metallic accessories and metal trims for luxury fashion.
            </p>
            <div className="reveal-up grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 md:mt-12">
              {[
                { label: "Stack", items: ["Rhinoceros", "KeyShot", "Blender", "Adobe CC"] },
                { label: "Focus", items: ["Product Design", "3D Modeling", "Metal Trims", "Visual ID"] },
                { label: "Bio", items: ["Scuola Italiana Design", "Promistamp (3yr)", "Monde / LVMH (now)"] },
              ].map((col) => (
                <div key={col.label}>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-400 mb-3">{col.label}</h3>
                  <ul className="space-y-1">
                    {col.items.map((item) => (
                      <li key={item} className="text-xs font-light text-white/50">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 md:px-8 py-16 md:py-24">
        <p className="reveal-up text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-6">Contact</p>
        <a href="mailto:alberto.pranovi96@gmail.com" className="reveal-up block text-[clamp(1rem,3vw,2.5rem)] font-bold uppercase tracking-wider hover:text-yellow-400 transition-colors break-all md:break-normal">
          alberto.pranovi96@gmail.com
        </a>
        <div className="reveal-up flex gap-4 mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/30">
          <a href="https://www.instagram.com/apranovic/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors border border-white/20 px-3 py-1">IG</a>
          <a href="https://www.linkedin.com/in/alberto-pranovi-132152162/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors border border-white/20 px-3 py-1">LI</a>
        </div>
        <p className="text-[10px] font-bold text-white/10 mt-12 uppercase tracking-widest">&copy; {new Date().getFullYear()} AP</p>
      </section>
    </div>
  );
}
