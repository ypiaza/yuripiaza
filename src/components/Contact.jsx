import { useState } from "react";
import { MailIcon, GithubIcon, LinkedinIcon, MapPinIcon, CopyIcon, CheckIcon, ArrowRightIcon } from "./Icons";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "yuripiazagomessantos@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contato" className="w-full flex flex-col items-center justify-center py-24 px-4 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-3xl w-full flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-3">         
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Fale comigo!
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
            Estou sempre aberto a novas oportunidades, colaborações em projetos ou para trocar ideias sobre desenvolvimento.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="p-6 sm:p-8 bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center shrink-0">
                <MailIcon className="w-6 h-6 text-zinc-300" />
              </div>
              <div>
                <span className="font-mono tracking-wider text-zinc-500">E-mail Direto</span>
                <a 
                  href={`mailto:${emailAddress}`}
                  className="block text-lg sm:text-xl font-semibold text-white hover:text-zinc-300 transition-colors"
                >
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 text-xs font-mono px-4 py-2.5 border border-zinc-700/80 hover:border-zinc-600 bg-zinc-800/60 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copiado!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>Copiar E-mail</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 border border-zinc-700 hover:border-zinc-600 bg-zinc-100 hover:bg-white text-zinc-950 rounded-lg transition-colors"
              >
                Escrever
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Links Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://linkedin.com/in/yuripiaza"
              target="_blank"
              rel="noreferrer"
              className="group p-6 bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center group-hover:border-zinc-600 transition-colors shrink-0">
                  <LinkedinIcon className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500">Conecte-se</span>
                  <p className="text-base font-semibold text-white group-hover:text-zinc-200 transition-colors">
                    LinkedIn
                  </p>
                </div>
              </div>
              <span className="text-zinc-500 group-hover:text-zinc-300 font-mono text-sm transition-colors">→</span>
            </a>

            <a
              href="https://github.com/ypiaza"
              target="_blank"
              rel="noreferrer"
              className="group p-6 bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center group-hover:border-zinc-600 transition-colors shrink-0">
                  <GithubIcon className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500">Código & Repositórios</span>
                  <p className="text-base font-semibold text-white group-hover:text-zinc-200 transition-colors">
                    GitHub
                  </p>
                </div>
              </div>
              <span className="text-zinc-500 group-hover:text-zinc-300 font-mono text-sm transition-colors">→</span>
            </a>
          </div>

          {/* Location & Status Card */}
          <div className="p-5 bg-zinc-900/30 border border-zinc-800/80 rounded-xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center shrink-0">
              <MapPinIcon className="w-5 h-5 text-zinc-400" />
            </div>
            <div className="text-xs sm:text-sm">
              <p className="font-medium text-white">Brasil</p>
              <p className="text-zinc-400">Disponível para atuação remota, híbrida e presencial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
