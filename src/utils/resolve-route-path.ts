import {RouteConfig} from '../router/config';
import {resolveUrl} from './resolve-url';

export const resolveRoutePath = (
  routes: RouteConfig[],
  parent?: RouteConfig
): RouteConfig[] => {
  return routes.map(route => {
    if (parent) {
      route.path = resolveUrl(parent.path, route.path);
    }
    if (route.children && route.children.length > 0) {
      resolveRoutePath(route.children, route);
    }
    return route;
  });
};
