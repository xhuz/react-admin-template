import {storage} from './storage';

export const getToken = () => {
  return storage.getItem('token');
};

export const setToken = (token: string) => {
  storage.setItem('token', token);
};

export const removeToken = () => {
  storage.removeItem('token');
};
