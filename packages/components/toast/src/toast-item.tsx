import { type ToastVariant } from "./theme";

export interface ToastItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof ToastVariant>,
    ToastVariant {

}

export const ToastItem: React.FC<ToastItemProps> = ({

}) => {
  return (
    <div className="toast">
      <p>Toast message goes here</p>
      <span className="duration">5000 ms</span>
    </div>
  );
}