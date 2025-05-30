import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { toastManager } from "./toast-manager";
import { AnimatePresence } from "motion/react";
import { ToastItem } from "./toast-item";

export interface ToastsProps {
}

export const Toasts: React.FC<ToastsProps> = ({}) => {
  const [toasts, setToasts] = React.useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = toastManager.subscribe(setToasts);
    return () => {
      unsubscribe();
    };
  }, []);

  return createPortal(
    <div className="toast-container">
      <AnimatePresence>
        {toasts.map((toast, index) => (
          <ToastItem

          />
        ))}
      </AnimatePresence>
    </div>,
    document.body || document.getElementById("root") || document.createElement("div")
  )
}