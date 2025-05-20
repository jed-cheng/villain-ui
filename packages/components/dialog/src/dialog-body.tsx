import React from "react";
import { useVariants } from "./use-variants";

export interface DialogBodyProps extends
  React.HTMLAttributes<HTMLDivElement> {

  }


export function DialogBody({
  children,
  className,
  ...props
}: DialogBodyProps) {
  const { body } = useVariants();

  return (
    <div
      className={body({ className })}
      {...props}
    >
      {children}
    </div>
  );
}

DialogBody.displayName = "DialogBody";
