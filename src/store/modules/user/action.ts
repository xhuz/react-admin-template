import {
  ActionType,
  RestStateAction,
  SetAvatarAction,
  SetIdAction,
  setNameAction,
  SetTokenAction,
  UserState
} from './interface';

export const resetState = (): RestStateAction => ({
  type: ActionType.RESET_STATE
});

export const setToken = (
  payload: Pick<UserState, 'token'>
): SetTokenAction => ({
  type: ActionType.SET_TOKEN,
  payload
});

export const setName = (payload: Pick<UserState, 'name'>): setNameAction => ({
  type: ActionType.SET_NAME,
  payload
});

export const setAvatar = (
  payload: Pick<UserState, 'avatar'>
): SetAvatarAction => ({
  type: ActionType.SET_AVATAR,
  payload
});

export const setId = (payload: Pick<UserState, 'id'>): SetIdAction => ({
  type: ActionType.SET_ID,
  payload
});
