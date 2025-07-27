import { ButtonHTMLAttributes, ElementType, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  asChild?: boolean;
  children: ReactNode;
  icon?: ReactNode; // e.g. <Github size={16} />
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className,
  asChild = false,
  disabled,
  icon,
  ...props
}: ButtonProps) => {
  const Component: ElementType = asChild ? "span" : "button";

  const base =
    "inline-flex items-center justify-center rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

  const variants: Record<Variant, string> = {
    primary: clsx(
      "bg-background-dark text-background-light",
      "hover:bg-background-dark/90",
      "dark:bg-background-light dark:text-background-dark",
      "dark:hover:bg-background-light/90",
      "border border-background-dark dark:border-background-light",
      "focus:ring-background-dark dark:focus:ring-background-light"
    ),
    secondary: clsx(
      "bg-foreground-light text-background-dark",
      "hover:bg-foreground-light/90",
      "dark:bg-foreground-dark dark:text-background-light",
      "dark:hover:bg-foreground-dark/90",
      "focus:ring-foreground-light dark:focus:ring-foreground-dark"
    ),
    outline: clsx(
      "border border-foreground-dark text-foreground-dark",
      "hover:bg-foreground-dark/5",
      "dark:border-foreground-light dark:text-foreground-light",
      "dark:hover:bg-foreground-light/5",
      "focus:ring-foreground-dark dark:focus:ring-foreground-light"
    ),
    ghost: clsx(
      "bg-transparent text-foreground-dark",
      "hover:bg-foreground-dark/5",
      "dark:text-foreground-light dark:hover:bg-foreground-light/5",
      "focus:ring-foreground-dark dark:focus:ring-foreground-light"
    ),
  };

  const sizes: Record<Size, string> = {
    sm: "px-3 py-1 text-sm gap-1.5",
    md: "px-5 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  return (
    <Component
      className={clsx(base, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="animate-pulse">Loading...</span>
      ) : (
        <>
          {icon && <span className="mr-2 -ml-1">{icon}</span>}
          {children}
        </>
      )}
    </Component>
  );
};
