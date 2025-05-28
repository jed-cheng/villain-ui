import { 
  createContext, 
  useContext, 
} from 'react';
import { TooltipVariants } from './tooltip';

export interface TooltipContextProps{
  isOpen: boolean;
  setIsOpen: (next: boolean) => void;
  triggerRef: React.RefObject<HTMLDivElement | null>;
  variants: TooltipVariants;
  delayedOpen: () => void;
  delayedClose: () => void;
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


