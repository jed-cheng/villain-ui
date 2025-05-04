import { ReactNode } from "react";
import { useTabs } from "./use-tabs";

interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  children: ReactNode;
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({ 
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
TabPanel.displayName = "TabPanel";