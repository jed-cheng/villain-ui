import React from "react";
import { useTooltip } from "./use-tooltip";
import { trigger } from "./tooltip";

export interface TooltipTriggerProps 
  extends React.HTMLAttributes<HTMLDivElement> {
  }

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  children,
  className,
  ...props
}) => {
  const { triggerRef, delayedOpen, delayedClose, variants } = useTooltip();

  const open = React.useCallback((evt: React.MouseEvent<HTMLElement>) => {
    delayedOpen();
  }, [delayedOpen])

  const close = React.useCallback((evt: React.MouseEvent<HTMLElement>) => {
    delayedClose();
  }, [delayedClose]);

  return (
    <div
      ref={triggerRef}
      onMouseEnter={open}
      onMouseLeave={close}
      className={trigger({...variants, className})}
      {...props}
    >
      {children}
    </div>
  );
}
TooltipTrigger.displayName = "TooltipTrigger";