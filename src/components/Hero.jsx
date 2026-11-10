import { GithubIcon, LinkedinIcon, ArrowRightIcon } from "./Icons";

const Hero = () => {
  const techPills = [
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Tailwind CSS",
    "Javascript",
    "Git",
  ];

  return (
    <section id="inicio" className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden bg-zinc-950">

      <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2">
          <span className="text-xs tracking-widest uppercase font-mono text-zinc-400">
            Olá, eu sou Yuri Piaza
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Desenvolvedor <span className="text-zinc-400">Full Stack</span>
        </h1>

        {/* Subtitle / Pitch */}
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
          Construo aplicações web utilizando React, Python e TypeScript, integradas a APIs REST em FastAPI e Supabase. Foco em arquitetura de componentes, gerenciamento de estado e entrega de produtos prontos para produção.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-zinc-700 hover:border-zinc-600 bg-zinc-100 hover:bg-white text-zinc-950 font-medium rounded-md transition-all duration-200 text-sm shadow-sm"
          >
            Ver Projetos
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900 text-zinc-300 hover:text-white rounded-md transition-all duration-200 text-sm"
          >
            Fale Comigo
          </a>

          <a
            href="https://github.com/ypiaza"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Yuri Piaza"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900 text-zinc-300 hover:text-white rounded-md transition-all duration-200 text-sm"
          >
            <GithubIcon className="w-4 h-4 text-zinc-400" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/yuripiaza"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Yuri Piaza"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900 text-zinc-300 hover:text-white rounded-md transition-all duration-200 text-sm"
          >
            <LinkedinIcon className="w-4 h-4 text-zinc-400" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Tech Stack Pills Marquee */}
        <div className="pt-10 flex flex-col items-center gap-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
            Stack Principal & Tecnologias
          </span>
          <div className="flex flex-wrap justify-center gap-2 max-w-xl">
            {techPills.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-zinc-400 bg-zinc-900/70 border border-zinc-800/80 px-2.5 py-1 rounded-md hover:border-zinc-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
