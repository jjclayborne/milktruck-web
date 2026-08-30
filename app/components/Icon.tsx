import type { CSSProperties } from "react";

const WEIGHTS = {
  bold: "ph-bold",
  fill: "ph-fill",
  regular: "ph",
} as const;

export interface IconProps {
  name: string;
  weight?: keyof typeof WEIGHTS;
  size?: number;
  color?: string;
  style?: CSSProperties;
}

export default function Icon({ name, weight = "bold", size = 20, color = "currentColor", style }: IconProps) {
  return (
    <i
      className={`${WEIGHTS[weight]} ph-${name}`}
      aria-hidden="true"
      style={{ fontSize: size, lineHeight: 1, color, display: "inline-flex", ...style }}
    />
  );
}
