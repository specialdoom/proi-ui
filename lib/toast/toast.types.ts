import type { FeedbackVariant } from "../utils/types.js";

export type Slice = {
  variant: ToastVariant;
  description: string;
  title: string;
};

export type ToastVariant = FeedbackVariant;
