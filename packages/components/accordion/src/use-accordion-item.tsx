import { createContext, useContext } from "react";

export interface AccordionItemContextProps {
  value: string
  isOpen: boolean
}

const AccordionItemContext = createContext<AccordionItemContextProps | undefined>(undefined);

export const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('useAccordionItem must be used within an AccordionItemProvider');
  }
  return context;
} 
export const AccordionItemProvider = AccordionItemContext.Provider;