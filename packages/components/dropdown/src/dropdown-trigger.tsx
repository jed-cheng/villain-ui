import { useCallback } from "react";
import { composeEventHandlers } from "./compose-handler";
import { DropdownVariants, trigger } from "./dropdown";
import { useDropdown } from "./use-dropdown";

export interface DropdownTriggerProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof DropdownVariants>, 
    DropdownVariants {
  }

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  children,
  className,
  onClick,
  disabled,
  variant,
  color,
  ...props
}) => {
  const { isOpen, setIsOpen, triggerRef, variants:ctxVariants } = useDropdown();

  const variants = useCallback(() => ({
    ...ctxVariants,
    color: color ?? ctxVariants.color,
    variant: variant ?? ctxVariants.variant,
  }), [ctxVariants, color, variant]);

  const toggle = useCallback((evt: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        evt.preventDefault();        
        return;
      }
      setIsOpen(!isOpen);
    }, [disabled, isOpen, setIsOpen]);

  return (
    <button
      ref={triggerRef}
      onClick={composeEventHandlers(onClick, toggle)}
      className={trigger({...variants, className })}
      {...props}
    >
      {children}
    </button>
  );
}
DropdownTrigger.displayName = "DropdownTrigger";