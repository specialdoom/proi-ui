import { writable } from "svelte/store";
import type { Slice } from "../toast.types";

export const toast = writable<Slice>();

