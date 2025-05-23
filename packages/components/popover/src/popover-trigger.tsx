import React from "react";
import { usePopover } from "./use-popover";

export interface PopoverTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}


export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({
  children,

}) => {
  const { isOpen, setIsOpen, triggerRef } = usePopover();
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    setIsOpen(!isOpen);
  }

  return (
    <button
      className="border-2 border-black"
      ref={triggerRef}
      onClick={handleClick}
    >
      {children}
    </button>
  )
};