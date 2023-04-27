import { ButtonVariantType } from '@frontend/types/button';
import { SizeType, ColorType } from '@frontend/types/common';

export interface IconButtonProps {
  icon: string;
  size?: SizeType;
  color?: ColorType;
  variant?: ButtonVariantType;
  rounded?: boolean;
  onClick?: () => void;
}