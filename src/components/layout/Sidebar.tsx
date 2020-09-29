import {Layout} from 'antd';
import React from 'react';
import {useGetter} from '../../hooks';
import vars from '../../styles/variables.scss';
import {ScrollBar} from '../scrollbar';
import {SidebarMenu} from './SidebarMenu';

const {Sider} = Layout;

export function Sidebar() {
  const {
    sidebar: {opened},
    device
  } = useGetter('app');

  return (
    <Sider
      style={{minHeight: '100vh', backgroundColor: vars.menuBg}}
      className="side-container"
      collapsible
      collapsed={opened ? false : true}
      trigger={null}
      defaultCollapsed={device === 'mobile' ? true : false}
    >
      <ScrollBar
        style={{height: '100vh', overflow: 'hidden'}}
        options={{
          suppressScrollX: false // https://github.com/mdbootstrap/perfect-scrollbar#suppressscrollx-boolean
        }}
      >
        <SidebarMenu></SidebarMenu>
      </ScrollBar>
    </Sider>
  );
}
