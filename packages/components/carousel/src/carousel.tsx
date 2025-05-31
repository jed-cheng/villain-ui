import { CarouselProvider } from "./use-carousel";

export interface CarouselProps {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
}) => {
  return (
    <CarouselProvider>
      { children }
    </CarouselProvider>
  );
}

Carousel.displayName = "Carousel";