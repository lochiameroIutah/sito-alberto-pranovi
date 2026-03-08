"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { useRevealChildren } from "@/hooks/useReveal";
import { PixelMark } from "./PixelMark";

// Each project gets its own pixel mark variant from Alberto's original PDF
const projectMarks: Record<string, "gallery" | "gradient" | "checker" | "ap"> = {
  "gallery":  "gallery",
  "vnm-glasses": "gradient",
  "flame-cap": "ap",
  "rendering": "checker",
};

export function ProjectsGrid() {
  const ref = useRevealChildren();

  return (
    <section
      ref={ref}
      className="py-32 md:py-52 px-5 md:px-10"
    >
      <div className="flex items-baseline justify-between mb-16 md:mb-28">
        <h2 className="reveal-up text-[11px] tracking-[0.25em] uppercase text-muted font-light">
          Selected Work
        </h2>
        <span className="reveal-up text-[11px] tracking-[0.2em] text-dim font-light">
          ({String(projects.length).padStart(2, "0")})
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={`/project/${p.slug}`}
            className={`reveal-up group block ${i === 0 ? "md:col-span-2" : ""}`}
            style={{ transitionDelay: `${i * 90}ms` }}
            data-hover
          >
            {/* Image card */}
            <div
              className={`img-wrap relative bg-[#0a0a0a] rounded-[2px] overflow-hidden ${
                i === 0 ? "aspect-[16/7]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={p.heroImage}
                alt={p.title}
                fill
                className="object-cover"
                sizes={i === 0 ? "100vw" : "(max-width:768px)100vw,50vw"}
                priority={i < 2}
              />

              {/* Text — z-20 sits above ::after gradient pseudo-element */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] tracking-[0.22em] uppercase text-white/75 mb-2.5 font-light">
                      {p.category}
                    </p>
                    <h3 className="text-xl md:text-2xl lg:text-[1.75rem] font-extralight tracking-[-0.02em] leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs font-extralight text-white/70 mt-2 hidden md:block">
                      {p.subtitle}
                    </p>
                  </div>

                  <div className="flex-shrink-0 flex flex-col items-end gap-3 pb-0.5">
                    {/* Pixel mark — the signature brand element from Alberto's PDF */}
                    <PixelMark
                      variant={projectMarks[p.slug] ?? "ap"}
                      inverted
                      className="opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                    />
                    <span className="text-[10px] tracking-[0.2em] text-white/55 font-light">
                      {p.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
