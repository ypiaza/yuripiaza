import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {
  return (
    /* O container principal agora é relativo e tem overflow-x-hidden para evitar bugs de scroll lateral */
    <div className="relative min-h-screen w-full bg-zinc-950 text-white overflow-x-hidden">
      
      {/* 1. CAMADA DE FUNDO (FIXA) */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('background.png')", // Use a imagem que geramos
          filter: "brightness(0.5))" // Ajuste fino para não ofuscar o texto
        }}
      >
        {/* Overlay sutil para profundidade */}
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
      </div>

      {/* 2. CAMADA DE CONTEÚDO (SCROLLÁVEL) */}
      <div className="relative z-10 flex flex-col">
        <Header />
        
        {/* Usamos main para envolver o conteúdo principal por semântica */}
        <main>
          <Hero />
          
          {/* Espaçamento entre seções para o fundo "respirar" */}
          <div className="space-y-20 md:space-y-40 pb-20">
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