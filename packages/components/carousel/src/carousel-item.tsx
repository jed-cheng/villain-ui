import { item } from "./theme";

export interface CarouselItemProps
  extends React.HTMLAttributes<HTMLLIElement> {

}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  className,
  children,
}) => {

  
  return (
    <li className={
      item({
        className
      })
    }>
      {children}
    </li>
  );
};
CarouselItem.displayName = "CarouselItem";