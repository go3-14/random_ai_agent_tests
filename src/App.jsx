import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-surface text-slate-300 min-h-screen">
      <CustomCursor />
      <Navbar />
      <ScrollProgress />
      <SmoothScroll>
        <main>
          <Hero />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Terminal />
          <div className="section-divider" />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </div>
  );
}
