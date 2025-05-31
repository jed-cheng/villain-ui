import React from "react";

export interface CarouselContextProps {

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