import {RouteComponentProps} from 'react-router-dom';
import {loader} from '../utils/loader';

export interface RouteConfig {
  path: string;
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  hidden?: boolean;
  meta?: {
    title: string;
    icon?: string;
    [key: string]: any;
  };
  children?: RouteConfig[];
}

/**
 * 尽量不要直接导入这个对象去使用，应该调用getRouteTree方法返回一个副本
 */
export const constantRouter: RouteConfig[] = [
  {
    path: '/dashboard',
    component: loader(() => import('../views/dashboard/Dashboard')),
    meta: {title: '控制台', icon: 'dashboard'}
  }
];

/**
 *  返回一个静态路由的副本,会去掉component属性
 */
export const getRouteTree = (): RouteConfig[] =>
  JSON.parse(JSON.stringify(constantRouter));
