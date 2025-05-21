import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { AccordionProvider } from './use-accordion';

export const accordionVariants = tv({
  base: [

  ],
  variants: {
    variant: {

    },
    disabled: {
      true: 'opacity-50 cursor-default',
      false: '',
    }
  }
})


export type AccordionVariants = VariantProps<typeof accordionVariants>;
export interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement>, AccordionVariants {
  type?: 'single' | 'multiple';
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  type = 'single',
  children,
  className,
  ...props
}) => {
  return (
    <AccordionProvider>
      <div
        {...props}
      >
        {children}
      </div>
    </AccordionProvider>
  );
}



