import { TextareaHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
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

Textarea.displayName = "Textarea";
