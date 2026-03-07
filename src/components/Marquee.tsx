"use client";

export function Marquee() {
  const items = [
    "Product Design",
    "3D Modeling",
    "Rendering",
    "Visual Identity",
    "Accessories",
    "Branding",
    "CGI",
    "Concept Development",
  ];

  return (
    <div className="py-12 border-t border-b border-[#1a1a1a] overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="text-[clamp(1rem,2vw,1.5rem)] font-extralight tracking-[0.1em] uppercase text-[#444] mx-8 whitespace-nowrap"
            >
              {item}
              <span className="inline-block mx-8 text-[#333]">&mdash;</span>
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden>
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="text-[clamp(1rem,2vw,1.5rem)] font-extralight tracking-[0.1em] uppercase text-[#444] mx-8 whitespace-nowrap"
            >
              {item}
              <span className="inline-block mx-8 text-[#333]">&mdash;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
