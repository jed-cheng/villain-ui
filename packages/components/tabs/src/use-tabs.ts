import { 
  createContext, 
  useContext, 
  Dispatch, 
  SetStateAction
} from 'react';

interface TabsContextProps {
  activeTab: string | number;
  setActiveTab: Dispatch<SetStateAction<string | number>>;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('This component must be used within a <Tabs> component.');
  }
  return context;
};

export const TabsProvider = TabsContext.Provider;