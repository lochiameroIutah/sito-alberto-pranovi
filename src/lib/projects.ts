export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  heroImage: string;
  images: { src: string; alt: string; span?: "full" | "half" }[];
}

export const projects: Project[] = [
  {
    slug: "vnm-glasses",
    title: "VNM Glasses",
    subtitle: "Futuristic Biomechanical Eyewear",
    category: "Personal Project",
    year: "2024",
    description:
      "A pair of futuristic glasses with a biomechanical look. The design combines elements inspired by nature and reinterpreted through a technological lens, blending smooth surfaces with angular structures. The minimalist approach focuses on the essential shapes, free from unnecessary decorations, with an aesthetic that evokes futuristic or cyberpunk settings.",
    heroImage: "/projects/vnm-glasses/rendering-front.png",
    images: [
      { src: "/projects/vnm-glasses/rendering-front.png", alt: "VNM Glasses rendering front view", span: "full" },
      { src: "/projects/vnm-glasses/3d-model.png", alt: "VNM Glasses 3D model", span: "half" },
      { src: "/projects/vnm-glasses/rendering-face-2.png", alt: "VNM Glasses on face", span: "half" },
      { src: "/projects/vnm-glasses/rendering-angle-1.png", alt: "VNM Glasses angle view", span: "full" },
      { src: "/projects/vnm-glasses/rhino-wip.jpg", alt: "VNM Glasses Rhino 7 wireframe", span: "half" },
      { src: "/projects/vnm-glasses/alberto-wearing.jpg", alt: "Alberto wearing the glasses", span: "half" },
      { src: "/projects/vnm-glasses/concept-1.png", alt: "VNM Glasses concept development", span: "full" },
      { src: "/projects/vnm-glasses/sketches.jpg", alt: "VNM Glasses early sketches", span: "half" },
      { src: "/projects/vnm-glasses/rendering-angle-2.png", alt: "VNM Glasses final render", span: "half" },
    ],
  },
  {
    slug: "flame-cap",
    title: "Flame Cap",
    subtitle: "3D Printed Flame Accessories",
    category: "Personal Project",
    year: "2025",
    description:
      "Custom 3D-printed flame decorations for a '47 MVP New York Yankees cap. Tribal-inspired flame shapes designed in 3D software, printed and hand-finished, merging street culture with product design craftsmanship.",
    heroImage: "/projects/flame-cap/hero.jpg",
    images: [
      { src: "/projects/flame-cap/hero.jpg", alt: "Flame Cap worn", span: "full" },
      { src: "/projects/flame-cap/detail-1.jpg", alt: "Flame cap details", span: "half" },
      { src: "/projects/flame-cap/3d-print.jpg", alt: "3D printed flame piece", span: "half" },
      { src: "/projects/flame-cap/detail-2.jpg", alt: "Flame cap in car", span: "half" },
      { src: "/projects/flame-cap/detail-3.jpg", alt: "Flame cap close up", span: "half" },
      { src: "/projects/flame-cap/detail-4.jpg", alt: "Flame cap alternate angle", span: "full" },
    ],
  },
  {
    slug: "gallery",
    title: "Accessories Gallery",
    subtitle: "Industrial Metal Trims",
    category: "Product Design — Promistamp",
    year: "2022–2024",
    description:
      "A selection of works made during three years as accessories designer/developer at Promistamp. Each item was developed with an industrialization perspective, taking into account the production process and the finishes.",
    heroImage: "/projects/gallery/hairclip-prototype.png",
    images: [
      { src: "/projects/gallery/hairclip-3d.png", alt: "Hairclip 3D drawing", span: "half" },
      { src: "/projects/gallery/hairclip-prototype.png", alt: "Hairclip brass prototype", span: "half" },
      { src: "/projects/gallery/hairclip-final.png", alt: "Hairclip final product", span: "full" },
      { src: "/projects/gallery/ring-3d.png", alt: "Signet ring 3D drawing", span: "half" },
      { src: "/projects/gallery/ring-prototype.png", alt: "Signet ring prototype", span: "half" },
      { src: "/projects/gallery/closure-3d.png", alt: "Sliding closure 3D", span: "half" },
      { src: "/projects/gallery/closure-prototype.png", alt: "Sliding closure prototype", span: "half" },
      { src: "/projects/gallery/buckle-3d.png", alt: "Buckle 3D drawing", span: "half" },
      { src: "/projects/gallery/buckle-final.png", alt: "Buckle final product", span: "half" },
    ],
  },
  {
    slug: "rendering",
    title: "3D Rendering",
    subtitle: "Product Visualization & CGI",
    category: "3D / CGI",
    year: "2020–2024",
    description:
      "A series of renders developed over the years. Each project was modeled in Rhinoceros, rendered in Keyshot, and retouched in Photoshop. From industrial products to fashion proposals.",
    heroImage: "/projects/rendering/tribal-tee.png",
    images: [
      { src: "/projects/rendering/tribal-tee.png", alt: "Tribal tee proposal for MISBHV", span: "full" },
      { src: "/projects/rendering/outdoor-camera.png", alt: "Outdoor camera render", span: "half" },
      { src: "/projects/rendering/outdoor-camera-2.png", alt: "Outdoor camera detail", span: "half" },
      { src: "/projects/rendering/crumb-vacuum.png", alt: "Crumb vacuum with charging dock", span: "full" },
      { src: "/projects/rendering/robot-vacuum.png", alt: "Robot vacuum cleaner", span: "half" },
      { src: "/projects/rendering/flashlight.png", alt: "Flashlight render", span: "half" },
    ],
  },
];
