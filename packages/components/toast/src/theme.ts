import { tv, VariantProps } from "tailwind-variants";

export const toast = tv({
  slots: {
    base: 'fixed',
  },
  variants: {
    placement: {
      'top-left': {},
      'top-right': {},
      'top-center': {},
      'bottom-left': {},
      'bottom-right': {},
      'bottom-center': {},
    }
  }
})

export type ToastVariant = VariantProps<typeof toast>;
export const { base } = toast();
