import { lazy } from 'react';
import { ColorType } from '@frontend/types/common';
import { AppSpacingEnum } from '@styles/matrix';

// icon imports
const IcEyeOpen = lazy(() => import('@assets/icons/ic-eye-open.svg'));
const IcEyeClose = lazy(() => import('@assets/icons/ic-eye-close.svg'));
const IcSearch = lazy(() => import('@assets/icons/ic-search.svg'));
const IcPlay = lazy(() => import('@assets/icons/ic-play.svg'));
const IcInfoCircle = lazy(() => import('@assets/icons/ic-info-circle.svg'));
const IcBar = lazy(() => import('@assets/icons/ic-bar.svg'));
const IcClose = lazy(() => import('@assets/icons/ic-close.svg'));
const IcGoogle = lazy(() => import('@assets/icons/ic-google.svg'));

export interface IconProps {
  color?: ColorType;
  name: string;
  size: number | keyof typeof AppSpacingEnum;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const ICONS = {
  'ic-eye-open': IcEyeOpen,
  'ic-eye-close': IcEyeClose,
  'ic-search': IcSearch,
  'ic-play': IcPlay,
  'ic-info-circle': IcInfoCircle,
  'ic-bar': IcBar,
  'ic-close': IcClose,
  'ic-google': IcGoogle
}