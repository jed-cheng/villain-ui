import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const dropdownVariants = tv({
  base: [''],
  variants: {
  }
})

export type DropdownVariants = VariantProps<typeof dropdownVariants>;

export interface DropdownProps extends DropdownVariants {
  children: React.ReactNode;
}


export const Dropdown: React.FC<DropdownProps> = () => {
  return <div>Dropdown</div>;
};
