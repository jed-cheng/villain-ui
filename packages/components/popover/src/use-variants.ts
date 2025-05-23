import { 
  createContext, 
  useContext 
} from "react";
import { PopoverVariants } from "./popover";

export type VariantsProps = PopoverVariants;

const variantsContext = createContext<VariantsProps | null>(null);

export const useVariants = () => {
  const context = useContext(variantsContext);
  if (!context) {
    throw new Error("useVariants must be used within a PopoverProvider");
  }
  return context;
}

export const VariantsProvider = variantsContext.Provider;

