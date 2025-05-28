import React, { useCallback, useState } from 'react';
import { DrawerProvider } from './use-drawer';
import { tv, type VariantProps } from 'tailwind-variants';


export const drawerVariants = tv({
  base: '',
  slots: {
    content: '',
    trigger: '',
  },
  variants:{
    placement: {
      left:{
        content: 'left-0 top-0 h-full w-64',
      },
      right:{
        content: 'right-0 top-0 h-full w-64',
      },
      top:{
        content: 'top-0 left-0  w-full h-64',
      },
      bottom:{
        content: 'bottom-0 left-0 w-full h-64',
      },
    }
  },
  defaultVariants: {
    placement: 'bottom',
  }
})

export const { content, trigger } = drawerVariants();

export type DrawerVariants = VariantProps<typeof drawerVariants>;


export interface DrawerProps extends DrawerVariants {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Drawer: React.FC<DrawerProps> = ({ 
  placement = 'bottom',
  open, 
  onOpenChange,
  defaultOpen,
  children, 
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen ?? false);
  const isOpen = open !== undefined ? open : internalOpen;

  const toggleOpen = useCallback(() => {
    if (onOpenChange) {
      onOpenChange(!isOpen);
    } else {
      setInternalOpen(!isOpen);
    }
  }, [isOpen, onOpenChange]);

  const setIsOpen = useCallback((open: boolean) => {
    if (onOpenChange) {
      onOpenChange(open);
    } else {
      setInternalOpen(open);
    }
  }, [onOpenChange]);

  return (
    <DrawerProvider value={{ 
      isOpen, 
      setIsOpen,
      toggleOpen,
      variants: {
        placement,
      }
    }}>
      {children}
    </DrawerProvider>

  );
};

Drawer.displayName = 'Drawer';

export { Drawer };
