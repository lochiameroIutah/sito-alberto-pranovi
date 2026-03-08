"use client";

import Image from "next/image";
import Link from "next/link";
import { useRevealChildren } from "@/hooks/useReveal";
import { PixelMark } from "./PixelMark";

export function About() {
  const ref = useRevealChildren();

  return (
    <section ref={ref} className="py-32 md:py-52 px-5 md:px-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <p className="reveal-up text-[11px] tracking-[0.25em] uppercase text-muted font-light mb-14 md:mb-24">
          About
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Photo */}
          <div className="reveal-up md:col-span-2">
            <div className="relative aspect-[3/4] max-w-[260px] bg-[#0c0c0c] rounded-[2px] overflow-hidden">
              <Image
                src="/alberto-profile.png"
                alt="Alberto Pranovi"
                fill
                className="object-cover object-top"
                sizes="(max-width:768px)70vw,25vw"
              />
            </div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-dim font-light mt-4">
              Alberto Pranovi, Padua 1996
            </p>
          </div>

          {/* Bio */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <p className="reveal-up text-[clamp(1.1rem,1.8vw,1.65rem)] font-extralight leading-[1.6] tracking-[-0.01em] max-w-lg">
              Born in Padua in 1996, I grew up with a deep passion for
              clothing, street art and music. In 2018, I started my journey at
              the{" "}
              <em className="text-muted not-italic">Scuola Italiana Design</em>,
              where I gained the skills to bring ideas to life.
            </p>

            <p className="reveal-up text-sm font-extralight leading-[1.8] text-muted mt-6 md:mt-8 max-w-md">
              Currently Product Designer at{" "}
              <span className="text-fg font-light">Monde</span> /{" "}
              <span className="text-fg font-light">LVMH M&eacute;tiers d&apos;Art</span>,
              developing metallic accessories and metal trims for luxury fashion houses.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 mt-14 md:mt-16">
              {[
                {
                  label: "Experience",
                  items: ["Monde / LVMH (2025–)", "Promistamp (2022–25)", "Studio Tecnico Pranovi"],
                },
                {
                  label: "Education",
                  items: ["Scuola Italiana Design", "Job Formazione — Blender", "ITG Belzoni, Padova"],
                },
                {
                  label: "Software",
                  items: ["Rhinoceros", "KeyShot / Blender", "Photoshop / Illustrator"],
                },
                {
                  label: "Skills",
                  items: ["Product Design", "3D Modeling & Render", "Metal Trims Dev"],
                },
              ].map((col, i) => (
                <div key={col.label} className="reveal-up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <h3 className="text-[10px] tracking-[0.28em] uppercase text-dim font-light mb-3.5">
                    {col.label}
                  </h3>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item} className="text-xs font-light text-muted leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CV link */}
            <div className="reveal-up mt-12 md:mt-14">
              <Link
                href="/cv"
                className="inline-flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-dim hover:text-fg transition-colors group"
                data-hover
              >
                <PixelMark variant="gallery" inverted className="opacity-40 group-hover:opacity-100 transition-opacity" />
                <span>Full CV</span>
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
