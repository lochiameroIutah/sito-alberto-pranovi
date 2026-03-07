"use client";

import Image from "next/image";
import { useRevealChildren } from "@/hooks/useReveal";

export function About() {
  const ref = useRevealChildren();

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <p className="reveal-up text-[11px] tracking-[0.25em] uppercase text-muted font-light mb-10 md:mb-16">
          About
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Photo */}
          <div className="reveal-up md:col-span-4 lg:col-span-3">
            <div className="relative aspect-[3/4] bg-[#0a0a0a] rounded-[2px] overflow-hidden">
              <Image
                src="/alberto-profile.png"
                alt="Alberto Pranovi"
                fill
                className="object-cover object-top"
                sizes="(max-width:768px)100vw,25vw"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-8 lg:col-span-9">
            <p className="reveal-up text-[clamp(1.3rem,3vw,2.8rem)] font-extralight leading-[1.3] tracking-[-0.02em]">
              Born in Padua in 1996, I grew up with a deep passion for clothing,
              street art and music. In 2018, I started my journey at the{" "}
              <span className="italic text-muted">Scuola Italiana Design</span>,
              where I gained the skills and tools to bring ideas to life.
            </p>

            <p className="reveal-up text-[clamp(1rem,2vw,1.6rem)] font-extralight leading-[1.4] text-muted mt-6 md:mt-8">
              Currently working as Product Designer at{" "}
              <span className="text-fg">Monde</span> /{" "}
              <span className="text-fg">LVMH M&eacute;tiers d&apos;Art</span>,
              developing metallic accessories and metal trims for luxury fashion houses.
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
              {[
                {
                  label: "Experience",
                  items: ["Monde / LVMH (2025–Now)", "Promistamp (2022–2025)", "Studio Tecnico Pranovi"],
                },
                {
                  label: "Education",
                  items: ["Scuola Italiana Design", "Job Formazione — Blender", "ITG Belzoni Padova"],
                },
                {
                  label: "Software",
                  items: ["Rhinoceros", "KeyShot / Blender", "Photoshop / Illustrator", "InDesign"],
                },
                {
                  label: "Skills",
                  items: ["Product Design", "3D Modeling & Rendering", "Metal Trims Dev", "Branding & Visual ID"],
                },
              ].map((col, i) => (
                <div key={col.label} className="reveal-up" style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3 className="text-[10px] tracking-[0.25em] uppercase text-dim font-light mb-3 md:mb-4">
                    {col.label}
                  </h3>
                  <ul className="space-y-1.5">
                    {col.items.map((item) => (
                      <li key={item} className="text-xs md:text-sm font-light text-accent/80 leading-relaxed">
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
  );
}
