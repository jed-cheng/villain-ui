import React from "react";
import { footer } from "./theme";

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={footer({className})}
      {...props}
    >
      {children}
    </div>
  );
}