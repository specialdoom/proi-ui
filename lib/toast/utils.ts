import { toast } from "./store/toast.js";
import type { Slice } from "./toast.types.js";

export function send(slice: Slice) {
  toast.set(slice);
}

export function error(title: string, description: string = "") {
  send({ variant: "error", title, description });
}

export function success(title: string, description: string = "") {
  send({ variant: "success", title, description });
}

export function info(title: string, description: string = "") {
  send({ variant: "info", title, description });
}

export function warning(title: string, description: string = "") {
  send({ variant: "warning", title, description });
}
