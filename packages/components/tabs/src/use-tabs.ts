import { 
  createContext, 
  useContext, 
} from 'react';
import { TabsVariants } from './tabs';

export interface TabsContextProps extends TabsVariants{
  value: string | null;
  setValue: (next: string | null) => void;
} 

const TabsContext = createContext<TabsContextProps | null>(null);

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('This component must be used within a <Tabs> component.');
  }
  return context;
};

export const TabsProvider = TabsContext.Provider;


