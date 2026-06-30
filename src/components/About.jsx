import { useEffect, useRef, useState } from "react";
import { Shield, Server, Bug, Code2, Lock, Terminal, Database, Globe, Cloud, Wifi } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ScrollRevealText from "./ScrollRevealText";
import TiltCard from "./TiltCard";
import GlitchText from "./GlitchText";
import SkillOrbit from "./SkillOrbit";

const techIcons = [
  { icon: Code2, label: "Python" },
  { icon: Server, label: "Go" },
  { icon: Terminal, label: "Rust" },
  { icon: Code2, label: "JS/TS" },
  { icon: Globe, label: "Node.js" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Database, label: "MongoDB" },
  { icon: Cloud, label: "AWS" },
  { icon: Terminal, label: "Docker" },
  { icon: Lock, label: "Security" },
  { icon: Shield, label: "Zero-Trust" },
  { icon: Wifi, label: "Networks" },
];

function Counter({ end, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current || started.current) return;
    started.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div ref={ref} className="text-center p-6 border border-slate-800 rounded-lg bg-surface-light/30 backdrop-blur">
      <div className="text-3xl md:text-4xl font-bold font-mono text-accent">
        {count}
        {suffix}
      </div>
      <div className="text-slate-500 text-sm mt-2 font-mono">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-20 px-4 snap-start bg-surface"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <p className="font-mono text-accent text-sm mb-2">About Me</p>
          <GlitchText className="text-3xl md:text-4xl font-bold font-sans text-white mb-8">
            Who I Am
          </GlitchText>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal variant="fadeLeft">
            <div className="space-y-4 text-slate-300 font-mono text-sm leading-relaxed">
              <ScrollRevealText>
                I'm a Backend Engineer and Cybersecurity Specialist with over 5 years of experience designing and securing distributed systems.
              </ScrollRevealText>
              <ScrollRevealText delay={0.1}>
                My approach combines deep technical expertise in backend architecture with a security-first mindset. I believe the best systems are built when you understand both how to create them and how they can be broken.
              </ScrollRevealText>
              <ScrollRevealText delay={0.2}>
                I specialize in zero-trust architectures, penetration testing, and building high-performance APIs that can withstand real-world threats.
              </ScrollRevealText>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <TiltCard maxTilt={6}>
                <div className="p-4 border border-slate-800 rounded-lg text-center bg-surface-light/30">
                  <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-slate-600 text-xs font-mono">Mindset</p>
                  <p className="text-white text-sm font-mono">Zero-Trust</p>
                </div>
              </TiltCard>
              <TiltCard maxTilt={6}>
                <div className="p-4 border border-slate-800 rounded-lg text-center bg-surface-light/30">
                  <Server className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-slate-600 text-xs font-mono">Scale</p>
                  <p className="text-white text-sm font-mono">Distributed</p>
                </div>
              </TiltCard>
              <TiltCard maxTilt={6}>
                <div className="p-4 border border-slate-800 rounded-lg text-center bg-surface-light/30">
                  <Bug className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-slate-600 text-xs font-mono">Testing</p>
                  <p className="text-white text-sm font-mono">Red Team</p>
                </div>
              </TiltCard>
              <TiltCard maxTilt={6}>
                <div className="p-4 border border-slate-800 rounded-lg text-center bg-surface-light/30">
                  <Code2 className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-slate-600 text-xs font-mono">Stack</p>
                  <p className="text-white text-sm font-mono">Full-Stack</p>
                </div>
              </TiltCard>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3} className="mb-16">
          <SkillOrbit />
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <Counter end={5} suffix="+" label="Years of Experience" />
            <Counter end={50} suffix="+" label="Projects Delivered" />
            <Counter end={15} suffix="+" label="Security Audits" />
            <Counter end={3} suffix="x" label="CTF Winner" />
          </div>
        </ScrollReveal>

        <div className="overflow-hidden border-t border-slate-800 pt-8">
          <p className="font-mono text-xs text-slate-600 mb-4 text-center">TECH STACK</p>
          <div className="flex gap-8 animate-marquee" style={{ width: "max-content" }}>
            {[...techIcons, ...techIcons].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 text-slate-500 hover:text-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-mono whitespace-nowrap">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
