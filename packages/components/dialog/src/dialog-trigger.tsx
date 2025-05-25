import React from "react";
import { useDialog } from "./use-dialog";
import { trigger } from "./dialog";

export interface DialogTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  }


export const DialogTrigger: React.FC<DialogTriggerProps> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  const { isOpen, setIsOpen, variants } = useDialog();
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    onClick?.(evt);
    setIsOpen(!isOpen);
  }

  return (
    <button
      className={trigger({...variants, className})}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
DialogTrigger.displayName = "DialogTrigger";