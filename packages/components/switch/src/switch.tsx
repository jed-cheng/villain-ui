import { motion } from "motion/react";
import React, { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";


const switchVariants = tv({
  base:[
    "absolute top-0  m-0 p-0 w-full h-full opacity-0 overflow-visible" ,
  ],
  slots: {
    track: [
      "rounded-full px-1",
      "inline-flex items-center justify-center",
      "transition-colors duration-200",
      "data-[checked=false]:bg-default-500 "
    ],
    knob: [
      "rounded-full bg-white origin-right shadow-sm cursor-pointer",
    ]
  },
  variants: {
    disabled: {
      true:  "cursor-not-allowed opacity-50",
      false: "cursor-pointer",
    },
    color: {
      default: {
        track: "bg-default"
      },
      primary: {
        track: "bg-primary"
      },
      secondary: {
        track: "bg-secondary"
      },
      danger: {
        track: "bg-danger"
      },
      success: {
        track: "bg-success"
      },
      warning: {
        track: "bg-warning"
      },
    },
    size: {
      sm: {
        track: "h-6 w-10",
        knob: "w-4 h-4"
      },
      md: {
        track: "h-7 w-12",
        knob: "w-5 h-5"
      },
      lg: {
        track: "h-8 w-14",
        knob: "w-6 h-6"
      }
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
    disabled: false,
  }
});



type SwitchVariants  = VariantProps<typeof switchVariants>;

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 
    keyof SwitchVariants | "color" | 'disbaled'>, 
    SwitchVariants
  {

  }


export const Switch: React.FC<SwitchProps> = ({
  color,
  size,
  disabled,
  checked,
  defaultChecked,
  onChange,
  className,
  ...props
}) => {
  const { base: baseVariants, track: trackVariants, knob: knobVariants } = switchVariants();
  const isControlled = checked !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultChecked ?? false);
  const isChecked = isControlled ? checked : uncontrolled;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    if (!isControlled) {
      setUncontrolled(evt.target.checked);
    } else {
      onChange?.(evt);
    }
  };

  return (
    <label className=" relative inline-flex max-w-fit items-center justify-center" >
      <input
        type="checkbox"
        className={baseVariants({ disabled, className })}
        disabled={disabled}
        checked={isChecked}
        defaultChecked={defaultChecked}
        onChange={handleChange}
        {...props}
      />
      <span 
        className={trackVariants({  color, size })}
        data-checked={isChecked}
      >
        <motion.span 
          className={knobVariants({ size })}
          initial={{
            x: isChecked ? "50%" : "-50%",
          }}
          animate={{
            x: isChecked ? "50%" : "-50%",
          }}
          transition={{
            type: "tween",
            duration: 0.1,
          }}
          whileTap={{
            originX: isChecked? 1 : 0,
            scaleX: 1.1,
          }}
        />
      </span>
    </label>
  );
};

Switch.displayName = "Switch";