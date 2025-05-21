export interface DropdownTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
DropdownTrigger.displayName = "DropdownTrigger";