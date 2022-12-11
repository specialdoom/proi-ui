import type { DataDisplayVariant } from "../utils/types";

export const dataDisplayVariants: DataDisplayVariant[] = [
  "pine",
  "flame",
  "neutral",
  "mikado",
  "tufts",
  "vivid",
  "bright"
];

export function capitalizeFirstLetter(value: string) {
  return value.replace(/^./, value[0].toUpperCase());
}