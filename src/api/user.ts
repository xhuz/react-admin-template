import {request} from '../utils/request';

export interface UserLogin {
  username: string;
  password: string;
}

export const login = (data: UserLogin) =>
  request.post<{token: string}>('user/login', data);

export const logout = () => request.get('user/logout');

export const userInfo = () =>
  request.get<{id: number; username: string}>('user/userInfo');
