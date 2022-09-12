import { toast } from './store/toast.js';
import type { Slice } from './toast.types.js';

export function send(slice: Slice) {
  toast.set(slice);
}

export function error(title: string, message: string = '') {
  send({ variant: 'error', title, message });
}

export function success(title: string, message: string = '') {
  send({ variant: 'success', title, message });
}

export function info(title: string, message: string = '') {
  send({ variant: 'info', title, message });
}

export function warning(title: string, message: string = '') {
  send({ variant: 'warning', title, message });
}
