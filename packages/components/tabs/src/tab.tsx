import React, { MouseEventHandler } from "react";
import { useTabs } from "./use-tabs";
import { TabsCursor } from "./tabs-cursor";
import { useVariants } from "./use-variants";


export interface TabProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'title'>  {
  value: string | null;
  disabled?: boolean;
}

export const Tab: React.FC<TabProps> = ({
  value,
  className,
  onClick,
  disabled,
  children,
  ...props
}) => {
  const { 
    value: current, 
    setValue, 
    disabled: tabDisabled
  } = useTabs();

  const isDisabled = disabled || tabDisabled;
  const { tab }= useVariants({disabled: isDisabled});

  const isActive = current === value;



  const handleClick:MouseEventHandler<HTMLButtonElement> = (evt) => {
    if (!disabled) {
      setValue(value);
    }
    if (onClick) {
      onClick(evt);
    }
  };

  return (
    <button
      className={tab()}
      disabled={isDisabled}
      onClick={handleClick}
      {...props}
    >
      {children}
      {isActive && <TabsCursor />}
    </button>
  );
};

Tab.displayName = "Tab";
