import { toast } from "./store/toast.js";
import type { Slice } from "./toast.types.js";

function send(slice: Slice) {
  toast.set(slice);
}

function error(title: string, description: string = "") {
  send({ variant: "error", title, description });
}

function success(title: string, description: string = "") {
  send({ variant: "success", title, description });
}

function info(title: string, description: string = "") {
  send({ variant: "info", title, description });
}

function warning(title: string, description: string = "") {
  send({ variant: "warning", title, description });
}

export const toaster = {
  send,
  error,
  success,
  warning,
  info
};
