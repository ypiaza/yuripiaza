import { projects } from "../data/projects"
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <div className="h-full">
      <div className="px-20 py-20">
        <h2 className="text-3xl font-bold text-white/50">
          Um pouco dos meus <span className="text-white">projetos</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 place-items-center gap-6">
        {projects.map((item) => (
          <div key={item.id} className="border-2 boder-white p-10 rounded-3xl bg-white/90">
            <h4 className="mb-2 font-bold text-2xl text-black/80">{item.project}</h4>
            <img src={item.img} className="w-[50%]"/>
            <button
              onClick={() => window.open(item.link, "_blank")}
              className="group flex items-center gap-1 border px-3 py-1 rounded-md transition hover:bg-zinc-950 hover:text-white cursor-pointer">
              <span className="font-semibold">Acesse</span>
              <MdArrowOutward className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
