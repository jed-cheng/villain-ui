import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// DialogContent styles
const dialogContentVariants = tv({
  base: [
    'relative',
    'bg-background',
    'rounded-lg shadow-lg',
    'flex flex-col',
    'overflow-hidden',
    'focus:outline-none',
    'm-auto',  // Center content within dialog
    'max-h-[85vh]',  // Prevent content from overflowing the viewport
  ],
  variants: {
    size: {
      sm: "w-full max-w-sm",
      md: "w-full max-w-md",
      lg: "w-full max-w-lg",
      xl: "w-full max-w-xl",
      "2xl": "w-full max-w-2xl",
      full: "w-full h-full",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type DialogContentProps = React.ComponentPropsWithoutRef<"div"> & 
  VariantProps<typeof dialogContentVariants> & {
    closeButton?: boolean;
  };

export function DialogContent({
  children,
  size,
  className,
  closeButton = true,
  ...props
}: DialogContentProps) {
  
  return (
    <div
      className={dialogContentVariants({ size, className })}
      role="document"
      {...props}
    >
      {closeButton && (
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 
                    transition-opacity hover:opacity-100 focus:outline-none 
                    focus:ring-2 focus:ring-primary"
          aria-label="Close"
          type="button"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
      {children}
    </div>
  );
}
