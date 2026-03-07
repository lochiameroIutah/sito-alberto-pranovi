"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { useRevealChildren } from "@/hooks/useReveal";
import { useEffect } from "react";

export default function V2ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    document.documentElement.classList.add("v2-editorial");
    return () => document.documentElement.classList.remove("v2-editorial");
  }, []);

  const ref = useRevealChildren();

  if (!project) notFound();

  const currentIdx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIdx + 1) % projects.length];

  return (
    <div ref={ref} className="bg-[#fafaf8] text-black min-h-screen font-sans">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between h-14 px-5 md:px-10 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
        <Link href="/v2" className="text-[11px] tracking-[0.3em] uppercase font-medium text-black">
          Alberto Pranovi
        </Link>
        <nav className="flex items-center gap-8 text-[11px] tracking-[0.15em] uppercase">
          <Link href="/v2#work" className="text-black/50 hover:text-black transition-colors">Work</Link>
          <Link href="/v2#about" className="text-black/50 hover:text-black transition-colors">About</Link>
        </nav>
      </header>

      {/* Content */}
      <main className="pt-20 md:pt-24">
        <section className="px-5 md:px-10 lg:px-20 pb-10">
          <Link href="/v2#work" className="reveal-up inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-black/30 hover:text-black transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1" /></svg>
            Back
          </Link>
          <div className="max-w-3xl">
            <p className="reveal-up text-[10px] tracking-[0.25em] uppercase text-black/30 mb-3">
              {project.category} — {project.year}
            </p>
            <h1 className="reveal-up text-[clamp(2rem,5vw,4.5rem)] font-light tracking-[-0.03em] leading-[0.95]">
              {project.title}
            </h1>
            <p className="reveal-up text-base font-light text-black/50 mt-6 leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>
        </section>

        <section className="px-5 md:px-10 lg:px-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.images.map((img, i) => (
              <div key={i} className={`reveal-up ${img.span === "full" ? "md:col-span-2" : ""}`} style={{ transitionDelay: `${Math.min(i*50,250)}ms` }}>
                <div className={`relative bg-[#f0f0ec] overflow-hidden ${img.span === "full" ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes={img.span === "full" ? "100vw" : "50vw"} priority={i < 2} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <Link href={`/v2/project/${next.slug}`} className="block border-t border-black/[0.06] px-5 md:px-10 lg:px-20 py-16 group">
          <div className="reveal-up flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 mb-2">Next project</p>
              <h2 className="text-2xl md:text-4xl font-light tracking-[-0.02em] group-hover:text-black/50 transition-colors">{next.title}</h2>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black/20 group-hover:text-black group-hover:translate-x-1 transition-all">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </Link>
      </main>
    </div>
  );
}
