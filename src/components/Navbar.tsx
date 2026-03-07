"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const versions = [
    { label: "Editorial", href: "/v2" },
    { label: "Brutalist", href: "/v3" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between h-16 px-5 md:px-10 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-[#050505]/70 border-b border-white/[0.04]" : ""
        }`}
      >
        <Link
          href="/"
          className="text-[11px] tracking-[0.25em] uppercase font-normal hover:opacity-50 transition-opacity"
        >
          A. Pranovi
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[11px] tracking-[0.2em] uppercase text-muted hover:text-fg transition-colors font-light"
            >
              {l.label}
            </a>
          ))}
          <span className="w-px h-3 bg-dim" />
          {versions.map((v) => (
            <Link
              key={v.label}
              href={v.href}
              className="text-[11px] tracking-[0.2em] uppercase text-dim hover:text-fg transition-colors font-light"
            >
              {v.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-[5px]"
          aria-label="Menu"
        >
          <span className={`block h-px bg-white transition-all duration-300 ${open ? "w-6 rotate-45 translate-y-[3px]" : "w-6"}`} />
          <span className={`block h-px bg-white transition-all duration-300 ${open ? "w-6 -rotate-45 -translate-y-[3px]" : "w-4"}`} />
        </button>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[clamp(2rem,8vw,4rem)] font-extralight tracking-[-0.02em] hover:opacity-50 transition-all"
              style={{ transitionDelay: open ? `${i * 80}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
          <div className="w-12 h-px bg-dim my-4" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-dim mb-2">Style Variants</p>
          {versions.map((v) => (
            <Link
              key={v.label}
              href={v.href}
              onClick={() => setOpen(false)}
              className="text-lg font-extralight tracking-[0.1em] text-muted hover:text-fg transition-colors"
            >
              {v.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
