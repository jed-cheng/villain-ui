import React from "react";
import { CarouselVariants } from "./theme";

export interface CarouselContextProps {
  variants: CarouselVariants;
  index: number;
  setIndex: (value: number) => void;

}
const CarouselContext = React.createContext<CarouselContextProps | undefined>(undefined);

export const useCarousel = () => {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
};

export const CarouselProvider = CarouselContext.Provider;