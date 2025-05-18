import { HTMLMotionProps, motion } from "motion/react";
import { useVariants } from "./use-variants";


interface TabsCursorProps extends HTMLMotionProps<"span">  {}

export const TabsCursor: React.FC<TabsCursorProps> = () => {
  const { tabsCursor } = useVariants()

  return (
    <motion.span
      layoutId="tabs-cursor"
      style={{ opacity: 0.5 }}
      transition={{  
        duration: 0.2 
      }}
      className={tabsCursor()}
    />
  );
};

TabsCursor.displayName = "TabsCursor";