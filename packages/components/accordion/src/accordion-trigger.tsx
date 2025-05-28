import React, { useCallback } from "react";
import { useAccordion } from "./use-accordion";
import { trigger } from "./accordion";
import { useAccordionItem } from "./use-accordion-item";
import { HTMLMotionProps, motion } from "motion/react";

export interface AccordionTriggerProps
  extends HTMLMotionProps<'button'> {
  }

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  className,
  children,
  onClick,
  ...props
}) => {
  const { type, value: currentValue, setValue, variants } = useAccordion();
  const { value } = useAccordionItem();


  const handleClick = useCallback((evt: React.MouseEvent<HTMLElement>) => {
    if (type === 'single') {
      currentValue[0] === value
        ? setValue([])
        : setValue([value]);
    } else if (type === 'multiple') {
      const newValue = currentValue.includes(value)
        ? currentValue.filter(v => v !== value)
        : [...currentValue, value];
      setValue(newValue);
    }

  }, [type, currentValue, setValue, value]);



  return (
    <motion.button
      layout
      onClick={handleClick}
      className={trigger({...variants, className})}
      {...props}
    >
      {children}
    </motion.button>
  );
}