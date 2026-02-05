import { skills } from "../data/skills";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const targetRef = useRef(null);
  
  // Captura o progresso do scroll apenas nesta seção
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Começa quando o topo da seção entra na tela
  });

  // Mapeia o scroll (0 a 1) para um movimento horizontal (-200px a 200px)
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-30%"]);

  return (
    <section 
      ref={targetRef} 
      className="h-full overflow-hidden bg-transparent"
    >
      <div className="px-6 md:px-20 items-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white/50">
          Minhas <span className="text-white">habilidades</span>
        </h3>
      </div>

      {/* Este é o container que vai se mover lateralmente */}
      <motion.div 
        style={{ x }} 
        className="flex whitespace-nowrap gap-5 md:gap-10 px-10 py-20"
      >
        {/* Renderizamos as skills duas vezes para garantir que preencha a tela no movimento */}
        {[...skills, ...skills].map((item, index) => (
          <div 
            key={index} 
            className="group flex flex-col items-center justify-center min-w-[100px]"
          >
            <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group-hover:border-white/50 transition-colors duration-500">
              <item.icon className="text-3xl md:text-7xl text-white/40 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
              
              {/* Brilho neon no hover */}
              <div className="absolute inset-0 bg-white/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
            
            <span key={index} className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">
              {item.skill}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;  