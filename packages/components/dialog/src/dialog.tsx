import React, { useEffect,  useRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { VariantsProvider } from "./use-variants";

export const dialogVariants = tv({
  base: [
    'backdrop:bg-black/80',
    'open:flex open:justify-center open:flex-col',
  ],
  slots: {
    header: 'p-4', 
    body: 'p-4 flex-grow overflow-auto',
    footer: 'p-4',
  },
  variants: {
    color: {
      default: {
        base: 'bg-default text-white',
      }
    },
    size: {
      sm: {
        base: 'w-80 min-h-80 ' 
      },
      md: {
        base: 'w-96 min-h-96 '
      },
      lg: {
        base: 'w-[32rem] min-h-[32rem] '
      }
    },
    radius: {
      sm: {
        base: 'rounded-sm'
      },
      md: {
        base: 'rounded-md'
      },
      lg: {
        base: 'rounded-lg'
      },
      full: {
        base: 'rounded-full'
      }
    },
    placement: {
      top: {
        base: 'top-4 left-1/2 -translate-x-1/2 ',
      },
      bottom: {
        base: 'bottom-4 left-1/2 -translate-x-1/2 !mt-auto !mb-0',// !mb-0 to prevent margin collapse
      },
      center: {
        base: 'top-1/2 left-1/2 -translate-1/2 !m-0',
      }
    }
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    radius: 'md',
    placement: 'center',
  },
});


export type DialogVariants = VariantProps<typeof dialogVariants>;


export interface DialogProps 
  extends Omit<React.DialogHTMLAttributes<HTMLDialogElement>, keyof DialogVariants>, DialogVariants {
}

export function Dialog({
  open = false,
  children,
  className,
  color,
  placement,
  size,
  radius,
  ...props
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { base } = dialogVariants({ color, size, placement, radius, className });

  useEffect(() => {
    if (!dialogRef.current) return;
    const dialog = dialogRef.current;

    if (open && !dialog.open) {
      dialog.showModal();
    };
    if (!open && dialog.open) {
      dialog.close();
    };
  }, [open]);


  const variants = {
    color,
    size,
    placement,
    radius
  }

  return (
    <VariantsProvider value={variants}>
      <dialog 
        ref={dialogRef}
        className={base()}
        {...props}
      >
        {children}
      </dialog>
    </VariantsProvider>
  );
}
