import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const sliderVariants = tv({
  base: 'relative flex items-center select-none touch-none',
  slots: {
    track: 'bg-gray-200 relative grow',
    range: 'absolute bg-blue-500',
    thumb:
      'block bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50',
  },
  variants: {
    orientation: {
      horizontal: 'w-full h-5 flex-row',
      vertical: 'w-5 h-full flex-col',
    },
    size: {
      sm: {},
      md: {},
      lg: {},
    },
    color: {
      default: {
        range: 'bg-gray-600',
        thumb: 'focus:ring-gray-500',
      },
      primary: {
        range: 'bg-blue-500',
        thumb: 'focus:ring-blue-500',
      },
      secondary: {
        range: 'bg-purple-500',
        thumb: 'focus:ring-purple-500',
      },
      success: {
        range: 'bg-green-500',
        thumb: 'focus:ring-green-500',
      },
      warning: {
        range: 'bg-yellow-500',
        thumb: 'focus:ring-yellow-500',
      },
      danger: {
        range: 'bg-red-500',
        thumb: 'focus:ring-red-500',
      },
    },
    radius: {
      none: { track: 'rounded-none', range: 'rounded-none', thumb: 'rounded-none' },
      sm: { track: 'rounded-sm', range: 'rounded-sm', thumb: 'rounded-sm' },
      md: { track: 'rounded-md', range: 'rounded-md', thumb: 'rounded-md' },
      lg: { track: 'rounded-lg', range: 'rounded-lg', thumb: 'rounded-lg' },
      full: { track: 'rounded-full', range: 'rounded-full', thumb: 'rounded-full' },
    },
    disabled: {
      true: {
        thumb: 'bg-gray-300',
        track: 'bg-gray-100',
        range: 'bg-gray-400',
      },
    },
  },
  compoundVariants: [
    // Horizontal sizes
    {
      orientation: 'horizontal',
      size: 'sm',
      class: {
        track: 'h-0.5',
        range: 'h-full',
        thumb: 'w-3 h-3',
      },
    },
    {
      orientation: 'horizontal',
      size: 'md',
      class: {
        track: 'h-1',
        range: 'h-full',
        thumb: 'w-4 h-4',
      },
    },
    {
      orientation: 'horizontal',
      size: 'lg',
      class: {
        track: 'h-2',
        range: 'h-full',
        thumb: 'w-6 h-6',
      },
    },
    // Vertical sizes
    {
      orientation: 'vertical',
      size: 'sm',
      class: {
        track: 'w-0.5',
        range: 'w-full',
        thumb: 'w-3 h-3',
      },
    },
    {
      orientation: 'vertical',
      size: 'md',
      class: {
        track: 'w-1',
        range: 'w-full',
        thumb: 'w-4 h-4',
      },
    },
    {
      orientation: 'vertical',
      size: 'lg',
      class: {
        track: 'w-2',
        range: 'w-full',
        thumb: 'w-6 h-6',
      },
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    size: 'md',
    color: 'primary',
    radius: 'full',
    disabled: false,
  },
});

type SliderVariants = VariantProps<typeof sliderVariants>;

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof SliderVariants | 'value' | 'defaultValue' | 'onChange'>,
    SliderVariants {
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
}

export const Slider = React.forwardRef<
  HTMLDivElement,
  SliderProps
>(({
  className,
  disabled,
  orientation,
  size,
  color,
  radius,
  value: valueProp,
  defaultValue = [0],
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  ...props
}, ref) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const value = valueProp !== undefined ? valueProp : internalValue;

  const { base, track, range, thumb } = sliderVariants({
    orientation,
    size,
    color,
    radius,
    disabled,
    className,
  });

  // TODO: Implement slider logic for dragging, keyboard navigation, etc.

  const percentage = Math.max(0, Math.min(100, ((value[0] - min) / (max - min)) * 100));

  const rangeStyle = orientation === 'horizontal' ? { width: `${percentage}%` } : { height: `${percentage}%` };
  const thumbStyle = orientation === 'horizontal' 
    ? { left: `calc(${percentage}% - ${sliderVariants.defaultVariants.size === 'sm' ? '0.375rem' : sliderVariants.defaultVariants.size === 'md' ? '0.5rem' : '0.75rem'})` } // Adjust based on thumb width
    : { bottom: `calc(${percentage}% - ${sliderVariants.defaultVariants.size === 'sm' ? '0.375rem' : sliderVariants.defaultVariants.size === 'md' ? '0.5rem' : '0.75rem'})` }; // Adjust based on thumb height


  return (
    <div ref={ref} className={base()}>
      <span className={track()}>
        <span className={range()} style={rangeStyle} />
      </span>
      <span
        className={thumb()}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value[0]}
        aria-orientation={orientation}
        tabIndex={disabled ? -1 : 0}
        style={thumbStyle}
        // TODO: Add event handlers for keyboard and mouse interaction
      />
    </div>
  );
});

Slider.displayName = 'Slider';
