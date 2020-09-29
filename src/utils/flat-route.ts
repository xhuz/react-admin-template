import {RouteConfig} from '../router/config';
import {resolveUrl} from './resolve-url';

export const flatRoute = (
  routes: RouteConfig[],
  parent?: RouteConfig,
  result: RouteConfig[] = []
) => {
  routes.forEach(route => {
    let tmp;
    if (parent) {
      tmp = {...route, path: resolveUrl(parent.path, route.path)};
    } else {
      tmp = route;
    }
    result.push(tmp);
    if (tmp.children) {
      flatRoute(tmp.children, tmp, result);
    }
  });
  return result;
};
