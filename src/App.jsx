import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 relative">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
