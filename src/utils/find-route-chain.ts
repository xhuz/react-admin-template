import {pathToRegexp} from 'path-to-regexp';
import {RouteConfig} from '../router/config';

export const findRouteChain = (
  routes: RouteConfig[],
  path: string
): RouteConfig | undefined => {
  return routes.find(route => {
    if (route.children && route.children.length > 0) {
      return findRouteChain(route.children, path);
    }
    return pathToRegexp(route.path).test(path);
  });
};
