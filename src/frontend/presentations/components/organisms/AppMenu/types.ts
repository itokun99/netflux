import { MenuItemInterface } from '@general-types';

export interface AppMenuProps {
  items: MenuItemInterface[];
  className?: string;
  style?: React.CSSProperties;
}