import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const projects: Record<
  string,
  {
    title: string;
    category: string;
    year: string;
    description: string;
    images: string[];
  }
> = {
  "vnm-glasses": {
    title: "VNM Glasses",
    category: "Personal Project",
    year: "2024",
    description:
      "In this personal project, I wanted to create a pair of futuristic glasses with a biomechanical look. The design combines elements inspired by nature and reinterpreted through a technological lens, blending smooth surfaces with angular structures. The minimalist approach focuses on the essential shapes, free from unnecessary decorations, with an aesthetic that evokes futuristic or cyberpunk settings.",
    images: [
      "/projects/vnm-glasses/hero.jpg",
      "/projects/vnm-glasses/02.jpg",
      "/projects/vnm-glasses/03.jpg",
      "/projects/vnm-glasses/04.jpg",
    ],
  },
  gallery: {
    title: "Accessories Gallery",
    category: "Product Design",
    year: "2022–2024",
    description:
      "A selection of works made during my last three years as accessories designer/developer. Each of these items was developed with an industrialization perspective, taking into account the production process and the finishes with which they will be made.",
    images: [
      "/projects/gallery/hero.jpg",
      "/projects/gallery/02.jpg",
      "/projects/gallery/03.jpg",
      "/projects/gallery/04.jpg",
    ],
  },
  rendering: {
    title: "3D Rendering",
    category: "3D / CGI",
    year: "2020–2024",
    description:
      "General overview of a series of renders developed during last years. Each of these projects was modeled in Rhinoceros, rendered in Keyshot, and finally retouched in Photoshop.",
    images: [
      "/projects/rendering/hero.jpg",
      "/projects/rendering/02.jpg",
      "/projects/rendering/03.jpg",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <main className="pt-24">
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <Link
          href="/#work"
          className="text-xs tracking-[0.2em] uppercase text-[#666] font-light hover:text-white transition-colors inline-flex items-center gap-2 mb-16"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="rotate-180"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
          Back
        </Link>

        <div className="max-w-4xl">
          <p className="text-xs tracking-[0.2em] uppercase text-[#666] font-light mb-4">
            {project.category} — {project.year}
          </p>
          <h1 className="text-[clamp(2rem,5vw,5rem)] font-light tracking-[-0.03em] leading-[1]">
            {project.title}
          </h1>
          <p className="mt-8 text-lg font-extralight leading-relaxed text-[#999] max-w-2xl">
            {project.description}
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="space-y-4">
          {project.images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[16/10] bg-[#111] rounded-sm overflow-hidden"
            >
              <Image
                src={img}
                alt={`${project.title} - ${i + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
