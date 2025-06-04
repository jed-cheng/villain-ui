import { brand } from "./theme";

export interface NavbarBrandProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {

  }

export const NavbarBrand: React.FC<NavbarBrandProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={brand({className})}
      {...props}
    >
      {children}
    </div>
  );
}
NavbarBrand.displayName = "NavbarBrand";