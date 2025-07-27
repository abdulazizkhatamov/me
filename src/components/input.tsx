import { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "w-full px-4 py-2 rounded-lg border text-sm",
          "bg-background-light text-foreground-dark",
          "dark:bg-gray-800 dark:text-white",
          "border-foreground-light dark:border-foreground-dark",
          "placeholder:text-gray-400 dark:placeholder:text-gray-500",
          "focus:outline-none focus:ring-2 focus:ring-foreground-light dark:focus:ring-foreground-dark",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
