import React, { useState } from 'react';
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
        content: ' mr-auto h-full',
      },
      right:{
        content: ' ml-auto h-full ',
      },
      top:{
        content: 'mb-auto w-full',
      },
      bottom:{
        content: ' mt-auto w-full ',
      },

    },
    size: {
      sm: {},
      md: {},
      lg: {},
      full: {}
    }
  },
  compoundVariants: [
    {
      size: 'sm',
      placement: ['bottom', 'top'],
      class: {
        content: ' h-[384px] ',
      }
    },
    {
      size: 'sm',
      placement: ['left', 'right'],
      class: {
        content: ' w-sm',
      }
    },
    {
      size: 'md',
      placement: ['bottom', 'top'],
      class: {
        content: ' h-[512px] ',
      }
    },
    {
      size: 'md',
      placement: ['left', 'right'],
      class: {
        content: ' w-md',
      }
    },
    {
      size: 'lg',
      placement: ['bottom', 'top'],
      class: {
        content: ' h-[640px] ',
      }
    },
    {
      size: 'lg',
      placement: ['left', 'right'],
      class: {
        content: ' w-lg',
      }
    },
    {
      size: 'full',
      placement: ['bottom', 'top'],
      class: {
        content: ' h-full ',
      }
    },
    {
      size: 'full',
      placement: ['left', 'right'],
      class: {
        content: ' w-full',
      }
    },
  ],
  defaultVariants: {
    placement: 'right',
    size: 'sm',
  },
})

export const { content, trigger } = drawerVariants();

export type DrawerVariants = VariantProps<typeof drawerVariants>;


export interface DrawerProps extends DrawerVariants {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Drawer: React.FC<DrawerProps> = ({ 
  placement = 'right',
  size = 'sm',
  open, 
  onOpenChange,
  defaultOpen,
  children, 
}) => {
  const isControlled = open !== undefined;
  const [ internalOpen, setInternalOpen ] = useState(defaultOpen ?? false);
  const isOpen = isControlled ? open : internalOpen;


  const setIsOpen = (open: boolean) => {
    if (isControlled) {
      onOpenChange?.(open);
    } else {
      setInternalOpen(open);
    }
  };


  return (
    <DrawerProvider value={{ 
      isOpen, 
      setIsOpen,
      variants: {
        placement,
        size,
      }
    }}>
      {children}
    </DrawerProvider>
  );
};

Drawer.displayName = 'Drawer';
