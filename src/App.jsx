import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen">
      <ScrollProgress />
      <main className="snap-y snap-mandatory overflow-y-auto h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Terminal />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
