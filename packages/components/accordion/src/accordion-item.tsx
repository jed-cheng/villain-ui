import React, {  useMemo } from "react";
import { useAccordion } from "./use-accordion";
import { item } from "./accordion";
import { AccordionItemProvider } from "./use-accordion-item";
import { HTMLMotionProps,  motion } from "motion/react";

export interface AccordionItemProps
  extends HTMLMotionProps<'div'> {
    value: string;
  }

export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  className,
  children,
  onClick,
  ...props
}) => {
  const { value: currentValue,  variants } = useAccordion();
  const isOpen = useMemo(() => currentValue.includes(value), [currentValue, value]);

  return (
    <AccordionItemProvider value={{
        value,
        isOpen
      }}
    >
      <motion.div
        layout
        className={item({...variants, className})}
        {...props}
      >
        {children}
      </motion.div>
    </AccordionItemProvider>
  );
}