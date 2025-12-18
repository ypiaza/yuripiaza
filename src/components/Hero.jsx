import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <div>
      <div className="relative text-2xl flex items-center justify-center h-[80vh]">
        <h2 className="text-white/50">
          Crio interfaces bonitas e escaláveis, <span className="font-bold text-white">desenvolvedor frontend</span> com foco em desenvolvimento web!
        </h2>
      </div>

      <div className="w-full flex items-center justify-center">
        <IoIosArrowDown className="text-white/50 text-4xl animate-bounce" />
      </div>
    </div>
  )
}

export default Hero
