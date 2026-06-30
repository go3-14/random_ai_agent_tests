import { useEffect, useRef, useState } from "react";
import { Server, Code2, Database, GitBranch } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

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
    <div ref={ref} className="text-center p-6 border border-slate-800 rounded-lg bg-surface/50 backdrop-blur">
      <div className="text-3xl md:text-4xl font-bold font-mono text-accent">
        {count}
        {suffix}
      </div>
      <div className="text-slate-400 text-sm mt-2 font-mono">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-4 snap-start bg-surface"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <p className="font-mono text-accent text-sm mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-8">
            Who I Am
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="fadeLeft">
            <div className="space-y-4 text-slate-300 font-mono text-sm leading-relaxed">
              <p>
                I'm a <span className="text-accent">Backend Engineer</span> with
                over 5 years of experience designing and building distributed
                systems that handle millions of requests per day.
              </p>
              <p>
                My approach focuses on clean architecture, comprehensive testing,
                and observability-first development. I believe great software is
                built when you understand the full lifecycle — from design
                through deployment to operation.
              </p>
              <p>
                I specialize in high-performance APIs, microservice
                architectures, data pipelines, and cloud infrastructure that
                scales efficiently.
              </p>
              <p>
                Currently exploring: Rust for systems programming, eBPF for
                observability, and event-driven architectures.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <TiltCard maxTilt={6}>
                <div className="p-4 border border-slate-800 rounded-lg text-center bg-slate-950/30">
                  <Server className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">Architecture</p>
                  <p className="text-white text-sm font-mono">Distributed</p>
                </div>
              </TiltCard>
              <TiltCard maxTilt={6}>
                <div className="p-4 border border-slate-800 rounded-lg text-center bg-slate-950/30">
                  <Code2 className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">Quality</p>
                  <p className="text-white text-sm font-mono">Test-Driven</p>
                </div>
              </TiltCard>
              <TiltCard maxTilt={6}>
                <div className="p-4 border border-slate-800 rounded-lg text-center bg-slate-950/30">
                  <Database className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">Scale</p>
                  <p className="text-white text-sm font-mono">High-Volume</p>
                </div>
              </TiltCard>
              <TiltCard maxTilt={6}>
                <div className="p-4 border border-slate-800 rounded-lg text-center bg-slate-950/30">
                  <GitBranch className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">Workflow</p>
                  <p className="text-white text-sm font-mono">CI/CD</p>
                </div>
              </TiltCard>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4} className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Counter end={5} suffix="+" label="Years of Experience" />
            <Counter end={50} suffix="+" label="Projects Delivered" />
            <Counter end={12} suffix="" label="Production Systems" />
            <Counter end={100} suffix="K+" label="Lines of Code" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
