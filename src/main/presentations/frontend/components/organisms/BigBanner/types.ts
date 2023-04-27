import { ButtonVariantType } from '@frontend/types/button';
import { ColorType } from '@frontend/types/common';

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