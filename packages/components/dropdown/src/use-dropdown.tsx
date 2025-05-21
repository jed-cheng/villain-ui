import { 
  createContext, 
  useContext, 
} from 'react';

export interface DropdownContextProps{
  open: boolean;
  setOpen: (next: boolean) => void;
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


