import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselNextProps
  extends React.HTMLAttributes<HTMLButtonElement> {
}

export const CarouselNext: React.FC<CarouselNextProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={className}
      {...props}
    >
      <ChevronRight/>
    </button>
  );
};
CarouselNext.displayName = "CarouselNext";

export interface CarouselPreviousProps
  extends React.HTMLAttributes<HTMLButtonElement> {
}
export const CarouselPrevious: React.FC<CarouselPreviousProps> = ({
  className,
  children,
  ...props  
}) => {
  return (
    <button
      className={className}
      {...props}
    >
      <ChevronLeft/>
    </button>
  );
}
CarouselPrevious.displayName = "CarouselPrevious";