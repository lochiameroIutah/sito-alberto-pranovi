"use client";

import Link from "next/link";
import { useRevealChildren } from "@/hooks/useReveal";
import { PixelMark } from "./PixelMark";

export function ContactSection() {
  const ref = useRevealChildren();

  return (
    <main
      ref={ref}
      className="pt-16 min-h-screen flex flex-col px-5 md:px-10"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col flex-1 py-24 md:py-40">

        {/* Label */}
        <p className="reveal-up text-[11px] tracking-[0.25em] uppercase text-overlay/35 font-light mb-16 md:mb-24">
          Contact
        </p>

        {/* Main email — big */}
        <div className="reveal-up">
          <a
            href="mailto:alberto.pranovi96@gmail.com"
            className="block text-[clamp(1.5rem,3.8vw,4.2rem)] font-extralight tracking-[-0.03em] leading-tight hover:opacity-40 transition-opacity break-all md:break-normal"
            data-hover
            aria-label="Invia email ad Alberto Pranovi"
          >
            alberto.pranovi96@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="reveal-up mt-5 md:mt-7">
          <a
            href="tel:+393463871076"
            className="text-[clamp(1rem,2.2vw,2.4rem)] font-extralight text-overlay/45 hover:text-overlay/80 transition-colors"
            data-hover
          >
            +39 346 387 1076
          </a>
        </div>

        {/* Social row */}
        <div className="reveal-up flex flex-wrap items-center gap-8 mt-16 md:mt-24 pt-8 border-t border-overlay/[0.05]">
          <a
            href="https://www.instagram.com/apranovic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase text-overlay/35 hover:text-overlay/80 transition-colors font-light group"
            data-hover
          >
            <span>Instagram</span>
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </a>

          <span className="w-px h-3 bg-overlay/10" aria-hidden="true" />

          <a
            href="https://www.linkedin.com/in/alberto-pranovi-132152162/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase text-overlay/35 hover:text-overlay/80 transition-colors font-light group"
            data-hover
          >
            <span>LinkedIn</span>
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </a>

          <span className="w-px h-3 bg-overlay/10" aria-hidden="true" />

          <Link
            href="/cv"
            className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase text-overlay/35 hover:text-overlay/80 transition-colors font-light group"
            data-hover
          >
            <PixelMark variant="gallery" inverted className="opacity-40 group-hover:opacity-80 transition-opacity" />
            <span>Full CV</span>
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="group-hover:translate-x-1 transition-transform">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="mt-auto pt-12 md:pt-16 flex items-end justify-between">
          <PixelMark variant="ap" inverted className="opacity-10" />
          <p className="text-[10px] tracking-[0.2em] text-overlay/15 font-light">
            &copy; {new Date().getFullYear()} Alberto Pranovi — Padua, Italy
          </p>
        </div>

      </div>
    </main>
  );
}
