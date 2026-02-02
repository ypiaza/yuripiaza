import { skills } from "../data/skills"

const Skills = () => {
  return (
    /* h-96 removido para h-auto: em mobile o conteúdo pode precisar de mais altura que 384px */
    <div className="h-auto min-h-[24rem] flex flex-col items-start justify-center gap-12 px-6 md:px-20 py-20">
        <div className="w-full text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white/50">
              Minhas <span className="font-bold text-white">habilidades</span>
            </h3>
        </div>

        {/* Flex Wrap permite que os ícones desçam para a próxima linha no celular */}
        <div className="flex flex-wrap w-full items-center justify-center md:justify-between gap-8 md:gap-4">
            {skills.map((item) => (
              <div 
                key={item.skill} 
                className="group relative flex flex-col items-center"
              >
                <item.icon className="text-white/40 hover:text-white text-5xl md:text-6xl duration-300 transition-all hover:scale-110" />
                
                {/* Tooltip opcional com o nome da skill que aparece no hover */}
                <span className="absolute -bottom-8 scale-0 group-hover:scale-100 transition-all text-xs text-white bg-white/10 px-2 py-1 rounded-md backdrop-blur-sm">
                  {item.skill}
                </span>

                {/* Efeito de brilho de fundo no hover */}
                <div className="absolute inset-0 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            ))}
        </div>
    </div>
  )
}

export default Skills