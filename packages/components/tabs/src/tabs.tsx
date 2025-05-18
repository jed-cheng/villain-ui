import React, { useCallback, useState } from 'react';
import { TabsProvider, TabsContextProps } from './use-tabs';
import { tv, type VariantProps } from 'tailwind-variants';
import { VariantsProvider } from './use-variants';

export const tabsVariants = tv({
  base: '',
  slots: {
    tabsList: [
      'flex p-1 h-fit gap-2 items-center flex-nowrap'
    ],
    tab: [
    'relative flex  justify-center items-center cursor-pointer',
    "w-full px-3 py-1 z-10 ",
    ],
    tabsContent: [

    ],
    tabsCursor: [
      'absolute z-0 inset-0',
      'bg-default-600'
    ]
  },
  variants: {
    size: {
      sm: {
        tab: "h-7 text-tiny",
        tabsList: 'gap-1',
      },
      md: {
        tab: "h-8 text-small",
        tabsList: 'gap-2',
      },
      lg: {
        tab: "h-9 text-medium",
        tabsList: 'gap-3',
      }
    },
    radius: {
      none: {
        tabsCursor: "rounded-none",
        tab: "rounded-none",
        tabsList: "rounded-none",
      },
      sm: {
        tabsCursor: "rounded-sm",
        tab: "rounded-sm",
        tabsList: "rounded-sm",
      },
      md: {
        tabsCursor: "rounded-md",
        tab: "rounded-md",
        tabsList: "rounded-md",
      },
      lg: {
        tabsCursor: "rounded-lg",
        tab: "rounded-lg",
        tabsList: "rounded-lg",
      },
      full: {
        tabsCursor: "rounded-full",
        tab: "rounded-full",
        tabsList: "rounded-full",
      },
    },
    color: {
      default: {
        tabsList: "bg-default text-white",
      },
      primary: {
        tabsList: "bg-primary text-white",
      },
      secondary: {
        tabsList: "bg-secondary text-white",
      },
      danger: {
        tabsList: "bg-danger text-white",
      },
      success: {
        tabsList: "bg-success text-white",
      },
      warning: {
        tabsList: "bg-warning text-white",
      },

    },
    orientation: {
      horizontal: {
        tabsList: "flex-row",
      },
      vertical: {
        tabsList: "flex-col",
      },
    },
    variant: {
      solid: null,
      underline: {
        tabsCursor: "bg-transparent border-b-2 border-white rounded-none",
      },
      ghost: { 
        tabsList: "bg-transparent",
        tabsCursor: "bg-default/20 backdrop-blur-sm", 
        tab: "text-default-foreground hover:text-default-900",
      },
    },
    disabled: {
      true: {
        tab: "opacity-50 cursor-default",
        tabsCursor: "opacity-50 cursor-default",
      },
      false: {
        tab: "hover:text-gray-400 transition-colors duration-300",
        tabsCursor: "opacity-100 cursor-pointer",
      },
    }
  },
  defaultVariants: {
    size: 'md',
    radius: 'md',
    color: 'default', 
    orientation: 'horizontal',
  },
});

export type TabsVariants = VariantProps<typeof tabsVariants>;

export interface TabsProps
  extends TabsVariants {
  children: React.ReactNode;
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
  size,
  radius,
  color, 
  disabled,
  orientation,
  variant,
}) => {
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
    disabled
  };

  const variants = {
    size,
    color, 
    radius, 
    disabled,
    orientation,
    variant
  }

  return (
    <TabsProvider value={contextValue}>
      <VariantsProvider value={variants}>
        {children}
      </VariantsProvider>
    </TabsProvider>
  )
};

Tabs.displayName = "Tabs";



