import { useState, useCallback } from "react";

const chars = "!<>-_\\/[]{}—=+*^?#";

export default function GlitchText({ children, className = "", as: Tag = "h2", once = true }) {
  const [glitching, setGlitching] = useState(false);

  const handleEnter = useCallback(() => {
    setGlitching(true);
    if (once) {
      setTimeout(() => setGlitching(false), 400);
    }
  }, [once]);

  return (
    <Tag
      className={`relative inline-block ${className}`}
      onMouseEnter={handleEnter}
      onMouseMove={handleEnter}
      data-glitch
    >
      <span className={`transition-opacity duration-100 ${glitching ? "opacity-0" : "opacity-100"}`}>
        {children}
      </span>
      {glitching && (
        <span
          className="absolute inset-0 text-accent"
          aria-hidden
        >
          {String(children).split("").map((char, i) => {
            if (char === " ") return " ";
            const randomChar = chars[Math.floor(Math.random() * chars.length)];
            const offsetX = (Math.random() - 0.5) * 6;
            const offsetY = (Math.random() - 0.5) * 4;
            return (
              <span
                key={i}
                className="inline-block"
                style={{
                  transform: `translate(${offsetX}px, ${offsetY}px)`,
                  color: i % 3 === 0 ? "#22c55e" : i % 3 === 1 ? "#fff" : "#ef4444",
                  transition: "transform 0.05s",
                }}
              >
                {randomChar}
              </span>
            );
          })}
        </span>
      )}
    </Tag>
  );
}
