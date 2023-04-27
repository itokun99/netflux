import { SizeType } from '@frontend/types/common';
import { AppSpacingEnum } from '@styles/matrix';

export const getIconSize = (size?: SizeType) => {
  switch (size) {
    case 'small':
      return AppSpacingEnum.m;
    case 'large':
      return AppSpacingEnum.xxl;
    default:
      return AppSpacingEnum.xl;
  }
}