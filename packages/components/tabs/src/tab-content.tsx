import { ReactNode } from "react";
import { cn } from "../../../utils/src";
import { useTabs } from "./use-tabs";

interface TabPanelProps {
  value: string | number; // Must match the value of its corresponding Tab
  children: ReactNode;
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({ value, children, className }) => {
const { value: activeTab } = useTabs();
const isActive = activeTab === value;

// Render only the active panel
if (!isActive) {
  return null;
}

return (
  <div
    role="tabpanel"
    aria-labelledby={`tab-${value}`} // Convention for linking
    id={`tabpanel-${value}`} // Convention for linking
    tabIndex={0} // Make panel focusable when active
    className={cn("focus:outline-none", className)} // Basic styling
  >
    {children}
  </div>
);
};
TabPanel.displayName = "TabPanel";