"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const spans = el.querySelectorAll(".hero-line span");
    spans.forEach((span, i) => {
      setTimeout(() => {
        (span as HTMLElement).style.transform = "translateY(0)";
        (span as HTMLElement).style.opacity = "1";
      }, 300 + i * 150);
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative"
    >
      <div className="max-w-7xl">
        <div className="overflow-hidden hero-line">
          <span
            className="block text-[clamp(2.5rem,8vw,8rem)] font-light leading-[0.95] tracking-[-0.03em] translate-y-full opacity-0 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            Product
          </span>
        </div>
        <div className="overflow-hidden hero-line">
          <span
            className="block text-[clamp(2.5rem,8vw,8rem)] font-light leading-[0.95] tracking-[-0.03em] translate-y-full opacity-0 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            Designer
          </span>
        </div>
        <div className="overflow-hidden hero-line mt-2">
          <span
            className="block text-[clamp(2.5rem,8vw,8rem)] font-extralight leading-[0.95] tracking-[-0.03em] text-[#666] italic translate-y-full opacity-0 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            & 3D Artist
          </span>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-end justify-between w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-12rem)]">
        <div className="text-xs tracking-[0.15em] uppercase text-[#666] font-light">
          <p>Based in Padua, Italy</p>
          <p className="mt-1">Product Designer @ Monde / LVMH</p>
        </div>
        <div className="text-xs tracking-[0.15em] uppercase text-[#666] font-light hidden md:block">
          <p>Scroll to explore</p>
          <div className="mt-3 w-[1px] h-8 bg-[#333] mx-auto relative overflow-hidden">
            <div className="w-full h-full bg-white animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
