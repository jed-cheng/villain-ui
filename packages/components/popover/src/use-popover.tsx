import React, { createContext } from "react";
import { type PopoverVariants } from "./popover";

export interface PopoverContextProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  variants: PopoverVariants;
}

const popoverContext = createContext<PopoverContextProps | null>(null);

export const usePopover = () => {
  const context = React.useContext(popoverContext);
  if (!context) {
    throw new Error("usePopover must be used within a PopoverProvider");
  }
  return context;
}

export const PopoverProvider = popoverContext.Provider;