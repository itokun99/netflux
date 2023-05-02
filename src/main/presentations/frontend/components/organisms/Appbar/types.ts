import { User } from '@entities/user';
export interface AppbarState {
  sidebarReady: boolean;
  showSidebar: boolean;
  searchBarFocus: boolean;
  showLeftSection: boolean;
}

export type AppbarActionType =
'toggle-sidebar' |
'ready-sidebar' |
'searchbar-focus' |
'searchbar-blur' |
'reset'


export interface AppbarProps {
  showLogo?: boolean;
  showMenu?: boolean;
  showSearchbar?: boolean;
  showActionButton?: boolean;
  fullContainer?: boolean;
  user?: User
}