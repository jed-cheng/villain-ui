import React from "react";
import { base } from "./theme";

export interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={base({className})}
      {...props}
    >
      {children}
    </div>
  );
}