import { ReactNode } from "react";
import { useTabs } from "./use-tabs";

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
  className?: string;
}

export const TabsContent: React.FC<TabsContentProps> = ({ 
  value, 
  children, 
}) => {
const { value: activeTab } = useTabs();
const isActive = activeTab === value;

if (!isActive) {
  return null;
}

return (
  <div>
    {children}
  </div>
)};
TabsContent.displayName = "TabsContent";