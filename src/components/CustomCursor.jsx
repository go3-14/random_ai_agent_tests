import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const requestRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  const isTouchDevice = () =>
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  const update = useCallback(() => {
    ringPos.current.x += (mouseRef.current.x - ringPos.current.x) * 0.12;
    ringPos.current.y += (mouseRef.current.y - ringPos.current.y) * 0.12;

    if (ringRef.current) {
      ringRef.current.style.left = `${ringPos.current.x}px`;
      ringRef.current.style.top = `${ringPos.current.y}px`;
    }
    if (dotRef.current) {
      dotRef.current.style.left = `${mouseRef.current.x}px`;
      dotRef.current.style.top = `${mouseRef.current.y}px`;
    }

    requestRef.current = requestAnimationFrame(update);
  }, []);

  useEffect(() => {
    if (isTouchDevice()) return;

    const handleMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleHover = (e) => {
      const target = e.target.closest(
        "a, button, input, textarea, [data-cursor-hover]"
      );
      if (ringRef.current) {
        ringRef.current.style.width = target ? "40px" : "28px";
        ringRef.current.style.height = target ? "40px" : "28px";
        ringRef.current.style.borderColor = target
          ? "rgba(34, 197, 94, 0.6)"
          : "rgba(34, 197, 94, 0.3)";
        ringRef.current.style.background = target
          ? "rgba(34, 197, 94, 0.06)"
          : "transparent";
      }
    };

    document.addEventListener("mousemove", handleMouse, { passive: true });
    document.addEventListener("mouseover", handleHover, { passive: true });
    requestRef.current = requestAnimationFrame(update);

    return () => {
      document.removeEventListener("mousemove", handleMouse);
      document.removeEventListener("mouseover", handleHover);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [update]);

  if (isTouchDevice()) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-50 rounded-full border transition-[width,height,border-color,background] duration-200"
        style={{
          width: "28px",
          height: "28px",
          borderColor: "rgba(34, 197, 94, 0.3)",
          transform: "translate(-50%, -50%)",
          background: "transparent",
        }}
      />
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-50 w-1 h-1 rounded-full bg-accent"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
