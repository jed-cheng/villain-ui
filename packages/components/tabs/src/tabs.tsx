import React, { useState, ReactNode } from 'react';
import { cn } from '../../../utils/src/index'; 
import { TabsProvider } from './use-tabs'; 

interface TabsProps {
  children: ReactNode;
  defaultValue: string | number;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  onChange?: (value: string | number) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultValue,
  className,
  // onChange, // Handle onChange later if needed
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  // const handleSetActiveTab = (value: string | number) => {
  //   setActiveTab(value);
  //   onChange?.(value);
  // };

  return (
    <TabsProvider value={{ activeTab, setActiveTab}}>
      <div className={cn("villain-tabs", className)}>
        {children}
      </div>
    </TabsProvider>
  );
};
Tabs.displayName = "Tabs";
