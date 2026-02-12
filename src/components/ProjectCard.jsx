import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ item }) => {
  const cardRef = useRef(null);
  
  // Lógica de Scroll individual para o Parallax
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Movimento vertical (Parallax)
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      ref={cardRef}
      style={{ y: smoothY }}
      className="flex flex-col md:flex-row items-center justify-between border border-white/10 p-6 md:p-8 rounded-[2.5rem] bg-white/3 backdrop-blur-2xl w-full hover:border-cyan-500/50 transition-colors duration-700 shadow-2xl group relative"
    >
      {/* Imagem do Projeto */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0 overflow-hidden rounded-2xl border border-white/5">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          src={item.img}
          alt={item.project}
          className="w-full aspect-video object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* Informações do Projeto */}
      <div className="w-full md:w-1/2 flex flex-col justify-between h-full md:pl-8 text-center md:text-left">
        <div>
          <h4 className="mb-2 font-bold text-2xl md:text-3xl text-white group-hover:text-cyan-400 transition-colors">
            {item.project}
          </h4>
          <p className="line-clamp-3 text-sm md:text-base text-gray-400 font-light leading-relaxed">
            {item.description}
          </p>
        </div>

        <button
          onClick={() => window.open(item.link, "_blank")}
          className="group/btn flex items-center justify-center gap-2 border border-white/10 bg-white/5 px-6 py-3 rounded-2xl transition-all hover:bg-cyan-500 hover:text-black cursor-pointer mt-8 w-full md:w-fit"
        >
          <span className="font-bold text-sm uppercase tracking-wider">Acesse</span>
          <MdArrowOutward className="text-xl transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;