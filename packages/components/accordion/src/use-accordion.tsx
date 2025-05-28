import { createContext,  useContext } from 'react';
import { type AccordionVariants } from './accordion';

export type AccordionType = 'single' | 'multiple';

interface AccordionContextProps {
  type: AccordionType;
  value: string[];
  setValue: (value: string[]) => void;
  variants: AccordionVariants
}

const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordionContext must be used within an AccordionProvider');
  }
  return context;
};


export const AccordionProvider = AccordionContext.Provider;