"use client";

import { RevealText } from "./RevealText";

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <RevealText className="mb-16">
          <h2 className="text-xs tracking-[0.2em] uppercase text-[#666] font-light">
            About
          </h2>
        </RevealText>

        <RevealText delay={200}>
          <p className="text-[clamp(1.5rem,3.5vw,3.5rem)] font-extralight leading-[1.2] tracking-[-0.02em]">
            Born in Padua in 1996, I grew up with a deep passion for clothing,
            street art and music. In 2018, I started my journey at the{" "}
            <span className="italic text-[#666]">Scuola Italiana Design</span>,
            where I gained the skills to bring ideas to life.
          </p>
        </RevealText>

        <RevealText delay={400} className="mt-8">
          <p className="text-[clamp(1.2rem,2.5vw,2rem)] font-extralight leading-[1.3] text-[#888]">
            Currently working as Product Designer at{" "}
            <span className="text-foreground">Monde</span> /{" "}
            <span className="text-foreground">LVMH M&eacute;tiers d&apos;Art</span>,
            developing metallic accessories with an industrialization focus.
          </p>
        </RevealText>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {[
            { label: "Experience", items: ["Promistamp (2022–Present)", "Studio Tecnico Pranovi"] },
            { label: "Education", items: ["Scuola Italiana Design", "Job Formazione — Blender"] },
            { label: "Software", items: ["Rhinoceros / KeyShot", "Blender / Photoshop", "Illustrator / InDesign"] },
            { label: "Skills", items: ["Product Design", "3D Modeling & Rendering", "Branding & Visual Identity"] },
          ].map((col, i) => (
            <RevealText key={col.label} delay={200 + i * 100}>
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-[#666] font-light mb-4">
                  {col.label}
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm font-light text-[#ccc] leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
