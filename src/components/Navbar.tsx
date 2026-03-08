"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PixelMark } from "./PixelMark";
import { ScrambleHover } from "./ScrambleHover";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

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
    { label: "Work",    href: "/work" },
    { label: "About",   href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "CV",      href: "/cv" },
  ];

  const isActive = (href: string) => pathname === href;

  // On every page except home, always show the navbar background
  const showBg = scrolled || !isHome;

  return (
    <>
      {/* h-16 = 64px */}
      <header
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between h-16 px-5 md:px-10 transition-all duration-500 ${
          showBg
            ? "backdrop-blur-xl bg-[#050505]/92 border-b border-white/[0.05]"
            : ""
        }`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <PixelMark variant="ap" inverted className="opacity-70 group-hover:opacity-100 transition-opacity" />
          <span className="text-[12px] tracking-[0.22em] uppercase font-light text-white/80 group-hover:text-white transition-colors">
            A. Pranovi
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`text-[12px] tracking-[0.16em] uppercase font-light transition-colors duration-200 ${
                isActive(l.href)
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
              data-hover
            >
              <ScrambleHover text={l.label} speed={22} />
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-[6px]"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          <span className={`block h-px bg-white/75 transition-all duration-300 ${open ? "w-6 rotate-45 translate-y-[3.5px]" : "w-6"}`} />
          <span className={`block h-px bg-white/75 transition-all duration-300 ${open ? "w-6 -rotate-45 -translate-y-[3.5px]" : "w-4"}`} />
        </button>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigazione"
        className={`fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <PixelMark variant="ap" inverted className="mb-16 opacity-20" />
        <nav className="flex flex-col items-center gap-8">
          {links.map((l, i) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-[clamp(2.2rem,9vw,4.5rem)] font-extralight tracking-[-0.025em] transition-all duration-300 ${
                isActive(l.href) ? "text-white" : "text-white/75 hover:text-white"
              }`}
              style={{ transitionDelay: open ? `${i * 65}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="absolute bottom-8 text-[10px] tracking-[0.28em] uppercase text-white/40 font-light">
          Alberto Pranovi — Padua, 1996
        </p>
      </div>
    </>
  );
}
