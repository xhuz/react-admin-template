import {Menu} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import {useGetter} from '../../hooks';
import {RouteConfig} from '../../router/config';
import {isOnlyOneChild} from '../../utils/is-only-one-child';
import {SvgIcon} from '../svg-icon/SvgIcon';

interface SidebarMenuProps {
  route: RouteConfig;
  isNest?: boolean;
}

const marginRight = {marginRight: '15px'};

/**
 *  菜单Item组件，递归生成嵌套
 * @param {SidebarMenuProps} props
 * @param {RouteConfig} props.route
 * @param {boolean} props.isNest
 * @param {Object} extractProps 父组件传递的其他props，解构到子组件上面
 */
export const SidebarMenuItem = ({
  route,
  isNest = false,
  ...extractProps
}: SidebarMenuProps) => {
  const {
    sidebar: {opened}
  } = useGetter('app');

  if (isOnlyOneChild(route.children)) {
    const child =
      route.children && route.children[0] ? route.children[0] : route;
    return (
      <Menu.Item
        {...extractProps}
        key={route.path}
        title={
          /* 菜单不是折叠，并且不是子菜单显示title */
          !opened && !isNest ? route.meta?.title : false
        }
        icon={
          child.meta?.icon && (
            <SvgIcon style={marginRight} iconName={child.meta.icon} />
          )
        }
      >
        <Link to={route.path}></Link>

        {isNest || opened ? child.meta?.title : false}
      </Menu.Item>
    );
  } else {
    return (
      <Menu.SubMenu
        {...extractProps}
        key={route.path}
        popupClassName="sub-menu"
        title={
          /* 如果是嵌套的始终显示title， 不是嵌套，并且菜单折叠时不显示title */
          isNest ? route.meta?.title : opened ? route.meta?.title : false
        }
        icon={
          route.meta?.icon && (
            <SvgIcon style={marginRight} iconName={route.meta.icon} />
          )
        }
      >
        {route.children?.map(i => (
          // 递归调用自己
          <SidebarMenuItem key={i.path} route={i} isNest={true} />
        ))}
      </Menu.SubMenu>
    );
  }
};
