import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {
  return (
    /* O container principal agora é relativo e tem overflow-x-hidden para evitar bugs de scroll lateral */
    <div className="relative min-h-screen w-full bg-zinc-900 text-white overflow-x-hidden">
      
     
      {/* 2. CAMADA DE CONTEÚDO (SCROLLÁVEL) */}
      <div className="relative z-10 flex flex-col">
        <Header />
        
        {/* Usamos main para envolver o conteúdo principal por semântica */}
        <main>
          <Hero />
          
          {/* Espaçamento entre seções para o fundo "respirar" */}
          <div className="">
            <Skills />
            <Projects />
          </div>
        </main>

        <Footer />
      </div>

    </div>
  )
}

export default App