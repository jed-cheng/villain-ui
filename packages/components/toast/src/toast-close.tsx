import { CircleX } from 'lucide-react';
import { closeButton } from './theme'

export interface ToastCloseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export const ToastClose: React.FC<ToastCloseProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={closeButton({
        className
      })}
      {...props}
    >
      <CircleX size={16} strokeWidth={1} />
    </button>
  );
};