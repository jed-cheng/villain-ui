import { DropdownVariants, trigger } from "./dropdown";
import { useDropdown } from "./use-dropdown";

export interface DropdownTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, DropdownVariants {
}

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  children,
  className,
  ...props
}) => {
  const { isOpen, setIsOpen, triggerRef, variants } = useDropdown();
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    setIsOpen(!isOpen);
  }
  return (
    <button
      ref={triggerRef}
      onClick={handleClick}
      className={trigger({...variants, className })}
      {...props}
    >
      {children}
    </button>
  );
}
DropdownTrigger.displayName = "DropdownTrigger";