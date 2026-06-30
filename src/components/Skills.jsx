import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import skills from "../data/skills";

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
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-2">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 font-mono text-sm mb-8">
            Technologies I work with on a daily basis.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-4 py-2 text-xs font-mono border transition-all cursor-pointer
                  ${
                    active === cat.key
                      ? "border-accent text-accent bg-accent/10"
                      : "border-slate-700 text-slate-400 hover:border-slate-500"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                >
                  <TiltCard maxTilt={5} className="group">
                    <div className="p-4 border border-slate-800 hover:border-accent/50 rounded-lg
                                bg-surface/30 hover:bg-surface/60 transition-colors cursor-default
                                relative overflow-hidden">
                      <Icon className="w-6 h-6 text-slate-500 group-hover:text-accent mb-2 relative z-10 transition-colors" />
                      <p className="text-xs font-mono text-slate-400 group-hover:text-white relative z-10 transition-colors">
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
    </section>
  );
}
