import React, { useCallback } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { TooltipProvider } from "./use-tooltip";

export const tooltipVariants = tv({
  base: "",
  slots: {
    trigger: '',
    content: ''
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
  },
  defaultVariants: {
    placement: 'top',
  }
})

export const { content, trigger } = tooltipVariants();


export type TooltipVariants = VariantProps<typeof tooltipVariants>;


export interface TooltipProps
  extends TooltipVariants{
    children: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    openDelay?: number;
    closeDelay?: number;
  }

export const Tooltip: React.FC<TooltipProps> = ({
  open,
  defaultOpen,
  onOpenChange,
  placement = 'top',
  openDelay = 0,
  closeDelay = 1000,
  children,
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

  const triggerRef = React.useRef<HTMLDivElement>(null);
  const openTimerRef = React.useRef<number | null>(null);
  const closeTimerRef = React.useRef<number | null>(null);

  const delayedOpen = useCallback(() => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
    }
    openTimerRef.current = window.setTimeout(() => {
      setIsOpen(true);
    }, openDelay);
  }, [setIsOpen, openDelay]);

  const delayedClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, closeDelay);
  }, [setIsOpen, closeDelay]);


  return (
    <TooltipProvider value={{
      isOpen,
      setIsOpen,
      triggerRef,
      delayedOpen,
      delayedClose,
      variants: {
        placement
      }
    }}>
      {children}
    </TooltipProvider>

  )
};
Tooltip.displayName = "Tooltip";
