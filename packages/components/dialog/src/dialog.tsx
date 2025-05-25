import { useMemo, useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { DialogProvider } from "./use-dialog";

export const dialogVariants = tv({
  base: [],
  slots: {
    content: 'open:flex open:justify-center open:flex-col',
    header: 'p-4', 
    body: 'p-4 flex-grow overflow-auto',
    footer: 'p-4',
    trigger: '',
  },
  variants: {
    color: {
      default: {
        content: 'bg-default text-white',
      }
    },
    size: {
      sm: {
        content: 'w-80 min-h-80 ' 
      },
      md: {
        content: 'w-96 min-h-96 '
      },
      lg: {
        content: 'w-[32rem] min-h-[32rem] '
      }
    },
    radius: {
      sm: {
        content: 'rounded-sm'
      },
      md: {
        content: 'rounded-md'
      },
      lg: {
        content: 'rounded-lg'
      },
      full: {
        content: 'rounded-full'
      }
    },
    placement: {
      top: {
        content: 'top-4 left-1/2 -translate-x-1/2 ',
      },
      bottom: {
        content: 'bottom-4 left-1/2 -translate-x-1/2 !mt-auto !mb-0',// !mb-0 to prevent margin collapse
      },
      center: {
        content: 'top-1/2 left-1/2 -translate-1/2 !m-0',
      }
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
    size: 'md',
    radius: 'md',
    placement: 'center',
    backdrop: 'opaque',
  },
});

export const { content, header, body, footer, trigger } = dialogVariants();

export type DialogVariants = VariantProps<typeof dialogVariants>;


export interface DialogProps 
  extends DialogVariants {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}


export function Dialog({
  open,
  defaultOpen,
  onOpenChange,
  color,
  placement,
  size,
  radius,
  backdrop,
  children,
}: DialogProps) {
  const isControlled = open !== undefined;
  const [ uncontrolled, setUncontrolled ] = useState(defaultOpen ?? false);
  const isOpen = isControlled ? open : uncontrolled;


  const setIsOpen = (open: boolean) => {
      if (isControlled) {
        onOpenChange?.(open);
      } else {
        setUncontrolled(open);
      }
    };

  const variants = useMemo(() => ({
    color,
    placement,
    size,
    radius,
    backdrop
  }), [color, placement, size, radius, backdrop]);

  return (
    <DialogProvider value={{
      isOpen,
      setIsOpen,
      variants
    }}>
      {children}
    </DialogProvider>
  );
}
