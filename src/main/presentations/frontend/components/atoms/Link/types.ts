import type { LinkProps as NextLinkProps } from 'next/link';
import { ColorType } from '@frontend/types/common';
import { UrlType } from '@frontend/types/url';


export interface LinkProps extends NextLinkProps {
  children?: React.ReactNode | React.ReactElement | JSX.Element | null;
  color?: ColorType;
  style?: React.CSSProperties;
  className?: string;
  href: UrlType;
  title?: string;
}