/* ── Decorative Section Dividers ──
   Organic shapes, squiggly lines, and scattered elements
   to break up the monotony between sections. Each variant
   uses different shapes and colors from the expanded palette. */

/* Wavy SVG line in a chosen color */
function WavyLine({ color = "#c9e1b9" }: { color?: string }) {
  return (
    <svg viewBox="0 0 1200 40" className="w-full h-8" preserveAspectRatio="none">
      <path
        d="M0 20 Q150 0 300 20 T600 20 T900 20 T1200 20"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Scattered shapes */
export function ShapeDivider({ variant = "a" }: { variant?: "a" | "b" | "c" | "d" }) {
  if (variant === "a") {
    return (
      <div className="relative py-12 flex items-center justify-center overflow-hidden">
        {/* Terracotta circle */}
        <div className="absolute left-[15%] h-16 w-16 rounded-full bg-terra-100 animate-drift" />
        {/* Lavender diamond */}
        <div className="absolute right-[20%] h-10 w-10 bg-lav-100 rotate-45 animate-drift delay-200" />
        {/* Matcha ring */}
        <div className="absolute left-[55%] h-12 w-12 rounded-full border-2 border-matcha-200 animate-drift delay-400" />
        <WavyLine />
      </div>
    );
  }

  if (variant === "b") {
    return (
      <div className="relative py-12 flex items-center justify-center overflow-hidden">
        <div className="absolute right-[10%] h-20 w-20 rounded-full bg-amber-100/60 animate-drift delay-100" />
        <div className="absolute left-[25%] h-8 w-8 rounded-full bg-terra-200/50 animate-drift delay-300" />
        <div className="absolute left-[60%] h-6 w-14 rounded-full bg-lav-100 animate-drift delay-500" />
        <WavyLine color="#f2ccb1" />
      </div>
    );
  }

  if (variant === "c") {
    return (
      <div className="relative py-12 flex items-center justify-center overflow-hidden">
        <div className="absolute left-[10%] h-14 w-14 rounded-full border-2 border-lav-200 animate-drift" />
        <div className="absolute right-[30%] h-10 w-10 bg-matcha-100 rounded-lg rotate-12 animate-drift delay-200" />
        <div className="absolute right-[8%] h-6 w-6 rounded-full bg-amber-200/60 animate-drift delay-400" />
        <WavyLine color="#d5c6e0" />
      </div>
    );
  }

  /* variant d */
  return (
    <div className="relative py-12 flex items-center justify-center overflow-hidden">
      <div className="absolute left-[20%] h-10 w-10 rounded-full bg-matcha-100 animate-drift" />
      <div className="absolute right-[15%] h-14 w-14 rounded-full border-2 border-terra-200 animate-drift delay-300" />
      <div className="absolute left-[50%] h-5 w-12 rounded-full bg-lav-100/70 animate-drift delay-100" />
      <WavyLine color="#f9edcf" />
    </div>
  );
}

/* Floating decorative shapes — can be placed absolutely inside sections */
export function FloatingShapes() {
  return (
    <>
      {/* Terracotta blob */}
      <div className="pointer-events-none absolute -top-16 -right-20 h-[280px] w-[280px] rounded-full bg-terra-100/40 blur-3xl animate-drift" />
      {/* Lavender blob */}
      <div className="pointer-events-none absolute bottom-24 -left-16 h-[220px] w-[220px] rounded-full bg-lav-100/30 blur-2xl animate-drift delay-300" />
      {/* Amber accent */}
      <div className="pointer-events-none absolute top-1/2 right-[10%] h-[150px] w-[150px] rounded-full bg-amber-100/30 blur-2xl animate-drift delay-500" />
    </>
  );
}

/* Small inline decorative elements for sprinkling */
export function Sparkle({ color = "terra" }: { color?: "terra" | "lav" | "amber" | "matcha" }) {
  const colors = {
    terra: "border-terra-300",
    lav: "border-lav-300",
    amber: "border-amber-300",
    matcha: "border-matcha-300",
  };
  return (
    <span className={`inline-block h-2 w-2 rounded-full border-2 ${colors[color]} animate-wiggle`} />
  );
}
