import React from "react"

export interface NavbarMenuProps 
  extends React.HTMLAttributes<HTMLMenuElement>{

  }

export const NavbarMenu: React.FC<NavbarMenuProps> = ({
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
  )
}
NavbarMenu.displayName = "NavbarMenu"