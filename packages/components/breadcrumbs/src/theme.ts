import { tv, VariantProps } from "tailwind-variants";

export const breadcrumbs = tv({
  slots: {
    base: '',
    item: ''
  },
  variants: {
    variant: {},
    size: {},
    color: {}
  }
})

export const { base } = breadcrumbs();
export type BreadcrumbsVariants = VariantProps<typeof breadcrumbs>;