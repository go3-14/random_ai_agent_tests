import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FolderGit } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import projects from "../data/projects";

const filters = [
  { key: "all", label: "All" },
  { key: "security", label: "Security" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 px-4 snap-start bg-surface"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-slate-400 font-mono text-sm mb-8">
            Security tools and backend systems I've built.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-4 py-2 text-xs font-mono border transition-all cursor-pointer
                  ${
                    active === f.key
                      ? "border-accent text-accent bg-accent/10"
                      : "border-slate-700 text-slate-400 hover:border-slate-500"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <TiltCard maxTilt={6} className="group h-full">
                  <div className="relative border border-slate-800 group-hover:border-accent/40 
                              rounded-lg p-6 bg-slate-950/50 overflow-hidden transition-colors h-full
                              hover:shadow-lg hover:shadow-accent/10">
                    <div className="relative z-10">
                      <h3 className="text-lg font-mono text-white mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm font-mono mb-4 leading-relaxed">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-[10px] font-mono border border-slate-700 text-slate-400
                                      group-hover:border-accent/30 group-hover:text-accent/70 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          className="text-slate-500 hover:text-accent transition-colors"
                        >
                          <FolderGit className="w-4 h-4" />
                        </a>
                        <a
                          href={project.live}
                          className="text-slate-500 hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
