"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { useRevealChildren } from "@/hooks/useReveal";
import { useEffect } from "react";

export default function V3ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    document.documentElement.classList.add("v3-brutalist");
    return () => document.documentElement.classList.remove("v3-brutalist");
  }, []);

  const ref = useRevealChildren();

  if (!project) notFound();

  const currentIdx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIdx + 1) % projects.length];

  return (
    <div ref={ref} className="bg-black text-white min-h-screen font-mono">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between h-14 px-4 md:px-8 bg-black border-b-2 border-white">
        <Link href="/v3" className="text-sm md:text-base font-bold uppercase tracking-wider">AP&reg;</Link>
        <Link
          href="/v3#work"
          className="text-[10px] font-bold uppercase tracking-wider text-white/40 hover:text-yellow-400 transition-colors"
        >
          &larr; Work
        </Link>
      </header>

      {/* pt-14 = header height (56px) */}
      <main className="pt-14">
        {/* Header */}
        <section className="px-4 md:px-8 py-10 md:py-14 border-b-2 border-white">
          <p className="reveal-up text-[9px] font-bold uppercase tracking-[0.3em] text-yellow-400 mb-3">
            {project.category} / {project.year}
          </p>
          <h1 className="reveal-up text-[clamp(2.5rem,8vw,7rem)] font-bold uppercase leading-[0.85] tracking-[-0.03em]">
            {project.title}
          </h1>
          <p className="reveal-up text-sm md:text-base font-light text-white/35 mt-5 md:mt-6 max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Images */}
        <section>
          {project.images.map((img, i) => (
            <div
              key={i}
              className={`reveal-up border-b-2 border-white ${
                img.span === "full" ? "" : "md:grid md:grid-cols-2"
              }`}
              style={{ transitionDelay: `${Math.min(i * 50, 200)}ms` }}
            >
              {img.span === "full" ? (
                <div className="relative aspect-[16/9] bg-[#111]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={i < 2}
                  />
                </div>
              ) : (
                <>
                  <div
                    className={`relative aspect-[4/3] bg-[#111] ${
                      i % 2 === 0 ? "md:border-r-2" : "md:border-l-2"
                    } border-white`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="50vw"
                      priority={i < 2}
                    />
                  </div>
                  {i + 1 < project.images.length &&
                  project.images[i + 1].span === "half" ? null : (
                    <div className="hidden md:flex items-center justify-center bg-[#0a0a0a]">
                      <span className="text-6xl font-bold text-white/4 uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </section>

        {/* Next */}
        <Link
          href={`/v3/project/${next.slug}`}
          className="group block px-4 md:px-8 py-12 md:py-16 border-t-2 border-white"
        >
          <div className="reveal-up flex items-end justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/15 mb-2">Next</p>
              <h2 className="text-2xl md:text-5xl font-bold uppercase tracking-[-0.02em] group-hover:text-yellow-400 transition-colors">
                {next.title}
              </h2>
            </div>
            <span className="text-2xl md:text-4xl font-bold text-white/10 group-hover:text-yellow-400 transition-colors">
              &rarr;
            </span>
          </div>
        </Link>
      </main>
    </div>
  );
}
