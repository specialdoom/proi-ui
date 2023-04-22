import type { SvelteComponent } from "svelte";

export type FeedbackVariant = "success" | "info" | "warning" | "error";

export type DataDisplayVariant =
  | "pine"
  | "flame"
  | "neutral"
  | "mikado"
  | "tufts"
  | "vivid"
  | "bright";

// eslint-disable-next-line
export type Constructor<T> = new (...args: any[]) => T;

export type IconsMap = { [key in FeedbackVariant]: Constructor<SvelteComponent> };
