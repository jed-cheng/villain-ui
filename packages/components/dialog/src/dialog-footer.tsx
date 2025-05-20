import React from "react";
import { useVariants } from "./use-variants";

export interface DialogFooterProps
  extends React.HTMLAttributes<HTMLElement> {}

export const DialogFooter: React.FC<DialogFooterProps> = ({
  children,
  className,
  ...props
}) => {
  const { footer } = useVariants();

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
