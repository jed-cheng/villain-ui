import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import React from "react"
import { menu } from "./theme";
import { createPortal } from "react-dom";

export interface NavbarMenuProps 
  extends HTMLMotionProps<'menu'>{
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
  }

export const NavbarMenu: React.FC<NavbarMenuProps> = ({
  open,
  onOpenChange,
  defaultOpen,
  children,
  className,
  ...props
}) => {
  const isControlled = open !== undefined;
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen ?? false);
  const currentOpen = isControlled ? open : internalOpen;

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) {
        setInternalOpen(next);
      }
      onOpenChange?.(next);
    },[isControlled, onOpenChange]);

  return createPortal(
    <AnimatePresence>
      {currentOpen ? (    
        <motion.menu 
          className={menu({ className })}
          initial={{  height:'0' }}
          animate={{  height: '100%' }}
          exit={{  height: '0' }}
          transition={{ type: 'tween', stiffness: 300, damping: 30, duration: 0.3 }}


          {...props}
        >
          {children}
        </motion.menu>): null}
      </AnimatePresence>, document.body);
}
NavbarMenu.displayName = "NavbarMenu"