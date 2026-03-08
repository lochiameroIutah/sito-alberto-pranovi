"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { useRevealChildren } from "@/hooks/useReveal";

export function WorkShowcase() {
  const ref = useRevealChildren();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Raw cursor position (clientX/Y)
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  // Smooth position via LERP
  const [smooth, setSmooth] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const cursorRef = useRef({ x: 0, y: 0 });

  // Keep a ref in sync so the raf loop reads the latest value without re-running
  useEffect(() => {
    cursorRef.current = cursor;
  }, [cursor]);

  // LERP loop
  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      setSmooth((prev) => {
        const nx = lerp(prev.x, cursorRef.current.x, 0.1);
        const ny = lerp(prev.y, cursorRef.current.y, 0.1);
        // Avoid re-rendering if movement is negligible
        if (Math.abs(nx - prev.x) < 0.05 && Math.abs(ny - prev.y) < 0.05)
          return prev;
        return { x: nx, y: ny };
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-44 px-5 md:px-10"
    >
      {/* ── Floating image preview — desktop only ─────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-30 hidden md:block"
        style={{
          width: 320,
          height: 220,
          left: smooth.x + 36,
          top: smooth.y - 110,
          borderRadius: 2,
          overflow: "hidden",
          opacity: hoveredIdx !== null ? 1 : 0,
          transform: `scale(${hoveredIdx !== null ? 1 : 0.88})`,
          transition:
            "opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {projects.map((p, i) => (
          <div
            key={p.slug}
            className="absolute inset-0"
            style={{
              opacity: hoveredIdx === i ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            <Image
              src={p.heroImage}
              alt={p.title}
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
        ))}
        {/* Subtle bottom vignette on the preview */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* ── Section header ─────────────────────────────────────────────── */}
      <div className="flex items-baseline justify-between mb-12 md:mb-16">
        <h1 className="reveal-up text-[11px] tracking-[0.25em] uppercase text-white/35 font-light">
          Selected Work
        </h1>
        <span className="reveal-up text-[11px] tracking-[0.2em] text-white/20 font-light">
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Project list ───────────────────────────────────────────────── */}
      <div>
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={`/project/${p.slug}`}
            className="reveal-up group block border-t border-white/[0.07]"
            style={{ transitionDelay: `${i * 80}ms` }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            data-hover
          >
            <div className="relative flex items-center gap-6 md:gap-10 py-7 md:py-9">
              {/* Subtle hover bg */}
              <div
                className="absolute inset-0 -mx-5 md:-mx-10 bg-white/[0.022] transition-opacity duration-300"
                style={{ opacity: hoveredIdx === i ? 1 : 0 }}
              />

              {/* Index */}
              <span className="relative text-[11px] tracking-[0.2em] text-white/20 font-light w-8 flex-shrink-0 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h2
                className="relative flex-1 font-extralight tracking-[-0.03em] leading-none transition-opacity duration-400"
                style={{
                  fontSize: "clamp(1.7rem, 4.5vw, 3.8rem)",
                  opacity:
                    hoveredIdx !== null && hoveredIdx !== i ? 0.2 : 1,
                  transition: "opacity 0.35s ease",
                }}
              >
                {p.title}
              </h2>

              {/* Meta — desktop */}
              <div className="relative hidden md:flex items-center gap-10 flex-shrink-0">
                <span className="text-[11px] tracking-[0.2em] uppercase text-white/30 font-light">
                  {p.category}
                </span>
                <span className="text-[11px] tracking-[0.15em] text-white/18 font-light tabular-nums">
                  {p.year}
                </span>
              </div>

              {/* Arrow */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="relative flex-shrink-0 transition-all duration-300"
                style={{
                  opacity: hoveredIdx === i ? 1 : 0,
                  transform:
                    hoveredIdx === i
                      ? "translate(0, 0)"
                      : "translate(-6px, 6px)",
                }}
              >
                <path
                  d="M3 13L13 3M13 3H5M13 3V11"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
              </svg>
            </div>

            {/* Hover underline */}
            <div
              className="h-px bg-white/12 origin-left transition-transform duration-500"
              style={{
                transform: `scaleX(${hoveredIdx === i ? 1 : 0})`,
              }}
            />
          </Link>
        ))}

        {/* Closing border */}
        <div className="border-t border-white/[0.07]" />
      </div>
    </section>
  );
}
