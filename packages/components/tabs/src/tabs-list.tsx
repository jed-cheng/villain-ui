import { LayoutGroup } from "motion/react";
import { useId } from "react";
import { useVariants } from "./use-variants";

export interface TabsListProps 
  extends React.HTMLAttributes<HTMLUListElement> {
}

export const TabsList: React.FC<TabsListProps> = ({
  children,
  ...props
}) => {
  const layoutId = useId();
  const { tabsList } = useVariants()

  return (
      <ul
        className={tabsList()}
        {...props}
      >
        <LayoutGroup id={layoutId}>
          {children}
        </LayoutGroup>
      </ul>
  )
};

TabsList.displayName = "TabsList";