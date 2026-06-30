import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";
import HeroScene from "./HeroScene";
import useScrollTo from "../hooks/useScrollTo";

const roles = [
  "Backend Engineer",
  "Cybersecurity Specialist",
  "Systems Architect",
  "Security Researcher",
];

const codeLines = [
  "const system = new SecureSystem();",
  "system.deploy({",
  "  scaling: 'auto',",
  "  security: 'zero-trust',",
  "  reliability: 0.9999",
  "});",
  "// Status: operational",
];

export default function Hero() {
  const heroRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [codeVisible, setCodeVisible] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCodeVisible((p) => (p >= codeLines.length ? 0 : p + 1));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroScene />
      <ParticleNetwork />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-transparent to-surface pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,197,94,0.1) 2px, rgba(34,197,94,0.1) 4px)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-mono mb-6 animate-float">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Security focused &bull; Open to opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-sans mb-4 text-white leading-tight">
            Build secure,{" "}
            <span className="text-accent">scalable</span>
            <br />
            systems.
          </h1>

          <div className="h-12 mb-6">
            <span className="text-xl md:text-2xl text-slate-400 font-mono">
              {displayed}
              <span className="inline-block w-2 h-6 bg-accent ml-1 animate-blink" />
            </span>
          </div>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 font-mono text-sm">
            Designing and securing distributed systems. Breaking things
            to make them stronger.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <button
              onClick={() => scrollTo("projects")}
            className="px-6 py-3 bg-accent text-surface font-mono text-sm font-semibold
                          hover:bg-accent-dark transition-all duration-300 cursor-pointer shadow-lg shadow-accent/25 magnetic-btn"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("terminal")}
            className="px-6 py-3 border border-slate-700 text-slate-400 font-mono text-sm
                          hover:border-accent hover:text-accent transition-all duration-300 cursor-pointer magnetic-btn"
            >
              Try Terminal
            </button>
          </div>
        </motion.div>

        <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 opacity-40">
          <div className="w-72 rounded-lg border border-slate-800 bg-surface-light/80 backdrop-blur overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="text-[10px] text-slate-600 font-mono ml-2">deploy.sh</span>
            </div>
            <div className="p-3 font-mono text-[11px] leading-relaxed">
              {codeLines.slice(0, codeVisible + 1).map((line, i) => (
                <div
                  key={i}
                  className={`${
                    line.startsWith("//")
                      ? "text-slate-600"
                      : line.includes("'operational'")
                      ? "text-accent"
                      : "text-slate-400"
                  }`}
                >
                  {line}
                </div>
              ))}
              <span className="inline-block w-1.5 h-3.5 bg-accent/60 animate-blink" />
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ChevronDown className="w-5 h-5 text-slate-600 animate-float" />
        </motion.div>
      </div>
    </section>
  );
}
