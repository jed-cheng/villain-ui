import { 
  createContext, 
  useContext, 
} from 'react';
import { type DialogVariants } from './dialog';

interface DialogContextProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  variants: DialogVariants
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};


export const DialogProvider = DialogContext.Provider;