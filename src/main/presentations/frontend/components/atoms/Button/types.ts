import type { ButtonVariantType } from '@frontend/types/button';
import type { ColorType, SizeType } from '@frontend/types/common';

export interface ButtonProps {
  children: React.ReactNode;
  color?: ColorType;
  variant?: ButtonVariantType;
  type?: "button" | "reset" | "submit";
  size?: SizeType;
  icon?: string | React.ReactNode;
  block?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string
}