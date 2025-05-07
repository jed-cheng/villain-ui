import { motion } from "motion/react";
import React, { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";


const switchVariants = tv({
  base:[
    "absolute top-0  m-0 p-0 w-full h-full opacity-0 overflow-visible" ,
  ],
  variants: {
    disabled: {
      true:  "cursor-not-allowed opacity-50",
      false: "cursor-pointer",
    },
    color: {
      default: "",
      primary: "",
      success: "",
      danger:  "",
      warning: "",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    }
  },
});

const trackVariants = tv({
  base:[
    "rounded-full px-1 ",
    "inline-flex  items-center justify-center",
    "transition-colors duration-200",
    "bg-gray-400"
  ],
  variants: {
    color: {
      default: " data-[checked=true]:bg-gray-800 ",
      primary: "",
      success: "",
      danger:  "",
      warning: "",
    },
    size: {
      sm: "h-6 w-11",
      md: "h-7 w-12",
      lg: "h-8 w-14",
    }
  },
  compoundVariants: [
  ],
  defaultVariants: { 
    color: "default" ,
    size: "md",
  },
});

const knobVariants = tv({
  base:[
    "rounded-full bg-white origin-right shadow-sm cursor-pointer" ,
  ],
  variants: {
    size: {
      sm: 'w-3 h-3',
      md: 'w-5 h-5',
      lg: 'w-7 h-7',
    }

  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [

  ],
});



type SwitchVariants  = VariantProps<typeof switchVariants>;
type TrackVariants = VariantProps<typeof trackVariants>;
type KnobVariants  = VariantProps<typeof knobVariants>;

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
        className={switchVariants({ disabled, className })}
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