import React from "react";
import { useAccordion } from "./use-accordion";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import { useAccordionItem } from "./use-accordion-item";
import { content } from "./accordion";

export interface AccordionContentProps
  extends HTMLMotionProps<'div'> {
  }

const animationVariants = {
  enter: {
    height: [0, 'auto'],
  },
  exit: {
    height: ['auto', 0],
  },
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  className,
  children,
  ...props
}) => {
  const { variants } = useAccordion();
  const { isOpen } = useAccordionItem();
  return (
    <AnimatePresence initial={false}>
      {isOpen? (
        <motion.div
          animate="enter"
          exit="exit"
          variants={animationVariants}
          className={content({...variants, className})}
          {...props}
        >
          {children}
        </motion.div>
      ): null}
    </AnimatePresence>
  );
}