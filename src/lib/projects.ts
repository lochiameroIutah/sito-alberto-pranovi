export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  heroImage: string;
  images: { src: string; alt: string; span?: "full" | "half"; label?: string }[];
}

export const projects: Project[] = [
  {
    slug: "vnm-glasses",
    title: "VNM Glasses",
    subtitle: "Futuristic Biomechanical Eyewear",
    category: "Personal Project",
    year: "2024",
    description:
      "In this personal project, I wanted to create a pair of futuristic glasses with a biomechanical look. The design combines elements inspired by nature and reinterpreted through a technological lens, blending smooth surfaces with angular structures. The minimalist approach focuses on the essential shapes, free from unnecessary decorations, with an aesthetic that evokes futuristic or cyberpunk settings.",
    heroImage: "/projects/vnm-glasses/rendering-front.png",
    images: [
      { src: "/projects/vnm-glasses/rendering-front.png",  alt: "VNM Glasses — rendering front view",          label: "Rendering",           span: "full" },
      { src: "/projects/vnm-glasses/3d-model.png",         alt: "VNM Glasses — 3D model, Rhinoceros",          label: "3D Model",            span: "half" },
      { src: "/projects/vnm-glasses/rendering-face-2.png", alt: "VNM Glasses — worn on face",                  label: "Rendering",           span: "half" },
      { src: "/projects/vnm-glasses/rendering-angle-1.png",alt: "VNM Glasses — angle view",                    label: "Rendering",           span: "full" },
      { src: "/projects/vnm-glasses/rhino-wip.jpg",        alt: "VNM Glasses — Rhino 7 wireframe WIP",         label: "Basic Shape",         span: "half" },
      { src: "/projects/vnm-glasses/alberto-wearing.jpg",  alt: "Alberto wearing the VNM Glasses",             label: "Prototype",           span: "half" },
      { src: "/projects/vnm-glasses/concept-1.png",        alt: "VNM Glasses — concept development",           label: "Concept Development", span: "full" },
      { src: "/projects/vnm-glasses/sketches.jpg",         alt: "VNM Glasses — early sketches",                label: "Basic Shape",         span: "half" },
      { src: "/projects/vnm-glasses/rendering-angle-2.png",alt: "VNM Glasses — final render",                  label: "Rendering",           span: "half" },
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
      { src: "/projects/flame-cap/hero.jpg",     alt: "Flame Cap — worn",                    label: "Worn",         span: "full" },
      { src: "/projects/flame-cap/detail-1.jpg", alt: "Flame cap — detail side view",         label: "Detail",       span: "half" },
      { src: "/projects/flame-cap/3d-print.jpg", alt: "Flame cap — 3D printed flame piece",   label: "3D Print",     span: "half" },
      { src: "/projects/flame-cap/detail-2.jpg", alt: "Flame cap — in car",                   label: "Detail",       span: "half" },
      { src: "/projects/flame-cap/detail-3.jpg", alt: "Flame cap — close up",                 label: "Detail",       span: "half" },
      { src: "/projects/flame-cap/detail-4.jpg", alt: "Flame cap — alternate angle",          label: "Detail",       span: "full" },
    ],
  },
  {
    slug: "gallery",
    title: "Accessories Gallery",
    subtitle: "Industrial Metal Trims — Promistamp",
    category: "Product Design",
    year: "2022–2024",
    description:
      "A selection of works made during three years as accessories designer/developer at Promistamp. Each of these items was developed with an industrialization perspective, taking into account the production process and the finishes. From 3D drawing and technical sheet to brass prototype and final product.",
    heroImage: "/projects/gallery/ring-3d.png",
    images: [
      { src: "/projects/gallery/ring-3d.png",           alt: "Signet ring — 3D drawing",                    label: "3D Drawing",        span: "full" },
      { src: "/projects/gallery/ring-hands.png",         alt: "Signet ring — brass galvanized prototypes",   label: "Brass Prototype",   span: "half" },
      { src: "/projects/gallery/ring-final.png",         alt: "Signet ring — final products",                label: "Final Product",     span: "half" },
      { src: "/projects/gallery/hairclip-3d.png",        alt: "Hairclip — 3D drawing",                       label: "3D Drawing",        span: "half" },
      { src: "/projects/gallery/hairclip-prototype.png", alt: "Hairclip — brass prototype",                  label: "Brass Prototype",   span: "half" },
      { src: "/projects/gallery/hairclip-final.png",     alt: "Hairclip — final product",                    label: "Final Product",     span: "full" },
      { src: "/projects/gallery/buckle-3d.png",          alt: "Buckle — 3D drawing & technical sheet",       label: "3D Drawing",        span: "half" },
      { src: "/projects/gallery/buckle-final.png",       alt: "Buckle — final product",                      label: "Final Product",     span: "half" },
      { src: "/projects/gallery/closure-3d.png",         alt: "Sliding closure — 3D drawing",                label: "3D Drawing",        span: "half" },
      { src: "/projects/gallery/closure-prototype.png",  alt: "Sliding closure — brass prototype",           label: "Brass Prototype",   span: "half" },
    ],
  },
  {
    slug: "rendering",
    title: "3D Rendering",
    subtitle: "Product Visualization & CGI",
    category: "3D / CGI",
    year: "2020–2024",
    description:
      "General overview of a series of renders developed during the last years. Each of these projects was modeled in Rhinoceros, rendered in Keyshot, and finally retouched in Photoshop. From industrial products to fashion proposals.",
    heroImage: "/projects/rendering/tribal-tee.png",
    images: [
      { src: "/projects/rendering/tribal-tee.png",       alt: "Tribal tee proposal for MISBHV",        label: "Tribal Tee — MISBHV",            span: "full" },
      { src: "/projects/rendering/outdoor-camera.png",   alt: "Outdoor camera — render",               label: "Outdoor Camera",                 span: "half" },
      { src: "/projects/rendering/outdoor-camera-2.png", alt: "Outdoor camera — detail",               label: "Outdoor Camera",                 span: "half" },
      { src: "/projects/rendering/crumb-vacuum.png",     alt: "Crumb vacuum with charging dock",       label: "Crumb Vacuum with Charging Dock",span: "full" },
      { src: "/projects/rendering/robot-vacuum.png",     alt: "Robot vacuum cleaner",                  label: "Robot Vacuum Cleaner",           span: "half" },
      { src: "/projects/rendering/flashlight.png",       alt: "Flashlight — render",                   label: "Flashlight",                     span: "half" },
    ],
  },
];
