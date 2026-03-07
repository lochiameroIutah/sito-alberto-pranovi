"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX - 4}px`;
      dot.style.top = `${mouseY - 4}px`;
    };

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      outline.style.left = `${outlineX - 20}px`;
      outline.style.top = `${outlineY - 20}px`;
      requestAnimationFrame(animateOutline);
    };

    const handleHover = () => {
      outline.style.width = "60px";
      outline.style.height = "60px";
      outline.style.left = `${outlineX - 30}px`;
      outline.style.top = `${outlineY - 30}px`;
    };

    const handleLeave = () => {
      outline.style.width = "40px";
      outline.style.height = "40px";
    };

    document.addEventListener("mousemove", moveCursor);
    requestAnimationFrame(animateOutline);

    const interactives = document.querySelectorAll("a, button, .magnetic-btn");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={outlineRef} className="cursor-outline hidden md:block" />
    </>
  );
}
