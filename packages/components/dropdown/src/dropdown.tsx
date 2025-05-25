import React, { useCallback } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { DropdownProvider } from "./use-dropdown";

export const dropdownVariants = tv({
  base: '',
  slots: {
    trigger:'',
    content: '',
    item: '',
  },
  variants: {
    color: {
      default: {
        trigger: 'bg-default text-default-foreground ',
        content: 'bg-default text-default-foreground',
        item: 'text-default-foreground ',
      },
      primary: {
        trigger: 'bg-primary text-primary-foreground ',
        content: 'bg-primary text-primary-foreground',
        item: 'text-primary-foreground ',
      },
      secondary: {
        trigger: 'bg-secondary text-secondary-foreground ',
        content: 'bg-secondary text-secondary-foreground',
        item: 'text-secondary-foreground ',
      },
      success: {
        trigger: 'bg-success text-success-foreground ',
        content: 'bg-success text-success-foreground',
        item: 'text-success-foreground '
      },
      warning: {
        trigger: 'bg-warning text-warning-foreground ',
        content: 'bg-warning text-warning-foreground',
        item: 'text-warning-foreground '
      },
      danger: {
        trigger: 'bg-danger text-danger-foreground ',
        content: 'bg-danger text-danger-foreground',
        item: 'text-danger-foreground'
      },
    },
    variant: {
      solid: {},
      outline: {},
      ghost: {}
    },
    placement: {
      'top':{},
      'bottom': {},
      'left': {},
      'right': {},
      'top-start': {},
      'top-end': {},
      'bottom-start': {},
      'bottom-end': {},
      'left-start': {},
      'left-end': {},
      'right-start': {},
      'right-end': {},
    },
    backdrop: {
      opaque: {
        content: 'backdrop:bg-background/50',
      },
      blur: {
        content: 'backdrop:backdrop-blur-xs',
      },
      transparent: {
        content: 'backdrop:opacity-0',
      },
    }
  },
  defaultVariants: {
    color: 'default',
    variant: 'solid',
    placement: 'bottom',
    backdrop: 'transparent',
  }
})

export const { trigger, content, item } = dropdownVariants()

export type DropdownVariants = VariantProps<typeof dropdownVariants>;

export interface DropdownProps extends DropdownVariants {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}


export const Dropdown: React.FC<DropdownProps> = ({
  open,
  defaultOpen,
  onOpenChange,
  children,
  color = 'default',
  variant = 'solid',
  placement = 'bottom',
  backdrop = 'transparent',

}) => {
  const isControlled = open !== undefined;
  const [uncontrolled, setUncontrolled] = React.useState(defaultOpen ?? false);
  const isOpen = isControlled ? open : uncontrolled;
  const setIsOpen = useCallback((open: boolean) => {
    if (isControlled) {
      onOpenChange?.(open);
    } else {
      setUncontrolled(open);
    }
  }, [isControlled, onOpenChange]);

  const triggerRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <DropdownProvider value={{
      isOpen,
      setIsOpen,
      triggerRef,
      variants: {
        color,
        variant,
        placement,
        backdrop,
      }
    }}>
      {children}
    </DropdownProvider>
  );
};
