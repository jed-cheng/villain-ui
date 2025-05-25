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
  ...variants
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
      variants
    }}>
      {children}
    </DropdownProvider>
  );
};
