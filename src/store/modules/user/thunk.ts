import {EffectAction} from '../..';
import {login, logout, UserLogin, userInfo} from '../../../api/user';
import {resetState, setAvatar, setId, setName, setToken} from './action';
import * as localToken from '../../../utils/token';
import {push} from 'connected-react-router';

export const loginEffect = (
  data: UserLogin
): EffectAction => async dispatch => {
  const {token} = await login(data);
  dispatch(setToken({token}));
  localToken.setToken(token);
};

export const logoutEffect = (): EffectAction => async dispatch => {
  await logout();
  dispatch(resetState());
};

export const getUserInfoEffect = (): EffectAction => async dispatch => {
  const info = await userInfo();
  dispatch(setName({name: info.username}));
  dispatch(setId({id: info.id}));
  dispatch(
    setAvatar({
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
    })
  );
};
