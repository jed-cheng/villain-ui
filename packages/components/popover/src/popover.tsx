import { tv, type VariantProps } from "tailwind-variants";
import { PopoverProvider } from "./use-popover";
import React from "react";
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
    side: {
      top: {},
      bottom: {},
      left: {},
      right: {},
    },
    align: {
      start: {},
      center: {},
      end: {},
    },
  },

})

export type PopoverVariants = VariantProps<typeof popoverVariants>;
export type PopoverPlacementType = PopoverVariants['placement'];

export interface PopoverProps
  extends PopoverVariants {
    children: React.ReactNode;
    offset?: number;
  }

export const Popover: React.FC<PopoverProps> = ({
  children,
  placement,

}) => {
  const [isOpen, setIsOpen] = React.useState(false);
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