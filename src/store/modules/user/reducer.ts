import {getToken, removeToken} from '../../../utils/token';
import {UserAction, UserActionType, UserState} from './interface';

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
    case UserActionType.RESET_STATE: {
      removeToken();
      return getDefaultUserState();
    }
    case UserActionType.SET_NAME:
      return {...state, ...action.payload};
    case UserActionType.SET_AVATAR:
      return {...state, ...action.payload};
    case UserActionType.SET_TOKEN:
      return {...state, ...action.payload};
    case UserActionType.SET_ID:
      return {...state, ...action.payload};
    default: {
      const _: never = action;
      return state;
    }
  }
};
