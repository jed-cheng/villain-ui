export interface NavbarMenuItemProps
  extends React.HTMLAttributes<HTMLLIElement> {}


export const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <li
      className={className}
      {...props}
    >
      {children}
    </li>
  )
}
NavbarMenuItem.displayName = "NavbarMenuItem";