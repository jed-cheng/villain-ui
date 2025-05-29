import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useAccordionItem } from './use-accordion-item';
import { indicator } from './accordion';

export interface AccordionIndicatorProps
  {
}

export const AccordionIndicator: React.FC<AccordionIndicatorProps> = ({ 
}) => {
  const { isOpen } = useAccordionItem();

  return (

      <ChevronLeft 
        className={indicator()}
        style={{
          transform: isOpen ? 'rotate(-90deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease-in-out',
        }}
      />
  )
};

AccordionIndicator.displayName = 'AccordionIndicator';