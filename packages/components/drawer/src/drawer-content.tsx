import { useCallback, useEffect, useMemo, useRef } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import { content, DrawerVariants } from "./drawer";
import { useDrawer } from "./use-drawer";




export interface DrawerContentProps 
  extends Omit<HTMLMotionProps<'dialog'>, keyof DrawerVariants>, DrawerVariants {
}


const animationVariants = {
  enter: { 
    opacity: [0, 1], 
    scale: [0.8, 1],
  },
  exit: { 
    opacity: [1, 0], 
    scale: [1, 0.8],
  },
}

type AnimationVariants = keyof typeof animationVariants;


export function DrawerContent({
  open,
  placement,
  className,
  children,
  style,
  ...props
}: DrawerContentProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isOpen, setIsOpen, variants:ctxVariants } = useDrawer();
  
  const variants = useMemo(() => ({
    ...ctxVariants,
    placement: placement ?? ctxVariants.placement,
  }), [ctxVariants, placement]);

  const handleAnimationStart = useCallback((variant:AnimationVariants) => {
    if (dialogRef.current && variant === 'enter') {
      dialogRef.current.showModal();
    }
  }, [])

  const handleAnimationEnd = useCallback((variant:AnimationVariants) => {
    if (dialogRef.current && variant === 'exit') {
      dialogRef.current.close();
    }
  }, [])


  useEffect(() => {
    if (!dialogRef.current || !isOpen) return;
    const dialog = dialogRef.current;

    const handleBackdrop = (evt: MouseEvent) => {
      if (evt.target === dialog) {
        setIsOpen(false)
      };
    };

    dialog.addEventListener('click', handleBackdrop);
    return () => {
      dialog.removeEventListener('click', handleBackdrop);
    };
  }, [isOpen, setIsOpen]);



  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.dialog 
          ref={dialogRef}
          className={content({ ...variants, className})}
          variants={animationVariants}
          transition={{ duration: 0.1 }}
          animate="enter"
          exit="exit"
          style={{
            transformOrigin: 'center',
            ...style
          }}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationEnd}
          {...props}
      >
        {children}
      </motion.dialog>
      ) : null}
    </AnimatePresence>
  );
}
DrawerContent.displayName = "DialogContent";
