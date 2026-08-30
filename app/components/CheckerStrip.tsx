import type { CSSProperties } from "react";

export interface CheckerStripProps {
  size?: number;
  tone?: "royal" | "cream";
  width?: string | number;
  style?: CSSProperties;
}

export default function CheckerStrip({ size = 12, tone = "royal", width = "100%", style }: CheckerStripProps) {
  const c = tone === "cream" ? "var(--cream)" : "var(--royal-blue)";
  const grad = `linear-gradient(45deg,${c} 25%,transparent 25%,transparent 75%,${c} 75%)`;
  return (
    <div
      style={{
        height: size,
        width,
        backgroundImage: `${grad},${grad}`,
        backgroundSize: `${size * 2}px ${size * 2}px`,
        backgroundPosition: `0 0,${size}px ${size}px`,
        ...style,
      }}
    />
  );
}
