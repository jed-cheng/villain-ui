import React, { useState, useEffect, createContext, useContext, useId, useRef, ReactEventHandler, useImperativeHandle, ToggleEventHandler } from "react";
import { tv, type VariantProps } from "tailwind-variants";

// Dialog styles using tailwind-variants
const dialogVariants = tv({
  base: [
    'w-full h-screen fixed inset-0 z-50',
    'flex items-center justify-center',
    'backdrop:bg-black/50 backdrop:backdrop-blur-sm',
    'p-0 m-0 border-none outline-none',
    '[&:not([open])]:opacity-0 [&:not([open])]:pointer-events-none',
    '[&::backdrop]:transition-opacity [&::backdrop]:duration-200'
  ],
  variants: {
    position: {
      center: "flex items-center justify-center",
      top: "flex items-start justify-center pt-16",
      bottom: "flex items-end justify-center pb-16",
    },
    fullScreen: {
      true: "::backdrop:bg-background",
      false: "",
    },
  },
  defaultVariants: {
    position: "center",
    fullScreen: false,
  },
});




export interface DialogProps 
  extends React.DialogHTMLAttributes<HTMLDialogElement> {
    onOpen?: Function
    defaultOpen?: boolean
}

export function Dialog({
  open,
  defaultOpen = false,
  children,
  className,
  onClose,
  onOpen,
  onToggle,
  ...props
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [isOpen, setIsOpen] = useState(open || defaultOpen);

  const handleOpen = () => {

  }

  const handleClose: ReactEventHandler<HTMLDialogElement> = (evt) => {
    console.log("close", evt);
  }

  const handleToggle: ToggleEventHandler<HTMLDialogElement> = (evt) => {
    if ( !dialogRef.current) return;
    if (dialogRef.current.open) {
      handleOpen();
    } else {
      handleClose(evt);
    }
  }


  useEffect(() => {
    if (!dialogRef.current) return;
    const dialog = dialogRef.current;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
      <dialog 
        ref={dialogRef}
        onClose={handleClose}
        onToggle={handleToggle}
        {...props}
      >
        {children}
      </dialog>
  );
}
