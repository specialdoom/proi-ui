import { writable } from "svelte/store";
import type { Slice } from "../toast.types.js";

export const toast = writable<Slice>();
