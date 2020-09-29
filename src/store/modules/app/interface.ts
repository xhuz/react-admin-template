import {RouteConfig} from '../../../router/config';

export interface AppState {
  sidebar: {
    opened: 0 | 1;
  };
  device: string;
  menuList: RouteConfig[];
  showMenuList: RouteConfig[];
}
export enum ActionType {
  TOGGLE_SIDEBAR = '[app] toggle sidebar',
  CLOSE_SIDEBAR = '[app] close sidebar',
  TOGGLE_DEVICE = '[app] toggle device'
}

export interface ToggleSidebarAction {
  type: ActionType.TOGGLE_SIDEBAR;
}

export interface CloseSidebarAction {
  type: ActionType.CLOSE_SIDEBAR;
}

export interface ToggleDeviceAction {
  type: ActionType.TOGGLE_DEVICE;
  payload: string;
}

export type AppAction =
  | ToggleDeviceAction
  | ToggleSidebarAction
  | CloseSidebarAction;
