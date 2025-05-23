import { tv, type VariantProps } from "tailwind-variants";
import { PopoverProvider } from "./use-popover";
import React, { useCallback } from "react";
import { VariantsProvider } from "./use-variants";

const popoverVariants = tv({
  base: '',
  variants: {
    placement: {
      top: {},
      bottom: {},
      left: {},
      right: {},
      'top-start': {},
      'top-end': {},
      'bottom-start': {},
      'bottom-end': {},
      'left-start': {},
      'left-end': {},
      'right-start': {},
      'right-end': {},
    },
  },

})

export type PopoverVariants = VariantProps<typeof popoverVariants>;

export interface PopoverProps
  extends PopoverVariants {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
    offset?: number;
  }

export const Popover: React.FC<PopoverProps> = ({
  children,
  placement,
  open,
  onOpenChange,
  defaultOpen = false,
  offset = 4,
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
    <PopoverProvider value={{isOpen, setIsOpen, triggerRef}}>
      <VariantsProvider value={{placement}}>
        {children}
      </VariantsProvider>
    </PopoverProvider>

  );
}

Popover.displayName = "Popover";