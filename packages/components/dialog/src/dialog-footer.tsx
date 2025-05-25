import React from "react";
import { footer } from "./dialog";

export interface DialogFooterProps
  extends React.HTMLAttributes<HTMLElement> {}

export const DialogFooter: React.FC<DialogFooterProps> = ({
  children,
  className,
  ...props
}) => {

  return (
    <footer 
      className={footer({ className })} 
      {...props}
    >
      {children}
    </footer>
  );
};

DialogFooter.displayName = "DialogFooter";
