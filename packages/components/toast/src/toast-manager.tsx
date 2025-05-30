type Toast = {
  id: string;
  message: string;
  duration?: number; // in milliseconds
};

type Listener = (toasts: Toast[]) => void;

export class ToastManager {
  private toasts: Toast[] = [];
  private listeners: Listener[] = [];

  add(toast: Toast): void {
    this.toasts.push(toast);
    this.notify();

    setTimeout(() => {
      this.remove(toast.id);
      this.notify();
    }, toast.duration || 5000)
  }

  remove(id: string): void {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
  }

  clear(): void {
    this.toasts = [];
  }

  notify(): void {
    const snapshot = [...this.toasts];
    this.listeners.forEach(listener => listener(snapshot));
  }

  subscribe(listener: Listener) {
    this.listeners.push(listener);
    listener(this.toasts);
    return this.unsubscribe.bind(this, listener);
  }

  unsubscribe(listener: Listener): void {
    this.listeners = this.listeners.filter(l => l !== listener);
  }
}

export const toastManager = new ToastManager();

export const addToast = (toast: Toast): void => {
  toastManager.add(toast);
}