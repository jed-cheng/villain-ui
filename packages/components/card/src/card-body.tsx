import React from "react";
import { body } from "./theme";

export interface CardBodyProps 
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={body({className})}
      {...props}
    >
      {children}
    </div>
  );
}