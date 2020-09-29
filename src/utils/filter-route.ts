import {RouteConfig} from '../router/config';

export const filterRoute = (routes: RouteConfig[]) => {
  return routes.filter(route => {
    if (route.children && route.children.length > 0) {
      route.children = filterRoute(route.children);
    }
    return !route.hidden;
  });
};
