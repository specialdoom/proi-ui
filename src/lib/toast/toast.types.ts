import type { BaseVariant } from "../shared/types/base-variant.types";

export type Slice = {
  variant: SliceVariant;
  message: string;
  title: string;
}

export type SliceVariant = BaseVariant;