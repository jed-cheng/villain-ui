import React, { MouseEventHandler } from "react";
import { cva } from "class-variance-authority";
import { useTabs } from "./use-tabs";
import { TabsCursor } from "./tabs-cursor";
import { cn } from "../../../utils/src";

const tabVariants = cva(
  [
    'relative',
    "w-full px-3 py-1 flex  justify-center items-center cursor-pointer",
    "hover:text-gray-400 transition-colors duration-300",
    'z-10'
  ],
  {
    variants: {
      // Size variants from HeroUI example
      size: {
        sm: "h-7 text-tiny",
        md: "h-8 text-small",
        lg: "h-9 text-medium",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md", // Matches default list radius
        lg: "rounded-lg", // Matches default list radius
        full: "rounded-full", // Matches color example radius
      },
      color: {
        primary: "",
        secondary: "",
        danger: "",
        success: "",
        warning: "",
      },
    },
    defaultVariants: {
      size: "md",
      radius: "md", // Default radius matches list
    },
  }
);


export interface TabProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'title'>{
  value: string | null;
  title: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({
  value,
  title,
  className,
  disabled = false,
  onClick,
  ...props // Pass rest of the props
}) => {
  // Get context including size, color, and radius
  const { 
    value: current, 
    setValue, 
    size, 
    color, 
    radius } = useTabs();
  const isActive = current === value;


  const handleClick:MouseEventHandler<HTMLButtonElement> = (evt) => {
    if (!disabled) {
      setValue(value);
    }
    if (onClick) {
      onClick(evt);
    }
  };

  return (
    <button
      className={cn(tabVariants({ size, radius, color }), className)}
      disabled={disabled}
      onClick={handleClick}
      {...props} // Spread remaining props
    >
      {title}
      {isActive && <TabsCursor />}
    </button>
  );
};
Tab.displayName = "Tab";
