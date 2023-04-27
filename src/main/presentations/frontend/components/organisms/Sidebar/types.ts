import { MenuItemInterface } from '@frontend/types/menu';

export interface SidebarProps {
  menus: MenuItemInterface[];
  onClose: () => void;
  show: boolean;
}