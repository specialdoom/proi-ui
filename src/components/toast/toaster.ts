import { toast } from './store/toast';
import type { Slice } from './toast.types';

export function send(slice: Slice) {
  toast.set(slice);
}

export function error(message: string) {
  send({ variant: 'error', message });
}

export function success(message: string) {
  send({ variant: 'success', message });
}

export function info(message: string) {
  send({ variant: 'info', message });
}

export function warning(message: string) {
  send({ variant: 'warning', message });
}
