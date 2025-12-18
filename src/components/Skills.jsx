import { skills } from "../data/skills"


const Skills = () => {

  return (
    <div className="h-96 flex flex-col items-start justify-evenly px-20">
        <div className="items-start">
            <h3 className="text-3xl font-bold text-white/50">Minhas <span className="font-bold text-white">habilidades</span></h3>
        </div>
        <div className="flex w-full items-center justify-evenly">
            {skills.map((item) => (
              <div id={item.skill}>
                <item.icon className="text-white/50 hover:text-white text-5xl duration-300 transition-all" />
              </div>
            ))}
        </div>
    </div>
  )
}

export default Skills
