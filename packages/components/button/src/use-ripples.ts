import { useState } from "react";
import { Ripple } from "./ripple-effect";

export function useRipples(disabled: boolean) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.sqrt(rect.width ** 2 + rect.height ** 2) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    setRipples(prev => [...prev, { id: Date.now(), x, y, size }]);
  };

  const onComplete = (rippleId: number) => {
    setRipples(prev => prev.filter(r => r.id !== rippleId));
  };

  return { ripples, createRipple, onComplete };
}