import { useCallback, useEffect, useMemo, useRef } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import { content, DialogVariants } from "./dialog";
import { useDialog } from "./use-dialog";




export interface DialogContentProps 
  extends Omit<HTMLMotionProps<'dialog'>, keyof DialogVariants>, DialogVariants {
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


export function DialogContent({
  open,
  color,
  placement,
  size,
  radius,
  backdrop,
  className,
  children,
  style,
  ...props
}: DialogContentProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isOpen, setIsOpen, variants:ctxVariants } = useDialog();
  
  const variants = useMemo(() => ({
    ...ctxVariants,
    color: color ?? ctxVariants.color,
    placement: placement ?? ctxVariants.placement,
    size: size ?? ctxVariants.size,
    radius: radius ?? ctxVariants.radius,
    backdrop: backdrop ?? ctxVariants.backdrop
  }), [ctxVariants, color, placement, size, radius, backdrop]);

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
DialogContent.displayName = "DialogContent";
