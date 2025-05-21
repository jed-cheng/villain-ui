import React, { createContext, Dispatch, useContext, useState } from 'react';

type AccordionType = 'single' | 'multiple';

interface AccordionContextProps {
  type?: AccordionType;
  value: string[];
  setValue: Dispatch<React.SetStateAction<string[]>>;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordionContext must be used within an AccordionProvider');
  }
  return context;
};


export interface AccordionProviderProps {
  type?: AccordionType;
  value?: string[];
  defaultValue?: string[];
  children: React.ReactNode;
}


export const AccordionProvider: React.FC<AccordionProviderProps> = ({
  value: controlled,
  type = 'single',
  defaultValue,
  children,
}) =>{
  const [value, setValue] = useState<string[]>(controlled || defaultValue || []);

  


  const contextValue = {
    type,
    value,
    setValue,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      {children}
    </AccordionContext.Provider>
  );
}