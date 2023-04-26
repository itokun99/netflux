import { ButtonVariantType, ColorType } from '@general-types';

export interface ActionButtonInterface {
  id: number;
  title: string;
  icon: string;
  variant: ButtonVariantType;
  color: ColorType;
  onClick?: () => void;
}


export interface BigBannerProps {
  headline: string;
  description: string;
  actionButtons: ActionButtonInterface[]
}