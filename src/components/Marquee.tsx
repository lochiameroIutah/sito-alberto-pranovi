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
  "Branding",
  "Industrialization",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="py-4 md:py-5 border-y border-white/[0.04] overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-[clamp(0.7rem,1.5vw,1rem)] font-light tracking-[0.15em] uppercase text-dim whitespace-nowrap flex items-center"
          >
            {item}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-dim/50 mx-6 md:mx-10 shrink-0" />
          </span>
        ))}
        {doubled.map((item, i) => (
          <span
            key={`d-${i}`}
            className="text-[clamp(0.7rem,1.5vw,1rem)] font-light tracking-[0.15em] uppercase text-dim whitespace-nowrap flex items-center"
          >
            {item}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-dim/50 mx-6 md:mx-10 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
