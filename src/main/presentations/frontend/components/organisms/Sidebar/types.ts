import { MenuItemInterface } from '@frontend/types/menu';

export interface SidebarProps {
  menus: MenuItemInterface[];
  onClose?: () => void;
  show: boolean;
  variant: 'stayed' | 'show-hide',
  position: 'right' | 'left',
  showTopSection?: boolean;
  showBottomSection?: boolean;
}