import { GitBranch, Briefcase, Mail, AtSign } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import GlitchText from "./GlitchText";
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
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal className="text-center">
          <p className="font-mono text-accent text-sm mb-2">$ nc -v contact.cyberport.io 80</p>
          <GlitchText className="text-3xl md:text-4xl font-bold font-sans text-white mb-4">
            Get In Touch
          </GlitchText>
          <p className="text-slate-400 font-mono text-sm max-w-xl mx-auto mb-12">
            Whether you have a project, security concern, or just want to
            connect — my inbox is always open.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start max-w-3xl mx-auto">
          <ScrollReveal variant="fadeLeft">
            <div className="border border-slate-800 rounded-lg p-5 bg-surface-light/20">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                <span className="text-xs font-mono text-slate-500">compose.message</span>
              </div>
              <p className="text-xs font-mono text-slate-600 mb-3">
                $ Send a message to hello@cyberport.io
              </p>
              <div className="flex items-center gap-2 text-sm font-mono mb-3">
                <span className="text-accent shrink-0">$</span>
                <input
                  type="text"
                  placeholder='echo "Hello" | sendmail'
                  className="flex-1 bg-transparent text-slate-300 outline-none border-none text-sm font-mono placeholder-slate-700"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim()) {
                      window.location.href = `mailto:hello@cyberport.io?subject=Portfolio Contact&body=${encodeURIComponent(e.target.value.replace(/^echo "|" \| sendmail$/g, ""))}`;
                      e.target.value = "";
                    }
                  }}
                />
              </div>
              <p className="text-[11px] font-mono text-slate-700">
                Type a message and press Enter to send
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s) => {
                const Icon = iconMap[s.icon] || GitBranch;
                return (
                  <TiltCard key={s.name} maxTilt={6}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 border border-slate-800 
                                hover:border-accent/40 rounded-lg transition-colors min-w-[100px]
                                hover:bg-accent/5 block text-center magnetic-btn"
                    >
                      <Icon className="w-5 h-5 text-slate-500 hover:text-accent transition-colors" />
                      <span className="text-[11px] font-mono text-slate-400 hover:text-white transition-colors">
                        {s.name}
                      </span>
                    </a>
                  </TiltCard>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
