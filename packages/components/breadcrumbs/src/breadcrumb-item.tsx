export interface BreadcrumbItemProps
  extends React.HTMLAttributes<HTMLLIElement> {}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
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
  );
}
BreadcrumbItem.displayName = "BreadcrumbItem";