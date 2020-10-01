import {
  AppActionType,
  CloseSidebarAction,
  ToggleDeviceAction,
  ToggleSidebarAction
} from './interface';

export const toggleSidebar = (): ToggleSidebarAction => ({
  type: AppActionType.TOGGLE_SIDEBAR
});
export const closeSidebar = (): CloseSidebarAction => ({
  type: AppActionType.CLOSE_SIDEBAR
});
export const toggleDevice = (payload: string): ToggleDeviceAction => ({
  type: AppActionType.TOGGLE_DEVICE,
  payload
});
