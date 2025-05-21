import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const tooltipVariants = tv({
  base: "",
  variants: {

  }
})


export type TooltipVariants = VariantProps<typeof tooltipVariants>;


export interface TooltipProps
  extends TooltipVariants{
    children: React.ReactNode;
  }

export const Tooltip: React.FC<TooltipProps> = ({
  children,
}) => {
  return (
    <div>
      {children}
    </div>
  )
};
Tooltip.displayName = "Tooltip";
