import { 
  createContext, 
  useContext, 
} from 'react';

export interface TabsContextProps{
  value: string | null;
  setValue: (next: string | null) => void;
  disabled?: boolean;
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


