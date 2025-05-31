import { ChevronRight } from "lucide-react";
import { separator } from "./theme";
import { useBreadcrumbs } from "./use-breadcrumbs";

export interface BreadcrumbSeparatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {
}

export const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorProps> = ({
  className,
  ...props
}) => {
  const { variants } = useBreadcrumbs();
  return (
    <span
      className={separator({
        ...variants,
        className
      })}
      {...props}
    >
      <ChevronRight size={16} strokeWidth={1} />
    </span>

  );
};