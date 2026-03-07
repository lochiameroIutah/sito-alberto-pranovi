"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const lines = el.querySelectorAll<HTMLElement>(".h-line span");
    lines.forEach((s, i) => {
      setTimeout(() => {
        s.style.transform = "translateY(0)";
        s.style.opacity = "1";
      }, 400 + i * 120);
    });

    const sub = el.querySelector<HTMLElement>(".h-sub");
    if (sub) {
      setTimeout(() => {
        sub.style.opacity = "1";
        sub.style.transform = "translateY(0)";
      }, 900);
    }
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-end px-5 md:px-10 pb-10 md:pb-16"
    >
      {/* Big title */}
      <div className="mb-8 md:mb-12">
        {["Product", "Designer"].map((word, i) => (
          <div key={word} className="overflow-hidden h-line">
            <span
              className="block text-[clamp(3.2rem,12vw,10rem)] font-extralight leading-[0.9] tracking-[-0.04em] opacity-0 translate-y-full"
              style={{ transition: "all 1s cubic-bezier(0.16,1,0.3,1)" }}
            >
              {word}
            </span>
          </div>
        ))}
        <div className="overflow-hidden h-line mt-1 md:mt-2">
          <span
            className="block text-[clamp(1.6rem,5vw,4rem)] font-extralight leading-[1] tracking-[-0.02em] text-muted italic opacity-0 translate-y-full"
            style={{ transition: "all 1s cubic-bezier(0.16,1,0.3,1)" }}
          >
            & 3D Artist
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="h-sub flex flex-col md:flex-row items-start md:items-end justify-between gap-4 opacity-0 translate-y-4 pt-6 border-t border-white/[0.06]"
        style={{ transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="text-[11px] md:text-xs tracking-[0.15em] uppercase text-muted font-light leading-relaxed">
          <p>Based in Padua, Italy</p>
          <p>Product Designer @ Monde / LVMH</p>
        </div>
        <div className="text-[11px] md:text-xs tracking-[0.15em] uppercase text-dim font-light flex items-center gap-3">
          <span className="hidden md:inline">Scroll</span>
          <span className="w-px h-6 bg-dim relative overflow-hidden">
            <span className="absolute inset-0 bg-muted animate-pulse" />
          </span>
        </div>
      </div>
    </section>
  );
}
