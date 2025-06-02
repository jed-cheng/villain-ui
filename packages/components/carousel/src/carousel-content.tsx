import React, { useState } from "react";
import { content } from "./theme";


export interface CarouselContentProps 
  extends React.HTMLAttributes<HTMLUListElement>{
  }


export const CarouselContent: React.FC<CarouselContentProps> = ({
  className,
  children,
  ...props
}) => {




  return (
    <ul
      className={content()}
      {...props}
    >
      {children}
    </ul>
  );
};
CarouselContent.displayName = "CarouselContent";