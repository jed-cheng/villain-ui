import React, { HTMLAttributes } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const skeleton = tv({
  base: [
    'relative',
    'overflow-hidden'
  ],
  variants: {
    isLoading: {
      true: [
        'before:z-10',
        'before:opacity-100',
        'bg-gray-300 dark:bg-default',
        'before:absolute',
        'before:inset-0',
        'before:transform',
        'before:border-y',
        'before:border-gray-500/50',
        'before:bg-gradient-to-r',
        'before:from-transparent',
        'before:to-transparent',
        'before:animate-shimmer',
        'before:via-gray-400/50 before:dark:via-gray-500/50',
        'after:absolute',
        'after:inset-0',
        'after:bg-gray-300 dark:after:bg-default',
      ],
      false: null
    }
  }
})

export type SkeletonVariant = VariantProps<typeof skeleton>;


export interface SkeletonProps 
  extends HTMLAttributes<HTMLDivElement>, SkeletonVariant {
}

export const Skeleton: React.FC<SkeletonProps> = ({
  isLoading = true,
  children,
  className,
  style,
  ...props
}) => {
  return (
    <div className={skeleton({
      isLoading,
      className
    })}
      {...props}
    >
      {children}
    </div>
  )


};