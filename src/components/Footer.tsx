"use client";

import { RevealText } from "./RevealText";

export function Footer() {
  return (
    <footer id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <RevealText>
          <p className="text-xs tracking-[0.2em] uppercase text-[#666] font-light mb-8">
            Get in touch
          </p>
        </RevealText>

        <RevealText delay={200}>
          <a
            href="mailto:alberto.pranovi96@gmail.com"
            className="text-[clamp(1.5rem,4vw,4rem)] font-extralight tracking-[-0.02em] hover:opacity-60 transition-opacity block"
          >
            alberto.pranovi96@gmail.com
          </a>
        </RevealText>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-24 pt-8 border-t border-[#1a1a1a]">
          <div className="flex gap-8 text-xs tracking-[0.15em] uppercase font-light text-[#666]">
            <a
              href="https://www.instagram.com/apranovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/alberto-pranovi-132152162/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-xs tracking-[0.15em] text-[#444] font-light mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} Alberto Pranovi
          </p>
        </div>
      </div>
    </footer>
  );
}
