import React from "react";
import { AnimatePresence } from "motion/react";
import { RippleEffect } from "./ripple-effect";
import { useRipples } from "./use-ripples";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: [
    'relative overflow-hidden',
    'transform  transition duration-100',
    'inline-flex items-center justify-center',
    'cursor-pointer'
  ],
  variants: {
    color: {
      default: "bg-default text-white border-default",
      primary: "bg-primary text-white border-primary",
      secondary: "bg-secondary text-white border-secondary",
      danger: "bg-danger text-white border-danger",
      success: "bg-success text-white border-success",
      warning: "bg-warning text-white border-warning",
    },
    size: {
      sm: "px-2 min-w-16 h-8 text-sm gap-1 rounded-sm",
      md: "px-4 min-w-20 h-10 text-md gap-2 rounded-md",
      lg: "px-6 min-w-24 h-12 text-lg gap-3 rounded-lg", 
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "active:scale-97",
    },
    variant: {
      solid: null,
      outline: "border bg-transparent text-default hover:bg-foreground",
      ghost: "bg-transparent text-default hover:bg-foreground",
    },
    isIconOnly: {
      true: "p-0 min-w-0 aspect-square",
      false: null,
    }
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    variant: 'solid',
    disabled: false,
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonVariants>,
    ButtonVariants {}




export const Button: React.FC<ButtonProps> = ({
  className,
  color,
  size,
  variant,
  isIconOnly,
  disabled = false,
  children,
  onClick,
  ...props
}) => {
  const { 
    ripples, 
    createRipple, 
    onComplete 
  } = useRipples(disabled);

  return (
    <button
      className={buttonVariants({ color, size, variant, disabled, className, isIconOnly })}
      onClick={(evt)=> {
        createRipple(evt);
        onClick?.(evt);
      }}
      disabled={disabled}
      {...props}
    >
      {children}
      <AnimatePresence>
        {ripples.map(ripple => (
          <RippleEffect
            key={ripple.id}
            ripple={ripple}
            onComplete={onComplete}
          />
        ))}
      </AnimatePresence>
    </button>
  );
};

Button.displayName = "Button";