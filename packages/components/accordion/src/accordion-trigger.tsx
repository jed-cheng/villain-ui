import React from "react";
import { useAccordion } from "./use-accordion";

export interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  }

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  className,
  children,
  ...props
}) => {
  const context = useAccordion();
  return (
    <button
      {...props}
    >
      {children}
    </button>
  );
}