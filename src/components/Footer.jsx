import { GithubIcon, LinkedinIcon, MailIcon, ChevronUpIcon } from "./Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Top Grid */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          <div className="flex flex-col gap-2">
            <a href="#inicio" className="text-white font-mono font-semibold tracking-tight text-base hover:text-zinc-300">
              yuripiaza
            </a>
            <p className="text-xs text-zinc-500 max-w-sm">
              Desenvolvedor Full Stack focado em interfaces fluidas, APIs performáticas e código limpo.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ypiaza"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Yuri Piaza"
              className="p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/yuripiaza"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Yuri Piaza"
              className="p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:yuripiaza@gmail.com"
              aria-label="Enviar e-mail para Yuri Piaza"
              className="p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
            >
              <MailIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-[11px] font-mono text-zinc-500">
          <p>© {currentYear} yuripiaza. Todos os direitos reservados.</p>
          <p className="text-zinc-600">Construído com React, Tailwind CSS & Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
