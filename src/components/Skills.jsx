import { CodeIcon, ServerIcon, TerminalIcon, LayersIcon } from "./Icons";

const Skills = () => {
  const skillCategories = [
    {
      title: "Desenvolvimento Frontend",
      description: "Construção de interfaces modernas, interativas, acessíveis e de alto desempenho.",
      icon: <CodeIcon className="w-5 h-5 text-zinc-300" />,
      skills: [
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5 / Semantic Web",
        "CSS3 / Flexbox / Grid",
        "Vite",
        "Responsive Design",
      ]
    },
    {
      title: "Backend & Bancos de Dados",
      description: "Serviços assíncronos, criação de APIs RESTful e persistência de dados estruturada.",
      icon: <ServerIcon className="w-5 h-5 text-zinc-300" />,
      skills: [
        "Python",
        "FastAPI",
        "REST APIs",
        "Pydantic"
      ]
    },
    {
      title: "Ferramentas",
      description: "Ambiente de desenvolvimento ágil, controle de versão e entrega de software.",
      icon: <TerminalIcon className="w-5 h-5 text-zinc-300" />,
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Linux / Bash",
        "Postman / Insomnia",
        "VS Code",
        "Vercel",
        "npm",
      ]
    },
    {
      title: "Boas Práticas & Metodologias",
      description: "Engenharia de software focada em manutenibilidade, escalabilidade e qualidade.",
      icon: <LayersIcon className="w-5 h-5 text-zinc-300" />,
      skills: [
        "Clean Code",
        "UI/UX",
        "Otimização de Performance"
      ]
    }
  ];

  return (
    <section id="habilidades" className="w-full flex flex-col items-center justify-center py-24 px-4 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-5xl w-full flex flex-col gap-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Tecnologias & Ferramentas
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
            Linguagens, frameworks e ecossistemas que aplico no desenvolvimento de soluções completas de ponta a ponta.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-6">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono text-zinc-300 bg-zinc-800/60 hover:bg-zinc-800 px-2.5 py-1 rounded border border-zinc-700/40 hover:border-zinc-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

