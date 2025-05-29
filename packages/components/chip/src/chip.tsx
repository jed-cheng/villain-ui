import { base, type ChipVariants } from "./theme";

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof ChipVariants>, 
    ChipVariants {}

export const Chip: React.FC<ChipProps> = ({
  children,
  className,
  color = 'default',
  size = 'md',
  radius = 'md',
  variant = 'solid',
  disabled = false,
  ...props
}) => {

  return (
    <div 
    color={color}
    className={base({
      color,
      size,
      radius,
      variant,
      disabled,
      className,
    })}
      {...props}
    >
      {children}
    </div>
  );
}