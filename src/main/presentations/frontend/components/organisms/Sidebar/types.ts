import { MenuItemInterface } from '@general-types';

export interface SidebarProps {
  menus: MenuItemInterface[];
  onClose: () => void;
  show: boolean;
}