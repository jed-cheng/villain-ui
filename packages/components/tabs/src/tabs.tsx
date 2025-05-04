import React, { useCallback, useId, useState } from 'react';
import { cn } from '../../../utils/src/index';
import { TabsProvider, TabsContextProps } from './use-tabs';
import { cva, VariantProps } from 'class-variance-authority';
import {  LayoutGroup } from 'motion/react';

const tabsVariants = cva([
  'flex p-1 h-fit gap-2 items-center flex-nowrap ',
], {
  variants: {
    size: {
      sm: "gap-1",
      md: "gap-2", 
      lg: "gap-3", 
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg", 
      full: " rounded-full",
    },
    color: {
      default: "bg-gray-700 text-white",
      primary: "bg-blue-500 text-white border-transparent",
      secondary: "bg-white text-gray-800 border-gray-400",
      danger: "bg-red-500 text-white border-transparent",
      success: "bg-green-500 text-white border-transparent",
      warning: "bg-yellow-500 text-white border-transparent",
    },
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    variant: {
      solid: null,
      underline: "bg-transparent",
      light: "bg-transparent",
      bordered: "border-b bg-transparent",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: null,
    }
  },
  defaultVariants: {
    size: 'md',
    radius: 'md',
    color: 'primary', 
    orientation: 'horizontal',
  },
});

export type TabsVariants = VariantProps<typeof tabsVariants>;

export interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, keyof TabsVariants>, // Exclude color from HTML attributes
    TabsVariants {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string | null) => void;
}




export function getFirstChildValue(children: React.ReactNode): string | null {
  for (const child of React.Children.toArray(children)) {
    if (
      React.isValidElement<{ value?: string }>(child) &&
      child.props.value != null
    ) {
      return child.props.value;
    }
  }
  return null;
}

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  value: controlled,
  onValueChange,
  children,
  className,
  size,
  radius,
  color, 
  disabled,
  orientation,
  variant,
}) => {
  const id = useId();
  const isControlled = controlled !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultValue ?? getFirstChildValue(children));

  const current = isControlled ? controlled : uncontrolled;
  const setValue = useCallback(
    (next: string | null) =>{
      if (!isControlled) {
        setUncontrolled(next);
      }
      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );

  const contextValue: TabsContextProps = {
    value: current,
    setValue,
    size,
    color, 
    radius, 
    disabled,
    variant
  };

  return (
    <TabsProvider value={contextValue}>
      <ul
        className={cn(tabsVariants({ size, radius, color, orientation }), className)}
      >
        <LayoutGroup id={id}>
          {children}
        </LayoutGroup>
      </ul>
    </TabsProvider>
  )
};
Tabs.displayName = "Tabs";
