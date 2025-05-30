import { BreadcrumbsVariants } from "./theme";

export interface BreadcrumbsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof BreadcrumbsVariants>,
    BreadcrumbsVariants {}


export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  className,
  variant = "default",
  size = "md",
  color = "default",  
  ...props
}) => {
  return (
    <nav
      className={className}
      {...props}
    >

    </nav>
  );
}
Breadcrumbs.displayName = "Breadcrumbs";