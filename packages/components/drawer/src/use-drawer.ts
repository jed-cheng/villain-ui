import { createContext, useContext } from 'react';
import { DrawerVariants } from './drawer';

export interface DrawerContextProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  variants: DrawerVariants;
}

const drawerContext = createContext<DrawerContextProps | undefined>(undefined);



export function useDrawer() {
  const context = useContext(drawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }

  return context;
}

export const DrawerProvider = drawerContext.Provider;

