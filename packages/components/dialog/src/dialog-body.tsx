import React from "react";
import { body } from "./dialog";

export interface DialogBodyProps extends
  React.HTMLAttributes<HTMLDivElement> {

  }


export function DialogBody({
  children,
  className,
  ...props
}: DialogBodyProps) {

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
