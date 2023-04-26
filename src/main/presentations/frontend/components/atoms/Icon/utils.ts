import { ColorType } from '@general-types';
import { AppSpacingEnum } from '@styles/matrix';
import { AppColorEnum} from '@styles/colors';

export const getColor = (color?: ColorType) => {
  if (!color) return AppColorEnum.dark;
  return AppColorEnum[color as keyof typeof AppColorEnum];
}

export const getSize = (size: number | keyof typeof AppSpacingEnum) => {
  if (typeof size === 'number') {
    return { width: size, height: size }
  }

  if (AppSpacingEnum[size as keyof typeof AppSpacingEnum]) {
    return {
      width: AppSpacingEnum[size as keyof typeof AppSpacingEnum],
      height: AppSpacingEnum[size as keyof typeof AppSpacingEnum]
    }
  }
  return { width: AppSpacingEnum.m, height: AppSpacingEnum.m };
}