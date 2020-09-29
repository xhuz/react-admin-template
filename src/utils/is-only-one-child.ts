import {RouteConfig} from '../router/config';

export const isOnlyOneChild = (children: RouteConfig[] = []) => {
  return (
    (children.length === 0 || children.length === 1) &&
    (!children[0]?.children || !children[0]?.children?.length)
  );
};
