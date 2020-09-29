export interface UserState {
  token: string;
  id: number;
  name: string;
  avatar: string;
}

export enum ActionType {
  RESET_STATE = '[user] reset state',
  SET_TOKEN = '[user] set token',
  SET_NAME = '[user] set name',
  SET_AVATAR = '[user] set avatar',
  SET_ID = '[user] set id'
}

export interface RestStateAction {
  type: ActionType.RESET_STATE;
}
export interface SetTokenAction {
  type: ActionType.SET_TOKEN;
  payload: {token: string};
}

export interface setNameAction {
  type: ActionType.SET_NAME;
  payload: {name: string};
}

export interface SetAvatarAction {
  type: ActionType.SET_AVATAR;
  payload: {avatar: string};
}

export interface SetIdAction {
  type: ActionType.SET_ID;
  payload: {id: number};
}

export type UserAction =
  | RestStateAction
  | SetTokenAction
  | setNameAction
  | SetAvatarAction
  | SetIdAction;
