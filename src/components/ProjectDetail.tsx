"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { useRevealChildren } from "@/hooks/useReveal";

export function ProjectDetail({ project }: { project: Project }) {
  const ref = useRevealChildren();

  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIdx + 1) % projects.length];

  return (
    <main ref={ref} className="pt-20 md:pt-24">
      {/* Header */}
      <section className="px-5 md:px-10 pb-8 md:pb-12">
        <Link
          href="/#work"
          className="reveal-up inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-dim hover:text-fg transition-colors font-light mb-10 md:mb-16"
          data-hover
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1" />
          </svg>
          Back
        </Link>

        <div className="max-w-4xl">
          <p className="reveal-up text-[10px] tracking-[0.25em] uppercase text-dim font-light mb-3">
            {project.category} — {project.year}
          </p>
          <h1 className="reveal-up text-[clamp(2rem,6vw,5rem)] font-extralight tracking-[-0.04em] leading-[0.95]">
            {project.title}
          </h1>
          <p className="reveal-up text-base md:text-lg font-extralight leading-relaxed text-muted mt-5 md:mt-8 max-w-2xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Images grid */}
      <section className="px-5 md:px-10 pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {project.images.map((img, i) => (
            <div
              key={i}
              className={`reveal-up ${img.span === "full" ? "md:col-span-2" : ""}`}
              style={{ transitionDelay: `${Math.min(i * 60, 300)}ms` }}
            >
              <div
                className={`relative bg-[#0a0a0a] rounded-[2px] overflow-hidden ${
                  img.span === "full" ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes={img.span === "full" ? "100vw" : "(max-width:768px)100vw,50vw"}
                  priority={i < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next project */}
      <Link
        href={`/project/${nextProject.slug}`}
        className="block border-t border-white/[0.04] px-5 md:px-10 py-16 md:py-24 group"
        data-hover
      >
        <div className="reveal-up flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-dim font-light mb-2">
              Next project
            </p>
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-extralight tracking-[-0.02em] group-hover:opacity-60 transition-opacity">
              {nextProject.title}
            </h2>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-dim group-hover:text-fg group-hover:translate-x-2 transition-all"
          >
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </Link>
    </main>
  );
}
