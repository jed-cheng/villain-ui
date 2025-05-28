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
  const Comp = asChild ? React.Component : 'button';
  const { isOpen, setIsOpen } = useDrawer();
  const handleClick = useCallback((evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log('DrawerTrigger clicked');
    if (onClick) {
      onClick(evt);
    } 

    setIsOpen(!isOpen);
  }, [onClick, setIsOpen]);
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

