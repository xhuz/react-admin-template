import {remove} from 'nprogress';
import {getToken, removeToken} from '../../../utils/token';
import {ActionType, UserAction, UserState} from './interface';

const getDefaultUserState = (): UserState => ({
  token: getToken(),
  name: '',
  avatar: '',
  id: 0
});

export const userReducer = (
  state = getDefaultUserState(),
  action: UserAction
) => {
  switch (action.type) {
    case ActionType.RESET_STATE: {
      removeToken();
      return getDefaultUserState();
    }
    case ActionType.SET_NAME:
      return {...state, ...action.payload};
    case ActionType.SET_AVATAR:
      return {...state, ...action.payload};
    case ActionType.SET_TOKEN:
      return {...state, ...action.payload};
    case ActionType.SET_ID:
      return {...state, ...action.payload};
    default: {
      const _: never = action;
      return state;
    }
  }
};
