import React from "react";
import { base } from "./theme";

export interface NavbarProps 
  extends React.HtmlHTMLAttributes<HTMLDivElement>{
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <nav 
      className={base({
        className
      })}
      {...props}
    >
      {children}
    </nav>
  )
}
Navbar.displayName = "Navbar";