import { menuItem } from "./theme";

export interface NavbarMenuItemProps
  extends React.HTMLAttributes<HTMLLIElement> {}


export const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <li
      className={menuItem({
        className
      })}
      {...props}
    >
      {children}
    </li>
  )
}
NavbarMenuItem.displayName = "NavbarMenuItem";