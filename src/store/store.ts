import {connectRouter} from 'connected-react-router';
import {createBrowserHistory, History} from 'history';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from './modules/app';
import {userReducer} from './modules/user';

const isDev = process.env.NODE_ENV !== 'production';

export const history = createBrowserHistory();

const createReducers = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
    user: userReducer
  });

const middleware = () => {
  if (isDev) {
    return applyMiddleware(thunk /* logger */);
  } else {
    return applyMiddleware(thunk);
  }
};
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(
  createReducers(history),
  isDev ? composeEnhancers(middleware()) : middleware()
);
