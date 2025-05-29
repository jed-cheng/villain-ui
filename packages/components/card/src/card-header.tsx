import React from "react";
import { header } from "./theme";

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={header({className})}
      {...props}
    >
      {children}
    </div>
  );
}