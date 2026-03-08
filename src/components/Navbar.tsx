"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PixelMark } from "./PixelMark";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { label: "Work",    href: "#work" },
    { label: "About",   href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "CV",      href: "/cv", isLink: true },
  ];
  const versions = [
    { label: "Editorial", href: "/v2" },
    { label: "Brutalist", href: "/v3" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between h-16 px-5 md:px-10 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-[#050505]/88 border-b border-white/[0.04]" : ""
        }`}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <PixelMark variant="ap" inverted className="opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="text-[11px] tracking-[0.28em] uppercase font-light text-muted group-hover:text-fg transition-colors">
            A. Pranovi
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) =>
            l.isLink ? (
              <Link
                key={l.label}
                href={l.href}
                className="text-[11px] tracking-[0.2em] uppercase text-dim hover:text-fg transition-colors font-light"
                data-hover
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="text-[11px] tracking-[0.2em] uppercase text-muted hover:text-fg transition-colors font-light"
                data-hover
              >
                {l.label}
              </a>
            )
          )}
          <span className="w-px h-3 bg-dim" />
          {versions.map((v) => (
            <Link
              key={v.label}
              href={v.href}
              className="text-[11px] tracking-[0.2em] uppercase text-dim hover:text-fg transition-colors font-light"
              data-hover
            >
              {v.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-[6px]"
          aria-label="Toggle menu"
        >
          <span className={`block h-px bg-white/80 transition-all duration-300 ${open ? "w-6 rotate-45 translate-y-[3.5px]" : "w-6"}`} />
          <span className={`block h-px bg-white/80 transition-all duration-300 ${open ? "w-6 -rotate-45 -translate-y-[3.5px]" : "w-4"}`} />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <PixelMark variant="ap" inverted className="mb-14 opacity-25" />
        <nav className="flex flex-col items-center gap-8">
          {[...links].map((l, i) =>
            l.isLink ? (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[clamp(1.8rem,6vw,3rem)] font-extralight tracking-[-0.02em] hover:opacity-40 transition-all text-muted"
                style={{ transitionDelay: open ? `${i * 70}ms` : "0ms" }}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[clamp(2.2rem,8vw,4rem)] font-extralight tracking-[-0.02em] hover:opacity-40 transition-all"
                style={{ transitionDelay: open ? `${i * 70}ms` : "0ms" }}
              >
                {l.label}
              </a>
            )
          )}
          <div className="w-8 h-px bg-dim my-5" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-dim mb-2">Style</p>
          {versions.map((v) => (
            <Link
              key={v.label}
              href={v.href}
              onClick={() => setOpen(false)}
              className="text-xl font-extralight tracking-[0.08em] text-muted hover:text-fg transition-colors"
            >
              {v.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
