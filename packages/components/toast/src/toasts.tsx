import React, {  useSyncExternalStore  } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, LayoutGroup } from "motion/react";
import { ToastItem,  } from "./toast-item";
import { container, ToastVariant } from "./theme";
import { toastStore } from "./toast-store";

/**
 * TODOLIST:
 * - Add pausable progress bar for each toast
 * - Add global container for toasts
 * - Add stack layout for toasts
 */

const TOAST_CONTAINER_ID = "villainui-toast-container";

export interface ToastsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof ToastVariant>,
    ToastVariant {
  }

export const Toasts: React.FC<ToastsProps> = ({
  placement = 'bottom-right',
  className,
  ...props
}) => {

  const toasts = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getSnapshot,
  )

  return createPortal(
    <div 
      id={TOAST_CONTAINER_ID} 
      className={container({
        placement,
        className
      })}
      onMouseEnter={()=> toastStore.stop()}
      onMouseLeave={()=> toastStore.start()}
      {...props}
    >
      <LayoutGroup>
        <AnimatePresence initial={false}>
          {toasts.map((toast, index) => (
            <ToastItem
              key={toast.id}
              toast={toast}
              placement={placement}
            />
          ))}
        </AnimatePresence>
      </LayoutGroup>
    </div>
    , document.body)
}