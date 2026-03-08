"use client";

import Link from "next/link";
import { useRevealChildren } from "@/hooks/useReveal";
import { PixelMark } from "./PixelMark";

export function Footer() {
  const ref = useRevealChildren();

  return (
    <footer
      ref={ref}
      className="py-32 md:py-52 px-5 md:px-10"
    >
      <div className="max-w-5xl mx-auto">
        <p className="reveal-up text-[11px] tracking-[0.25em] uppercase text-muted font-light mb-12 md:mb-16">
          Get in touch
        </p>

        <a
          href="mailto:alberto.pranovi96@gmail.com"
          className="reveal-up block text-[clamp(1.4rem,3.5vw,4rem)] font-extralight tracking-[-0.03em] hover:opacity-40 transition-opacity break-all md:break-normal leading-tight"
          data-hover
        >
          alberto.pranovi96@gmail.com
        </a>

        <a
          href="tel:+393463871076"
          className="reveal-up block text-[clamp(1rem,2vw,2rem)] font-extralight text-muted mt-5 hover:opacity-50 transition-opacity"
          data-hover
        >
          +39 346 387 1076
        </a>

        <div
          className="reveal-up flex flex-col md:flex-row items-start md:items-end justify-between mt-24 md:mt-36 pt-7 border-t border-white/[0.04]"
        >
          <div className="flex gap-8 text-[11px] tracking-[0.22em] uppercase font-light text-dim">
            <a
              href="https://www.instagram.com/apranovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg transition-colors"
              data-hover
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/alberto-pranovi-132152162/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg transition-colors"
              data-hover
            >
              LinkedIn
            </a>
            <Link
              href="/cv"
              className="hover:text-fg transition-colors"
              data-hover
            >
              CV
            </Link>
          </div>

          <div className="flex items-center gap-5 mt-8 md:mt-0">
            <PixelMark variant="ap" inverted className="opacity-15" />
            <p className="text-[10px] tracking-[0.2em] text-dim/40 font-light">
              &copy; {new Date().getFullYear()} Alberto Pranovi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
