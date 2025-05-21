import { 
  createContext, 
  useContext, 
} from 'react';

export interface TooltipContextProps{
  open: boolean;
  setOpen: (next: boolean) => void;
} 

const TooltipContext = createContext<TooltipContextProps | null>(null);

export const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('This component must be used within a <Tabs> component.');
  }
  return context;
};

export const TooltipProvider = TooltipContext.Provider;


