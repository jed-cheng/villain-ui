import React from "react";
import { DropdownVariants, item } from "./dropdown";
import { useDropdown } from "./use-dropdown";
import { composeEventHandlers } from "./compose-handler";

export interface DropdownItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, keyof DropdownVariants>, 
  DropdownVariants {
    disabled?: boolean;
  }

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  className,
  disabled,
  variant,
  color,
  onClick,
  ...props
}) => {
  const { setIsOpen, variants:ctxVariants } = useDropdown();

  const variants = React.useMemo(() => ({
    ...ctxVariants,
    color: color ?? ctxVariants.color,
    variant: variant ?? ctxVariants.variant,
  }), [ctxVariants, color, variant]);

  const close = React.useCallback((evt: React.MouseEvent<HTMLLIElement>) => {
      if (disabled) {
        evt.preventDefault();        
        return;
      }
      setIsOpen(false); 
    }, [disabled, setIsOpen]);

  return (
    <li
      className={item({...variants, className })}
      onClick={composeEventHandlers(onClick, close)}
      {...props}
    >
      {children}
    </li>
  );
}
