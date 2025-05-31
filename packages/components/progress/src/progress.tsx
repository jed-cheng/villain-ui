import { useMemo } from "react";
import { indicator, track, type ProgressVariant,  } from "./theme";

export interface ProgressProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof ProgressVariant>, 
    ProgressVariant {
      value?: number;
      defaultValue?: number;
      max?: number;
      min?: number;
    }

export const Progress: React.FC<ProgressProps> = ({
  color,
  size,
  disabled,
  value = 60,
  max = 100,
  min = 0,
  className,
  ...props
}) => { 

  const percentage = useMemo(() => 
    100 - ((value - min) / (max - min)) * 100, 
    [value, min, max]
  );

  return (
    <div 
      className={track({ size, disabled })}
      {...props} 
      >
        <div
          style={{ transform: `translateX(-${percentage}%)` }}
          className={indicator({ color })}
        />
    </div>
  );
}