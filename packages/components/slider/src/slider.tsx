import {  PanHandlers, TapHandlers, motion } from 'motion/react';
import React, { useRef, useState } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const sliderVariants = tv({
  base: 'relative flex items-center',
  slots: {
    track: 'relative flex items-center grow h-3 rounded-full bg-default-500',
    range: 'absolute h-full rounded-full z-0',
    thumb: [
      'block bg-white shadow-md ring-1 z-10 absolute',
    ]
      
  },
  variants: {
    color: {
      default: {
        range: 'bg-black',  
        thumb: 'ring-default ring-2 ',
      },
      primary: {
        range: 'bg-primary',
      },
      secondary: {
        range: 'bg-secondary',
      },
      success: {
        range: 'bg-success',
      },
      danger: {
        range: 'bg-danger',
      },
    },
    size: {
      sm: {
        track: 'h-2',
        thumb: 'w-4 h-4',
      },
      md: {
        track: 'h-3',
        thumb: 'w-5 h-5',
      },
      lg: {
        track: 'h-4',
        thumb: 'w-6 h-6',
      },
    },
    radius: {
      sm: {
        thumb: 'rounded-sm',
      },
      md: {
        thumb: 'rounded-md',
      },
      lg: {
        thumb: 'rounded-lg',
      },
      full: {
        thumb: 'rounded-full',
      }
    },
    disabled: {
      true: {
        base: 'opacity-50 ',
      },
      false: {
        thumb: ' active:cursor-grabbing'
      },
    },
  },

  defaultVariants: {
    color: 'default',
    size: 'md',
    radius: 'full',
  },
});

type SliderVariants = VariantProps<typeof sliderVariants>;

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof SliderVariants | 'value' | 'defaultValue'>,
    SliderVariants {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
}

const calcPercent = (value: number, min: number, max: number): number => {
  return ((value - min) / (max - min)) * 100;
};

const calcValue = (
  percentage: number, 
  min: number, 
  max: number, 
  step: number
): number => {
  return Math.round((percentage * (max - min) + min) / step) * step;
};


export const Slider = ({
  value,
  defaultValue,
  className,
  disabled,
  size,
  color,
  radius,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  ...props
}: SliderProps) => {

  const { base, track, range, thumb } = sliderVariants({
    size,
    color,
    radius,
    disabled,
    className,
  });

  const [uncontrolled, setUncontrolled] = useState(defaultValue ?? min);
  const trackRef = useRef<HTMLDivElement>(null);

  const isControlled = value !== undefined;
  const current = isControlled ? value : uncontrolled;
  const percent = calcPercent(current, min, max);
  


  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    if (!isControlled) {
      setUncontrolled(evt.target.valueAsNumber);
    } else {
      onChange?.(evt);
    }
  };


  const handleThumbPan:PanHandlers['onPan']= (_evt, info) => {
    if (disabled || !trackRef.current) return;

    const trackRect = trackRef.current.getBoundingClientRect();
    const offset = info.point.x- trackRect.left;
    const percent = Math.max(0, Math.min(1, offset / trackRect.width));
    const newValue = calcValue(percent, min, max, step);
    if (!isControlled) {
      setUncontrolled(newValue);
    }
  } 

  const handleTrackTap: TapHandlers['onTap'] = (_evt, info) => {
    if (disabled || !trackRef.current) return;
    
    const trackRect = trackRef.current.getBoundingClientRect();
    const offset =info.point.x  - trackRect.left;
    const percentage = Math.max(0, Math.min(1, offset / trackRect.width));
    const newValue = calcValue(percentage, min, max, step);
    
    if (!isControlled) {
      setUncontrolled(newValue);
    }
    
  };

  return (
    <div 
      className={base()}
      {...props}
    >
      <motion.div 
        className={track()}
        ref={trackRef}
        onTap={handleTrackTap}
      >
        <div 
          className={range()} 
          style={{ 
            width: `${percent}%`,
          }}
        />
        <motion.div
          className={thumb()}
          style={{
            left: `${percent}%`,
            transform: 'translateX(-50%)',
          }}
          onPan = {handleThumbPan}
        />
      </motion.div>
      <input
        type="range"
        className="hidden"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}

Slider.displayName = 'Slider';
