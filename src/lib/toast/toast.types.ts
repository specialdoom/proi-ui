export type Slice = {
  variant: SliceVariant;
  message: string;
}

export type SliceVariant = 'success' | 'info' | 'warning' | 'error';