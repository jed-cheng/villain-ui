import { HTMLMotionProps, motion, useTime, useTransform, Variants } from "motion/react";
import { item, type ToastVariant } from "./theme";
import {   useMemo,  useState } from "react";
import { ToastClose } from "./toast-close";
import { Toast, toastStore } from "./toast-store";



export interface ToastItemProps
  extends HTMLMotionProps<'div'>{
    toast: Toast
    placement: ToastVariant['placement']
  }


const motionVariants: Record<string, Variants> = {
  'bottom-left': {
    enter: { 
      opacity: [0, 1],
      translateX: ["-100%", 0],
      transition: { duration: 0.3, ease: "easeIn" }
      },
    exit: { 
      opacity: [1, 0], 
      translateX: ["0", "-100%"], 
      transition: { duration: 0.2, ease: "easeIn" } 
    },
  },
  'bottom-right': {
    enter: {
      opacity: [0, 1],
      translateX: ["100%", 0],
      transition: { duration: 0.3, ease: "easeIn" }
    },
    exit: {
      opacity: [1, 0],
      translateX: ["0", "100%"],
      transition: { duration: 0.2, ease: "easeIn" }
    },
  },
  'bottom-center': {
    enter: {
      opacity: [0, 1],
      translateY: ["100%", 0],
      transition: { duration: 0.3, ease: "easeIn" }
    },
    exit: {
      opacity: [1, 0],
      translateY: ["0", "100%"],
      transition: { duration: 0.2, ease: "easeIn" }
    },
  },
  'top-left': {
    enter: {
      opacity: [0, 1],
      translateX: ["-100%", 0],
      transition: { duration: 0.3, ease: "easeIn" }
    },
    exit: {
      opacity: [1, 0],
      translateX: ["0", "-100%"],
      transition: { duration: 0.2, ease: "easeIn" }
    },
  },
  'top-right': {
    enter: {
      opacity: [0, 1],
      translateX: ["100%", 0],
      transition: { duration: 0.3, ease: "easeIn" }
    },
    exit: {
      opacity: [1, 0],
      translateX: ["0", "100%"],
      transition: { duration: 0.2, ease: "easeIn" }
    },
  },
  'top-center': {
    enter: {
      opacity: [0, 1],
      translateY: ["-100%", 0],
      transition: { duration: 0.3, ease: "easeIn" }
    },
    exit: {
      opacity: [1, 0],
      translateY: ["0", "-100%"],
      transition: { duration: 0.2, ease: "easeIn" }
    },
  },
}

export const ToastItem: React.FC<ToastItemProps> = ({
  toast,
  placement,
  className,
  children,
  ...props
}) => {
  const motionVariant = useMemo(() => 
    placement ? motionVariants[placement] 
    : motionVariants.default
    , [placement]);

  const [showCloseButton, setShowCloseButton] = useState(false);

  const time = useTime();
  const translateX = useTransform(time, [0, toast.timeout], ["-100%", "0%"]);


  return (
     <motion.div 
        onMouseEnter={()=> setShowCloseButton(true)}
        onMouseLeave={()=> setShowCloseButton(false)}
        layoutId={toast.id}
        variants={motionVariant}
        animate="enter"
        exit="exit"
        className={item({
          className
        })}
        {...props}
      >
        {toast.content}
        {showCloseButton && (
          <ToastClose 
            onClick={() => toastStore.removeToast(toast.id)}
          />
        )}
      <motion.div
        className="absolute inset-0 bg-white/50 "
        style={{
          translateX,
        }}
      />
    </motion.div>
  )
}

