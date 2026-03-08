"use client";

const items = [
  "Product Design",
  "3D Modeling",
  "Rendering",
  "Visual Identity",
  "Accessories",
  "Metal Trims",
  "CGI",
  "Concept Development",
  "Industrialization",
  "Luxury Fashion",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="py-5 md:py-6 border-y border-overlay/[0.04] overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-[10px] md:text-[11px] font-light tracking-[0.2em] uppercase text-dim whitespace-nowrap flex items-center"
          >
            {item}
            <span className="inline-block w-1 h-1 rounded-full bg-dim/60 mx-8 md:mx-12 shrink-0" />
          </span>
        ))}
        {doubled.map((item, i) => (
          <span
            key={`d-${i}`}
            className="text-[10px] md:text-[11px] font-light tracking-[0.2em] uppercase text-dim whitespace-nowrap flex items-center"
          >
            {item}
            <span className="inline-block w-1 h-1 rounded-full bg-dim/60 mx-8 md:mx-12 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
