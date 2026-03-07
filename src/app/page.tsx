import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <ProjectsGrid />
      <About />
      <Marquee />
      <Footer />
    </main>
  );
}
