import React from "react";
import { useAccordion } from "./use-accordion";

export interface AccordionContentProps
  extends React.DetailsHTMLAttributes<HTMLButtonElement> {

  }

export const AccordionTrigger: React.FC<AccordionContentProps> = ({
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