import React, { HTMLAttributes, useCallback } from "react";
import { useAccordion } from "./use-accordion";
import { trigger } from "./accordion";
import { useAccordionItem } from "./use-accordion-item";
import { AccordionIndicator } from "./accordion-indicator";

export interface AccordionTriggerProps
  extends HTMLAttributes<HTMLButtonElement>{
    asChild?: boolean;
  }

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  asChild = false,
  className,
  children,
  onClick,
  ...props
}) => {
  const Comp = asChild ? React.Fragment : 'button';
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
    <Comp
      onClick={handleClick}
      className={trigger({...variants, className})}
      {...props}
    >
      {children}
      <AccordionIndicator/>
    </Comp>
  );
}