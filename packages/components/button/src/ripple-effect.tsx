import React from 'react';
import { type HTMLMotionProps, motion } from 'motion/react';

export interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}


const defaultRippleAnimate = {
  scale: [0, 1.1],
  opacity: [0, 0.5, 0],
  transition: {
    duration: 0.6,
    ease: "easeOut",
    times: [0, 0.3, 1],
  }
};


export interface RippleEffectProps extends Omit<HTMLMotionProps<"span">, "ref"> {
  ripple: Ripple;
  onComplete: (id: number) => void;
}

export const RippleEffect: React.FC<RippleEffectProps> = ({
  ripple,
  onComplete,
  onAnimationComplete,
  animate = defaultRippleAnimate,
  style,
  ...props
}) => {
  return (
    <motion.span
      key={ripple.id} // Key for AnimatePresence
      style={{ // something wrong with tailwindcss
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        pointerEvents: 'none',
        left: ripple.x,
        top: ripple.y,
        width: ripple.size,
        height: ripple.size,
        transform: 'translate(-50%, -50%)', 
        ...style,
      }}
      animate={animate}
      onAnimationComplete={latest => {
        onComplete(ripple.id);
        onAnimationComplete?.(latest);
      }}
      {...props}
    />
  );
};

RippleEffect.displayName = "RippleEffect";