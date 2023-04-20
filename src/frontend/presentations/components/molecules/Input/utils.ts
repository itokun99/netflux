import { AppSpacingEnum } from '@styles/matrix';
import { InputProps } from './types';

export const getIconSize = (inputSize?: 'small' | 'default' | 'large') => {
  switch(inputSize) {
    case 'small':
      return AppSpacingEnum.m;
    case 'large':
      return AppSpacingEnum.xxl;
    default:
      return AppSpacingEnum.xl;
  }
}