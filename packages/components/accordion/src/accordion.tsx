import React, { useCallback } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { AccordionProvider, type AccordionType } from './use-accordion';
import { LayoutGroup } from 'motion/react';

export const accordionVariants = tv({
  base: 'w-full px-2',
  slots: {
    item: '',
    trigger: 'w-full h-full py-4 flex items-center',
    content: ' overflow-y-hidden',
    indicator: 'ml-auto',
  },
  variants: {
    variant: {
      solid: {},
      outline: {},
      ghost: {},
    },
  }
})

export const { base, item, trigger, content, indicator } = accordionVariants();

export type AccordionVariants = VariantProps<typeof accordionVariants>;
export interface AccordionProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>, AccordionVariants {
  type?: AccordionType;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  type = 'single',
  value,
  defaultValue,
  onValueChange,
  variant,
  className,
  children,
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState<string[]>(defaultValue ?? []);
  const currentValue = isControlled ? value : internalValue;
  const setValue = useCallback((newValue: string[]) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    if (onValueChange) {
      onValueChange(newValue);
    }
  }, [isControlled, onValueChange]);



  return (
    <AccordionProvider value={{
      type,
      value: currentValue,
      setValue,
      variants: {
        variant,
      }
    }}
    >
        <div className={base({className})}>
          <LayoutGroup>
            {children}
          </LayoutGroup>
        </div>
    </AccordionProvider>
  );
}



