"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    slug: "vnm-glasses",
    title: "VNM Glasses",
    category: "Personal Project",
    year: "2024",
    image: "/projects/vnm-glasses/hero.jpg",
    description: "Futuristic biomechanical eyewear concept",
  },
  {
    slug: "gallery",
    title: "Accessories Gallery",
    category: "Product Design",
    year: "2022–2024",
    image: "/projects/gallery/hero.jpg",
    description: "Metal accessories with industrialization focus",
  },
  {
    slug: "rendering",
    title: "3D Rendering",
    category: "3D / CGI",
    year: "2020–2024",
    image: "/projects/rendering/hero.jpg",
    description: "Product visualization & concept renders",
  },
];

export function ProjectsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".project-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-24">
      <div className="flex items-baseline justify-between mb-16">
        <h2 className="text-xs tracking-[0.2em] uppercase text-[#666] font-light">
          Selected Work
        </h2>
        <span className="text-xs tracking-[0.15em] text-[#666] font-light">
          ({projects.length})
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/project/${project.slug}`}
            className="project-item opacity-0 translate-y-12 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="project-card aspect-[4/3] relative bg-[#111] rounded-sm overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-[#999] mb-2 font-light">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-light tracking-[-0.02em]">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs tracking-[0.15em] text-[#999] font-light">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
