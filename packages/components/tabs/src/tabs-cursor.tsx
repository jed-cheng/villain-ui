import { motion } from "motion/react";
import { cn } from "../../../utils/src";
import { cva, type VariantProps } from "class-variance-authority";
import { useTabs } from "./use-tabs"; 

const cursorVariants = cva(
  [
    "absolute z-0 inset-0",
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
      variant: {
        solid: null,
        underline: "bg-transparent border-b-2 border-white rounded-none",
        light: null,
        bordered: null,
      }
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
    variant
  } = useTabs();

  return (
    <motion.span
      layoutId="tabs-cursor"
      style={{ opacity: 0.5 }}
      transition={{  type:'spring', duration: 0.4 }}
      className={cn(cursorVariants({ radius, variant }))}
    />
  );
};

TabsCursor.displayName = "TabsCursor";