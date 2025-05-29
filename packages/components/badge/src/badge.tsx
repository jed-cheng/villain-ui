import React from "react";
import { BadgeVariants, base, content as contentVariants } from "./theme";


export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof BadgeVariants>,
    BadgeVariants {
      content?: string
    }

export const Badge: React.FC<BadgeProps> = ({
  className,
  color,
  size,
  placement,
  content,
  children,
  ...props
}) => {
  return (
    <div
      className={base({ className })}
      {...props}
    >
      {children}
      <span className={contentVariants({ 
        color, 
        size, 
        placement, 
      })}>
        {content}
      </span>
    </div>
  );
};

Badge.displayName = "Badge";
