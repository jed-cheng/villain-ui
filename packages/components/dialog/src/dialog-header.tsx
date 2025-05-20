import React from "react";
import { useVariants } from "./use-variants";

export interface DialogHeaderProps
  extends React.HTMLAttributes<HTMLElement> {}

export const DialogHeader: React.FC<DialogHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  const { header } = useVariants();

  return (
    <header className={header({ className })} {...props}>
      {children}
    </header>
  );
};

DialogHeader.displayName = "DialogHeader";
