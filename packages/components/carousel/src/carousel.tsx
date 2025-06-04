import React, {  } from "react";
import { base, CarouselVariants, content, item } from "./theme";
import { CarouselItem } from "./carousel-item";
import { CarouselContent } from "./carousel-content";

export interface CarouselProps 
  extends React.HTMLAttributes<HTMLDivElement>, CarouselVariants {
  defaultIndex?: number;
  index?: number;
  onIndexChange?: (index: number) => void;
  items?: {content: React.ReactNode}[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}


export const Carousel: React.FC<CarouselProps> = ({
  items = [],
  index,
  defaultIndex,
  onIndexChange,
  autoPlay = false,
  autoPlayInterval = 3000,
  children,
  className,
  style,
  ...props
}) => {
  const isControlled = index !== undefined && !autoPlay;
  const [internalIndex, setInternalIndex] = React.useState(defaultIndex ?? 0);
  const currentIndex = isControlled ? index : internalIndex;

  React.useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setInternalIndex((prev) => (prev + 1) % items.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
    
  }, [autoPlay, autoPlayInterval, items.length]);


  return (
    <div 
      className={base({
        className,
      })}
    >
      <CarouselContent 
        style={{
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((i, idx) => (
          <CarouselItem key={idx} className={item()}>
          {i.content}
          </CarouselItem>
        )) }
      </CarouselContent>
    </div>
  );
}

Carousel.displayName = "Carousel";