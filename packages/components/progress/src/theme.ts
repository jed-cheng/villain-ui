import { tv, VariantProps } from "tailwind-variants";

export const progressVariants = tv({
  slots: {
    track: [
      'w-full',
      'max-w-md',
      'overflow-hidden',
      'rounded-full',
      'bg-default-300/50'
    ],
    indicator: [
      'h-full',
      'rounded-full',
      'transition-transform duration-300 ',
    ]
  },
  variants: {
    color: {
      default: {
        indicator: 'bg-default',
      },
      primary: {
        indicator: 'bg-primary',
      },
      secondary: {
        indicator: 'bg-secondary',
      },
      success: {
        indicator: 'bg-success',
      },
      danger: {
        indicator: 'bg-danger',
      },
      warning: {
        indicator: 'bg-warning',
      },
    },
    size: {
      sm: {
        track: 'h-1',
      },
      md: {
        track: 'h-3',
      },
      lg: {
        track: 'h-5',
      },
    },
    disabled: {
      true: {
        track: 'opacity-50',
      },
      false: null,
    }
  },
  defaultVariants:{
    size: 'md',
    color: 'default',
    disabled: false,
  }
})

export type ProgressVariant = VariantProps<typeof progressVariants>;
export const { track, indicator } = progressVariants();