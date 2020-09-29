import {Menu} from 'antd';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useGetter} from '../../hooks';
import {toggleSidebar} from '../../store';
import {findParentKey} from '../../utils/find-parent-key';
import {SidebarMenuItem} from './SidebarMenuItem';

export const SidebarMenu = () => {
  const router = useGetter('router');
  const routePath = router.location.hash
    .substring(1)
    .replace(/\/(?:add|edit|detail).*/, '');
  const {
    sidebar: {opened},
    device,
    showMenuList
  } = useGetter('app');
  const [activeMenu, setActiveMenu] = useState<any[]>([routePath]);

  const dispatch = useDispatch();

  const [keys, setKeys] = useState<any[]>([]);

  const computeOpenKeys = (path: string) => {
    return findParentKey(showMenuList, path);
  };

  // useEffect(() => {
  //   const openKeys = computeOpenKeys(activeMenu[0]);
  //   setKeys([...openKeys]);
  // }, [opened]);

  // 路由,开启状态,和设备变化重新计算sub menu open key
  useEffect(() => {
    // 关闭状态清空open key把控制权交会给Menu组件本身
    if (!opened) {
      setKeys([]);
    } else {
      const openKeys = computeOpenKeys(routePath);
      setKeys([...openKeys]);
    }
  }, [opened, device, router]);

  // 路由变化重新计算当前激活的菜单
  useEffect(() => {
    setActiveMenu([routePath]);
  }, [router]);

  const menuChangeHandle = (openKeys: string[]) => {
    setKeys(openKeys);
  };

  const menuClickHandle = () => {
    if (device === 'mobile') {
      dispatch(toggleSidebar());
    }
  };

  return (
    <Menu
      theme="dark"
      style={{backgroundColor: 'transparent'}}
      mode={opened ? 'inline' : 'vertical'}
      inlineIndent={10}
      openKeys={keys}
      selectedKeys={activeMenu}
      // @ts-ignore
      onOpenChange={menuChangeHandle}
      onClick={menuClickHandle}
    >
      {showMenuList.map(menu => (
        <SidebarMenuItem key={menu.path} route={menu}></SidebarMenuItem>
      ))}
    </Menu>
  );
};
