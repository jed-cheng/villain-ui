import React, {  useCallback,  useEffect,   useMemo, useRef } from "react";
import { usePopover } from "./use-popover";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import { content, type PopoverVariants } from "./popover";


export interface PopoverContentProps
  extends HTMLMotionProps<'div'>, PopoverVariants{
    offset?: number;
}

type Placement = PopoverVariants["placement"]

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

/* TODO: add collision detection */
// const collisionDetection = ()=>{}

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


export const PopoverContent: React.FC<PopoverContentProps> = ({
  children,
  className,
  placement,
  variant,
  backdrop,
  offset,
  // motion props
  transition,
  style,
  ...props
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { 
    isOpen, 
    setIsOpen,
    triggerRef, 
    variants: ctxVariants 
  } = usePopover();

  const variants = useMemo(()=>({
    ...ctxVariants,
    placement: placement ?? ctxVariants.placement,   // keep ctx value unless prop supplied
    variant:   variant   ?? ctxVariants.variant,
    backdrop:  backdrop  ?? ctxVariants.backdrop,
  }), [ctxVariants, placement, variant, backdrop]);

  const transformOrigin = useMemo(() => {
    return originFor(variants.placement);
  }, [variants.placement]);

  const [pos, setPos] = React.useState<{ left: number; top: number }>({ left: 0, top: 0 });


  const updatePos = useCallback(()=>{
    if (!isOpen || !contentRef.current || !triggerRef.current) return;

    const trigRect = triggerRef.current!.getBoundingClientRect();
    const contRect = contentRef.current!.getBoundingClientRect();
    const { left, top } = calcPosition(
      trigRect,
      contRect,
      variants.placement,
      offset,
    );
    setPos({ left, top });
  },[variants.placement, offset, isOpen]);


  const handleAnimationStart = useCallback((variant:AnimationVariants) => {
    if (contentRef.current && variant === 'enter' ) {
      contentRef.current.showPopover();
    }
  }, []);

  const handleAnimationEnd = useCallback((variant:AnimationVariants) => {
    if (contentRef.current && variant === 'exit') {
      contentRef.current.hidePopover();
    }
  }, [])


  useEffect(() => {
    if (!isOpen || !contentRef.current || !triggerRef.current) return;
    updatePos();
    window.addEventListener("resize", updatePos);
    return () => {
      window.removeEventListener("resize", updatePos);
    }
  }, [updatePos]);

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(evt.target as Node) &&
        contentRef.current &&
        !contentRef.current.contains(evt.target as Node) 
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen? (
        <motion.div
          className={content({...variants, className})}
          ref={contentRef}
          popover="manual"
            
          animate='enter'
          exit='exit'
          variants={animationVariants}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationEnd}
          transition={{
            duration: 0.1,
            ...transition
          }}
          style={{
            translateX: pos.left,
            translateY: pos.top,
            transformOrigin,
            ...style
          }}
          {...props}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
};