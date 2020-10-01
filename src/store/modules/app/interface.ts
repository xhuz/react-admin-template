import {RouteConfig} from '../../../router/config';

export interface AppState {
  sidebar: {
    opened: 0 | 1;
  };
  device: string;
  menuList: RouteConfig[];
  showMenuList: RouteConfig[];
}
export enum AppActionType {
  TOGGLE_SIDEBAR = '[app] toggle sidebar',
  CLOSE_SIDEBAR = '[app] close sidebar',
  TOGGLE_DEVICE = '[app] toggle device'
}

export interface ToggleSidebarAction {
  type: AppActionType.TOGGLE_SIDEBAR;
}

export interface CloseSidebarAction {
  type: AppActionType.CLOSE_SIDEBAR;
}

export interface ToggleDeviceAction {
  type: AppActionType.TOGGLE_DEVICE;
  payload: string;
}

export type AppAction =
  | ToggleDeviceAction
  | ToggleSidebarAction
  | CloseSidebarAction;
