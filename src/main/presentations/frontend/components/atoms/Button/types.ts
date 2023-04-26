import { ButtonVariantType, ColorType, SizeType } from '@general-types';

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