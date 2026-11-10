import { useState, useEffect } from "react";
import { GithubIcon, ArrowUpRightIcon, CloseIcon } from "./Icons";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["Todos", "Full Stack", "Frontend", "Backend"];

  const projectsList = [
    {
      title: "PingProject",
      category: "Full Stack",
      description: "Plataforma de rede social interativa com feed de publicações em tempo real, sistema de comentários encadeados e contadores concorrentes de interações.",
      details: "Aplicação full-stack desenvolvida para simular a dinâmica de uma rede social moderna. Utiliza React no front-end para renderização reativa de feeds com ordenação reversa e um back-end em FastAPI integrado ao Supabase para gerenciamento seguro de persistência e interações.",
      architecture: "React + TypeScript + Python FastAPI | REST API | Banco Relacional via Supabase (Transaction Pooler)",
      features: [
        "Feed de publicações dinâmico com ordenação cronológica reversa",
        "Sistema interativo de comentários encadeados por post",
        "Contador de votos (upvotes) com atualização concorrente de estado",
        "Arquitetura de API RESTful desacoplada entre front-end e back-end"
      ],
      tags: ["React", "TypeScript", "FastAPI", "Python", "Supabase", "Tailwind CSS"],
      github: "https://github.com/ypiaza/PingProject",
      demo: "https://pingsocial-project.vercel.app/",
      featured: true,
    },
    {
      title: "Clone Spotify (Desktop)",
      category: "Frontend",
      description: "Interface web de reprodução e exploração musical inspirada no Spotify, construída com foco na fidelidade visual e na experiência de navegação.",
      details: "Desenvolvido em TypeScript e React, este projeto replica o layout dinâmico de biblioteca, barra de controle de mídia inferior e navegação fluida por playlists, priorizando componentização limpa e estilização moderna.",
      architecture: "React + TypeScript + Gerenciamento de Estado de Mídia | Componentização modular | Tailwind CSS",
      features: [
        "Interface fiel à experiência de desktop do player",
        "Barra de reprodução interativa com controle de estado",
        "Navegação estruturada por seções e galerias de álbuns",
        "Tipagem estrita de dados e componentes reutilizáveis"
      ],
      tags: ["TypeScript", "React", "Tailwind CSS"],
      github: "https://github.com/ypiaza/clonespotify",
      demo: "https://clonespotify-nine.vercel.app/",
      featured: true,
    },
    {
      title: "Portfólio Minimalista",
      category: "Frontend",
      description: "Landing page pessoal com design system limpo, animações fluidas e suporte a temas escuros focada em conversão para recrutadores de tecnologia.",
      details: "Interface web de alta performance construída com React, Tailwind CSS e Vite. Projetada com foco em experiência do usuário, tipografia monoespaçada harmônica, acessibilidade e carregamento instantâneo.",
      architecture: "React + Tailwind CSS + Vite",
      features: [
        "Design responsivo",
        "Formulário e botões de ação para contato direto",
        "Zero dependências desnecessárias para máxima velocidade"
      ],
      tags: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/ypiaza/piaza.dev",
      demo: "https://piaza-dev.vercel.app/",
      featured: true,
    },
  ];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const filteredProjects = activeFilter === "Todos" 
    ? projectsList 
    : projectsList.filter(p => p.category === activeFilter);

  return (
    <section id="projetos" className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-5xl w-full flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-xs tracking-widest uppercase font-mono text-zinc-400 border border-zinc-800 px-3 py-1 rounded-full bg-zinc-900/50 backdrop-blur-sm">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projetos em Destaque
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
            Alguns dos principais sistemas e aplicações que desenvolvi aplicando arquitetura limpa, usabilidade e boas práticas de engenharia de software.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-zinc-100 text-zinc-950 border-zinc-100 font-semibold"
                    : "bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between p-6 bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                      Destaque
                    </span>
                  )}
                </div>

                <h3 
                  onClick={() => setSelectedProject(project)}
                  className="text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-zinc-400 hover:text-white text-left pt-1 cursor-pointer underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400 transition-colors"
                >
                  Detalhes da arquitetura →
                </button>
              </div>

              <div className="flex flex-col gap-6 pt-6">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-mono text-zinc-400 bg-zinc-800/60 px-2.5 py-1 rounded border border-zinc-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/80">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    GitHub →
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1.5"
                  >
                    Live Demo
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                    {selectedProject.category}
                  </span>
                  {selectedProject.featured && (
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                      Destaque
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar modal"
                className="p-1.5 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 rounded-lg transition-colors cursor-pointer"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Architecture Summary */}
            <div className="p-4 bg-zinc-900/50 border border-zinc-800/80 rounded-xl space-y-1">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Arquitetura</span>
              <p className="text-xs sm:text-sm font-mono text-zinc-300">
                {selectedProject.architecture}
              </p>
            </div>

            {/* Detailed Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Sobre o Projeto</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedProject.details}
              </p>
            </div>

            {/* Key Features List */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Recursos & Implementações</h4>
              <ul className="space-y-1.5">
                {selectedProject.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-2 pt-2 border-t border-zinc-900">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Tecnologias Utilizadas</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons in Modal */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-zinc-800">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white rounded-lg text-xs font-medium transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                Ver Código no GitHub
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-700 hover:border-zinc-600 bg-zinc-100 hover:bg-white text-zinc-950 font-medium rounded-lg text-xs transition-all shadow-sm"
              >
                Acessar Demonstração
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
