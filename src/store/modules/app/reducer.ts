import {getRouteTree} from '../../../router/config';
import {bool} from '../../../utils/bool';
import {filterRoute} from '../../../utils/filter-route';
import {resolveRoutePath} from '../../../utils/resolve-route-path';
import {storage} from '../../../utils/storage';
import {AppAction, AppActionType, AppState} from './interface';

const menuList = resolveRoutePath(getRouteTree());
const showMenuList = resolveRoutePath(filterRoute(getRouteTree()));
export const appState: AppState = {
  sidebar: {
    opened: bool(storage.getItem('sidebarStatus')) ? 1 : 0
  },
  device: 'desktop',
  menuList,
  showMenuList
};

export const appReducer = (state = appState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.TOGGLE_SIDEBAR: {
      const opened = bool(state.sidebar.opened) ? 0 : 1;
      storage.setItem('sidebarStatus', opened.toString());
      return {...state, sidebar: {opened}};
    }
    case AppActionType.CLOSE_SIDEBAR: {
      return {...state, sidebar: {opened: 0}};
    }
    case AppActionType.TOGGLE_DEVICE: {
      return {...state, device: action.payload};
    }
    default: {
      const _: never = action;
      return state;
    }
  }
};
