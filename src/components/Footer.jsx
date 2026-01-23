import { contacts } from "../data/contacts"


const Footer = () => {
  return (
    <div className="h-36 flex items-center justify-evenly px-20">
        <div className="flex w-full items-center justify-evenly">
            {contacts.map((item) => (
              <div id={item.id} onClick={()=>  window.open(item.link, "_blank")} className="flex items-center justify-center gap-1 cursor-pointer">
                <item.icon className="text-white/50 hover:text-white text-3xl duration-300 transition-all" /> <span className="text-white/50 font-bold text-sm">{item.value}</span>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Footer
