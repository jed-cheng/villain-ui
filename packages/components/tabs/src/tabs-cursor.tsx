import { motion } from "motion/react";
import { cn } from "../../../utils/src";
import { cva, type VariantProps } from "class-variance-authority";
import { useTabs } from "./use-tabs"; 

const cursorVariants = cva(
  [
    "absolute z-0 inset-0",
    ' shadow-sm',
    'bg-gray-300'
  ],
  {
    variants: {
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },

    },
    defaultVariants: {
      radius: "md",
    },
  }
);

type CursorVariants = VariantProps<typeof cursorVariants>;
interface TabsCursorProps extends CursorVariants {}

export const TabsCursor: React.FC<TabsCursorProps> = () => {
  const {
    radius,
  } = useTabs();

  return (
    <motion.span
      layoutId="tabs-cursor"
      style={{ opacity: 0.5 }}
      transition={{  type:'spring', duration: 0.4 }}
      className={cn(cursorVariants({ radius }))}
    />
  );
};

TabsCursor.displayName = "TabsCursor";