import { tv, VariantProps } from "tailwind-variants";

export const chip = tv({
  slots: {
    base: [
      'px-1 text-white inline-flex items-center justify-center',
      'maxi-w-fit min-w-min',
      'whitespace-nowrap'
    ],
  },
  variants: {
    color: {
      default: {
        base: 'bg-default ',
      },
      primary: {
        base: 'bg-primary ',
      },
      secondary: {
        base: 'bg-secondary ',
      },
      success: {
        base: 'bg-success ',
      },
      danger: {
        base: 'bg-danger ',
      },
      warning: {
        base: 'bg-warning text-black',
      },
    },
    size: {
      sm: {
        base: 'h-6 text-xs',
      },
      md: {
        base: 'h-7 text-sm',
      },
      lg: {
        base: 'h-8 text-md',
      },
    },
    radius: {
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
      },
    },
    variant: {
      solid: {},
      outlined: {
        base: 'border bg-transparent text-current border-current',
      },
      ghost: {
        base: 'bg-transparent text-current border-current',
      },
    },
    disabled: {
      true: {
        base: 'opacity-50 cursor-default',
      },
      false: null,
    }
  },
  defaultVariants: {
    size: 'md',
    radius: 'md',
    variant: 'solid',
    disabled: false,
  }
})

export type ChipVariants = VariantProps<typeof chip>;
export const { base } = chip()