import type { IconVariant } from "../icons/icon.types.js";

type AlertIcon = {
  variant: string;
  iconType: IconVariant;
  color: string;
}

export const icons: AlertIcon[] = [
  {
    variant: 'error',
    iconType: 'no',
    color: '#ee3d48'
  },
  {
    variant: 'warning',
    iconType: 'alert',
    color: '#fdb300'
  },
  {
    variant: 'success',
    iconType: 'circleChoose',
    color: '#007f50'
  },
  {
    variant: 'info',
    iconType: 'hint',
    color: '#257dff'
  }
];