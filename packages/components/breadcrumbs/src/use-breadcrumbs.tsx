import React from "react";
import { BreadcrumbsVariants } from "./theme";

export interface BreadcrumbsContext {
  variants: BreadcrumbsVariants;
}

const BreadCrumbsContext = React.createContext<BreadcrumbsContext | undefined>(undefined);

export const useBreadcrumbs = () => {
  const context = React.useContext(BreadCrumbsContext);
  if (!context) {
    throw new Error("useBreadcrumbs must be used within a BreadcrumbsProvider");
  }
  return context;
};

export const BreadcrumbsProvider = BreadCrumbsContext.Provider;