import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { commands, sectionMap } from "../data/terminalCommands";

const banner = commands.banner.output;

export default function Terminal() {
  const [lines, setLines] = useState([{ type: "output", text: banner }]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [prompt] = useState("user@portfolio:~$");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const [isScrolledManually, setIsScrolledManually] = useState(false);

  const scrollToBottom = useCallback(() => {
    if (!isScrolledManually) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isScrolledManually]);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  const processCommand = useCallback((cmd) => {
    const normalized = cmd.trim().toLowerCase();

    if (!normalized) return;

    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const newLines = [...lines, { type: "input", text: `$ ${cmd}` }];

    if (normalized === "clear") {
      setLines([]);
      return;
    }

    if (normalized === "history") {
      const histText = history.map((h, i) => `  ${i + 1}  ${h}`).join("\n");
      newLines.push({
        type: "output",
        text: histText || "  No commands yet.",
      });
      setLines(newLines);
      return;
    }

    if (normalized.startsWith("cd ")) {
      const target = normalized.slice(3).trim();
      if (target === ".." || target === "~") {
        newLines.push({ type: "output", text: `cd: ${target}: No such section` });
        setLines(newLines);
        return;
      }
      if (sectionMap[target]) {
        newLines.push({ type: "output", text: `Navigating to ${target}...` });
        setLines(newLines);
        setTimeout(() => {
          const el = document.getElementById(sectionMap[target]);
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
        return;
      }
      newLines.push({
        type: "output",
        text: `cd: ${target}: No such section`,
      });
      setLines(newLines);
      return;
    }

    const command = commands[normalized];
    if (command) {
      newLines.push({ type: "output", text: command.output });
    } else {
      newLines.push({
        type: "output",
        text: `bash: ${normalized}: command not found. Try 'help' for available commands.`,
      });
    }

    setLines(newLines);
  }, [lines, history]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const newIndex =
        historyIndex === -1
          ? history.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) {
        setInput("");
        return;
      }
      const newIndex = historyIndex + 1;
      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const partial = input.trim().toLowerCase();
      const matches = Object.keys(commands).filter((c) =>
        c.startsWith(partial)
      );
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        setLines((prev) => [
          ...prev,
          { type: "input", text: `$ ${input}` },
          { type: "output", text: matches.join("  ") },
        ]);
        setInput("");
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  const handleScroll = useCallback(() => {
    const el = inputRef.current?.parentElement?.parentElement;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    setIsScrolledManually(scrollHeight - scrollTop > clientHeight + 100);
  }, []);

  useEffect(() => {
    const el = inputRef.current?.closest(".terminal-scroll");
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      id="terminal"
      className="min-h-screen flex items-center py-20 px-4 snap-start"
    >
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-2">
            Interactive Terminal
          </h2>
          <p className="text-slate-400 font-mono text-sm mb-8">
            Type <span className="text-accent">help</span> to see all
            commands.
          </p>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-accent/20 rounded-lg overflow-hidden bg-slate-950/90 backdrop-blur
                     shadow-lg shadow-accent/5"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-surface/80 border-b border-accent/20">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-xs text-slate-600 font-mono ml-2">terminal — portfolio</span>
          </div>

          <div
            className="terminal-scroll p-4 h-[400px] md:h-[500px] overflow-y-auto font-mono text-sm leading-relaxed"
            style={{ scrollBehavior: "smooth" }}
          >
            {lines.map((line, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap ${
                  line.type === "input"
                    ? "text-accent"
                    : "text-slate-300"
                }`}
              >
                {line.text}
              </div>
            ))}

            <div className="flex items-center mt-1">
              <span className="text-accent shrink-0">{prompt} </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-accent outline-none border-none ml-1 caret-accent"
                style={{ caretColor: "#10b981" }}
                spellCheck={false}
                autoComplete="off"
                autoFocus
              />
            </div>

            <div ref={bottomRef} />
          </div>
        </motion.div>

        <p className="text-slate-700 text-xs font-mono mt-4 text-center">
          Tab completion supported • Ctrl+L to clear • Arrow up/down for history
        </p>
      </div>
    </section>
  );
}
