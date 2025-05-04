import React, { MouseEventHandler } from "react";
import { useTabs } from "./use-tabs";
import { TabsCursor } from "./tabs-cursor";
import { tv, type VariantProps } from 'tailwind-variants';

const tabVariants = tv({
  base: [
    'relative',
    "w-full px-3 py-1 flex  justify-center items-center cursor-pointer",
    'z-10'
  ],
  variants: {
    size: {
      sm: "h-7 text-tiny",
      md: "h-8 text-small",
      lg: "h-9 text-medium",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg", 
      full: "rounded-full",
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      danger: "",
      success: "",
      warning: "",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "hover:text-gray-400 transition-colors duration-300",
    }
  },
  defaultVariants: {
    size: "md",
    radius: "md",
    disabled: false,
  },
});

type TabVariants = VariantProps<typeof tabVariants>;

export interface TabProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof TabVariants | 'value' | 'title'>  {
  value: string | null;
  title: React.ReactNode;
  disabled?: boolean;
}

export const Tab: React.FC<TabProps> = ({
  value,
  title,
  className,
  onClick,
  disabled,
  ...props
}) => {
  const { 
    value: current, 
    setValue, 
    size, 
    color, 
    radius,
    disabled: tabsDisabled,
  } = useTabs();
  const isActive = current === value;
  const isDisabled = disabled || tabsDisabled;


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
      className={tabVariants({ size, radius, color,disabled:isDisabled, className })}
      disabled={isDisabled ?? false}
      onClick={handleClick}
      {...props}
    >
      {title}
      {isActive && !isDisabled && <TabsCursor />}
    </button>
  );
};
Tab.displayName = "Tab";
