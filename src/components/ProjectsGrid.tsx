"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { useRevealChildren } from "@/hooks/useReveal";

export function ProjectsGrid() {
  const ref = useRevealChildren();

  return (
    <section id="work" ref={ref} className="py-20 md:py-32 px-5 md:px-10">
      <div className="flex items-baseline justify-between mb-12 md:mb-20">
        <h2 className="reveal-up text-[11px] tracking-[0.25em] uppercase text-muted font-light">
          Selected Work
        </h2>
        <span className="reveal-up text-[11px] tracking-[0.2em] text-dim font-light">
          ({String(projects.length).padStart(2, "0")})
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={`/project/${p.slug}`}
            className={`reveal-up group block ${i === 0 ? "md:col-span-2" : ""}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div
              className={`img-wrap relative bg-[#0a0a0a] rounded-[2px] overflow-hidden ${
                i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={p.heroImage}
                alt={p.title}
                fill
                className="object-cover"
                sizes={i === 0 ? "100vw" : "(max-width:768px)100vw,50vw"}
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-1.5 font-light">
                      {p.category}
                    </p>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-extralight tracking-[-0.02em]">
                      {p.title}
                    </h3>
                    <p className="text-xs md:text-sm font-extralight text-white/60 mt-1 hidden md:block">
                      {p.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] text-white/40 font-light">
                    {p.year}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
