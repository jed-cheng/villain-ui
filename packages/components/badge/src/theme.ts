import { tv, type VariantProps } from "tailwind-variants";

const badge = tv({
  slots: {
    base: [
      'relative',
      'inline-flex',
      'shrink-0',
    ],
    content: [
      'text-xs',
      'rounded-full',
      'flex',
      'items-center',
      'place-content-center',
      'absolute',
      'whitespace-nowrap',
      'origin-center'
    ]
  },
  variants: {
    color: {
      default: {
        content:"bg-default text-white",
      },
      primary: {
        content: "bg-primary text-white",
      },
      secondary: {
        content: "bg-secondary text-white",
      },
      danger: {
        content: "bg-danger text-white",  
      },
      success: {
        content: "bg-success text-white",
      },
      warning: {
        content: "bg-warning text-white",
      },

    },
    size: {
      sm: {
        content: "w-4 h-4 min-w-4 min-h-4",
      },
      md: {
        content: "w-5 h-5 min-w-5 min-h-5",
      },
      lg: {
        content: "w-6 h-6 min-w-6 min-h-6", 
      }
    },
    placement: {
      'top-right': {
        content: "top-0 right-0 translate-x-1/2 -translate-y-1/2",
      },
      'top-left': {
        content: "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
      },
      'bottom-right': {
        content: "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
      },
      'bottom-left': {
        content: "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
      },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'sm',
    placement: 'top-right',
  },
});

export type BadgeVariants = VariantProps<typeof badge>;
export const { base, content } = badge(); 