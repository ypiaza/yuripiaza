import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <div className="w-full">
      {/* Ajuste: h-[80vh] para mobile pode ser pouco, usamos min-h para segurança */}
      <div className="relative flex items-center justify-center min-h-[70vh] md:h-[80vh] px-6 md:px-20">
        
        {/* max-w-4xl impede que o texto fique largo demais em monitores UltraWide */}
        <h2 className="text-white/50 text-3xl md:text-5xl lg:text-6xl leading-tight text-center md:text-left max-w-5xl tracking-tight">
          Crio interfaces <span className="text-white">bonitas</span> e <span className="text-white">escaláveis</span>, 
          <span className="block font-bold text-white mt-2">desenvolvedor frontend</span> 
          <span className="text-sm md:text-xl block mt-4 font-light tracking-[0.2em] uppercase text-cyan-400/80">
            Foco em desenvolvimento web
          </span>
        </h2>
      </div>

      {/* Seta indicadora */}
      <div className="w-full flex items-center justify-center pb-10">
        <IoIosArrowDown className="text-white/30 text-3xl md:text-4xl animate-bounce" />
      </div>
    </div>
  )
}

export default Hero