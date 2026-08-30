import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import Icon from "./Icon";

const SIZES = {
  sm: { padding: "9px 14px", fontSize: 12 },
  md: { padding: "13px 20px", fontSize: 13 },
  lg: { padding: "16px 28px", fontSize: 15 },
} as const;

const VARIANTS = {
  primary: { base: "var(--sunflower)", hover: "var(--sunflower-hover)", press: "var(--sunflower-press)", fg: "var(--ink-navy)" },
  secondary: { base: "var(--royal-blue)", hover: "var(--royal-blue-hover)", press: "var(--royal-blue-press)", fg: "var(--cream)" },
  inverse: { base: "var(--cream)", hover: "var(--white)", press: "var(--cream-edge)", fg: "var(--royal-blue)" },
  outline: { base: "transparent", hover: "transparent", press: "transparent", fg: "var(--royal-blue)" },
  ghost: { base: "transparent", hover: "transparent", press: "transparent", fg: "var(--royal-blue)" },
} as const;

export interface ButtonProps {
  children?: ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  icon?: string;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  disabled = false,
  onClick,
  type = "button",
  style,
}: ButtonProps) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const outlined = variant === "outline";
  const ghost = variant === "ghost";
  const v = VARIANTS[variant] || VARIANTS.primary;

  let bg: string = v.base;
  let fg: string = v.fg;
  let outline = "none";

  if (outlined || ghost) {
    fg = "var(--royal-blue)";
    bg = "transparent";
    if (outlined) outline = "var(--border-width-strong) solid var(--royal-blue)";
    if (!disabled && (hover || press)) bg = press ? "var(--royal-blue-16)" : "var(--royal-blue-08)";
  } else if (!disabled) {
    if (press) bg = v.press;
    else if (hover) bg = v.hover;
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPress(false);
      }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        border: 0,
        outline,
        outlineOffset: outlined ? "-2px" : 0,
        borderRadius: "var(--radius-sm)",
        background: bg,
        color: fg,
        fontFamily: "var(--font-ui)",
        fontStretch: "var(--stretch-condensed)",
        fontWeight: "var(--weight-ui-label)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-label)",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transform: press && !disabled ? "translateY(var(--press-translate))" : "none",
        boxShadow: press && !disabled && !ghost ? "var(--shadow-press)" : "none",
        transition: "var(--transition-control)",
        ...SIZES[size],
        ...style,
      }}
    >
      {icon && iconPosition === "left" && <Icon name={icon} size={SIZES[size].fontSize + 5} />}
      <span>{children}</span>
      {icon && iconPosition === "right" && <Icon name={icon} size={SIZES[size].fontSize + 5} />}
    </button>
  );
}
