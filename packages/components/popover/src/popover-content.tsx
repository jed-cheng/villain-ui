import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePopover } from "./use-popover";
import { useVariants } from "./use-variants";
import { type PopoverPlacementType } from "./popover";

export interface PopoverContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
}

const calcPosition = (
  trig: DOMRect,
  cont: DOMRect,
  placement: PopoverPlacementType,
  offset: number = 4,
) => {
  let top = trig.bottom + window.scrollY;
  let left = trig.left + window.scrollX;

  switch (placement) {
    case "top":
      top = trig.top - cont.height - offset + window.scrollY;
      left = trig.left + window.scrollX  - (cont.width - trig.width) / 2;
      break;
    case "left":
      top = trig.top + window.scrollY - (cont.height - trig.height) / 2;
      left = trig.left - cont.width - offset + window.scrollX;
      break;
    case "right":
      top = trig.top + window.scrollY - (cont.height - trig.height) / 2;
      left = trig.right + offset + window.scrollX;
      break;
    case "top-start":
      top = trig.top - cont.height - offset + window.scrollY;
      left = trig.left + window.scrollX;
      break;
    case "top-end":
      top = trig.top - cont.height - offset + window.scrollY;
      left = trig.right - cont.width + window.scrollX;
      break;
    case "bottom-start":
      top = trig.bottom + offset + window.scrollY;
      left = trig.left + window.scrollX;
      break;
    case "bottom-end":
      top = trig.bottom + offset + window.scrollY;
      left = trig.right - cont.width + window.scrollX;
      break;
    case "left-start":
      top = trig.top + window.scrollY;
      left = trig.left - cont.width - offset + window.scrollX;
      break;
    case "left-end":
      top = trig.bottom - cont.height + window.scrollY;
      left = trig.left - cont.width - offset + window.scrollX;
      break;
    case "right-start":
      top = trig.top + window.scrollY;
      left = trig.right + offset + window.scrollX;
      break;
    case "right-end":
      top = trig.bottom - cont.height + window.scrollY;
      left = trig.right + offset + window.scrollX;
      break;
    default:
      // Default to bottom center placement
      top = trig.bottom + offset + window.scrollY;
      left = trig.left + window.scrollX - (cont.width - trig.width) / 2;
      break;
  }


  return { top, left };
}


export const PopoverContent: React.FC<PopoverContentProps> = ({
  children,
  ...props
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const variants = useVariants()
  const { isOpen, setIsOpen, triggerRef } = usePopover();
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);


  useEffect(() => {
    if (!isOpen || !contentRef.current || !triggerRef.current) return;
    const updatePos = () => {
      const trigRect = triggerRef.current!.getBoundingClientRect();
      const contRect = contentRef.current!.getBoundingClientRect();
      const newPos = calcPosition(
        trigRect,
        contRect,
        variants.placement,
      );
      if (newPos) setPos(newPos);
    }
    updatePos();

    const ro = new ResizeObserver(() => updatePos());
    ro.observe(contentRef.current);
    window.addEventListener("resize", updatePos);
    window.addEventListener("scroll", updatePos);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updatePos);
      window.removeEventListener("scroll", updatePos);
    };
}, [isOpen, variants.placement]);




  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    isOpen ? el.showPopover() : el.hidePopover();
  }, [isOpen]);


  
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="border-2 border-black"
      ref={contentRef}
      style={{...pos}}
      popover="manual"
      {...props}
    >
      {children}
    </div>
  )

};