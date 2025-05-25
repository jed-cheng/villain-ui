import React from "react";
import { usePopover } from "./use-popover";
import { PopoverVariants, trigger } from "./popover";

export interface PopoverTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, PopoverVariants {
}


export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({
  children,
  className,
  ...props

}) => {
  const { isOpen, setIsOpen, triggerRef, variants } = usePopover();
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    setIsOpen(!isOpen);
  }

  return (
    <button
      className={trigger({...variants, className})}
      ref={triggerRef}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
};