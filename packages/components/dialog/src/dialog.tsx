import React, { useEffect,  useRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { VariantsProvider } from "./use-variants";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";

export const dialogVariants = tv({
  base: [
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
    },
    backdrop: {
      opaque: {
        base: 'backdrop:bg-background/50',
      },
      blur: {
        base: 'backdrop:backdrop-blur-xs',
      },
      transparent: {
        base: 'backdrop:opacity-0',
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


export type DialogVariants = VariantProps<typeof dialogVariants>;


export interface DialogProps 
  extends Omit<HTMLMotionProps<'dialog'>, keyof DialogVariants>, DialogVariants {
}


const defaultVariants = {
  opened: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0.8 },
}

type AnimationVariants = keyof typeof defaultVariants;


export function Dialog({
  open = false,
  children,
  className,
  color,
  placement,
  size,
  radius,
  backdrop,
  ...props
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { base } = dialogVariants({ color, size, placement, radius, backdrop, className });


  const handleAnimationStart = (variant:AnimationVariants) => {
    if (dialogRef.current && variant === 'opened') {
      dialogRef.current?.showModal();
    }
  }

  const handleAnimationEnd = (variant:AnimationVariants) => {
    if (dialogRef.current && variant === 'closed') {
      dialogRef.current?.close();
    }
  }


  const variants: DialogVariants = {
    color,
    size,
    placement,
    radius,
    backdrop
  }

  return (
    <VariantsProvider value={variants}>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.dialog 
            ref={dialogRef}
            className={base()}
            variants={defaultVariants}
            transition={{ duration: 0.1 }}
            initial="closed"
            animate="opened"
            exit="closed"
            onAnimationStart={handleAnimationStart}
            onAnimationComplete={handleAnimationEnd}
            {...props}
        >
          {children}
        </motion.dialog>
        ) : null}
      </AnimatePresence>
    </VariantsProvider>
  );
}
