import { tv, VariantProps } from "tailwind-variants";

export const breadcrumbs = tv({
  slots: {
    base: 'flex items-center px-2 py-1  [&>li:last-child>span]:hidden ',
    item: 'flex items-center ',
    separator: 'px-1',
  },
  variants: {
    variant: {
      solid: {
        base: 'bg-default/50 ',
      },
      outline: {
        base: 'border border-gray-300 dark:border-gray-600',
      },
      ghost: {}
    },
    size: {
      sm: {
        base: 'text-xs',
        item: 'text-xs',
        separator: 'text-xs',
      },
      md: {
        base: 'text-sm',
        item: 'text-sm',
        separator: 'text-sm',
      },
      lg: {
        base: 'text-base',
        item: 'text-base',
        separator: 'text-base',
      },
    },
    color: {
      default: {
        base: 'text-default'
      },
      primary: {
        base: 'text-primary'
      },
      secondary: {
        base: 'text-secondary'
      },
      danger: {
        base: 'text-danger'
      },
      success: {
        base: 'text-success'
      },
      warning: {
        base: 'text-warning'
      }
    },
    radius: {
      none: {
        base: 'rounded-none',
      },
      sm: {
        base: 'rounded-sm',
      },
      md: {
        base: 'rounded-md',
      },
      lg: {
        base: 'rounded-lg',
      },
      full: {
        base: 'rounded-full',
      }
    },
    disabled: {
      true: {},
      false:{}
    }
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
    color: 'default',
    radius: 'md',
    disabled: false
  }
})

export const { base, item, separator } = breadcrumbs();
export type BreadcrumbsVariants = VariantProps<typeof breadcrumbs>;