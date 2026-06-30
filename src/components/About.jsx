import { useEffect, useRef, useState } from "react";
import { Shield, Server, Bug, Code2 } from "lucide-react";
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
          <p className="font-mono text-accent text-sm mb-2">$ cat /proc/about</p>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-8">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="fadeLeft">
            <div className="space-y-4 text-slate-300 font-mono text-sm leading-relaxed">
              <p>
                I'm a <span className="text-accent">Backend Engineer</span> and{" "}
                <span className="text-accent">Cybersecurity Specialist</span>{" "}
                with over 5 years of experience designing and securing
                distributed systems.
              </p>
              <p>
                My approach combines deep technical expertise in backend
                architecture with a security-first mindset. I believe the best
                systems are built when you understand both how to create them
                and how they can be broken.
              </p>
              <p>
                I specialize in zero-trust architectures, penetration testing,
                and building high-performance APIs that can withstand real-world
                threats.
              </p>
              <p>
                Currently exploring: Rust for systems programming, eBPF for
                observability, and AI-driven threat detection.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <TiltCard maxTilt={6}>
                <div className="p-4 border border-slate-800 rounded-lg text-center bg-slate-950/30">
                  <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">Mindset</p>
                  <p className="text-white text-sm font-mono">Zero-Trust</p>
                </div>
              </TiltCard>
              <TiltCard maxTilt={6}>
                <div className="p-4 border border-slate-800 rounded-lg text-center bg-slate-950/30">
                  <Server className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">Scale</p>
                  <p className="text-white text-sm font-mono">Distributed</p>
                </div>
              </TiltCard>
              <TiltCard maxTilt={6}>
                <div className="p-4 border border-slate-800 rounded-lg text-center bg-slate-950/30">
                  <Bug className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">Testing</p>
                  <p className="text-white text-sm font-mono">Red Team</p>
                </div>
              </TiltCard>
              <TiltCard maxTilt={6}>
                <div className="p-4 border border-slate-800 rounded-lg text-center bg-slate-950/30">
                  <Code2 className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-slate-500 text-xs font-mono">Stack</p>
                  <p className="text-white text-sm font-mono">Full-Stack</p>
                </div>
              </TiltCard>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4} className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Counter end={5} suffix="+" label="Years of Experience" />
            <Counter end={50} suffix="+" label="Projects Delivered" />
            <Counter end={15} suffix="+" label="Security Audits" />
            <Counter end={3} suffix="x" label="CTF Winner" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
