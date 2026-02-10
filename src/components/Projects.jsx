import { projects } from "../data/projects"
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <div className="h-full w-full">
      {/* Título Responsivo: px-20 cai para px-6 no mobile */}
      <div className="px-6 md:px-20 py-10 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white/50 text-center md:text-left">
          Um pouco dos meus <span className="text-white">projetos</span>
        </h2>
      </div>

      {/* Grid Responsivo: 1 coluna no mobile, 2 no desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-10 pb-20">
        {projects.map((item) => (
          <div
            key={item.id}
            /* Ajuste de vidro: bg-white/10 e backdrop-blur */
            className="flex flex-col md:flex-row items-center justify-between border border-white/20 p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-md w-full hover:border-white/40 transition-all duration-500 shadow-xl"
          >
            {/* Imagem: ocupa 100% no mobile e 50% no desktop */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={item.img}
                alt={item.project}
                className="w-full aspect-video object-cover rounded-2xl grayscale-[50%] hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Texto: alinhamento central no mobile, esquerda no desktop */}
            <div className="w-full md:w-1/2 flex flex-col justify-between h-full md:pl-8 text-center md:text-left">
              <div>
                <h4 className="mb-2 font-bold text-xl md:text-2xl text-white">
                  {item.project}
                </h4>
                <p className="line-clamp-3 text-sm md:text-base text-gray-300">
                  {item.description}
                </p>
              </div>

              <button
                onClick={() => window.open(item.link, "_blank")}
                className="group flex items-center justify-center gap-2 border border-white/20 px-4 py-2 rounded-xl transition-all hover:bg-white/20 text-white/50 hover:text-white cursor-pointer mt-6 w-full md:w-fit"
              >
                <span className="font-semibold">Acesse</span>
                <MdArrowOutward className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects