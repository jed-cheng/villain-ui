import React from "react";

export interface TooltipTriggerProps 
  extends React.HTMLAttributes<HTMLDivElement> {
  }

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
}
TooltipTrigger.displayName = "TooltipTrigger";