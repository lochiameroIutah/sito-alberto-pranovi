"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { useRevealChildren } from "@/hooks/useReveal";
import { PixelMark } from "./PixelMark";

const projectMarks: Record<string, "gallery" | "gradient" | "checker" | "ap"> = {
  "gallery":     "gallery",
  "vnm-glasses": "gradient",
  "flame-cap":   "ap",
  "rendering":   "checker",
};

export function ProjectDetail({ project }: { project: Project }) {
  const ref = useRevealChildren();
  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIdx + 1) % projects.length];

  return (
    <main ref={ref} className="pt-16">
      {/* ── Header ── */}
      <section className="min-h-[55svh] flex flex-col justify-end px-5 md:px-10 lg:px-16 pb-12 md:pb-16 border-b border-overlay/[0.04]">
        <Link
          href="/#work"
          className="reveal-up inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-dim hover:text-fg transition-colors font-light mb-14 md:mb-20"
          data-hover
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1" />
          </svg>
          All Projects
        </Link>

        <div className="flex items-start justify-between gap-6 max-w-4xl">
          <div>
            <p className="reveal-up text-[10px] tracking-[0.28em] uppercase text-dim font-light mb-4">
              {project.category} &mdash; {project.year}
            </p>
            <h1 className="reveal-up text-[clamp(2.5rem,6vw,5.5rem)] font-extralight tracking-[-0.04em] leading-[0.92]">
              {project.title}
            </h1>
            <p className="reveal-up text-sm md:text-base font-extralight leading-[1.7] text-muted mt-7 md:mt-9 max-w-xl">
              {project.description}
            </p>
          </div>
          {/* Pixel mark for this project */}
          <div className="reveal-up flex-shrink-0 pt-2 hidden md:block">
            <PixelMark variant={projectMarks[project.slug] ?? "ap"} inverted className="opacity-30" />
          </div>
        </div>
      </section>

      {/* ── Images grid ── */}
      <section className="px-5 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {project.images.map((img, i) => (
            <div
              key={i}
              className={`reveal-up ${img.span === "full" ? "md:col-span-2" : ""}`}
              style={{ transitionDelay: `${Math.min(i * 55, 280)}ms` }}
            >
              {/* Label above image — from PDF text */}
              {img.label && (
                <p className="text-[10px] tracking-[0.25em] uppercase text-dim font-light mb-3">
                  {img.label}
                </p>
              )}
              <div
                className={`relative bg-surface rounded-[2px] overflow-hidden ${
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

      {/* ── Next project ── */}
      <Link
        href={`/project/${nextProject.slug}`}
        className="group block border-t border-overlay/[0.04] px-5 md:px-10 lg:px-16 py-20 md:py-32"
        data-hover
      >
        <div className="reveal-up flex flex-col md:flex-row items-start md:items-end justify-between gap-5">
          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-dim font-light mb-3">
              Next project
            </p>
            <h2 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-extralight tracking-[-0.03em] group-hover:opacity-50 transition-opacity">
              {nextProject.title}
            </h2>
          </div>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="text-dim group-hover:text-fg group-hover:translate-x-2 transition-all flex-shrink-0"
          >
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </Link>
    </main>
  );
}
