import React from "react";

export interface DropdownItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
    disabled?: boolean;
  }

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <li
      className={className}
      {...props}
    >
      {children}
    </li>
  );
}
