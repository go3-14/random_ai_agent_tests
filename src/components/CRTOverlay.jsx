export default function CRTOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden rounded-lg">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,197,94,0.4) 2px, rgba(34,197,94,0.4) 3px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          background:
            "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(34,197,94,0.3) 3px, rgba(34,197,94,0.3) 4px)",
        }}
      />
    </div>
  );
}
