import React from "react";

export interface DropdownMenuProps
  extends React.MenuHTMLAttributes<HTMLMenuElement> {
  }

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <menu
      className={className}
      {...props}
    >
      {children}
    </menu>
  );
}

DropdownMenu.displayName = "DropdownMenu";