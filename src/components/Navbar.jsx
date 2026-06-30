import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "terminal", label: "Terminal" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY < lastScroll || scrollY < 100);
      setLastScroll(scrollY);

      const current = sections
        .slice()
        .reverse()
        .find((s) => {
          const el = document.getElementById(s.id);
          if (!el) return false;
          const top = el.getBoundingClientRect().top;
          return top <= 200;
        });
      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-40"
        >
          <div className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-slate-800/80 bg-slate-950/70 backdrop-blur-xl shadow-lg shadow-black/20">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer
                  ${
                    active === s.id
                      ? "bg-accent/15 text-accent border border-accent/30"
                      : "text-slate-500 hover:text-slate-300 border border-transparent"
                  }`}
              >
                {s.label}
              </button>
            ))}
            <div className="w-px h-5 bg-slate-800 mx-1" />
            <button className="px-3 py-1.5 rounded-full text-xs font-mono text-slate-500 hover:text-accent transition-colors cursor-pointer flex items-center gap-1.5">
              <Download className="w-3 h-3" />
              Resume
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
