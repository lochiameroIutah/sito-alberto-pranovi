"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-[#0a0a0a]/80" : ""
        }`}
      >
        <Link
          href="/"
          className="text-sm tracking-[0.2em] uppercase font-light hover:opacity-60 transition-opacity"
        >
          Alberto Pranovi
        </Link>

        <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.15em] uppercase">
          <a
            href="#work"
            className="hover:opacity-60 transition-opacity font-light"
          >
            Work
          </a>
          <a
            href="#about"
            className="hover:opacity-60 transition-opacity font-light"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:opacity-60 transition-opacity font-light"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 group"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-[1px] bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {["Work", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-4xl font-light tracking-[0.1em] uppercase hover:opacity-60 transition-opacity"
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}
