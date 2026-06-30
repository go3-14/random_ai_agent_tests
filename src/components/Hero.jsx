import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";
import useScrollTo from "../hooks/useScrollTo";

const roles = [
  "Backend Engineer",
  "Systems Architect",
  "Software Engineer",
  "Distributed Systems Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const current = roles[roleIndex];
    let timer;

    if (!deleting && displayed === current) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      timer = setTimeout(
        () => {
          setDisplayed(
            deleting
              ? current.slice(0, displayed.length - 1)
              : current.slice(0, displayed.length + 1)
          );
        },
        deleting ? 50 : 100
      );
    }

    return () => clearTimeout(timer);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start"
    >
      <ParticleNetwork />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-mono mb-6 animate-float">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-sans mb-4 text-white leading-tight">
            Building{" "}
            <span className="text-accent">scalable systems</span>
            <br />
            that perform.
          </h1>

          <div className="h-12 mb-6">
            <span className="text-xl md:text-2xl text-slate-400 font-mono">
              {displayed}
              <span className="inline-block w-2 h-6 bg-accent ml-1 animate-blink" />
            </span>
          </div>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 font-mono text-sm">
            Designing and building distributed systems, APIs, and
            infrastructure that scale reliably.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 bg-accent text-white font-mono text-sm
                         hover:bg-accent-dark transition-all duration-300 cursor-pointer shadow-lg shadow-accent/25"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("terminal")}
              className="px-6 py-3 border border-slate-700 text-slate-400 font-mono text-sm
                         hover:border-accent hover:text-accent transition-all duration-300 cursor-pointer"
            >
              Try Terminal
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
