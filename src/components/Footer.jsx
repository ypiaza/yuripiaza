import { contacts } from "../data/contacts"

const Footer = () => {
  return (
    /* h-auto para não cortar o conteúdo no mobile e border-t sutil para separar do resto */
    <footer className="h-auto min-h-[9rem] flex items-center justify-center px-6 md:px-20 py-10 border-t border-white/5 bg-white/5 backdrop-blur-sm">
        {/* Mudança para flex-col no mobile e gap maior para facilitar o clique */}
        <div className="flex flex-col md:flex-row w-full items-center justify-center md:justify-evenly gap-8 md:gap-4">
            {contacts.map((item) => (
              <div 
                key={item.id} 
                onClick={() => window.open(item.link, "_blank")} 
                className="group flex items-center justify-center gap-3 cursor-pointer transition-all duration-300"
              >
                {/* Ícone com brilho no hover */}
                <div className="p-2 bg-white/0 transition-colors">
                  <item.icon className="text-white/50 text-2xl md:text-3xl duration-300 transition-all group-hover:drop-shadow-[0_0_8px_rgba(250,250,250,0.8)]" />
                </div>
                
                {/* Texto responsivo */}
                <span className="text-white/50 group-hover:text-white font-medium text-xs md:text-sm tracking-widest uppercase transition-colors">
                  {item.value}
                </span>
              </div>
            ))}
        </div>
    </footer>
  )
}

export default Footer