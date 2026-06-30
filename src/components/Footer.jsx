export default function Footer() {
  return (
    <footer className="py-6 px-4 border-t border-slate-800 snap-start bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-slate-600 font-mono text-[11px] flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          UPTIME: 5y 2m &mdash; STATUS: CONNECTED
        </p>
        <p className="text-slate-600 font-mono text-[11px]">
          &copy; {new Date().getFullYear()} cyber-engineer. All rights reserved.
        </p>
        <p className="text-slate-600 font-mono text-[11px] hover:text-accent transition-colors">
          hello@cyberport.io
        </p>
      </div>
    </footer>
  );
}
