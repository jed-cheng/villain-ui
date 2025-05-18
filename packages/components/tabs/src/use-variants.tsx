import { 
  createContext, 
  useContext, 
} from 'react';
import { tabsVariants, TabsVariants } from './tabs';

const VariantsContext = createContext<TabsVariants | null>(null);

export function useVariants(variants?: TabsVariants) {
  const context = useContext(VariantsContext);
  if (!context) {
    throw new Error('This component must be used within a  context.');
  }
  return tabsVariants({
    ...context,
    ...variants,
  });
};

export const VariantsProvider = VariantsContext.Provider;


