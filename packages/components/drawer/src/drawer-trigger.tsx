import React, { useCallback } from 'react';
import { useDrawer } from './use-drawer';

export interface DrawerTriggerProps 
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export const DrawerTrigger: React.FC<DrawerTriggerProps> = ({ 
  children, 
  asChild = false,
  onClick,
   ...props
}) => {
  const Comp = asChild ? React.Fragment : 'button';
  const { isOpen, setIsOpen } = useDrawer();
  const handleClick = useCallback((evt: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(evt);
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <Comp  
      onClick={handleClick}
      {...props}
    >
      {children}
    </Comp>
  );
}

DrawerTrigger.displayName = 'DrawerTrigger';

