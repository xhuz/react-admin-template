import {RouterState} from 'connected-react-router';
import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppState} from './modules/app';
import {UserState} from './modules/user';

export * from './modules/app';
export * from './store';

export type GeneralEffectAction<R, A extends string> = ThunkAction<
  R,
  MyStore,
  unknown,
  Action<A>
>;

export type EffectAction<T = any> = GeneralEffectAction<Promise<T>, string>;

export type DispatchEffect = ThunkDispatch<MyStore, unknown, Action<string>>;

export interface MyStore {
  app: AppState;
  user: UserState;
  router: RouterState;
}
