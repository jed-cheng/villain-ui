import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { content, type DropdownVariants } from "./dropdown";
import { useDropdown } from "./use-dropdown";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";

export interface DropdownContentProps
  extends Omit<HTMLMotionProps<'dialog'>, keyof DropdownVariants>, DropdownVariants {
    offset?: number;
  }
type Placement = DropdownVariants["placement"]

const calcPosition = (
  trig: DOMRect,
  cont: DOMRect,
  placement: Placement,
  offset: number = 4,
) => {
  const cx = trig.left + trig.width / 2; // center x of the trigger
  const cy = trig.top + trig.height / 2; // center y of the trigger
  const hw = cont.width / 2; // half width of the content
  const hh = cont.height / 2; // half height of the content


  switch (placement) {
    case "top":
      return { 
        top: trig.top - cont.height - offset, 
        left: cx - hw 
      };
    case "bottom":
      return { 
        top: trig.bottom + offset, 
        left: cx - hw 
      };
    case "left":
      return { 
        top: cy - hh, 
        left: trig.left - cont.width - offset 
      };
    case "right":
      return { 
        top: cy - hh, 
        left: trig.right + offset 
      };
    case "top-start":
      return { 
        top: trig.top - cont.height - offset, 
        left: trig.left 
      };
    case "top-end":
      return { 
        top: trig.top - cont.height - offset, 
        left: trig.right - cont.width 
      };
    case "bottom-start":
      return { 
        top: trig.bottom + offset, 
        left: trig.left 
      };
    case "bottom-end":
      return { 
        top: trig.bottom + offset, 
        left: trig.right - cont.width 
      };
    case "left-start":
      return { 
        top: trig.top, 
        left: trig.left - cont.width - offset 
      };
    case "left-end":
      return { 
        top: trig.bottom - cont.height, 
        left: trig.left - cont.width - offset 
      };
    case "right-start":
      return { 
        top: trig.top, 
        left: trig.right + offset 
      };
    case "right-end":
      return { 
        top: trig.bottom - cont.height, 
        left: trig.right + offset 
      };
    default:
      return { 
        top: trig.bottom + offset, 
        left: cx - hw 
      };
  }
}

const originFor = (placement: Placement) => {
  if (!placement) return "left center";
  else if (placement.startsWith("top")) return "bottom center";
  else if (placement.startsWith("bottom")) return "top center";
  else if (placement.startsWith("left")) return "right center";
  else return "left center";
};

const animationVariants = {
  enter: {
    opacity: [0, 1],
    scale: [0, 1],
  },
  exit: {
    opacity: [1, 0],
    scale: [1, 0],
  },
}
type AnimationVariants = keyof typeof animationVariants;
type Position = {
  left: number;
  top: number;
}

export const DropdownContent: React.FC<DropdownContentProps> = ({
  open,
  offset = 4,
  placement,
  backdrop,
  children,
  className,
  style,
  ...props
}) => {
  const contentRef = useRef<HTMLDialogElement>(null);
  const {
    isOpen,
    setIsOpen,
    triggerRef,
    variants: ctxVariants,
  } = useDropdown();

  const [pos, setPos] = useState<Position>({ 
    left: 0, 
    top: 0 
  });

  const variants = useMemo(()=>({
    ...ctxVariants,
    placement: placement ?? ctxVariants.placement,
    backdrop: backdrop ?? ctxVariants.backdrop,
  }), [ctxVariants, placement, backdrop]);

  const transformOrigin = useMemo(() => {
    return originFor(variants.placement);
  }, [variants.placement]);

  const handleAnimationStart = useCallback((variant:AnimationVariants) => {
    if (contentRef.current && variant === 'enter') {
      contentRef.current.showModal();
    }
  }, [])

  const handleAnimationComplete = useCallback((variant:AnimationVariants) => {
    if (contentRef.current && variant === 'exit') {
      contentRef.current.close();
    }
  }, [])

  useEffect(() =>{
    const updatePos = ()=>{
      if (!isOpen || !contentRef.current || !triggerRef.current) return;

      const trigRect = triggerRef.current!.getBoundingClientRect();
      const contRect = contentRef.current!.getBoundingClientRect();
      const pos = calcPosition(
        trigRect,
        contRect,
        variants.placement,
        offset,
      );
      setPos(pos);
    }
    
    updatePos();
    window.addEventListener('resize', updatePos);
    return () => {
      window.removeEventListener('resize', updatePos);
    };
  }, [isOpen, offset, variants.placement]);


  useEffect(() => {
    if (!contentRef.current || !isOpen) return;
    const dialog = contentRef.current;

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
          ref={contentRef}
          className={content({ ...variants, className })}
          animate="enter"
          exit="exit"
          variants={animationVariants}
          transition={{ duration: 0.1 }}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
          style={{
            transformOrigin,
            translateX: pos.left,
            translateY: pos.top,
            ...style
          }}
          {...props}
        >
          {children}
        </motion.dialog>
      ): null}
    </AnimatePresence>

  );
}

DropdownContent.displayName = "DropdownContent";