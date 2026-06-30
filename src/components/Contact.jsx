import { GitBranch, Briefcase, Mail, AtSign } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import socials from "../data/socials";

const iconMap = {
  github: GitBranch,
  linkedin: Briefcase,
  twitter: AtSign,
  email: Mail,
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 px-4 snap-start bg-surface"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <ScrollReveal>
          <p className="font-mono text-accent text-sm mb-2">$ nc -v contact.cyberport.io 80</p>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-xl mx-auto mb-10">
            Whether you have a project, security concern, or just want to
            connect — my inbox is always open.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center gap-6 flex-wrap mb-12">
            {socials.map((s) => {
              const Icon = iconMap[s.icon] || GitBranch;
              return (
                <TiltCard key={s.name} maxTilt={6}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-6 border border-slate-800 
                               hover:border-accent/40 rounded-lg transition-colors min-w-[120px]
                               hover:bg-accent/5 block"
                  >
                    <Icon className="w-6 h-6 text-slate-500 hover:text-accent transition-colors" />
                    <span className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
                      {s.name}
                    </span>
                  </a>
                </TiltCard>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="max-w-lg mx-auto">
            <div className="border border-accent/20 rounded-lg p-6 bg-slate-950/30">
              <p className="text-slate-400 font-mono text-sm mb-4">
                $ echo "Hello" | sendmail hello@cyberport.io
              </p>
              <a
                href="mailto:hello@cyberport.io"
                className="text-accent font-mono text-lg hover:underline underline-offset-4"
              >
                hello@cyberport.io
              </a>
              <p className="text-slate-500 font-mono text-xs mt-2">
                PGP key available on request
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
