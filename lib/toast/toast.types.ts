import type { FeedbackVariant } from "../utils/types.js";

export type Slice = {
  variant: SliceVariant;
  message: string;
  title: string;
};

export type SliceVariant = FeedbackVariant;
