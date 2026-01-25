import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariants =
  | "primary"
  | "secondary"
  | "solidPrimary"
  | "outlinePrimary"
  | "chip"
  | "chipActive";

type CommonProps = {
  variant?: ButtonVariants;
  className?: string;
  children: ReactNode;
  to?: string;
  as?: "button" | "a";
};

type ButtonProps =
  | (CommonProps & ButtonHTMLAttributes<HTMLButtonElement>)
  | (CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>);

const base =
  "inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-medium transition-all duration-300";

const variants: Record<ButtonVariants, string> = {
  primary:
    "bg-white text-primary border-2 border-white hover:bg-transparent hover:text-white",
  secondary:
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary",
  solidPrimary: "bg-primary text-white hover:bg-primary/80 shadow-lg",
  outlinePrimary:
    "border-2 border-primary text-primary bg-main-bg hover:bg-primary/20",
  chip: "rounded-full bg-white px-4! py-1.5! text-primary hover:bg-gray-100 border border-gray-300",
  chipActive: "rounded-full bg-primary px-4! py-1.5! text-white",
};

export function Button({
  to,
  variant = "solidPrimary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const cls = `${base} ${variants[variant] ?? variants.solidPrimary} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        className={cls}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cls}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

export default Button;
