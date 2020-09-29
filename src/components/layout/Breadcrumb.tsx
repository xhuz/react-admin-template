import {Breadcrumb as AntdBreadcrumb} from 'antd';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useGetter} from '../../hooks';
import {RouteConfig} from '../../router/config';
import variable from '../../styles/variables.scss';
import {findParent} from '../../utils/find-parent';

export function Breadcrumb() {
  const {menuList} = useGetter('app');
  const {location} = useGetter('router');

  const [match, setMatch] = useState<RouteConfig[]>([]);
  useEffect(() => {
    let parent = findParent(menuList, location.hash.replace(/^#/, ''));
    const first = parent[0];
    if (!first) return;
    parent = parent.reduce<RouteConfig[]>((result, cur, index) => {
      if (/(?:add|edit|detail)/.test(cur.path) && index > 0) {
        const last = result[result.length - 1];
        result[result.length - 1] = {
          path: last.path,
          meta: {
            title: last.meta?.title ?? '',
            icon: last.meta?.icon,
            isClick: true
          }
        };
      }
      return [...result, cur];
    }, []);
    if (first.path !== '/dashboard') {
      parent.unshift({
        path: '/dashboard',
        meta: {title: '控制台', isClick: true}
      });
    }

    setMatch([...parent]);
  }, [location]);
  return (
    <AntdBreadcrumb
      style={{
        height: variable.navbarHeight,
        lineHeight: variable.navbarHeight
      }}
    >
      {match.map(m => (
        <AntdBreadcrumb.Item key={m.path}>
          {m.meta?.isClick ? (
            <Link to={m.path}>{m.meta?.title}</Link>
          ) : (
            m.meta?.title
          )}
        </AntdBreadcrumb.Item>
      ))}
    </AntdBreadcrumb>
  );
}
