import { 
  createContext, 
  useContext, 
} from 'react';
import { type DropdownVariants } from './dropdown';

export interface DropdownContextProps{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  variants: DropdownVariants
} 

const DropdownContext = createContext<DropdownContextProps | null>(null);

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('This component must be used within a <Tabs> component.');
  }
  return context;
};

export const DropdownProvider = DropdownContext.Provider;


