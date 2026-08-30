import type { CSSProperties } from "react";

export interface SpeedStripesProps {
  bars?: number;
  width?: string | number;
  trim?: boolean;
  tone?: "brand" | "royal";
  style?: CSSProperties;
}

export default function SpeedStripes({ bars = 3, width = "100%", trim = true, tone = "brand", style }: SpeedStripesProps) {
  const rows = [];
  for (let i = 0; i < bars; i++) {
    const shrink = trim ? 1 - i * 0.14 : 1;
    if (tone === "royal") {
      rows.push(
        <div key={i} style={{ height: "var(--stripe-height)", width: `${shrink * 100}%`, background: "var(--royal-blue)" }} />
      );
    } else {
      rows.push(
        <div key={i} style={{ height: "var(--stripe-height)", width: `${shrink * 100}%`, display: "flex" }}>
          <div style={{ flex: 2 + i, background: "var(--baby-blue)" }} />
          <div style={{ flex: 1, background: "var(--sunflower)" }} />
        </div>
      );
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--stripe-gap)", width, ...style }}>
      {rows}
    </div>
  );
}
