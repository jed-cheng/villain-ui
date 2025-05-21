import React from "react";
import { useAccordion } from "./use-accordion";

export interface AccordionItemProps
  extends React.DetailsHTMLAttributes<HTMLDetailsElement> {

  }

export const AccordionItem: React.FC<AccordionItemProps> = ({
  className,
  children,
  ...props
}) => {
  const context = useAccordion();

  return (
    <details
      {...props}
    >
      {children}
    </details>
  );
}