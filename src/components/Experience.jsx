import { ServerIcon, GraduationCapIcon, CodeIcon } from "./Icons";

const Experience = () => {
  const timeline = [
    {
      period: "2026 — Presente",
      role: "Expansão Backend & Python (Full Stack)",
      organization: "Projetos Práticos & Ecossistema Python",
      type: "backend",
      description: "Ampliação contínua do escopo técnico para o desenvolvimento back-end, focando na criação de serviços robustos, APIs RESTful e integração com bancos de dados relacionais.",
      highlights: [
        "Estudo e aplicação prática de Python orientado a objetos e desenvolvimento de APIs com FastAPI.",
        "Desenvolvimento do PingProject: plataforma full-stack integrando interface reativa em React com back-end em FastAPI e persistência no Supabase/PostgreSQL.",
        "Compreensão de arquitetura de serviços desacoplados, tratamento assíncrono e modelagem de dados relacionais."
      ]
    },
    {
      period: "07/2026 — 07/2028",
      role: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      organization: "Ensino Superior (Graduação)",
      type: "education",
      description: "Formação superior direcionada à consolidação dos fundamentos da ciência da computação, engenharia de software e análise sistêmica de soluções tecnológicas.",
      highlights: [
        "Lógica de programação, Algoritmos fundamentais e Estruturas de Dados.",
        "Modelagem, normalização e manipulação de Bancos de Dados Relacionais (SQL).",
        "Engenharia de requisitos, boas práticas de arquitetura e metodologias ágeis de desenvolvimento."
      ]
    },
    {
      period: "2023 — Presente",
      role: "Desenvolvimento Front-End & Interfaces Web",
      organization: "Estudo Contínuo & Projetos no GitHub",
      type: "frontend",
      description: "Início da jornada na programação em 2023 focada no desenvolvimento web front-end, evoluindo dos fundamentos básicos para a construção de SPAs modernas, responsivas e de alta fidelidade visual.",
      highlights: [
        "Sólido domínio de React, TypeScript, JavaScript moderno (ES6+) e Tailwind CSS, comprovado em mais de 20 repositórios públicos no GitHub.",
        "Desenvolvimento de interfaces complexas com gerenciamento de estado e alta fidelidade visual, como o Clone Spotify Desktop.",
        "Criação de aplicações e protótipos funcionais para demandas reais, incluindo sistemas de pedidos, controle de estoque e landing pages comerciais."
      ]
    }
  ];

  return (
    <section id="experiencia" className="w-full flex flex-col items-center justify-center py-24 px-4 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-5xl w-full flex flex-col gap-14">
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experiência & Formação
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
            Uma visão transparente e cronológica da minha evolução técnica, formação acadêmica e foco de estudos em desenvolvimento de software.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-12 max-w-3xl mx-auto w-full">
          {timeline.map((item, index) => (
            <div key={index} className="group relative flex flex-col gap-3">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-zinc-400 transition-colors flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-white transition-colors" />
              </div>

              {/* Header Info */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-300 border border-zinc-800 bg-zinc-900/80 px-2.5 py-0.5 rounded">
                  {item.period}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  • {item.organization}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex items-center gap-2 pt-1">
                {item.type === "backend" && <ServerIcon className="w-4 h-4 text-zinc-400" />}
                {item.type === "education" && <GraduationCapIcon className="w-4 h-4 text-zinc-400" />}
                {item.type === "frontend" && <CodeIcon className="w-4 h-4 text-zinc-400" />}
                <h3 className="text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors">
                  {item.role}
                </h3>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>

              {/* Highlight Bullet Points */}
              <ul className="space-y-1.5 pt-2">
                {item.highlights.map((hl, hIdx) => (
                  <li key={hIdx} className="text-xs sm:text-sm text-zinc-400 flex items-start gap-2">
                    <span className="text-zinc-600 mt-1">▸</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
