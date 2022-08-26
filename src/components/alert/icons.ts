import type { AlertVariant } from "./alert.types";
import type { IconVariant } from "../../../icons/src/icon.types";

export const icons: { variant: AlertVariant, iconVariant: IconVariant, color: string }[] = [
  {
    variant: 'error',
    iconVariant: 'no',
    color: '#ee3d48'
  },
  {
    variant: 'warning',
    iconVariant: 'alert',
    color: '#fdb300'
  },
  {
    variant: 'success',
    iconVariant: 'circleChoose',
    color: '#007f50'
  },
  {
    variant: 'info',
    iconVariant: 'hint',
    color: '#257dff'
  }
];
