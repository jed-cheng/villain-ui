import { 
  createContext, 
  useContext, 
} from 'react';
import { dialogVariants, DialogVariants } from './dialog';

const VariantsContext = createContext<DialogVariants | null>(null);

export function useVariants(variants?: DialogVariants) {
  const context = useContext(VariantsContext);
  if (!context) {
    throw new Error('This component must be used within a  context.');
  }
  return dialogVariants({
    ...context,
    ...variants,
  });
};

export const VariantsProvider = VariantsContext.Provider;


