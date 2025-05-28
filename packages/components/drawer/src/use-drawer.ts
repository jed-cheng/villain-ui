import { createContext, useContext } from 'react';
import { DrawerVariants } from './drawer';

export interface DrawerContextProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleOpen: () => void;
  variants: DrawerVariants;
}

const drawerContext = createContext<DrawerContextProps | undefined>(undefined);
export const DrawerProvider = drawerContext.Provider;



export function useDrawer() {
  const context = useContext(drawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }

  return context;
}


