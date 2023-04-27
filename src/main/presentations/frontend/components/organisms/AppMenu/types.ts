import { MenuItemInterface } from '@frontend/types/menu';

export interface AppMenuProps {
  items: MenuItemInterface[];
  className?: string;
  style?: React.CSSProperties;
}