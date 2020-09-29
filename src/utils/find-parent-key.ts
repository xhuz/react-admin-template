import {pathToRegexp} from 'path-to-regexp';

type Tree = {
  path: string;
  children?: Tree[];
};

export const findParentKey = <T extends Tree>(route: T[], path: string) => {
  const invoke = <P extends Tree>(
    data: P[],
    path: string,
    record: string[] = []
  ): string[] =>
    data.reduce((result: string[], cur: P) => {
      if (pathToRegexp(cur.path).test(path)) {
        return [...record];
      }
      if (cur.children && cur.children.length > 0) {
        return [
          ...result,
          ...invoke(cur.children, path, [...record, cur.path])
        ];
      }
      return result;
    }, []);
  return invoke(route, path);
};
