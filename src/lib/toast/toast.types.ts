import type { FeedbackVariant } from "../shared/types/base-variant.types";

export type Slice = {
  variant: SliceVariant;
  message: string;
  title: string;
}

export type SliceVariant = FeedbackVariant;