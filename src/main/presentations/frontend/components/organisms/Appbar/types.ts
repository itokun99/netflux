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
