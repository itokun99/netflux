import type { ReactNode, CSSProperties } from 'react';

export interface ContainerProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  fullWidth?: boolean;
  nopadding?: boolean;
}
