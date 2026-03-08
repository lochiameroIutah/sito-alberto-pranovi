"use client";

import Image from "next/image";
import Link from "next/link";
import { PixelMark } from "@/components/PixelMark";
import { useRevealChildren } from "@/hooks/useReveal";

// ─── Software icons as styled badges ───────────────────────────────────────
const software = [
  { name: "Rhinoceros", abbr: "3D", bg: "#1a1a1a" },
  { name: "KeyShot",    abbr: "KS", bg: "#1a1a1a" },
  { name: "Blender",    abbr: "BL", bg: "#1a1a1a" },
  { name: "Illustrator",abbr: "Ai", bg: "#240000" },
  { name: "Photoshop",  abbr: "Ps", bg: "#001830" },
  { name: "InDesign",   abbr: "Id", bg: "#1a001a" },
  { name: "DaVinci",    abbr: "DV", bg: "#1a0a0a" },
  { name: "Ableton",    abbr: "Lv", bg: "#0a1a0a" },
];

function SoftwareBadge({ name, abbr, bg }: { name: string; abbr: string; bg: string }) {
  return (
    <div
      className="flex flex-col items-center gap-1.5"
      title={name}
    >
      <div
        className="w-10 h-10 flex items-center justify-center rounded-[3px] border border-white/[0.08]"
        style={{ background: bg }}
      >
        <span className="text-[11px] font-bold tracking-wider text-white/70">{abbr}</span>
      </div>
      <span className="text-[9px] tracking-[0.12em] uppercase text-dim font-light">{name}</span>
    </div>
  );
}

// ─── Gradient separator line (matches Alberto's portfolio mark) ─────────────
function GradientLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{
        background: "linear-gradient(to right, transparent, #3a3a3a 40%, #1a1a1a 100%)",
      }}
    />
  );
}

export default function CVPage() {
  const ref = useRevealChildren();

  return (
    <div
      ref={ref}
      className="min-h-screen bg-bg text-fg"
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      {/* ── Minimal nav ── */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between h-16 px-5 md:px-10 backdrop-blur-xl bg-bg/90 border-b border-white/[0.04]">
        <Link href="/" className="flex items-center gap-3 group">
          <PixelMark variant="ap" inverted className="opacity-50 group-hover:opacity-100 transition-opacity" />
          <span className="text-[11px] tracking-[0.28em] uppercase font-light text-muted group-hover:text-fg transition-colors">
            A. Pranovi
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-[11px] tracking-[0.2em] uppercase text-dim hover:text-fg transition-colors font-light"
          >
            ← Portfolio
          </Link>
          <a
            href="/PORTFOLIO 2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.2em] uppercase text-dim hover:text-fg transition-colors font-light hidden md:block"
          >
            PDF ↗
          </a>
        </nav>
      </header>

      {/* ── Main content — pt-16 for header ── */}
      <main className="pt-16">
        {/* ═══════════════════════════════════════════════════════════════
            DESKTOP: CSS grid — sidebar | content columns
            MOBILE:  single column stack
        ═══════════════════════════════════════════════════════════════ */}
        <div className="
          grid grid-cols-1
          md:grid-cols-[220px_1fr]
          lg:grid-cols-[240px_1fr]
          min-h-[calc(100svh-64px)]
        ">
          {/* ── LEFT SIDEBAR ── */}
          <aside className="
            border-b border-white/[0.04]
            md:border-b-0 md:border-r md:border-white/[0.04]
            px-6 md:px-8
            py-12 md:py-16
            md:sticky md:top-16
            md:h-[calc(100svh-64px)]
            md:overflow-y-auto
            flex flex-col
          ">
            {/* Photo */}
            <div className="reveal-up relative w-full max-w-[140px] aspect-[3/4] bg-[#0c0c0c] rounded-[2px] overflow-hidden mb-8">
              <Image
                src="/alberto-profile.png"
                alt="Alberto Pranovi"
                fill
                className="object-cover object-top"
                sizes="160px"
                priority
              />
            </div>

            {/* Name + title */}
            <div className="reveal-up mb-8">
              <h1 className="text-2xl font-extralight tracking-[-0.02em] leading-tight uppercase">
                Alberto<br />Pranovi
              </h1>
              <p className="text-[10px] tracking-[0.22em] uppercase text-muted font-light mt-2">
                Visual &amp; Product Designer
              </p>
            </div>

            <GradientLine className="mb-8" />

            {/* Contacts */}
            <div className="reveal-up space-y-5 flex-1">
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-dim font-light mb-1.5">Phone</p>
                <a href="tel:+393463871076" className="text-xs font-light text-muted hover:text-fg transition-colors">
                  +39 346 387 1076
                </a>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-dim font-light mb-1.5">Mail</p>
                <a href="mailto:alberto.pranovi96@gmail.com" className="text-xs font-light text-muted hover:text-fg transition-colors break-all">
                  alberto.pranovi96@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-dim font-light mb-1.5">Social</p>
                <div className="space-y-1">
                  <a href="https://www.linkedin.com/in/alberto-pranovi-132152162/" target="_blank" rel="noopener noreferrer" className="block text-xs font-light text-muted hover:text-fg transition-colors">
                    Alberto Pranovi ↗
                  </a>
                  <a href="https://www.instagram.com/apranovic/" target="_blank" rel="noopener noreferrer" className="block text-xs font-light text-muted hover:text-fg transition-colors">
                    @apranovic ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Pixel mark at bottom of sidebar */}
            <div className="mt-12 hidden md:block">
              <PixelMark variant="ap" inverted className="opacity-15" />
            </div>
          </aside>

          {/* ── RIGHT CONTENT ── */}
          <div className="px-6 md:px-10 lg:px-14 py-12 md:py-16">

            {/* ── ABOUT ── */}
            <section className="reveal-up mb-14 md:mb-20">
              <h2 className="text-[11px] tracking-[0.3em] uppercase text-muted font-light mb-5">
                About
              </h2>
              <GradientLine className="mb-7" />
              <p className="text-sm md:text-base font-extralight leading-[1.8] text-fg/80 max-w-3xl">
                I was born in Padua in 1996 and grew up with a deep passion for clothing, street art and music,
                always searching for a means of expression that I struggled to find. In 2018, I started my journey
                at the <em className="not-italic text-fg">Scuola Italiana Design</em>, where I gained the skills
                and tools necessary to bring an idea to life. I developed a deep interest for the communicative
                aspects of the product. Whether it&apos;s graphic design or physical objects, I am fascinated by
                how these can convey emotions and represent values.
              </p>
            </section>

            {/* ── 4-column grid: Education | Experience | Skills | Software+Languages ── */}
            <div className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
              gap-10 md:gap-8 lg:gap-6
            ">

              {/* EDUCATION */}
              <section className="reveal-up">
                <h2 className="text-[11px] tracking-[0.3em] uppercase text-muted font-light mb-5">
                  Education
                </h2>
                <GradientLine className="mb-7" />
                <div className="space-y-7">
                  {[
                    {
                      period: "2012 / 2017",
                      title: "Istituto Tecnico per Geometri Belzoni, Padova.",
                      desc: "High school, first introduction to graphic design software.",
                    },
                    {
                      period: "2018 / 2021",
                      title: "Scuola Italiana Design, Padova.",
                      desc: "Master's in Visual Design, Product Design and Product Communication.",
                    },
                    {
                      period: "2023 / 2024",
                      title: "Job Formazione, Blender course.",
                      desc: "Beginner's Blender course: a tool for 3D modeling and rendering.",
                    },
                  ].map((e) => (
                    <div key={e.period}>
                      <p className="text-[10px] tracking-[0.15em] text-dim font-light mb-1.5">{e.period}</p>
                      <p className="text-xs font-normal text-fg/90 leading-snug mb-1.5">{e.title}</p>
                      <p className="text-[11px] font-extralight text-muted leading-relaxed">{e.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* EXPERIENCE */}
              <section className="reveal-up sm:col-span-1 lg:col-span-1">
                <h2 className="text-[11px] tracking-[0.3em] uppercase text-muted font-light mb-5">
                  Experience
                </h2>
                <GradientLine className="mb-7" />
                <div className="space-y-7">
                  {[
                    {
                      period: "2021 / 2022",
                      title: "Studio Tecnico Pranovi, Vigonovo (VE).",
                      desc: "Surveys, architectural design, creation of technical drawings.",
                    },
                    {
                      period: "2022 / 2025",
                      title: "Promistamp, Vigonza (PD).",
                      desc: "Development of metallic accessories with an industrialization focus. Creation of 3D models, technical tables, 2D illustrations and rendering. Stand design for Lineapelle Milano & Première Vision Paris 2022–2024.",
                    },
                    {
                      period: "2025 / Present",
                      title: "Monde / LVMH Métiers d'Art.",
                      desc: "Product Designer. Development of metallic accessories and metal trims for luxury fashion houses.",
                    },
                  ].map((e) => (
                    <div key={e.period}>
                      <p className="text-[10px] tracking-[0.15em] text-dim font-light mb-1.5">{e.period}</p>
                      <p className="text-xs font-normal text-fg/90 leading-snug mb-1.5">{e.title}</p>
                      <p className="text-[11px] font-extralight text-muted leading-relaxed">{e.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SKILLS */}
              <section className="reveal-up">
                <h2 className="text-[11px] tracking-[0.3em] uppercase text-muted font-light mb-5">
                  Skills
                </h2>
                <GradientLine className="mb-7" />
                <ul className="space-y-3">
                  {[
                    "Effective communication, empathy, creativity, problem-solving",
                    "Knowledge of branding and visual identity",
                    "Ability to convey concepts through images",
                    "Ability to generate new ideas and solutions",
                    "Development of 2D and 3D models, rendering and animations",
                    "Technical knowledge of design",
                    "Knowledge of production technologies",
                    "Critical analysis of projects and client requests",
                    "Prioritization of tasks",
                  ].map((s, i) => (
                    <li key={i} className="text-[11px] font-extralight text-muted leading-relaxed flex gap-2.5 items-start">
                      <span className="block w-1 h-1 rounded-full bg-dim flex-shrink-0 mt-1.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </section>

              {/* SOFTWARE + LANGUAGES */}
              <section className="reveal-up space-y-10">
                {/* Software */}
                <div>
                  <h2 className="text-[11px] tracking-[0.3em] uppercase text-muted font-light mb-5">
                    Software
                  </h2>
                  <GradientLine className="mb-7" />
                  <div className="grid grid-cols-4 gap-3">
                    {software.map((s) => (
                      <SoftwareBadge key={s.name} {...s} />
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h2 className="text-[11px] tracking-[0.3em] uppercase text-muted font-light mb-5">
                    Languages
                  </h2>
                  <GradientLine className="mb-7" />
                  <div className="space-y-4">
                    {[
                      { lang: "Italian", level: "Native speaker" },
                      { lang: "English", level: "Conversational" },
                    ].map((l) => (
                      <div key={l.lang}>
                        <p className="text-xs font-normal text-fg/80 uppercase tracking-[0.1em]">{l.lang}</p>
                        <p className="text-[11px] font-extralight text-muted mt-0.5">{l.level}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pixel mark decoration */}
                <div className="pt-4">
                  <PixelMark variant="checker" inverted className="opacity-20" />
                </div>
              </section>

            </div>
            {/* ── End 4-col grid ── */}

            {/* Footer row */}
            <div className="mt-20 md:mt-28 pt-6 border-t border-white/[0.04] flex items-center justify-between">
              <p className="text-[10px] tracking-[0.2em] text-dim font-light uppercase">
                &copy; {new Date().getFullYear()} Alberto Pranovi
              </p>
              <Link
                href="/"
                className="text-[10px] tracking-[0.2em] text-dim hover:text-fg transition-colors font-light uppercase"
              >
                ← Back to portfolio
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
