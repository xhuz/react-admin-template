export interface UserState {
  token: string;
  id: number;
  name: string;
  avatar: string;
}

export enum UserActionType {
  RESET_STATE = '[user] reset state',
  SET_TOKEN = '[user] set token',
  SET_NAME = '[user] set name',
  SET_AVATAR = '[user] set avatar',
  SET_ID = '[user] set id'
}

export interface RestStateAction {
  type: UserActionType.RESET_STATE;
}
export interface SetTokenAction {
  type: UserActionType.SET_TOKEN;
  payload: {token: string};
}

export interface SetNameAction {
  type: UserActionType.SET_NAME;
  payload: {name: string};
}

export interface SetAvatarAction {
  type: UserActionType.SET_AVATAR;
  payload: {avatar: string};
}

export interface SetIdAction {
  type: UserActionType.SET_ID;
  payload: {id: number};
}

export type UserAction =
  | RestStateAction
  | SetTokenAction
  | SetNameAction
  | SetAvatarAction
  | SetIdAction;
