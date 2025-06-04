import { base, BreadcrumbsVariants } from "./theme";
import { BreadcrumbsProvider } from "./use-breadcrumbs";

export interface BreadcrumbsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof BreadcrumbsVariants>,
    BreadcrumbsVariants {
    }


export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  className,
  variant = "ghost" ,
  size= "md",
  color = "default",
  radius = "md",
  disabled = false,  
  ...props
}) => {
  const variants: BreadcrumbsVariants = {
    variant,
    size,
    color,
    radius,
    disabled,
  };
  
  return (
    <BreadcrumbsProvider
      value={{
        variants
      }}
    >
      <nav
        className={base({
          ...variants,
          className,
        })}
        {...props}
      >
        {children}
      </nav>
    </BreadcrumbsProvider>


  );
}
Breadcrumbs.displayName = "Breadcrumbs";