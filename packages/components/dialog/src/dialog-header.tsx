import React from "react";
import { header } from "./dialog";

export interface DialogHeaderProps
  extends React.HTMLAttributes<HTMLElement> {}

export const DialogHeader: React.FC<DialogHeaderProps> = ({
  children,
  className,
  ...props
}) => {

  return (
    <header className={header({ className })} {...props}>
      {children}
    </header>
  );
};

DialogHeader.displayName = "DialogHeader";
