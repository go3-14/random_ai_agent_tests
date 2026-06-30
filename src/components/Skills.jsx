import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import GlitchText from "./GlitchText";
import skills from "../data/skills";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { key: "all", label: "All" },
  { key: "languages", label: "Languages" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "security", label: "Security" },
  { key: "devops", label: "DevOps" },
  { key: "frontend", label: "Frontend" },
  { key: "tools", label: "Tools" },
];

const categoryStats = {
  languages: { label: "Languages", pct: 90 },
  backend: { label: "Backend", pct: 95 },
  database: { label: "Database", pct: 85 },
  security: { label: "Security", pct: 80 },
  devops: { label: "DevOps", pct: 85 },
  frontend: { label: "Frontend", pct: 60 },
  tools: { label: "Tools", pct: 90 },
};

function SkillBar({ label, pct, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { width: "0%" },
        {
          width: `${pct}%`,
          duration: 1.2,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [pct, index]);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs font-mono">
        <span className="text-slate-400">{label}</span>
        <span className="text-accent">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
        <div
          ref={ref}
          className="h-full rounded-full bg-accent"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 px-4 snap-start"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <GlitchText className="text-3xl md:text-4xl font-bold font-sans text-white mb-2">
            Skills & Proficiency
          </GlitchText>
          <p className="text-slate-400 font-mono text-sm mb-8">
            Technologies and tools I work with daily.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <ScrollReveal variant="fadeLeft">
            <div className="space-y-4 p-6 border border-slate-800 rounded-lg bg-surface-light/20">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Proficiency</p>
              {Object.entries(categoryStats).map(([key, val], i) => (
                <SkillBar key={key} label={val.label} pct={val.pct} index={i} />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" delay={0.1}>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActive(cat.key)}
                    className={`px-4 py-2 text-xs font-mono border transition-all cursor-pointer
                      ${
                        active === cat.key
                          ? "border-accent text-accent bg-accent/10"
                          : "border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-300"
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <AnimatePresence mode="popLayout">
                  {filtered.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2, delay: i * 0.02 }}
                      >
                        <TiltCard maxTilt={5} className="group">
                          <div className="p-3 border border-slate-800 hover:border-accent/40 rounded-lg
                                      bg-surface-light/20 hover:bg-surface-light/40 transition-colors cursor-default">
                            <Icon className="w-4 h-4 text-slate-500 group-hover:text-accent mb-1.5 transition-colors" />
                            <p className="text-[11px] font-mono text-slate-400 group-hover:text-white transition-colors">
                              {skill.name}
                            </p>
                          </div>
                        </TiltCard>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
