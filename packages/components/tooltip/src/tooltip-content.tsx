import React from "react";

export interface TooltipContentProps 
  extends React.HTMLAttributes<HTMLDivElement> {
  }

export const TooltipContent: React.FC<TooltipContentProps> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
}
TooltipContent.displayName = "TooltipContent";