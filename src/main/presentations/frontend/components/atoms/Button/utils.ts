import { ColorType } from '@general-types';

export const getBtnIconColor = (variant?: string, color?: ColorType) => {
  if (variant === 'outlined') {
    return color;
  }
  return ['primary', 'success', 'error', 'dark'].includes(color || '') ? 'light' : 'dark';
}