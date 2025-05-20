import React, { 
  createContext, 
  useContext, 
  useState, 
  ReactNode, 
  Dispatch, 
  SetStateAction 
} from 'react';

interface DialogContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};

interface DialogProviderProps {
  children?: ReactNode;
  initialOpen?: boolean; // Added initialOpen here
}

export const DialogProvider: React.FC<DialogProviderProps> = ({ 
  children, 
  initialOpen = false 
}) => { // Destructured initialOpen
  const [open, setOpen] = useState(initialOpen); // Changed isOpen to open and setIsOpen to setOpen to match context

  return (
    <DialogContext.Provider value={{ isOpen: open, setIsOpen: setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};