import {ConnectedRouter} from 'connected-react-router';
import React from 'react';
import {HashRouter, Redirect, Switch} from 'react-router-dom';
import {GuardedRoute, GuardProvider} from 'react-router-guards';
import {BaseLayout} from '../components/layout';
import {Loading} from '../components/loading/Loading';
import {history} from '../store/store';
import {flatRoute} from '../utils/flat-route';
import {loader} from '../utils/loader';
import {constantRouter, RouteConfig} from './config';
import {guard} from './guard';

const generateRoute = (routesConfig: RouteConfig[]) => {
  const routes = flatRoute(routesConfig).filter(route => route.component);

  return (
    <Switch>
      {routes.map(route => (
        <GuardedRoute
          loading={Loading}
          exact
          key={route.path}
          path={route.path}
          meta={route.meta}
          component={route.component}
        ></GuardedRoute>
      ))}
      <Redirect exact from="/" to="/dashboard"></Redirect>
      <Redirect to="/404"></Redirect>
    </Switch>
  );
};

export function RouterView() {
  return (
    <ConnectedRouter history={history}>
      <HashRouter>
        <GuardProvider guards={[guard]} error="/404">
          <Switch>
            <GuardedRoute
              path="/login"
              exact
              meta={{title: '登录'}}
              component={loader(() => import('../views/login/Login'))}
            ></GuardedRoute>
            <GuardedRoute
              path="/404"
              exact
              component={loader(() => import('../views/404/404'))}
            ></GuardedRoute>
            <BaseLayout>{generateRoute(constantRouter)}</BaseLayout>
          </Switch>
        </GuardProvider>
      </HashRouter>
    </ConnectedRouter>
  );
}
