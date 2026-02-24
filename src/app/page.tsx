import Hero from "../../components/Hero";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";
import Stack from "../../components/Stack";

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero />

      <section id="projects" className="space-y-8">
        <h2 className="text-white font-semibold text-lg flex items-center gap-2">
          <span className="w-8 h-[1px] bg-zinc-800"></span>
          Selected Works
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>

      <Stack />

      <section id="contact" className="py-12 bg-zinc-900/30 rounded-2xl p-8 border border-zinc-900">
        <h3 className="text-white font-medium mb-2">Want to build something?</h3>
        <p className="text-sm mb-6">Currently open for collab on Rust or React projects.</p>
        <a
          href="mailto:nathanoyewole7@gmail.com"
          className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-zinc-200 transition-all"
        >
          Get in touch
        </a>
      </section>
    </div>
  );
}
