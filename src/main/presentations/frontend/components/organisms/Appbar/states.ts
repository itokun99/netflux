import type { Reducer } from 'react';
import type { AppbarState, AppbarActionType } from './types';

export const appbarState: AppbarState = {
  sidebarReady: false,
  showSidebar: false,
  searchBarFocus: false,
  showLeftSection: true,
}

export const appbarReducer: Reducer<AppbarState, { type: AppbarActionType, value?: any }> = (state, action) => {
  switch (action.type) {
    case 'toggle-sidebar':
      return { ...state, showSidebar: !state.showSidebar };
    case 'ready-sidebar':
      return { ...state, sidebarReady: true };
    case 'searchbar-focus':
      return {
        ...state,
        searchBarFocus: true,
        showLeftSection: false
      }
    case 'searchbar-blur':
      return {
        ...state,
        searchBarFocus: false,
        showLeftSection: true
      }
    case 'reset':
      return { ...appbarState }
    default:
      return state;
  }
}