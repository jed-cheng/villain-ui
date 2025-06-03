import { BreadcrumbSeparator } from "./breadcrumb-separator";
import { item } from "./theme";
import { useBreadcrumbs } from "./use-breadcrumbs";

export interface BreadcrumbItemProps
  extends React.HTMLAttributes<HTMLLIElement> {}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  className,
  ...props
}) => {
  const { variants } = useBreadcrumbs();
  return (
    <li
      className={item({
        ...variants,
        className
      })}
      {...props}
    >
      {children}
      <BreadcrumbSeparator/>
    </li>
  );
}
BreadcrumbItem.displayName = "BreadcrumbItem";