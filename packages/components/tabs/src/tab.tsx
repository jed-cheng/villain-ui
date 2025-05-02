import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useTabs } from "./use-tabs";
import { cn } from "../../../utils/src";

const tabVariants = cva(
  // Base styles
  "px-4 py-2 -mb-px border-b-2 font-medium text-sm focus:outline-none transition-colors duration-150 ease-in-out",
  {
    variants: {
      isActive: {
        true: "border-blue-500 text-blue-600",
        false: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
      },
      isDisabled: {
        true: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      isActive: false,
      isDisabled: false,
    },
  }
);

export interface TabProps extends VariantProps<typeof tabVariants> {
  value: string | number;
  children: ReactNode; 
  disabled?: boolean; 
  className?: string;
}

export const Tab: React.FC<TabProps> = ({ value, children, disabled = false, className }) => {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;

  const handleClick = () => {
    if (!disabled) {
      setActiveTab(value);
    }
  };

  return (
    <button
      key={value}
      role="tab"
      type="button"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={handleClick}
      className={cn(tabVariants({ isActive, isDisabled: disabled }), className)}
    >
      {children}
    </button>
  );
};
Tab.displayName = "Tab";
