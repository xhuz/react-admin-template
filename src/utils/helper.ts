import {RouteConfig} from '../router/config';

// export const findReleaseKeys = (
//   route: RouteConfig,
//   parent?: RouteConfig,
//   keys: Set<any> = new Set()
// ): any[] => {
//   if (route.children && route.children.length > 0) {
//     route.children.forEach(r => {
//       findReleaseKeys(r, route, keys);
//     });
//   } else {
//     if (!parent) {
//       console.log(route.path);
//       keys.add(route.path);
//     } else {
//       console.log(parent.path);
//       keys.add(parent.path);
//     }
//   }

//   return [...keys];
// };

// export const findReleaseKeys = (
//   routes: RouteConfig[],
//   path: string,
//   keys: any[] = []
// ): any[] => {
//   for (const route of routes) {
//     keys.push(route.path);
//     if (route.path === path) {
//       keys.pop();
//       return keys;
//     } else if (route.children && route.children.length > 0) {
//       return findReleaseKeys(route.children, path, keys);
//     } else {
//       keys.pop();
//     }
//   }
//   return keys;
// };
export const findParentKeys1 = (
  route: RouteConfig,
  path: string,
  keys: any[] = [],
  going = true
): string[] => {
  if (route.children && route.children.length > 0) {
    for (const child of route.children) {
      if (!going) break;
      keys.push(child.path);
      if (child.path === path) {
        going = false;
      } else if (child.children && child.children.length > 0) {
        findParentKeys1(child, path, keys, going);
      } else {
        keys.pop();
      }
    }
    if (going) keys.pop();
  }
  return keys;
};

// export const getParent = (
//   route: RouteConfig,
//   path: string,
//   keys: string[] = []
// ) => {
//   if (route.children && route.children.length > 0) {
//     route.children.reduce((result: string[], cur: RouteConfig) => {
//       if (cur.path === path) {
//         return [...keys];
//       }
//       if (cur.children && cur.children.length > 0) {
//         return [...result, ...getParent(cur, path, [...keys])];
//       }
//       return result;
//     }, []);
//   }
//   return keys;
// };

// export const findParentKeys = (route: RouteConfig, path: string) => {
//   const invoke = (
//     data: RouteConfig[],
//     path: string,
//     record: string[] = []
//   ): string[] =>
//     data.reduce((result: string[], cur: RouteConfig) => {
//       if (cur.path === path) {
//         return [...record];
//       }
//       if (cur.children && cur.children.length > 0) {
//         return [
//           ...result,
//           ...invoke(cur.children, path, [...record, cur.path])
//         ];
//       }
//       return result;
//     }, []);
//   if (route.children && route.children.length > 0) {
//     return invoke(route.children, path);
//   }
//   return [];
// };
