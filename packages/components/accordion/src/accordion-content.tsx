import React from "react";
import { useAccordion } from "./use-accordion";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import { useAccordionItem } from "./use-accordion-item";
import { content } from "./accordion";

export interface AccordionContentProps
  extends HTMLMotionProps<'div'> {
  }

const motionVariants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  enter: {
    height: 'auto',
    opacity:  1,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.3, ease: "easeInOut" },
    },
  },
  exit: {
    height:  0,
    opacity:  0,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.2, ease: "easeInOut" }, 
    },
  },
};

export const AccordionContent: React.FC<AccordionContentProps> = ({
  className,
  children,
  ...props
}) => {
  const { variants } = useAccordion();
  const { isOpen } = useAccordionItem();
  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <motion.div
          layout
          initial="initial"
          animate="enter"
          exit="exit"
          variants={motionVariants}
          className={content({...variants, className})}
          {...props}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};