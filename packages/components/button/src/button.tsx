import React from "react";
import { AnimatePresence } from "motion/react";
import { RippleEffect } from "./ripple-effect";
import { useRipples } from "./use-ripples";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: [
    'relative overflow-hidden',
    'transform  transition duration-150',
    'inline-flex items-center justify-center',
    'cursor-pointer'
  ],
  variants: {
    color: {
      default: "bg-gray-600 text-white border-gray-600",
      primary: "bg-blue-500 text-white border-blue-500 ",
      secondary: "bg-white text-gray-800 ",
      danger: "bg-red-500 text-white border-red-500 ",
      success: "bg-green-500 text-white border-green-500 ",
      warning: "bg-yellow-500 text-white border-yellow-500 ",
    },
    size: {
      sm: "px-2 min-w-16 h-8 text-sm gap-1 rounded-sm [&>svg]:max-w-[theme(spacing.7)]",
      md: "px-4 min-w-20 h-10 text-md gap-2 rounded-md [&>svg]:max-w-[theme(spacing.8)]",
      lg: "px-6 min-w-24 h-12 text-lg gap-3 rounded-lg [&>svg]:max-w-[theme(spacing.8)]", 
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "active:scale-95",
    },
    variant: {
      solid: null,
      outline: " text-black border ",
      ghost: "   text-black",
      underline: "bg-transparent hover:underline text-black",
    },
  },
  compoundVariants: [
    {
      color: 'default',
      variant: 'outline',
      class: 'bg-transparent  hover:bg-gray-600/50',
    },
    {
      color: 'default',
      variant: 'ghost',
      class: 'bg-transparent hover:bg-gray-600/50',
    }
  ],
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
  disabled = false,
  children,
  onClick,
  ...props
}) => {
  const { 
    ripples, 
    createRipple, 
    handleAnimationComplete 
  } = useRipples(disabled, onClick);

  return (
    <button
      className={buttonVariants({ color, size, variant, disabled, className })}
      onClick={createRipple}
      disabled={disabled }
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