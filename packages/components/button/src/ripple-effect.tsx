import React from 'react';
import { type HTMLMotionProps, motion } from 'motion/react';

export interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

const defaultRippleVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: [0, 0.5, 0] }, // Fade in then out
};

const defaultRippleTransition = {
  duration: 0.6,
  ease: 'easeOut',
  opacity: {
    duration: 0.6,
    times: [0, 0.3, 1],
    ease: 'linear',
  },
};

export interface RippleEffectProps extends Omit<HTMLMotionProps<"span">, "ref"> {
  ripple: Ripple;
  onComplete: (id: number) => void;
  variants?: typeof defaultRippleVariants;
  transition?: typeof defaultRippleTransition;
}

export const RippleEffect: React.FC<RippleEffectProps> = ({
  ripple,
  onComplete,
  variants = defaultRippleVariants,
  transition = defaultRippleTransition,
  style,
  ...props
}) => {
  return (
    <motion.span
      key={ripple.id} // Key for AnimatePresence
      style={{
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        pointerEvents: 'none',
        left: ripple.x,
        top: ripple.y,
        width: ripple.size,
        height: ripple.size,
        transform: 'translate(-50%, -50%)', // Center the ripple
        ...style, // Merge custom styles
      }}
      variants={variants}
      initial="initial"
      animate="animate"
      onAnimationComplete={() => onComplete(ripple.id)} // Notify parent on completion
      transition={transition}
      {...props}
    />
  );
};

RippleEffect.displayName = "RippleEffect";