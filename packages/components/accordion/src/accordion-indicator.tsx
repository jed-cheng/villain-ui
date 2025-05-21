import React, { Children } from 'react';

export interface AccordionIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  isOpen?: boolean;
}

export const AccordionIndicator: React.FC<AccordionIndicatorProps> = ({ 
  isOpen,
  children
}) => {
  return (
    <span>
      {children}
    </span>
  )
};

AccordionIndicator.displayName = 'AccordionIndicator';