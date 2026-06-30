export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-800 snap-start">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 font-mono text-xs">
          Built with React + Tailwind CSS + Framer Motion
        </p>
        <p className="text-slate-600 font-mono text-xs">
          &copy; {new Date().getFullYear()} Backend Engineer. All rights reserved.
        </p>
        <p className="text-slate-600 font-mono text-xs group">
          <span className="inline-block w-2 h-2 rounded-full bg-accent mr-1.5 group-hover:animate-pulse transition-all" />
          <span className="group-hover:text-accent transition-colors">hello@engineering.dev</span>
        </p>
      </div>
    </footer>
  );
}
