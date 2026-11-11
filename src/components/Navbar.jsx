import { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon, MenuIcon, CloseIcon, SunIcon, MoonIcon } from "./Icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", theme === "light" ? "#ffffff" : "#09090b");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Projetos", href: "#projetos" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 shadow-lg shadow-zinc-950/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a 
          href="#inicio" 
          className="text-white font-mono font-semibold tracking-tight text-base hover:text-zinc-300 duration-200 ease-in-out"
        >
          yuripiaza
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs lg:text-sm font-semibold text-zinc-400 hover:text-white rounded-md duration-200 ease-in-out"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Alternar para modo escuro" : "Alternar para modo claro"}
            className="p-2 text-zinc-400 hover:text-white rounded-md border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900 duration-200 ease-in-out cursor-pointer"
          >
            {theme === "light" ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />}
          </button>
          <a
            href="https://github.com/ypiaza"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-zinc-400 hover:text-white rounded-md border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900 duration-200 ease-in-out"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/yuripiaza"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-zinc-400 hover:text-white rounded-md border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900 duration-200 ease-in-out"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contato"
            className="px-4 py-1.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-200 hover:text-white rounded-md text-xs font-medium duration-200 ease-in-out"
          >
            Contato
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Alternar para modo escuro" : "Alternar para modo claro"}
            className="p-2 text-zinc-400 hover:text-white border border-zinc-800 rounded-md bg-zinc-900/40 cursor-pointer"
          >
            {theme === "light" ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
            className="p-2 text-zinc-400 hover:text-white border border-zinc-800 rounded-md bg-zinc-900/40 cursor-pointer"
          >
            {isOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-4 pt-3 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900/60 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex items-center gap-3 border-t border-zinc-800 mt-2">
            <a
              href="https://github.com/ypiaza"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs border border-zinc-800 rounded-md text-zinc-300 bg-zinc-900/40 hover:text-white"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/yuripiaza"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs border border-zinc-800 rounded-md text-zinc-300 bg-zinc-900/40 hover:text-white"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
