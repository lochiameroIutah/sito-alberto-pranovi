"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { PixelMark } from "./PixelMark";

// Collect all hero images from every project for the slideshow
const slideshowImages = projects.map((p) => ({
  src: p.heroImage,
  label: p.title,
}));

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);

  // ── Entrance animation ──────────────────────────────────────────────────
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const masks = el.querySelectorAll<HTMLElement>(".line-mask");
    masks.forEach((m, i) => {
      setTimeout(() => m.classList.add("visible"), 300 + i * 130);
    });
    const sub = el.querySelector<HTMLElement>(".hero-sub");
    if (sub) {
      setTimeout(() => {
        sub.style.opacity = "1";
        sub.style.transform = "translateY(0)";
      }, 300 + masks.length * 130 + 100);
    }
  }, []);

  // ── Slideshow cycle every 4 s ───────────────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      setPrevIdx(activeIdx);
      setActiveIdx((i) => (i + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [activeIdx]);

  const lines = [
    { text: "Product",   italic: false },
    { text: "Designer",  italic: false },
    { text: "& 3D Artist", italic: true },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-end px-5 md:px-10 pb-12 md:pb-20 overflow-hidden"
    >
      {/* ── Background slideshow ─────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        {slideshowImages.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0"
            style={{
              opacity:    i === activeIdx ? 1 : 0,
              filter:     `brightness(var(--hero-brightness)) saturate(var(--hero-saturate))`,
              transform:  `translateX(${i === activeIdx ? "0%" : i === prevIdx ? "-4%" : "4%"}) scale(${i === activeIdx ? 1 : 1.03})`,
              transition: "opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <Image
              src={img.src}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
        {/* Extra dark vignette bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
      </div>

      {/* ── Top labels ────────────────────────────────────────────────────── */}
      <div className="relative z-10 absolute top-[80px] left-5 md:left-10 flex items-start gap-4 pointer-events-none">
        <PixelMark variant="ap" inverted className="opacity-20" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-dim font-light mt-0.5">
          2024
        </span>
      </div>
      <div className="absolute top-[80px] right-5 md:right-10 text-right z-10 pointer-events-none">
        <p className="text-[10px] tracking-[0.25em] uppercase text-dim font-light">
          Padua, Italy
        </p>
      </div>

      {/* ── Slideshow label (current project name) ────────────────────────── */}
      <div className="absolute bottom-[calc(100%-64px+50svh)] left-5 md:left-10 z-10 pointer-events-none hidden md:block">
        <p
          key={activeIdx}
          className="text-[10px] tracking-[0.25em] uppercase text-muted/50 font-light"
          style={{ animation: "fadeIn 0.6s ease" }}
        >
          {String(activeIdx + 1).padStart(2, "0")} / {slideshowImages[activeIdx].label}
        </p>
      </div>

      {/* ── Main type ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 mb-10 md:mb-16">
        {lines.map(({ text, italic }) => (
          <div key={text} className="line-mask">
            <span
              className={`block text-[clamp(3.5rem,11.5vw,10rem)] font-extralight leading-[0.88] tracking-[-0.04em]${
                italic ? " italic text-muted" : ""
              }`}
            >
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────────── */}
      <div
        className="hero-sub relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-7 border-t border-overlay/[0.06]"
        style={{
          opacity: 0,
          transform: "translateY(12px)",
          transition: "opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="text-[11px] tracking-[0.15em] uppercase text-muted font-light leading-[2]">
          <p>Based in Padua, Italy</p>
          <p>Product Designer @ Monde / LVMH</p>
        </div>

        {/* Slideshow dots */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            {slideshowImages.map((_, i) => (
              <button
                key={i}
                onClick={() => { setPrevIdx(activeIdx); setActiveIdx(i); }}
                className={`block rounded-full transition-all duration-500 ${
                  i === activeIdx
                    ? "w-4 h-1 bg-overlay/60"
                    : "w-1 h-1 bg-overlay/20 hover:bg-overlay/40"
                }`}
                aria-label={`Show ${slideshowImages[i].label}`}
              />
            ))}
          </div>
          <a
            href="/work"
            className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-dim font-light hover:text-fg transition-colors group"
            data-hover
          >
            <span>View Work</span>
            <svg
              width="11"
              height="11"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
