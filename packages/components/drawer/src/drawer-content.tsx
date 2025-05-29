import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react"; // Changed from framer-motion to motion/react
import { content, DrawerVariants } from "./drawer";
import { useDrawer } from "./use-drawer";

export interface DrawerContentProps
  extends Omit<HTMLMotionProps<"dialog">, keyof DrawerVariants | 'variants' | 'initial' | 'animate' | 'exit' | 'transition'>, // Adjusted Omit
    DrawerVariants {}

type Placement = DrawerVariants['placement'];

const getMotionVariants  = (placement: Placement) => {
  
  switch (placement) {
    case 'left':
      return {
        enter: { translateX: ['-100%', 0] },
        exit: { translateX: [0, '-100%'] },
      }
    case 'right':
      return {
        enter: { translateX: ['100%', 0] },
        exit: { translateX: [0, '100%'] },
      }
    case 'top':
      return {
        enter: { translateY: ['-100%', 0] },
        exit: { translateY: [0, '-100%'] },
      }
    case 'bottom':
      return {
        enter: { translateY: ['100%', 0] },
        exit: { translateY: [0, '100%'] },
      }
    default: 
      return {
        enter: { translateY: ['100%', 0] },
        exit: { translateY: [0, '100%'] },
      }
  }
}

type MotionVariantKey = keyof  ReturnType<typeof getMotionVariants>;

export const DrawerContent: React.FC<DrawerContentProps> = ({
  placement,
  className,
  children,
  style,
  ...props
}: DrawerContentProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isOpen, setIsOpen, variants: ctxVariants } = useDrawer();

  const variants = useMemo(() => ({
    ...ctxVariants,
    placement: placement ?? ctxVariants.placement
  }), [ctxVariants, placement]);

  const motionVariants = useMemo(() => 
    getMotionVariants(variants.placement), [variants.placement]);


  const handleAnimationStart = useCallback((variant: MotionVariantKey) => {
      if (dialogRef.current && variant === "enter") { 
        dialogRef.current.showModal();
      }
    },[]);

  const handleAnimationComplete = useCallback((variant: MotionVariantKey) => {
    if (dialogRef.current && variant === "exit") {
      dialogRef.current.close();
    }
  },[]);

  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;
    const dialog = dialogRef.current;

    const handleBackdropClick = (evt: MouseEvent) => {
      if (evt.target === dialog) {
        setIsOpen(false);
      }
    };

    dialog.addEventListener("click", handleBackdropClick);
    return () => {
      dialog.removeEventListener("click", handleBackdropClick);
    };
  }, [isOpen, setIsOpen]);


  return (
    <AnimatePresence>
        {isOpen ? (
          <motion.dialog
            ref={dialogRef}
            className={content({ ...variants, className })}
            variants={motionVariants}
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.2,
            }}
            onAnimationStart={handleAnimationStart}
            onAnimationComplete={handleAnimationComplete}
            {...props}
          >
            {children}
          </motion.dialog>
        ) : null}
      </AnimatePresence>
  )
}
DrawerContent.displayName = "DrawerContent";
