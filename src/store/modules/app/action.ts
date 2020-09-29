import {
  ActionType,
  CloseSidebarAction,
  ToggleDeviceAction,
  ToggleSidebarAction
} from './interface';

export const toggleSidebar = (): ToggleSidebarAction => ({
  type: ActionType.TOGGLE_SIDEBAR
});
export const closeSidebar = (): CloseSidebarAction => ({
  type: ActionType.CLOSE_SIDEBAR
});
export const toggleDevice = (payload: string): ToggleDeviceAction => ({
  type: ActionType.TOGGLE_DEVICE,
  payload
});
