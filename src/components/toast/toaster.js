import { toast } from './store/toast.js';

export function send(slice) {
  toast.set(slice);
}

export function error(message) {
  send({ type: 'error', message });
}

export function success(message) {
  send({ type: 'success', message });
}

export function info(message) {
  send({ type: 'info', message });
}

export function warning(message) {
  send({ type: 'warning', message });
}
