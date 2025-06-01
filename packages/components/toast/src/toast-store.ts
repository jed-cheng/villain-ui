export interface Toast {
  id: string;
  content?: React.ReactNode;
  timeout: number;
}



let toasts: Toast[] = []
let listeners: Function[]= []
let timer: NodeJS.Timeout | null = null;
let startAt: Date


export const toastStore = {
  addToast(toast: AddToastProps ) {
    const id = crypto.randomUUID();
    toasts = [...toasts, { id, ...toast }];
    notify();
  },
  removeToast(id: string){
    toasts = toasts.filter(t => t.id !== id);
    notify();
  },
  popToast(){
    if (toasts.length === 0) return;
    const toast = toasts[0];
    toasts = toasts.slice(1);
    notify();
    return toast;
  },
  start(){
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    const last = toasts.at(-1);
    if (!last) return;

    startAt = new Date();
    timer = setTimeout(() => {
      this.removeToast(last.id);
      this.start();
    }, last.timeout);
  },
  stop(){
    if (timer) {
      clearTimeout(timer);
      timer = null;    
    }

    const last = toasts.at(-1);
    if (!last) return;

    const elapsed = new Date().getTime() - startAt.getTime();
    const remaining = last.timeout - elapsed;
    if (remaining > 0) {
      toasts = [...toasts.slice(0, -1), { ...last, timeout: remaining }];
      notify();
    } else {
      this.removeToast(last.id);
    }
  },
  subscribe(listener: Function) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  },
  getSnapshot() {
    return toasts
  }
}

function notify() {
  for (let listener of listeners) {
    listener();
  }
}

export interface AddToastProps extends Omit<Toast, 'id'> {
}

export function addToast(toast: AddToastProps) {
  toastStore.addToast(toast);
  toastStore.start();
}