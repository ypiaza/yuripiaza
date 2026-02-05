import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Container Principal */}
      <div className="relative flex flex-col items-center justify-center min-h-[85vh] md:h-[90vh] px-6 md:px-20">
        
        {/* Texto com Animação de Entrada */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl w-full text-center md:text-left"
        >
          {/* Subtítulo Técnico (Tag) */}
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-cyan-400 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-4 block"
          >
            Foco em Desenvolvimento Web
          </motion.span>

          {/* Headline Principal com Hierarquia Refinada */}
          <h1 className="text-white/40 text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tighter">
            Transformando ideias em <br />
            <span className="text-white font-bold inline-block hover:text-cyan-400 transition-colors duration-500">
              experiências digitais
            </span> 
            <span className="text-white/40"> imersivas.</span>
          </h1>

          {/* Descrição Curta / Cargo */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-white/60 text-lg md:text-2xl mt-8 max-w-2xl font-light"
          >
            Olá, eu sou o <span className="text-white font-medium">Yuri Piaza</span>. 
            Desenvolvedor Frontend especializado em construir interfaces <span className="italic">high-end</span> e sistemas escaláveis.
          </motion.p>
        </motion.div>
      </div>

      {/* Seta indicadora com Fade In tardio */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 w-full flex flex-col items-center justify-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Scroll</span>
        <IoIosArrowDown className="text-white/20 text-2xl animate-bounce" />
      </motion.div>

    </div>
  )
}

export default Hero;