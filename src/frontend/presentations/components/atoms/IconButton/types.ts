import { SizeType, ColorType, ButtonVariantType } from '@general-types';

export interface IconButtonProps {
  icon: string;
  size?: SizeType;
  color?: ColorType;
  variant?: ButtonVariantType;
  rounded?: boolean;
  onClick?: () => void;
}