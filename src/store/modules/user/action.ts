import {
  RestStateAction,
  SetAvatarAction,
  SetIdAction,
  SetNameAction,
  SetTokenAction,
  UserActionType,
  UserState
} from './interface';

export const resetState = (): RestStateAction => ({
  type: UserActionType.RESET_STATE
});

export const setToken = (
  payload: Pick<UserState, 'token'>
): SetTokenAction => ({
  type: UserActionType.SET_TOKEN,
  payload
});

export const setName = (payload: Pick<UserState, 'name'>): SetNameAction => ({
  type: UserActionType.SET_NAME,
  payload
});

export const setAvatar = (
  payload: Pick<UserState, 'avatar'>
): SetAvatarAction => ({
  type: UserActionType.SET_AVATAR,
  payload
});

export const setId = (payload: Pick<UserState, 'id'>): SetIdAction => ({
  type: UserActionType.SET_ID,
  payload
});
