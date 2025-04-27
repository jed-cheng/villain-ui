import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Ripple, RippleEffect } from "./ripple-effect";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/src/index";

const buttonVariants = cva([
  'relative overflow-hidden',
  'transform  transition duration-150',
  'inline-flex items-center justify-center',
],{
  variants: {
    color: {
      primary: "bg-blue-500 text-white border-transparent",
      secondary: "bg-white text-gray-800 border-gray-400",
      danger: "bg-red-500 text-white border-transparent",
      success: "bg-green-500 text-white border-transparent",
      warning: "bg-yellow-500 text-white border-transparent",
    },
    size: {
      sm: "px-2 min-w-16 h-8 text-sm gap-1 rounded-sm [&>svg]:max-w-[theme(spacing.7)]", // Includes rounded-small
      md: "px-4 min-w-20 h-10 text-md gap-2 rounded-md [&>svg]:max-w-[theme(spacing.8)]", // Includes rounded-medium
      lg: "px-6 min-w-24 h-12 text-lg gap-3 rounded-lg [&>svg]:max-w-[theme(spacing.8)]", // Includes rounded-large

    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "active:scale-95",
    },
    variant: {
      solid: "bg-blue-500 text-white border-transparent",
      outline: "bg-white text-blue-500 border border-blue-500 hover:bg-blue-100",
      ghost: "bg-transparent text-blue-500 border-transparent hover:bg-blue-100",
      link: "bg-transparent text-blue-500 border-transparent",
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    variant: 'solid',
    disabled: false,
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonVariants>,
    ButtonVariants {}


function useRipple(disabled: boolean, onClick?: React.MouseEventHandler<HTMLButtonElement>) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.sqrt(rect.width ** 2 + rect.height ** 2) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    setRipples(prev => [...prev, { id: Date.now(), x, y, size }]);
    onClick?.(event);
  };

  const handleAnimationComplete = (rippleId: number) => {
    setRipples(prev => prev.filter(r => r.id !== rippleId));
  };

  return { ripples, createRipple, handleAnimationComplete };
}

export const Button: React.FC<ButtonProps> = ({
  className,
  color,
  size,
  variant,
  disabled = false,
  children,
  onClick,
  ...props
}) => {
  const { 
    ripples, 
    createRipple, 
    handleAnimationComplete 
  } = useRipple(disabled ?? false, onClick);

  return (
    <button
      className={cn(buttonVariants({ color, size, variant, disabled, className }))}
      onClick={createRipple}
      disabled={disabled ?? false}
      {...props}
    >
      {children}
      <AnimatePresence>
        {ripples.map(ripple => (
          <RippleEffect
            key={ripple.id}
            ripple={ripple}
            onComplete={handleAnimationComplete}
          />
        ))}
      </AnimatePresence>
    </button>
  );
};

Button.displayName = "Button";