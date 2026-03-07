"use client";

import { useRevealChildren } from "@/hooks/useReveal";

export function Footer() {
  const ref = useRevealChildren();

  return (
    <footer id="contact" ref={ref} className="py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <p className="reveal-up text-[11px] tracking-[0.25em] uppercase text-muted font-light mb-8 md:mb-12">
          Get in touch
        </p>

        <a
          href="mailto:alberto.pranovi96@gmail.com"
          className="reveal-up block text-[clamp(1.2rem,3.5vw,3.5rem)] font-extralight tracking-[-0.02em] hover:opacity-50 transition-opacity break-all md:break-normal"
          data-hover
        >
          alberto.pranovi96@gmail.com
        </a>

        <a
          href="tel:+393463871076"
          className="reveal-up block text-[clamp(1rem,2vw,1.5rem)] font-extralight text-muted mt-3 hover:opacity-50 transition-opacity"
          data-hover
        >
          +39 346 387 1076
        </a>

        <div className="reveal-up flex flex-col md:flex-row items-start md:items-end justify-between mt-16 md:mt-24 pt-6 border-t border-white/[0.04]">
          <div className="flex gap-6 md:gap-8 text-[11px] tracking-[0.2em] uppercase font-light text-dim">
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
          </div>
          <p className="text-[10px] tracking-[0.2em] text-dim/50 font-light mt-6 md:mt-0">
            &copy; {new Date().getFullYear()} Alberto Pranovi
          </p>
        </div>
      </div>
    </footer>
  );
}
