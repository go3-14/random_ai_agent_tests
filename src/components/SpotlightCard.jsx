import { useRef, useCallback } from "react";

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(34, 197, 94, 0.08)",
}) {
  const ref = useRef(null);
  const spotlightRef = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      const spot = spotlightRef.current;
      if (!el || !spot) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spot.style.background = `radial-gradient(circle 120px at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`;
      spot.style.opacity = "1";

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    },
    [spotlightColor]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    const spot = spotlightRef.current;
    if (!el || !spot) return;
    spot.style.opacity = "0";
    el.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: 0 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
