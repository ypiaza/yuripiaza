import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const contacts = [
  {
    id: 1,
    name: "WhatsApp",
    value: "Fale pelo WhatsApp!",
    link: "https://wa.me/5579998671726",
    icon: FaWhatsapp,
  },
  {
    id: 2,
    name: "LinkedIn",
    value: "LinkedIn",
    link: "https://www.linkedin.com/in/yuri-piaza-615b6730a",
    icon: FaLinkedin,
  },
  {
    id: 3,
    name: "GitHub",
    value: "github.com/ypiaza",
    link: "https://github.com/ypiaza",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "Email",
    value: "yuripiazagomessantos@gmail.com",
    link: "mailto:yuripiazagomessantos@gmail.com",
    icon: MdEmail,
  },
];
