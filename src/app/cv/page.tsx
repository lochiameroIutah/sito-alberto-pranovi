"use client";

import Image from "next/image";
import Link from "next/link";
import { PixelMark } from "@/components/PixelMark";
import { useRevealChildren } from "@/hooks/useReveal";

// ─── Software badges ────────────────────────────────────────────────────────
const software = [
  { name: "Rhinoceros", abbr: "3D", bg: "#1a1a1a", bgLight: "#ececec" },
  { name: "KeyShot",    abbr: "KS", bg: "#1a1a1a", bgLight: "#ececec" },
  { name: "Blender",    abbr: "BL", bg: "#1a1a1a", bgLight: "#ececec" },
  { name: "Illustrator",abbr: "Ai", bg: "#240000", bgLight: "#fce8e8" },
  { name: "Photoshop",  abbr: "Ps", bg: "#001830", bgLight: "#e0edf8" },
  { name: "InDesign",   abbr: "Id", bg: "#1a001a", bgLight: "#f5e0f5" },
  { name: "DaVinci",    abbr: "DV", bg: "#1a0a0a", bgLight: "#f5eaea" },
  { name: "Ableton",    abbr: "Lv", bg: "#0a1a0a", bgLight: "#eaf5ea" },
];

function SoftwareBadge({ name, abbr, bg, bgLight }: { name: string; abbr: string; bg: string; bgLight: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5" title={name}>
      <div
        className="w-10 h-10 flex items-center justify-center rounded-[3px] border border-overlay/[0.08]"
        style={{ background: `light-dark(${bgLight}, ${bg})` }}
      >
        <span className="text-[11px] font-bold tracking-wider text-overlay/70">{abbr}</span>
      </div>
      <span className="text-[9px] tracking-[0.12em] uppercase text-overlay/30 font-light">{name}</span>
    </div>
  );
}

function GradientLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{ background: "linear-gradient(to right, transparent, var(--muted) 40%, var(--border) 100%)" }}
    />
  );
}

export default function CVPage() {
  const ref = useRevealChildren();

  return (
    // pt-16 = safe zone below the global Navbar (h-16 = 64px)
    <main ref={ref} className="pt-16 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] min-h-[calc(100svh-64px)]">

        {/* ── LEFT SIDEBAR ─────────────────────────────────────────────── */}
        <aside className="
          border-b border-overlay/[0.04]
          md:border-b-0 md:border-r md:border-overlay/[0.04]
          px-7 md:px-9
          py-14 md:py-20
          md:sticky md:top-16
          md:h-[calc(100svh-64px)]
          md:overflow-y-auto
          flex flex-col gap-8
        ">
          {/* Photo */}
          <div className="reveal-up relative w-full max-w-[160px] aspect-[3/4] bg-surface-deep rounded-[2px] overflow-hidden">
            <Image
              src="/alberto-profile.png"
              alt="Alberto Pranovi"
              fill
              className="object-cover object-top"
              sizes="200px"
              priority
            />
          </div>

          {/* Name + title */}
          <div className="reveal-up">
            <h1 className="text-2xl font-extralight tracking-[-0.02em] leading-tight uppercase">
              Alberto<br />Pranovi
            </h1>
            <p className="text-[10px] tracking-[0.22em] uppercase text-overlay/40 font-light mt-2">
              Visual &amp; Product Designer
            </p>
          </div>

          <GradientLine />

          {/* Contacts */}
          <div className="reveal-up space-y-6 flex-1">
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-overlay/25 font-light mb-1.5">Phone</p>
              <a href="tel:+393463871076" className="text-xs font-light text-overlay/55 hover:text-fg transition-colors">
                +39 346 387 1076
              </a>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-overlay/25 font-light mb-1.5">Mail</p>
              <a href="mailto:alberto.pranovi96@gmail.com" className="text-xs font-light text-overlay/55 hover:text-fg transition-colors break-all">
                alberto.pranovi96@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-overlay/25 font-light mb-1.5">Social</p>
              <div className="space-y-2">
                <a href="https://www.linkedin.com/in/alberto-pranovi-132152162/" target="_blank" rel="noopener noreferrer" className="block text-xs font-light text-overlay/55 hover:text-fg transition-colors">
                  LinkedIn ↗
                </a>
                <a href="https://www.instagram.com/apranovic/" target="_blank" rel="noopener noreferrer" className="block text-xs font-light text-overlay/55 hover:text-fg transition-colors">
                  Instagram ↗
                </a>
              </div>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-overlay/25 font-light mb-1.5">Portfolio</p>
              <a href="/PORTFOLIO 2024.pdf" target="_blank" rel="noopener noreferrer" className="block text-xs font-light text-overlay/55 hover:text-fg transition-colors">
                PDF Download ↗
              </a>
            </div>
          </div>

          {/* Brand mark at bottom */}
          <div className="hidden md:block mt-4">
            <PixelMark variant="ap" inverted className="opacity-12" />
          </div>
        </aside>

        {/* ── RIGHT CONTENT ────────────────────────────────────────────── */}
        <div className="px-7 md:px-12 lg:px-16 py-14 md:py-20">

          {/* PDF link row */}
          <div className="reveal-up flex items-center justify-between mb-14 md:mb-20">
            <p className="text-[11px] tracking-[0.25em] uppercase text-overlay/35 font-light">
              Curriculum Vitæ
            </p>
            <Link
              href="/"
              className="text-[11px] tracking-[0.18em] uppercase text-overlay/35 hover:text-overlay/80 transition-colors font-light"
            >
              ← Portfolio
            </Link>
          </div>

          {/* ── ABOUT ── */}
          <section className="reveal-up mb-16 md:mb-24" aria-labelledby="cv-about">
            <h2 id="cv-about" className="text-[10px] tracking-[0.32em] uppercase text-overlay/35 font-light mb-5">
              About
            </h2>
            <GradientLine className="mb-8" />
            <p className="text-sm md:text-[15px] font-extralight leading-[1.9] text-overlay/70 max-w-2xl">
              I was born in Padua in 1996 and grew up with a deep passion for clothing, street art and music,
              always searching for a means of expression. In 2018, I started my journey at the{" "}
              <em className="not-italic text-overlay/90">Scuola Italiana Design</em>, where I gained the skills
              and tools necessary to bring an idea to life. I developed a deep interest for the communicative
              aspects of the product — whether graphic design or physical objects, I am fascinated by how
              these convey emotions and represent values.
            </p>
          </section>

          {/* ── 4-col grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-6">

            {/* EDUCATION */}
            <section className="reveal-up" aria-labelledby="cv-education">
              <h2 id="cv-education" className="text-[10px] tracking-[0.32em] uppercase text-overlay/35 font-light mb-5">
                Education
              </h2>
              <GradientLine className="mb-8" />
              <div className="space-y-8">
                {[
                  {
                    period: "2012 – 2017",
                    title: "ITG Belzoni, Padova",
                    desc: "High school, first introduction to graphic design software.",
                  },
                  {
                    period: "2018 – 2021",
                    title: "Scuola Italiana Design",
                    desc: "Master's in Visual Design, Product Design and Product Communication.",
                  },
                  {
                    period: "2023 – 2024",
                    title: "Job Formazione — Blender",
                    desc: "3D modeling and rendering for product visualization.",
                  },
                ].map((e) => (
                  <div key={e.period}>
                    <p className="text-[9px] tracking-[0.18em] text-overlay/25 font-light mb-1.5">{e.period}</p>
                    <p className="text-xs font-normal text-overlay/80 leading-snug mb-1.5">{e.title}</p>
                    <p className="text-[11px] font-extralight text-overlay/45 leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* EXPERIENCE */}
            <section className="reveal-up" aria-labelledby="cv-experience">
              <h2 id="cv-experience" className="text-[10px] tracking-[0.32em] uppercase text-overlay/35 font-light mb-5">
                Experience
              </h2>
              <GradientLine className="mb-8" />
              <div className="space-y-8">
                {[
                  {
                    period: "2021 – 2022",
                    title: "Studio Tecnico Pranovi",
                    desc: "Surveys, architectural design, technical drawings.",
                  },
                  {
                    period: "2022 – 2025",
                    title: "Promistamp, Vigonza",
                    desc: "Development of metallic accessories. 3D models, technical tables, 2D illustration, rendering. Stands for Lineapelle Milano & Première Vision Paris.",
                  },
                  {
                    period: "2025 – Present",
                    title: "Monde / LVMH Métiers d'Art",
                    desc: "Product Designer. Metallic accessories and metal trims for luxury fashion houses.",
                  },
                ].map((e) => (
                  <div key={e.period}>
                    <p className="text-[9px] tracking-[0.18em] text-overlay/25 font-light mb-1.5">{e.period}</p>
                    <p className="text-xs font-normal text-overlay/80 leading-snug mb-1.5">{e.title}</p>
                    <p className="text-[11px] font-extralight text-overlay/45 leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SKILLS */}
            <section className="reveal-up" aria-labelledby="cv-skills">
              <h2 id="cv-skills" className="text-[10px] tracking-[0.32em] uppercase text-overlay/35 font-light mb-5">
                Skills
              </h2>
              <GradientLine className="mb-8" />
              <ul className="space-y-3.5" role="list">
                {[
                  "Effective communication & empathy",
                  "Branding & visual identity",
                  "Concept-to-image translation",
                  "Idea generation & problem-solving",
                  "2D / 3D modeling & rendering",
                  "Technical design knowledge",
                  "Production technology awareness",
                  "Critical project analysis",
                  "Task prioritization",
                ].map((s) => (
                  <li key={s} className="text-[11px] font-extralight text-overlay/50 leading-relaxed flex gap-2.5 items-start">
                    <span className="block w-1 h-1 rounded-full bg-overlay/20 flex-shrink-0 mt-1.5" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </section>

            {/* SOFTWARE + LANGUAGES */}
            <section className="reveal-up space-y-10" aria-labelledby="cv-software">
              <div>
                <h2 id="cv-software" className="text-[10px] tracking-[0.32em] uppercase text-overlay/35 font-light mb-5">
                  Software
                </h2>
                <GradientLine className="mb-8" />
                <div className="grid grid-cols-4 gap-3">
                  {software.map((s) => (
                    <SoftwareBadge key={s.name} {...s} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-[10px] tracking-[0.32em] uppercase text-overlay/35 font-light mb-5">
                  Languages
                </h2>
                <GradientLine className="mb-8" />
                <div className="space-y-5">
                  {[
                    { lang: "Italian", level: "Native speaker" },
                    { lang: "English", level: "Conversational" },
                  ].map((l) => (
                    <div key={l.lang}>
                      <p className="text-xs font-normal text-overlay/80 uppercase tracking-[0.1em]">{l.lang}</p>
                      <p className="text-[11px] font-extralight text-overlay/45 mt-0.5">{l.level}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <PixelMark variant="checker" inverted className="opacity-15" />
              </div>
            </section>

          </div>

          {/* Bottom row */}
          <div className="mt-24 md:mt-32 pt-6 border-t border-overlay/[0.04] flex items-center justify-between">
            <p className="text-[10px] tracking-[0.2em] text-overlay/20 font-light uppercase">
              &copy; {new Date().getFullYear()} Alberto Pranovi
            </p>
            <Link
              href="/"
              className="text-[10px] tracking-[0.2em] text-overlay/25 hover:text-overlay/70 transition-colors font-light uppercase"
            >
              ← Portfolio
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
