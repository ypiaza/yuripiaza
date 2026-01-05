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

      <div className="grid grid-cols-2 gap-6 px-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-2 border-white p-10 rounded-3xl bg-white/90 w-full"
          >
            <div className="w-1/2">

              <img
                src={item.img}
                alt={item.project}
                className="w-full object-cover rounded-xl"
              />
            </div>

            <div className="w-1/2 flex flex-col justify-between h-full pl-6">
              <h4 className="mb-2 font-bold text-2xl text-black/80">
                {item.project}
              </h4>
              <p className="line-clamp-4">
                {item.description}
              </p>

              <button
                onClick={() => window.open(item.link, "_blank")}
                className="group flex items-center gap-1 border px-3 py-1 rounded-md transition hover:bg-zinc-950 hover:text-white cursor-pointer mt-4"
              >
                <span className="font-semibold">Acesse</span>
                <MdArrowOutward className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Projects
