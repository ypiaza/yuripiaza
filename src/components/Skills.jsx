import { skills } from "../data/skills";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const targetRef = useRef(null);
  const constraintsRef = useRef(null); // Ref para limitar o arrasto
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Mantemos o parallax sutil (ajuste a porcentagem se quiser mais movimento)
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section 
      ref={targetRef} 
      className="py-20 overflow-hidden bg-transparent flex flex-col items-center justify-center"
    >
      <div className="w-full text-center mb-16 px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white/50">
          Minhas <span className="text-white">habilidades</span>
        </h3>
        <p className="text-[10px] uppercase tracking-widest text-white/20 mt-2">
          Arraste para explorar
        </p>
      </div>

      {/* Área de restrição do drag */}
      <div ref={constraintsRef} className="w-full cursor-grab active:cursor-grabbing">
        <motion.div 
          style={{ x }} 
          drag="x" // Permite arrastar apenas no eixo X
          dragConstraints={constraintsRef} // Impede que os ícones sumam da tela
          dragElastic={0.8} // Adiciona um efeito de "elástico" nas bordas
          className="flex items-center justify-center gap-6 md:gap-12 px-10 md:px-20"
        >
          {skills.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col items-center justify-center pointer-events-none" 
              /* pointer-events-none no container interno garante que o drag do pai funcione bem */
            >
              <div className="relative p-6 md:p-8 rounded-3xl bg-white/3 border border-white/10 backdrop-blur-xl group-hover:border-white/50 transition-all duration-500 shadow-2xl pointer-events-auto">
                <item.icon className="text-5xl md:text-6xl text-white/40 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                
                {/* Efeito Glow */}
                <div className="absolute inset-0 bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
              
              <span className="mt-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/20 group-hover:text-white transition-colors">
                {item.skill}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;