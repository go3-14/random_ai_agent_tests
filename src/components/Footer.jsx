export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-800 snap-start">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 font-mono text-xs">
          <span className="text-accent">&gt;</span> Built with React + Tailwind CSS + Framer Motion
        </p>
        <p className="text-slate-600 font-mono text-xs">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-slate-400 hover:text-accent transition-colors">cyber-engineer</span>
          . All rights reserved.
        </p>
        <p className="text-slate-600 font-mono text-xs flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
          system secured
        </p>
      </div>
    </footer>
  );
}
