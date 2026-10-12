import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer className="py-6 text-center text-sm text-slate-500">
        © 2026 John Joseph Ivan B. Diaday. Built with React & Tailwind CSS.
      </footer>
    </div>
  )
}
