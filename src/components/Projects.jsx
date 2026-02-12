import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard"; // Importando o novo componente

const Projects = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-16 min-h-screen">
      
      {/* Título Sticky (Fixo) */}
      <div className="sticky top-24 z-30 mb-24 pointer-events-none flex items-center justify-center">
        <h2 className="text-4xl md:text-3xl font-bold text-white">
          Projetos <span className="text-white/60 font-bold text-2xl md:text-3xl">Destaques</span>
        </h2> 
      </div>

      {/* Grid de Cards que chamam o componente individual */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 relative z-10">
        {projects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;