import { tv, type VariantProps } from "tailwind-variants";
import { PopoverProvider } from "./use-popover";
import React, { useCallback } from "react";

export const popoverVariants = tv({
  base: '',
  slots: {
    trigger: '',
    content: ' shadow-sm',
    arrow: '',
  },
  variants: {
    variant: {
      solid: {
        content: ''
      },
      outline: {},
      ghost: {},
    },
    radius: {
      sm: {
        content: 'rounded-sm',
        trigger: 'rounded-sm',
      },
      md: {
        content: 'rounded-md',
        trigger: 'rounded-md',
      },
      lg: {
        content: 'rounded-lg',
        trigger: 'rounded-lg',
      }
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
        content: 'backdrop:bg-background/50 ',
      },
      blur: {
        content: 'backdrop:backdrop-blur-xs ',
      },
      transparent: {},
    }
  },
  defaultVariants: {
    variant: 'solid',
    backdrop: 'transparent',
    placement: 'bottom',
    radius: 'md',
  }
})

export const { trigger, content, arrow } = popoverVariants();

export type PopoverVariants = VariantProps<typeof popoverVariants>;

export interface PopoverProps
  extends PopoverVariants {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
  }

export const Popover: React.FC<PopoverProps> = ({
  children,
  open,
  onOpenChange,
  defaultOpen = false,
  ...variants
}) => {
  const isControlled = open !== undefined;
  const [uncontrolled, setUncontrolled] = React.useState(defaultOpen || false);
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
    <PopoverProvider value={{
      isOpen, 
      setIsOpen, 
      triggerRef,
      variants: variants
    }}>
        {children}
    </PopoverProvider>

  );
}

Popover.displayName = "Popover";