import { tv, VariantProps } from "tailwind-variants";

export const toast = tv({
  slots: {
    container: 'fixed z-50 flex flex-col gap-2 text-foreground  ',
    item: [
      'shadow-sm px-1 py-2 relative',
      'flex my-1 w-full sm:w-[356px] min-h-4',
      'relative'
    ],
    closeButton: 'absolute -top-2 -right-2  rounded-full ',
  },
  variants: {
    placement: {
      'top-left': {
        container: 'top-4 left-4 flex-col-reverse',
      },
      'top-right': {
        container: 'top-4 right-4 flex-col-reverse',
      },
      'top-center': {
        container: 'top-4 left-1/2 transform -translate-x-1/2 flex-col-reverse',
      },
      'bottom-left': {
        container: 'bottom-4 left-4 ',
      },
      'bottom-right': {
        container: 'bottom-4 right-4 ',
      },
      'bottom-center': {
        container: 'bottom-4 left-1/2 transform -translate-x-1/2 ',
      },
    },
    radius: {
      none: {
        item: 'rounded-none',
      },
      sm: {
        item: 'rounded-sm',
      },
      md: {
        item: 'rounded-md',
      },
      lg: {
        item: 'rounded-lg',
      },
      full: {
        item: 'rounded-full',
      },
    },
    color: {
      default: {
        item: 'bg-default',
        close: 'bg-default'
      },
      primary: {
        item: 'bg-primary ',
      },
      secondary: {
        item: 'bg-secondary',
      },
      success: {
        item: 'bg-success',
      },
      warning: {
        item: 'bg-warning',
      },
      danger: {
        item: 'bg-danger',
      }
    }
  },
  defaultVariants: {
    placement: 'bottom-right',
    radius: 'md',
    color: 'default',
  }
})

export type ToastVariant = VariantProps<typeof toast>;
export const { container, item, closeButton } = toast();
