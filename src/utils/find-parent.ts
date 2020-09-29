import {pathToRegexp} from 'path-to-regexp';
import {RouteConfig} from '../router/config';

export const findParent = (route: RouteConfig[], path: string) => {
  const invoke = (
    data: RouteConfig[],
    path: string,
    record: RouteConfig[] = []
  ): RouteConfig[] =>
    data.reduce((result: RouteConfig[], cur: RouteConfig) => {
      if (pathToRegexp(cur.path).test(path)) {
        return [...record, cur];
      }
      if (cur.children && cur.children.length > 0) {
        return [...result, ...invoke(cur.children, path, [...record, cur])];
      }
      return result;
    }, []);
  return invoke(route, path);
};
